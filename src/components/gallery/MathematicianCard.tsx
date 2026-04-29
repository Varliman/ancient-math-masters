import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Mathematician } from "@/data/mathematicians";

const MathematicianCard = ({ m, eager = false }: { m: Mathematician; eager?: boolean }) => {
  return (
    <article className="group flex flex-col bg-card border border-border rounded-md shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
      <div className="aspect-[4/5] overflow-hidden bg-marble">
        <img
          src={m.portrait}
          alt={`Портрет: ${m.fullName}`}
          width={768}
          height={896}
          loading={eager ? "eager" : "lazy"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sepia-[0.15]"
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-primary leading-tight">
            {m.fullName}
          </h2>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
            {m.years}
          </p>
        </div>
        <p className="text-foreground/85 leading-relaxed flex-1">{m.teaser}</p>
        <Button asChild variant="default" className="self-start mt-2">
          <Link to={`/${m.slug}`}>Подробнее</Link>
        </Button>
      </div>
    </article>
  );
};

export default MathematicianCard;