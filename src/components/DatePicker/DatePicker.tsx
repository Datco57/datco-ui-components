import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calendar } from '@/components/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';
import type { DateRange } from 'react-day-picker';

interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  disabled?: (date: Date) => boolean;
  placeholder?: string;
  className?: string;
}

function DatePicker({
  date,
  onDateChange,
  disabled,
  placeholder = '날짜 선택',
  className,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
            className
          )}
        >
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
            className="mr-2 h-4 w-4"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {date ? format(date, 'PPP', { locale: ko }) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          disabled={disabled}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

interface DateRangePickerProps {
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  disabled?: (date: Date) => boolean;
  placeholder?: string;
  className?: string;
}

function DateRangePicker({
  dateRange,
  onDateRangeChange,
  disabled,
  placeholder = '날짜 범위 선택',
  className,
}: DateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-[300px] justify-start text-left font-normal',
            !dateRange && 'text-muted-foreground',
            className
          )}
        >
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
            className="mr-2 h-4 w-4"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {format(dateRange.from, 'PPP', { locale: ko })} -{' '}
                {format(dateRange.to, 'PPP', { locale: ko })}
              </>
            ) : (
              format(dateRange.from, 'PPP', { locale: ko })
            )
          ) : (
            placeholder
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={onDateRangeChange}
          disabled={disabled}
          numberOfMonths={2}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker, DateRangePicker };
export type { DatePickerProps, DateRangePickerProps };
