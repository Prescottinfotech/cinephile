import React, { useState } from 'react'
import './Signin.css'
// import loginpic from "../img/log_in.jpg"
import logo from'./img/cinephile-logo.png';
import { NavLink, useNavigate } from 'react-router-dom'
//import "./Login.css"

import validate from "./validation"
const Signin = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({})
    const loginUser = async (e) => {
        e.preventDefault();
       
       

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })

        });

        const data = res.json()
        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        } else {


            window.alert("login succesfully");
            console.log("login succesfully");
            history("/main")
        }

    }
    return (
        <>
            <div class="login-page">
                <div class="form">
                    <div className='main_signin_form'>
                    <img src={logo} alt="Netflix" className='signin_page_logo'/>
                        <h2>Welcome back! <br></br>Login Cinephile is easy.</h2>
                        <p>Welcome to Cinephile. Please put your login Credentials bleow to start using the Cinephile</p>
                        <form action="" class="form" method="POST">
                           <div> <label>Email:</label>
                            <input type="text"
                                placeholder="Email" id="user" name="email" autocomplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                             {errors.email && <p className='fnameerror'>{errors.email}</p>}
                            </div>
                           
                            <label>Password:</label>
                            <input type="password" placeholder="Password" id="pass" autocomplete="off" name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            // oninput="return formvalid()"
                            />
                            {errors.password && <p className='fnameerror'>{errors.password}</p>}
                            {/* <img src="https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"
                             onclick="show()" id="showimg"/> */}


                            {/* <div style={{
                                backgroundImage: `url("")`
                            }}></div>
                            <span id="vaild-pass"></span> */}

                            {/* <a href="https://jacoblisic.com" class="button3" target="_blank" rel="noopener">Hover Me</a> */}

                            <br />
                            <br />
                            <input type="submit" value="Signin" class="submit-btn" onClick={loginUser} />

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Signin;