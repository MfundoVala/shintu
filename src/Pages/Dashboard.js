import React from 'react'
import MotionHoc from "./MotionHoc";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DetailCard from '../components/DetailCard';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  height: '64vh',
  textAlign: 'center',
  borderRadius: '0',
  color: theme.palette.text.secondary,
}));

function CardArea() {
  return (
      <Grid container spacing={8}>
        <Grid item xs={4}>
          <Item elevation={24}>
            <DetailCard></DetailCard>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item elevation={24}>
            <DetailCard></DetailCard>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item elevation={24}>
           <DetailCard></DetailCard>
          </Item>
        </Grid>
      </Grid>
  );
}


const DashComponent = () => {
  return (
      <Box sx={{ 
        bgcolor: 'var(--primary)', 
        height: '100vh',  
        width: '100vw',
        padding: '18vh',
        alignContent: 'center',
    }} >
        <CardArea/>
      </Box>    

  );
};

const Dashboard = MotionHoc(DashComponent);

export default Dashboard;
