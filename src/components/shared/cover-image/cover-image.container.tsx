import React from "react"
import { ProjectItem } from "@custom-types/model"
import { graphql, useStaticQuery } from "gatsby"
import CoverImage from "./cover-image"

interface Props {
  imagePath: ProjectItem["images"]
}

const CoverImageContainer: React.FunctionComponent<Props> = ({ imagePath }) => {
  const data = useStaticQuery(graphql`
    query {
      bright: file(relativePath: { eq: "project/bright/cover-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      brandwatch: file(
        relativePath: { eq: "project/brandwatch/cover-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      monster: file(relativePath: { eq: "project/monster/cover-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jamieson: file(relativePath: { eq: "project/jamieson/cover-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sketchbook: file(
        relativePath: { eq: "project/sketchbook/cover-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <CoverImage imageObject={data[imagePath].childImageSharp.fluid} />
}

export default CoverImageContainer
