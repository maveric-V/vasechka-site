'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const animatedPhrases = [
  'Устраняем хаос в операционке',
  'Оптимизируем ключевые процессы',
  'Внедряем CRM/ERP, которые реально работают',
  'Наводим порядок в данных',
  'Ускоряем работу команд',
  'Уменьшаем ошибки и ручные операции',
];

export default function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % animatedPhrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Левая колонка с текстом */}
          <div className="lg:col-span-7">
            {/* H1 - Статичный заголовок (левое выравнивание) */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-left">
              Делаем ваш бизнес управляемым и масштабируемым
            </h1>

            {/* Анимируемая строка */}
            <div className="mt-8 h-12 sm:h-14 lg:h-16 relative text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhraseIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0 flex items-center"
                >
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary relative inline-block">
                    {animatedPhrases[currentPhraseIndex]}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/50" />
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Подзаголовок */}
            <p className="mt-8 text-lg leading-8 text-secondary-text lg:text-xl text-left">
              Диагностика, архитектура, внедрение и развитие — полный цикл цифровизации в режиме одного окна.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="#contacts"
                className="w-full sm:w-auto rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Получить консультацию
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary/10 transition-all flex items-center justify-center"
              >
                Смотреть услуги
              </Link>
            </div>
          </div>

          {/* Правая колонка - схема экосистемы */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Диагностика', color: 'from-primary/20 to-primary/5' },
                { title: 'Архитектура', color: 'from-primary/30 to-primary/10' },
                { title: 'Внедрение', color: 'from-primary/40 to-primary/15' },
                { title: 'Развитие', color: 'from-primary/30 to-primary/10' },
                { title: 'Стратегия', color: 'from-primary/35 to-primary/12' },
                { title: 'Платформа', color: 'from-primary/25 to-primary/8' },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-gradient-to-br ${item.color} backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="text-sm font-semibold text-foreground">{item.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
