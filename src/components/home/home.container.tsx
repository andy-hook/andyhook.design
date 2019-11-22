import React, { memo, ReactNode } from "react"
import { Store } from "@custom-types/store"
import { connect } from "react-redux"
import Home from "./home"
import PageContainer from "@components/shared/page/page.container"

interface IProps {
  children: ReactNode
}

const mapStateToProps = ({ menuOpen }: Store) => {
  return { menuOpen }
}

const HomeContainer: React.FunctionComponent<IProps> = memo(({ children }) => {
  return (
    <PageContainer>
      <Home>{children}</Home>
    </PageContainer>
  )
})

const ConnectedHomeContainer = connect(mapStateToProps)(HomeContainer)

export default ConnectedHomeContainer
