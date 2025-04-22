import { Input } from "../global/components/ui/input";
import { Button } from "../global/components/ui/button";

export const SubscribeToNewsLetter = () => {
    return (
        <section className="flex flex-col items-center gap-2 w-1/5 max-w-6xl bg-gray-900 max-sm:w-full">
            <h3 className="text-lg font-bold mb-3 text-center">Newsletter</h3>
            <p className="text-gray-300 mb-3 text-sm text-center">
                Subscribe to our newsletter for the latest updates and features.
            </p>

            <div className="flex gap-2 flex-col sm:flex-row">
                <Input
                    placeholder="Your email"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 text-sm md:text-base h-10 md:h-auto"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 mt-2 sm:mt-0 text-sm md:text-base h-10 md:h-auto">
                    Subscribe
                </Button>
            </div>
        </section>
    )
}