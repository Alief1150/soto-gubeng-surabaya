import * as React from 'react';
import { cn } from '@/lib/utils';

function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-primary/20 bg-white/5 px-3 py-1 text-xs font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/10',
        className
      )}
      {...props}
    />
  );
}

export { Badge };
