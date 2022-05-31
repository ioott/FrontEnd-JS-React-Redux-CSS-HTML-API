// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_CURRENCIES':
    return {
      ...state,
      currencies: action.payload
    };
  case 'SAVE_USER_EXPENSES':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload
      ]
    };
  case 'REMOVE_EXPENSES':
    return {
      ...state,
      expenses: state.expenses
        .filter((expense) => expense.id !== action.payload)
    };
  case 'EDIT_EXPENSE':
      (([...(document.getElementsByClassName("checkbox"))])
        .filter((item) => item.checked === false))
        .forEach((element) => element
          .setAttribute('hidden', 'true'));

    const expenseToChange = state.expenses
      .find((expense) =>
        expense.id === action.payload);

    (document.getElementById('edit-id'))
      .value = expenseToChange.id;
    (document.getElementById('edit-date'))
      .value = expenseToChange.date;
    (document.getElementById('edit-expense'))
      .value = expenseToChange.value;
    (document.getElementById('edit-description'))
      .value = expenseToChange.description;
    (document.getElementById('edit-coin'))
      .value = expenseToChange.currency;
    (document.getElementById('edit-method'))
      .value = expenseToChange.method;
    (document.getElementById('edit-tag'))
      .value = expenseToChange.tag;
    (document.getElementById('edit-rates'))
      .value = JSON.stringify(expenseToChange.exchangeRates);

    return {
      ...state,
      expenses: [...state.expenses]
    };
  case 'EDIT_SAVED_EXPENSE':
    const editedExpenses = (state.expenses).map((expense) => {
      if (expense.id === (action.payload).id) {
        return action.payload;
      }
      return expense;
    });
    return {
      ...state,
      expenses: editedExpenses,
    }
  default:
    return state;
  }
};

export default currencyReducer;
