import Layout from "@/components/gallery/Layout";

const About = () => (
  <Layout>
    <article className="container mx-auto px-6 py-12 md:py-20 max-w-3xl">
      <h1 className="font-serif text-4xl md:text-5xl text-primary mb-6">
        О проекте
      </h1>
      <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
        <p>
          «Галерея великих математиков» — серия портретов учёных, чьи идеи
          определили развитие точных наук. Первая часть посвящена античности
          и трём её ключевым фигурам: Фалесу, Пифагору и Евклиду.
        </p>
        <p>
          Каждая страница галереи — это краткая биография, разбор главных
          открытий, общая хронологическая шкала и одна яркая легенда,
          которая делает фигуру учёного живой, а не музейной.
        </p>
        <p>
          В дальнейшем галерея будет пополняться новыми героями: Архимед,
          Диофант, Гипатия — и далее, к математикам Средневековья и Нового
          времени.
        </p>
      </div>
    </article>
  </Layout>
);

export default About;