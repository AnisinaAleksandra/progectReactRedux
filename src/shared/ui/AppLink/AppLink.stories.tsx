import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {};
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary: Story = {};
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};

export const Red: Story = {};
Red.args = {
  children: 'Text',
  theme: AppLinkTheme.RED,
};

export const PrimaryDark: Story = {};
PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};

export const SecondaryDark: Story = {};
SecondaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};

export const RedDark: Story = {};
RedDark.args = {
  children: 'Text',
  theme: AppLinkTheme.RED,
};
