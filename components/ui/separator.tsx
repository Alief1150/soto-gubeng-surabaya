import { cn } from '@/lib/utils';

function Separator({ className }: { className?: string }) {
  return <div className={cn('h-px w-full bg-border/70', className)} />;
}

export { Separator };
