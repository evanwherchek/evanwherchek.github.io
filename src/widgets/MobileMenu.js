import { bubble as Menu } from 'react-burger-menu';
import { useState } from 'react';
import Image from "next/image";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = (state) => {
        setIsOpen(state.isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleNavClick = (section) => {
        closeMenu();
        // Add navigation logic here
    };

    return (
        <Menu
            isOpen={isOpen}
            onStateChange={handleStateChange}
            width={'500px'}
            burgerButtonClassName="fixed top-4 left-4 z-50"
            menuClassName="bg-navy"
            morphShapeClassName="fill-navy"
            itemListClassName="text-white"
            overlayClassName="bg-black bg-opacity-50"
            styles={{
                bmItemList: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    padding: '0'
                }
            }}
        >
            <div className="flex flex-col items-center space-y-6">
                <Image src="/images/logo-2.png" width={200} height={200} alt="logo" />
                <button
                    className="bg-none border-none cursor-pointer px-2 py-2 text-md font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
                    onClick={() => handleNavClick('about')}
                >
                    About
                </button>
                <button
                    className="bg-none border-none cursor-pointer px-2 py-2 text-md font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
                    onClick={() => handleNavClick('background')}
                >
                    Background
                </button>
                <button
                    className="bg-none border-none cursor-pointer px-2 py-2 text-md font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
                    onClick={() => handleNavClick('contact')}
                >
                    Contact
                </button>
            </div>
        </Menu>
    );
};

export default MobileMenu;