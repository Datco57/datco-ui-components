import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-[200px] items-center justify-center space-x-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Section 1</h4>
        <p className="text-sm text-muted-foreground">Content for section 1</p>
      </div>
      <Separator orientation="vertical" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Section 2</h4>
        <p className="text-sm text-muted-foreground">Content for section 2</p>
      </div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div className="w-[300px] space-y-1">
      <div className="px-4 py-3 text-sm">Item 1</div>
      <Separator />
      <div className="px-4 py-3 text-sm">Item 2</div>
      <Separator />
      <div className="px-4 py-3 text-sm">Item 3</div>
      <Separator />
      <div className="px-4 py-3 text-sm">Item 4</div>
    </div>
  ),
};
