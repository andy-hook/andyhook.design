import heroBg from "@images/hero-bg.svg"

import "@style/fonts.css"
import styled from "styled-components"
import { themeTone } from "@style/theme"
import { zIndex } from "@style/variables"
import { mq } from "@style/media-queries"

export const SiteWrapper = styled.div`
  background-color: ${themeTone(200)};
`

export const SiteTexture = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: url(${heroBg}) repeat top left;

  z-index: ${zIndex.floor};

  ${mq.greaterThan("topWall")`
    background-size: 35%;
  `}
`
