"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Badge } from "@/components/ui/Badge";

const navigation = [
  { key: "docs", href: "/docs" },
  { key: "status", href: "/status" },
];

export function Header() {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return (
      pathname === `/${locale}${href}` ||
      pathname.startsWith(`/${locale}${href}/`)
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8">
              <Image
                src="/logo.svg"
                alt="ForPublic.id Logo"
                width={32}
                height={32}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xl font-bold text-foreground whitespace-nowrap">
                <span className="text-primary">Data</span> ForPublic
              </span>
              <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                by <span className="text-foreground">ForPublic</span>
                <span className="text-red-600">.id</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-red-600"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(item.key as any)}
                </Link>
              );
            })}
          </nav>

          {/* API Status Badge & Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              API Active
            </Badge>
            <LanguageSwitcher locale={locale} />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 px-4 md:px-6 lg:px-8">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const isActive = isActiveLink(item.href);
                return (
                  <Link
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    className={`block text-sm font-medium transition-colors py-2 px-3 rounded-md ${
                      isActive
                        ? "text-red-600 bg-red-50"
                        : "text-muted-foreground hover:text-foreground hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.key as any)}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center justify-between mt-6 pt-4 border-t">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                API Active
              </Badge>
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
