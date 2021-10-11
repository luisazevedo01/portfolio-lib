import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  FormField,
  FormFieldProps,
} from '../../src/Molecules/FormField/FormField';

const meta: Meta = {
  title: 'Molecules/FormField',
  component: FormField,
  argTypes: {
    type: {
      defaultValue: 'text',
    },
  },
};

export default meta;

const Template: Story<FormFieldProps> = (args) => <FormField {...args} />;

export const Clean = Template.bind({});
export const Label = Template.bind({});
export const Placeholder = Template.bind({});

Label.args = {
  label: 'Default Label',
};

Placeholder.args = {
  placeholder: 'Default Placeholder',
};
