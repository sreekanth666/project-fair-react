import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
    return (
        <>
            <div className="container-fluid shadow p-3">
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>My Projects</h4>
                    <AddProject />
                </div>

                <div className='mt-4'>
                    <div className="container-fluid border d-flex justify-content-between align-items-center mt-2">
                        <h5>Project Title</h5>
                        <div className="icons ms-auto">
                            <i className="fa-solid fa-pen m-3 fs-4"></i>
                            <i className="fa-brands fa-github m-3 fs-4"></i>
                            <i className="fa-solid fa-trash m-3 fs-4"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProjects