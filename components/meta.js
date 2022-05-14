import React from "react";
import Head from "next/head";
import { description, keywords, title } from "../constants/utilities";

const Meta = () => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/images/logo.png" />
    </Head>
  );
};

export default Meta;
