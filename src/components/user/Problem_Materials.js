import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Button, Container} from 'react-bootstrap'

const useStyles = makeStyles(theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

export default function Problem_Materials() {
    const classes = useStyles();
    const [detail, setDetail] = useState(null)
    const [open, setOpen] = React.useState(false);
    const [line, setLine] = React.useState('')
    const history = useHistory();

    const handleClose = () => {
    setOpen(false);
    };
    const handleOpen = () => {
    setOpen(true);
    };
    const handleLine = e => {
       setLine(e.target.value)
       setDetail({
        ...detail,
        line_id: e.target.value
    })
    }
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
                history.push('/')
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
    console.log('line', line)
    return (
      <Container className="mt-5">
       <h1> Material Shortage Issue</h1>
       <br/>
       <h5> Select Machine line </h5>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Machine line</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          value={line}
          onOpen={handleOpen}
          onChange={handleLine}
          name="line_id"
        >
          <MenuItem value="A1">A1</MenuItem>
          <MenuItem value="A2">A2</MenuItem>
          <MenuItem value="A3">A3</MenuItem>
          <MenuItem value="A4">A4</MenuItem>
          <MenuItem value="A5">A5</MenuItem>
        </Select>
      </FormControl>
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
    <textarea onChange={(e)=> handleChange(e)} style={{width:"100%", height:"200px"}} name="remark"> </textarea> <br/>
    <Button onClick={handleSubmit} variant="info">Submit</Button>

    </Container>
    );
  }
  
