import React, { ReactNode, useEffect } from "react"
import Project from "./project"
import { IProjectsData, TProjectNames } from "@custom-types/model"
import { graphql, useStaticQuery } from "gatsby"
import { IStore } from "store"
import { connect } from "react-redux"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import { Dispatch } from "redux"
import { setTopbarThemeAction, setMenuThemeAction } from "@store/actions"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { TransitionPortal } from "gatsby-plugin-transition-link"

interface Data {
  projectsData: IProjectsData
}

interface Props {
  projectName: TProjectNames
  children: ReactNode
}

interface DispatchProps {
  setTopbarToSecondaryTheme: () => void
  setMenuToPrimaryTheme: () => void
}

const mapStateToProps = ({ secondaryTheme, firstEntrance }: IStore) => {
  return { secondaryTheme, firstEntrance }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setTopbarToSecondaryTheme: () => {
      dispatch(setTopbarThemeAction("secondary-theme"))
    },
    setMenuToPrimaryTheme: () => {
      dispatch(setMenuThemeAction("primary-theme"))
    },
  }
}

export type ContainerProps = Props & Partial<IStore>

type AllProps = ContainerProps & DispatchProps

const ProjectContainer: React.FunctionComponent<AllProps> = ({
  children,
  projectName,
  secondaryTheme = "light",
  setTopbarToSecondaryTheme,
  setMenuToPrimaryTheme,
}) => {
  // Set initial theme state on first load for projects as they differ from home
  useEffect(() => {
    setTopbarToSecondaryTheme()
    setMenuToPrimaryTheme()
  }, [])

  const transitionState = useTransitionState()

  const data: Data = useStaticQuery(graphql`
    query {
      projectsData: site {
        siteMetadata {
          projects {
            bright {
              label
              desc
              path
              details {
                role
                location
                date
              }
              contents {
                label
                key
              }
            }
            brandwatch {
              label
              desc
              path
              details {
                role
                location
                date
              }
              contents {
                label
                key
              }
            }
            monster {
              label
              desc
              path
              details {
                role
                location
                date
              }
              contents {
                label
                key
              }
            }
            jamieson {
              label
              desc
              path
              details {
                role
                location
                date
              }
              contents {
                label
                key
              }
            }
            sketchbook {
              label
              desc
              path
              details {
                role
                location
                date
              }
              contents {
                label
                key
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={themes[secondaryTheme]}>
      <TransitionPortal>
        <Project
          projectName={projectName}
          projectData={data.projectsData.siteMetadata.projects}
          transitionState={transitionState}
        >
          {children}
        </Project>
      </TransitionPortal>
    </ThemeProvider>
  )
}

const ConnectedProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer)

export default ConnectedProjectContainer
