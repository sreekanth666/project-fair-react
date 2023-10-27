import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='container-fluid p-4' style={{backgroundColor:'#004225'}}>
            <Link to='/' style={{textDecoration:'none'}}><h3 className='text-light'>Project Fair</h3></Link>
        </div>
    )
}

export default Header