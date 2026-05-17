import {
    Globe,
    MapPin,
    Phone,
    Smartphone,
  } from "lucide-react";
  
  interface Props {
    category: string;
    address: string;
    phone: string;
    hotline: string;
  }
  
  export default function SupplierInfo({
    category,
    address,
    phone,
    hotline,
  }: Props) {
    return (
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <Globe className=" text-neutral-400" size={18} />
  
          <p className="text-[15px] text-neutral-700">
            NGÀNH:
            <span className="ml-2 font-semibold text-sky-700">
              {category}
            </span>
          </p>
        </div>
  
        <div className="flex items-start gap-3">
          <MapPin className=" text-neutral-400" size={18} />
  
          <p className="text-[15px] text-neutral-700">
            {address}
          </p>
        </div>
  
        <div className="flex items-center gap-3">
          <Phone className="text-neutral-400" size={18} />
  
          <p className="text-base font-bold text-neutral-900">
            {phone}
          </p>
        </div>
  
        <div className="flex items-center gap-3">
          <Smartphone className="text-neutral-400" size={18} />
  
          <p className="text-base text-neutral-700">
            Hotline:
            <span className="ml-2  font-semibold">
              {hotline}
            </span>
          </p>
        </div>
      </div>
    );
  }