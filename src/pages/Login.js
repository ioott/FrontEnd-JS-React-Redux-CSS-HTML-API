// componente

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { saveUserEmail } from '../actions/index';
import {
  Container,
  Img,
  Form,
  Input,
  Button,
  ContainerP,
  P
} from './style/styleLogin';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      userPassword: '',
      userEmail: '',
      isButtonDisabled: true,
      loginOk: false,
    };
  }

  // handleChange genérico:
  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { userPassword, userEmail } = this.state;

      // validação do botão USANDO O STATE LOCAL:
      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      const CINCO = 5;
      if (userPassword.length > CINCO && emailRegex.test(userEmail) === true) {
        this.setState({
          userPassword: '',
          isButtonDisabled: false,
        });
      } else {
        this.setState({
          isButtonDisabled: true,
        });
      }
    });
  }

  // função do botão
  onClickFunction = () => {
    const { setUserEmail } = this.props;
    const { userEmail } = this.state;
    this.setState({
      userEmail,
      loginOk: true,
    });
    setUserEmail(userEmail);
  }

  render() {
    const { isButtonDisabled, loginOk } = this.state;
    return (
      <main>
        <Container>
          <Img src="https://www.seekpng.com/png/full/332-3321868_jewelry-for-charismatic-appearance-wallets-organised-black-and.png" />
          <Form>
            <Input
              placeholder="e-mail"
              id="userEmail"
              name="userEmail"
              onChange={this.onInputChange}
            />
            <Input
              placeholder="senha"
              type="password"
              id="userPassword"
              name="userPassword"
              onChange={ this.onInputChange }
            />
            {isButtonDisabled === true
              ? null
              : <Button
                  id="btn"
                  type="button"
                  disabled={ isButtonDisabled }
                  onClick={this.onClickFunction}
                  autofocus="true"
                  >
                  Entrar
                </Button>
            }
          </Form>
        { loginOk && <Redirect to="/carteira" /> }
        </Container>
        <ContainerP>
          <P>- desenvolvido por vania ioott -<br />com js, html, react, redux e styled components</P>
        </ContainerP>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserEmail: (state) => dispatch(saveUserEmail(state)),
});

Login.propTypes = {
  setUserEmail: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// expressão de Regex (linha 30) encontrada em https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail