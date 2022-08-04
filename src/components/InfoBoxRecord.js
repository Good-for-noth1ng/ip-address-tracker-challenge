import React from 'react'
import styled from 'styled-components'
import ClipLoader from 'react-spinners/ClipLoader';

const Record = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 17px;
    padding: 0 17px;
    justify-content: flex-start;
    align-items: flex-start;
    
    @media (max-width: 895px) {
        margin: 0 5px;
        padding: 0 5px;
    }

    @media (max-width: 455px) {
        justify-content: center;
        align-items: center;
    }
`;

const RecordHeader = styled.div`
    margin: 11px 0;
    color: hsl(0, 0%, 59%);
    font-size: 20px;

    @media (max-width: 895px) {
        font-size: 15px;   
    }

    @media (max-width: 620px) {
        font-size: 10px
    }

    @media (max-width: 455px) {
        font-size: 14px;
        margin: 5px;
    }
`;

const RecordInfo = styled.div`
    margin: 11px 0;
    font-size: 22px;
    font-weight: 700;
    text-align: start;
    
    @media (max-width: 895px) {
        font-size: 20px;
    }

    @media (max-width: 620px) {
        font-size: 12px;
        margin: 0;
    }

    @media (max-width: 455px) {
        font-size: 14px;
        margin: 5px;
    }
`;

function InfoBoxRecord({header, info, additionalInfo, loading, error}) {
  return (
    <Record>
        <RecordHeader>
            {header}
        </RecordHeader>
        <RecordInfo>
            {info ? (info) : (<ClipLoader color="rgb(62 112 188)" size={20}/>)}
            {additionalInfo ? `, ${additionalInfo}` : ''} 
        </RecordInfo>
    </Record>
  )
}

export default InfoBoxRecord