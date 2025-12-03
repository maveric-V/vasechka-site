import { CheckCircle2, Users, Target, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Полный цикл трансформации',
    description:
      'От диагностики до внедрения и развития — все этапы под ключ без необходимости искать разных подрядчиков',
  },
  {
    icon: Users,
    title: 'Опытная команда экспертов',
    description:
      'Специалисты с опытом реализации 100+ проектов в различных отраслях и компаниях разного масштаба',
  },
  {
    icon: Target,
    title: 'Фокус на результат',
    description:
      'Мы не просто внедряем системы — мы добиваемся измеримых бизнес-результатов и ROI',
  },
  {
    icon: Rocket,
    title: 'Современные технологии',
    description:
      'Используем лучшие практики и инструменты для создания масштабируемых и надежных решений',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-32 bg-light-bg dark:bg-background">
      <div className="container-custom">
        {/* Заголовок - выровнен по левому краю */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-left">
            Почему компании выбирают Вектор Васечка
          </h2>
          <p className="mt-4 text-lg text-secondary-text text-left max-w-3xl">
            Мы помогаем бизнесу достигать целей через внедрение эффективных IT-решений
          </p>
        </div>

        {/* Сетка преимуществ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-text leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
