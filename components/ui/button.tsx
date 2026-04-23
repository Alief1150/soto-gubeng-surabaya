import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
  children?: React.ReactNode;
}

const variants = {
  default: 'bg-primary text-primary-foreground shadow-[0_14px_30px_rgba(255,109,31,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(255,109,31,0.28)]',
  secondary: 'bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-secondary/90',
  outline: 'border border-border/80 bg-white/5 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-white/10 hover:text-accent-foreground',
  ghost: 'hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-accent-foreground'
};

const sizes = {
  default: 'h-11 px-5 py-2.5',
  sm: 'h-9 px-3.5',
  lg: 'h-12 px-7'
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild, children, type = 'button', ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50',
      variants[variant],
      sizes[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(classes, children.props.className)
      });
    }

    return (
      <button ref={ref} type={type} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
