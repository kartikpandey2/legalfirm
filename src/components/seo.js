/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import appleFavicon from "../images/apple-icon-180x180.png"
import androidFavicon from "../images/android-icon-192x192.png"
import webFavicon1 from "../images/favicon-32x32.png"
import webFavicon2 from "../images/favicon-96x96.png"
import webFavicon3 from "../images/favicon-16x16.png"

function SEO({ description, lang, meta, keywords, title }) {
  const metaDescription = description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Lotus Legal Associates`}
      link={[
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: appleFavicon,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: androidFavicon,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: webFavicon1,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: webFavicon2,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: webFavicon3,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
