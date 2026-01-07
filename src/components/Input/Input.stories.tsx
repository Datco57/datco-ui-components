import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Label } from '../Label';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '입력하세요...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">이메일</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: '비활성화된 입력',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    value: '값이 입력된 상태',
    readOnly: true,
  },
};

export const Password: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password">비밀번호</Label>
      <Input type="password" id="password" placeholder="비밀번호를 입력하세요" />
    </div>
  ),
};

export const File: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">파일</Label>
      <Input id="picture" type="file" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="username">사용자명</Label>
        <Input id="username" placeholder="사용자명" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-form">이메일</Label>
        <Input id="email-form" type="email" placeholder="이메일" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-form">비밀번호</Label>
        <Input id="password-form" type="password" placeholder="비밀번호" />
      </div>
    </form>
  ),
};
