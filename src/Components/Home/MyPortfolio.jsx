import Link from "next/link";
const MyPortfolio = () => {
    return (
        <div>
            <div className="flex items-center mb-5 gap-[10px]">
                <div className="w-8 h-1 bg-primary"></div>
                <p className="text-lg font-medium text-primary">About Me </p>
            </div>
            <div className="flex justify-between">
                <p className="text-2xl text-white font-bold mb-6">Some of my distinguished woeks</p>
                <div className="">
                    <ul className="flex text-secondary gap-12 ">
                        <li>
                            <span className="hover:text-primary duration-300 text-lg font-medium">
                                <Link href="#">Mobile App</Link>
                            </span>
                        </li>
                        <li>
                            <span className="hover:text-primary duration-300 text-lg font-medium">
                                <Link href="#">Web Design</Link>
                            </span>
                        </li>
                        <li>
                            <span className="hover:text-primary duration-300 text-lg font-medium">
                                <Link href="#">More</Link>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default MyPortfolio;
