import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
img {
    height: 400px;
    display: block;
    margin: 10rem auto 0;
    padding: 0 2rem;
}
@media (max-width: 960px) {
img {
    height: 200px;
} 
}
`

const PostImage = props => (
    <Wrapper>
        <div>
        
            <div>{props.cover}</div> 
    
        </div>
    </Wrapper>
  )
  
  export default PostImage

