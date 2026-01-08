import DBConnect, { collectionNameObj } from "@/lib/DBConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import ServicesSidebar from "./components/ServicesSidebar";
import ServiceBlurb from "./components/ServiceBlurb";

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
                    <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl">{serviceData.title}</h1>
                </div>
            </div>
            <div className="container">
                <div className="py-14 grid gap-5 grid-cols-12">
                    <div className="col-span-12 lg:col-span-8">
                        <Image className="rounded-2xl" src={serviceData.img} width={800} height={400} alt={serviceData.title} />
                        <h2 className="font-bold text-2xl my-4">{serviceData.title}</h2>
                        <p>{serviceData.description}</p>
                        <div className="mt-10">
                            <ServiceBlurb></ServiceBlurb>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 gap-5 flex flex-col">
                        <ServicesSidebar></ServicesSidebar>
                    </div>
                </div>
            </div>
        </>
    );
}