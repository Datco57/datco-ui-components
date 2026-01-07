import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Label } from '../Label';
import { Button } from '../Button';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your message</Label>
      <Textarea
        placeholder="Type your message here."
        id="message-2"
        defaultValue="This is a pre-filled message."
      />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Type your message here.',
    disabled: true,
  },
};

export const WithButton: Story = {
  render: () => (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  ),
};

export const CustomHeight: Story = {
  render: () => (
    <div className="grid w-full gap-4">
      <div>
        <Label>Small (min-h-[60px])</Label>
        <Textarea
          placeholder="Short textarea"
          className="min-h-[60px]"
        />
      </div>
      <div>
        <Label>Medium (default min-h-[80px])</Label>
        <Textarea placeholder="Medium textarea" />
      </div>
      <div>
        <Label>Large (min-h-[120px])</Label>
        <Textarea
          placeholder="Tall textarea"
          className="min-h-[120px]"
        />
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <input
          id="subject"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter subject"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter a detailed description"
          className="min-h-[120px]"
        />
        <p className="text-sm text-muted-foreground">
          Provide as much detail as possible.
        </p>
      </div>
      <Button className="w-full">Submit</Button>
    </div>
  ),
};
