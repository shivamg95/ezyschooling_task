import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Post = (props) => {


  let [fullPost, setfullPost] = useState('');
  let [comment, setComment] = useState('');
  let [author, setAuthor] = useState('');


  var postID = window.location.href.substring(
    window.location.href.lastIndexOf("/post/") + 6,
    window.location.href.length
  );

  // fetching blogpost data
  useEffect(() => {


    axios({
      "method": "GET",
      "url": "https://jsonplaceholder.typicode.com/posts/" + postID+"",
    })
      .then((response) => {
        setfullPost(response.data);

      })
      .catch((error) => {
        console.log(error)
      })

  }, [setfullPost, fullPost])



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

  }, [setComment, comment])


  // fetch author
  useEffect(() => {

    
    axios({
      "method": "GET",
      "url": "https://jsonplaceholder.typicode.com/users/" + fullPost.userId,
    })
      .then((res) => {
        setAuthor(res.data);
      })
      .catch((error) => {
        console.log(error)
      })

  }, [setAuthor, author])




  return (
    <div className="pt-5">
      <div className="pt-4">

        {/* Post content */}
        <h3 className="text-center">{fullPost.title}</h3>
        <p className="text-center">{fullPost.body}</p>

        {/* Author of the post */}
        <b> AUTHOR: {author.name}</b>
        <br />
        <hr />

        {/* blog Comments */}
        <b>COMMENTS</b>
        {comment.length === 0 ? "There is no comment yet !!" :
          comment.map((item) => {
            return (
              <div>
                <h5>{item.name}</h5>
                <p>{item.body}</p>
              </div>
            )
          })}

      </div>

    </div>
  )
}
