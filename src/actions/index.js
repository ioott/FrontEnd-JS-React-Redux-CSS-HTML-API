// Action

export const saveUserEmail = (email) => ({
  type: 'SET_USER_EMAIL', // nome da ação que eu quero executar
  payload: email, // a "coisa" em que eu quero mexer
});

export const saveUserExpenses = (expenses) => ({
  type: 'SAVE_USER_EXPENSES',
  payload: expenses,
});

export const getCurrencies = (currencies) => ({
  type: 'SET_CURRENCIES',
  payload: currencies,
});

// thunk (função que retorna outra função que chama a action)
export const fetchCurrencies = () => async (dispatch) => {
  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(URL);
    const result = await response.json();
    const codes = (Object.keys(result))
      .filter((element) => element !== 'USDT');
    dispatch(getCurrencies(codes));
  } catch (error) {
    console.log(error);
  }
};

export const removeExpenses = (id) => ({
  type: 'REMOVE_EXPENSES',
  payload: id,
});

export const editExpense = (id) => ({
  type: 'EDIT_EXPENSE',
  payload: id,
});

export const editSavedExpenses = (expense) => ({
  type: 'EDIT_SAVED_EXPENSE',
  payload: expense,
});
