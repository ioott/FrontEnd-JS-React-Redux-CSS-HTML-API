import style from 'styled-components';

export const Div = style.div`
  justify-content: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const Header = style.header`
  display: flex;
  color: white;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
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
  @media screen and (min-width:1100px){
    color: white;
    height: 72px;
    font-size: 12px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px 20px 30px;
    background-color: #8b5e34;
    line-height: 25px;
  }
  @media screen and (min-width:769px) and (max-width: 1099px){
    color: white;
    height: 122px;
    font-size: 12px;
    justify-content: space-around;
    align-items: center;
    padding: 10px 30px;
    background-color: #8b5e34;
    line-height: 15px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px){
    color: white;
    height: 150px;
    font-size: 12px;
    justify-content: space-around;
    align-items: center;
    padding: 10px 30px;
    background-color: #8b5e34;
    line-height: 15px;
    flex-wrap: wrap;
  }
`;

export const Select = style.select`
  @media screen and (min-width:1100px){
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  }
  @media screen and (min-width:769px) and (max-width: 1099px){
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    size: 5;
    padding: 5px 5px;
    border: none;
    border-radius: 4px;
    background-color: #ffedd8;
    :focus {
    border: 2px solid #221007;
    }
    margin-right: 10px;
  }
  @media screen and (max-width: 768px){
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    size: 5;
    padding: 5px 5px;
    border: none;
    border-radius: 4px;
    background-color: #ffedd8;
    :focus {
    border: 2px solid #221007;
    }
    margin-right: 10px;
  }
`;

export const Input = style.input`
  @media screen and (min-width:1100px){
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  }
  @media screen and (min-width:769px) and (max-width: 1099px){
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    padding: 6px 5px;
    border: none;
    border-radius: 4px;
    background-color: #ffedd8;
    :focus {
    border: 2px solid #221007;
    }
    margin-right: 10px;
  }
  @media screen and (max-width: 768px){
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    padding: 6px 5px;
    border: none;
    border-radius: 4px;
    background-color: #ffedd8;
    :focus {
    border: 2px solid #221007;
    }
    margin-right: 10px;
  }
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
  @media screen and (min-width:1100px){
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
  }
  @media screen and (min-width:769px) and (max-width: 1099px){
    text-transform: uppercase;
    color: #221007;
    font-size: 13px;
    font-weight: bold;
    padding: 12px 12px;
    border: none;
    border-radius: 4px;
    background-color: #ffedd8;
    :focus {
    border: 2px solid #221007;
    }
    margin-top: 8px;
  }
  @media screen and (max-width: 768px){
    text-transform: uppercase;
    color: #221007;
    font-size: 13px;
    font-weight: bold;
    padding: 12px 12px;
    border: none;
    border-radius: 4px;
    background-color: #ffedd8;
    :focus {
    border: 2px solid #221007;
    }
    margin-top: 8px;
  }
`;

export const DivTable = style.div`
  @media screen and (max-width: 1099px){
    overflow-x: scroll;
  }
`;

export const Table = style.table`
  @media screen and (min-width:1100px){
    margin-top: 20px;
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
  }
  @media screen and (min-width:769px) and (max-width: 1099px){
    margin-top: 20px;
    width: 100%;
    border-collapse: collapse;
    td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      border: 1px solid #ddd;
      padding: 12px 8px;
      background-color: #d4a276;
      color: #221007;
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
  }
  @media screen and (max-width: 768px){
    margin-top: 20px;
    width: 100%;
    border-collapse: collapse;
    td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      border: 1px solid #ddd;
      padding: 12px 8px;
      background-color: #d4a276;
      color: #221007;
      text-align: center;
      font-size: 13px;
    }
    tr{
      text-align: center;
      :nth-child(even){background-color: #f3d5b5;}
      :hover {
        background-color: #8b5e34;
        color: white;
        }
      }
      font-size: 13px;

  }
  }
`;
export const ExitButton = style.button`
  background-color: #221007;
  border: 1.5px solid #f3d5b5;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  border-radius: 4px;
  padding: 12px 12px;
  color: white;
  :focus {
  border: 1px solid #221007;
`;
