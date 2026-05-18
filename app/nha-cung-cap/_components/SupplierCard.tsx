"use client";
import Image from "next/image";
import SupplierInfo from "./SupplierInfo";
import SupplierGallery from "./SupplierGallery";
import SupplierActions from "./SupplierActions";
import { BadgeCheck,  } from "lucide-react";
import Link from "next/link";
import { Supplier } from "../_type/supplier";
import { memo } from "react";
interface Props {
  supplier: Supplier;
}

 function SupplierCard({
  supplier,
}: Props) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5">
      <div className="flex flex-col gap-6 xl:flex-row">
        {/* LEFT */}
        <div className="flex flex-1 gap-5">
          <div className="flex-1">
            {/* HEADER */}
            <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 text-white items-center justify-center rounded-lg bg-red-500">
                   {supplier.id}
                </div>
              <Link href={`/nha-cung-cap/${supplier.id}`} className="text-2xl font-medium leading-tight text-neutral-900">
                {supplier.name}
              </Link>

            </div>
             {/* ACTIONS */}
            <SupplierActions
              website={supplier.website}
              />
            </div>


            {/* INFO */}
            <div className="mt-2 flex flex-col gap-5 lg:flex-row">
              <div className="relative h-[120px] w-[140px] overflow-hidden rounded-2xl border border-neutral-200">
                <Image
                  src={supplier.logo}
                  alt={supplier.name}
                  fill
                  className="object-contain p-3"
                />
              </div>

              <div className="flex-1">
                <SupplierInfo
                  category={supplier.category}
                  address={supplier.address}
                  phone={supplier.phone}
                  hotline={supplier.hotline}
                />
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="my-3 flex gap-4">
              <div>
                <h3 className="mb-1 text-lg font-bold text-red-600">
                  BULONG QUANG THÁI
                </h3>

                <ul className="text-[15px] leading-6 text-neutral-700">
                  {supplier.description.map((item :any, index:any) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-1 font-bold text-red-600">
                  Tiêu chuẩn quốc tế:
                </h3>

                <ul className="text-[15px] leading-6 text-neutral-700">
                  {supplier.standards.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

            </div>
          

            {/* GALLERY */}
            <SupplierGallery images={supplier.gallery} />
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default memo(SupplierCard); 