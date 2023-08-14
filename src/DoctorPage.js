import { useStateValue } from "./stateProvider";
function DoctorPage(){
    const [{ doctor,user }, dispatch] = useStateValue();
    return(
        <div> 
          <h1>{doctor.name}</h1>
          <p>location:{doctor.location}</p>
          <p>rating:{doctor.rating}</p>
          <p>specialization:{doctor.specialization}</p>
          <p>about:  {doctor.about}</p>
          <button>Book Appointment</button>
        </div>
    )
}
export default DoctorPage;