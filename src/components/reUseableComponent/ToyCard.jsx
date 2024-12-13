import Image from "next/image";

const ToyCard = ({ imageSrc, altText, clipPathStyle, title }) => {
    return (
        <div
            className="flex flex-col items-center justify-between"
            style={{ height: '160px' }}
        >
            <Image
                width={180}
                height={160}
                src={imageSrc}
                alt={altText}
                priority
            />
            <h1
                className="mt-auto text-xl italic font-extrabold text-sky-600 text-center"
                style={{
                    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)',
                }}
            >
                {title}
            </h1>
        </div>
    );
};

export default ToyCard;
