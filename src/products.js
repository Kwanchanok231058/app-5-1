import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Products() {
    let navigate = useNavigate()
    
    return (
        <div>
            <h1 style={{TextAlign:"center"}}> This is My Products page.</h1>
            <Link to="/">Back to Homepage</Link>
            <button onClick={() => navigate("/")}>React</button>
        </div>
    )

}