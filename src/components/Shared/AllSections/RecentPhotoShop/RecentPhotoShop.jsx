import HeaderSection from "@/components/reUseableComponent/HeaderSection";
import Image from "next/image";


const RecentPhotoShop = () => {
    return (
        <div>
            <HeaderSection title="Recent PhotoShot" description="check gallery" className="text-gray-500"/>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center">
                <Image 
                width={360} 
                height={360} 
                src="https://i.ibb.co/hMvV3th/Rectangle-23.png"
                priority
                />
                <Image 
                width={360} 
                height={360} 
                src="https://i.ibb.co/q0gVV3b/Rectangle-26-1.png"
                priority
                />
                <Image 
                width={360} 
                height={360} 
                src="https://i.ibb.co/mTGSgV3/Rectangle-25.png"
                priority
                />
                <Image 
                width={360} 
                height={360} 
                src="https://i.ibb.co/8jZMFbk/Rectangle-24.png"
                priority
                />
            </div>
        </div>
    );
};

export default RecentPhotoShop;

/* 




*/