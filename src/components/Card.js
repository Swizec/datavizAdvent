import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  .Card {
    border-radius: 20px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .Card:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }
  .Card:hover img {
    transform: translateY(-20px);
  }
  .CardTop {
    background: rgba(255,255,255,1);
background: -moz-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,0.82) 18%, rgba(237,237,237,0) 100%);
background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(18%, rgba(246,246,246,0.82)), color-stop(100%, rgba(237,237,237,0)));
background: -webkit-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,0.82) 18%, rgba(237,237,237,0) 100%);
background: -o-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,0.82) 18%, rgba(237,237,237,0) 100%);
background: -ms-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,0.82) 18%, rgba(237,237,237,0) 100%);
background: linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,0.82) 18%, rgba(237,237,237,0) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );

    border-radius: 20px;
    width: 300px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 20px 20px 0px 0px;
  }
  .CardBottom {
    border-top: 5px solid gold;
    border-radius: 0 0 20px 20px ;
    background-color: #420000;
    background-image: linear-gradient(45deg, #420000 39%, #a30000 100%);

    width: 300px;
    height: 250px;
    position: relative;
    overflow: hidden;
  }
  .Card img {
    height: 100%;
    display: block;
    margin: 0 auto;
    background-size: cover;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
    <div className="Card">
      <div className="CardTop">{props.cover}</div>

      <div className="CardBottom">
        <h1>{props.title}</h1>
      </div>
    </div>
  </Wrapper>
)

export default Card
