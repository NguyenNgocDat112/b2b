"use client";

import Image from "next/image";

interface Props {
  images: string[];
}

export default function SupplierGallery({ images }: Props) {
  return (
    <div className="mt-3 flex flex-wrap gap-3">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-[60px] w-[60px] transition hover:scale-150 overflow-hidden rounded-xl border border-neutral-200 bg-white"
        >
          <Image
            src={image}
            alt="gallery"
            fill
            className="object-cover "
          />
        </div>
      ))}

      <button className="rounded-md border border-neutral-300 px-4 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100">
        + Chi tiết...
      </button>
    </div>
  );
}