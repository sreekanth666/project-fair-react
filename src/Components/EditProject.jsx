import React, { useContext, useEffect, useState } from 'react'
import { editProjectAPI } from '../Services/allAPI';
import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';
import { base_url } from '../Services/baseurl';
import { EditProjectResponseContext } from '../Contexts/ContextShare';

function EditProject({project}) {
    const {editProjectResponse, setEditProjectResponse} = useContext(EditProjectResponseContext)
    const [projectDetails, setProjectDetails] = useState({
        id: project._id,
        title: project.title,
        languages: project.languages,
        overview: project.overview,
        github: project.github,
        website: project.website,
        projectImage: ""
    })

    const [preview, setPreview] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setProjectDetails({
            id: project._id,
            title: project.title,
            languages: project.languages,
            overview: project.overview,
            github: project.github,
            website: project.website,
            projectImage: ""
        })
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    },[projectDetails.projectImage])

    const handleUpdate = async() => {
        const {id, title, languages, github, website, overview, projectImage} = projectDetails
        if (!title || !languages || !overview || !github || !website) {
            toast.info("Please fill the form completely")
        } else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("languages", languages)
            reqBody.append("overview", overview)
            reqBody.append("github", github)
            reqBody.append("website", website)
            preview?reqBody.append("projectImage", projectImage):reqBody.append("projectImage", project.projectImage)
            const token = sessionStorage.getItem("token")
            if (preview) {
                const reqHeader = {
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${token}`
                }

                const result = await editProjectAPI(id, reqBody, reqHeader)

                if (result.status === 200) {
                    console.log("result.response");
                    handleClose()
                    setEditProjectResponse(result.response)
                } else {
                    toast.error(result.response.data)
                }
            } else {
                const reqHeader = {
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
                const result = await editProjectAPI(id, reqBody, reqHeader)
                if (result.status === 200) {
                    handleClose()
                    setEditProjectResponse(result.response)
                } else {
                    toast.error(result.response.data)
                }
            }
        }
    }
    console.log(editProjectResponse);
    return (
        <div>
            <i className="fa-solid fa-pen m-3 fs-4" onClick={() => handleShow()}></i>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Edit Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6">
                            <label>
                                <input type="file" style={{display:"none"}} onChange={(e) => setProjectDetails({...projectDetails, projectImage: e.target.files[0]})} />
                                <img src={preview?preview:`${base_url}/uploads/${project.projectImage}`} alt="" className='img-fluid'/>
                            </label>
                        </div>
                        <div className="col-6">
                            <input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title} onChange={(e) => setProjectDetails({...projectDetails, title: e.target.value})}/>
                            <input type="text" className='form-control mt-2' placeholder='Language Used' value={projectDetails.languages} onChange={(e) => setProjectDetails({...projectDetails, languages: e.target.value})}/>
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
                <Button variant="primary" onClick={handleUpdate}>Add project</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditProject

// INPUT onchange={e => setProjectDetails({...projectDetails, projectImage:e.target.files[0]})}
// IMG SRC src={preview?preview:`${BASE_URL}/uploads/${project.projectImage}}
