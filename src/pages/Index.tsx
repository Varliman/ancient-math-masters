import Layout from "@/components/gallery/Layout";
import MathematicianCard from "@/components/gallery/MathematicianCard";
import { mathematicians } from "@/data/mathematicians";

const Index = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 pt-14 md:pt-20 pb-10 text-center max-w-3xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-accent mb-4">
          Часть I · Античность
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-primary leading-[1.05] mb-5">
          Три ума, что сделали мир измеримым
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
          Фалес научил мир доказывать. Пифагор услышал в нём числа.
          Евклид собрал всё в книгу, которой пользовались две тысячи лет.
        </p>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          {mathematicians.map((m, i) => (
            <MathematicianCard key={m.slug} m={m} eager={i === 0} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
