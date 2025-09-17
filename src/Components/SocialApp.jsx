import React, { useEffect, useState } from 'react'
import Navbar from './NavBar'
import MainContainer from './MainContainer/MainContainer'
import  Input  from '../Components/Input/Input'
import PostCardContext from '../Provider/PostProvider'
import axios from 'axios'


 
function SocialApp() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(()=>{
      axios.get("https://68c98f84ceef5a150f655294.mockapi.io/api/v1/posts")
      .then(res => {
        const postResponse = res.data;
        setPosts([...postResponse])
        // console.log(postResponse)
      })
    }, [])
      useEffect(()=>{
        axios.get("https://68c98f84ceef5a150f655294.mockapi.io/api/v1/users")
        .then(res =>{
            const data = res.data
            // console.log(res);
            setUsers([...data])
        })
  },[])

  return (
    <div>
      <PostCardContext.Provider value={{ posts, setPosts, users, setUsers}}>
        <Navbar />
        <Input />
        <MainContainer />
      </PostCardContext.Provider>
    </div>
  )
}

export default SocialApp