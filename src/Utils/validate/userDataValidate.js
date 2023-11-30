import { capitalChar, numberChar, simpleChar } from "./validateChar";

const userDataValidate = (data, errorMsg, error, submit, type) => {
  const userData = String(data).split("");

  const tempErrorMsg = [];

  const userDataValidChar = [];
  let finalUserDataValidResult = true;

  let validChar = simpleChar.concat([...capitalChar, " "]);

  if (type === "address") {
    validChar = validChar.concat([...numberChar, ",", ".", "/", "-", "(", ")"]);
  } else if (type === "phone") {
    validChar = numberChar.concat(["-", " ", "+"]);
  }

  userData.forEach((char) => {
    let valid = false;
    validChar.forEach((vChar) => {
      if (char === vChar) {
        valid = true;
      }
    });
    userDataValidChar.push(valid);
  });

  userDataValidChar.forEach((ele) => {
    if (!ele) {
      if (finalUserDataValidResult) {
        finalUserDataValidResult = false;
      }
    }
  });

  if (!finalUserDataValidResult) {
    tempErrorMsg.push(`${type} is not valid`);
  }

  if (tempErrorMsg.length > 0) {
    error(true);
    submit(false);
    errorMsg(tempErrorMsg);
  }
};

export default userDataValidate;
