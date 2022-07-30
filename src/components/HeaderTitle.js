import React from 'react'
import styled from 'styled-components'


const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: white;
    margin: 2.25rem 0 0 0;
    @media (max-width: 620px) {
      font-size: 23px;
      margin: 2rem 0 0 0;
    }
`;

function HeaderTitle() {
  return (
    <Title>IP Address Tracker</Title>
  )
}

export default HeaderTitle