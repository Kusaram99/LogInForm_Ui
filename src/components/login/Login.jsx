import React, { useState } from "react";
import './style.css';
import { Link } from "react-router-dom";
import GoogleBtns from "./GoogleBtns";
import OrDivider from "./OrDivider";

const Login = () => {

    // form handler variable
    const [formData, setFormData] = useState({});

    // onchange handler
    const onchangeHandler = (e) => {
        const { name } = e.target
        setFormData((obj) => ({ ...obj, [name]: e.target.value }));
    }

    // onsubmit handler
    const formHandler = (e) => {
        e.preventDefault();
        console.log("logIn data: ", formData);
        setFormData({});
    }

    return (
        <div className="container">
            <div className="showcase-content">
                <div className="formm">
                    <form onSubmit={formHandler}>
                        <h1>Log In</h1>
                        <div className="info">
                            <div className="my_30">
                                <input
                                    className="input_style"
                                    type="email"
                                    name="email"
                                    placeholder="Email or phone number"
                                    required
                                    onChange={onchangeHandler}
                                    value={formData.email ? formData.email : ""} />
                                {/* <span className="invalid">Please add valid email ID</span> */}
                            </div>

                            <div className="my_30">
                                <input
                                    className="input_style"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    onChange={onchangeHandler}
                                    value={formData.password ? formData.password : ""} />
                                {/* <span className="invalid">Please add valid password</span> */}
                            </div>
                        </div>

                        <div>
                            <button
                                className="login_btn active_btn"
                                type="submit">
                                Log In
                            </button>
                        </div>

                    </form>
                    <Link to="signup" className="link">I don't have account</Link>

                </div>
                <OrDivider />
                <GoogleBtns />

            </div>
        </div>
    )
}

export default Login;