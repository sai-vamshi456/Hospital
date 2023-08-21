import "./User.css";
import { useState, useEffect } from "react";
import { storage } from "./firebase";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
  listAll,
} from "firebase/storage";
import { useStateValue } from "./stateProvider";
export default function User() {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [{ user }, dispatch] = useStateValue();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const listRef = ref(storage, `${user.email}`);

    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        console.log(res.items[0].name);
        getDownloadURL(ref(storage, `${user.email}/${res.items[0].name}`))
          .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'

            // This can be downloaded directly:
            const img = document.getElementById("myimg");
            img.setAttribute("src", url);
            // Or inserted into an <img> element
            console.log(url);
          })
          .catch((error) => {
            // Handle any errors
          });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) return;
    const storageRef = ref(storage, `${user.email}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
      {!imgUrl && (
        <div className="outerbar">
          <div className="innerbar" style={{ width: `${progresspercent}%` }}>
            {progresspercent}%
          </div>
        </div>
      )}
      <div>
        <img src="" id="myimg"></img>
      </div>
    </div>
  );
}
