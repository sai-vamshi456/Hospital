import { useState } from "react";
import "./User.css";
export default function User(){
    
    const [page,setPage] = useState();
    const [file,setFile] = useState();

    function handleFile(event){
        setFile(event.target.files[0]);
    }

    function handleSubmit(){
        const formData=new FormData();
        formData.append('file',file);
        fetch(
            'url',
            {
                method: "POST",
                body:formData
            }
        ).then((response) => response.json()).then(
            (result)=>{
                console.log('success',result);
            }
        ).catch(error=>{
            console.error("Error: ",error);
        })
    }


    
    function Profile(){
        return(
            <form className="profile" onSubmit={handleSubmit}>
                <h2>Name: username </h2> 
                <h2>Password: password</h2>
                <input onChange={handleFile} type="file" placeholder="Upload your local files"/>
                <button type="submit" >Submit</button>
            </form>
        )
    }


    // function handleSubmit(){
    //     alert("Your files Uploaded");

    // }
    function handleFiles(){}

    function handleProfile(){
        setPage(<Profile/>);
    }

    function handleSettings(){

    }
    
    return(
        <div className="user">
            <div className="user-left">
                <button onClick={handleProfile}>Your Profile</button>
                <button onClick={handleFiles}>Your Files</button>
                <button onClick={handleSettings}>Settings</button>
            </div>
            <div className="user-right">
                {page}
            </div>
        </div>
    )
}