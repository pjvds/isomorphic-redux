import React, { Component , PropTypes }   from 'react';
import RegistrationForm              from './RegistrationForm';
import { bindActionCreators } from 'redux';
import * as RegistrationActions from 'actions/RegistrationActions';
import { connect }            from 'react-redux';

class Registration extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { dispatch } = this.props;

    return (
      <div id="todo-list">
        <RegistrationForm {...bindActionCreators(RegistrationActions, dispatch)} />
      </div>
    );
  }
}

export default connect(state => (state))(Registration)
