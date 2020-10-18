import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Details from './Detail';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '400',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      maxWidth: '200',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  customCard: {
    margin: '1rem 1rem',
    padding: '1rem 1rem',
    boxShadow: '.2rem 1rem .5rem #dbcbbd',

    '&:hover': {
      borderColor: '#87431d',
      transition: '0.5s',
      transform: 'translateY(-10px)',
      boxShadow: '.2rem 1.4rem 1rem #dbcbbd',
    },
  },
  customLink: {
    textDecoration: 'none',
    color: '#87431d',
    fontSize: '1.2rem',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '200',
    '&:hover': {
      textDecoration: 'none',
      color: '#d57149',
    },
  },
  table: {
    minWidth: '400',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState("");
  const handleExpandClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex("")
    } else {
      setSelectedIndex(index)
    }
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      {Details.map((detail, index) => {
        return (
          <Card key={index} variant="outlined" className={classes.customCard}>
            <CardHeader title={detail.contestTitle} subheader={detail.date} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" />
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>NAME</StyledTableCell>
                      <StyledTableCell align="right">BATCH</StyledTableCell>
                      <StyledTableCell align="right">BRANCH</StyledTableCell>
                      <StyledTableCell align="right">SCORE</StyledTableCell>
                      <StyledTableCell align="right">
                        CodeChef_ID
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[...detail.topContestants].map((contestant, index) => {
                      return (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {contestant.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {contestant.batch}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {contestant.branch}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {contestant.score}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <a href={"https://www.codechef.com/users/" + contestant.codeChefId} target="_blank">Click Here</a>
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={()=>{handleExpandClick(index)}}
                aria-label="show more"
              >
                {index === selectedIndex ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </CardActions>

            <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography>
                  <a className={classes.customLink} href={detail.listLink}>
                    See the Complete List.
                  </a>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </Card>
  );
}
