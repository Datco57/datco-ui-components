import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      description: '알림의 스타일 변형',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args} className="w-[400px]">
      <AlertTitle>알림</AlertTitle>
      <AlertDescription>
        이것은 기본 알림 메시지입니다.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertTitle>오류</AlertTitle>
      <AlertDescription>
        작업을 완료하는 중에 오류가 발생했습니다.
      </AlertDescription>
    </Alert>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
      <AlertTitle>정보</AlertTitle>
      <AlertDescription>
        새로운 업데이트가 있습니다. 지금 업데이트하시겠습니까?
      </AlertDescription>
    </Alert>
  ),
};

export const DestructiveWithIcon: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <AlertTitle>경고</AlertTitle>
      <AlertDescription>
        이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?
      </AlertDescription>
    </Alert>
  ),
};

export const OnlyTitle: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertTitle>간단한 알림</AlertTitle>
    </Alert>
  ),
};

export const MultipleAlerts: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <Alert>
        <AlertTitle>성공</AlertTitle>
        <AlertDescription>
          데이터가 성공적으로 저장되었습니다.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>오류</AlertTitle>
        <AlertDescription>
          네트워크 연결에 문제가 발생했습니다.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
