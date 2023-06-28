import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import 'app/styles/index.scss';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  }
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
  args: {
    children: 'Text'
  }
};
