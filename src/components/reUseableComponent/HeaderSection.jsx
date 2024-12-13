

const HeaderSection = ({ title, description, children, className = "" }) => {
    return (
        <div className={`p-6 text-center ${className}`}>
            {title && <h1 style={{ textShadow: "2px 2px 5px rgba(135, 206, 235, 1)" }} className="text-3xl font-bold italic ">{title}</h1>}
            {description && <p className="text-lg font-extrabold text-gray-600 mt-2">{description}</p>}
            {children && <div className="mt-4">{children}</div>}
        </div>
    );
};

export default HeaderSection;