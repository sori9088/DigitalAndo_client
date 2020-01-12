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

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#ffd796",
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


    useEffect(() => {
        getInfo();
    }, [])


    useEffect(() => {
        reload();
    }, [filteredInfo])


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

    const reload = async () => {
        const rows = [];
        filteredInfo && filteredInfo.map((item) => {
            rows.push(createData(item.id, item.line_id, item.detail1, item.detail2, item.issue_type, item.status, item.start_date, item.remark));
        });
        setDataRows(rows)

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
        } else {
            alert('something is wrong')
        }
        console.log('hihi')
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
        } else {
            alert('something is wrong')
        }
        console.log('hihi')
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




    function createData(id, Line, Detail1, Detail2, Problem, Status, Start, Remark) {
        return { id, Line, Detail1, Detail2, Problem, Status, Start, Remark };
    }

    const reload = async () => {
        info && info.map((item) => {
            dataRows.push(createData(item.id, item.line_id, item.detail1, item.detail2, item.issue_type, item.status, item.start_date, item.remark));
        });

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
        } else {
            alert('something is wrong')
        }
        console.log('hihi')
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
        } else {
            alert('something is wrong')
        }
        console.log('hihi')
    }


    return (
        <>
            <Navbar className="nav_bg" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto my-3">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="header nav_bg d-flex align-items-end">
                <div className="mx-3"><h1>Issues</h1></div>
            </div>
            <body>
                <Container className="my-5 d-flex justify-content-center text-center">
                    <CardDeck>
                        <Card className="shadow" style={{width:"8rem"}}>
                            <Card.Body><i class="far fa-circle"></i><br />Waiting</Card.Body>
                        </Card>
                    <Card className="shadow" style={{width:"8rem"}}>
                        <Card.Body><i class="far fa-circle"></i>Proceeding</Card.Body>
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
                                        <StyledTableCell>{row && row.Status === "false" ?
                                            <>
                                                <Badge variant="warning">Doing</Badge>
                                            </>
                                            :
                                            <>
                                                <Badge variant="danger">Not Yet</Badge>
                                            </>
                                        }</StyledTableCell>
                                        <StyledTableCell>{row.Start}</StyledTableCell>
                                        <StyledTableCell>{row.Remark}</StyledTableCell>
                                        <StyledTableCell>{row && row.Status === "false" ?
                                            <>
                                                <Button variant="danger" onClick={(e) => finish(e, row.id)}>Done</Button>
                                            </>
                                            :
                                            <>
                                                <Button style={{ backgroundColor: "#3b84b9" }} onClick={(e) => changetoDoing(e, row.id)}>Check</Button>
                                            </>
                                        }</StyledTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Container>
        </body>
        </>
    )
}
