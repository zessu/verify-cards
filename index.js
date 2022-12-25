function VerifyCardNumber(cardNumber) {
  const numArray = cardNumber.split("");
  const startingDigit = numArray[0];
  if (startingDigit == 4) {
    VerifyVisa(numArray);
  } else if (startingDigit == 5) {
    VerifyMasterCard(numArray);
  } else {
    console.log("cannot verify this for now");
  }
}
function VerifyVisa(numArray) {
  let substitutionArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (index = 0; index < numArray.length; index++) {
    if (parseInt(index % 2) === 0) {
      let curr = numArray[index];
      if (curr * 2 > 9) {
        let productValue = curr * 2;
        let resultingArray = `${productValue}`.split("");
        substitutionArray[index] =
          parseInt(resultingArray[0]) + parseInt(resultingArray[1]);
      } else {
        substitutionArray[index] = curr * 2;
      }
    }
  }

  for (index = 0; index < numArray.length; index++) {
    if (parseInt(index % 2) === 0) {
      numArray[index] = substitutionArray[index];
    }
  }

  console.log(numArray);

  const sumValue = numArray.reduce((result, v) => {
    return parseInt(result) + parseInt(v);
  }, 0);

  console.log(`sumvalue is ${sumValue}`);

  if (parseInt(sumValue) % 10 === 0) {
    console.log("this is a valid visa");
  } else {
    console.log("this visa is invalid");
  }
}

function VerifyMasterCard(cardNumber) {}

VerifyCardNumber("xxxx-xxxx-xxxx-xxxx");
