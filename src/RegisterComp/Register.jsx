import "./Register.css";
export default function Register(){
    return (
        <form className="register">
            <div className="details">
                <label>Email : </label><br/>
                <input type="text"/><br/>
            </div>
            <div className="details">
                <label>Password : </label><br/>
                <input type="password"/><br/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}