import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 3rem auto;
  padding: 0 2rem;
  color: #384047;

  @media (max-width: 940px) {
  }
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
    color: #555;
    text-transform: uppercase;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    -webkit-transition: border-color 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
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
        <h3 data-drip-attribute="headline">
          ReactVizHoliday - Learn React and Dataviz every day until Christmas
        </h3>
        <p data-drip-attribute="description">
          Leave your email and get a new dataviz idea + solution every day until
          Christmas. Great for practice. Fun to watch. Learn new stuff 🎅
        </p>
        <p>
          Every viz comes with a fun dataset, a livecode session, a solution in
          CodeSandbox, and a writeup about how it all fits together. Perfect way
          to take your React skills beyond the TODOapp. Looks great on your
          portfolio. ✌️
        </p>
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
      </Wrapper>
    )
  }
}
