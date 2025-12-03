'use client';

import { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contacts" className="py-20 lg:py-32 bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        <div className="bg-card border border-border rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-16">
            {/* Левая колонка - заголовок и подзаголовок */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
                Готовы улучшить операционную модель вашей компании?
              </h2>
              <p className="text-lg text-secondary-text leading-relaxed">
                Оставьте заявку, и наши эксперты свяжутся с вами для обсуждения задач и возможных решений. 
                Первая консультация — бесплатно.
              </p>

              {/* Дополнительная информация */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">1</span>
                  </div>
                  <p className="text-sm text-secondary-text">
                    Оставьте заявку в форме
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">2</span>
                  </div>
                  <p className="text-sm text-secondary-text">
                    Мы свяжемся с вами в течение 24 часов
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">3</span>
                  </div>
                  <p className="text-sm text-secondary-text">
                    Обсудим вашу ситуацию и предложим решение
                  </p>
                </div>
              </div>
            </div>

            {/* Правая колонка - форма */}
            <div className="flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Имя */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-text" />
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-secondary-text"
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-text" />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-secondary-text"
                      placeholder="ivan@company.com"
                      required
                    />
                  </div>
                </div>

                {/* Сообщение */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Расскажите о задаче
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-secondary-text" />
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-secondary-text resize-none"
                      placeholder="Опишите вашу задачу или вопрос..."
                      required
                    />
                  </div>
                </div>

                {/* Кнопка отправки */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl"
                >
                  Отправить заявку
                  <Send className="h-5 w-5" />
                </button>

                <p className="text-xs text-secondary-text text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
