import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { deleteProjectAPI, userProjectAPI } from '../Services/allAPI'
import { AddProjectResponseContext } from '../Contexts/ContextShare'
import EditProject from './EditProject'
import { EditProjectResponseContext } from '../Contexts/ContextShare'
import { toast } from 'react-toastify'

function MyProjects() {
    const [allProject, setAllProjects] = useState([])
    const {editProjectResponse, setEditProjectResponse} = useContext(EditProjectResponseContext)
    console.log(editProjectResponse);
    const {addProjectResponse, setAddProjectResponse} = useContext(AddProjectResponseContext)
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
                // console.log(result);
            }
        } else {
            console.log("Auth fail");
        }
    }

    useEffect(() => {
        getUserProjects()
    }, [addProjectResponse, editProjectResponse])

    const handleDelete = async(id) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const result = await deleteProjectAPI(id, reqHeader)
        if (result.status === 200) {
            getUserProjects()
        } else {
            toast.error(result.response.data)
        }
    }
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
                                    <div> <EditProject project = {item}/> </div>
                                    <a className='btn' href={item.github} target='_blank' style={{textDecoration:'none'}}><i className="fa-brands fa-github m-3 fs-4"></i></a>
                                    <i className="fa-solid fa-trash m-3 fs-4" onClick={() => handleDelete(item._id)}></i>
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