import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Input } from '../Input';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '라벨',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">이메일 주소</Label>
      <Input type="email" id="email" placeholder="이메일을 입력하세요" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="required">
        필수 항목 <span className="text-destructive">*</span>
      </Label>
      <Input id="required" placeholder="필수 입력" />
    </div>
  ),
};

export const MultipleFields: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">이름</Label>
        <Input id="name" placeholder="홍길동" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email2">이메일</Label>
        <Input id="email2" type="email" placeholder="example@email.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">전화번호</Label>
        <Input id="phone" type="tel" placeholder="010-0000-0000" />
      </div>
    </div>
  ),
};
