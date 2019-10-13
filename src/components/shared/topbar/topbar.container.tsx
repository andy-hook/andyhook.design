import React, { memo } from "react"
import Topbar from "./topbar"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { IStore } from "@custom-types/store"
import { menuOpenAction } from "@store/actions"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"

interface DispatchProps {
  openMenu: () => void
  closeMenu: () => void
  menuOpen: IStore["menuOpen"]
}

type ContainerProps = DispatchProps

const mapStateToProps = ({ menuOpen }: IStore) => {
  return { menuOpen }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    openMenu: () => {
      dispatch(menuOpenAction(true))
    },
    closeMenu: () => {
      dispatch(menuOpenAction(false))
    },
  }
}

const TopbarContainer: React.FunctionComponent<ContainerProps> = memo(
  ({ menuOpen, openMenu, closeMenu }) => {
    return (
      <ThemeProvider theme={menuOpen ? themes.light : themes.dark}>
        <Topbar open={menuOpen} openMenu={openMenu} closeMenu={closeMenu} />
      </ThemeProvider>
    )
  }
)

const ConnectedTopbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopbarContainer)

export default ConnectedTopbar
