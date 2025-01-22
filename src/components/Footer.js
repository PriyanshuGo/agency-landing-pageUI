import Link from 'next/link';

function Footer() {
    const footLinks = [
        { lable: "About Us", href: "#" },
        { lable: "Features", href: "#" },
        { lable: "Pricing & Plans", href: "#" },
        { lable: "Contact Us", href: "#" },
    ]

    return (
        <div className='my-10 mx-5 flex flex-col text-white bg-black rounded-md lg:flex-row lg:justify-around'>
            <div className='mx-5 md:mx-16 lg:mx-20 text-center'>
                <div>NEXTZONE</div>
                <div className='text-sm'>Your One-Stop IT Partner: Branding, Web Development, and Tailored Solutions for Every Need</div>
            </div>
            <div className='mx-5 md:mx-16 lg:mx-20 text-center'>
                <div>agencyfolio@gmail.com</div>
                <ul className='flex flex-col sm:flex-row sm:justify-evenly items-center'>
                    {footLinks.map((el, index) => (
                        <li key={index}>
                            <Link href={el.href}>
                            {el.lable}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer
