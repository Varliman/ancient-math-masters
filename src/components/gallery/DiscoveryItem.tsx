import type { Discovery } from "@/data/mathematicians";

const DiscoveryItem = ({ d }: { d: Discovery }) => (
  <li className="bg-card border border-border rounded-md p-5 shadow-card">
    <h4 className="font-serif text-lg text-primary mb-2">{d.title}</h4>
    <p className="text-foreground/85 leading-relaxed">{d.description}</p>
    {d.formula && (
      <p className="mt-3 inline-block font-serif text-lg text-accent bg-accent/10 px-3 py-1 rounded">
        {d.formula}
      </p>
    )}
  </li>
);

export default DiscoveryItem;