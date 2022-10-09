import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <body className="bg-gray-100 dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  );
}
