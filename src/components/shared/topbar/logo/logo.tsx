import React, { memo } from "react"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { themeText } from "@style/theme"
import { Ref } from "@custom-types/ref"
import { Expo, TweenMax } from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"

interface Props {
  hidden?: boolean
}

const Logo: React.FunctionComponent<Props> = memo(({ hidden }) => {
  const logoRef = React.useRef() as Ref

  const animateHide = () => {
    TweenMax.to(logoRef.current, 0.5, {
      ease: Expo.easeOut,
      y: "25%",
      opacity: 0,
    })
  }

  const animateShow = () => {
    TweenMax.to(logoRef.current, 0.5, {
      ease: Expo.easeOut,
      y: "0%",
      opacity: 1,
    })
  }

  useDeferredRunEffect(() => {
    if (hidden) {
      animateHide()
    } else {
      animateShow()
    }
  }, [hidden])

  return (
    <LogoWrap ref={logoRef}>
      <LogoLink to="/">
        <LogoLettering viewBox="0 0 665.2 148.6">
          <path
            d="M23.8,71.4l19.6-2.9c4.5-0.6,6-2.9,6-5.7c0-5.7-4.4-10.4-13.4-10.4c-9.4,0-14.6,6-15.2,12.9l-19.1-4
        c1.3-12.5,12.8-26.2,34.1-26.2c25.2,0,34.6,14.2,34.6,30.3v39.2c0,4.2,0.5,9.9,1,12.6H51.6c-0.5-2.1-0.8-6.5-0.8-9.5
        c-4,6.3-11.7,11.8-23.5,11.8c-17,0-27.3-11.5-27.3-24C0,81.2,10.5,73.3,23.8,71.4z M49.4,85v-3.6l-18,2.8c-5.5,0.8-9.9,3.9-9.9,10
        c0,4.7,3.4,9.2,10.4,9.2C40.9,103.4,49.4,99,49.4,85z"
          />
          <path
            d="M97.8,117.2H76.3V37.5h20.9v9.9c4.9-8.3,14.4-12,23-12c19.7,0,28.8,14.1,28.8,31.6v50.2h-21.5V70.7
        c0-8.9-4.4-15.9-14.7-15.9c-9.4,0-14.9,7.3-14.9,16.5V117.2z"
          />
          <path
            d="M236.2,102.8c0,5.3,0.3,11.2,0.6,14.4h-20.6c-0.3-1.6-0.8-5.5-0.8-9.2c-3.6,6.3-11.6,11.2-22.3,11.2
        c-22.7,0-38.8-17.8-38.8-41.9c0-23.3,15.7-41.6,38.2-41.6c13.8,0,20.2,5.7,22.5,9.9V0h21.2V102.8z M195.7,99.8
        c11,0,19.6-8.4,19.6-22.8c0-14.2-8.6-22.2-19.6-22.2c-11,0-19.7,8.1-19.7,22.3C176,91.4,184.4,99.8,195.7,99.8z"
          />
          <path d="M255.4,148.6l18.8-41.4l-33.8-69.6h24.1l21.2,46.6l19.6-46.6h23l-50,111H255.4z" />
          <path
            d="M356,117.2h-21.5V0H356v44.2c5.2-6.2,13.9-8.7,21.5-8.7c20.2,0,29.6,14.1,29.6,31.6v50.2h-21.5V70.7
        c0-8.9-4.4-15.9-14.7-15.9c-9.1,0-14.4,6.8-14.9,15.5V117.2z"
          />
          <path
            d="M495.6,77.3c0,24.4-18,42.2-41.7,42.2c-23.8,0-41.7-17.8-41.7-42.2c0-24.6,18-42.2,41.7-42.2
        C477.6,35.1,495.6,52.8,495.6,77.3z M474.1,77.3c0-15.1-9.7-22.7-20.2-22.7c-10.5,0-20.2,7.6-20.2,22.7c0,14.9,9.7,22.7,20.2,22.7
        C464.4,100,474.1,92.4,474.1,77.3z"
          />
          <path
            d="M583.2,77.3c0,24.4-18,42.2-41.7,42.2s-41.7-17.8-41.7-42.2c0-24.6,18-42.2,41.7-42.2S583.2,52.8,583.2,77.3z
        M561.7,77.3c0-15.1-9.7-22.7-20.2-22.7c-10.5,0-20.2,7.6-20.2,22.7c0,14.9,9.7,22.7,20.2,22.7C552,100,561.7,92.4,561.7,77.3z"
          />
          <path d="M632.7,71l32.5,46.1h-26.4l-21-30.4l-8.9,9.4v21h-21.5V0h21.5v67.2l27.5-29.6h28.2L632.7,71z" />
        </LogoLettering>
      </LogoLink>
    </LogoWrap>
  )
})

const LogoWrap = styled.div`
  font-size: 1em;
  width: 1em;
  height: 0.2em;
`

const LogoLink = styled(Link)`
  display: block;
`

const LogoLettering = styled.svg`
  display: block;

  & path {
    fill: ${themeText(500)};
  }
`

export default Logo