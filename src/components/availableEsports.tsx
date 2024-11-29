import backgroundImage from '@/assets/availableImage.svg'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import fifaImage from '@/assets/fifaImage.svg'
import valorantImage from '@/assets/valorant.png'
import callOfDuttyImage from '@/assets/callOfDutyImage.png'
import battleImage from '@/assets/battleImage.png'
import counterStrike from '@/assets/cauterStrikeImage.svg'

export function AvailableEsports() {
  return (
    <div className='relative'>
      <Image className='absolute top-0 z-0' alt='' src={backgroundImage} />
      <div className='relative z-10 ml-auto mr-auto p-14 flex flex-col gap-10 items-center top-20 w-[1516px] rounded-[40px] bg-gradient-to-b from-primary-50 to-primary-14'>
        <h1 className='uppercase text-white font-semibold text-5xl'>available esports</h1>
        <div className='w-[1170px]'>
          <Carousel 
            opts={{
              align: "center",
              loop: true,
              dragFree: true
            }} 
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1 basis-60 mt-auto mb-auto -mr-20">
                <Image alt='' src={counterStrike} height={240} width={240} />
              </CarouselItem>
              <CarouselItem className="pl-1 basis-80 mt-auto mb-auto -mr-20">
                <Image alt='' src={battleImage} height={320} width={320} />
              </CarouselItem>
              <CarouselItem className="pl-1 basis-96">
                <Image alt='' src={valorantImage} height={400} width={400} />
              </CarouselItem>
              <CarouselItem className="pl-1 basis-80 mt-auto mb-auto -ml-20 -z-10">
                <Image alt='' src={callOfDuttyImage} height={320} width={320} />
              </CarouselItem>
              <CarouselItem className="pl-1 basis-60 mt-auto mb-auto -ml-20 -z-20">
                <Image alt='' src={fifaImage} height={240} width={240} />
              </CarouselItem>
              
            </CarouselContent>
            <CarouselPrevious className='bg-transparent text-white h-16 w-16 border-4'/>
            <CarouselNext className='bg-transparent text-white h-16 w-16 border-4'/>
          </Carousel>
          </div>
      </div>
      
    </div>
  )
}