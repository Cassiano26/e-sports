import Image from 'next/image'
// import  SponsorsImage  from '@/assets/sponsorsImage.svg'
import disneyLogo from '@/assets/disneyLogo.svg.svg'
import flipKartLogo from '@/assets/flipKartLogo.svg'
import hyperLogo from '@/assets/hyperLogo.svg'
import locoLogo from '@/assets/locoLogo.svg'
import { urlFor } from '@/sanity/lib/image'
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from '../../sanity.types'

type sponsorsType = {
  sponsorsItems: [
    {
      asset: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    }
  ],
  heroSection: [{
    buttonText: string
    paragraph: string
    subTitle: string
    title: string
    backgroundImage: {
      asset: {
        _ref: string
        _type: "reference"
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      alt?: string
      _type: "image"
    }
  }]
}


export async function Sponsors({sponsorsItems, heroSection} : sponsorsType) {
  console.log(sponsorsItems[0].asset?._ref)
  console.log(heroSection[0].backgroundImage)

  return (
    <div className='relative bg-primary-80 h-[776px]'>
      <div className='absolute z-20 bg-gradient-to-r from-primary-80 to-primary-11 w-full h-[776px]'></div>
      <div className='absolute z-10 bg-primary-12 w-full h-[776px]'></div>
      <Image alt='' src={urlFor(heroSection[0].backgroundImage.asset._ref).url()} fill={true} className='absolute z-0 -mt-28 grayscale' />
      <div className='flex flex-col gap-12 absolute z-30 top-[106px] left-[168px] w-[554px]'>
        <h2 className='font-medium text-4xl text-white uppercase'>{heroSection[0].title}</h2>
        <h1 className='font-semibold text-white text-6xl uppercase'>{heroSection[0].subTitle}</h1>
        <p className='text-2xl font-normal text-white'>{heroSection[0].paragraph}</p>
        <button className='bg-primary-50 rounded-3xl w-60 h-14 font-semibold text-2xl text-white mt-4'>{heroSection[0].buttonText}</button>
      </div>
      <div className='absolute top-[600px] w-full h-44 bg-primary-13 z-30 backdrop-blur-md flex justify-around items-center px-40'>
        <div className='relative w-[250px] h-44'>
          <Image alt='disney logo' src={urlFor(sponsorsItems[0].asset._ref).url()} fill={true}/>
        </div>
        <div className='relative  w-[250px] h-44'>
        <Image alt='flipkart logo' src={urlFor(sponsorsItems[1].asset._ref).url()} fill={true}/>
        </div>
        <div className='relative w-[250px] h-44'>
        <Image alt='hyper logo' src={urlFor(sponsorsItems[2].asset._ref).url()} fill={true}/>
        </div>
        <div className='relative w-[250px] h-44'>
        <Image alt='loco logo' src={urlFor(sponsorsItems[3].asset._ref).url()} fill={true}/>
        </div>
      </div>
    </div>
  )
}