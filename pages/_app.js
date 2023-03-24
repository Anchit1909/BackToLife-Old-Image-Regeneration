import "../styles/globals.css";
import cx from "classnames";
import { Poppins } from "@next/font/google";
import localFont from "@next/font/local";

const clash = localFont({
  src: "../styles/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={cx(clash.variable, poppins.variable)}>
      <Component {...pageProps} />
    </main>
  );
}
