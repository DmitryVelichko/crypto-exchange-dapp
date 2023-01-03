import '../styles/globals.css';
// internal import
import {NavBar} from '../Components/index'


const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;
