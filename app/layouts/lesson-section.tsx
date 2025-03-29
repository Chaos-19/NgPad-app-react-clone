import { Outlet } from "react-router";
import { ScrollArea } from "~/components/ui/scroll-area";
import { TobBar } from "~/components";

const LessonSection = ( )=> {
    return (
        <section className="overflow-y-hidden">
            <TobBar style="bg-white-0 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-0 z-50 fixed top-0 inset-x-0" />
            <ScrollArea>
                <Outlet />
            </ScrollArea>
        </section>
    );
}

export default LessonSection;