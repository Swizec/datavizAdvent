import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
.Card {
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(0,0,0,0.25);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .Card:hover {
    transform: scale(1.1, 1.1);
  }
  .CardTop {
    border-radius: 20px;
    width: 300px;
  height: 200px;
  position: relative;
  overflow: hidden;
  
  }
  .CardBottom {
    border-radius: 0 0 20px 20px ;
    background-color: #04081F;
    width: 300px;
  height: 250px;
  position: relative;
  overflow: hidden;
  }
  .Card img {
      position: absolute;
      top: 0;
      height: 110%;
  }
  h1 {
      color: #fff;
      text-align: center;
      font-size: 30px;
      padding: 0 2rem;
  }
`


const Card = props => (
    <Wrapper>
        <div className='Card'>
            <div className='CardTop'>
                {props.cover}
            </div>
            <div className='CardBottom'>
                <h1>{props.title}</h1>
            </div>
        </div>
    </Wrapper>
  )
  
  export default Card