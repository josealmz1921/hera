import { LayoutProps } from '../../interfaces/interface.d';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;