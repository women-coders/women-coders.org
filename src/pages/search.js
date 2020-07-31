import PropTypes from "prop-types";
import React from "react";
// import { graphql } from "gatsby";


import Article from "../components/Article";
import Search from "../components/Search";
import { ThemeContext } from "../layouts";
import Seo from "../components/Seo";

import AlgoliaIcon from "!svg-react-loader!../images/svg-icons/search-by-algolia.svg?name=AlgoliaLogo";

require("core-js/fn/array/find");

const SearchPage = props => {
//   const {
//     data: {
//       site: {
//         siteMetadata: { algolia, facebook }
//       }
//     }
//   } = props;

  return (
    <React.Fragment>
     Comoing soon
    </React.Fragment>
  );
};

SearchPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default SearchPage;

//eslint-disable-next-line no-undef
// export const query = 
//       `
//   query SearchQuery {
//     site {
//       siteMetadata {
//         algolia {
//           appId
//           searchOnlyApiKey
//           indexName
//         }
//         facebook {
//           appId
//         }
//       }
//     }
//   }
// `;
