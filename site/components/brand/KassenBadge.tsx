const PILLS = ["Gesetzlich versichert", "Privat versichert", "Selbstzahler"];

export default function KassenBadge({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ul className="flex flex-wrap gap-2">
        {PILLS.map((pill) => (
          <li
            key={pill}
            className="rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-primary"
          >
            {pill}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-sm text-ink-muted">
        Wir behandeln Sie - egal wie Sie versichert sind.
      </p>
    </div>
  );
}
