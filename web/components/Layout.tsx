import React from 'react';
import { HeaderProps } from './Header';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
    config: HeaderProps;
};

const Layout: React.FC<LayoutProps> = ({ children, config }) => {
    const { logo, primaryNavigation, secondaryNavigation } = config;
    return (
        <>
            <Header
                logo={logo}
                primaryNavigation={primaryNavigation}
                secondaryNavigation={secondaryNavigation}
            />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
