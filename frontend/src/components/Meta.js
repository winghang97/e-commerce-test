import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
      </Helmet>
    </>
  );
};

Meta.defaultProps = {
  title: "Wecome to Demo App",
  keywords: "stuff, alot of stuff",
  description: "testing",
};

export default Meta;
