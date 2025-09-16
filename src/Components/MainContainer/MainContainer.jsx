import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PostCard from '../Post';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function MainContainer() {
  return (
    <Box sx={{ width: '100%', mt:'1rem' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={3}>
          <Item>1</Item>
        </Grid>
        <Grid container justifyContent={"center"} spacing={2} display={"flex"} alignItems={"center"} flexDirection={"column"}  size={9}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Grid>
        
      </Grid>
    </Box>
  );
}