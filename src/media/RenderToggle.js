import React from 'react';
import styled from 'styled-components/macro';

// display first child if the query evaluates to true, display the second if false
// intenionally rendering both so they don't have to remount when the query evaluation changes
// the query should omit the @media tag
const RenderToggle = ({ query = '', children = [] }) => {
  return <Toggle query={query}>{children}</Toggle>;
};

const Toggle = styled.section`
  & > * {
    @media not ${props => props.query} {
      :nth-child(1) {
        display: none;
      }
    }

    @media ${props => props.query} {
      :nth-child(2) {
        display: none;
      }
    }
  }
`;

export default RenderToggle;
