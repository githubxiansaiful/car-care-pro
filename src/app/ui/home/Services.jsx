import DBConnect, { collectionNameObj } from "@/lib/DBConnect";
import Image from "next/image";
import Link from "next/link";

export default async function Services() {

    // Fetch services data from MongoDB
    const serviceCollection = DBConnect(collectionNameObj.servicesCollection);
    const data = await serviceCollection.find({}).toArray();

    return (
        <div className="py-16">
            <div className="container">
                <div className="section-title text-center mb-12 max-w-[650px] space-y-3 mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold">Our Services</h2>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.map((service) => {
                        return (
                            <div className="single-service" key={service._id}>
                                <div className="service-image">
                                    <Image src={service.img} alt={service.title} width={300} height={200} />
                                </div>
                                <div className="service-content">
                                    <h3 className="font-bold">{service.title}</h3>
                                    <p className="flex justify-between"><span>Price: ${service.price}</span> <span><Link href={`/services/${service._id}`}>Learn More</Link></span></p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
