import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import OceanImage from '../../images/ocean.jpg'
import Button from '../Button'
import TitleContent from '../../../content/main'

const useStyles = makeStyles(theme => ({
  heroContainer: {
    background: `url(${OceanImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.2)',
    objectFit: 'contain',
    marginTop: '-80px'
  },
  heroBtns: {
    marginTop: '32px'
  },
  title: {
    fontFamily: 'Permanent Marker',
    fontWeight: 400,
    color: '#fff',
    fontSize: '100px',
    marginTop: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '70px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '60px'
    }
  },
  paragraph: {
    fontFamily: 'Permanent Marker',
    marginTop: '8px',
    color: '#fff',
    fontSize: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    }
  },
}))

function HeroSection() {
  const classes = useStyles()
  
  return (
    <div className={classes.heroContainer}>
      <h1 className={classes.title}>{TitleContent.title}</h1>
      <p className={classes.paragraph}>{TitleContent.paragraph}</p>
      <br />
      <div className={classes.heroBtns}>
        <Button big primary>Get Started</Button>
      </div>
    </div>
  )
}

export default HeroSection