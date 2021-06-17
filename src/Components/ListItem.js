import React from 'react'
import { Link } from "react-router-dom";

export const ListItem = (props) => {
    return (
        <div className="shadow-sm my-3 py-2 text-center">
            <h2><Link to={"/post/" + props.id}>{props.title}</Link> </h2>
        </div>
    )
}
