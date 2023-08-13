import { useState } from "react";
import "./Medicine.css";
export default function Medicine(){

    const [inp,setInp] = useState("");
    const [det,setDetails] = useState("");

    function handleMed(event){
        setInp(event.target.value);
    }

    function handleClick(){
        setDetails(inp);
        setInp("");
    }

    return(
        <div className="med">
            <div className="div-top">
                <p>We are Here to Clear your medical doubts<br/>
                Ask our chat bot to clear your doubts and know the related answer.
                </p>
            </div>
            <div className="div-bottom">
                <div className="div-bottom-div">
                    <input type="text" onChange={handleMed} placeholder="Enter the disease you are suffering from" value={inp}/>
                    <button onClick={handleClick} type="submit">Submit</button>
                </div>
                {det}
                <h1>Enter the Disease you are suffering from and get relief with the suggestions given</h1>
            </div>
        </div>
    )
}