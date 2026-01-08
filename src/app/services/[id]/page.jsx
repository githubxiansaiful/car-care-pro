import DBConnect, { collectionNameObj } from "@/lib/DBConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function ServiceDetails({ params }) {
    const p = await params;
    const serviceCollection = DBConnect(collectionNameObj.servicesCollection);
    const serviceData = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
    console.log(serviceData);
    return (
        <>
            <div className="single-service-banner">
                <div className="single-service-bg w-full h-full relative">
                    <Image src={serviceData.img} width={600} height={400} alt={serviceData.title} />
                </div>
                <div className="absolute z-10 p-5">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">{serviceData.title}</h1>
                </div>
            </div>
            <h1>Service Details for ID: {p.id}</h1>
        </>
    );
}