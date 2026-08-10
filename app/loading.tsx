export default function Loading() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="glass flex flex-col items-center gap-4 rounded-[1.5rem] px-8 py-7">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-border border-t-primary" />
        <p className="text-sm font-medium text-muted">Loading...</p>
      </div>
    </div>
  );
}
