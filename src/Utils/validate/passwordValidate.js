import {
  capitalChar,
  numberChar,
  simpleChar,
  symbolChar,
} from "./validateChar";

const passCharValidateFunction = (password = [], checkCharSet = []) => {
  let state = false;
  password.forEach((passChar) =>
    checkCharSet.forEach((checkChar) => {
      if (passChar === checkChar) {
        if (!state) {
          state = true;
        }
      }
    })
  );

  return state;
};

let Enteredpassword;

const passwordValidate = (data, errorMsg, error, submit) => {
  const password = String(data).split("");

  Enteredpassword = data;

  if (password.length > 8) {
    // PASSWORD VALIDATION SETUP
    const tempErrorMsg = [];
    const simpalCharState = passCharValidateFunction(password, simpleChar);
    const capitalCharState = passCharValidateFunction(password, capitalChar);
    const numberCharState = passCharValidateFunction(password, numberChar);
    const symbolCharState = passCharValidateFunction(password, symbolChar);

    if (!simpalCharState) {
      tempErrorMsg.push("Password must be at least 1 simpal charactor");
    }
    if (!capitalCharState) {
      tempErrorMsg.push("Password must be at least 1 capital charactor");
    }
    if (!numberCharState) {
      tempErrorMsg.push("Password must be at least 1 number");
    }
    if (!symbolCharState) {
      tempErrorMsg.push("Password must be at least 1 symbol");
    }

    if (tempErrorMsg.length > 0) {
      error(true);
      submit(false);
      errorMsg(tempErrorMsg);
    }
  } else {
    error(true);
    submit(false);
    errorMsg(["Password must be at least 8 charactors long."]);
  }
};

export const confirmPasswordValidate = (data, errorMsg, error, submit) => {
  if (data !== Enteredpassword) {
    error(true);
    submit(false);
    errorMsg(["Password not matched"]);
  }
};

export default passwordValidate;
