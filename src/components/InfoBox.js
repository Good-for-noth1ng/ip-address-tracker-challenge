import React from 'react'
import styled from 'styled-components'
import InfoBoxRecord from './InfoBoxRecord';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

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

const SpinnerContainer = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

function InfoBox() {
    
    const ipInfo = useSelector(state => state.ipInfo)
    console.log(ipInfo)

    return (
    <WrapperContainer>
        <InfoContainer >    
            {ipInfo.loading ? 
                <SpinnerContainer>
                    <ClipLoader color="rgb(62 112 188)" size={20}/>
                </SpinnerContainer> : (
                <>
                    <InfoBoxRecord header={'IP ADDRESS'} info={ipInfo.data.ip}/>
                    <InfoBoxRecord header={'LOCATION'} info={ipInfo.data.location.region} additionalInfo={ipInfo.data.location.city}/>
                    <InfoBoxRecord header={'TIMEZONE'} info={ipInfo.data.location.timezone}/>
                    <InfoBoxRecord header={'ISP'} info={ipInfo.data.isp}/>
                </>
            )}
        </InfoContainer>
    </WrapperContainer>
  )
}

export default InfoBox