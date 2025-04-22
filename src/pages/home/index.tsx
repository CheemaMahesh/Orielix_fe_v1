import { About } from '../../components/about';
import { WhatWeOffer } from '../../components/WhatWeOffer';
import { WhatCommunitySays } from '../../components/WhatCommunutySays';
import { HeroSection } from '../../components/HeroSection';
import { Nav } from '../../components/Nav';

export const Home = () => {
    return (
        <div className=" h-4 w-auto text-xl font-semibold">
            <Nav />

            <HeroSection />
            <WhatWeOffer />
            <WhatCommunitySays />
            <About />
        </div>
    )
}