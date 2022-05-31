// componente

import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  fetchCurrencies,
  saveUserExpenses,
  removeExpenses,
  editExpense,
  editSavedExpenses,
} from '../actions/index';
import {
  Div,
  Header,
  P,
  H1,
  Form,
  Select,
  Input,
  Img,
  DivH1,
  Button,
  Table
} from './style/styleWallet';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
    };
  }

  componentDidMount() {
    const { dispatchGetCurrencies } = this.props;
    dispatchGetCurrencies();
    const addForm = document.getElementById('add-form');
    addForm.setAttribute('style', 'display: flex');
  }

  fetchExchange = async () => {
    try {
      const URL = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(URL);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  addTotalUpdate = () => {
    const { expenses } = this.props;
    const { totalExpenses } = this.state;

    const selectedCurrency = document.getElementById('coin');
    const userExpense = document.getElementById('expense');

    const rate = (((Object.values(expenses[0].exchangeRates))
      .filter((currency) => currency.codein !== 'BRLT'))
      .filter((currency) => currency.code === selectedCurrency.value)
    )[0].ask;

    const thisTotalExpense = ((userExpense.value) * rate);

    this.setState({
      totalExpenses: totalExpenses + thisTotalExpense,
    });
  }

  editTotalUpdate = () => {
    const { expenses } = this.props;
    const { totalExpenses } = this.state;

    const selectedCurrency = document.getElementById('edit-coin');
    const userExpense = document.getElementById('edit-expense');

    const rate = (((Object.values(expenses[0].exchangeRates))
      .filter((currency) => currency.codein !== 'BRLT'))
      .filter((currency) => currency.code === selectedCurrency.value)
    )[0].ask;

    const thisTotalExpense = ((userExpense.value) * rate);

    this.setState({
      totalExpenses: totalExpenses + thisTotalExpense,
    });
  }

  saveButtonClick = async (event) => {
    event.preventDefault();
    const { dispatchSaveExpenses, expenses } = this.props;
    const newId = expenses.length;

    const date = document.getElementById('date');
    const userExpense = document.getElementById('expense');
    const description = document.getElementById('description');
    const selectedCurrency = document.getElementById('coin');
    const method = document.getElementById('method');
    const tag = document.getElementById('tag');

    const exchangeRates = await this.fetchExchange();

    dispatchSaveExpenses({
      id: newId,
      date: date.value,
      value: userExpense.value,
      description: description.value,
      currency: selectedCurrency.value,
      method: method.value,
      tag: tag.value,
      exchangeRates,
    });

    this.addTotalUpdate();

    userExpense.value = '';
    description.value = '';
  }

  editButtonClick = () => {
    const { dispatchEditSavedExpenses } = this.props;
    const addForm = document.getElementById('add-form');
    const editForm = document.getElementById('edit-form');

    editForm.removeAttribute('style');
    editForm.setAttribute('hidden', 'true');
    addForm.setAttribute('style', 'display: flex');

    dispatchEditSavedExpenses({
      id: Number((document.getElementById('edit-id').value)),
      date: (document.getElementById('edit-date').value),
      value: (document.getElementById('edit-expense').value),
      description: (document.getElementById('edit-description')).value,
      currency: (document.getElementById('edit-coin')).value,
      method: (document.getElementById('edit-method')).value,
      tag: (document.getElementById('edit-tag')).value,
      exchangeRates: JSON.parse((document.getElementById('edit-rates').value)),
    });

    let checks = (document.getElementsByClassName('checkbox')
    );
    checks = Array.from(checks)
    checks.forEach((element) => {
      element.checked = false;
    });

    if ((document.getElementById('add-form')).hasAttribute('hidden')) {
      (document.getElementById('edit-form'))
        .setAttribute('hidden', 'true');
      (document.getElementById('add-form'))
        .removeAttribute('hidden');
    }

      ([...(document.getElementsByClassName("checkbox"))])
        .forEach((element) => element
          .removeAttribute('hidden'));

    this.editTotalUpdate();
  }

  convertedValue = (value) => {
    const { totalExpenses } = this.state;
    this.setState({
      totalExpenses: totalExpenses - value,
    });
  }

  render() {
    const {
      userEmail,
      currencies,
      expenses,
      dispatchRemoveExpense,
      dispatchEditExpense } = this.props;
    const { totalExpenses } = this.state;
    const editForm = document.getElementById('edit-form');
    const addForm = document.getElementById('add-form');


    return (
      <Div>
        <Header>
          <p>Total: <strong>R$ { totalExpenses.toFixed(2) }</strong></p>
          <P>
            Usuário:
            {' '}
            <br /><strong>{ userEmail }</strong>
          </P>
        </Header>

        <DivH1>
          <Img src="https://cdn-icons-png.flaticon.com/512/1077/1077974.png"></Img>
          <H1>Minhas despesas</H1>
        </DivH1>

        <Form id='add-form'>
          <label htmlFor="date">
            Data:
            <Input
              type="date"
              id="date"
              name="date"
            />
          </label>
          <label htmlFor="expense">
            Valor:
            <Input
              type="number"
              id="expense"
              name="expense"
              required
            />
          </label>
          <label htmlFor="coin">
            Moeda
            <Select
              id="coin"
            >
              {currencies.map((code) => <option key={ code.code }>{ code }</option>)}
            </Select>
          </label>
          <label htmlFor="description">
            Descrição:
            <Input
              data-testid="description-input"
              type="text"
              id="description"
              name="description"
            />
          </label>
          <label htmlFor="tag">
            Tag
            <Select
              id="tag"
            >
              <option>Selecione</option>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </Select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <Select
              data-testid="method-input"
              id="method"
            >
              <option>Selecione</option>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </Select>
          </label>
          <Button
            type="submit"
            onClick={ this.saveButtonClick }
          >
            Adicionar
          </Button>
        </Form>
        <Form id='edit-form' hidden>
          <input id='edit-id' hidden />
          <input id='edit-rates' hidden />
          <label htmlFor="date">
            Data:
            <Input
              type="date"
              id="edit-date"
              name="date"
              autofocus="true"
            />
          </label>
          <label htmlFor="expense">
            Valor:
            <Input
              type="text"
              id="edit-expense"
              name="expense"
              required
            />
          </label>
          <label htmlFor="coin">
            Moeda
            <Select
              id="edit-coin"
            >
              {currencies.map((code) => <option key={ code.code }>{ code }</option>)}
            </Select>
          </label>
          <label htmlFor="description">
            Descrição:
            <Input
              data-testid="description-input"
              type="text"
              id="edit-description"
              name="description"
            />
          </label>
          <label htmlFor="edit-tag">
            Tag
            <Select
              id="edit-tag"
            >
              <option>Selecione</option>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </Select>
          </label>
          <label htmlFor="edit-method">
            Método de pagamento
            <Select
              data-testid="method-input"
              id="edit-method"
            >
              <option>Selecione</option>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </Select>
          </label>
          <Button
            type="button"
            onClick={ this.editButtonClick }
          >
            Concluído
          </Button>
        </Form>
        <Table>
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Câmbio utilizado</th>
            <th>Moeda de conversão</th>
            <th>Valor convertido</th>
            <th>Editar</th>
            <th />
          </tr>
          {
            expenses.map((expense) => {
              const exchangeRates = (Object.entries(expense.exchangeRates))
                .find((element) => element[0] === expense.currency);

              return (
                <tr key={expense.id}>
                  <td>{(expense.date).split('-').reverse().join('/')}</td>
                  <td>{Number(expense.value).toFixed(2)}</td>
                  <td>{(exchangeRates[1].name).split('/',1)}</td>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{Number(exchangeRates[1].ask).toFixed(2)}</td>
                  <td>Real</td>
                  <td>{Number(expense.value * exchangeRates[1].ask).toFixed(2)}</td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={() => (
                        // eslint-disable-next-line
                        dispatchEditExpense(expense.id),
                        this.convertedValue(Number(expense.value * exchangeRates[1].ask).toFixed(2)),
                        editForm.removeAttribute('hidden'),
                        editForm.setAttribute('style', 'display: flex'),
                        addForm.setAttribute('hidden', 'true'),
                        addForm.removeAttribute('style')
                      )}
                    >
                    </input>
                  </td>
                  <td>
                    <button
                      type="button"
                      // eslint-disable-next-line
                      onClick={() => (
                        // eslint-disable-next-line
                        dispatchRemoveExpense(expense.id),
                        this.convertedValue(Number(expense.value * exchangeRates[1].ask).toFixed(2))
                      )}
                    >
                      Apagar
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </Table>
      </Div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetCurrencies: () => dispatch(fetchCurrencies()),
  dispatchSaveExpenses: (expenses) => dispatch(saveUserExpenses(expenses)),
  dispatchRemoveExpense: (expense) => dispatch(removeExpenses(expense)),
  dispatchEditExpense: (id) => dispatch(editExpense(id)),
  dispatchEditSavedExpenses: (expense) => dispatch(editSavedExpenses(expense)),
});

Wallet.propTypes = {
  userEmail: propTypes.string.isRequired,
  currencies: propTypes.func.isRequired,
  expenses: propTypes.func.isRequired,
  fetchCurrencies: propTypes.func.isRequired,
  saveUserExpenses: propTypes.func.isRequired,
  removeExpenses: propTypes.func.isRequired,
  editExpense: propTypes.func.isRequired,
  editSavedExpenses: propTypes.func.isRequired,
  dispatchGetCurrencies: propTypes.func.isRequired,
  dispatchSaveExpenses: propTypes.func.isRequired,
  dispatchRemoveExpense: propTypes.func.isRequired,
  dispatchEditExpense: propTypes.func.isRequired,
  dispatchEditSavedExpenses: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);