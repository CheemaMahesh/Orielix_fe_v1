import { SocialHandles } from "./SocialHandles";
import { Contact } from "./Contact";
import { Logo } from "./Logo";
import { SubscribeToNewsLetter } from "./SubscribeToNewsLetter";

export const About = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section className="flex flex-col w-full h-auto bg-[#101827] p-12 gap-20 text-white max-sm:items-center">
            <section className="flex gap-8 justify-between max-sm:flex-col sm:h-fit sm:items-center">
                <Logo />
                <SocialHandles />
                <Contact />
                <SubscribeToNewsLetter />
            </section>
            <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-xs">
                <p>&copy; {currentYear} Orielix. All rights reserved.</p>
            </div>
        </section>
    )
}