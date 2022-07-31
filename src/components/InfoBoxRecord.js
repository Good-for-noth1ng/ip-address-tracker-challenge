import React from 'react'
import styled from 'styled-components'

const Record = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const RecordHeader = styled.h3`
    margin: 11px 0;
    color: hsl(0, 0%, 59%);
`;

const RecordInfo = styled.h2`
    margin: 11px 0;
    text-align: start;
`;

function InfoBoxRecord({data}) {
  return (
    <Record>
        <RecordHeader>
            {data.recordHeader}
        </RecordHeader>
        <RecordInfo>
            {data.recordInfo}
        </RecordInfo>
    </Record>
  )
}

export default InfoBoxRecord