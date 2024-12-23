import React from 'react';
import { Search } from 'lucide-react';
import { Input, InputProps } from './Input';
import { cn } from '@/lib/utils';

export const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5" />
        <Input
          ref={ref}
          className={cn('pl-10', className)}
          {...props}
        />
      </div>
    );
  }
);