import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import InfoBoxRecord from './InfoBoxRecord';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitData } from '../redux/dataSlice';

const InfoContainer = styled.div`
    position: absolute;
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
        height: 3.625rem;
    }
     @media (max-width: 355px) {
        flex-direction: column;
     }
`;

const WrapperContainer = styled.div`
    display: flex;
    justify-content: center;
`;

function InfoBox() {
    
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        dispatch(fetchInitData())    
    }, []);
    const data = useSelector(state => state.data.data)
    
    return (
    <WrapperContainer>    
        <InfoContainer>
            <InfoBoxRecord header={'IP ADDRESS'} info={data.ip}/>
            <InfoBoxRecord header={'LOCATION'} info={data.location.region}/>
            <InfoBoxRecord header={'TIMEZONE'} info={data.location.timezone}/>
            <InfoBoxRecord header={'ISP'} info={data.isp}/>
        </InfoContainer>
    </WrapperContainer>
  )
}

export default InfoBox