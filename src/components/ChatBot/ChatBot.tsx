import * as React from 'react';
import { X, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../Button';
import { Input } from '../Input';
import { ChatBotAvatar } from './ChatBotAvatar';
import { ChatBotMessage } from './ChatBotMessage';

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp?: string;
}

export interface ChatBotProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  welcomeMessage?: string;
  quickActions?: string[];
  onSendMessage?: (message: string) => void;
  messages?: Message[];
  className?: string;
}

const ChatBot = React.forwardRef<HTMLDivElement, ChatBotProps>(
  (
    {
      open = false,
      onOpenChange,
      title = 'DAT-V Assistant',
      welcomeMessage = '안녕하세요 DAT-V 어시스턴트입니다.\n무엇을 도와드릴까요?',
      quickActions = ['오늘 우리 회사 매출 현황 좀 알려줘요.'],
      onSendMessage,
      messages: externalMessages,
      className,
    },
    ref
  ) => {
    const [internalMessages, setInternalMessages] = React.useState<Message[]>([]);
    const [inputValue, setInputValue] = React.useState('');
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    const messages = externalMessages || internalMessages;

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    React.useEffect(() => {
      scrollToBottom();
    }, [messages]);

    const handleSend = () => {
      if (!inputValue.trim()) return;

      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        isUser: true,
        timestamp: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      if (externalMessages) {
        onSendMessage?.(inputValue);
      } else {
        setInternalMessages((prev) => [...prev, newMessage]);
      }

      setInputValue('');
    };

    const handleQuickAction = (action: string) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: action,
        isUser: true,
        timestamp: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      if (externalMessages) {
        onSendMessage?.(action);
      } else {
        setInternalMessages((prev) => [...prev, newMessage]);
      }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };

    if (!open) return null;

    return (
      <div
        ref={ref}
        className={cn(
          'absolute bottom-6 right-6 w-[400px] h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50',
          className
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={() => onOpenChange?.(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex gap-3 mb-6">
            <ChatBotAvatar />
            <div className="flex-1 bg-gray-100 rounded-lg p-3">
              <p className="text-sm text-gray-900 whitespace-pre-wrap">
                {welcomeMessage}
              </p>
            </div>
          </div>

          {messages.length === 0 && quickActions.length > 0 && (
            <div className="space-y-2 mb-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="w-full bg-gray-900 text-white text-sm px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-left"
                >
                  {action}
                </button>
              ))}
            </div>
          )}

          {messages.map((message) => (
            <ChatBotMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}

          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="메세지를 입력하세요."
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              size="icon"
              className="flex-shrink-0"
              disabled={!inputValue.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
ChatBot.displayName = 'ChatBot';

export { ChatBot };
