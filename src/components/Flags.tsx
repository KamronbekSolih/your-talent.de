export function FlagDE({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true">
      <rect width="60" height="10" y="0" fill="#000" />
      <rect width="60" height="10" y="10" fill="#DD0000" />
      <rect width="60" height="10" y="20" fill="#FFCE00" />
    </svg>
  );
}

export function FlagGB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true">
      <rect width="60" height="30" fill="#00247d" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#cf142b" strokeWidth="2" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#cf142b" strokeWidth="6" />
    </svg>
  );
}

export function FlagUZ({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true">
      <rect width="60" height="30" fill="#fff" />
      <rect width="60" height="9" y="0" fill="#0099B5" />
      <rect width="60" height="1" y="9" fill="#CE1126" />
      <rect width="60" height="9" y="20" fill="#1EB53A" />
      <rect width="60" height="1" y="19" fill="#CE1126" />
      <circle cx="10" cy="5.5" r="3" fill="#fff" />
      <circle cx="11.4" cy="5.5" r="2.5" fill="#0099B5" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={17 + col * 2.6}
            cy={2.6 + row * 2.6}
            r="0.5"
            fill="#fff"
          />
        ))
      )}
    </svg>
  );
}
