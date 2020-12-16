import React from 'react';
import ToggleComponent from './Toggle';

export default {
  title: 'Toggle',
  component: (args) => <ToggleComponent {...args} />
};

export const Toggle = (args) => <ToggleComponent {...args} />;
Toggle.args = {
  initialValue: false,
  onToggle: () => {}
};
Toggle.argTypes = {
  initialValue: {
    control: { type: 'boolean' },
    description: 'True if the Toggle starts activated',
    table: { defaultValue: { summary: false } }
  },

  // events
  onToggle: {
    description: 'The callback function for when the component is toggled',
    table: {
      category: 'Events'
    }
  }
};
