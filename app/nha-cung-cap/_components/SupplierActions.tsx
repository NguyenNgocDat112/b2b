import { Globe, Mail } from "lucide-react";

interface Props {
  website: string;
}

export default function SupplierActions({
  website,
}: Props) {
  return (
    <div className=" flex flex-wrap gap-1">
      <button className="flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100">
        <Mail size={18} />
        0968779976
      </button>

      <button className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-neutral-50">
        <Globe size={18} />
        {website}
      </button>
    </div>
  );
}