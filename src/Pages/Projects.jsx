import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { InputGroup, Form, Row, Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectAPI } from '../Services/allAPI'

function Projects() {
    const [allProject, setAllProject] = useState()
    const getAllProject = async() => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await allProjectAPI(searchKey, reqHeader)
            if (result.status === 200) {
                setAllProject(result.data)
            } else {
                console.log(result);
            }
        } else {
            console.log("Auth error");
        }
    }

    const [searchKey, setSearchKey] = useState()
    useEffect(() => {
        getAllProject()
    }, [searchKey])

    console.log(searchKey);

    console.log(allProject);
    return (
        <>
            <Header />
            <div className='container text-center mt-3 b-3'>
                <h2>All Projects</h2>
                <InputGroup className="mb-3 w-50 mx-auto">
                    <Form.Control
                    placeholder="Search project by technology"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={searchKey}
                    onChange={(e) => {setSearchKey(e.target.value)}}
                    />
                    <InputGroup.Text id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                </InputGroup>
            </div>

            <div className='container-fluid'>
                <div className='mb-5 mt-5 row'>
                    {
                        allProject?.length > 0 ?
                        allProject?.map((item) => (
                            <div className='col-3 mb-5'><ProjectCard projectDetails={item}/></div>
                        )):
                        "Please login"
                    }
                </div>
            </div>
        </>
    )
}

export default Projects