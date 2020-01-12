import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Container} from 'react-bootstrap'
import Machine_Line from './Machine_Line'

export default function Problem_Materials() {

    const [detail, setDetail] = useState({type:"Materials"})
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
        const res = await fetch(("http://127.0.0.1:5000/send_issue"), {
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
        { title: 'Stitching'},
        { title: 'Assembly'},
        { title: 'Cutting'},
      ];
    const detail2 = [
        { title:  'Cutting'},
        { title: 'Stitching'},
        { title: 'Stock-fitting'},
        { title: 'Treatment'},
        { title: 'Warehouse'},
         //data detail2
      ];
    console.log('data', detail)

    return (
      <Container className="mt-5">
       <h1> Material Shortage Issue</h1>
       <br/>
       <Machine_Line setDetail={setDetail} detail={detail}/>
      <br/>
    <br/>
       <h5> Process </h5>
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
    <h5> Responsibility Department </h5>
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
  
