import React from 'react'
import { Link } from "react-router-dom";

export const ListItem = (props) => {
    return (
        <span className="shadow my-3 py-2 text-center col-3 mx-auto" style={{ width: 20 + 'rem' }}>
            <h3 className="card-body"><Link to={"/post/" + props.id} className="text-success">{props.title}</Link> </h3>
        </span>
    )
}
