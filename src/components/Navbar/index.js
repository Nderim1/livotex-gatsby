import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FaBars, FaTimes } from 'react-icons/fa'
import { DiErlang } from 'react-icons/di'
import { IconContext } from 'react-icons/lib'

const useStyles = makeStyles(theme => ({
  nav: {
    background: props => props.scroll ? '#fff' : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255,255,255,0) 100%)',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem',
    position: 'sticky',
    top: 0,
    zIndex: 9999,
    [theme.breakpoints.down('md')]: {
      background: props => props.click ? '#fff' : 'transparent',
      transition: '0.3s ease'
    }
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '80px',
    zIndex: '1',
    width: '100%',
    maxWidth: '1000px'
  },
  navLogo: {
    color: '#141414',
    justifySelf: 'flex-start',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Permanent Marker, cursive'
  },
  navIcon: {
    margin: '0 0.5rem 0 2rem'
  },
  mobileIcon: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      position: 'absolute',
      top: '0',
      right: '0',
      transform: 'translate(-100%, 60%)',
      fontSize: '1.8rem',
      cursor: 'pointer'
    }
  },
  navMenu: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '90vh',
      position: 'absolute',
      top: props => props.click ? '100%' : '-3000px',
      opacity: '1',
      transition: '0.3s ease',
      background: '#fff'
    }
  },
  navItem: {
    cursor: 'pointer',
    height: '80px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  navLinks: {
    color: '#141414',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    height: '100%',
    fontFamily: 'Ubuntu, sans-serif',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: '2rem',
      width: '100%',
      display: 'table',
      '&:hover': {
        color: '#ff4040',
        transition: '0.3s ease'
      }
    }
  }
}))

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)
  const classes = useStyles({scroll, click})
  
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleClick = () => {
    setClick(!click)
  }

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className={classes.nav}>
          <div className={classes.navContainer}>
            <div className={classes.navLogo} to='/'>
              <DiErlang className={classes.navIcon} />
              Explor
            </div>
            <div className={classes.mobileIcon} onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={classes.navMenu}>
              <li className={classes.navItem}>
                <div className={classes.navLinks} to='/'>Home</div>
              </li>
              <li className={classes.navItem}>
                <div className={classes.navLinks} to='/about'>About</div>
              </li>
              <li className={classes.navItem}>
                <div className={classes.navLinks} to='/contacts'>Contacts</div>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar