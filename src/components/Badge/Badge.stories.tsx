import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: '배지의 스타일 변형',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const UseCases: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">상태:</span>
        <Badge>활성</Badge>
        <Badge variant="secondary">대기</Badge>
        <Badge variant="destructive">오류</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">알림:</span>
        <Badge>새로운 메시지 3개</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">태그:</span>
        <Badge variant="outline">React</Badge>
        <Badge variant="outline">TypeScript</Badge>
        <Badge variant="outline">Tailwind</Badge>
      </div>
    </div>
  ),
};
