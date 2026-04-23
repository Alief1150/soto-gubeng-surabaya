import * as React from 'react';
import { cn } from '@/lib/utils';

const Avatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-amber-100 text-sm font-semibold text-amber-900', className)}
      {...props}
    />
  )
);
Avatar.displayName = 'Avatar';

const AvatarFallback = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => <span ref={ref} className={cn('select-none', className)} {...props} />
);
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarFallback };
