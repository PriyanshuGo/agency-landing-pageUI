"use client"
import { useState } from "react"
import Image from "next/image";

function Projects() {
    const projects = [{ id: "1", name: "", image: "/one.jpeg" }, { id: "2", name: "", image: "/two.jpeg" }, { id: "3", name: "", image: "/three.jpeg" }, { id: "4", name: "", image: "/four.jpeg" }, { id: "5", name: "", image: "/five.jpeg" }, { id: "6", name: "", image: "/branding.jpg" }];

    return (
        <div>

            {/* Header Section */}
            <div className="lg:flex justify-between mx-5 items-center space-y-2">
                <h1 className="font-semibold text-3xl sm:text-4xl lg:text-6xl">
                    SHOWCASE OUR <span className="font-serif font-normal"> INNOVATIVE </span>PROJECT <span className="font-serif font-normal">PORTFOLIO</span>
                </h1>
                <p className="text-xs lg:text-base">
                    Next Zone is a full service Digital agency working at <br /> the
                    intersection of design, technology and human interaction.
                </p>
            </div>

            {/* Projects */}
            <div className="flex flex-wrap gap-4 justify-center my-4 py-10">
                {projects.map(({ id, name, image }) => (
                    <div
                        key={id}
                        className="relative overflow-hidden rounded-lg shadow-lg"
                    >
                        <Image
                            src={image}
                            alt={name}
                            width={400}
                            height={250}
                            className="rounded-lg max-h-64"
                        />
                    </div>
                ))}

            </div>

            {/* Action buttons */}
            <div className="flex justify-center my-4">
            <button className="rounded-full bg-orange-600 font-bold p-2 px-4  text-black lg:p-3 lg:px-5 ">↗</button>
            <button className="rounded-full bg-orange-600 font-bold p-2 px-10 text-black lg:p-4 lg:px-8 lg:text-sm">SEE ALL</button>
            </div>

        </div>
    )
}

export default Projects
