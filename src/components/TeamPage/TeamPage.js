import React from "react";
import PropTypes from "prop-types";

import Headline from "../Article/Headline";
import TeamText from "../Article/TeamText";

const TeamPage = props => {
  const {
    page: {
      html,
      frontmatter: { title }
    },
    theme
  } = props;

  console.log("length of team object", html);

  return (
    <React.Fragment>
      <h1 className="testalignment">{title}</h1>
      <style jsx>{`
        .testalignment {
          padding-top: calc(130px);
          text-align: center;
          margin-bottom: 5%;
        }
      `}</style>
      <TeamText html={html} theme={theme} />
    </React.Fragment>
  );
};

TeamPage.propTypes = {
  page: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default TeamPage;
