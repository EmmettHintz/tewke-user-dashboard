import { type AppType } from "next/dist/shared/lib/utils";
import 'bootstrap/dist/css/bootstrap.min.css';
import "~/styles/globals.css";


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
