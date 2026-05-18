export default function Tag({ children }: { children: React.ReactNode }) {
    return (
      <span className="bg-[linear-gradient(-45deg,rgba(217,45,119,0.95)_0%,rgba(217,57,45,0.95)_100%)] px-3 py-1 text-[10px] sm:text-[11px] rounded-[2px] font-bold tracking-wide text-white transition-all duration-300 hover:scale-105">
        {children}
      </span>
    );
  }