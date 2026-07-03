import React from 'react';

export default function Hero() {
  return (
    <header className="relative min-h-screen" aria-label="Главная секция">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-bg.png"
          alt="Креативная команда FREE.creative за работой"
          className="h-full w-full object-cover"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
      </div>

      <div className="relative z-10">
        {/* Top bar */}
        <nav className="container-site flex flex-wrap items-center justify-between gap-4 pt-8" aria-label="Основная навигация">
          <a href="#" className="flex items-center gap-3" data-testid="nav-logo" aria-label="FREE.creative — на главную">
            <img src="/assets/images/logo.svg" alt="FREE.creative" width="84" height="36" />
            <span className="hidden text-notes-desk text-white sm:inline">Разрабатываем фирменные стили с 2009 года</span>
          </a>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+74951563911"
              className="hidden rounded-[15px] border border-white px-8 py-2 text-base text-white transition hover:bg-white/10 md:inline-flex"
              data-testid="nav-phone"
            >
              8 (495) 156-39-11
            </a>
            <a href="#" className="transition hover:opacity-80" data-testid="nav-facebook" aria-label="Facebook">
              <img src="/assets/images/icon-fb.svg" alt="" width="36" height="36" />
            </a>
            <a href="#" className="transition hover:opacity-80" data-testid="nav-instagram" aria-label="Instagram">
              <img src="/assets/images/icon-ig.svg" alt="" width="36" height="36" />
            </a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="container-site pb-20 pt-16 sm:pt-24 lg:pt-32">
          <h1 className="max-w-[560px] font-book text-[34px] leading-[1.1] text-brand-black sm:text-h1-desk">
            Вам нужен фирменный стиль или ребрендинг?
          </h1>
          <p className="mt-6 max-w-lg font-book text-h2-tab text-brand-black">
            Разработаем в срок от 10-ти дней
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#portfolio" className="btn-outline-dark w-full sm:w-auto border-2 bg-white/80 backdrop-blur-sm text-center" data-testid="hero-portfolio-btn">
              Портфолио
            </a>
            <a href="#application" className="btn-outline-dark w-full sm:w-auto border-2 bg-white/80 backdrop-blur-sm text-center" data-testid="hero-apply-btn">
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}