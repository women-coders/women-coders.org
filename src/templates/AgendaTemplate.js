import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Article from "../components/Article";
import TeamPage from "../components/TeamPage/TeamPage.js";
import { ThemeContext } from "../layouts";

const AgendaTemplate = props => {
  const {
    data: {
      agenda,
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => <TeamPage page={agenda} theme={theme} />}
      </ThemeContext.Consumer>

      <Seo data={agenda} facebook={facebook} />
    </React.Fragment>
  );
};

AgendaTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default AgendaTemplate;

export const agendaQuery = graphql`
  query AgendaByPath($slug: String!) {
    agenda: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
