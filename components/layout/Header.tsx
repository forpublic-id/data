import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function Header() {
  const t = useTranslations('navigation');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold text-xl text-red-600">Data ForPublic.id</span>
          </a>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="/id" className="text-foreground/60 transition-colors hover:text-foreground/80">
              {t('home')}
            </a>
            <a href="/id/docs" className="text-foreground/60 transition-colors hover:text-foreground/80">
              {t('docs')}
            </a>
            <a href="/id/status" className="text-foreground/60 transition-colors hover:text-foreground/80">
              {t('status')}
            </a>
          </nav>
          
          <Badge variant="outline" className="ml-4">
            API Active
          </Badge>
        </div>
      </div>
    </header>
  );
}