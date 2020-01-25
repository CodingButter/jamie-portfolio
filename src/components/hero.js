import React from "react"
import styled, { css } from "styled-components"
import Img from "gatsby-image"

import BackgroundImage from "../components/backgroundImage"

const Hero = ({ image, children, overlay }) => {
  return (
    <Container overlay={overlay}>
      <Content>{children}</Content>
      <BackgroundImage image={image} />
    </Container>
  )
}

export default Hero

Hero.defaultProps = {
  overlay: 0.3,
}

const Container = styled.div`
  color: white;

  overflow: hidden;
  position: relative;
  min-height: 420px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ overlay }) =>
    overlay &&
    css`
      &:after {
        z-index: 1;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, ${overlay});
      }
    `}
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 120px 20px;
`
