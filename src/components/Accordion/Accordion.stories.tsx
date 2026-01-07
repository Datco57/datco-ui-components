import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>접근성이 무엇인가요?</AccordionTrigger>
        <AccordionContent>
          접근성은 장애가 있는 사람을 포함한 모든 사람이 웹사이트를 사용할 수 있도록 하는 것을 의미합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>스타일링이 가능한가요?</AccordionTrigger>
        <AccordionContent>
          네, Tailwind CSS를 사용하여 원하는 대로 스타일을 변경할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>애니메이션이 적용되나요?</AccordionTrigger>
        <AccordionContent>
          네, 기본적으로 CSS transition을 통한 부드러운 애니메이션이 적용됩니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>섹션 1</AccordionTrigger>
        <AccordionContent>
          여러 섹션을 동시에 열 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>섹션 2</AccordionTrigger>
        <AccordionContent>
          type="multiple"을 사용하면 여러 아이템을 동시에 열 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>섹션 3</AccordionTrigger>
        <AccordionContent>
          모든 섹션을 열어보세요!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[600px]">
      <AccordionItem value="faq-1">
        <AccordionTrigger>환불 정책은 어떻게 되나요?</AccordionTrigger>
        <AccordionContent>
          구매 후 30일 이내에 전액 환불이 가능합니다. 단, 제품이 손상되지 않은 상태여야 합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>배송은 얼마나 걸리나요?</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>배송 기간은 지역에 따라 다릅니다:</p>
            <ul className="list-disc list-inside pl-2">
              <li>서울/경기: 1-2일</li>
              <li>지방: 2-3일</li>
              <li>제주/도서산간: 3-5일</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>교환은 어떻게 하나요?</AccordionTrigger>
        <AccordionContent>
          고객센터(1588-0000)로 연락주시면 교환 절차를 안내해드립니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-4">
        <AccordionTrigger>회원가입이 필수인가요?</AccordionTrigger>
        <AccordionContent>
          아니요, 비회원으로도 구매가 가능합니다. 하지만 회원가입 시 적립금 혜택을 받으실 수 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-2" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>닫혀있는 항목</AccordionTrigger>
        <AccordionContent>이 항목은 처음에 닫혀있습니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>열려있는 항목</AccordionTrigger>
        <AccordionContent>이 항목은 처음에 열려있습니다 (defaultValue="item-2").</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>닫혀있는 항목 2</AccordionTrigger>
        <AccordionContent>이 항목도 처음에 닫혀있습니다.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
