import Image from 'next/image'
// import  SponsorsImage  from '@/assets/sponsorsImage.svg'
import disneyLogo from '@/assets/disneyLogo.svg.svg'
import flipKartLogo from '@/assets/flipKartLogo.svg'
import hyperLogo from '@/assets/hyperLogo.svg'
import locoLogo from '@/assets/locoLogo.svg'
import { sanityFetch } from '@/sanity/lib/live'
import { HOME_PAGE_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'



export async function Sponsors() {
  const { data } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  });

  console.log(data.heroSection.backgroundImage.asset._ref)

  return (
    <div className='relative bg-primary-80 h-[776px]'>
      <div className='absolute z-20 bg-gradient-to-r from-primary-80 to-primary-11 w-full h-[776px]'></div>
      <div className='absolute z-10 bg-primary-12 w-full h-[776px]'></div>
      <Image alt='' src={urlFor(data.heroSection.backgroundImage.asset._ref).url()} fill={true} className='absolute z-0 -mt-28 grayscale' />
      <div className='flex flex-col gap-12 absolute z-30 top-[106px] left-[168px] w-[554px]'>
        <h2 className='font-medium text-4xl text-white uppercase'>{data.heroSection.title}</h2>
        <h1 className='font-semibold text-white text-6xl uppercase'>{data.heroSection.subTitle}</h1>
        <p className='text-2xl font-normal text-white'>{data.heroSection.paragraph}</p>
        <button className='bg-primary-50 rounded-3xl w-60 h-14 font-semibold text-2xl text-white mt-4'>{data.heroSection.buttonText}</button>
      </div>
      <div className='absolute top-[600px] w-full h-44 bg-primary-13 z-30 backdrop-blur-md flex justify-around items-center px-40'>
        <div>
          <Image alt='disney logo' src={disneyLogo} />
        </div>
        <div>
        <Image alt='flipkart logo' src={flipKartLogo} />
        </div>
        <div>
        <Image alt='hyper logo' src={hyperLogo} />
        </div>
        <div>
        <Image alt='loco logo' src={locoLogo} />
        </div>
      </div>
    </div>
  )
}