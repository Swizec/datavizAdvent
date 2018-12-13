import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`
const WrapperFooter = styled.div`
 background-color: #04081f;
background-image: linear-gradient(45deg, #04081f 33%, #0e1842 100%);
text-align: center;
height: 100%;
padding: 1rem 0;
color: #fff;
display: grid;
align-items: center;
justify-items: center;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas:
"BU WL YS";
@media (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-template-areas:
"BU"
"WL"
"YS";
}
h2 {
    grid-area: WL;
}
.Built {
    grid-area: BU;
}
.Years {
    grid-area: YS;
    font-size: 18px;
}
p {
    font-size: 18px;
}
`

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <WrapperFooter>
            <h2>With love <span role="img" aria-label="sheep">❤️</span></h2>
            <p className='Built'>
                Built by <a href="https://swizec.com">Swizec</a><br />
                Cheers <span role="img" aria-label="sheep">❤️</span>
            </p>
            <p className='Years'>
                Happy Holidays!
                <span role="img" aria-label="sheep">🎄</span>
            </p>
        </WrapperFooter>
      </Wrapper>
    )
  }
}
