import React from 'react'
import { Link } from "react-router-dom";
import "./Login.css"
import "../Account.css"

export function Login() {
    return (
         <section id="login-section">
             <div className="login-container container-lr center">
                 <div className="login-head head-lr">
                     <h1>Your <span>Account</span></h1>
                 </div>
                 <div className="login-form form-lr center">
                     <form action="">
                      <input type="text" placeholder="Username" required/>
                      <input type="password" placeholder="Password" required/>
                      <div className="login-footer footer-lr">
                        <p>Don't have an account? <Link to="/Register">Create one.</Link></p>
                        <input type="submit" value="Login"/>
                      </div>
                     </form>
                 </div>
             </div>
         </section>
    )
}
