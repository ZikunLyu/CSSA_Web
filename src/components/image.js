import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function renderImage(file) {
  return <Img fluid={file.node.childImageSharp.fluid} alt="img" />
}

const Image = function ({ name }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                name
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      //Scan through all images entries to find the specific image with identical name as $name
      render={({ images }) =>
        renderImage(images.edges.find(image => image.node.name === name))
      }
    />
  )
}

export default Image
