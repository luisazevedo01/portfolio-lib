import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from '../../src/Atoms/Input/Input';

const meta: Meta = {
  title: 'Atoms/Input',
  component: Input,
};

export default meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
