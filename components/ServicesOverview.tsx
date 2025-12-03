import Link from 'next/link';
import { Search, Layers, Rocket, TrendingUp, Target, Box } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Диагностика',
    slug: 'diagnostics',
    description: 'Аудит текущих процессов, систем и данных. Выявление узких мест и точек роста.',
  },
  {
    icon: Layers,
    title: 'Архитектура',
    slug: 'architecture',
    description: 'Проектирование оптимальной IT-архитектуры под бизнес-задачи компании.',
  },
  {
    icon: Rocket,
    title: 'Внедрение',
    slug: 'implementation',
    description: 'Установка и настройка CRM/ERP систем, интеграции, миграция данных.',
  },
  {
    icon: TrendingUp,
    title: 'Развитие',
    slug: 'development',
    description: 'Масштабирование систем, добавление новых функций и автоматизация.',
  },
  {
    icon: Target,
    title: 'Стратегия',
    slug: 'strategy',
    description: 'Разработка стратегии цифровой трансформации и дорожной карты.',
  },
  {
    icon: Box,
    title: 'Платформа',
    slug: 'platform',
    description: 'Создание единой технологической платформы для всех бизнес-процессов.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        {/* Заголовок - выровнен по левому краю */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-left">
            Полный цикл цифровой трансформации бизнеса
          </h2>
          <p className="mt-4 text-lg text-secondary-text text-left max-w-3xl">
            Мы сопровождаем клиентов на всех этапах — от диагностики до масштабирования решений
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/directions/${service.slug}`}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-secondary-text leading-relaxed">{service.description}</p>

              <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Подробнее
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
