import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './RadioGroup';
import { Label } from '../Label';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">옵션 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">옵션 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">옵션 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r1">기본</Label>
          <p className="text-sm text-muted-foreground">
            기본 설정을 사용합니다.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r2">편안한</Label>
          <p className="text-sm text-muted-foreground">
            넓은 간격으로 편안하게 표시됩니다.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r3">압축</Label>
          <p className="text-sm text-muted-foreground">
            좁은 간격으로 압축되어 표시됩니다.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="d1" />
        <Label htmlFor="d1">활성화됨</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="d2" disabled />
        <Label htmlFor="d2">비활성화됨</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="d3" />
        <Label htmlFor="d3">활성화됨</Label>
      </div>
    </RadioGroup>
  ),
};

export const PaymentMethod: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div>
        <h3 className="mb-4 text-sm font-medium">결제 방법</h3>
        <RadioGroup defaultValue="card">
          <div className="flex items-center space-x-2 rounded-md border p-4">
            <RadioGroupItem value="card" id="card" />
            <div className="flex-1">
              <Label htmlFor="card" className="font-medium">
                신용카드
              </Label>
              <p className="text-sm text-muted-foreground">
                Visa, Mastercard, Amex
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-4">
            <RadioGroupItem value="bank" id="bank" />
            <div className="flex-1">
              <Label htmlFor="bank" className="font-medium">
                계좌이체
              </Label>
              <p className="text-sm text-muted-foreground">
                실시간 계좌이체
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-4">
            <RadioGroupItem value="phone" id="phone" />
            <div className="flex-1">
              <Label htmlFor="phone" className="font-medium">
                휴대폰 결제
              </Label>
              <p className="text-sm text-muted-foreground">
                통신사 자동 결제
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};

export const DeliveryTime: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div>
        <h3 className="mb-4 text-sm font-medium">배송 시간 선택</h3>
        <RadioGroup defaultValue="morning">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="morning" id="morning" />
            <Label htmlFor="morning">오전 배송 (09:00 - 12:00)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="afternoon" id="afternoon" />
            <Label htmlFor="afternoon">오후 배송 (12:00 - 18:00)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="evening" id="evening" />
            <Label htmlFor="evening">저녁 배송 (18:00 - 21:00)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="anytime" id="anytime" />
            <Label htmlFor="anytime">시간 무관</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};

export const PlanSelection: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div>
        <h3 className="mb-4 text-lg font-semibold">요금제 선택</h3>
        <RadioGroup defaultValue="pro">
          <div className="flex items-center space-x-2 rounded-lg border-2 border-muted p-4 hover:border-primary">
            <RadioGroupItem value="free" id="free" />
            <div className="flex-1">
              <Label htmlFor="free" className="text-base font-semibold">
                무료
              </Label>
              <p className="text-sm text-muted-foreground">
                기본 기능 이용
              </p>
              <p className="mt-2 text-2xl font-bold">₩0</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 rounded-lg border-2 border-primary p-4">
            <RadioGroupItem value="pro" id="pro" />
            <div className="flex-1">
              <Label htmlFor="pro" className="text-base font-semibold">
                프로
                <span className="ml-2 rounded bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                  인기
                </span>
              </Label>
              <p className="text-sm text-muted-foreground">
                고급 기능 전체 이용
              </p>
              <p className="mt-2 text-2xl font-bold">₩29,000/월</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 rounded-lg border-2 border-muted p-4 hover:border-primary">
            <RadioGroupItem value="enterprise" id="enterprise" />
            <div className="flex-1">
              <Label htmlFor="enterprise" className="text-base font-semibold">
                엔터프라이즈
              </Label>
              <p className="text-sm text-muted-foreground">
                맞춤형 솔루션 제공
              </p>
              <p className="mt-2 text-2xl font-bold">문의</p>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};
