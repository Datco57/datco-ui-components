import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './Dialog';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">다이얼로그 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>다이얼로그 제목</DialogTitle>
          <DialogDescription>
            다이얼로그 설명이 여기에 표시됩니다. 사용자에게 추가 정보를 제공할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm">다이얼로그 본문 내용입니다.</p>
        </div>
        <DialogFooter>
          <Button type="submit">확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>프로필 편집</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>프로필 편집</DialogTitle>
          <DialogDescription>
            프로필 정보를 수정하세요. 완료되면 저장 버튼을 클릭하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              이름
            </Label>
            <Input id="name" defaultValue="홍길동" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              사용자명
            </Label>
            <Input
              id="username"
              defaultValue="@gildong"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Information: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">정보 보기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>알림</DialogTitle>
          <DialogDescription>
            새로운 업데이트가 있습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h4 className="mb-2 font-medium">버전 2.0.0</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>새로운 기능 추가</li>
            <li>버그 수정</li>
            <li>성능 개선</li>
          </ul>
        </div>
        <DialogFooter>
          <Button>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const NoFooter: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">간단한 다이얼로그</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>알림</DialogTitle>
          <DialogDescription>
            이것은 푸터가 없는 간단한 다이얼로그입니다.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">긴 내용 다이얼로그</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>이용약관</DialogTitle>
          <DialogDescription>
            서비스 이용약관을 확인하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <p className="text-sm">
            제1조 (목적) 이 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
          <p className="text-sm">
            제2조 (정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다...
          </p>
          <p className="text-sm">
            제3조 (약관의 효력 및 변경) 1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력이 발생합니다.
          </p>
          <p className="text-sm">
            제4조 (서비스의 제공 및 변경) 회사는 다음과 같은 서비스를 제공합니다...
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">닫기</Button>
          <Button>동의</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
