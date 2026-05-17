export default function Loading() {
    return (
      <div className="space-y-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-[320px] animate-pulse rounded-3xl bg-neutral-200"
          />
        ))}
      </div>
    );
  }