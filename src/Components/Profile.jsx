import React, { useEffect } from 'react'
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';

function Profile() {
    const [open, setOpen] = useState(false);
    const [userProfile, setUserProfile] = useState({
        email: "",
        github: "",
        linkedin: "",
        password: "",
        profile: "",
        username: ""
    })
    const [existingImage, setExistingImage] = useState("")
    const [preview, setPreview] = useState("")

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        if (user.profile !== "") {
            setUserProfile({
                ...userProfile,
                username: user.username,
                email: user.email,
                password: user.password,
                profile: "",
                github: user.github,
                linkedin: user.linkedin
            })
        } else {
            setExistingImage("test url")
        }
    }, [])
    return (
        <>
            <div className="container-fluid shadow p-3">
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>My Profile</h4>
                    <button onClick={() => setOpen(!open)} className='btn btn-secondary'><i class="fa-solid fa-caret-down"></i></button>
                </div>

                <Collapse in={open}>
                    <div className="container-fluid">
                        {/* Upload Profile Picture */}
                        <div className='d-flex justify-content-center align-items-center m-3'>
                            <label htmlFor='profile'>
                                <input type="file" style={{display:"none"}} id='profile' />
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile picture" height={"150px"} />
                            </label>
                        </div>

                        {/* Profile Form */}
                        <div className='mt-5'>
                            <form action="">
                                <input type="text" name="" id="" className='form-control' placeholder='Github' />
                                <input type="text" name="" id="" className='form-control mt-3' placeholder='LinkedIn' />
                            </form>
                        </div>

                        <button className='btn btn-success mt-3'>Save</button>
                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default Profile