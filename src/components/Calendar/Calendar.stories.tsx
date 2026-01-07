import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import { useState } from 'react';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    
    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm"
          captionLayout="dropdown"
        />
        {date && (
          <div className="text-sm text-muted-foreground">
            선택된 날짜: {date.toLocaleDateString('ko-KR')}
          </div>
        )}
      </div>
    );
  },
};

export const SingleSelection: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();
    
    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        {date && (
          <p className="text-sm text-muted-foreground">
            {date.toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([]);
    
    return (
      <div className="space-y-4">
        <Calendar
          mode="multiple"
          selected={dates}
          onSelect={setDates}
          className="rounded-md border"
        />
        {dates && dates.length > 0 && (
          <div className="text-sm text-muted-foreground">
            <p className="font-medium mb-2">선택된 날짜들:</p>
            <ul className="list-disc list-inside">
              {dates.map((date, i) => (
                <li key={i}>{date.toLocaleDateString('ko-KR')}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = useState<{ from?: Date; to?: Date }>();
    
    return (
      <div className="space-y-4">
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          className="rounded-md border"
          numberOfMonths={2}
        />
        {range?.from && (
          <div className="text-sm text-muted-foreground">
            {range.to ? (
              <>
                <p>시작: {range.from.toLocaleDateString('ko-KR')}</p>
                <p>종료: {range.to.toLocaleDateString('ko-KR')}</p>
              </>
            ) : (
              <p>시작 날짜를 선택하세요</p>
            )}
          </div>
        )}
      </div>
    );
  },
};

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();
    const today = new Date();
    
    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => date < today}
          className="rounded-md border"
        />
        <p className="text-sm text-muted-foreground">
          오늘 이전 날짜는 선택할 수 없습니다.
        </p>
      </div>
    );
  },
};

export const WithMinMaxDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    
    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => date < today || date > nextMonth}
          className="rounded-md border"
        />
        <p className="text-sm text-muted-foreground">
          오늘부터 한 달 이내의 날짜만 선택 가능합니다.
        </p>
      </div>
    );
  },
};

export const TwoMonths: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
        className="rounded-md border"
      />
    );
  },
};

export const WithWeekNumbers: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showWeekNumber
        className="rounded-md border"
      />
    );
  },
};
