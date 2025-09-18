import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PostCardList from "../PostCardList/PostCardList";
import UserList from "../UserList/UserList"

export default function MainContainer() {
  return (
    <Box sx={{ width: "100%", mt: "1rem" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container
              size={3}>
                <UserList />
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          spacing={2}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          size={9}
        >
          <PostCardList />
        </Grid>
      </Grid>
    </Box>
  );
}
