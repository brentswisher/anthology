import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Component/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary', // These are only needed to set the default values in the controls match the programmatic defaults
    size: 'medium', // These are only needed to set the default values in the controls match the programmatic defaults
    disabled: false,
  },
  argTypes: {
    children: {
      name: 'label',
      control: 'text',
      table: {
        disable: false,
      },
    },
    variant: {
      control: 'select',
    },
    size: {
      control: 'select',
      options: [],
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'large',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
