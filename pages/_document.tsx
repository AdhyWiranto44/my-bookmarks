import { Head, Html, Main, NextScript } from "next/document";
import backgroundColors from "../helpers/backgroundColors";

export default function Document() {
  return (
    <Html>
      <Head>
        <body
          style={{
            background: backgroundColors.myDark,
            backgroundAttachment: "fixed",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  );
}
