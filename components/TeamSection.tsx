import Link from 'next/link';
import { User } from 'lucide-react';

// Пример экспертов (в реальном проекте данные из API)
const teamMembers = [
  {
    id: 1,
    slug: 'ivan-petrov',
    name: 'Иван Петров',
    position: 'Руководитель отдела архитектуры',
    photo: '/images/team/ivan.jpg',
    bio: 'Более 15 лет опыта в проектировании корпоративных систем',
  },
  {
    id: 2,
    slug: 'maria-smirnova',
    name: 'Мария Смирнова',
    position: 'Ведущий консультант по CRM',
    photo: '/images/team/maria.jpg',
    bio: 'Эксперт по внедрению Bitrix24 с опытом 100+ проектов',
  },
  {
    id: 3,
    slug: 'alexey-volkov',
    name: 'Алексей Волков',
    position: 'Руководитель отдела разработки',
    photo: '/images/team/alexey.jpg',
    bio: 'Специализация на интеграциях и автоматизации процессов',
  },
  {
    id: 4,
    slug: 'elena-kozlova',
    name: 'Елена Козлова',
    position: 'Бизнес-аналитик',
    photo: '/images/team/elena.jpg',
    bio: 'Оптимизация бизнес-процессов и внедрение best practices',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        {/* Заголовок - выровнен по левому краю */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-left">
            Наша команда
          </h2>
          <p className="mt-4 text-lg text-secondary-text text-left max-w-3xl">
            Профессионалы с глубокой экспертизой в цифровой трансформации и внедрении IT-решений
          </p>
        </div>

        {/* Сетка команды */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              href={`/experts/${member.slug}`}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              {/* Фото заглушка */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <User className="h-20 w-20 text-primary/40" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">{member.position}</p>
                <p className="text-sm text-secondary-text leading-relaxed">{member.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
