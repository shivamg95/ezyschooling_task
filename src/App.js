import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavBar } from './Components/NavBar';
import { PostsList } from './Components/PostsList';
import { Post } from './Components/Post';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";

function App() {

  let [list, setList] = useState('');

  // fetching posts list
  useEffect(() => {
    
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then((data) => {
    //       setList(data);
    //     })


    axios({
      "method": "GET",
      "url": "https://jsonplaceholder.typicode.com/posts",
    })
    .then((response) => {
      setList(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
    
  }, [setList, list])

  

  //  console.log(list);



  return (
    <div >
      <Router>

      <NavBar />
      <Route path="/" exact render={() =><PostsList list={list}/>} />
      <Route path="/post/" render={() =><Post />} />
      


      </Router>
      
     
    </div>
  );
}

export default App;
