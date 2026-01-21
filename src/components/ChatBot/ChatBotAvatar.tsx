import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ChatBotAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

const ChatBotAvatar = React.forwardRef<HTMLDivElement, ChatBotAvatarProps>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className="text-white font-bold text-sm">V</span>
      </div>
    );
  }
);
ChatBotAvatar.displayName = 'ChatBotAvatar';

export { ChatBotAvatar };
