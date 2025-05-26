interface SectionTitleProps {
    title: string;
    subtitle?: string;
    light?: boolean;
    centered?: boolean;
    className?: string;
}

const SectionTitle = ({
    title,
    subtitle,
    light = false,
    centered = true,
    className = ''
}: SectionTitleProps) => {
    return (
        <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
            <h2 className={`text-3xl md:text-4xl lg:text-[2.4vw] font-bold relative inline-block
            ${light ? 'text-white' : 'text-red-700'}`}
            >
                {title}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 transform scale-x-50 opacity-75" />
            </h2>

            {subtitle && (
                <p className={`mt-4 text-lg md:text-xl lg:text-[1.2vw] max-w-xl mx-auto
            ${light ? 'text-gray-200' : 'text-gray-700'}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;