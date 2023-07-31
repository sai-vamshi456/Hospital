import video from "./video.jpg";
import test from "./test.jpg";
import medicine from "./medicine.png";
import "./Main.css";

export default function Main(){

    function Box(props){
        return(
            <div className="boxes">
                <img src={props.img} />
                <h3>{props.name}</h3>
            </div>
        )
    }

    return (
        <div className="imp">
            <Box img={video} name="Video Consultance" />
            <Box img={test} name="Lab Tests"  />
            <Box img={medicine} name="Door Delivery" />    
        </div>
    );
}