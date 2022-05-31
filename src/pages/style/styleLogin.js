import style from 'styled-components';

export const Container = style.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 15vh auto 2vh auto;
  width: 300px;
  height: 400px;
  background-color: #221007;
  box-shadow: 2px 2px 20px #191919,
             -2px -2px 20px #292929;
  transition: border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,
              transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  :hover {
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    transform: scale(1.05);
  }
`;

export const Img = style.img`
  max-width:60px;
  max-height:65px;
  width: auto;
  height: auto;
`;

export const Form = style.form`
  flex-direction: column;
  --width-of-input: 230px;
  --border-height: 1px;
  --border-before-color: #f18f01;
  --border-after-color: f5f1ed;
  --input-hovered-color: #4985e01f;
  position: relative;
  width: var(--width-of-input);

`;

export const Input = style.input`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-color: transparent;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  border-top: var(--border-height) solid var(--border-before-color);
  :hover {
    background: var(--input-hovered-color);
  }
  margin-bottom: 50px;
  ::placeholder {
    color: #ffffff;
    font-size: 16px;
  }
`;

export const Button = style.button`
  text-transform: uppercase;
  color: #221007;
  padding: 0.6em 1.3em;
  font-size: 13px;
  font-weight: bold;
  border-radius: 0.5em;
  background: #ffedd8;
  border: 2px solid #221007;
  box-shadow: 3px 3px 8px #c5c5c5,
             -3px -3px 8px #ffffff;
  :active {
    box-shadow: 4px 4px 12px #c5c5c5,
               -4px -4px 12px #ffffff;
  }
  margin: 10px 67px 20px 67px;
`;

export const ContainerP = style.div`
  width: 300px;
  margin: 0 40vw 0 40vw;
`;

  export const P = style.p`
  color: #221007;
  font-size: 10px;
  letter-spacing: 1px;
  line-height: 15px;
  text-align: center;
`;
