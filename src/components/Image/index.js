import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { makeStyles } from '@material-ui/styles'

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
    '& img:hover': {
      transform: 'scale(1.1)',
      transition: '0.5 all ease !important'
    }
  },
  // imageItem: {
  //   '&:nth-child(5)': {
  //     gridColumnEnd: 'span 2',
  //     gridGap: '10px',
  //   },
  //   '&:nth-child(9)': {
  //     gridGap: '10px',
  //     gridRowStart: '4',
  //     gridColumnEnd: 'span 2'
  //   },
  // }
}))

const Image = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {name: {regex: "/drink/"}}) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
            fluid(maxHeight: 600, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)

  return (
    <div className={classes.imageContainer}>
      <h1>View our drinks</h1>
      <div className={classes.imageGrid}>
        {data.allFile.edges.map((image, key) => {
          return (<GatsbyImage
            key={key}
            image={image.node.childImageSharp.gatsbyImageData}
            fluid={image.node.childImageSharp.fluid}
            className={classes.imageItem}
            alt={image.node.base.split('.')[0]}
          />)
        })}
      </div>
    </div>
  )
}

export default Image