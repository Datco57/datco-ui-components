import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Label } from '../Label';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="default" />
      <Label
        htmlFor="default"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        이용약관에 동의합니다
      </Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label
        htmlFor="checked"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        선택된 상태
      </Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label
        htmlFor="disabled"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        비활성화 상태
      </Label>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        이용약관에 동의합니다
      </Label>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms2" />
      <div className="grid gap-1.5 leading-none">
        <Label
          htmlFor="terms2"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          마케팅 수신 동의
        </Label>
        <p className="text-sm text-muted-foreground">
          이메일과 SMS를 통해 마케팅 정보를 받습니다.
        </p>
      </div>
    </div>
  ),
};

export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" defaultChecked />
        <Label htmlFor="option1">옵션 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" />
        <Label htmlFor="option2">옵션 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" />
        <Label htmlFor="option3">옵션 3</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option4" disabled />
        <Label htmlFor="option4">비활성화된 옵션</Label>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <div>
        <h3 className="mb-4 text-sm font-medium">알림 설정</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="all" defaultChecked />
            <Label htmlFor="all">모든 알림 받기</Label>
          </div>
          <div className="ml-6 space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="email" defaultChecked />
              <Label htmlFor="email">이메일 알림</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sms" />
              <Label htmlFor="sms">SMS 알림</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="push" defaultChecked />
              <Label htmlFor="push">푸시 알림</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CheckedDisabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};
