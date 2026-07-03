import React from 'react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 lg:py-24" aria-labelledby="portfolio-heading">
      <div className="container-site space-y-16 lg:space-y-24">
        {/* Project 1 */}
        <article aria-labelledby="project-amperia">
          <header className="mb-6 flex flex-col items-start sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-[89px]">
            <h3 id="project-amperia" className="font-book text-h2-tab sm:text-h1-desk">Amperia</h3>
            <a href="#" className="btn-outline-dark w-full sm:w-auto text-center" data-testid="portfolio-amperia-btn">Смотреть проект</a>
          </header>
          <p className="mb-6 max-w-xs text-body-desk">Бренд красивых сувениров и подарков для дома</p>
          <figure className="overflow-hidden rounded-sm">
            <img src="/assets/images/portfolio-amperia.png" alt="Кейс Amperia — фирменный стиль" className="w-full object-cover" loading="lazy" />
          </figure>
        </article>

        {/* Project 2 */}
        <article aria-labelledby="project-aqlifecare">
          <header className="mb-6 flex flex-col items-start sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-[89px]">
            <h3 id="project-aqlifecare" className="font-book text-h2-tab sm:text-h1-desk">AQ.Lifecare</h3>
            <a href="#" className="btn-outline-dark w-full sm:w-auto text-center" data-testid="portfolio-aqlifecare-btn">Смотреть проект</a>
          </header>
          <p className="mb-6 max-w-xs text-body-desk">Инновационная клиника внутривенной медицины</p>
          <figure className="overflow-hidden rounded-sm">
            <img src="/assets/images/portfolio-aqlifecare.png" alt="Кейс AQ.Lifecare — фирменный стиль" className="w-full object-cover" loading="lazy" />
          </figure>
        </article>

        {/* Project 3 */}
        <article aria-labelledby="project-vilata">
          <header className="mb-6 flex flex-col items-start sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-[89px]">
            <h3 id="project-vilata" className="font-book text-h2-tab sm:text-h1-desk">Vilata</h3>
            <a href="#" className="btn-outline-dark w-full sm:w-auto text-center" data-testid="portfolio-vilata-btn">Смотреть проект</a>
          </header>
          <p className="mb-6 max-w-xs text-body-desk">Бренд натуральных и вкусных соусов</p>
          <figure className="overflow-hidden rounded-sm">
            <img src="/assets/images/portfolio-vilata.png" alt="Кейс Vilata — фирменный стиль" className="w-full object-cover" loading="lazy" />
          </figure>
        </article>

        {/* Project 4 */}
        <article aria-labelledby="project-coral-black">
          <header className="mb-6 flex flex-col items-start sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-[89px]">
            <h3 id="project-coral-black" className="font-book text-h2-tab sm:text-h1-desk">Coral Black</h3>
            <a href="#" className="btn-outline-dark w-full sm:w-auto text-center" data-testid="portfolio-coral-black-btn">Смотреть проект</a>
          </header>
          <p className="mb-6 max-w-xs text-body-desk">Черная икра в современной инторпритации</p>
          <figure className="overflow-hidden rounded-sm">
            <img src="/assets/images/portfolio-coral-black.png" alt="Кейс Coral Black — фирменный стиль" className="w-full object-cover" loading="lazy" />
          </figure>
        </article>

        <div className="text-center mt-10">
          <button type="button" className="btn-primary w-full sm:w-auto" data-testid="portfolio-show-more-btn" aria-expanded="false">
            Показать еще
          </button>
        </div>
      </div>
    </section>
  );
}