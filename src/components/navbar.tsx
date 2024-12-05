import Link from "next/link";
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from "../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type navBarProps = {
    items: {
      logoImage: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
      },
      menuItems: Array<string>,
      buttonText: string
    }



}

export function NavBar({items}: NonNullable<navBarProps>) {
  
  if (items.buttonText) {
    console.log(items.buttonText)
  }

  
  return (
    <nav className="bg-primary-90 h-[116px] flex justify-between items-center pl-24 pr-24">
      <div>
        
          {items.logoImage.asset?._ref ? (
            <Image alt="" src={urlFor(items.logoImage.asset?._ref).url()} width={189} height={82}/>
          ) : (<h1 className="text-white text-5xl font-semibold">LOGO</h1>) }
        
      </div>
      <div className="flex gap-10 text-white text-2xl font-medium">
        <Link href="" className="uppercase">{items.menuItems[0]}</Link>
        <Link href="" className="uppercase">{items.menuItems[1]}</Link>
        <Link href="" className="uppercase">{items.menuItems[2]}</Link>
        <Link href="" className="uppercase">{items.menuItems[3]}</Link>
      </div>
      <button className="text-2xl font-medium text-white border rounded-3xl border-primary-50 w-[189px] h-[64px] capitalize">
        {items.buttonText}
      </button>
    </nav>
  )
}