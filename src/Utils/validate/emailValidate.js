import { emailDomain, numberChar, simpleChar } from "./validateChar";

const emailValidate = (data, errorMsg) => {
  errorMsg([]);
  const dataForCheck = String(data).split("@");

  if (dataForCheck.length === 2) {
    const tempErrorMsg = [];

    const unValidChar = [];
    let finalValidResult = true;

    const validChar = simpleChar.concat(numberChar);
    const username = dataForCheck[0].split("");

    username.forEach((char) => {
      let valid = false;
      validChar.forEach((vChar) => {
        if (char === vChar) {
          valid = true;
        }
      });
      unValidChar.push(valid);
    });

    unValidChar.forEach((ele) => {
      if (!ele) {
        if (finalValidResult) {
          finalValidResult = false;
        }
      }
    });

    if (!finalValidResult) {
      tempErrorMsg.push("username is not valid");
    }

    let emailDomainValid = false;

    emailDomain.forEach((domain) => {
      if (domain === dataForCheck[1]) {
        if (!emailDomainValid) {
          emailDomainValid = true;
        }
      }
    });

    if (!emailDomainValid) {
      tempErrorMsg.push("domain is not valid");
    }

    errorMsg(tempErrorMsg);

    console.log(finalValidResult, emailDomainValid);
  } else {
    errorMsg(["Not a Valid Email"]);
  }
};

// amilaupul@gmail.com

export default emailValidate;
