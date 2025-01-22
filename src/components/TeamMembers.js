"use client"
import { Facebook, Linkedin, Instagram } from "lucide-react"


import ActionBtn from "./ActionBtn"
import Image from "next/image"


function TeamMembers() {
  const members = [
    { image: "/branding.jpg", name: "Priyanshu", description: "Head of Content", facebook: "#", linkdedin: "#", instagram: "#" },
    { image: "/one.jpeg", name: "Nain", description: "Head of Content", facebook: "#", linkdedin: "#", instagram: "#" },
    { image: "/development.jpg", name: "Praveen", description: "Head of Content", facebook: "#", linkdedin: "#", instagram: "#" },
    { image: "/uiux.jpg", name: "Surya", description: "Head of Content", facebook: "#", linkdedin: "#", instagram: "#" },
  ]
  return (
    <div className="p-5 text-white bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-950 space-y-7">

      <div className="flex flex-col items-center text-2xl">
        <div className="flex items-center">

          <div className="flex items-center -space-x-2 ">
            {members.slice(0, 3).map((el, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full border-2 border-black overflow-hidden"
              >
                <Image
                  src={el.image}
                  alt={el.name}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold flex items-center">
            CREATIVE
          </span>
        </div>
        <p className="text-3xl md:text-4xl lg:text-5xl font-serif ">
          TEAM MEMBERS
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 xl:gap-20">
        {members.map((el) => (
          <div key={el.name} className="space-x-2 p-5 sm:space-x-4 md:flex md:items-center rounded-2xl border border-white">
            <div className="">
              <Image src={el.image}
                alt={el.name}
                width={250}
                height={180}
                priority
                className="rounded-2xl justify-center" />
            </div>

            <div className="flex flex-col items-center">
              <div>
                <h1 className="text-2xl">{el.name}</h1>
                <p>{el.description}</p>
              </div>
              <div className="space-y-1">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full w-full border border-white "><Facebook />Facebook</button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full w-full border border-white "><Linkedin />Linkedin</button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full w-full border border-white "><Instagram />Instagram</button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="space-x-5 mx-5 md:mx-16 lg:mx-20">
        <ActionBtn className="rounded-full bg-orange-600 font-bold p-2 px-4  text-black lg:p-3 lg:px-5" label="↗" />
        <ActionBtn className="rounded-full bg-orange-600 font-bold p-2 px-8 text-black lg:p-4 lg:px-8 lg:text-sm" label="SEE ALL MEMBERS" />
      </div>
    </div>
  )
}

export default TeamMembers
