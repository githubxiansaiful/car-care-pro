import { File, FolderDown } from "lucide-react";

const ServicesSidebar = () => {
    return (
        <>
            <div className="p-5 bg-gray-100 rounded-2xl">
                <div>
                    <h3 className="font-bold text-xl mb-3">Service</h3>
                </div>
            </div>
            <div className="p-5 bg-black rounded-2xl">
                <div>
                    <h3 className="text-white font-bold text-xl mb-3">Download</h3>
                    <ul className="list gap-5">
                        <li className="list-row items-center px-0 py-0 text-white">
                            <div><File></File></div>
                            <div>
                                <div className="font-bold">Our Brochure</div>
                                <div className="text-xs uppercase font-semibold opacity-60">Download</div>
                            </div>
                            <button className="btn btn-square btn-ghost">
                                <FolderDown className="size-[1.2em]" />
                            </button>
                        </li>
                        <li className="list-row items-center px-0 py-0 text-white">
                            <div><File></File></div>
                            <div>
                                <div className="font-bold">Company Details</div>
                                <div className="text-xs uppercase font-semibold opacity-60">Download</div>
                            </div>
                            <button className="btn btn-square btn-ghost">
                                <FolderDown className="size-[1.2em]" />
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
};
export default ServicesSidebar;