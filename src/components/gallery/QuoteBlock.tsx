import { Quote } from "lucide-react";

const QuoteBlock = ({ text, author }: { text: string; author: string }) => (
  <figure className="relative bg-marble border border-border rounded-md p-8 md:p-10 shadow-card">
    <Quote className="absolute -top-4 left-6 w-10 h-10 text-accent bg-card p-2 rounded-full border border-border" />
    <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug">
      «{text}»
    </blockquote>
    <figcaption className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
      — {author}
    </figcaption>
  </figure>
);

export default QuoteBlock;