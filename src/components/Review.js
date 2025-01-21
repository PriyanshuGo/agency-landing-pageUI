import Image from "next/image";
import { ArrowRightToLine } from 'lucide-react';


function Review() {
    const reviews = [
        { id: '1', name: "priyanshu", image: "/one.jpeg", message: "om ganesha" },
        { id: '2', name: "surya", image: "/two.jpeg", message: "om ganesha" },
        { id: '3', name: "praveen", image: "/four.jpeg", message: "om ganesha" },
        { id: '4', name: "nain", image: "/six.jpeg", message: "om ganesha" },
        { id: '5', name: "nain", image: "/six.jpeg", message: "om ganesha" },
        { id: '6', name: "nain", image: "/six.jpeg", message: "om ganesha" },
        { id: '7', name: "nain", image: "/six.jpeg", message: "om ganesha" },
    ];

    return (
        <div className="relative mx-5 my-10 md:mx-16 lg:mx-20">
            {/* Scrollable area */}
            <div className="flex space-x-6 sm:space-x-20 overflow-x-auto scrollbar-hide">
                {reviews.map((el) => (
                    <div
                        key={el.id}
                        className="flex text-white bg-black rounded-2xl min-w-72 min-h-60"
                    >
                        <div className="w-1/4 flex items-center m-4">
                            <Image
                                src={el.image}
                                alt={el.name}
                                width={80}
                                height={80}
                                className="w-20 h-16 rounded-full"
                            />
                        </div>

                        <div className="w-3/4 m-6">
                            <h1>{el.message}</h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 h-16 w-16 bg-black bg-opacity-50 rounded-full pointer-events-none flex items-center justify-center transition-all duration-300 ease-in-out group">
                    <div className="group-hover:opacity-100 opacity-70 transition-all duration-300 ease-in-out relative flex items-center justify-center">
                        <ArrowRightToLine 
                            size={32} 
                            className="text-white group-hover:scale-125 transition-transform duration-300" 
                        />
                    </div>
                </div>

        </div>
    );
}

export default Review;
