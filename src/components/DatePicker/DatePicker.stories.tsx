import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker, DateRangePicker } from './DatePicker';
import { Label } from '../Label';
import { useState } from 'react';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();
    
    return (
      <div className="space-y-4">
        <DatePicker date={date} onDateChange={setDate} />
        {date && (
          <p className="text-sm text-muted-foreground">
            선택된 날짜: {date.toLocaleDateString('ko-KR')}
          </p>
        )}
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();
    
    return (
      <div className="space-y-2">
        <Label>생년월일</Label>
        <DatePicker date={date} onDateChange={setDate} placeholder="생년월일 선택" />
      </div>
    );
  },
};

export const WithPreselectedDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date>(new Date());
    
    return (
      <div className="space-y-2">
        <Label>날짜</Label>
        <DatePicker date={date} onDateChange={setDate} />
      </div>
    );
  },
};

export const FutureDatesOnly: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();
    const today = new Date();
    
    return (
      <div className="space-y-2">
        <Label>예약 날짜</Label>
        <DatePicker
          date={date}
          onDateChange={setDate}
          disabled={(date) => date < today}
          placeholder="예약 날짜 선택"
        />
        <p className="text-sm text-muted-foreground">
          오늘 이후 날짜만 선택 가능합니다.
        </p>
      </div>
    );
  },
};

export const PastDatesOnly: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();
    const today = new Date();
    
    return (
      <div className="space-y-2">
        <Label>방문 날짜</Label>
        <DatePicker
          date={date}
          onDateChange={setDate}
          disabled={(date) => date > today}
          placeholder="방문 날짜 선택"
        />
        <p className="text-sm text-muted-foreground">
          오늘 이전 날짜만 선택 가능합니다.
        </p>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();
    
    return (
      <div className="w-[400px] space-y-4">
        <h3 className="text-lg font-semibold">프로젝트 기간 설정</h3>
        
        <div className="space-y-2">
          <Label>시작 날짜</Label>
          <DatePicker
            date={startDate}
            onDateChange={setStartDate}
            placeholder="시작 날짜"
          />
        </div>
        
        <div className="space-y-2">
          <Label>종료 날짜</Label>
          <DatePicker
            date={endDate}
            onDateChange={setEndDate}
            disabled={(date) => startDate ? date < startDate : false}
            placeholder="종료 날짜"
          />
        </div>
        
        {startDate && endDate && (
          <div className="rounded-md bg-muted p-4">
            <p className="text-sm font-medium">선택된 기간:</p>
            <p className="text-sm text-muted-foreground">
              {startDate.toLocaleDateString('ko-KR')} ~ {endDate.toLocaleDateString('ko-KR')}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              총 {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))}일
            </p>
          </div>
        )}
      </div>
    );
  },
};

// DateRangePicker Stories
export const RangePicker: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>();
    
    return (
      <div className="space-y-4">
        <DateRangePicker dateRange={dateRange} onDateRangeChange={setDateRange} />
        {dateRange?.from && dateRange?.to && (
          <div className="text-sm text-muted-foreground">
            <p>시작: {dateRange.from.toLocaleDateString('ko-KR')}</p>
            <p>종료: {dateRange.to.toLocaleDateString('ko-KR')}</p>
            <p className="mt-2">
              총 {Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))}일
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const RangePickerWithLabel: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>();
    
    return (
      <div className="space-y-2">
        <Label>여행 기간</Label>
        <DateRangePicker
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          placeholder="여행 기간 선택"
        />
      </div>
    );
  },
};

export const BookingExample: Story = {
  render: () => {
    const [checkIn, setCheckIn] = useState<Date>();
    const [checkOut, setCheckOut] = useState<Date>();
    const today = new Date();
    
    return (
      <div className="w-[400px] space-y-6">
        <h3 className="text-lg font-semibold">호텔 예약</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>체크인</Label>
            <DatePicker
              date={checkIn}
              onDateChange={setCheckIn}
              disabled={(date) => date < today}
              placeholder="체크인 날짜"
            />
          </div>
          
          <div className="space-y-2">
            <Label>체크아웃</Label>
            <DatePicker
              date={checkOut}
              onDateChange={setCheckOut}
              disabled={(date) => checkIn ? date <= checkIn : date < today}
              placeholder="체크아웃 날짜"
            />
          </div>
        </div>
        
        {checkIn && checkOut && (
          <div className="rounded-lg border-2 border-primary p-4">
            <h4 className="font-medium mb-2">예약 요약</h4>
            <div className="space-y-1 text-sm">
              <p>체크인: {checkIn.toLocaleDateString('ko-KR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p>체크아웃: {checkOut.toLocaleDateString('ko-KR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="font-medium mt-2">
                숙박 기간: {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))}박
              </p>
            </div>
          </div>
        )}
      </div>
    );
  },
};
