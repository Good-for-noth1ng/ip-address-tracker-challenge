import React from 'react'
import styled from 'styled-components'


const Title = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    color: white;
`;

function HeaderTitle() {
  return (
    <Title>IP Address Tracker</Title>
  )
}

export default HeaderTitle