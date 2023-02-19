import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@AcmeTest/stories/Button.jsx';
import { Icon } from '@AcmeTest/stories/Icon';
import { Icon as OriginalIcon } from '@@AcmeTest/stories/Icon';

export const Form = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <form>
    <input type="text" />
    <Button primary size="large" onClick={onCreateAccount} label="Submit Form overwritten in App with large button" />
    <Icon />
    <OriginalIcon />
  </form>
);

Form.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Form.defaultProps = {
  user: null,
};
