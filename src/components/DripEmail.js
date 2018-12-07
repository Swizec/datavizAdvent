import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
h3 {
  font-weight: 900;
  font-size: 30px;
  text-align: center;
}
  .banner {
  background-color: #004230;
  padding: 2rem 2rem;
  margin: 0rem 0;
  color: #fff;
  font-weight: 800;
  text-align: center;
} 
.bannerText{
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
}
strong {
  color: gold;
}
  @media (max-width: 940px) {
    h3 {
      font-size: 25px;
    }
  }
`;
const WrapperGroup = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 3rem auto;
  padding: 0 2rem;
  color: #384047;
`
const WrapperForm = styled.div`
  input {
    max-width: 400px;
    margin: 0 auto;
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px;
    font-size: 14px;
    line-height: 1.428571429;
    
    text-transform: uppercase;
    vertical-align: middle;
    color: #fff;
    border: none;
    border-bottom: 2px solid red;
    background: rgba(0, 0, 0, 0.1);
  }
  input[type='submit'] {
    background-color: red;
    text-transform: uppercase;
    padding: 1rem;
    padding-bottom: 2rem;
    margin: 1rem 0;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 900;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background-image: none;
    border: none;
    font-size: 14px;
    width: 200px;
  }
  input[type='submit']:hover {
    background-color: gold;
  }
`

export default class DripEmail extends Component {
  render() {
    return (
      <Wrapper>
        <div className="banner">
        <h3 data-drip-attribute="headline">
        🎁 ReactVizHoliday 🎁 
        <br/>
        Learn React and Dataviz every day until Christmas 
        </h3>
          <div className='bannerText'>
          <p data-drip-attribute="description">
            Leave your <strong>email</strong> and get a new dataviz idea + solution every day
            until Christmas. <strong>Great for practice. Fun to watch. Learn new stuff.</strong>
            
          </p>
          <p>
            Every viz comes with a fun dataset, a livecode session, a solution
            in CodeSandbox, and a writeup about how it all fits together.
            <strong>Perfect way to take your React skills beyond the TODOapp.</strong> Looks
            great on your portfolio. 
          </p>
          </div>
        </div>
      <WrapperGroup>
        <WrapperForm>
          <form
            action="https://www.getdrip.com/forms/468020372/submissions"
            method="post"
            target="_blank"
            data-drip-embedded-form="468020372"
          >
            <input
              type="text"
              placeholder="Enter your email"
              label="Email Address"
              name="fields[email]"
              className="form-control"
            />
            <input
              type="submit"
              name="submit"
              value="💌 Sign Me Up 💌"
              data-drip-attribute="sign-up-button"
              className="btn"
            />
          </form>
        </WrapperForm>
        </WrapperGroup>
      </Wrapper>
    )
  }
}
