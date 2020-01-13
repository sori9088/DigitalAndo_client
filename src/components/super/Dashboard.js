import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, NavDropdown, Badge, Button, Card, CardDeck } from 'react-bootstrap'
import Table from '@material-ui/core/Table';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { useHistory } from 'react-router-dom';
import moment from 'moment'



const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#b4c9fd",
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);




const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Dashboard() {

    const classes = useStyles();
    const [info, setInfo] = useState(null)
    const [dataRows, setDataRows] = useState([])
    const [filteredInfo, setFilteredInfo] = useState(null)
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const history = useHistory()


    useEffect(() => {
        getInfo();
    }, [])




    useEffect(() => {
        reload();
    }, [filteredInfo])




    const getInfo = async () => {
        const res = await fetch(process.env.REACT_APP_BURL + "/getinfo")

        if (res.ok) { // user is logged in
            const data = await res.json()  // carefull you might be stuck here bcos of "await"
            setInfo(data.issues)
            setFilteredInfo(data.issues)
        } else {
            alert('something is wrong')
        }

    }

    console.log(filteredInfo)

    function createData(id, Line, Detail1, Detail2, Problem, Status, Start, Remark) {
        return { id, Line, Detail1, Detail2, Problem, Status, Start, Remark };
    }

    const reload = () => {
        let rows = [];
        console.log(rows, "before push")
        filteredInfo && filteredInfo.map((item) => {
            rows.push(createData(item.id, item.line_id, item.detail1, item.detail2, item.issue_type, item.status, item.start_date, item.remark));
        });
        console.log(rows, "after push")
        setDataRows(rows)
        rows = [];
    }

    console.log(dataRows)



    const changetoDoing = async (e, id) => {
        e.preventDefault();
        const res = await fetch(process.env.REACT_APP_BURL + "/doing", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ "id": id })
        });


        if (res.ok) { // user is logged in
            const data = await res.json()  // carefull you might be stuck here bcos of "await"
            setInfo(data.issues)
            window.location.reload(true);
        } else {
            alert('something is wrong')
        }
    }

    const finish = async (e, id) => {
        e.preventDefault();
        const res = await fetch(process.env.REACT_APP_BURL + "/done", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ "id": id })
        });


        if (res.ok) { // user is logged in
            const data = await res.json()  // carefull you might be stuck here bcos of "await"
            setInfo(data.issues)
            window.location.reload(true);
        } else {
            alert('something is wrong')
        }
    }


    const toggleWaiting = (e) => {
        e.preventDefault()
        if (toggle1 == false) {
            const newIssues = info && info.filter((issue) => issue.status === "null")
            setFilteredInfo(newIssues)
        }
        else {
            setFilteredInfo(info)
        }
    }

    const toggleDone = (e) => {
        e.preventDefault()
        if (toggle2 == false) {
            const newIssues = info && info.filter((issue) => issue.status === "doing")
            setFilteredInfo(newIssues)
        }
        else {
            setFilteredInfo(info)

        }
    }




    return (
        <>
        <header>
            <div className="header d-flex justify-content-center">
            </div>
            <div className="body transition">
            <div className="d-flex justify-content-center align-items-center">
            <div className="my-3"><h2>Dashboard</h2></div>
            <div className="ml-3"><a href={"/"}><i class="fas fa-home"></i></a></div>

            </div>

            <Container className="my-2 p-4 d-flex justify-content-center text-center">
                    <CardDeck>
                        <Card className="shadow" style={{ width: "12rem" }}>
                                <ToggleButton
                                    value="check"
                                    selected={toggle1}
                                    onChange={(e) => {
                                        setToggle1(!toggle1);
                                        toggleWaiting(e);
                                    }}
                                >
                                    Waiting
                                </ToggleButton>
                        </Card>
                        <Card className="shadow" style={{ width: "12rem" }}>
                                <ToggleButton
                                    value="check1"
                                    selected={toggle2}
                                    onChange={(e) => {
                                        setToggle2(!toggle2);
                                        toggleDone(e);
                                    }}
                                >
                                    Proceeding
                                </ToggleButton>
                        </Card>
                    </CardDeck>
                </Container>
                <Container className="dashboard_main">
                    <div className="my-5">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Line</StyledTableCell>
                                        <StyledTableCell>Detail1</StyledTableCell>
                                        <StyledTableCell>Detail2</StyledTableCell>
                                        <StyledTableCell>Issue Type</StyledTableCell>
                                        <StyledTableCell>Status</StyledTableCell>
                                        <StyledTableCell>Start</StyledTableCell>
                                        <StyledTableCell>Remark</StyledTableCell>
                                        <StyledTableCell>Toggle</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {dataRows.map(row => (
                                        <TableRow key={row.Line}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.Line}
                                            </StyledTableCell>
                                            <StyledTableCell >{row.Detail1}</StyledTableCell>
                                            <StyledTableCell>{row.Detail2}</StyledTableCell>
                                            <StyledTableCell>{row.Problem}</StyledTableCell>
                                            <StyledTableCell>{row && row.Status === "doing" ?
                                                <>
                                                    <Badge variant="warning">Proceeding</Badge>
                                                </>
                                                :
                                                <>
                                                    <Badge variant="danger">Waiting</Badge>
                                                </>
                                            }</StyledTableCell>
                                            <StyledTableCell>{moment(row.Start).format('lll')}</StyledTableCell>
                                            <StyledTableCell>{row.Remark}</StyledTableCell>
                                            <StyledTableCell>{row && row.Status === "doing" ?
                                                <>
                                                    <Button variant="danger" onClick={(e) => finish(e, row.id)}>Finish</Button>
                                                </>
                                                :
                                                <>
                                                    <Button style={{ backgroundColor: "#3b84b9" }} onClick={(e) => changetoDoing(e, row.id)}>Start</Button>
                                                </>
                                            }</StyledTableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Container>
                </div>
        </header>
            
        </>
    )
}
