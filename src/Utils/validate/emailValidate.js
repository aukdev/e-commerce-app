import { emailDomain, numberChar, simpleChar } from "./validateChar";

const emailValidate = (data, errorMsg, error, submit) => {
  // EMAIL SETUP FOR VALIDATION
  const dataForCheck = String(data).split("@");

  if (dataForCheck.length === 2) {
    // ERROR MSG SETUP
    const tempErrorMsg = [];

    // USERNAME VALIDATE SETUP
    const usernameValidChar = [];
    let finalUsernameValidResult = true;

    const validChar = simpleChar.concat(numberChar);
    const username = dataForCheck[0].split("");

    // USERNAME VALIDATION PROCESS
    username.forEach((char) => {
      let valid = false;
      validChar.forEach((vChar) => {
        if (char === vChar) {
          valid = true;
        }
      });
      usernameValidChar.push(valid);
    });

    // SET FINAL RESULT FOR USERNAME VALIDATION
    usernameValidChar.forEach((ele) => {
      if (!ele) {
        if (finalUsernameValidResult) {
          finalUsernameValidResult = false;
        }
      }
    });

    if (!finalUsernameValidResult) {
      tempErrorMsg.push("username is not valid");
    }

    // EMAIL VALIDATION SETUP
    let emailDomainValid = false;

    // EMAIL VALIDATION PROCESS
    emailDomain.forEach((domain) => {
      if (domain === dataForCheck[1]) {
        if (!emailDomainValid) {
          emailDomainValid = true;
        }
      }
    });

    // SET FINAL RESULT FOR EMAIL VALIDATION
    if (!emailDomainValid) {
      tempErrorMsg.push("domain is not valid");
    }

    // SET FINAL ERROR RESULT TO THE STATE-SETTER-FUNCTION
    if (tempErrorMsg.length > 0) {
      error(true);
      submit(false);
    }
    errorMsg(tempErrorMsg);

    // console.log(finalUsernameValidResult, emailDomainValid);
  } else {
    error(true);
    submit(false);
    errorMsg(["Not a Valid Email"]);
  }
};

// amilaupul@gmail.com

export default emailValidate;
