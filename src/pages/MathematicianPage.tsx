import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Calendar } from "lucide-react";
import Layout from "@/components/gallery/Layout";
import Timeline from "@/components/gallery/Timeline";
import QuoteBlock from "@/components/gallery/QuoteBlock";
import LegendBlock from "@/components/gallery/LegendBlock";
import DiscoveryItem from "@/components/gallery/DiscoveryItem";
import { getMathematician, getNeighbors } from "@/data/mathematicians";
import { useEffect } from "react";

const MathematicianPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const m = slug ? getMathematician(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!m) return <Navigate to="/" replace />;
  const { prev, next } = getNeighbors(m.slug);

  return (
    <Layout>
      <article className="container mx-auto px-6 py-10 md:py-16 max-w-5xl">
        <header className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> К галерее
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl text-primary leading-tight">
            {m.fullName}
          </h1>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {m.years}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {m.place}
            </span>
          </div>
        </header>

        <section className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 mb-14">
          <figure className="rounded-md overflow-hidden border border-border bg-marble shadow-card">
            <img
              src={m.portrait}
              alt={m.portraitCaption}
              width={768}
              height={896}
              className="w-full h-auto object-cover sepia-[0.15]"
            />
            <figcaption className="text-xs text-muted-foreground p-3 border-t border-border bg-card">
              {m.portraitCaption}
            </figcaption>
          </figure>
          <div className="flex flex-col justify-center">
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug italic">
              {m.lead}
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-serif text-3xl text-primary mb-5">Жизнь</h2>
          <div className="space-y-4 text-lg text-foreground/85 leading-relaxed">
            {m.biography.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-serif text-3xl text-primary mb-5">
            Ключевые открытия
          </h2>
          <ul className="grid md:grid-cols-2 gap-5">
            {m.discoveries.map((d, i) => (
              <DiscoveryItem key={i} d={d} />
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <Timeline highlight={m.slug} />
        </section>

        <section className="mb-14">
          <LegendBlock text={m.legend} />
        </section>

        <section className="mb-14">
          <QuoteBlock text={m.quote} author={m.quoteAuthor} />
        </section>

        <nav className="flex flex-col sm:flex-row justify-between gap-4 border-t border-border pt-8">
          {prev && (
            <Link
              to={`/${prev.slug}`}
              className="group inline-flex items-center gap-3 text-foreground/80 hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Предыдущий
                </span>
                <span className="font-serif text-lg">{prev.fullName}</span>
              </span>
            </Link>
          )}
          {next && (
            <Link
              to={`/${next.slug}`}
              className="group inline-flex items-center gap-3 sm:ml-auto sm:text-right text-foreground/80 hover:text-primary"
            >
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Следующий
                </span>
                <span className="font-serif text-lg">{next.fullName}</span>
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </nav>
      </article>
    </Layout>
  );
};

export default MathematicianPage;