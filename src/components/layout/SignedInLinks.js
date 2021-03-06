import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => (
  <ul className="right">
    <li>
      <NavLink to="/project/create"><div className="waves-effect waves-light btn blue accent-3">+ New Project</div></NavLink>
    </li>
    <li onClick={props.signOut} className="clickable">
      Log Out
    </li>
    <li>
      <NavLink to="/" className="waves-effect waves-light btn btn-floating grey darken-3">{props.profile.initials}</NavLink>
    </li>
  </ul>
);

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(SignedInLinks);
