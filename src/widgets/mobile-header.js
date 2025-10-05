import MobileMenu from "./mobile-menu";
import Image from "next/image";

function MobileHeader() {
    return (
        <div className="bg-navy w-full h-16 flex items-center justify-center fixed top-0 left-0 z-40">
            <MobileMenu />
            <Image width={200} height={200} src="/images/logo-2.png" alt="Logo" />
        </div>
    );
}

export default MobileHeader;