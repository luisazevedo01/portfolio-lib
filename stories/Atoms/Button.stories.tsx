import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src/Atoms/Button/Button';

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'CLICK ME',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Dark = Template.bind({});
export const Light = Template.bind({});

Light.args = {
  variant: 'light',
};
