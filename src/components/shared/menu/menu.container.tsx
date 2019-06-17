import React, { memo } from "react"
import Menu from "./menu"
import { connect } from "react-redux"
import { IStore } from "@custom-types/store"
import { useStaticQuery, graphql } from "gatsby"
import { IMetaData, IProjectsData } from "model"
import { menuOpenAction } from "@store/actions"
import { Dispatch } from "redux"
import { themes } from "@style/theme"
import { ThemeProvider } from "styled-components"

interface Data {
  socialData: IMetaData
  projectsData: IProjectsData
}

interface Props {
  menuOpen: IStore["menuOpen"]
  firstEntrance: IStore["firstEntrance"]
  secondaryTheme: IStore["secondaryTheme"]
}

interface DispatchProps {
  setMenuOpen: (isOpen: IStore["menuOpen"]) => void
}

type AllProps = DispatchProps & Props

const mapStateToProps = ({
  menuOpen,
  secondaryTheme,
  firstEntrance,
}: IStore) => {
  return { menuOpen, secondaryTheme, firstEntrance }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setMenuOpen: (isOpen: boolean) => {
      dispatch(menuOpenAction(isOpen))
    },
  }
}

const MenuContainer: React.FunctionComponent<AllProps> = memo(
  ({ menuOpen, setMenuOpen, firstEntrance, secondaryTheme }) => {
    const data: Data = useStaticQuery(graphql`
      query {
        socialData: site {
          siteMetadata {
            social {
              email {
                url
                label
              }
              twitter {
                url
                label
              }
              instagram {
                url
                label
              }
              dribbble {
                url
                label
              }
              github {
                url
                label
              }
              linkedin {
                url
                label
              }
            }
          }
        }

        projectsData: site {
          siteMetadata {
            projects {
              bright {
                label
                path
              }
              brandwatch {
                label
                path
              }
              monster {
                label
                path
              }
              jamieson {
                label

                path
              }
              sketchbook {
                label
                path
              }
            }
          }
        }
      }
    `)
    return (
      <ThemeProvider theme={themes[secondaryTheme]}>
        <Menu
          open={menuOpen}
          projects={data.projectsData.siteMetadata.projects}
          social={data.socialData.siteMetadata.social}
          setMenuOpen={setMenuOpen}
          firstEntrance={firstEntrance}
        />
      </ThemeProvider>
    )
  }
)

const ConnectedMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer)

export default ConnectedMenu
