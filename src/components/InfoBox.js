import React, { useEffect } from 'react'
import styled from 'styled-components'
import InfoBoxRecord from './InfoBoxRecord';
import { useSelector } from 'react-redux';


const InfoContainer = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    width: 78%;
    height: 10rem;
    top: 12.5rem;
    padding: 28px 16px;
    justify-content: space-between;
    background-color: #f7f4f4;
    border-radius: 20px;

    @media (max-width: 620px) {
        width: 67%;
        height: 6rem;
    }
     @media (max-width: 455px) {
        flex-direction: column;
        height: 35vh;
        justify-content: center;
        align-items: center;
     }
`;

const WrapperContainer = styled.div`
    display: flex;
    justify-content: center;
`;

function InfoBox() {
    const data = useSelector(state => state.data.data)
    
    useEffect(() => {
        if (!data.loading) {
            return
        }    
    }, [data])

    return (
    <WrapperContainer>    
        <InfoContainer>
            <InfoBoxRecord header={'IP ADDRESS'} info={data.ip}/>
            <InfoBoxRecord header={'LOCATION'} info={data.location.region} additionalInfo={data.location.city}/>
            <InfoBoxRecord header={'TIMEZONE'} info={data.location.timezone}/>
            <InfoBoxRecord header={'ISP'} info={data.isp}/>
        </InfoContainer>
    </WrapperContainer>
  )
}

export default InfoBox