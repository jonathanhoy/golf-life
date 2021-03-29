import styled from 'styled-components';
import variables from './variables';

const PageHeading = styled.h2`
    color: ${variables.white};
    font-family: ${variables.heading};
    font-size: 2rem;
    margin: 1.5rem 0;
    display: inline-block;
    @media (max-width: ${variables.sm}) {
        margin: 1rem 0;
    }
`;

export default PageHeading;