import { contact_details } from "../../constants/about";
import { AboutCard } from "../global/components/AboutCard";

export const Contact = () => (
    <section className="flex flex-col gap-2 w-1/5 max-sm:w-full">
        <p>Contact</p>
        <div className="flex flex-col gap-1.5">{contact_details?.map((item) => (
            <AboutCard key={item?.title} item={item} iconStype="h-4 w-4 md:h-5 md:w-5 text-purple-400 flex-shrink-0" />
        ))}</div>
    </section>
);