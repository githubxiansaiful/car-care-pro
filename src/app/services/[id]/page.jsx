import DBConnect, { collectionNameObj } from "@/lib/DBConnect";
import { ObjectId } from "mongodb";

export default async function ServiceDetails({ params }) {
    const p = await params;
    const serviceCollection = DBConnect(collectionNameObj.servicesCollection);
    const serviceData = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
    return (
        <>
            <div className="single-service-banner">
                <h1>{serviceData.title}</h1>
            </div>
            <h1>Service Details for ID: {p.id}</h1>
        </>
    );
}