import React from 'react'
import styled from 'styled-components'
import SearchButton from './Button'

const InputContainer = styled.div`
    display: flex;
    margin-top: 35px;
    width: 555px;
    height: 3.75rem;
    align-items: center;
    justify-content: center;
`;

const InputField = styled.input`
    flex: 8;
    padding: 0;
    height: inherit;
    font-size: 1.4rem;
    border: 0;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0 25px 0 25px;
    &:hover {
        cursor: pointer;
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