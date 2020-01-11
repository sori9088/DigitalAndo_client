import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from 'react-bootstrap/Button'

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

export default function Problem_Quality() {
    const classes = useStyles();
    const [line, setLine] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleChange = event => {
        setLine(event.target.value);
      };
    const handleClose = () => {
    setOpen(false);
    };
    const handleOpen = () => {
    setOpen(true);
    };

    //data detail1
    const detail1 = [
        { title: 'grape', year: 1994 },
        { title: 'apple', year: 1994 },
      ];
    const detail2 = [
        { title: 'Detail', year: 1994 } //data detail2
      ];

    return (
      <>
       <h1> Quality problem</h1>
       <br/>
       <div>
       <h5> Select Machine line </h5>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Machine line</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={line}
          onChange={handleChange}
        >
          <MenuItem value="A1">A1</MenuItem>
          <MenuItem value="A2">A2</MenuItem>
          <MenuItem value="A3">A3</MenuItem>
          <MenuItem value="A4">A4</MenuItem>
          <MenuItem value="A5">A5</MenuItem>
        </Select>
      </FormControl>
    </div>
    <br/>
       <h5> Detail 1 </h5>
      <Autocomplete
        id="combo-box-demo"
        options={detail1}
        getOptionLabel={option => option.title}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Detail 1" variant="outlined" fullWidth />
        )}
      />
    <br/>
    <h5> Detail 2 </h5>
      <Autocomplete
        id="combo-box-demo"
        options={detail2}
        getOptionLabel={option => option.title}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Detail 2" variant="outlined" fullWidth />
        )}
      />
    <br/>
    <Button variant="info">Submit</Button>
      </>
    );
  }
  
