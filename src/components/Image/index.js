import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { makeStyles } from '@material-ui/styles'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles(theme => ({
  imageContainer: {
    textAlign: 'center',
    margin: '150px 0',
    '& h1': {
      marginBottom: '64px'
    }
  },
  imageGrid: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridAutoRows: 'minmax(50px, auto)',
    margin: '0 auto',
    maxWidth: '1000px',
    width: '100%',
    padding: '0 32px',
    '& div:hover': {
      transform: 'scale(1.1)',
      transition: '0.5 all ease !important'
    }
  },
  imageItem: {
    width: '100%',
    height: '300px',
    cursor: 'pointer',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    '&:nth-child(5)': {
      gridColumnEnd: 'span 2',
      gridGap: '10px',
    },
    '&:nth-child(9)': {
      gridGap: '10px',
      gridRowStart: '4',
      gridColumnEnd: 'span 2'
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  openedImage: {
    maxWidth: '500px',
    maxHeight: '700px'
  },
  imageTitle: {
    textAlign: 'center',
    marginBottom: '12px'
  },
  imageDescription: {
    marginTop: '12px',
    fontSize: '16px'
  }
}))

const Image = () => {
  const classes = useStyles()
  const [images, setImages] = React.useState([])
  const [openImageModal, setOpenImageModal] = React.useState('')
  React.useEffect(() => {
    async function loadImages() {
      const data = await import('../../../content/images')
      console.log(data.images)
      setImages(data.images)
    }
    loadImages()
  }, [])

  const onImageClick = (image) => {
    console.log('open now')
    setOpenImageModal(image)
  }
  return (
    <div className={classes.imageContainer}>
      <h1>Our T-Shirts</h1>
      <div className={classes.imageGrid}>
        {images.map((imageEl, key) => {
          return (<>
            <div className={classes.imageItem} style={{
              backgroundImage: `url("${imageEl.image}")`
            }}
              alt={imageEl.title} 
              onClick={() => onImageClick(imageEl)}  
            />
          </>)
        })}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openImageModal}
        onClose={() => setOpenImageModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openImageModal}>
          <div className={classes.paper}>
            <h2 className={classes.imageTitle}>{openImageModal.title}</h2>
            <img className={classes.openedImage} src={openImageModal.image} alt="" />
            <div className={classes.imageDescription}>{openImageModal.description}</div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Image