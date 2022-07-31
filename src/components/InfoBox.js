import React from 'react'
import styled from 'styled-components'
import InfoBoxRecord from './InfoBoxRecord';

const InfoContainer = styled.div`
    position: absolute;
    display: flex;
    width: 78%;
    height: 10rem;
    top: 12.5rem;
    left: 10.5%;
    right: 10.5%;
    padding: 28px 2rem;
    justify-content: space-between;
    background-color: #f7f4f4;
    border-radius: 20px;
`;
const example = [
    {
        recordHeader: 'header',
        recordInfo: 'info about provide'
    },
    {
        recordHeader: 'header',
        recordInfo: 'info about provide'
    },
    {
        recordHeader: 'header',
        recordInfo: 'info about provide'
    },
    {
        recordHeader: 'header',
        recordInfo: 'info about provide'
    },
]
function InfoBox() {
  return (
    <InfoContainer>
        {example.map((data) => <InfoBoxRecord data={data}/>)}
    </InfoContainer>
  )
}

export default InfoBox