import React from 'react';
import Image from '../../assets/hncclogo.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Details from './Details';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '3rem',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      minWidth: '60%',
    },
  },
  root: {
    display: 'flex',
    padding: '1rem 2rem',
    margin: '1rem 5rem',
    maxWidth: 850,
    color: '#87431d',
    '&:hover': {
      borderColor: '#87431d',
      transition: '0.5s',
      transform: 'translateY(-10px)',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '1rem',
      minWidth: '90%',
    },
    justifyContent: 'center',
  },
  details: {
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      maxWidth: '200',
    },
  },
  cover: {
    margin: '0 auto',
    padding: '1rem',
    width: '15rem',
    height: 'auto',
    alignItems: 'center',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      maxWidth: '200',
    },
  },
  dwnBtn: {
    textDecoration: 'none',
    color: 'inherit',
    variant: 'h6',
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  icnBtn: {
    borderRadius: '10px',
    '&:hover': {
      background: '#dbcbbd',
      color: '#87431d',
      transition: 'all 0.3s ease-in-out',
    },
    [theme.breakpoints.down('sm')]: {
      border: '2px solid #dbcbbd',
      minWidth: '15rem',
    },
    margin: '2px 0',
  },
}));

const Contest = () => {
  const classes = useStyles();

  return (
    <Card className={classes.main}>
      <h1 style={{paddingBottom: .5 + 'rem'}}>
        <a className="lb-title" name="contests" href="#contests">
          CONTEST
        </a>
      </h1>
      {[...Details].map((detail, index) => {
        return (
          <Card key={index} variant="outlined" className={classes.root}>
            <img className={classes.cover} src={Image} alt="hNCC" />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="h4">{detail.contestName}</Typography>
                <Typography variant="h5">{detail.date}</Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  component="p"
                  className="contestContent"
                >
                  {detail.description}
                </Typography>
              </CardContent>

              <div className={classes.controls}>
              {/*              
                <IconButton className={classes.icnBtn} aria-label="download">
                  <GetAppIcon />
                  <Typography variant="h6">
                    <a className={classes.dwnBtn} href={Image} download>
                      Download Brochure
                    </a>
                  </Typography>
                </IconButton>
              */}  

                <IconButton className={classes.icnBtn} aria-label="register">
                  <Typography variant="h6">Register</Typography>
                </IconButton>
                <IconButton className={classes.icnBtn} aria-label="">
                  <Typography variant="h6">How To Register</Typography>
                </IconButton>
              </div>
            </div>
          </Card>
        );
      })}
    </Card>
  );
};

export default Contest;
