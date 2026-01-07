import * as React from 'react';
import { cn } from '@/lib/utils';

type ComboboxOption = {
  value: string;
  label: string;
};

interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
}

const Combobox = React.forwardRef<HTMLDivElement, ComboboxProps>(
  (
    {
      options,
      value,
      onValueChange,
      placeholder = '선택하세요...',
      emptyMessage = '결과가 없습니다.',
      className,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [selected, setSelected] = React.useState(value || '');

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (optionValue: string) => {
      const newValue = optionValue === selected ? '' : optionValue;
      setSelected(newValue);
      onValueChange?.(newValue);
      setOpen(false);
      setSearch('');
    };

    return (
      <div ref={ref} className={cn('relative', className)}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span>
            {selected
              ? options.find((opt) => opt.value === selected)?.label
              : placeholder}
          </span>
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
            className={cn(
              'ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform',
              open && 'rotate-180'
            )}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {open && (
          <div className="absolute top-full z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95">
            <div className="p-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="검색..."
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <div className="max-h-[300px] overflow-y-auto p-1">
              {filteredOptions.length === 0 ? (
                <div className="py-6 text-center text-sm">{emptyMessage}</div>
              ) : (
                filteredOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={cn(
                      'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent hover:text-accent-foreground',
                      selected === option.value && 'bg-accent text-accent-foreground'
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
                      className={cn(
                        'mr-2 h-4 w-4',
                        selected === option.value ? 'opacity-100' : 'opacity-0'
                      )}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {option.label}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);
Combobox.displayName = 'Combobox';

export { Combobox };
export type { ComboboxOption, ComboboxProps };
