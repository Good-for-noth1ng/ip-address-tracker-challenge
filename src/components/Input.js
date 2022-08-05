import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { fetchByIp, fetchByDomain } from '../redux/dataSlice';
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
    font-size: 1.2rem;
    font-weight: 700;
    border: 0;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0 0 0 1.5rem;

    @media (max-width: 620px) {
      flex: 4.5;
      font-size: 0.8rem;
      border-bottom-left-radius: 15px;
      border-top-left-radius: 15px;
    } 

    @media (max-width: 620px) {
        font-size: 12px;
        padding: 0 0 0 0.7rem;
    } 
    
    @media (max-width: 312px) {
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
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const submit = () => {
        const regexIp = '/^[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9]$/g';
        if(query.match(regexIp) === query) {
            dispatch(fetchByIp(query))
        } else {
            dispatch(fetchByDomain(query))
        }
    }

    const handleSearch = (event) => {
        event.preventDefault()
        setQuery(event.target.value); 
    }
    
    return ( 
    <InputContainer>
        <InputField placeholder='Search for any IP addres or domain' onChange={ (event) => handleSearch(event)}>
        </InputField>
        <SearchButton submit={submit}>
        </SearchButton>
    </InputContainer>
  )
}

export default Input