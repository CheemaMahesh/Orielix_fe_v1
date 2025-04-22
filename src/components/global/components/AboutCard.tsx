import { SocialHandle } from "../../../constants/about";

export type AboutCardProps = {
    item: SocialHandle;
    iconStype?: string;
}

export const AboutCard = ({ item, iconStype }: AboutCardProps) => {
    return (
        <a href={item?.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm w-fit hover:text-white hover:px-1">
            <div className="flex gap-2">
                {item?.icon && <item.icon className={iconStype || ""} />}                {item.title}
            </div>
        </a>
    )
}