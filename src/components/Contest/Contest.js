import React from 'react';
import Image from '../../assets/hncclogo.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import Details from './Details';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '3rem',
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
      maxWidth: '200',
    },
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
    width: 'auto',
    height: 200,
    padding: '0 2rem',
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
  },
}));

const Contest = () => {
  const classes = useStyles();

  return (
    <Card className={classes.main}>
      {[...Details].map((detail, index) => {
        return (
          <Card variant="outlined" className={classes.root}>
            <img className={classes.cover} src={Image} alt="hNCC" />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="h3">{detail.contestName}</Typography>
                <Typography variant="h5" color="#dbcbbd">
                  {detail.date}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                  style={{ textAlign: 'left' }}
                >
                  {detail.description}
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <IconButton className={classes.icnBtn} aria-label="download">
                  <GetAppIcon />
                  <Typography variant="h6">
                    <a className={classes.dwnBtn} href={Image} download>
                      Download Brochure
                    </a>
                  </Typography>
                </IconButton>
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
