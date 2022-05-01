import '../src/assets/styles//globals.css';
import Header from '../src/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className="page-container pt-[70px]">
      <Header />
      <Component {...pageProps} />
      <div className="app-background">
        <div className="app-background-1"></div>
        <div className="app-background-2"></div>
        <div className="app-background-3"></div>
      </div>
    </div>
  );
}

export default MyApp;
