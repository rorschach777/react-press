import React from 'react';
// TODO : this could be causing a venerability? 
import { Helmet } from 'react-helmet';
const Meta = (props) => {
    const data = props.setComponentData("head");
    return (
      <Helmet>
        <title>{data.description}</title>
        <meta name="description" content={data.description}/>
         <meta name="keywords" content={data.keywords}/>
      </Helmet>
    );
};
export default Meta;