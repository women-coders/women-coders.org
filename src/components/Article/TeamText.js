import React from "react";
import PropTypes from "prop-types";

const TeamText = props => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} />

      <style jsx>{`
        .bodytext {
          animation-name: bodytextEntry;
          animation-duration: ${theme.time.duration.long};
          text-align:center;
          margin:auto;
          padding: ${theme.space.inset.default};
          :global(h2),
          :global(h3) {
            margin: 1.5em 0 1em;
          }

          :global(h2) {
            line-height: ${theme.font.lineHeight.s};
            font-size: ${theme.font.size.l};
          }

          :global(h3) {
            font-size: ${theme.font.size.m};
            line-height: ${theme.font.lineHeight.m};
          }

          :global(p) {
            font-size: ${theme.font.size.s};
            line-height: ${theme.font.lineHeight.xxl};
            margin: 1.5em 0 1.5em;
          }
          :global(ul) {
            // list-style: circle;
            // margin: 0 0 1.5em;
          }
         
          :global(li) {
            // margin: 0.7em 0;
            line-height: 1.5;
            width:${theme.text.maxWidth.mobile};
            
            display:inline-block;
            list-style-type: none;
            // padding:10px 30px;
            text-align:center;
            // height:600px;
            vertical-align:top;
            
            margin:10px;
          }
          
          :global(li img){
            width:200px;
            height:200px;
          }
          :global(a) {
            font-weight: ${theme.font.weight.bold};
            color: ${theme.color.brand.primary};
            text-decoration: underline;
          }
          :global(gatsby-resp-image-link) {
            border: 0;
            display: block;
            margin: 2.5em 0;
            border-radius: ${theme.size.radius.default};
            overflow: hidden;
            // border: 1px solid ${theme.line.color};
          }
          :global(code.language-text) {
            background: ${theme.color.neutral.gray.c};
            text-shadow: none;
            color: inherit;
            padding: 0.1em 0.3em 0.2em;
            border-radius: 0.1em;
          }
          ::after{
              clear:both;
          }
        }

        @keyframes bodytextEntry {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @from-width desktop {
            .bodytext {
              padding: ${`calc(${theme.space.default}) calc(${
                theme.space.default
              } * 2)`};
            //   max-width: ${theme.text.maxWidth.tablet};
            :global(li){
                width:${theme.text.maxWidth.desktop};
            }
            
            }
            
          }
          
          
          
        
          
      `}</style>
    </React.Fragment>
  );
};

TeamText.propTypes = {
  html: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default TeamText;
