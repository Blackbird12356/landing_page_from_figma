import React from 'react';

const ComparisonTable = () => {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="comparison-heading">
      <div className="container-site">
        <h2 id="comparison-heading" className="sr-only">Сравнение исполнителей</h2>

        <div className="overflow-x-auto pb-6 -mx-5 px-5 sm:mx-0 sm:px-0 no-scrollbar">
          <div className="compare-wrapper">
            
            {/* Sidebar labels */}
            <div className="compare-col rounded-form bg-brand-blue text-white pb-4 text-h3-desk">
              <div className="pt-4"></div>
              <div className="flex items-center px-4 py-6 font-book">Философия</div>
              <div className="flex items-center px-4 py-6 font-book">Уровень дизайна</div>
              <div className="flex items-center px-4 py-6 font-book">Стоимость</div>
              <div className="flex items-center px-4 py-6 font-book">Отношение к клиенту</div>
              <div className="flex items-center px-4 py-6 font-book border-b-0">Сроки</div>
            </div>

            {/* Freelancer */}
            <div className="compare-col">
              <h3 className="self-end pb-4 pt-4 font-book text-h2-desk text-brand-grey">Фрилансер</h3>
              <div className="comparison-row text-notes-desk">Часто замотивирован как можно быстрее сделать и получить деньги.</div>
              <div className="comparison-row text-notes-desk">Как получится....</div>
              <div className="comparison-row text-notes-desk">В 90% случаев дешевле агентства.</div>
              <div className="comparison-row text-notes-desk">Как получится...</div>
              <div className="comparison-row border-b-0 text-notes-desk">Иногда исполнитель вообще пропадает без связи</div>
            </div>

            {/* Free.creative */}
            <div className="compare-col rounded-form ring-4 ring-inset ring-brand-blue">
              <h3 className="self-end px-4 pb-4 pt-4 font-book text-h2-desk text-brand-blue">Free.creative</h3>
              <div className="comparison-row px-4 text-notes-desk">Опытная команда профессионалов, нацеленная на результат...</div>
              <div className="comparison-row px-4 text-notes-desk">Высокий. За нас говорит наше портфолио и клиенты.</div>
              <div className="comparison-row px-4 text-notes-desk">Адекватная рынку и вашей задаче...</div>
              <div className="comparison-row px-4 text-notes-desk">Нас можно назвать настоящими друзьями...</div>
              <div className="comparison-row border-b-0 px-4 pb-6 text-notes-desk">Мы адекватно подходим к срокам...</div>
            </div>

            {/* Big agency */}
            <div className="compare-col">
              <h3 className="self-end pb-4 pt-4 font-book text-h2-desk text-brand-grey">Большое агентство с именем</h3>
              <div className="comparison-row text-notes-desk">Огромная сверхопытная команда...</div>
              <div className="comparison-row text-notes-desk">Высокий. За коллег говорит их портфолио...</div>
              <div className="comparison-row text-notes-desk">Высокая, иногда откровенно завышенная...</div>
              <div className="comparison-row text-notes-desk">Коммуникация ведется в рамках...</div>
              <div className="comparison-row border-b-0 text-notes-desk">Долго, несколько уровней менеджмента...</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;