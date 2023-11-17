import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import { addProjectApi } from '../Services/allAPI';

function AddProject() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setProjectDetails({
            title:"",
            language: "",
            overview: "",
            github: "",
            website: "",
            projectImage: ""
        })
        setPreview("")
    }
    const handleShow = () => setShow(true);

    const [token, setToken] = useState("")
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
        else {
            setToken("")
        }
    },[])

    // Handle project details
    const [projectDetails, setProjectDetails] = useState({
        title:"",
        language: "",
        overview: "",
        github: "",
        website: "",
        projectImage: ""
    })
    const [preview, setPreview] = useState("")

    useEffect(() => {
        if(projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    },[projectDetails.projectImage])

    // Handle add project
    const handleAdd = async(e) => {
        e.preventDefault()
        const {title, language, overview, projectImage, github, website} = projectDetails
        if (!title || !language || !overview || !projectImage || !github || !website) {
            toast.info("Fill all details")
        } else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("overview", overview)
            reqBody.append("projectImage", projectImage)
            reqBody.append("language", language)
            reqBody.append("github", github)
            reqBody.append("website", website)

            if (token) {
                const reqHeader = {
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${token}`
                }
                const result = await addProjectApi(reqBody, reqHeader)
                // console.log(result);

                if (result.statut === 200) {
                    toast.success("Project added successfuly")
                }
                else {
                    console.log(result);
                    toast.error(result.response.data)
                }
            }
        }
    }

    // Test
    console.log(projectDetails);
    return (
        <>
            <ToastContainer />
            <button className='btn-info p-2' onClick={handleShow}>Add Project</button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6">
                            <label>
                                <input type="file" style={{display:"none"}} onChange={(e) => setProjectDetails({...projectDetails, projectImage: e.target.files[0]})} />
                                <img src={preview?preview:"https://getuikit.com/v2/docs/images/placeholder_600x400.svg"} alt="" className='img-fluid'/>
                            </label>
                        </div>
                        <div className="col-6">
                            <input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title} onChange={(e) => setProjectDetails({...projectDetails, title: e.target.value})}/>
                            <input type="text" className='form-control mt-2' placeholder='Language Used' value={projectDetails.language} onChange={(e) => setProjectDetails({...projectDetails, language: e.target.value})}/>
                            <input type="text" className='form-control mt-2' placeholder='GitHub Link' value={projectDetails.github} onChange={(e) => setProjectDetails({...projectDetails, github: e.target.value})}/>
                            <input type="text" className='form-control mt-2' placeholder='Website Link' value={projectDetails.website} onChange={(e) => setProjectDetails({...projectDetails, website: e.target.value})}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <textarea name="" id="" rows="5" className='form-control' value={projectDetails.overview} onChange={(e) => setProjectDetails({...projectDetails, overview: e.target.value})}></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAdd}>Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject