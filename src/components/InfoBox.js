import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import InfoBoxRecord from './InfoBoxRecord';
import IPIFY_API_KEY from '../env.json';

const InfoContainer = styled.div`
    position: absolute;
    display: flex;
    width: 78%;
    height: 10rem;
    top: 12.5rem;
    left: 10.5%;
    right: 10.5%;
    padding: 28px 16px;
    justify-content: space-between;
    background-color: #f7f4f4;
    border-radius: 20px;

    @media (max-width: 895px) {
        left: 6.4%;
        right: 6.4%;
    }
`;

function InfoBox() {
    const [data, setData] = useState([]); 

    useLayoutEffect(() => {
        const url = `https://geo.ipify.org/api/v2/country?apiKey=${IPIFY_API_KEY.IPIFY_API_KEY}`;
        fetch(url)
            .then((response) => response.json())
            .then((fetchedData) => {
                setData(fetchedData)
                console.log(fetchedData)
            })
            .catch((error) => console.log(error));
    }, []);

    return (
    <InfoContainer>
        <InfoBoxRecord header={'IP ADDRESS'} info={data.ip}/>
        <InfoBoxRecord header={'LOCATION'} info={data.location.region}/>
        <InfoBoxRecord header={'TIMEZONE'} info={data.location.timezone}/>
        <InfoBoxRecord header={'ISP'} info={data.isp}/>
    </InfoContainer>
  )
}

export default InfoBox