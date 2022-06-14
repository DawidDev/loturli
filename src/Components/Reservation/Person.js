import React from 'react'

import styled from 'styled-components'

const PersonContainer = styled.div`
    width: 30%;
    min-width: 400px;
    border: 1px solid #426F74; 
    padding: 20px;
    margin: 20px;

    .title {
        font-size: 1.3rem;
        font-weight: 400;
        color: #3D7A7F;
    }

    p, input {
        margin: 0;
    }

    p {
        font-size: 0.8rem;
        font-weight: 200;
    }

    input {
        background-color: #E0EFEC;
        outline: none;
        border: none;
        height: 30px;
        width: 100%;
        padding: 0 10px;
        margin-bottom: 5px;
    }
`

const Person = () => {
    return(
        <PersonContainer>
            <p className='title'>Dane osoby</p>
            <p>Płeć</p>
            <input type="text" />
            <p>Imię</p>
            <input type="text" />
            <p>Nazwisko</p>
            <input type="text" />
            <p>Data urodzenia</p>
            <input type="date" />
            <p>Telefon</p>
            <input type="text" />
        </PersonContainer>
    )
}

export default Person