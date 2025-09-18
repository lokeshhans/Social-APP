import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PostCardContext from "../../Provider/PostProvider";
import { Link } from "react-router-dom";

export default function UserList() {
  const { users } = React.useContext(PostCardContext);
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.id}`;
        return (
          <ListItem key={user.id} disablePadding>
            <Link to={`/User/${user.id}`} style={{textDecoration:"none", 
              color:"black",
              fontSize:"1rem"
            }}>
              <ListItemButton >
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${user.firstName}`}
                    src={user.avatar}
                  />
                </ListItemAvatar>
                <ListItemText  id={labelId} primary={user.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}
