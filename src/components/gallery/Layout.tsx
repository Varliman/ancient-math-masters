import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Главная", end: true },
  { to: "/thales", label: "Фалес" },
  { to: "/pythagoras", label: "Пифагор" },
  { to: "/euclid", label: "Евклид" },
  { to: "/about", label: "О проекте" },
  { to: "/sources", label: "Источники" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/70 bg-card/70 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between gap-6">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-serif text-2xl md:text-3xl text-primary">
              Галерея великих математиков
            </span>
            <span className="text-xs md:text-sm text-muted-foreground tracking-widest uppercase">
              Античность · Фалес · Пифагор · Евклид
            </span>
          </Link>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `transition-colors hover:text-primary ${
                    isActive ? "text-primary font-medium" : "text-foreground/70"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
        {open && (
          <nav className="md:hidden border-t border-border/70 bg-card px-6 py-4 flex flex-col gap-3">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base ${isActive ? "text-primary font-medium" : "text-foreground/80"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}
        <div className="meander-divider" aria-hidden="true" />
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/70 bg-card/60 mt-16">
        <div className="meander-divider" aria-hidden="true" />
        <div className="container mx-auto px-6 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>
            Индивидуальный проект студента группы ИР1-25 Ермакова Р. А.,
            Чебоксарский электромеханический колледж, 2026.
          </p>
          <Link to="/sources" className="text-primary hover:underline">
            Список источников →
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;