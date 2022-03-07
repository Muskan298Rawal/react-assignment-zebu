import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

function Label() {
    const  params  = useParams();
    const location = useLocation()
    // const { from } = location.state
    console.log("test",location, params)
    return (
        <div>
            label
        </div>
    )
}

export default Label
