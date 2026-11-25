import type { ReactNode } from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
}) {
  const alignCls = align === 'center' ? 'mx-auto items-center text-center' : 'items-start';
  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignCls}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display text-4xl leading-[1.05] text-foam sm:text-5xl">{title}</h2>
      {description ? <p className="text-lg leading-relaxed text-ink/65">{description}</p> : null}
    </div>
  );
}
