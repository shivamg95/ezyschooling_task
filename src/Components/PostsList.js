import React from 'react'
import { ListItem } from './ListItem'

export const PostsList = (props) => {


    return (
        <div className="pt-5 container-fluid">
            <div className="pt-4 row">

                <h1 className="text-center"> Welcome to EzySchooling Blog</h1>

                {props.list.length === 0 ? "There is no blog post yet !!" :
                    props.list.map((item) => {
                        return (
                            <ListItem title={item.title} key={item.id} id={item.id} />
                        )
                    })}




            </div>


        </div>
    )
}
