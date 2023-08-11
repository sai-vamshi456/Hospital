import doctor from "./doctor.jpg";
import aid from "./firstaid.png";
import doc_img from "./doctorsimage.jpg";
import medicine from "./medicine.jfif";
import logo from "./logo.webp";
import "./Main.css";

export default function Main(){

    function Box(props){
        return(
            <div className="boxes">
                <div className="image">
                    <img src={props.img} alt={props.alter} />
                </div>
                <p>{props.name}</p>
            </div>
        )
    }

    return (
        <div className="body-main">
            <div className="poster">
                <img className="logo-poster" src={logo}/>
                <h1>Expertise ensures a proactive approach to your health<br/>
                No fear when we are here
                </h1>
                <img className="doc-img" src={doc_img}/>
            </div>
            <div className="imp">
                <Box img={doctor} alter="Near Doctors" name="Doctors near You" />
                <Box img={aid} alter="First Aid" name="First Aid"  />
                <Box img={medicine} alter="Tablets" name="Medicines used according to issue" />    
            </div>
        </div>
    );
}