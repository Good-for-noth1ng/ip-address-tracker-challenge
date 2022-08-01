import React from 'react'
import styled from 'styled-components'

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
`;

const RecordHeader = styled.div`
    margin: 11px 0;
    color: hsl(0, 0%, 59%);
    font-size: 20px;

    @media (max-width: 895px) {
        font-size: 15px;   
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
`;

function InfoBoxRecord({header, info}) {
  return (
    <Record>
        <RecordHeader>
            {header ? header : 'UNKNOWN'}
        </RecordHeader>
        <RecordInfo>
            {info ? info : 'UNKNOWN'} 
        </RecordInfo>
    </Record>
  )
}

export default InfoBoxRecord