import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'netflix';
  size?: 'default' | 'sm' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90':
              variant === 'default',
            'border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100':
              variant === 'outline',
            'hover:bg-neutral-100 hover:text-neutral-900': variant === 'ghost',
            'text-neutral-900 underline-offset-4 hover:underline':
              variant === 'link',
            'bg-netflix-red text-white hover:bg-netflix-red/90':
              variant === 'netflix',
          },
          {
            'h-9 px-4 py-2': size === 'default',
            'h-8 rounded-md px-3 text-sm': size === 'sm',
            'h-10 rounded-md px-8': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';