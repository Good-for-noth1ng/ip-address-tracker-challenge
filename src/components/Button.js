import React from 'react'
import styled from 'styled-components'


const SearchButton = styled.button`
  width: 3.625rem;
  height: 100%;
  flex: 1;
  border: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: opacity 250ms ease-in-out;
  background-color: hsl(0, 0%, 17%);
  
  @media (max-width: 355px) {
        
  }

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }

  &:active {
    opacity: 0.5;
  }
`;

function Button({submit}) {
  return (
    <SearchButton onClick={() => submit()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
    </SearchButton>
  )
}

export default Button