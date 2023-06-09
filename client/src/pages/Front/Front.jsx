import Header from '../../component/Header/Header';
import Sidebar from '../../component/Sidebar/Sidebar';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Front.css';
import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const Front = () => {
    const navigate = useNavigate()

    let [displayValue5, setIsDisplay5] = useState('block')
    let [displayValue6, setIsDisplay6] = useState('none')

    let [displayValue8, setIsDisplay8] = useState('none')
    let [displayValue7, setIsDisplay7] = useState('none')
    const saviourBtn1 = () => {
        setIsDisplay5('none')
        setIsDisplay6('block')
    }
    const saviourBtn2 = () => {
        setIsDisplay5('block')
        setIsDisplay6('none')
    }
    const [credentials, setCredentials] = useState({
        email: "",
        fname: "",
        lname: "",
        phone: "",
        password: "",
    })

    const [credentials1, setCredentials1] = useState({
        email: "",
        password: ""
    })

    const handleChange1 = (e) => {
        setCredentials1(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            // console.log(55);
            // console.log(credentials);
            const result = await axios.post("http://localhost:8080/verify", credentials);
            // console.log(result);
            if (result.data === 0)
                setIsDisplay8('block')
            else {
                setIsDisplay8('none')
                const result = await axios.post("http://localhost:8080/form", credentials);
                console.log(result.data);

                navigate(`/profile/${result.data._id}`, { state: { aboutme: result.data.aboutme, fname: result.data.fname, lname: result.data.lname, email: result.data.email, password: result.data.password, phone: result.data.phone, linkedin: result.data.linkedin, github: result.data.github, facebook: result.data.facebook, twitter: result.data.twitter, instagram: result.data.instagram, website: result.data.website, image: result.data.image, follower: result.data.follower, highesteducation: result.data.highesteducation, whatdoudocurrently: result.data.whatdoudocurrently, image: result.data.image } })

            }
        }
        catch (err) {
            //   navigate("/err", { state: { name: 'wrong inputs', linkie: 'http://localhost:3000' } })
        }
    }



    const handleClick1 = async (e) => {
        e.preventDefault()
        try {
            // console.log(55);
            console.log(credentials1);
            const result = await axios.post("http://localhost:8080/signin", credentials1);
            console.log(result);
            if (result.data === 0)
                setIsDisplay7('block')
            else {

                navigate(`/profile/${result.data._id}`, { state: { aboutme: result.data.aboutme, fname: result.data.fname, lname: result.data.lname, email: result.data.email, password: result.data.password, phone: result.data.phone, linkedin: result.data.linkedin, github: result.data.github, facebook: result.data.facebook, twitter: result.data.twitter, instagram: result.data.instagram, website: result.data.website, image: result.data.image, follower: result.data.follower, highesteducation: result.data.highesteducation, whatdoudocurrently: result.data.whatdoudocurrently, image: result.data.image } })
                setIsDisplay7('none')
                console.log(result.data._id);

            }
        }
        catch (err) {
            //   navigate("/err", { state: { name: 'wrong inputs', linkie: 'http://localhost:3000' } })
        }
    }
    return (
        <div className='main'>
            <Header />
            <div className="frontier">
                <Sidebar />
                <div className="starty" style={{ display: displayValue6 }}>
                    <div className="align_cross">
                        <h1>Sign In
                        </h1>
                        <CloseOutlinedIcon className='ic5' />
                    </div>

                    <div className="formy">

                        <input type="email" name="email" id="email" placeholder="Email Id" className='emaily' onChange={handleChange1} />
                        <input type="password" name="password" id="password" placeholder="Password" className='passwy' onChange={handleChange1} />

                        <p className='Invalid' style={{ display: displayValue7 }}>Invalid credentials</p>
                        <button className='btn55' onClick={handleClick1}>Sign in</button>

                        <p className='dont'>Don't have account? <b className='bold' onClick={saviourBtn2}>Get Started</b></p>


                    </div>

                </div>


                <div className="starty1" style={{ display: displayValue5 }}>
                    <div className="align_cross1">
                        <h1>Sign Up
                        </h1>
                        <CloseOutlinedIcon className='ic5' />
                    </div>

                    <div className="formy1">
                        <input type="text" name="fname" id="fname" placeholder="First Name" className='emaily' onChange={handleChange} />
                        <input type="text" name="lname" id="lname" placeholder="Last Name" className='emaily' onChange={handleChange} />

                        <input type="email" name="email" id="email" placeholder="Email Id" className='emaily' onChange={handleChange} />
                        <input type="text" name="phone" id="phone" placeholder="Phone" className='emaily' onChange={handleChange} />
                        <input type="password" name="password" id="password" placeholder="Password" className='passwy' onChange={handleChange} />

                        <p className='Invalid' style={{ display: displayValue8 }}>Invalid credentials</p>
                        <button className='btn56' onClick={handleClick}>Sign up</button>

                        <p className='dont'>Already have an account? <b className='bold' onClick={saviourBtn1}>Sign in</b></p>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Front
