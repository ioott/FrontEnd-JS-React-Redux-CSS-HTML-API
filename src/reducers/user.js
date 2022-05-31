// Reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_USER_EMAIL': // atualizando o INITIAL_STATE
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default userReducer;
