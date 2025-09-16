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
        axios.get("https://dummyjson.com/users")
        .then(res =>{
            const data = res.data.users
            console.log(data);
            setUsers([...data])
        })
  },[])


  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.is}`;
        return (
          <ListItem
            key={user.id}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${user.firstName}`}
                  src={user.image}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={user.firstName + " " + user.lastName} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}