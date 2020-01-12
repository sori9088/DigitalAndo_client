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
export default function Machine_Line(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [line, setLine] = React.useState('')

    const handleClose = () => {
        setOpen(false);
        };
    const handleOpen = () => {
        setOpen(true);
        };
    const handleLine = e => {
        setLine(e.target.value)
        props.setDetail({
            ...props.detail,
            line_id: e.target.value
        })
        }

    return (
        
        <div className="machineLine">
        <strong><h5> <i class="fas fa-cog"></i> Select Machine Line </h5></strong>
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
                        <MenuItem value="A1LO1">A1LO1</MenuItem>
                        <MenuItem value="A1LO2">A1LO2</MenuItem>    
                        <MenuItem value="A1LO3">A1LO3</MenuItem>
                        <MenuItem value="A1LO4">A1LO4</MenuItem>
                        <MenuItem value="A1LO5">A1LO5</MenuItem>
                        </Select>
                    </FormControl>
        </div>           
    )
}
