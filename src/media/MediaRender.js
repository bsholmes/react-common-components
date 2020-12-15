import React from 'react';
import styled from 'styled-components';

// only render children if media query evaluates to true
const MediaRender = ({ query = '', children = [] }) => {
  return (
    <Conditional query={query}>
      {children}
    </Conditional>
  );
};

const Conditional = styled.section`
  & > * {
    @media not ${props => props.query} {
      display: none;
    }
  }
`;

export default MediaRender;
