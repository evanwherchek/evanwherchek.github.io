import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link'

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = (state) => {
        setIsOpen(state.isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

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
                <Link href="/" className="text-lg">
                    Home
                </Link>
                <Link href="/about" className="text-lg">
                    About
                </Link>
                <Link href="/qualifications" className="text-lg">
                    Qualifications
                </Link>
                <Link href="/contact" className="text-lg">
                    Contact
                </Link>
            </div>
        </Menu>
    );
}

export default MobileMenu;