import React, { useEffect, useState } from 'react'
import AddProject from './AddProject'
import { userProjectAPI } from '../Services/allAPI'

function MyProjects() {
    const [allProject, setAllProjects] = useState([])

    const getUserProjects = async() => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await userProjectAPI(reqHeader)
            if (result.status === 200) {
                setAllProjects(result.data)
            } else {
                console.log(result);
            }
        } else {
            console.log("Auth fail");
        }
    }

    useEffect(() => {
        getUserProjects()
    }, [])
    return (
        <>
            <div className="container-fluid shadow p-3">
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>My Projects</h4>
                    <AddProject />
                </div>

                <div className='mt-4'>
                    {
                        allProject.length > 0 ?
                        allProject.map((item) => (
                            <div className="container-fluid border d-flex justify-content-between align-items-center mt-2">
                                <h5>{item.title}</h5>
                                <div className="icons ms-auto">
                                    <i className="fa-solid fa-pen m-3 fs-4"></i>
                                    <a className='btn' href={item.github} target='_blank' style={{textDecoration:'none'}}><i className="fa-brands fa-github m-3 fs-4"></i></a>
                                    <i className="fa-solid fa-trash m-3 fs-4"></i>
                                </div>
                            </div>
                        )) :
                        <div className="container-fluid border d-flex justify-content-between align-items-center mt-2">
                            <h5>No Projects are added</h5>
                            <div className="icons ms-auto">
                                <i className="fa-solid fa-pen m-3 fs-4"></i>
                                <i className="fa-brands fa-github m-3 fs-4"></i>
                                <i className="fa-solid fa-trash m-3 fs-4"></i>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default MyProjects