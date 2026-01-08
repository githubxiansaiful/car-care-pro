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
                    <Image className="w-full h-full object-cover" src={serviceData.img} width={600} height={400} alt={serviceData.title} />
                </div>
                <div className="absolute z-10 p-5">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">{serviceData.title}</h1>
                </div>
            </div>
            <div className="container">
                <div className="py-14 grid gap-5 grid-cols-12">
                    <div className="col-span-8">
                        <Image className="rounded-2xl" src={serviceData.img} width={800} height={400} alt={serviceData.title} />
                        <h2 className="font-bold text-2xl my-4">{serviceData.title}</h2>
                        <p>{serviceData.description}</p>
                    </div>
                    <div className="col-span-4 gap-5 flex flex-col">
                        <div className="service-sidebar p-5 bg-gray-100 rounded-2xl">
                            <div>
                                <h3 className="font-bold text-xl mb-3">Service</h3>
                            </div>
                        </div>
                        <div className="service-sidebar p-5 bg-black rounded-2xl">
                            <div>
                                <h3 className="text-white font-bold text-xl mb-3">Download</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}