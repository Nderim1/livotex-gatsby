import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

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
    maxWidth: '600px',
    maxHeight: '800px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '300px'
    }
  },
  imageTitle: {
    textAlign: 'center',
    marginBottom: '12px'
  },
  imageDescription: {
    marginTop: '12px',
    fontSize: '16px'
  },
  cardRoot: {
    background: 'linear-gradient(#eb01a5, #d13531);'
  }
}))

const Image = () => {
  const classes = useStyles()
  const [images, setImages] = React.useState([])
  const [openImageModal, setOpenImageModal] = React.useState(false)
  const [imageToOpen, setImageToOpen] = React.useState({})
  React.useEffect(() => {
    async function loadImages() {
      const data = await import('../../../content/images')
      console.log(data.images)
      setImages(data.images)
    }
    loadImages()
  }, [])

  const onImageClick = (image) => {
    setOpenImageModal(!openImageModal)
    setImageToOpen(image || {})
  }

  return (
    <div className={classes.imageContainer}>
      <h1>Our T-Shirts</h1>
      <div className={classes.imageGrid}>
        {images.map((imageEl, key) => {
          return (<>
          <Card className={classes.cardRoot}>
          {/* <Img src={imageEl.image} /> */}
                  <CardMedia
                  key={imageEl.title}
                className={classes.imageItem}
                image={imageEl.image}
                title={imageEl.title}
                onClick={() => onImageClick(imageEl)}  
              />
              </Card>
            {/* <div className={classes.imageItem} style={{
              backgroundImage: `url("${imageEl.image}")`
            }}
              alt={imageEl.title} 
              
            /> */}
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
            <h2 className={classes.imageTitle}>{imageToOpen.title}</h2>
            <img className={classes.openedImage} src={imageToOpen.image} alt="" />
            <div className={classes.imageDescription}>{imageToOpen.description}</div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Image