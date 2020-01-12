import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Button, Container} from 'react-bootstrap'
import Machine_Line from './Machine_Line'


export default function Problem_Machine() {
    const [detail, setDetail] = useState({type:"Machine"})
    const history = useHistory();
    const handleDetail1 = value => {
        setDetail({
            ...detail,
            detail1: value 
        })
    }
    const handleDetail2 = value => {
        setDetail({
            ...detail,
            detail2: value
        })
    }
    const handleChange = e => {
        setDetail({
            ...detail,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = { ...detail } 
        const res = await fetch(process.env.REACT_APP_BURL+"/send_issue", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });
        if (res.ok) {
            const data = await res.json()
            if (data.success == true) {
                alert('successfully sent!')
                history.push('/dashboard')
            }
        }
    }

    //data detail1
    const detail1 = [
{title: '25 ton Flat Cutting Machine'},
{title: 'Hydraulic Travelling Head Cutting Machine'},
{title: 'Swing Arm Cutting Machine'},
{title: '25 ton Flat Cutting Machine (Leather Cutting)'},
{title: '25 ton Flat Cutting Machine (Prefit)'},
{title: '25 ton Flat Cutting Machine (Stitching)'},
{title: 'Swing Arm Cutting Machine (Leather Cutting)'},
{title: 'Swing Arm Cutting Machine (Prefit)'},
{title: 'Swing Arm Cutting Machine (Stitching)'},
{title: 'Single Stitching Machine'},
{title: 'Double Stitching Machine'},
{title: 'Copper Wheel HM Rolling Machine'},
{title: 'Adhesive HM Rolling Machine 30cm'},
{title: 'Adhesive HM Rolling Machine 50cm'},
{title: 'Hot Rolling Pressing Machine'},
{title: 'Computer Stitching 1510'},
{title: 'Computer Stitching 2516'},
{title: 'Computer Stitching 3020'},
{title: 'Computer Stitching 4530'},
{title: 'Chilling Molding Machine'},
{title: 'Strobel Stitching Machine'},
{title: 'Innersole Molding Machine'},
{title: 'HM Dropping Machine '},
{title: 'Roughing & Dust Collecting Machine"'},
{title: 'Outsole Stitching Machine'},
{title: 'Adhesive HM Rolling Machine 18cm'},
{title: 'Sockliner Pressing Machine'},
{title: 'Collar Heating-Chilling Molding Machine'},
{title: 'Upright Heating Machine'},
{title: 'Long Heating Machine'},
{title: 'Heating Tunnel'},
{title: 'Chilling Machine'},
{title: 'Natural Drying Machine'},
{title: 'Packing Conveyor 4 m'},
{title: 'Packing Conveyor 7 m'},
{title: 'Packing Conveyor 10 m'},
{title: 'Metal Detector'},
{title: 'High Double Stitching Machine'},
{title: 'Lace Fastening Pressing Machine'},
{title: 'Vacuum Pressing Machine'},
{title: 'Cement Spraying Machine'},
{title: 'Collar Zigzag Stitching Machine'},
{title: 'Eyelet O-ring Nailing Machine'},
{title: 'High Frequency Cutting Welding Machine'}, 
{title: 'Natural Drying Machine'},
{title: 'Heating Tunnel 18m'},
{title: 'Long Heating Machine 5m'},
{title: 'Chilling Machine 5m'},
{title: 'Heating Pressing Machine'},
{title: '2 Hot & 2 Cold Molding Machine'},
{title: 'Sharping sponge machine'}
      ];
    const detail2 = [
        { title: 'Adjusting Machine'},
        { title: 'Breakdown'},
        { title: 'Change Modelg'},
        { title: 'Change Layout'},
        { title: 'Electric issue'},
        { title: 'Repair'}
         //data detail2
      ];
    console.log('detail', detail)
    return (
      <Container className="mt-5">
       <h1> Machine Issue</h1>
       <br/>
       <Machine_Line setDetail={setDetail} detail={detail}/>
      <br/>
    <br/>
       <h5> Machine Code </h5>
      <Autocomplete
        onChange={(event, value) => handleDetail1(value)}
        id="combo-box-demo"
        options={detail1}
        getOptionLabel={option => option.title}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Detail 1" variant="outlined" 
          fullWidth />
        )}
      />
    <br/>
    <h5> Machine Issues </h5>
      <Autocomplete
        onChange={(event, value) => handleDetail2(value)}
        id="combo-box-demo"
        options={detail2}
        getOptionLabel={option => option.title}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Detail 2" variant="outlined" name="detail2" 
           fullWidth />
        )}
      />
    <br/>
    <h5> Let us know more about issue detail </h5>
    <textarea onChange={(e)=> handleChange(e)} style={{width:"100%", height:"150px"}} name="remark"> </textarea> <br/>
    <Button onClick={handleSubmit} variant="info">Report Issue</Button>

    </Container>
    );
  }
  
