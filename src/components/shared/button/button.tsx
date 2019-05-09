import React from "react"
import styled from "styled-components"
import { between } from "polished"
import { uniformScale, mq } from "@style/utils"
import {
  emBreakpoints,
  typeScale,
  fontWeight,
  fontFamily,
  borderRadius,
  duration,
} from "@style/variables"

import { OutboundLink } from "gatsby-plugin-google-analytics"

interface Props {
  href: string
}

const Button: React.FunctionComponent<Props> = ({ href }) => {
  return (
    <StyledButton href={href} target="_blank">
      <StyledButtonInner>View some previous work</StyledButtonInner>
    </StyledButton>
  )
}

const StyledButton = styled(OutboundLink)`
  position: relative;

  overflow: hidden;
  font-family: ${fontFamily.base};

  color: #fff;

  font-weight: ${fontWeight.base.bold};

  font-size: ${typeScale[2]};

  border-radius: ${borderRadius.pill};

  text-decoration: none;
  text-shadow: 0 0 0.03em rgba(0, 0, 0, 0.5);

  padding: 1em 1.95em;
  background: linear-gradient(160deg, #d450ff 0%, #6609e1 100%);

  &::before,
  &::after {
    transition: opacity ${duration.fast} linear;
    content: "";

    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    opacity: 0;

    border-radius: ${borderRadius.pill};
  }

  &::before {
    box-shadow: inset 0 -0.25em 1em 0 #c615a8;
    z-index: 2;
  }

  &::after {
    background: linear-gradient(160deg, #c615a8 0%, #4d0fbe 100%);
    z-index: 1;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 0.1;
    }

    &::after {
      opacity: 0.75;
    }
  }

  ${mq.between("bottomThumb", "bottomUltra")`
    font-size: ${between(
      typeScale[2],
      typeScale[4],
      emBreakpoints.bottomThumb,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(typeScale[4], "topUltra")};
  `}
`

const StyledButtonInner = styled.span`
  position: relative;
  z-index: 2;
`

export default Button