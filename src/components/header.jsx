import MediumSvg from "./icons/medium";

export default function Header() { 
  return ( 
    <div className="bg-white border-b border-b-black/20 shadow-sm px-8 flex justify-between py-2 items-center">
      <div className="flex gap-4">
        <div className="h-8">
          <MediumSvg />
        </div>
        <input className="border rounded-full py-1.5 px-4" type="text" placeholder="Search" />
      </div>

      <div className="flex gap-4 items-center">
        <button className="bg-black text-white rounded-full px-4 py-1.5">Get app</button>
        <div>Write</div>
        <div className="bg-green-700 text-white rounded-full px-4 py-1">Sign up</div>
        <div>Sign up</div>
        <div className="rounded-full bg-green-100 w-8 h-8"></div>
      </div>
    </div>
  )
}