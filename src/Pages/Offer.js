import React from 'react'

import styled from 'styled-components';

import LeftMenu from '../Components/Offer_page/LeftMenu';

const OfferContainer = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`

const Offer = () => {
    return (
        <OfferContainer>
        <LeftMenu />
        </OfferContainer>
    )
}

export default Offer;