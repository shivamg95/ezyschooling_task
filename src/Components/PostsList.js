import React from 'react'
import { ListItem } from './ListItem'

export const PostsList = (props) => {
    

    return (
        <div className="pt-5">
            <div className="pt-5">

                

            {props.list.length===0 ? "There is no blog post yet !!": 
                props.list.map((item) => {
                return (
                    <ListItem title={item.title} key={item.id} id={item.id} />
                )
            }) }
            
            


            </div>

            
        </div>
    )
}
