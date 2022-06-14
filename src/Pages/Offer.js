import React from 'react'

import styled from 'styled-components';

import LeftMenu from '../Components/Offer_page/LeftMenu';
import OffersList from '../Components/Offer_page/OffersList';

const OfferContainer = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
`

const Offer = () => {
    return (
        <OfferContainer>
        <LeftMenu />
        <OffersList />
        </OfferContainer>
    )
}

export default Offer;