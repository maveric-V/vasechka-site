import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-border py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* О компании */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(4, 4) rotate(-3.8, 12, 12)">
                  <polygon points="0,12 20.78,0 20.78,24" fill="#2F8F8E" />
                </g>
              </svg>
              <span className="text-lg font-bold text-light-text">Вектор Васечка</span>
            </div>
            <p className="text-sm text-secondary-text leading-relaxed">
              Вертикально интегрированная компания по цифровой трансформации бизнеса
            </p>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-light-text font-semibold mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/directions/diagnostics"
                  className="text-secondary-text hover:text-primary-hover transition-colors"
                >
                  Диагностика
                </Link>
              </li>
              <li>
                <Link
                  href="/directions/architecture"
                  className="text-secondary-text hover:text-primary-hover transition-colors"
                >
                  Архитектура
                </Link>
              </li>
              <li>
                <Link
                  href="/directions/implementation"
                  className="text-secondary-text hover:text-primary-hover transition-colors"
                >
                  Внедрение
                </Link>
              </li>
              <li>
                <Link
                  href="/directions/development"
                  className="text-secondary-text hover:text-primary-hover transition-colors"
                >
                  Развитие
                </Link>
              </li>
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-light-text font-semibold mb-4">Компания</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/cases"
                  className="text-secondary-text hover:text-primary-hover transition-colors"
                >
                  Кейсы
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-secondary-text hover:text-primary-hover transition-colors"
                >
                  Отрасли
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="text-secondary-text hover:text-primary-hover transition-colors"
                >
                  Команда
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-secondary-text hover:text-primary-hover transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-light-text font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:vv@vasechka.com"
                  className="text-secondary-text hover:text-primary-hover transition-colors"
                >
                  vv@vasechka.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+79220758404"
                  className="text-secondary-text hover:text-primary-hover transition-colors"
                >
                  +7 922 075 8404
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-text">
                  Москва, Россия
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-secondary-text">
            © {new Date().getFullYear()} Вектор Васечка. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
