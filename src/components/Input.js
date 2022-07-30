import React from 'react'
import styled from 'styled-components'
import SearchButton from './Button'

const InputContainer = styled.div`
    display: flex;
    margin-top: 35px;
    width: 34.6875rem;
    height: 3.75rem;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 620px) {
      width: 20.4375rem;
      height: 3.625rem;
      margin-top: 2.1875rem;
    }

    @media (max-width: 355px) {
        width: 90%;
        height: 3.625rem;
    }
`;

const InputField = styled.input`
    flex: 8;
    padding: 0;
    height: inherit;
    font-size: 1.4rem;
    font-weight: 700;
    border: 0;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0 1.5rem 0 1.5rem;

    @media (max-width: 620px) {
      flex: 4.5;
      font-size: 0.8rem;
      border-bottom-left-radius: 15px;
      border-top-left-radius: 15px;
    } 

    @media (max-width: 620px) {
        font-size: 9px;
    } 
    
    &:focus {
        outline: none;
    }
    &:active {
        color: hsl(0, 0%, 59%);
    }
`;

function Input() {    
    return ( 
    <InputContainer>
        <InputField placeholder='Search for any IP addres or domain'>
        </InputField>
        <SearchButton>
        </SearchButton>
    </InputContainer>
  )
}

export default Input