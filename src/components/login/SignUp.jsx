import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import GoogleBtns from './GoogleBtns';
import OrDivider from './OrDivider';

// css properties
const pfl_dp_upl = {
    marginBottom: '30px',
    display: "inline-block",
    cursor: "pointer"
}

const Signup = () => {

    // form data's store
    const [formData, setFormData] = useState({});

    // set alert message
    const [alert, setAlert] = useState({ firstName: false })

    // browser speechSynthesis api
    const synth = window.speechSynthesis;

    // input file handler
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // converting file into the url format
            const compReader = new FileReader();
            compReader.onload = () => {
                setFormData((obj) => ({ ...obj, image: compReader.result }));
            }
            compReader.onerror = error => {
                alert("Unable to select file!");
            }

            compReader.readAsDataURL(file);
        }
    };

    // onchange handler
    const onchangeHandler = (e) => {
        // update input value
        const { name } = e.target;
        const value = e.target.value.split('').filter(e => e !== ' ').join('');
        setFormData((obj) => ({ ...obj, [name]: value }));
    }

    // onsubmit form handler
    const formHandler = (e) => {
        e.preventDefault();
        // Regular expression for a email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // convert object into the array 
        const objEntries = Object.entries(formData);
        // console.log(objEntries)
        // checking form data for validation
        if (objEntries.length > 3) {
            for (let val of objEntries) {

                // checking empty input
                if (val[0] && val[1].length) {
                    setAlert(x => ({ ...x, [val[0]]: false }));
                }
                // checking empty input
                if (val[1] === '') {
                    setAlert(x => ({ ...x, [val[0]]: true })); // set alert message
                    if (objEntries[0][0] === 'firstName' && objEntries[0][1]) { // checking first name
                        speechHandler(`${objEntries[0][1]}, Please add valid ${val[0]}`); // speech synthesis
                        return;
                    }
                    speechHandler(`Please add valid ${val[0]}`);
                    return
                } else if (val[0] === 'email') { // checking email validation
                    if (!emailRegex.test(val[1])) {
                        setAlert(x => ({ ...x, [val[0]]: true })); // set alert message
                        speechHandler(`${objEntries[0][1]}, Please add valid ${val[0]}`);
                        return;
                    }
                }
            }
        } else {
            speechHandler(`Please Fill the form correctly first!`);
            return;
        }

        // clearing the form data
        setFormData({});
        setAlert({})
        speechHandler(`Thank you for signing up!`);
    }

    // Speech handler
    const speechHandler = (text) => {
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text, synth.getVoices()[6]); // voices[6] is the voice of my system
        // console.log("synth-1: ", synth);
        synth.speak(utterance);
    }


    return (
        <div className="container">
            <div className="showcase-content">
                <div className="formm">
                    <form onSubmit={formHandler}>
                        <h1>Sign Up</h1>
                        <div className="info">
                            <div className="my_30">
                                <input
                                    style={alert.firstName ? { borderBottom: "2px solid #e02121" } : { borderBottom: "2px solid #4caf50" }}
                                    className="input_style"
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={onchangeHandler}
                                    value={formData.firstName ? formData.firstName : ""} />
                                {alert.firstName && <span className="invalid">require</span>}
                            </div>
                            <div className="my_30">
                                <input
                                    style={alert.lastName ? { borderBottom: "2px solid #e02121" } : { borderBottom: "2px solid #4caf50" }}
                                    className="input_style"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={onchangeHandler}
                                    value={formData.lastName ? formData.lastName : ""} />
                                {alert.lastName && <span className="invalid">require</span>}
                            </div>
                            <div className="my_30">
                                <input
                                    style={alert.email ? { borderBottom: "2px solid #e02121" } : { borderBottom: "2px solid #4caf50" }}
                                    className="input_style"
                                    type="email"
                                    name="email"
                                    placeholder="Email ID"
                                    onChange={onchangeHandler}
                                    value={formData.email ? formData.email : ""} />
                                {alert.email && <span className="invalid">require</span>}
                            </div>

                            <div className="my_30">
                                <input
                                    style={alert.password ? { borderBottom: "2px solid #e02121" } : { borderBottom: "2px solid #4caf50" }}
                                    className="input_style"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={onchangeHandler}
                                    value={formData.password ? formData.password : ""} />
                                {alert.password && <span className="invalid">require</span>}
                            </div>
                        </div>
                        <div
                            style={pfl_dp_upl}>
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="fileInput"
                                onChange={handleFileChange}
                            />
                            <label htmlFor='fileInput'>
                                <img
                                    style={{
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px'
                                    }}
                                    src={`${formData.image ? formData.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/768px-Circle-icons-image.svg.png'}`}
                                    alt='profile-pic' />
                            </label>
                        </div>
                        <div className="btn">
                            <button
                                className="login_btn active_btn"
                                type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <Link to="/" className="link">I have an account</Link>
                </div>

                <OrDivider />
                <GoogleBtns />
            </div>
        </div>
    )
}

export default Signup