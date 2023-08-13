import { useState } from "react";
import "./Doctors.css";
import doc from "./Specialist";
import city from "./CityList";
export default function Doctors(){
    
    const [content,setContent] = useState(<List/>);

    function Box(props){
        return (
            <div className="box">
                <p>{props.area}</p>
                <p>{props.doctor}</p>
            </div>
        )
    }

    function List(){
       // return(
            //<div className="citybox">
            
                // <h1>jknfkjshd</h1>
                // <h4>fdkbjjdfb</h4>
            //</div>
      //  )
    }


    function Navigator(){
        return(
            <div className="doc">
                <select id="country-state" name="country-state">
                    <option>Select the city</option>
                    <option>Adoni</option>
                    <option>Amaravati</option>
                    <option>Anantapur</option>
                    <option>Bengaluru</option>
                    <option>Chittoor</option>
                    <option>Guntur</option>
                    <option>Hyderabad</option>
                    <option>Kadapa</option>
                    <option>Kurnool</option>
                </select>
                <input type="text" placeholder="Specialist You want to search"/>
                <button type="submit">Submit</button>
            </div>
        )
    }

    return (
        <div>
            <Navigator/>
            {content}
        </div>
    )
}