import * as React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ChatBotTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  position?: 'bottom-right' | 'bottom-left';
}

const ChatBotTrigger = React.forwardRef<HTMLButtonElement, ChatBotTriggerProps>(
  ({ className, position = 'bottom-right', ...props }, ref) => {
    const positionClasses = {
      'bottom-right': 'bottom-6 right-6',
      'bottom-left': 'bottom-6 left-6',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'fixed z-50 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex flex-col items-center justify-center gap-0.5',
          positionClasses[position],
          className
        )}
        {...props}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] font-bold leading-none">DAT-V</span>
      </button>
    );
  }
);
ChatBotTrigger.displayName = 'ChatBotTrigger';

export { ChatBotTrigger };
