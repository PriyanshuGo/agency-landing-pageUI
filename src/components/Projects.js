import ActionBtn from './ActionBtn';
import Image from "next/image";

function Projects() {
    const projects = [
        { id: "1", name: "", image: "/one.jpeg", description: "This is project 1 description" },
        { id: "2", name: "", image: "/two.jpeg", description: "This is project 2 description" },
        { id: "3", name: "", image: "/three.jpeg", description: "This is project 3 description" },
        { id: "4", name: "", image: "/four.jpeg", description: "This is project 4 description" },
        { id: "5", name: "", image: "/five.jpeg", description: "This is project 5 description" },
        { id: "6", name: "", image: "/branding.jpg", description: "This is project 6 description" }
    ];

    return (
        <div className="py-5 md:py-16  mx-5 ">

            {/* Header Section */}
            <div className="lg:flex justify-between items-center space-y-2 mx-5 md:mx-16 lg:mx-20">
                <h1 className="font-semibold text-3xl sm:text-4xl lg:text-6xl">
                    SHOWCASE OUR <span className="font-serif font-extralight"> INNOVATIVE </span>PROJECT <span className="font-serif font-extralight">PORTFOLIO</span>
                </h1>
                <p className="text-xs lg:text-base">
                    Next Zone is a full service Digital agency working at the
                    intersection of design, technology and human interaction.
                </p>
            </div>

            {/* Projects */}
            <div className="flex flex-wrap gap-4 justify-center mx-5 my-4 md:mx-16 lg:mx-20 lg:py-10">
                {projects.map(({ id, name, image, description }) => (
                    <div
                        key={id}
                        className="group relative overflow-hidden rounded-lg shadow-lg"
                    >
                        <Image
                            src={image}
                            alt={name}
                            width={400}
                            height={250}
                            className="rounded-lg max-h-64"
                        />
                    
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <p className="text-white text-2xl">{description}</p>
                        </div>

                    </div>
                ))}

            </div>

            {/* Action buttons */}
            <div className="flex justify-center my-4 space-x-2 ">
                <ActionBtn className="rounded-full bg-orange-600 font-bold p-2 px-4  text-black lg:p-3 lg:px-5" label="↗" />
                <ActionBtn className="rounded-full bg-orange-600 font-bold p-2 px-10 text-black lg:p-4 lg:px-8 lg:text-sm" label="SEE ALL" />
            </div>

        </div>
    )
}

export default Projects
