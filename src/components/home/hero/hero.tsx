import React, { useEffect, memo } from "react"
import styled from "styled-components"
import Details from "./details/details"
import { mq } from "@style/media-queries"
import { zIndex } from "@style/variables"
import { runAnimation, animation } from "./hero.animation"
import { Ref } from "@custom-types/ref"
import heroBg from "@images/hero-bg.svg"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"
import Gutter from "@components/shared/gutter/gutter"
import { isTheme, themeLayer, themeLayerAlpha, themeTone } from "@style/theme"
import { ISocialMeta } from "model"

interface Props {
  loaderVisible: boolean
  firstEntrance: boolean
  socialIconData: ISocialMeta
  transitionState: ItransitionState
}

const Hero: React.FunctionComponent<Props> = memo(
  ({ socialIconData, loaderVisible, firstEntrance, transitionState }) => {
    const detailsRef = React.useRef() as Ref
    const backgroundRef = React.useRef() as Ref

    const refs = {
      details: detailsRef,
      background: backgroundRef,
    }

    useEffect(() => {
      const { transitionStatus, exit, entry } = transitionState

      switch (transitionStatus) {
        case "POP":
          runAnimation(refs, "pop")
          break
        case "entering":
          switch (entry.state.animType) {
            case "enter-from-project":
              {
                runAnimation(refs, "enterFromProject")
              }
              break

            // This clause works around bug with pushstate and history navigation
            // Hopefully this can be resolved and pop will run consistently
            // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
            default:
              runAnimation(refs, "pop")
          }
          break
        case "exiting":
          switch (exit.state.animType) {
            case "exit-to-project":
              {
                runAnimation(refs, "exitToProject")
              }
              break
          }
          break
      }
    }, [transitionState.transitionStatus])

    // Perform this immediatley without waiting for a trigger
    useEffect(() => {
      const backgroundEntranceAnimation = animation.background.siteEntrance

      if (firstEntrance && backgroundEntranceAnimation) {
        backgroundEntranceAnimation(backgroundRef)
      }
    }, [firstEntrance])

    // Only trigger site entrance animation when requested by loader
    useEffect(() => {
      if (!loaderVisible && firstEntrance) {
        runAnimation(refs, "siteEntrance")
      }
    }, [loaderVisible])

    return (
      <>
        <Container>
          <DetailsPos ref={detailsRef}>
            <Gutter>
              <Details buttonHref={socialIconData.dribbble.url} />
            </Gutter>
          </DetailsPos>

          <BackgroundContainer ref={backgroundRef}>
            <BackgroundGradient />
            <BackgroundTexture />
          </BackgroundContainer>
        </Container>
      </>
    )
  }
)

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const DetailsPos = styled.div`
  position: relative;

  width: 100%;

  margin-bottom: -6vh;

  z-index: ${zIndex.low};

  opacity: 0;

  will-change: transform;
`

const BackgroundContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${isTheme("dark", themeTone(200), themeTone(700))};

  overflow: hidden;

  z-index: ${zIndex.floor};

  opacity: 0;
`

const BackgroundTexture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: url(${heroBg}) repeat top left;

  ${isTheme("light", `opacity: 0.06;`)}

  z-index: ${zIndex.floor};

  ${mq.greaterThan("topWall")`
    background-size: 35%;
  `}
`

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: ${zIndex.medium};

  background: linear-gradient(
    175deg,
    ${themeLayerAlpha("lowest", 0)} 25%,
    ${themeLayer("lowest")} 65%
  );
`

export default Hero
