import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 100%;
    background-color: #426f74;

    .box {
        max-width: 1400px;
        padding-left: 20px;
        color: #fff;
        margin: 0 auto;

        h2 {
            font-weight: 200;
            font-size: 2.5rem;
            padding: 20px 0;
            margin: 0;
        }
    }
`

const Header = ({title}) => (
    <HeaderContainer>
        <div className='box'>
            <h2>{title}</h2>
        </div>
    </HeaderContainer>
)

export default Header;