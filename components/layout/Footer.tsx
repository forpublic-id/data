import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl text-red-600">Data ForPublic.id</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              {t('description')}
            </p>
          </div>
          
          {/* Ecosystem */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('links.ecosystem')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://forpublic.id" className="text-sm text-gray-600 hover:text-gray-900">
                  {t('ecosystem.main')}
                </a>
              </li>
              <li>
                <a href="https://salary.forpublic.id" className="text-sm text-gray-600 hover:text-gray-900">
                  {t('ecosystem.salary')}
                </a>
              </li>
              <li>
                <a href="https://budget.forpublic.id" className="text-sm text-gray-600 hover:text-gray-900">
                  {t('ecosystem.budget')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('links.resources')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/docs" className="text-sm text-gray-600 hover:text-gray-900">
                  {t('resources.docs')}
                </a>
              </li>
              <li>
                <a href="https://github.com/forpublic-id/data" className="text-sm text-gray-600 hover:text-gray-900">
                  {t('resources.github')}
                </a>
              </li>
              <li>
                <a href="/status" className="text-sm text-gray-600 hover:text-gray-900">
                  {t('resources.status')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('links.support')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  {t('support.contact')}
                </a>
              </li>
              <li>
                <a href="/help" className="text-sm text-gray-600 hover:text-gray-900">
                  {t('support.help')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-gray-600 text-center">
            Made with ❤️ for Indonesian transparency
          </p>
        </div>
      </div>
    </footer>
  );
}