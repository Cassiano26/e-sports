import { Search } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import Image from "next/image";
import battleImage from '@/assets/battleGroundsImage.png'

export function BrowseTournament() {
  return (
    <div className="flex flex-col gap-20 items-center bg-primary-90 pb-24">
      <h1 className="font-semibold text-5xl text-white mt-52 uppercase">browse tournament</h1>
      <form action="">
        <div className="flex flex-row justify-between gap-20">
          <div className="flex flex-col justify-start gap-3">
            <label htmlFor="" className="font-medium text-2xl text-white">
              Status
            </label>
            <Select>
              <SelectTrigger className="w-[185px] h-[47px] rounded-3xl text-white font-medium text-lg bg-primary-13 border-primary-15">
                <SelectValue placeholder="Upcoming" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col justify-start gap-3">
            <label htmlFor="" className="font-medium text-2xl text-white">
              Platform
            </label>
            <Select>
              <SelectTrigger className="w-[185px] h-[47px] rounded-3xl text-white font-medium text-lg bg-primary-13 border-primary-15">
                <SelectValue placeholder="Mobile" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col justify-start gap-3">
            <label htmlFor="" className="font-medium text-2xl text-white">
              Team Size
            </label>
            <Select>
              <SelectTrigger className="w-[145px] h-[47px] rounded-3xl text-white font-medium text-lg bg-primary-13 border-primary-15">
                <SelectValue placeholder="8" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col justify-start gap-3">
            <label htmlFor="" className="font-medium text-2xl text-white">
              Prize
            </label>
            <Select>
              <SelectTrigger className="w-[185px] h-[47px] rounded-3xl text-white font-medium text-lg bg-primary-13 border-primary-15">
                <SelectValue placeholder="200.00" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col justify-start gap-3">
            <label htmlFor="" className="font-medium text-2xl text-white">
              Search
            </label>
            <div className=" relative">
              <input type="text" placeholder="Search" className="w-[362px] h-[47px] rounded-3xl text-white font-medium text-lg bg-primary-13 border-primary-15 border-2 focus:outline-none pl-4 pr-10" />
              <button className="bg-transparent">
                <Search className=" absolute right-4 top-3 h-5 w-5 text-white"/>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-10">
        <div className="relative flex flex-col gap-2 h-[399px] w-[665px]">
          <Image alt="" src={battleImage} className="absolute z-0"/>
          <div className="relative z-10 text-white h-[184px] bg-primary-80 mt-auto rounded-b-[20px]">
            <div className="flex flex-row gap-9 items-center h-full ml-8">
              <div className="flex flex-col w-[97px] h-[111px] border-2 border-primary-15 rounded-3xl items-center">
                <span className="font-medium text-lg mt-4">JUN'22</span>
                <span className="font-medium text-5xl">10</span>
              </div>
              <div className="w-[473px]">
                <p className="text-2xl font-medium mb-3">Lorem ipsum dolor sit amet consecter</p>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <span className="font-medium text-2xl text-primary-15">40/50 Teams</span>
                  <span className="font-medium text-2xl text-primary-15">Plataform - Mobile</span>
                  <span className="font-medium text-2xl text-primary-15">Prizing - 5,000</span>
                  <button className="font-medium text-lg w-[220px] h-[49px] bg-primary-60 rounded-[20px]">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 h-[399px] w-[665px]">
          <Image alt="" src={battleImage} className="absolute z-0"/>
          <div className="relative z-10 text-white h-[184px] bg-primary-80 mt-auto rounded-b-[20px]">
            <div className="flex flex-row gap-9 items-center h-full ml-8">
              <div className="flex flex-col w-[97px] h-[111px] border-2 border-primary-15 rounded-3xl items-center">
                <span className="font-medium text-lg mt-4">JUN'22</span>
                <span className="font-medium text-5xl">10</span>
              </div>
              <div className="w-[473px]">
                <p className="text-2xl font-medium mb-3">Lorem ipsum dolor sit amet consecter</p>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <span className="font-medium text-2xl text-primary-15">40/50 Teams</span>
                  <span className="font-medium text-2xl text-primary-15">Plataform - Mobile</span>
                  <span className="font-medium text-2xl text-primary-15">Prizing - 5,000</span>
                  <button className="font-medium text-lg w-[220px] h-[49px] bg-primary-60 rounded-[20px]">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 h-[399px] w-[665px]">
          <Image alt="" src={battleImage} className="absolute z-0"/>
          <div className="relative z-10 text-white h-[184px] bg-primary-80 mt-auto rounded-b-[20px]">
            <div className="flex flex-row gap-9 items-center h-full ml-8">
              <div className="flex flex-col w-[97px] h-[111px] border-2 border-primary-15 rounded-3xl items-center">
                <span className="font-medium text-lg mt-4">JUN'22</span>
                <span className="font-medium text-5xl">10</span>
              </div>
              <div className="w-[473px]">
                <p className="text-2xl font-medium mb-3">Lorem ipsum dolor sit amet consecter</p>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <span className="font-medium text-2xl text-primary-15">40/50 Teams</span>
                  <span className="font-medium text-2xl text-primary-15">Plataform - Mobile</span>
                  <span className="font-medium text-2xl text-primary-15">Prizing - 5,000</span>
                  <button className="font-medium text-lg w-[220px] h-[49px] bg-primary-60 rounded-[20px]">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 h-[399px] w-[665px]">
          <Image alt="" src={battleImage} className="absolute z-0"/>
          <div className="relative z-10 text-white h-[184px] bg-primary-80 mt-auto rounded-b-[20px]">
            <div className="flex flex-row gap-9 items-center h-full ml-8">
              <div className="flex flex-col w-[97px] h-[111px] border-2 border-primary-15 rounded-3xl items-center">
                <span className="font-medium text-lg mt-4">JUN'22</span>
                <span className="font-medium text-5xl">10</span>
              </div>
              <div className="w-[473px]">
                <p className="text-2xl font-medium mb-3">Lorem ipsum dolor sit amet consecter</p>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <span className="font-medium text-2xl text-primary-15">40/50 Teams</span>
                  <span className="font-medium text-2xl text-primary-15">Plataform - Mobile</span>
                  <span className="font-medium text-2xl text-primary-15">Prizing - 5,000</span>
                  <button className="font-medium text-lg w-[220px] h-[49px] bg-primary-60 rounded-[20px]">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 h-[399px] w-[665px]">
          <Image alt="" src={battleImage} className="absolute z-0"/>
          <div className="relative z-10 text-white h-[184px] bg-primary-80 mt-auto rounded-b-[20px]">
            <div className="flex flex-row gap-9 items-center h-full ml-8">
              <div className="flex flex-col w-[97px] h-[111px] border-2 border-primary-15 rounded-3xl items-center">
                <span className="font-medium text-lg mt-4">JUN'22</span>
                <span className="font-medium text-5xl">10</span>
              </div>
              <div className="w-[473px]">
                <p className="text-2xl font-medium mb-3">Lorem ipsum dolor sit amet consecter</p>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <span className="font-medium text-2xl text-primary-15">40/50 Teams</span>
                  <span className="font-medium text-2xl text-primary-15">Plataform - Mobile</span>
                  <span className="font-medium text-2xl text-primary-15">Prizing - 5,000</span>
                  <button className="font-medium text-lg w-[220px] h-[49px] bg-primary-60 rounded-[20px]">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 h-[399px] w-[665px]">
          <Image alt="" src={battleImage} className="absolute z-0"/>
          <div className="relative z-10 text-white h-[184px] bg-primary-80 mt-auto rounded-b-[20px]">
            <div className="flex flex-row gap-9 items-center h-full ml-8">
              <div className="flex flex-col w-[97px] h-[111px] border-2 border-primary-15 rounded-3xl items-center">
                <span className="font-medium text-lg mt-4">JUN'22</span>
                <span className="font-medium text-5xl">10</span>
              </div>
              <div className="w-[473px]">
                <p className="text-2xl font-medium mb-3">Lorem ipsum dolor sit amet consecter</p>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <span className="font-medium text-2xl text-primary-15">40/50 Teams</span>
                  <span className="font-medium text-2xl text-primary-15">Plataform - Mobile</span>
                  <span className="font-medium text-2xl text-primary-15">Prizing - 5,000</span>
                  <button className="font-medium text-lg w-[220px] h-[49px] bg-primary-60 rounded-[20px]">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}