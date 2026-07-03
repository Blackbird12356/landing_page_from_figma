import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ComparisonTable from './components/ComparisonTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Hero />
      
      <main>
        {/* ========== WHAT IS BRAND STYLE ========== */}
        <section className="py-16 lg:py-24" aria-labelledby="brand-style-heading">
          <div className="container-site">
            <h2 id="brand-style-heading" className="section-heading mb-10 lg:mb-14">
              Что такое фирменный стиль
            </h2>
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <figure className="overflow-hidden rounded-sm">
                <img src="/assets/images/brand-style.png" alt="Примеры элементов фирменного стиля" className="h-auto w-full object-cover" width="635" height="381" loading="lazy" />
              </figure>
              <div className="space-y-4 text-body-desk">
                <p>Это набор тех уникальных «признаков», по которым клиент отличит вас от других компаний. Фирменный стиль отражает миссию бренда, ценности, является способом его идентификации, формирует определённое восприятие в коммуникации с потребителями.</p>
                <p>В идеале разработка корпоративного стиля должна происходить одновременно с созданием бизнеса и формированием его фундаментальных идей. Есть и второй вариант: бизнес существует определенное время и ему нужен перезапуск — это называется редизайн или ребрендинг: в мире жёсткой конкуренции важно быть «в тренде», успевать за изменениями в поведениях покупателя и "говорить" с ним на одном языке.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== BRAND ELEMENTS ========== */}
        <section className="py-16 lg:py-24" aria-labelledby="elements-heading">
          <div className="container-site">
            <h2 id="elements-heading" className="section-heading-lg mb-12 max-w-4xl lg:mb-16">
              Название и логотип – важные составляющие фирменного стиля, но на этом всё только начинается. Ниже основные элементы:
            </h2>
            <ol className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8" aria-label="Элементы фирменного стиля">
              <li className="flex flex-col gap-3">
                <span className="font-book text-h1-desk" aria-hidden="true">1</span>
                <span className="text-body-desk">Название компании</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className="font-book text-h1-desk" aria-hidden="true">2</span>
                <span className="text-body-desk">Логотип – основной графический символ</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className="font-book text-h1-desk" aria-hidden="true">3</span>
                <span className="text-body-desk">Фирменные цвета всей коммуникации (онлайн и оффлайн)</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className="font-book text-h1-desk" aria-hidden="true">4</span>
                <span className="text-body-desk">Шрифт</span>
              </li>
              <li className="col-span-2 flex flex-col gap-3 sm:col-span-3 lg:col-span-1">
                <span className="font-book text-h1-desk" aria-hidden="true">5</span>
                <span className="text-body-desk">Носители фирменного стиля</span>
                <p className="text-notes-desk text-brand-grey">Этот набор варьируется в зависимости от нужд и потребностей компании: визитные карточки, фирменные бланки и прочая деловая документация, упаковка, сувенирная продукция, брендинг автотранспорта.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ========== PRICING ========== */}
        <section className="py-16 lg:py-24" aria-labelledby="pricing-heading">
          <div className="container-site">
            <h2 id="pricing-heading" className="section-heading mb-10 lg:mb-14 lg:text-right">
              Сколько стоит фирменный стиль?
            </h2>
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 space-y-4 text-body-desk lg:order-1">
                <p>Каждая задача по разработке фирменного стиля уникальна для нас — это новый вызов и новые эмоции. Мы принципиально не предлагаем вам стандартизированные пакеты "эконом", "стандрат", или "премиум", мы не штампуем, мы — создаем.</p>
                <p>Стоимость разработки фирменного стиля в нашем агентстве начинается от 120 000 руб., финальную планку без брифинга определить невозможно — давайте созвонимся и обсудим ваш проект!</p>
                <p>Каждый клиент нашего агентства получает приятный бонус на финише проекта, о котором мы расскажем ниже <a href="#guidelines" className="text-brand-blue hover:underline" data-testid="pricing-bonus-link">▼</a></p>
              </div>
              <figure className="order-1 overflow-hidden rounded-sm lg:order-2">
                <img src="/assets/images/pricing.png" alt="Процесс разработки фирменного стиля" className="h-auto w-full object-cover" width="634" height="394" loading="lazy" />
              </figure>
            </div>
          </div>
        </section>

        <Portfolio />

        {/* ========== GUIDELINES BONUS ========== */}
        <section id="guidelines" className="py-16 lg:py-24" aria-labelledby="guidelines-heading">
          <div className="container-site">
            <h2 id="guidelines-heading" className="section-heading mb-10 lg:mb-14">
              Гайдлайны в подарок
            </h2>
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <figure className="overflow-hidden rounded-sm">
                <img src="/assets/images/guidelines.png" alt="Пример гайдлайна фирменного стиля" className="h-auto w-full object-cover" loading="lazy" />
              </figure>
              <div className="space-y-6">
                <div className="rounded-sm bg-brand-blue p-8 text-white lg:p-10">
                  <h3 className="font-book text-h3-desk">Что такое гайдлайн и зачем он нужен?</h3>
                  <p className="mt-4 text-body-desk">А теперь об обещанном бонусе: заказывая фирменный стиль в нашем агентстве вы получаете минимальный гайдлайн в подарок, это позволит вам уже быть на шаг впереди ваших конкурентов!</p>
                </div>
                <p className="text-body-desk">Гайдлайн – это свод правил по воспроизведению фирменного стиля на носителях. Если коротко, то в гайдлайне описано, как должен выглядеть каждый элемент корпоративного стиля и какие правила его использования. Гайдлайн помогает вашему бизнесу экономить время и деньги, помогать масштабироваться, а также тиражировать ваш бизнес посредством франшизы.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== APPLICATION FORM (MID) ========== */}
        <section id="application" className="py-16 lg:py-24" aria-labelledby="application-heading">
          <div className="container-site">
            <h2 id="application-heading" className="section-heading mb-4">
              Оставьте заявку на разработку вашего продукта
            </h2>
            <p className="mb-10 font-book text-h3-desk">Наши эксперты свяжутся с вами в ближайшее время</p>
            <form className="space-y-6" data-testid="application-form" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="app-name-mid" className="sr-only">Ваше имя</label>
                  <input type="text" id="app-name-mid" name="name" className="form-input" placeholder="Ваше Имя" data-testid="application-name-input" required autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="app-phone-mid" className="sr-only">Телефон</label>
                  <input type="tel" id="app-phone-mid" name="phone" className="form-input" placeholder="+7 (999) 999-99-99" data-testid="application-phone-input" required autoComplete="tel" />
                </div>
              </div>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" name="consent" className="mt-1 h-[18px] w-[18px] shrink-0 rounded-[5px] border border-black accent-brand-blue" data-testid="application-consent-checkbox" required />
                <span className="text-body-desk">Я принимаю <a href="#" className="text-brand-blue hover:underline" data-testid="application-terms-link">условия передачи персональных данных</a></span>
              </label>
              <button type="submit" className="btn-primary w-full sm:w-auto sm:ml-auto sm:block" data-testid="application-submit-btn">
                Оставить заявку
              </button>
            </form>
          </div>
        </section>

        {/* ========== PROCESS TIMELINE ========== */}
        <section className="py-16 lg:py-24" aria-labelledby="process-heading">
          <div className="container-site">
            <h2 id="process-heading" className="section-heading-lg mb-12 max-w-4xl lg:mb-20">
              Этапы создания фирменного стиля и гайдлайна
            </h2>

            {/* Phase 1 */}
            <div className="mb-16 lg:mb-24">
              <div className="mb-8 flex items-center gap-4">
                <img src="/assets/images/icon-phase-1.svg" alt="" width="82" height="87" aria-hidden="true" />
                <h3 className="font-book text-h3-desk">Погружение в креативный поиск</h3>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <article>
                  <h4 className="text-body-desk font-normal">Иследование среды</h4>
                  <p className="mt-2 text-notes-desk text-brand-grey">Изучаем нишу и конкурентное поле, находим подходящую идею будущей коммуникации</p>
                </article>
                <article>
                  <h4 className="text-body-desk font-normal">Поиск тональности</h4>
                  <p className="mt-2 text-notes-desk text-brand-grey">Решаем, какая тональность подходит именно вашему бренду. Дерзкий характер или спокойный, строгий или ультрамодный</p>
                </article>
                <article>
                  <h4 className="text-body-desk font-normal">Формирование мудбордов</h4>
                  <p className="mt-2 text-notes-desk text-brand-grey">Составляем подборку креативных проектов, которые соответствуют поставленной тональности стиля</p>
                </article>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="mb-16 lg:mb-24">
              <div className="mb-8 flex items-center gap-4">
                <img src="/assets/images/icon-phase-2.svg" alt="" width="84" height="70" aria-hidden="true" />
                <h3 className="font-book text-h3-desk">Разработка визуальной и вербальной айдентики</h3>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <article>
                  <h4 className="text-body-desk font-normal">Название и слоганы</h4>
                  <p className="mt-2 text-notes-desk text-brand-grey">Придумываем название для вашего бренда и запоминающиеся слоганы</p>
                </article>
                <article>
                  <h4 className="text-body-desk font-normal">Разработка логотипа, цвет</h4>
                  <p className="mt-2 text-notes-desk text-brand-grey">Создаем логотип – основной графический символ, важнейший элемент коммуникации, подбираем цветовую палитру для всей коммуникации</p>
                </article>
                <article>
                  <h4 className="text-body-desk font-normal">Основные носители фирменного стиля</h4>
                  <p className="mt-2 text-notes-desk text-brand-grey">Создаем дополнительные элементы дизайна: иллюстрации, фото, типографика. Прорабатываем дизайн на всех носителях.</p>
                </article>
              </div>
            </div>

            {/* Phase 3 */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <img src="/assets/images/icon-phase-3.svg" alt="" width="60" height="83" aria-hidden="true" />
                <h3 className="font-book text-h3-desk">Создание гайдлайна</h3>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <article>
                  <h4 className="text-body-desk font-normal">Основные принципы стиля</h4>
                  <p className="mt-2 text-notes-desk text-brand-grey">Выявляем основные принципы, на которых построен фирменный стиль</p>
                </article>
                <article>
                  <h4 className="text-body-desk font-normal">Составление гайдлайна</h4>
                  <p className="mt-2 text-notes-desk text-brand-grey">Наглядно показываем все правила использования фирменного стиля, закрепляем результат в виде презентации</p>
                </article>
                <article>
                  <h4 className="text-body-desk font-normal">Результат</h4>
                  <p className="mt-2 text-notes-desk text-brand-grey">Вы получаете готовый бренд с набором всех необходимых инструментов</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <ComparisonTable />

        {/* ========== QUALITY GUARANTEE ========== */}
        <section className="relative py-16 lg:py-24" aria-labelledby="guarantee-heading">
          <div className="absolute inset-0 z-0">
            <img src="/assets/images/guarantee-bg-5c29a2.png" alt="" className="h-full w-full object-cover" loading="lazy" aria-hidden="true" />
            <div className="absolute inset-0 bg-brand-black/15" aria-hidden="true"></div>
          </div>
          <div className="container-site relative z-10">
            <h2 id="guarantee-heading" className="section-heading-lg mb-12 max-w-4xl text-white lg:mb-16">
              Гарантия качества: 5 фундаментальных преимуществ работать с нами
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <article className="rounded-form bg-brand-blue p-6 text-white">
                <span className="font-book text-h1-desk" aria-hidden="true">1</span>
                <p className="mt-4 text-notes-desk">Разработкой вашего фирменного стиля займется команда профессионалов с высшим профильным образованием.</p>
              </article>
              <article className="rounded-form bg-brand-blue p-6 text-white">
                <span className="font-book text-h1-desk" aria-hidden="true">2</span>
                <p className="mt-4 text-notes-desk">Все права на результат работ переходят от Исполнителя к Заказчику и это закреплено юридически в нашем с вами Договоре.</p>
              </article>
              <article className="rounded-form bg-brand-blue p-6 text-white">
                <span className="font-book text-h1-desk" aria-hidden="true">3</span>
                <p className="mt-4 text-notes-desk">Все сотрудники компании строго соблюдают правила коммерческой тайны по вашему проекту, мы никогда не разглашаем стоимость разработки вашего проекта и любые детали, связанные с проектом.</p>
              </article>
              <article className="rounded-form bg-brand-blue p-6 text-white">
                <span className="font-book text-h1-desk" aria-hidden="true">4</span>
                <p className="mt-4 text-notes-desk">Мы гарантируем, что любая разработка проходит проверку на оригинальность, вы получайте действительно уникальный продукт</p>
              </article>
              <article className="rounded-form bg-brand-blue p-6 text-white sm:col-span-2 lg:col-span-1">
                <span className="font-book text-h1-desk" aria-hidden="true">5</span>
                <p className="mt-4 text-notes-desk">Мы имеем опыт работы с малым, средним и крупным бизнесом, а также с международными корпорациями. Наша репутация — это 9-ть лет успешной работы. 8-мь из 10-ти клиентов после совместной разработки фирменного стиля обращаются к нам повторно.</p>
              </article>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}

export default App;