import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChatBotAvatar } from './ChatBotAvatar';

export interface ChatBotMessageProps {
  message: string;
  isUser?: boolean;
  timestamp?: string;
}

const ChatBotMessage = React.forwardRef<HTMLDivElement, ChatBotMessageProps>(
  ({ message, isUser = false, timestamp }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex gap-3 mb-4',
          isUser ? 'flex-row-reverse' : 'flex-row'
        )}
      >
        {!isUser && <ChatBotAvatar size="sm" />}
        
        <div className={cn('flex flex-col', isUser ? 'items-end' : 'items-start')}>
          <div
            className={cn(
              'rounded-lg px-4 py-2 max-w-[280px]',
              isUser
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900'
            )}
          >
            <p className="text-sm whitespace-pre-wrap break-words">{message}</p>
          </div>
          {timestamp && (
            <span className="text-xs text-gray-500 mt-1 px-1">{timestamp}</span>
          )}
        </div>
      </div>
    );
  }
);
ChatBotMessage.displayName = 'ChatBotMessage';

export { ChatBotMessage };
