import React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals('ScrollTrigger', ScrollTrigger)

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <Layout>
        <SEO title="anne's reads 📰" />
        <h1 style={{ fontSize: '1rem', textAlign: 'center' }}>
          under construction
        </h1>
        
      </Layout>
    )
  }
}

export default IndexPage
