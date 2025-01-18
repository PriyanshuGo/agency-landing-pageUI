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
    <div className="p-5 text-white bg-black space-y-7">
      <div className="flex flex-col items-center text-2xl">
        <span>CREATIVE</span>
        <span> TEAM MEMBERS</span>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {members.map((el) => (
          <div key={el.name} className="px-10 space-x-2 sm:w-9/12 sm:space-x-4 sm:flex sm:items-center ">
            <div className="">
            <Image src={el.image}
              alt={el.name}
              width={500}
              height={300}
              priority
              className="rounded-2xl justify-center" />
            </div>

            <div className="flex flex-col">
              <div>
                <h1 className="text-2xl">{el.name}</h1>
                <p>{el.description}</p>
              </div>
              <div className="space-y-2">
                <button className="flex justify-center border border-white p-2 rounded-md w-full"><Facebook />Facebook</button>
                <button className="flex justify-center border border-white p-2 rounded-md w-full"><Linkedin />Linkedin</button>
                <button className="flex justify-center border border-white p-2 rounded-md w-full"><Instagram />Instagram</button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="space-x-5 mx-5">
        <ActionBtn className="rounded-full bg-orange-600 font-bold p-2 px-4  text-black lg:p-3 lg:px-5" label="↗" />
        <ActionBtn className="rounded-full bg-orange-600 font-bold p-2 px-8 text-black lg:p-4 lg:px-8 lg:text-sm" label="SEE ALL MEMBERS" />
      </div>
    </div>
  )
}

export default TeamMembers
