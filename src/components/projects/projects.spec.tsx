import React from "react"

import Projects from "./projects"
import { renderWithTheme } from "@test-utils"

jest.mock("@hooks/page-transition")
jest.mock("@components/projects/projects-grid/projects-grid.container")

describe("<Projects />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Projects />)
    expect(tree).toMatchSnapshot()
  })
})
