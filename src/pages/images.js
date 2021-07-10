import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from '../components/Image'

const SecondPage = () => (
  <Layout>
    <Seo title="Images" />
    <Image />
  </Layout>
)

export default SecondPage
