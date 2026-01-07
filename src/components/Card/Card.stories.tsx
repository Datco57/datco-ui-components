import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Button } from '../Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>알림 설정</CardTitle>
        <CardDescription>알림 수신 방법을 선택하세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          이메일과 푸시 알림을 통해 중요한 업데이트를 받아보세요.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">취소</Button>
        <Button>저장</Button>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>간단한 카드</CardTitle>
      </CardHeader>
      <CardContent>
        <p>헤더와 컨텐츠만 있는 간단한 카드입니다.</p>
      </CardContent>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>카드 1</CardTitle>
          <CardDescription>첫 번째 카드</CardDescription>
        </CardHeader>
        <CardContent>
          <p>카드 내용 1</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>카드 2</CardTitle>
          <CardDescription>두 번째 카드</CardDescription>
        </CardHeader>
        <CardContent>
          <p>카드 내용 2</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>카드 3</CardTitle>
          <CardDescription>세 번째 카드</CardDescription>
        </CardHeader>
        <CardContent>
          <p>카드 내용 3</p>
        </CardContent>
      </Card>
    </div>
  ),
};
