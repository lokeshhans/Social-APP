import  { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {  Box, Card, CardContent, CardMedia, Typography } from '@mui/material';


function UserProfile() {
  const [user, setUser] = useState({})
  // console.log(user)
    let {id} = useParams()
    // console.log(id);
    useEffect(()=>{
                axios.get(`https://68c98f84ceef5a150f655294.mockapi.io/api/v1/users/${id}`)
        .then((res)=>{
          // console.log(res.data)
          const userProfileDetail = res.data
            setUser({...userProfileDetail})
        })
    },[])
  return (
    <>
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Card sx={{ display: 'flex', flexDirection:'column', alignItems:'center', width:'30%  ' }}>
      
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {user.name}
          </Typography>
        </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 150, borderRadius:'50%', mb:'1rem' }}
        image={user.avatar}
        alt="Live from space album cover"
      />
    </Card>
    </Box>
    </>
  )
}

export default UserProfile