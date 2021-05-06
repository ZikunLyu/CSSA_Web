/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import Image from "../components/image"
import "../styles/layout.css"

import homepagebanner from "../images/banner/homepagebanner3.gif"

function BannerImage(props){
  var bannerName = props.name;
    if(bannerName==="HomeBanner"){
      return <img src={homepagebanner} className="static"></img>
      
    }else{
      return <div className = "Image-Wrapper" style={{
        marginBottom: `160px`,
       }}><Image name={bannerName} height="730px"/>
     </div>
    }
}

const Layout = props => {
  return (
    <>
      <Header />
      <BannerImage name={props.bannerName} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 0`,
        }}
      >
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
