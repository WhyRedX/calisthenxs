import React from 'react'
import { Link } from "react-router-dom";
import "./Register.css"
import "../Account.css"
export function Register() {
    return (
        <section id="register-section">
            <div className="register-container container-lr center">
                <div className="register-head head-lr">
                    <h1>Create Your <span>Account</span></h1>
                </div>
                <div className="register-form form-lr center">
                <form>
               <input required type="text" placeholder="Username"/>
               <input required type="text" placeholder="E-mail"/>
               <input required type="number" placeholder="Mobile Number"/>
               <input required type="password" placeholder="Password"/>
               <input required type="password" placeholder="Confirm Password"/>
               <div className="register-footer footer-lr">
                 <p>Have an account already? <Link to="/Login">Sign in!</Link></p>
                  <input type="submit" value="Create an account"/>
               </div>
            </form>
                </div>
            </div>
        </section>
    )
}
