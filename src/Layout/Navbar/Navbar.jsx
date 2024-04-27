import { FaBarsStaggered } from "react-icons/fa6";


export default function Navbar() {
  return (
    <nav className="container flex justify-between items-center h-20">
        <a href="#" className="text-2xl font-bold leading-[48px] font-dm-sans text-Text_White">LOGO</a>

        <div className="flex gap-2">
          <button className="font-dm-sans font-bold text-base text-Text_White py-3 px-6 border border-solid border-white rounded-3xl">Sign up</button>
          <FaBarsStaggered className="h-12 w-12 py-3 border border-solid border-white rounded-2xl text-white" />
        </div>
    </nav>
  )
}
