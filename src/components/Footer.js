import Link from 'next/link';

function Footer() {
    const footLinks = [
        { lable: "About Us", href: "#" },
        { lable: "Features", href: "#" },
        { lable: "Pricing & Plans", href: "#" },
        { lable: "Contact Us", href: "#" },
    ]

    return (
        <div>
            <div>
                <div>NEXTZONE</div>
                <div>Your One-Stop IT Partner: Branding, Web Development, and Tailored Solutions for Every Need</div>
            </div>
            <div>
                <div>agencyfolio@gmail.com</div>
                <ul>
                    {footLinks.map((el, index) => (
                        <li key={indx}>
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
