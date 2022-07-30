import React from 'react'
import styled from 'styled-components'
import HeaderTitle from './HeaderTitle';
import Input from './Input';

const HeaderContainer = styled.div`
    background-image: url(${require(`../images/pattern-bg.png`)});
    background-repeat: no-repeat;
    background-size: cover;
    height: 17.5625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

function Header() {
  return (
    <HeaderContainer>
        <HeaderTitle />
        <Input/>
    </HeaderContainer>
  )
}

export default Header