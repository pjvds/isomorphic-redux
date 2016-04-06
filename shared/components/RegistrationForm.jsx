import React, { PropTypes } from 'react';

export default class RegistrationForm extends React.Component {
  static propTypes = {
    createAccount: PropTypes.func.isRequired
  };

  handleSubmit = () => {
    let data = {
        email: 'foobar@hpc.com',
        username: 'foobar',
        password: 'foobar',
        lookingForMinAge: '18',
        lookingForMaxAge:'25',
        birthday: '1980-01-01',
        provinced: '65b8b184-514e-47a4-8f8d-351c8450ef48',
        districtId: 'da0c6323-ff96-454d-a5ed-cebe65180748',
        sex: 0,
        lookingForSex: '1',
    };

    this.props.createAccount(data);
  };

  render() {
    return (
        <form method="POST">
            <fieldgroup>

                <label htmlFor="username">Nickname</label>
                <input className="ui-input" type="text" className="" placeholder="" name="nickname" id="nickname" ref="nickname" />

                <label htmlFor="password">Password</label>
                <input className="ui-input" type="password" className="" placeholder="" name="password" id="password" ref="password" onBlur={this.checkEqual} />

                <label htmlFor="password">Repeat password</label>
                <input className="ui-input" type="password" className="" placeholder="" name="passwordConfirm" id="passwordConfirm" ref="passwordConfirm" onBlur={this.checkEqual} />

                <label htmlFor="email">E-mail</label>
                <input className="ui-input" type="email" className="" placeholder="mail@mail.com" name="email" id="email" ref="email" />

            </fieldgroup>

            <fieldgroup>

                <select name="year" ref="year">
                    <option>Choose a year</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                </select>

                <select name="month" ref="month">
                    <option>Choose a month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                </select>

                <select name="day" ref="day">
                    <option>Choose a day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>

                <select name="gender" ref="gender">
                    <option>Man eller Kvinna?</option>
                    <option value="F">Kvinna</option>
                    <option value="M">Man</option>
                </select>

                <select name="state" ref="state">
                    <option>Choose a state</option>
                    <option value="01">Stockholms Län</option>
                    <option value="02">Göteborgs Län</option>
                </select>

                <select name="city" ref="city">
                    <option>Choose a city</option>
                    <option value="01">Stockholms kommun</option>
                    <option value="02">Göteborgs kommun</option>
                </select>

            </fieldgroup>

            <fieldgroup>

                <select name="orientation" ref="orientation">
                    <option>Man eller Kvinna?</option>
                    <option value="2">Kvinna</option>
                    <option value="1">Man</option>
                </select>

                <select name="minAge" ref="minAge">
                    <option>From age</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>

                <select name="maxAge" ref="maxAge">
                    <option>To age</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                </select>

                <button className="uk-button uk-button-small uk-button-primary" onClick={this.handleSubmit.bind(this)}>register</button>
            </fieldgroup>
        </form>
    );
  }
}
