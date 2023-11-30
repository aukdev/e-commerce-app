export const currencyDisplay = (number = 0) => {
  const fixedNum = number.toFixed(2).split("");
  let output;

  if (fixedNum.length <= 6) {
    output = fixedNum.join("");
  } else if (fixedNum.length < 10) {
    const d = fixedNum.length - 6;
    output = `${fixedNum.slice(0, d).join("")},${fixedNum.slice(d).join("")}`;
  } else if (fixedNum.length >= 10) {
    const d = fixedNum.length - 6;
    const s = d - 3;
    output = `${fixedNum.slice(0, s).join("")},${fixedNum
      .slice(s, d)
      .join("")},${fixedNum.slice(d).join("")}`;
  }
  return output;
};
