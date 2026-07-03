import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 lg:py-24" aria-label="Контакты и подвал сайта">
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact form */}
          <div>
            <h2 className="section-heading mb-10">Связаться с нами</h2>
            <form className="space-y-5" data-testid="contact-form" noValidate>
              <div>
                <label htmlFor="contact-name" className="sr-only">Ваше имя</label>
                <input type="text" id="contact-name" name="name" className="form-input" placeholder="Ваше Имя" data-testid="contact-name-input" required autoComplete="name" />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">Телефон</label>
                <input type="tel" id="contact-phone" name="phone" className="form-input" placeholder="+7 (999) 999-99-99" data-testid="contact-phone-input" required autoComplete="tel" />
              </div>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" name="consent" className="mt-1 h-[18px] w-[18px] shrink-0 rounded-[5px] border border-black accent-brand-blue" data-testid="contact-consent-checkbox" required />
                <span className="text-body-desk">Я принимаю <a href="#" className="text-brand-blue hover:underline" data-testid="contact-terms-link">условия передачи персональных данных</a></span>
              </label>
              <button type="submit" className="btn-primary w-full sm:w-auto" data-testid="contact-submit-btn">Оставить заявку</button>
            </form>
          </div>

          {/* Contacts */}
          <address className="not-italic">
            <h2 className="section-heading mb-10">Контакты</h2>
            <ul className="space-y-6">
              <li>
                <a href="mailto:brand@free-creative.com" className="font-book text-h3-desk hover:text-brand-blue" data-testid="contact-email-link">
                  brand@free-creative.com
                </a>
              </li>
              <li>
                <a href="tel:+74951563911" className="font-book text-h3-desk hover:text-brand-blue" data-testid="contact-phone-link">
                  8 (495) 156-39-11
                </a>
              </li>
              <li className="font-book text-h3-desk">Москва, Садовническая улица 69</li>
            </ul>
          </address>
        </div>

        {/* Media */}
        <section className="mt-20" aria-labelledby="media-heading">
          <h2 id="media-heading" className="section-heading mb-10">Мы в СМИ</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <a href="#" className="rounded-form bg-brand-blue p-6 text-white transition hover:bg-brand-blue/90" data-testid="media-article-1">
              <p className="text-body-desk">История агентства FREE.creative</p>
              <span className="mt-4 block text-notes-desk opacity-80">vc.ru</span>
            </a>
            <a href="#" className="rounded-form bg-brand-blue p-6 text-white transition hover:bg-brand-blue/90" data-testid="media-article-2">
              <p className="text-body-desk">Традиции и современность: брендинг ресторана-пекарни «Ешь Хлеб»</p>
              <span className="mt-4 block text-notes-desk opacity-80">vc.ru</span>
            </a>
            <a href="#" className="rounded-form bg-brand-blue p-6 text-white transition hover:bg-brand-blue/90" data-testid="media-article-3">
              <p className="text-body-desk">Четыре боли крупных клиентов и целительная сила аккаунтинга</p>
              <span className="mt-4 block text-notes-desk opacity-80">vc.ru</span>
            </a>
            <a href="#" className="rounded-form bg-brand-blue p-6 text-white transition hover:bg-brand-blue/90" data-testid="media-article-4">
              <p className="text-body-desk">Как выводить на рынок бренды будущего: кейс инновационной клиники витаминных коктейлей</p>
              <span className="mt-4 block text-notes-desk opacity-80">sostav.ru</span>
            </a>
          </div>
        </section>

        <p className="mt-16 text-body-desk">@ FREE.creative 2008—2020</p>
      </div>
    </footer>
  );
}