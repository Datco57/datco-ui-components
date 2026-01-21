import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ChatBot, Message } from './ChatBot';
import { ChatBotTrigger } from './ChatBotTrigger';

const meta = {
  title: 'Components/ChatBot',
  component: ChatBot,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '챗봇 헤더 타이틀',
    },
    welcomeMessage: {
      control: 'text',
      description: '환영 메시지',
    },
    quickActions: {
      control: 'object',
      description: '퀵 액션 버튼 목록',
    },
  },
} satisfies Meta<typeof ChatBot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <div className="min-h-[700px] bg-gray-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">DAT-V 챗봇 데모</h1>
          <p className="text-gray-600 mb-8">
            우측 하단의 챗봇을 확인하세요. 메시지를 입력하거나 퀵 액션 버튼을 클릭할 수 있습니다.
          </p>
        </div>
        <ChatBot open={open} onOpenChange={setOpen} />
      </div>
    );
  },
};

export const WithTriggerButton: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="min-h-[700px] bg-gray-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">플로팅 버튼으로 챗봇 열기</h1>
          <p className="text-gray-600 mb-8">
            우측 하단의 플로팅 버튼을 클릭하여 챗봇을 열 수 있습니다.
          </p>
        </div>
        <ChatBotTrigger onClick={() => setOpen(true)} />
        <ChatBot open={open} onOpenChange={setOpen} />
      </div>
    );
  },
};

export const WithMessages: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const [messages, setMessages] = useState<Message[]>([
      {
        id: '1',
        text: '오늘 우리 회사 매출 현황 좀 알려줘요.',
        isUser: true,
        timestamp: '14:30',
      },
      {
        id: '2',
        text: '오늘 매출 현황을 확인해드리겠습니다.\n\n현재까지 총 매출: 1,234,567원\n전일 대비: +12.5%\n목표 달성률: 87.3%',
        isUser: false,
        timestamp: '14:30',
      },
      {
        id: '3',
        text: '감사합니다!',
        isUser: true,
        timestamp: '14:31',
      },
    ]);

    const handleSendMessage = (message: string) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        isUser: true,
        timestamp: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => [...prev, newMessage]);

      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: '답변을 생성하고 있습니다...',
          isUser: false,
          timestamp: new Date().toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
          }),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    };

    return (
      <div className="min-h-[700px] bg-gray-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">대화 중인 챗봇</h1>
          <p className="text-gray-600 mb-8">
            메시지를 입력하면 자동으로 응답이 생성됩니다.
          </p>
        </div>
        <ChatBot
          open={open}
          onOpenChange={setOpen}
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      </div>
    );
  },
};

export const CustomWelcomeMessage: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <div className="min-h-[700px] bg-gray-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">커스텀 환영 메시지</h1>
          <p className="text-gray-600 mb-8">
            환영 메시지와 퀵 액션을 커스터마이징할 수 있습니다.
          </p>
        </div>
        <ChatBot
          open={open}
          onOpenChange={setOpen}
          title="고객 지원 챗봇"
          welcomeMessage="안녕하세요! 고객 지원팀입니다.\n무엇을 도와드릴까요?"
          quickActions={[
            '주문 상태를 확인하고 싶어요',
            '반품/교환 문의',
            '배송 문의',
          ]}
        />
      </div>
    );
  },
};

export const LeftPosition: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="min-h-[700px] bg-gray-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">왼쪽 하단 위치</h1>
          <p className="text-gray-600 mb-8">
            챗봇을 왼쪽 하단에 배치할 수 있습니다.
          </p>
        </div>
        <ChatBotTrigger position="bottom-left" onClick={() => setOpen(true)} />
        <ChatBot
          open={open}
          onOpenChange={setOpen}
          className="left-6 right-auto"
        />
      </div>
    );
  },
};

export const InteractiveDemo: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSendMessage = (message: string) => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: message,
        isUser: true,
        timestamp: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => [...prev, userMessage]);

      setTimeout(() => {
        let responseText = '죄송합니다. 이해하지 못했습니다.';
        
        if (message.includes('매출')) {
          responseText = '매출 현황을 확인해드리겠습니다.\n\n오늘 매출: 1,234,567원\n전일 대비: +12.5%';
        } else if (message.includes('안녕') || message.includes('hello')) {
          responseText = '안녕하세요! 무엇을 도와드릴까요?';
        } else if (message.includes('감사')) {
          responseText = '천만에요! 더 도와드릴 것이 있으신가요?';
        }

        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          isUser: false,
          timestamp: new Date().toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
          }),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 800);
    };

    return (
      <div className="min-h-[700px] bg-gradient-to-br from-blue-50 to-purple-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            DAT-V AI Assistant
          </h1>
          <p className="text-gray-600 mb-4">
            인터랙티브 챗봇 데모입니다. 다음을 시도해보세요:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
            <li>"안녕하세요" 라고 인사해보세요</li>
            <li>"매출" 관련 질문을 해보세요</li>
            <li>퀵 액션 버튼을 클릭해보세요</li>
          </ul>
        </div>
        <ChatBotTrigger onClick={() => setOpen(true)} />
        <ChatBot
          open={open}
          onOpenChange={setOpen}
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      </div>
    );
  },
};
