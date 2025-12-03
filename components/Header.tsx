'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

// Список направлений для выпадающего меню
const directions = [
  { name: 'Диагностика', slug: 'diagnostics', description: 'Аудит и анализ текущих процессов' },
  { name: 'Архитектура', slug: 'architecture', description: 'Проектирование IT-решений' },
  { name: 'Внедрение', slug: 'implementation', description: 'Реализация CRM/ERP систем' },
  { name: 'Развитие', slug: 'development', description: 'Масштабирование и оптимизация' },
  { name: 'Стратегия', slug: 'strategy', description: 'Цифровая трансформация' },
  { name: 'Платформа', slug: 'platform', description: 'Технологическая платформа' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g transform="translate(4, 4) rotate(-3.8, 12, 12)">
                <polygon
                  points="0,12 20.78,0 20.78,24"
                  className="fill-primary"
                />
              </g>
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground">Вектор Васечка</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Главная
          </Link>

          {/* Услуги с выпадающим меню */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
              Услуги
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Выпадающее меню направлений */}
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-xl p-4">
                <div className="space-y-2">
                  {directions.map((direction) => (
                    <Link
                      key={direction.slug}
                      href={`/directions/${direction.slug}`}
                      className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {direction.name}
                      </div>
                      <div className="text-sm text-secondary-text mt-1">
                        {direction.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/cases"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Кейсы
          </Link>

          <Link
            href="/industries"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Отрасли
          </Link>

          <Link
            href="/experts"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Команда
          </Link>

          <Link
            href="/contacts"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Контакты
          </Link>

          <ThemeToggle />

          <Link
            href="#contacts"
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover transition-all"
          >
            Связаться
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-custom py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </Link>

            <div className="space-y-2">
              <div className="font-semibold text-foreground">Услуги / Направления</div>
              {directions.map((direction) => (
                <Link
                  key={direction.slug}
                  href={`/directions/${direction.slug}`}
                  className="block py-2 pl-4 text-secondary-text hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {direction.name}
                </Link>
              ))}
            </div>

            <Link
              href="/cases"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Кейсы
            </Link>

            <Link
              href="/industries"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Отрасли
            </Link>

            <Link
              href="/experts"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Команда
            </Link>

            <Link
              href="/contacts"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </Link>

            <div className="pt-4 border-t border-border">
              <Link
                href="#contacts"
                className="block w-full text-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Связаться
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
