import Link from 'next/link';
import { Building2, Truck, Factory, ShoppingCart, Landmark, Heart } from 'lucide-react';

const industries = [
  {
    name: 'Корпорации',
    slug: 'corporations',
    description: 'Крупный бизнес и холдинги',
    icon: Building2,
  },
  {
    name: 'Логистика',
    slug: 'logistics',
    description: 'Складской учет и доставка',
    icon: Truck,
  },
  {
    name: 'Производство',
    slug: 'manufacturing',
    description: 'Промышленные предприятия',
    icon: Factory,
  },
  {
    name: 'Ритейл',
    slug: 'retail',
    description: 'Розничная торговля',
    icon: ShoppingCart,
  },
  {
    name: 'Девелопмент',
    slug: 'development',
    description: 'Строительство и недвижимость',
    icon: Landmark,
  },
  {
    name: 'Медицина',
    slug: 'healthcare',
    description: 'Медицинские организации',
    icon: Heart,
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 lg:py-32 bg-light-bg dark:bg-background">
      <div className="container-custom">
        {/* Заголовок - выровнен по левому краю */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-left">
            Мы работаем с ключевыми отраслями
          </h2>
          <p className="mt-4 text-lg text-secondary-text text-left max-w-3xl">
            Глубокая экспертиза в различных индустриях позволяет нам предлагать наиболее эффективные решения
          </p>
        </div>

        {/* Сетка отраслей */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-secondary-text">{industry.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
