import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
text-align: center;
margin: 1rem auto;
padding: 1rem 2rem 0;

@media (max-width: 940px) {
  font-size: 14px;
  }
`


const PostHeader = props => {
  return <Wrapper><pre>{props.postdate} / Swizec Teller</pre></Wrapper>
  
}

export default PostHeader
