import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: '4px',
    background: props => props.primary ? '#FF4040' : '#0467FB',
    whiteSpace: 'nowrap',
    padding: props => props.big ? '16px 64px' : '10px 20px',
    color: '#fff',
    fontSize: props => props.big ? '20px' : '16px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Ubuntu',
    '&:hover': {
      transition: 'all .3s ease-out',
      background: props => props.primary ? '#0467FB' : '#FF4040'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
}))

function Button ({children, primary, big}) {
  const classes = useStyles({primary, big})
  return (
    <button className={classes.button}>{children}</button>
  )
}

export default Button