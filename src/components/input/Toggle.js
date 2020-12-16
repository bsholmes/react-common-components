import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { disabledGrey, brightBlue } from '../../styles/colors';

const Toggle = ({
  initialValue = false,
  onToggle = () => {},
  ...props
}) => {
  const [isToggled, setIsToggled] = useState(initialValue);
  return (
    <Container
      isToggled={isToggled}
      onClick={() => {
        setIsToggled(!isToggled);
        onToggle(!isToggled);
      }}
      {...props}
    >
      <Knob isToggled={isToggled} />
    </Container>
  );
};

const Container = styled.div`
  width: 20px;
  height: 10px;

  border-radius: 6px;

  background-color: ${disabledGrey};
  border: 1px solid ${disabledGrey};

  ${props => props.isToggled && `
    background-color: ${brightBlue};
    border: 1px solid ${brightBlue};
  `}

  transition: all 0.5s ease;
`;

const Knob = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background-color: white;
  ${props => props.isToggled && `
    transform: translateX(100%);
  `}

  transition: transform 0.5s ease;
`;

Toggle.propTypes = {
  /**
    True if the Toggle should start activated
  */
  initialValue: PropTypes.boolean,

  /**
    The callback function for when the component is toggled
  */
  onToggle: PropTypes.function

};
Toggle.displayName = 'Toggle';

export default Toggle;
