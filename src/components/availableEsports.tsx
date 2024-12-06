"use client"

import backgroundImage from '@/assets/availableImage.svg'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import fifaImage from '@/assets/fifaImage.svg'
import valorantImage from '@/assets/valorant.png'
import callOfDuttyImage from '@/assets/callOfDutyImage.png'
import battleImage from '@/assets/battleImage.png'
import counterStrike from '@/assets/cauterStrikeImage.svg'
import tournamentFormatImage from '@/assets/tournamentFormatImage.svg'
import { type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from 'react'
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from '../../sanity.types'
import { urlFor } from '@/sanity/lib/image'

type availableEsportsType = {
  items: [
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
  ]
}

export function AvailableEsports( { items }: availableEsportsType) {

  console.log(items[0].asset._ref)

  const styleItems = [
    "h-[240px] w-[240px]",
    "h-[320px] w-[320px]",
    "h-[400px] w-[400px]",
    "hidden"
    ]
 
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
    
  }, [api])

  useEffect(() => {
    


  }, [current])


  return (
    <div className='relative'>
      <Image className='absolute top-0 z-0' alt='' src={backgroundImage} />
      <div className='relative z-10 ml-auto mr-auto p-14 flex flex-col gap-10 items-center top-20 w-[1516px] rounded-[40px] bg-gradient-to-b from-primary-50 to-primary-14'>
        <h1 className='uppercase text-white font-semibold text-5xl'>available esports</h1>
        <div className='w-[1170px]'>
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              dragFree: false,

            }} 
            className="w-full select-none cursor-default"
          >
            <CarouselContent className="-ml-1 h-[400px]">
              <CarouselItem key={1} className={`relative flex justify-center basis-1/5 items-center ${
                  current === 6 ? '-z-20':
                  ''
                  }`}
                >
                {/* <Image alt='' src={counterStrike} /> */}
                <div className={`absolute transition-all duration-200 rounded-3xl overflow-hidden ${
                  current === 1 ? styleItems[2]:
                  current === 2 ? styleItems[1]:
                  current === 3 ? styleItems[0]:
                  current === 7 ? styleItems[1]:
                  current === 6 ? styleItems[0]:
                  current === 4 ? styleItems[3]:
                  current === 5 ? styleItems[3]:
                  ''}`}>
                  <Image alt='' src={urlFor(items[0].asset._ref).url()} fill={true}/>
                </div>
              </CarouselItem>
              <CarouselItem key={2} className={`relative flex justify-center basis-1/5 items-center ${
                  current === 1 ? '-z-10':
                  current === 7 ? '-z-20':
                  ''
                  }`}>
                {/* <Image alt='' src={battleImage} /> */}
                <div className={`absolute transition-all duration-200 rounded-3xl overflow-hidden ${
                  current === 2 ? styleItems[2]:
                  current === 3 ? styleItems[1]:
                  current === 4 ? styleItems[0]:
                  current === 1 ? styleItems[1]:
                  current === 7 ? styleItems[0]:
                  current === 5 ? styleItems[3]:
                  current === 6 ? styleItems[3]:
                  ''}`}>
                  <Image alt='' src={urlFor(items[1].asset._ref).url()} fill={true}/>
                </div>
              </CarouselItem>
              <CarouselItem key={3} className={`relative flex justify-center basis-1/5 items-center ${
                  current === 1 ? '-z-20':
                  current === 2 ? '-z-10':                  
                  ''
                  }`}>
                <div className={`absolute transition-all duration-200 rounded-3xl overflow-hidden ${
                  current === 3 ? styleItems[2]:
                  current === 4 ? styleItems[1]:
                  current === 5 ? styleItems[0]:
                  current === 2 ? styleItems[1]:
                  current === 1 ? styleItems[0]:
                  current === 6 ? styleItems[3]:
                  current === 7 ? styleItems[3]:
                  ''}`}>
                  <Image alt='' src={urlFor(items[2].asset._ref).url()} fill={true}/>
                </div>
              </CarouselItem>
              <CarouselItem key={4} className={`relative flex justify-center basis-1/5 items-center ${
                current === 3 ? '-z-10':
                current === 2 ? '-z-20':
                ''
              }`}>
                {/* <Image alt='' src={fifaImage} /> */}
                <div className={`absolute transition-all duration-200 rounded-3xl overflow-hidden ${
                  current === 4 ? styleItems[2]:
                  current === 5 ? styleItems[1]:
                  current === 6 ? styleItems[0]:
                  current === 3 ? styleItems[1]:
                  current === 2 ? styleItems[0]:
                  current === 7 ? styleItems[3]:
                  current === 1 ? styleItems[3]:
                  ''}`}>
                  <Image alt='' src={urlFor(items[3].asset._ref).url()} fill={true}/>
                </div>
              </CarouselItem>
              <CarouselItem key={5} className={`relative flex justify-center basis-1/5 items-center ${
                current === 3 ? '-z-20':
                current === 4 ? '-z-10':
                ''
              }`}>
                {/* <Image alt='' src={callOfDuttyImage} /> */}
                <div className={`absolute transition-all duration-200 rounded-3xl overflow-hidden ${
                  current === 5 ? styleItems[2]:
                  current === 6 ? styleItems[1]:
                  current === 7 ? styleItems[0]:
                  current === 4 ? styleItems[1]:
                  current === 3 ? styleItems[0]:
                  current === 1 ? styleItems[3]:
                  current === 2 ? styleItems[3]:
                  ''}`}>
                  <Image alt='' src={urlFor(items[4].asset._ref).url()} fill={true}/>
                </div>
              </CarouselItem>
              <CarouselItem key={6} className={`relative flex justify-center basis-1/5 items-center ${
                  current === 1 ? '-z-10':
                  current === 4 ? '-z-20':
                  current === 5 ? '-z-10':
                  ''
                  }`}>
                {/* <Image alt='' src={counterStrike} /> */}
                <div className={`absolute transition-all duration-200 rounded-3xl overflow-hidden ${
                  current === 6 ? styleItems[2]:
                  current === 7 ? styleItems[1]:
                  current === 1 ? styleItems[0]:
                  current === 5 ? styleItems[1]:
                  current === 4 ? styleItems[0]:
                  current === 2 ? styleItems[3]:
                  current === 3 ? styleItems[3]:
                  ''}`}>
                  <Image alt='' src={urlFor(items[0].asset._ref).url()} fill={true}/>
                </div>
              </CarouselItem>
              <CarouselItem key={7} className={`relative flex justify-center basis-1/5 items-center ${
                  current === 1 ? '-z-10':
                  current === 2 ? '-z-10':
                  current === 5 ? '-z-20':
                  current === 6 ? '-z-10':
                  ''
                  }`}>
                {/* <Image alt='' src={battleImage} /> */}
                <div className={`absolute transition-all duration-200 rounded-3xl overflow-hidden ${
                  current === 7 ? styleItems[2]:
                  current === 1 ? styleItems[1]:
                  current === 2 ? styleItems[0]:
                  current === 6 ? styleItems[1]:
                  current === 5 ? styleItems[0]:
                  current === 3 ? styleItems[3]:
                  current === 4 ? styleItems[3]:
                  ''}`}>
                  <Image alt='' src={urlFor(items[1].asset._ref).url()} fill={true}/>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='bg-transparent text-white h-16 w-16 border-4 [_svg]:h-16 [_svg]:w-16 ' />
            <CarouselNext className='bg-transparent text-white h-16 w-16 border-4'/>
          </Carousel>
        </div>
      </div>
      <div className='relative flex flex-col items-center z-10 mt-[164px] gap-20'>
        <h1 className='uppercase font-semibold text-5xl text-white'>tournament format</h1>
        <Image alt='' src={tournamentFormatImage} />
      </div>
    </div>
  )
}