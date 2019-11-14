import Link from "gatsby-plugin-transition-link"
import styled from "styled-components"
import { typeBaseSemibold, typeSizeBaseXs } from "@style/typography"
import { themeText } from "@style/theme"
import { lineHeight } from "@style/variables"
import { mq } from "@style/media-queries"

export const Container = styled.nav`
  &.is-hidden {
    opacity: 0;
  }

  ${mq.lessThan("bottomPalm")`
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  `}
`

export const List = styled.ul`
  ${typeBaseSemibold}
  ${typeSizeBaseXs}

  display: flex;
  margin-right: -1em;
`

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 1.1em;
  }
`

export const ListItemLink = styled(Link)`
  display: block;
  color: ${themeText(1000)};

  padding: 1em;

  line-height: ${lineHeight.flat};

  &.active {
    color: ${themeText(400)};
  }
`