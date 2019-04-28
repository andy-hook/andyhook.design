import React, { useEffect } from "react"
import styled from "styled-components"
import { between } from "polished"
import { uniformScale, mq } from "../../style/utils"
import mark from "../../images/svg-import/mark.svg"
import {
  emBreakpoints,
  typeScale,
  fontWeight,
  letterSpacing,
  fontFamily,
} from "../../style/variables"
import { Expo, TimelineLite } from "gsap"

type ref = React.MutableRefObject<HTMLImageElement>

interface Props {
  visible?: boolean
}

const Logo: React.FunctionComponent<Props> = ({ visible = true }) => {
  const logoPosRef: ref = React.useRef() as ref
  const logoPosTL = new TimelineLite()

  useEffect(() => {
    if (visible) {
      logoPosTL.to(logoPosRef.current, 0.5, {
        ease: Expo.easeOut,
        transform: "translate3d(0,0,0)",
        opacity: 1,
      })
    }
  })

  return (
    <LogoPos ref={logoPosRef}>
      <LogoInner>
        <LogoMark />
        <LogoTitle>Andy Hook</LogoTitle>
        <LogoSubtle>Interface Developer</LogoSubtle>
      </LogoInner>
    </LogoPos>
  )
}

const LogoPos = styled.div`
  display: flex;

  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;

  top: 9vh;

  z-index: 1;

  transform: translate3d(0, -100%, 0);
  opacity: 0;
`

const LogoInner = styled.h1`
  display: flex;
  align-items: center;
  font-family: ${fontFamily.base};
  color: white;
  font-size: ${typeScale[1]};
  font-weight: ${fontWeight.base.medium};

  letter-spacing: ${letterSpacing.base};

  ${mq.greaterThan("bottomThumb")`
    margin-left: -1.5em;
  `}

  ${mq.between("bottomThumb", "bottomUltra")`
    font-size: ${between(
      typeScale[1],
      typeScale[2],
      emBreakpoints.bottomThumb,
      emBreakpoints.bottomDesk
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(typeScale[2], "topUltra")};
  `}
`

const LogoMark = styled(mark)`
  font-size: 4.5em;
  width: 1em;
  height: 1em;
`

const LogoTitle = styled.span`
  margin-left: 1.5em;
  margin-right: 0.5em;

  ${mq.lessThan("bottomThumb")`
    display: none;
  `}
`

const LogoSubtle = styled.span`
  opacity: 0.4;

  ${mq.lessThan("bottomThumb")`
    display: none;
  `}
`

export default Logo