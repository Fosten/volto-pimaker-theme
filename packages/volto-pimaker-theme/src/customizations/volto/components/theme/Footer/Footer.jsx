/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { injectIntl } from 'react-intl';
import { Logo } from '@plone/volto/components';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => {
  return (
    <Segment
      role="contentinfo"
      vertical
      padded
      inverted
      color="grey"
      textAlign="center"
      id="footer"
    >
      <Container>
        <Segment basic inverted color="grey" className="discreet">
          <div className="footersitemap">
            <div className="footercol1">
              <h2>
                <a href="/smarthome">Smarthome</a>
              </h2>
              <ul>
                <li>
                  <a href="/smarthome/guide">Guide</a>
                </li>
                <li>
                  <a href="/smarthome/hardware">Hardware</a>
                </li>
                <li>
                  <a href="/smarthome/projects">Projects</a>
                </li>
              </ul>
            </div>
            <div className="footercol2">
              <h2>
                <a href="/smarthome/software">Software</a>
              </h2>
              <ul>
                <li>
                  <a href="/smarthome/software/monitoring">Monitoring</a>
                </li>
                <li>
                  <a href="/smarthome/software/data">Data</a>
                </li>
                <li>
                  <a href="/smarthome/software/media">Media</a>
                </li>
              </ul>
            </div>
            <div className="footercol3">
              <h2>
                <a href="/club">Club</a>
              </h2>
              <ul>
                <li>
                  <a href="/club/agendas">Agendas</a>
                </li>
                <li>
                  <a href="/club/minutes">Minutes</a>
                </li>
                <li>
                  <a href="/club/mission">Mission</a>
                </li>
              </ul>
            </div>
            <div className="footercol4">
              <div className="logo">
                <Logo />
                <a href="/">Pi Maker</a>
                <div className="slogan">
                  "Allow Pi to cool after compiling in the oven."
                </div>
              </div>
            </div>
          </div>
        </Segment>
        <Segment basic inverted color="grey" className="discreet">
          {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
          <div className="footerbar">
            <div className="companyinfo">
              <div className="site-email">
                <a href="mailto:info@pimaker.org">info@pimaker.org</a>
              </div>
              <div className="powered-by-plone">
                <a href="https://plone.org" target="_blank" rel="noreferrer">
                  Powered by Plone
                </a>
              </div>
              <div className="accessibility">
                <a href="/accessibility">Accessibility</a>
              </div>
              <div className="rss">
                <a href="/rss">RSS</a>
              </div>
              <div className="sitemap">
                <a href="/sitemap">Sitemap</a>
              </div>
            </div>
          </div>
        </Segment>
      </Container>
    </Segment>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
