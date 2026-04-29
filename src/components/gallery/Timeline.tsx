import { mathematicians } from "@/data/mathematicians";

const events = [
  { year: "624 до н. э.", text: "Рождение Фалеса в Милете", slug: "thales" },
  { year: "585 до н. э.", text: "Предсказанное Фалесом солнечное затмение", slug: "thales" },
  { year: "570 до н. э.", text: "Рождение Пифагора на Самосе", slug: "pythagoras" },
  { year: "530 до н. э.", text: "Основание пифагорейского союза в Кротоне", slug: "pythagoras" },
  { year: "495 до н. э.", text: "Смерть Пифагора", slug: "pythagoras" },
  { year: "325 до н. э.", text: "Рождение Евклида", slug: "euclid" },
  { year: "300 до н. э.", text: "Написание «Начал» в Александрии", slug: "euclid" },
  { year: "265 до н. э.", text: "Смерть Евклида", slug: "euclid" },
] as const;

const Timeline = ({ highlight }: { highlight?: string }) => {
  return (
    <section className="bg-card/60 border border-border rounded-md p-6 md:p-8 shadow-card">
      <h3 className="font-serif text-2xl text-primary mb-6">
        Хронология эпохи
      </h3>
      <ol className="relative border-l-2 border-accent/40 ml-3 space-y-5">
        {events.map((e, i) => {
          const active = e.slug === highlight;
          return (
            <li key={i} className="pl-6 relative">
              <span
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  active
                    ? "bg-primary border-primary scale-125"
                    : "bg-card border-accent/60"
                } transition-transform`}
              />
              <div
                className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 ${
                  active ? "text-foreground" : "text-foreground/70"
                }`}
              >
                <span
                  className={`font-serif text-lg ${
                    active ? "text-primary font-semibold" : "text-accent"
                  } w-32 shrink-0`}
                >
                  {e.year}
                </span>
                <span className="leading-snug">{e.text}</span>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-6 text-xs text-muted-foreground">
        Подсвечены события, относящиеся к {" "}
        {highlight
          ? mathematicians.find((m) => m.slug === highlight)?.fullName
          : "выбранному математику"}
        .
      </p>
    </section>
  );
};

export default Timeline;