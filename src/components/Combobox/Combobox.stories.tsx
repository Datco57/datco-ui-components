import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './Combobox';
import { Label } from '../Label';
import { useState } from 'react';

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
  { value: 'next', label: 'Next.js' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
];

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <Combobox options={frameworks} placeholder="프레임워크 선택..." />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Label>프레임워크</Label>
      <Combobox options={frameworks} placeholder="프레임워크 선택..." />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-[300px] space-y-4">
        <div className="space-y-2">
          <Label>프레임워크</Label>
          <Combobox
            options={frameworks}
            value={value}
            onValueChange={setValue}
            placeholder="프레임워크 선택..."
          />
        </div>
        {value && (
          <div className="text-sm text-muted-foreground">
            선택된 값: <strong>{frameworks.find(f => f.value === value)?.label}</strong>
          </div>
        )}
      </div>
    );
  },
};

const countries = [
  { value: 'kr', label: '대한민국' },
  { value: 'us', label: '미국' },
  { value: 'jp', label: '일본' },
  { value: 'cn', label: '중국' },
  { value: 'uk', label: '영국' },
  { value: 'de', label: '독일' },
  { value: 'fr', label: '프랑스' },
  { value: 'ca', label: '캐나다' },
  { value: 'au', label: '호주' },
];

export const Countries: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Label>국가</Label>
      <Combobox options={countries} placeholder="국가 선택..." />
    </div>
  ),
};

const languages = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' },
  { value: 'ja', label: '日本語' },
  { value: 'zh', label: '中文' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'pt', label: 'Português' },
  { value: 'ru', label: 'Русский' },
  { value: 'ar', label: 'العربية' },
];

export const LongList: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Label>언어</Label>
      <Combobox 
        options={languages} 
        placeholder="언어 선택..."
        emptyMessage="해당 언어를 찾을 수 없습니다."
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [framework, setFramework] = useState('');
    const [country, setCountry] = useState('');
    
    return (
      <div className="w-[350px] space-y-6">
        <h3 className="text-lg font-semibold">개발자 설문</h3>
        
        <div className="space-y-2">
          <Label htmlFor="framework">선호하는 프레임워크</Label>
          <Combobox
            options={frameworks}
            value={framework}
            onValueChange={setFramework}
            placeholder="선택하세요..."
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="country">거주 국가</Label>
          <Combobox
            options={countries}
            value={country}
            onValueChange={setCountry}
            placeholder="선택하세요..."
          />
        </div>
        
        {(framework || country) && (
          <div className="rounded-md bg-muted p-4 space-y-1">
            <p className="text-sm font-medium">선택 내용:</p>
            {framework && (
              <p className="text-sm text-muted-foreground">
                프레임워크: {frameworks.find(f => f.value === framework)?.label}
              </p>
            )}
            {country && (
              <p className="text-sm text-muted-foreground">
                국가: {countries.find(c => c.value === country)?.label}
              </p>
            )}
          </div>
        )}
      </div>
    );
  },
};
