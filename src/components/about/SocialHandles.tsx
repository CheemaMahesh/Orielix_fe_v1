import { social_handles } from "../../constants/about";
import { AboutCard } from "../global/components/AboutCard";

export const SocialHandles = () => {
    return (
        <section className="flex flex-col gap-2 w-1/5 max-sm:w-full">
            <p>Social Handles</p>
            <div className="flex flex-col gap-1.5">{social_handles?.map((item) => (
                <AboutCard key={item?.title} item={item} />
            ))}</div>
        </section>
    )
}