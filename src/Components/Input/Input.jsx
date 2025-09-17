import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useContext, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import PostCardContext from '../../Provider/PostProvider'


function Input() {
const  {posts,setPosts } = useContext(PostCardContext)
const {users, setUsers} = useContext(PostCardContext)
  const [postText, setPostText] = useState([]);
  const [postImg, setPostImg] = useState([]);
  const [loading, setLoading] = useState(false)
  
  async function createPost() {
    setLoading(true);
    axios
      .post("https://68c98f84ceef5a150f655294.mockapi.io/api/v1/posts", {
        name: postText,
        avatar: postImg,
        createdAt: new Date(),
        description: "chale beta khalne ",
      })
      .then((res) => { 
        // console.log(res.data);
        setLoading(false);
        setPosts([res.data,...posts])
        setPostImg("");
        setPostText("");
        }
    );
  }
  async function createUser() {
    setLoading(true);
    axios
      .post("https://68c98f84ceef5a150f655294.mockapi.io/api/v1/users", {
        name: postText,
        avatar: postImg,
      })
      .then((res) => {
        // console.log(res.data);
        setLoading(false);
        setUsers([res.data,...users])
        setPostImg("");
        setPostText("");
      });
  }
  return (
    <Box sx={{ mt: "1rem" }}  width={"80% "} >
      <TextField
        sx={{ mt: "1rem", mb: "1rem" }}
        fullWidth
        label="Enter name"
        id="fullWidth"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <TextField
        fullWidth
        label="Image URL"
        id="fullWidth"
        value={postImg}
        onChange={(e) => setPostImg(e.target.value)}
      />
      <Box gap={'1rem'} display={"flex"} justifyItems={"center"} >
        {(loading) ? <CircularProgress disableShrink /> : <Button sx={{ mt: "1rem" }} variant="contained" onClick={createPost}> Create Post </Button> }
        {
          (loading) ? <CircularProgress disableShrink /> : <Button sx={{ mt: "1rem" }} variant="contained" onClick={createUser}>
          Create User
        </Button>
        }
        
      </Box>
    </Box>
  );
}

export default Input;
