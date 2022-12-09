// 导入全局样式
import '../styles/globals.css';
import Navbar from '../components/Navbar.tsx';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
