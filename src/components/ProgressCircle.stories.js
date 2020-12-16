import React from 'react';
import ProgressCircleComponent from './ProgressCircle';

export default {
  title: 'ProgressCircle',
  component: (args) => <ProgressCircleComponent {...args}><div style={{ margin: 'auto', textAlign: 'center', overflow: 'hidden' }}>Child content</div></ProgressCircleComponent>
};

export const ProgressCircle = (args) => <ProgressCircleComponent {...args}><div style={{ margin: 'auto', textAlign: 'center', overflow: 'hidden' }}>Child content</div></ProgressCircleComponent>;
ProgressCircle.args = {
  percent: 0.75,
  size: '64px',
  barWidth: '10px',
  barColor: '#2170EF',
  barBGColor: '#DDDDDD',
  onClick: () => {}
};
ProgressCircle.argTypes = {
  percent: {
    control: { type: 'range', min: 0, max: 1, step: 0.01 },
    description: 'A number between 0 and 1 controlling the percent completion of the circle',
    table: { defaultValue: { summary: 0.75 } }
  },

  size: {
    control: { type: 'text' },
    defaultValue: '64px',
    description: 'Overall width and height string including CSS units. This solution only works with a square aspect',
    table: { defaultValue: { summary: '64px' } }
  },

  barWidth: {
    control: { type: 'text' },
    defaultValue: '10px',
    description: 'Bar width string including CSS units',
    table: { defaultValue: { summary: '10px' } }
  },

  barColor: {
    control: { type: 'color' },
    defaultValue: '#2170EF',
    description: 'Bar color as a hex string',
    table: { defaultValue: { summary: '#2170EF' } }
  },

  barBGColor: {
    control: { type: 'color' },
    defaultValue: '#DDDDDD',
    description: 'Background bar color as a hex string',
    table: { defaultValue: { summary: '#DDDDDD' } }
  },

  // events
  onClick: {
    table: {
      category: 'Events'
    }
  }
};
