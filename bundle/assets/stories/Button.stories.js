import { Button } from '@AcmeTest/stories/Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Normal = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Large = {
  args: {
    primary: true,
    label: 'Button',
    size: 'large'
  },
};
