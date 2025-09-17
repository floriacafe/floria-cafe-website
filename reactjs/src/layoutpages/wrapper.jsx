import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Wrapper = ({ children }) => (
    <div className="page-wrapper" style={{ position: 'relative', minHeight: '100vh', paddingBottom: '110px' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
);

export default Wrapper;
