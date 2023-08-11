import "./Login.css";

export default function Login(){

    return (
        <form className="login">
            <div className="details">
                <label>FirstName : </label><br/>
                <input type="text"/><br/>
            </div>
            <div className="details">
                <label>LastName : </label><br/>
                <input type="text"/><br/>
            </div>
            <div className="details">
                <label>Email : </label><br/>
                <input type="text"/><br/>
            </div>
            <div className="details">
                <label>Phone Number : </label><br/>
                <input type="text"/><br/>
            </div>
            <div className="details">
                <label>New Password : </label><br/>
                <input type="password"/><br/>
            </div>
            <div className="details">
                <label>Re-Enter Password : </label><br/>
                <input type="password"/><br/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}