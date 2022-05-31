import style from 'styled-components';

export const Div = style.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  width: 1400px;
  justify-content: center;
  display:
`;

export const Header = style.header`
  display: flex;
  color: white;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding-right: 80px;
  padding-left: 30px;
  background-color: #221007;

`;

export const P = style.p`
  font-size: 14px;
  line-height: 20px;
`;

export const H1 = style.h1`
  padding: 30px;
  font-size: 28px;
  color: #221007;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Form = style.form`
  color: white;
  height: 72px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px 20px 30px;
  background-color: #8b5e34;
  line-height: 25px;
`;

export const Select = style.select`
  width: 80%;
  font-size: 15px;
  padding: 10px 10px;
  border: none;
  border-radius: 4px;
  background-color: #ffedd8;
  :focus {
  border: 2px solid #221007;
  }
  margin-right: 30px;
`;

export const Input = style.input`
  width: 80%;
  font-size: 18px;
  padding: 12px 10px;
  border: none;
  border-radius: 4px;
  background-color: #ffedd8;
  :focus {
  border: 2px solid #221007;
  }
  margin-right: 30px;
`;

export const DivH1 = style.div`
  display: flex;
  align-items: center;
`;

export const Img = style.img`
  height: 40px;
  width: 50px;
  margin-left: 30px;
`;

export const Button = style.button`
  text-transform: uppercase;
  color: #221007;
  font-size: 15px;
  font-weight: bold;
  padding: 12px 12px;
  border: none;
  border-radius: 4px;
  background-color: #ffedd8;
  :focus {
  border: 2px solid #221007;
  }
  margin-right: 20px;
  margin-top: 20px;
`;

export const Table = style.table`
  margin-top: 20px;
  overflow-x:auto;
  width: 100%;
  border-collapse: collapse;
  td {
  border: 1px solid #ddd;
  padding: 8px;
  }
  th {
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #d4a276;
  color: #221007;
  font-weight: bold;
  text-align: center;
  }
  tr{
    text-align: center;
  :nth-child(even){background-color: #f3d5b5;}
  :hover {
    background-color: #8b5e34;
    color: white;
    }
  }
`;
