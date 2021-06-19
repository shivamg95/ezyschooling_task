import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Post = (props) => {

  var postID = window.location.href.substring(
    window.location.href.lastIndexOf("/post/") + 6,
    window.location.href.length
  );
  let [fullPost, setfullPost] = useState('');
  let [comment, setComment] = useState('');
  let [author, setAuthor] = useState('');


  // fetching blogpost data
  useEffect(() => {


    axios({
      "method": "GET",
      "url": "https://jsonplaceholder.typicode.com/posts/" + postID + "",
    })
      .then((response) => {
        setfullPost(response.data);

        // Fetch Author of the selected post

        axios({
          "method": "GET",
          "url": "https://jsonplaceholder.typicode.com/users/" + response.data.userId,
        })
          .then((res) => {
            setAuthor(res.data);
          })
          .catch((error) => {
            console.log(error)
          })


      })
      .catch((error) => {
        console.log(error)
      })

  }, [])



  // Fetch comments
  useEffect(() => {

    axios({
      "method": "GET",
      "url": "https://jsonplaceholder.typicode.com/posts/" + postID + "/comments",
    })
      .then((response) => {
        setComment(response.data);
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])



  return (
    <div className="pt-5">
      <div className="pt-4 px-3">

        {/* Post content */}
        <h2 className="text-center text-success">{fullPost.title}</h2>
        <p className="text-center px-3 mt-3">{fullPost.body}</p>

        {/* Author of the post */}
        <div className='text-end px-2'> <b>AUTHOR:</b> {author.name}</div>
        <br />
        <hr />

        {/* blog Comments */}
        <h4 className="text-success">COMMENTS: </h4>
        {comment.length === 0 ? "There is no comment yet !!" :
          comment.map((item) => {
            return (
              <div className="shadow px-3 my-2">
                <h5>{item.name}</h5>
                <p>{item.body}</p>
              </div>
            )
          })}

      </div>

    </div>
  )
}
