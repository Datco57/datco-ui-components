import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

const meta = {
  title: 'Components/ToggleGroup (ButtonGroup)',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="17" x2="3" y1="6" y2="6" />
          <line x1="21" x2="3" y1="12" y2="12" />
          <line x1="17" x2="3" y1="18" y2="18" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="가운데 정렬">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="17" x2="7" y1="6" y2="6" />
          <line x1="21" x2="3" y1="12" y2="12" />
          <line x1="17" x2="7" y1="18" y2="18" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="오른쪽 정렬">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="21" x2="7" y1="6" y2="6" />
          <line x1="21" x2="3" y1="12" y2="12" />
          <line x1="21" x2="7" y1="18" y2="18" />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={['bold']}>
      <ToggleGroupItem value="bold" aria-label="굵게">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="기울임">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" x2="10" y1="4" y2="4" />
          <line x1="14" x2="5" y1="20" y2="20" />
          <line x1="15" x2="9" y1="4" y2="20" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="밑줄">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 4v6a6 6 0 0 0 12 0V4" />
          <line x1="4" x2="20" y1="20" y2="20" />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Outline: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="1">1일</ToggleGroupItem>
      <ToggleGroupItem value="7">7일</ToggleGroupItem>
      <ToggleGroupItem value="30">30일</ToggleGroupItem>
      <ToggleGroupItem value="90">90일</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const TextButtons: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="grid">
      <ToggleGroupItem value="list">목록</ToggleGroupItem>
      <ToggleGroupItem value="grid">그리드</ToggleGroupItem>
      <ToggleGroupItem value="card">카드</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ToggleGroup type="single" size="sm">
        <ToggleGroupItem value="1">Small</ToggleGroupItem>
        <ToggleGroupItem value="2">Button</ToggleGroupItem>
        <ToggleGroupItem value="3">Group</ToggleGroupItem>
      </ToggleGroup>
      
      <ToggleGroup type="single" size="default">
        <ToggleGroupItem value="1">Default</ToggleGroupItem>
        <ToggleGroupItem value="2">Button</ToggleGroupItem>
        <ToggleGroupItem value="3">Group</ToggleGroupItem>
      </ToggleGroup>
      
      <ToggleGroup type="single" size="lg">
        <ToggleGroupItem value="1">Large</ToggleGroupItem>
        <ToggleGroupItem value="2">Button</ToggleGroupItem>
        <ToggleGroupItem value="3">Group</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <ToggleGroup type="single" disabled>
      <ToggleGroupItem value="1">옵션 1</ToggleGroupItem>
      <ToggleGroupItem value="2">옵션 2</ToggleGroupItem>
      <ToggleGroupItem value="3">옵션 3</ToggleGroupItem>
    </ToggleGroup>
  ),
};
