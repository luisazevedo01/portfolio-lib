import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Header } from '../../src/Organisms/Header/Header';

const meta: Meta = {
  title: 'Organisms/Header',
  component: Header,
};

export default meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
