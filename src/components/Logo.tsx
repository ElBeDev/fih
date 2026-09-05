export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`flex h-8 w-8 items-center justify-center rounded-lg bg-yellow ${className ?? ""}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="14" width="5" height="7" rx="1" fill="#12151A" />
        <rect x="9.5" y="9" width="5" height="12" rx="1" fill="#12151A" />
        <rect x="16" y="3" width="5" height="18" rx="1" fill="#12151A" />
      </svg>
    </span>
  );
}
