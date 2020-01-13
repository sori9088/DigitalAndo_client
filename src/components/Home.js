
import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactTypingEffect from 'react-typing-effect';
import {Link} from 'react-router-dom';
import Machine_Line from './user/Machine_Line'
import {Card, CardDeck} from 'react-bootstrap'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '98vh',
    width: '99vw'
  },
  image: {
    backgroundImage: 'url(https://picserio.com/data/out/479/digital-hd-wallpapers_6799535.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '98%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [detail, setDetail] = useState("")
  console.log('detail', detail)
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image} />
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
      <div className="landingpage" style={{marginTop:'100px', marginLeft:'60px'}}>
      <h1 style={{fontWeight:'900', fontSize:'70px'}}>Sports Gear</h1>
      <ReactTypingEffect
                className="typeracer"
                text= "Digital Ando "
                // staticText="Digital Ando"
                speed="70"
                eraseDelay="700"
                cursor= <i class="fas fa-key"></i>
                cursorClassName="key"
                style={{color:"#014265", fontSize:"40px"}}
              />
                <br/>
                
                <div id="issuemenu">
                   
                    <br/>
                    <p style={{fontSize:"18px"}}><i class="fas fa-user-cog"></i> &nbsp;Please choose issue type to report</p> 
                            <CardDeck className="d-flex mt-2" style={{fontSize:'18px'}}>            
                            <Link to="/detail/machine">
                            <div className="machine mr-3 menu"  >
                              Machine <br/><br/>
                            <img width="70" src="https://image.flaticon.com/icons/svg/1383/1383439.svg"/>
                            </div> 
                            </Link>
                            
                            <Link to="/detail/quality">
                            <div className="quality mr-3 menu">
                             Quality <br/> <br/>          
                             <img width="70" src="https://image.flaticon.com/icons/svg/2107/2107737.svg"/>
                            </div> 
                            </Link>

                             <Link to="/detail/materials">
                             <div className="materials mr-3 menu">
                             Materials <br/><br/>    
                             <img width="70" src="https://image.flaticon.com/icons/svg/2405/2405613.svg"/>                  
                            </div> 
                            </Link>

                            <Link to="/detail/technical">
                            <div className="technical mr-3 menu text-center">                           
                             Technical <br/> <br/>  
                             <img width="70" src="https://image.flaticon.com/icons/svg/1086/1086507.svg"/>                          
                            </div> 
                            </Link>
                            </CardDeck>
                    </div>
        </div>
    
      </Grid>
    </Grid>
  );
}

