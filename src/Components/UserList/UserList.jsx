import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
        axios.get("https://68c98f84ceef5a150f655294.mockapi.io/api/v1/users")
        .then(res =>{
            const data = res.data
            // console.log(res);
            setUsers([...data])
        })
  },[])


  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.id}`;
        return (
          <ListItem
            key={user.id}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${user.firstName}`}
                  src={user.avatar}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={user.name } />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}