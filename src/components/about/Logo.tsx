import image from '../global/images/my-uploads/orielixlogo.png';

export const Logo = () => {
    return (
        <div className="flex flex-col items-center text-center sm:text-left md:-mt-4 gap-2 w-1/5">
            <div className="flex justify-center sm:justify-start">
                <img
                    src={image}
                    alt="Orielix Logo"
                    className="h-20 sm:h-24 md:h-28 w-auto invert"
                />
            </div>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base text-center">
                Transforming lives through connections, community and innovations.
            </p>
        </div>
    )
}