import { makeStyles } from '@material-ui/core'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { DiErlang } from 'react-icons/di'
import { Link } from 'gatsby'

const useStyles = makeStyles(theme => ({
  footerContainer: {
    backgroundColor: '#101522',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  socialMedia: {
    maxWidth: '1000px',
    width: '100%'
  },
  socialMediaWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    maxWidth: '1000px',
    margin: '20px auto',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  socialLogo: {
    color: '#fff',
    justifySelf: 'start',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px'
  },
  socialIcon: {
    marginRight: '10px'
  },
  websiteRights: {
    color: '#fff',
    marginBottom: '16px',
    fontFamily: 'Ubuntu'
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '240px',
  },
  socialIconLink: {
    color: '#fff',
    fontSize: '24px'
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footerContainer}>
      <section className={classes.socialMedia}>

        <div className={classes.socialMediaWrap}>
          <Link className={classes.socialLogo}>
            <DiErlang className={classes.socialIcon} />
            Explor
          </Link>
          <small className={classes.websiteRights}>
            Explor {new Date().getFullYear()}
          </small>
          <div className={classes.socialIcons}>
            {/* <div className={classes.socialIcons}> */}
            <a className={classes.socialIconLink} href='/' target='_blank' aria-label='facebook'>
              <FaFacebook />
            </a>
            <a className={classes.socialIconLink} href='/' target='_blank' aria-label='instagram'>
              <FaInstagram />
            </a>
            <a className={classes.socialIconLink} href='/' target='_blank' aria-label='linkedin'>
              <FaLinkedin />
            </a>
            <a className={classes.socialIconLink} href='/' target='_blank' aria-label='twitter'>
              <FaTwitter />
            </a>
            {/* </div> */}
          </div>

        </div>
      </section>
    </div>
  )
}

export default Footer