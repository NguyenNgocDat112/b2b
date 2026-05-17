import Link from "next/link";

import SupplierCard from "./_components/SupplierCard";
import SupplierSidebar from "./_components/SupplierSidebar";
import AdsSidebar from "./_components/AdsSidebar";
import IndustryCharts from "./_components/IndustryCharts";
import {
  industryTags,
  relatedIndustries,
  supplierCategories,
  supplierCities,
  suppliers,
} from "./_data/suppliers";

const ITEMS_PER_PAGE = 8;

interface Props {
  searchParams: {
    page?: string;
  };
}

export default function SuppliersPage({
  searchParams,
}: Props) {
  const currentPage = Number(
    searchParams.page || 1
  );

  const totalPages = Math.ceil(
    suppliers.length / ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedSuppliers = suppliers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-neutral-100 py-6">
      <div className="mx-auto max-w-[1800px] px-4">
        <div className="grid grid-cols-1 gap-4 2xl:grid-cols-[280px_minmax(0,1fr)_400px]">
          {/* LEFT SIDEBAR */}
          <div className=" self-start">
            <div className="sticky top-5">
              <SupplierSidebar
                categories={supplierCategories}
                cities={supplierCities}
                relatedIndustries={
                  relatedIndustries
                }
                tags={industryTags}
              />
            </div>
          </div>

          {/* MAIN CONTENT */}
          <section className="min-w-0 space-y-3">
            {paginatedSuppliers.map(
              (supplier) => (
                <SupplierCard
                  key={supplier.id}
                  supplier={supplier}
                />
              )
            )}

            {/* PAGINATION */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {/* PREV */}
              <Link
                href={`?page=${Math.max(
                  currentPage - 1,
                  1
                )}`}
                className={`
                  flex h-11 min-w-[44px] items-center justify-center rounded-xl border px-4 text-sm font-medium transition
                  ${
                    currentPage === 1
                      ? "pointer-events-none border-neutral-200 bg-neutral-100 text-neutral-400"
                      : "border-neutral-300 bg-white hover:border-sky-500 hover:text-sky-600"
                  }
                `}
              >
                ←
              </Link>

              {/* PAGE NUMBERS */}
              {Array.from(
                { length: totalPages },
                (_, index) => {
                  const page = index + 1;

                  const isActive =
                    currentPage === page;

                  return (
                    <Link
                      key={page}
                      href={`?page=${page}`}
                      className={`
                        flex h-11 min-w-[44px] items-center justify-center rounded-xl border px-4 text-sm font-semibold transition
                        ${
                          isActive
                            ? "border-sky-600 bg-sky-600 text-white"
                            : "border-neutral-300 bg-white text-neutral-700 hover:border-sky-500 hover:text-sky-600"
                        }
                      `}
                    >
                      {page}
                    </Link>
                  );
                }
              )}

              {/* NEXT */}
              <Link
                href={`?page=${Math.min(
                  currentPage + 1,
                  totalPages
                )}`}
                className={`
                  flex h-11 min-w-[44px] items-center justify-center rounded-xl border px-4 text-sm font-medium transition
                  ${
                    currentPage === totalPages
                      ? "pointer-events-none border-neutral-200 bg-neutral-100 text-neutral-400"
                      : "border-neutral-300 bg-white hover:border-sky-500 hover:text-sky-600"
                  }
                `}
              >
                →
              </Link>
            </div>
          </section>

          {/* ADS RIGHT */}
      <div className="hidden xl:block">
        <div className="space-y-5">
          <IndustryCharts />
        </div>
      </div>
        </div>
      </div>
    </main>
  );
}