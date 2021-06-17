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

  // fetching posts list
  useEffect(() => {
    
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then((data) => {
    //       setList(data);
    //     })


    axios({
      "method": "GET",
      "url": "https://jsonplaceholder.typicode.com/posts/"+postID,
    })
    .then((response) => {
        setfullPost(response.data);

    })
    .catch((error) => {
      console.log(error)
    })
    
  }, [setfullPost, fullPost])



  useEffect(() => {

    axios({
      "method": "GET",
      "url": "https://jsonplaceholder.typicode.com/posts/"+postID+"/comments",
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
      "url": "https://jsonplaceholder.typicode.com/users/"+fullPost.userId,
    })
    .then((res) => {
        setAuthor(res);
    })
    .catch((error) => {
      console.log(error)
    })
    
  }, [setAuthor, author])





    return (
        <div className="pt-5">
            <div className="pt-4">

            <h3>{fullPost.title}</h3>
            <p>{fullPost.body}</p>





            Hi {JSON.stringify(comment)}
            <br />
            Hi {JSON.stringify(fullPost)}
            <br />
            Hi {JSON.stringify(author)}
           

            </div>
            
        </div>
    )
}
