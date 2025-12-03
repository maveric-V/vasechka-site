import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

// Пример кейсов (в реальном проекте данные будут из API)
const featuredCases = [
  {
    id: 1,
    slug: 'logistics-automation',
    title: 'Автоматизация складской логистики',
    client: 'Крупный дистрибьютор',
    industry: 'Логистика',
    direction: 'Внедрение',
    result: 'Сокращение времени обработки заказов на 40%',
    image: '/images/cases/logistics.jpg',
  },
  {
    id: 2,
    slug: 'crm-implementation',
    title: 'Внедрение CRM для управления продажами',
    client: 'Производственная компания',
    industry: 'Производство',
    direction: 'Внедрение',
    result: 'Рост конверсии лидов на 35%',
    image: '/images/cases/crm.jpg',
  },
  {
    id: 3,
    slug: 'digital-transformation',
    title: 'Комплексная цифровая трансформация',
    client: 'Строительный холдинг',
    industry: 'Строительство',
    direction: 'Стратегия',
    result: 'Снижение операционных затрат на 25%',
    image: '/images/cases/transformation.jpg',
  },
];

export default function CasesSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        {/* Заголовок - выровнен по левому краю */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-left">
            Реализованные проекты и результаты клиентов
          </h2>
          <p className="mt-4 text-lg text-secondary-text text-left max-w-3xl">
            Наши кейсы — это истории успеха компаний, которые доверили нам свою цифровую трансформацию
          </p>
        </div>

        {/* Сетка кейсов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCases.map((caseItem) => (
            <Link
              key={caseItem.id}
              href={`/cases/${caseItem.slug}`}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl"
            >
              {/* Изображение заглушка */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-primary/40" />
              </div>

              <div className="p-6">
                {/* Метки */}
                <div className="flex gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {caseItem.direction}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary-text/10 text-secondary-text font-medium">
                    {caseItem.industry}
                  </span>
                </div>

                {/* Заголовок */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h3>

                {/* Клиент */}
                <p className="text-sm text-secondary-text mb-4">{caseItem.client}</p>

                {/* Результат */}
                <div className="flex items-start gap-2 text-sm">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground font-medium">{caseItem.result}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Кнопка "Смотреть все кейсы" */}
        <div className="text-center">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl"
          >
            Смотреть все кейсы
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
