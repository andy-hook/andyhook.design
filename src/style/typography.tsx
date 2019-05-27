import { css } from "styled-components"
import { fontFamily, fontWeight, letterSpacing } from "@style/variables"
import { themeText } from "@style/theme"

// Base
export const typeBase = css`
  font-family: ${fontFamily.base};
`

export const typeBaseRegular = css`
  ${typeBase}
  font-weight: ${fontWeight.base.regular};
  letter-spacing: ${letterSpacing.base.regular};
`

export const typeBaseMedium = css`
  ${typeBase}
  font-weight: ${fontWeight.base.medium};
  letter-spacing: ${letterSpacing.base.medium};
`

export const typeBaseBold = css`
  ${typeBase}
  font-weight: ${fontWeight.base.bold};
  letter-spacing: ${letterSpacing.base.bold};
`

// Display
export const typeDisplay = css`
  font-family: ${fontFamily.display};
`

export const typeDisplayMedium = css`
  ${typeDisplay}
  font-weight: ${fontWeight.display.semi};
  letter-spacing: ${letterSpacing.display.medium};
`

export const typeDisplaySemi = css`
  ${typeDisplay}
  font-weight: ${fontWeight.display.semi};
  letter-spacing: ${letterSpacing.display.semi};
`

export const typeTitle = css`
  ${typeDisplaySemi}
  color: ${themeText(200)};
`