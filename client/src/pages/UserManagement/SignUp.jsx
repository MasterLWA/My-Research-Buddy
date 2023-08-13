import React from "react";
import "../../Style/UserManagement/SignUp.css";

const SignUp = () => {
    return(
        <div className="signUp container-fluid" id="signUp">
          <form style={{textAlign: "center"}}>
                <h1>Sign Up</h1>
                <input type="text" placeholder="Username" className="col-6" /> <br/>
                    <div className="row col-6" style={{margin: "auto"}}>
                        <input type="text" placeholder="First Name" className="col-6" />
                        <input type="text" placeholder="Last Name" className="col-6" />
                    </div>
                <input type="text" placeholder="Email" className="col-6" /> <br />
                <input type="role" placeholder="Role" className="col-6" /> <br />
                <input type="password" placeholder="Password" className="col-6" /> <br />
                <button type="submit">Sign Up</button> <br />
                <p>Already have an account? <a href="/login">Login</a></p>
          </form>
        </div>
    )
}

export default SignUp;