import React from "react"

import { storiesOf } from "@storybook/react"
import Hero from "./hero"
import { socialIcons } from "../../../mock-data"

storiesOf("Hero", module).add("with text", () => (
  <Hero socialIconData={socialIcons} />
))