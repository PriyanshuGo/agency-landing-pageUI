import Image from "next/image";
import { ArrowRightToLine } from 'lucide-react';


function Review() {
    const reviews = [
        { id: '1', name: "Priyanshu", image: "/one.jpeg", message: "Absolutely amazing experience! The service was top-notch, and I couldn’t have asked for a better outcome. Highly recommended!" },
        { id: '2', name: "Surya", image: "/two.jpeg", message: "The quality exceeded my expectations! The team was professional, responsive, and ensured everything was perfect from start to finish." },
        { id: '3', name: "Praveen", image: "/four.jpeg", message: "A wonderful experience! The attention to detail was impressive, and I truly appreciate the dedication and effort put into the work." },
        { id: '4', name: "Nain", image: "/six.jpeg", message: "Customer service was outstanding! They answered all my queries patiently and delivered exactly what I was looking for. Will definitely return!" },
        { id: '5', name: "Rahul", image: "/six.jpeg", message: "I was pleasantly surprised by the speed and efficiency. The process was smooth, and the end result was even better than I had imagined!" },
        { id: '6', name: "Ananya", image: "/six.jpeg", message: "A truly seamless and enjoyable experience. The quality of work was fantastic, and I felt valued as a customer throughout the process." },
        { id: '7', name: "Vikas", image: "/six.jpeg", message: "Exceptional service and attention to detail! Everything was handled professionally, and I’m beyond satisfied with the final result." },
    ];
    

    return (
        <div className="relative mx-5 my-10">
            {/* Scrollable area */}
            <div className="mx-5 md:mx-16 lg:mx-20 flex space-x-6 sm:space-x-20 overflow-x-auto scrollbar-hide">
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

            {/* Scroll Indicator
            <div className="mx-5 md:mx-16 lg:mx-20 absolute top-1/2 right-4 transform -translate-y-1/2 h-16 w-16 bg-black bg-opacity-50 rounded-full pointer-events-none flex items-center justify-center transition-all duration-300 ease-in-out group">
                    <div className="group-hover:opacity-100 opacity-70 transition-all duration-300 ease-in-out relative flex items-center justify-center">
                        <ArrowRightToLine 
                            size={32} 
                            className="text-white group-hover:scale-125 transition-transform duration-300" 
                        />
                    </div>
                </div> */}

        </div>
    );
}

export default Review;
