import DBConnect, { collectionNameObj } from "@/lib/DBConnect";
import Image from "next/image";

export default async function Services() {

    // Fetch services data from MongoDB
    const serviceCollection = DBConnect(collectionNameObj.servicesCollection);
    const data = await serviceCollection.find({}).toArray();

    return (
        <div>
            <div className="container">
                <h2>Our Services</h2>
                <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.map((service) => {
                        return (
                            <div className="single-service" key={service._id}>
                                <div className="service-image">
                                    <Image src={service.img} alt={service.title} width={300} height={200} />
                                </div>
                                <div className="service-content">
                                    <h3 className="font-bold">{service.title}</h3>
                                    <p>Price: ${service.price}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
