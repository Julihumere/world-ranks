import "@/components/styles/globals.css";
import { CountriesProvider } from "../context/useContext.js";

export default function App({ Component, pageProps }) {
  return (
    <CountriesProvider>
      <Component {...pageProps} />
    </CountriesProvider>
  );
}
