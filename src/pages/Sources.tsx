import Layout from "@/components/gallery/Layout";

const sources = [
  "Ван дер Варден Б. Л. Пробуждающаяся наука. Математика Древнего Египта, Вавилона и Греции. — М.: Физматгиз, 1959.",
  "Диоген Лаэртский. О жизни, учениях и изречениях знаменитых философов. — М.: Мысль, 1986.",
  "Евклид. Начала / Пер. с греч. Д. Д. Мордухай-Болтовского. — М.; Л.: ГИТТЛ, 1948–1950.",
  "Жмудь Л. Я. Пифагор и ранние пифагорейцы. — М.: Русский фонд содействия образованию и науке, 2012.",
  "История математики с древнейших времён до начала XIX столетия / Под ред. А. П. Юшкевича. Т. 1. — М.: Наука, 1970.",
  "Плутарх. Сравнительные жизнеописания. — М.: Наука, 1994.",
  "Хит Т. История греческой математики. — Oxford: Clarendon Press, 1921 (рус. изложение в кн. Юшкевича).",
];

const Sources = () => (
  <Layout>
    <article className="container mx-auto px-6 py-12 md:py-20 max-w-3xl">
      <h1 className="font-serif text-4xl md:text-5xl text-primary mb-6">
        Источники
      </h1>
      <p className="text-foreground/80 mb-8">
        Литература, использованная при подготовке материалов галереи.
      </p>
      <ol className="space-y-4 list-decimal list-outside pl-6 text-foreground/85 leading-relaxed">
        {sources.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </article>
  </Layout>
);

export default Sources;