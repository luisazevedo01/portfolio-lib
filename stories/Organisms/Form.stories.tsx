import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, FormProps } from '../../src/Organisms/Form/Form';
import { FormField } from '../../src/Molecules/FormField/FormField';
import { Button } from '../../src/Atoms/Button/Button';

const meta: Meta = {
  title: 'Organisms/Form',
  component: Form,
};

export default meta;

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <FormField type="text" label="First Name" />
    <FormField type="text" label="Last Name" />
    <FormField type="number" label="Age" />
    <Button>Submit</Button>
  </Form>
);

export const Default = Template.bind({});
