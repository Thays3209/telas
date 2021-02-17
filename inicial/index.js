import React from 'react';
import { Container, LoadingIcon } from './styles';

//logo
import Logo from '../assets/logo.png';

export default () => {
    
    return (
        
        <Container>
            <Logo width="100%" height="160" />
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>

    );
}