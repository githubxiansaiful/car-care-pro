import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#f1f1f1] pt-[50px]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="space-y-5">
                        <Image src="/assets/logo.png" alt="Logo" width={150} height={40} />
                        <p>Car Care Pro is built to simplify car maintenance and repair. </p>
                    </div>
                    <div className="space-y-5">
                        <h3 className="font-bold uppercase">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h3 className="font-bold uppercase">Contact Us</h3>
                        <ul className="space-y-2">
                            <li><p>1234 Auto Lane</p></li>
                            <li><p>Car City, CA 90210</p></li>
                            <li><p>Phone: (123) 456-7890</p></li>
                            <li><p>Email: car-carepro@gmail.com</p></li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h3 className="font-bold uppercase">Follow Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center border-t border-[#ddd] py-7 mt-10">
                    <p>© 2025 Car Care Pro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;