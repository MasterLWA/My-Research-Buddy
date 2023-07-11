import React from 'react';
import '../../Style/UserManagement/SignIn.css';

const SignIn = () => {
    return(
        <div className="signIn container-fluid" id='signIn'>
            <div className=" justify-content-center d-flex">
                <form className="signInForm">
                <h1>Sign In</h1>
                <input type="text" name="name" placeholder="User Name" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit" className='button btn'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;