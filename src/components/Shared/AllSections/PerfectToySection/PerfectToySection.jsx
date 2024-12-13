import HeaderSection from "@/components/reUseableComponent/HeaderSection";
import ToyCard from "../../../reUseableComponent/ToyCard";
import Link from "next/link";



const PerfectToySection = () => {
    const toys = [
        {
            imageSrc: "https://i.ibb.co/K5hs5Zz/Group-53.png",
            altText: "Baby Musical Toy",
            clipPathStyle: "circle(50% at 50% 50%)",
            title: "stuffed toy",
        },
        {
            imageSrc: "https://i.ibb.co/HNxcKh4/Isolation-Mode-2.png",
            altText: "Baby Musical Toy",
            clipPathStyle: "polygon(50% 0%, 100% 100%, 0% 100%)",
            title: "eco friendly toy",
        },
        {
            imageSrc: "https://i.ibb.co/DzdYX5F/Isolation-Mode-1.png",
            altText: "Baby Musical Toy",
            clipPathStyle: "ellipse(60% 40% at 50% 50%)",
            title: "educational toy",
        },
        {
            imageSrc: "https://i.ibb.co/5WtP4qC/Isolation-Mode.png",
            altText: "Baby Musical Toy",
            clipPathStyle: "inset(10% 15% 10% 15%)",
            title: "control toy",
        },
        {
            imageSrc: "https://i.ibb.co/Z60qmgz/Isolation-Mode-3.png",
            altText: "Baby Musical Toy",
            clipPathStyle: "inset(10% 15% 10% 15%)",
            title: "play set",
        },
    ];
    return (
        <div>
            <HeaderSection className="text-gray-500" title="Find The Perfect Toy" description="Our Collections" />
            {/* Toy Cards */}
            <Link href={""} className="grid md:grid-cols-3 lg:grid-cols-5 justify-items-center">
                {toys.map((toy, index) => (
                    <ToyCard
                        key={index}
                        imageSrc={toy.imageSrc}
                        altText={toy.altText}
                        title={toy.title}
                    />
                ))}

            </Link>
        </div>
    );
};

export default PerfectToySection;


