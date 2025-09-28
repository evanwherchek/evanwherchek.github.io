import { slide as Menu } from 'react-burger-menu';
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

    const styles = {
        whiteBars: {
            'background-color': 'white !important;'
        }
    }

    return (
        <Menu
            isOpen={isOpen}
            onStateChange={handleStateChange}
            width={'100%'}
            height={'100%'}
            burgerButtonClassName="fixed top-4 left-4 z-50"
            menuClassName="bg-navy"
            morphShapeClassName="fill-navy"
            itemListClassName="text-white"
            styles={{
                bmBurgerBars: {
                    backgroundColor: 'white'
                }
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                gap: '20px'
            }}>
                <Image src="/images/logo-2.png" width={300} height={300} alt="logo" />
                <button className="text-lg"
                        onClick={() => handleNavClick('about')}
                >
                    Home
                </button>
                <button className="text-lg"
                        onClick={() => handleNavClick('about')}
                >
                    About
                </button>
                <button className="text-lg"
                        onClick={() => handleNavClick('background')}
                >
                    Background
                </button>
                <button className="text-lg"
                        onClick={() => handleNavClick('contact')}
                >
                    Contact
                </button>
            </div>
        </Menu>
    );
}

export default MobileMenu;