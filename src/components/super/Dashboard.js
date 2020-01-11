import React, {useState, useEffect} from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Table from '@material-ui/core/Table';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: "#ffd796",
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

  
function createData(Line, Detail1,Detail2, Problem, Status, Start, Finish, Duration) {
    return { Line, Detail1,Detail2, Problem, Status, Start, Finish, Duration };
}


const rows = [
    createData('A1', 'Detail1', 'Detail2', 'Technical', 'N/A', '22:00','23:00','1hour'),
    createData('A1', 'Detail1', 'Detail2', 'Technical', 'N/A', '22:00','23:00','1hour'),
    createData('A1', 'Detail1', 'Detail2', 'Technical', 'N/A', '22:00','23:00','1hour'),
    createData('A1', 'Detail1', 'Detail2', 'Technical', 'N/A', '22:00','23:00','1hour'),
    createData('A1', 'Detail1', 'Detail2', 'Technical', 'N/A', '22:00','23:00','1hour'),

  ];


  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

export default function Dashboard() {

    const classes = useStyles();
    const [info, setInfo] = useState(null)


    useEffect(() => {
        getInfo();
    }, [])



    const getInfo = async () => {
        const res = await fetch(process.env.REACT_APP_BURL + "/getinfo")

        if (res.ok) { // user is logged in
            const data = await res.json()  // carefull you might be stuck here bcos of "await"
            setInfo(data.info)    
        } else {
            alert('something is wrong')
        }

    }

    console.log(info)

    
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
                                        <StyledTableCell>Finish</StyledTableCell>
                                        <StyledTableCell>Duration</StyledTableCell>
                                        <StyledTableCell>Toggle</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.Line}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.Line}
                                            </StyledTableCell>
                                            <StyledTableCell>{row.Detail1}</StyledTableCell>
                                            <StyledTableCell>{row.Detail2}</StyledTableCell>
                                            <StyledTableCell>{row.Problem}</StyledTableCell>
                                            <StyledTableCell>{row.Status}</StyledTableCell>
                                            <StyledTableCell>{row.Start}</StyledTableCell>
                                            <StyledTableCell>{row.Finish}</StyledTableCell>
                                            <StyledTableCell>{row.Duration}</StyledTableCell>
                                            <StyledTableCell>{row.Toggle}</StyledTableCell>
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
