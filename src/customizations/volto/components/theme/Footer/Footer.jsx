/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { map } from 'lodash';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers';
import { Logo } from '@plone/volto/components';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => {
  const { siteActions = [] } = useSelector(
    (state) => ({
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );

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
                  <a href="/smarthome/sensors">Sensors</a>
                </li>
                <li>
                  <a href="/smarthome/hardware">Hardware</a>
                </li>
              </ul>
            </div>
            <div className="footercol2">
            <h2>
                <a href="/docs">Documentation</a>
              </h2>
              <ul>
                <li>
                  <a href="/docs/monitoring">Monitoring</a>
                </li>
                <li>
                  <a href="/docs/data">Data</a>
                </li>
                <li>
                  <a href="/docs/media">Media</a>
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
                <div className="slogan">"Allow Pi to cool after compiling in the oven."</div>
              </div>
            </div>
          </div>
        </Segment>
        <Segment basic inverted color="grey" className="discreet">
          {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
          <div className="footerbar">
            <div className="companyinfo">
              <div className="email">
                <a href="mailto:info@pimaker.org">info@pimaker.org</a>
              </div>
              <div className="youtube"></div>
              <div className="twitter">
                <a href="https://plone.org" target="_blank" rel="noreferrer">
                  Powered by Plone
                </a>
              </div>
              <div className="facebook"></div>
              <div className="accessibility">
                <a href="/accessibility">Accessibility</a>
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
