import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { firebaseConfig } from "../firebase/config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  getAnalytics(app);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
