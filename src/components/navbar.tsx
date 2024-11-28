import Link from "next/link";

export function NavBar() {
  return (
    <nav className="bg-primary-90 h-[116px] flex justify-between items-center pl-24 pr-24">
      <div>
        <h1 className="text-white text-5xl font-semibold">
          LOGO
        </h1>
      </div>
      <div className="flex gap-10 text-white text-2xl font-medium">
        <Link href="">TOURNAMENT</Link>
        <Link href="">GALLERY</Link>
        <Link href="">ABOUT US</Link>
        <Link href="">CONTACT US</Link>
      </div>
      <button className="text-2xl font-medium text-white border rounded-3xl border-primary-50 w-[189px] h-[64px]">
        Join Now
      </button>
    </nav>
  )
}