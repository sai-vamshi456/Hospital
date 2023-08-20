import { useState } from "react";
import { useEffect } from "react";
import list from "./doctorList";
import "./Appoint.css";
export default function Appointment(){
    const [startTime, setStart] = useState(9);
    const [endTime, setEnd] = useState(16);
    const [slot, setSlot] = useState([]);
    const [titles,setTitles] = useState("Slot Avaliable");
    
    async function setSlots(i) {
        return new Promise((resolve, reject) => {
        setSlot((prev) => {
            return [...prev, i];
        });

        if (slot) {
            resolve("It worked!");
        } else {
            reject(Error("It failed!"));
        }
        });
    }
    useEffect(() => {
        setSlot([]);
        addSlot();
    }, []);

    function addSlot() {
        let i = 0;
        for (i = startTime; i < endTime; i++) {
            console.log(i, i + 1);
            setSlots(i);
        }
    }
    
    function handleSlots(event)
    {
        if(event.currentTarget.style.backgroundColor==="green"){        
            event.currentTarget.style.backgroundColor="red";
            event.currentTarget.style.boxShadow="red";
            event.currentTarget.style.border= "1px solid darkred";
            setTitles("No Slot Avaliable");
        }
        else{
            event.currentTarget.style.backgroundColor="green";
            event.currentTarget.style.boxShadow="green";
            event.currentTarget.style.border="1px solid darkgreen";
            setTitles("Slot Avaliable");
        }
    };

    return (
        <div class="main">
            <div class="conatiner">
                <div class="sub">
                    <div class="image">
                        <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/005/724/584/small_2x/professional-doctor-with-stethoscope-line-icon-female-physicians-specialist-and-assistant-linear-pictogram-isolated-illustration-vector.jpg"
                        width="100"
                        height="100"
                        />
                    </div>
                    <div class="text">
                        <p>
                        <b>Dr. Meera</b>
                        </p>
                        <p>MBBS</p>
                        <p>General Physician</p>
                        <p>5 years Experience </p>
                        <p>Medical Registration Verified</p>
                    </div>
                </div>
            </div>
            <div class="info">
                <h3>ABOUT</h3>
                <p>
                Dr. Meera is a General Physician and Family Physician in Kurnool
                Medicalcollege, Kurnool and has an experience of 7 years in these
                fields. Dr. Meera practices at Tirumala Clinic in Kurnool
                Medicalcollege, Kurnool. She completed MBBS from Dr. NTR University of
                Health Sciences Andhra Pradesh in 2016.
                </p>
            </div>
            <div class="info1">
                <center>
                <table>
                    <tr>
                    <th>Address</th>
                    <th>Work Timings</th>
                    <th>Fee</th>
                    </tr>
                    <tr>
                    <td>ABC , Near Gandhi Road, Kurnool.</td>
                    <td>
                        {startTime}:00 - {endTime}:00 
                    </td>
                    <td>₹500</td>
                    </tr>
                </table>
                </center>
            </div>
            <div class="book">
                HealthConnect: Streamlined Doctors Appointment and Health Record
                Manageme
                <h2>Book Your Slot</h2>
            </div>
            <div class="btn">
                {slot.length > 0 ? (
                slot.map((ele, idx) => {
                    return (
                        <div  className="slots"  key={idx}>
                            <span title={titles} className="bookings" onClick={handleSlots}>
                                {ele} - {ele + 1}
                            </span>
                        </div>
                    );
                })
                ) : (
                <div>No slots available</div>
                )}
            </div>
        </div>
    )
}