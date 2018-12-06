import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Tilt from 'react-tilt'

import './Header.css'
import AdventLogo from '../assets/AdventLogo.png'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export default class Header extends Component {
  render() {
    const { imageURL } = this.props
    return (
      <Wrapper>
        <div className="Header" style={{ background: `url(${imageURL})` }}>
          <div className="HeaderGroup">
            <Tilt
              className="Tilt"
              options={{
                max: 55,
                scale: 1.5,
              }}
              style={{ height: 100, width: 100 }}
            >
              <Link to="/">
                <img src={AdventLogo} alt="logo" />
              </Link>
            </Tilt>
          </div>
        </div>
      </Wrapper>
    )
  }
}
