import React from "react";
import { useState } from "react";
import './Signup.css'
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Outlet, link, Link, useNavigate } from 'react-router-dom'
import validate from "./validation"
import logo from './img/cinephile-logo.png';
function Signup() {
    const history = useNavigate();
    // To store form Data in front end side in developer mode

    const [user, setUser] = useState({
        fname: "", lname: "", email: "", password: "", cpassword: "", phone: ""
    });
    const [errors, setErrors] = useState({})

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }
    const PostData = async (e) => {
        e.preventDefault();


        setErrors(validate(user));

        const { fname, lname, email, password, cpassword, phone } = user;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                fname, lname, email, password, cpassword, phone
            }),
        });
        const data = await res.json()
        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");

        } else {
            window.alert("Registration Successfull");
            console.log("Successfull Registration");
            history("/Signin")
        }
    }

    return (
        <>
        <div>
        
            <div className="main_form">
            
                <div className="main_signup_form">
                    <h2>Welcome back! <br></br>Joining Cinephile is easy.</h2>
                    <p>Enter your details and you'll be watching in no time.</p>
                    <form method="POST" onSubmit={PostData} >
                        <div>
                            <input type="text" placeholder="First name"
                                name="fname"
                                value={user.fname}
                                onChange={handleInputs}
                                autoComplete="off"
                                required />
                            {errors.fname && <p className='fnameerror'>{errors.fname}</p>}
                        </div>
                        <div>
                            <input type="text" placeholder="Last Name"
                                name="lname"
                                value={user.lname}
                                onChange={handleInputs}
                                autoComplete="off"
                                required />
                                {errors.lname && <p className='fnameerror'>{errors.lname}</p>}
                        </div>
                        <div>
                            <input type="email" placeholder="Your Email"
                                name="email"
                                value={user.email}
                                onChange={handleInputs}
                                autoComplete="off"
                                required
                               
                            />
                            {errors.email && <p className='fnameerror'>{errors.email}</p>}
                        </div>
                        <div>
                            <input type="password" placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={handleInputs}
                                autoComplete="off"
                                required />
                                {errors.password && <p className='fnameerror'>{errors.password}</p>}
                        </div>
                        <div>
                            <input type="password" placeholder="Confirm Password"
                                name="cpassword"
                                value={user.cpassword}
                                onChange={handleInputs}
                                autoComplete="off"
                                required />
                                {errors.cpassword && <p className='fnameerror'>{errors.cpassword}</p>}
                        </div>
                        <div>
                            <input type="text" placeholder="Your Mobile no"
                                name="phone"
                                value={user.phone}
                                onChange={handleInputs}
                                autoComplete="off"
                                required />
                                {errors.phone && <p className='fnameerror'>{errors.phone}</p>}
                        </div>
                        <div className="button">
                            <input type="submit" value="Register" onClick={PostData} />
                        </div>

                    </form>
                </div>
            </div>
            </div>
        </>
    )
}
export default Signup;