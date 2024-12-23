import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
          {
            'bg-primary/20 text-primary': variant === 'default',
            'bg-green-500/20 text-green-500': variant === 'success',
            'bg-yellow-500/20 text-yellow-500': variant === 'warning',
            'bg-red-500/20 text-red-500': variant === 'error',
          },
          className
        )}
        {...props}
      />
    );
  }
);