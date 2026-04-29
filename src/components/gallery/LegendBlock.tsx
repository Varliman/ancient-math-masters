import { ScrollText } from "lucide-react";

const LegendBlock = ({ text }: { text: string }) => (
  <aside className="border-l-4 border-accent bg-accent/5 rounded-r-md p-6 md:p-7 flex gap-4">
    <ScrollText className="w-7 h-7 text-accent shrink-0 mt-1" />
    <div>
      <h3 className="font-serif text-xl text-primary mb-2">Легенда</h3>
      <p className="text-foreground/85 leading-relaxed">{text}</p>
    </div>
  </aside>
);

export default LegendBlock;