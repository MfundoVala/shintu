import React from 'react'
import MotionHoc from "./MotionHoc";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DetailCard from '../components/DetailCard';
import DetailCard2 from '../components/DetailCard2';
import DetailCard3 from '../components/DetailCard3';
import ButtonBase from '@mui/material/ButtonBase';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#F45936' : '#F45936',
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
          <ButtonBase sx={{backgroundColor:'#F45936'}}>
            <Item elevation={0}>

              <DetailCard></DetailCard>
            </Item>
          </ButtonBase>

        </Grid>
        <Grid item xs={4}>
          <ButtonBase sx={{backgroundColor:'#F45936'}}>
            <Item elevation={0}>
              <DetailCard2></DetailCard2>
            </Item>
          </ButtonBase>
        </Grid>
        <Grid item xs={4}>
          <ButtonBase sx={{backgroundColor:'#F45936'}}>
            <Item elevation={0}>
              <DetailCard3></DetailCard3>
            </Item>
          </ButtonBase>
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
        paddingLeft: '16vh',
        paddingTop: '6vh',
        paddingRight: '16vh',
        alignContent: 'center',
        overflowY: 'hidden',
    }} >
        <CardArea/>
      </Box>    

  );
};

const Dashboard = MotionHoc(DashComponent);

export default Dashboard;
