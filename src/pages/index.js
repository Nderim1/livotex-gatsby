import * as React from "react"
import { createTheme, ThemeProvider, styled } from '@material-ui/core/styles';
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from '../components/HeroSection'
import Image from '../components/Image'

const theme = createTheme({
  status: {
    danger: 'red',
  }
})

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Seo title="Home" />
      <HeroSection />
      <Image />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
