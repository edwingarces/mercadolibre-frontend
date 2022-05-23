export const formatNumber = (number: string) => number.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const formatCurrency = (value: number) => {
  let valueToFormat = '';
  if (typeof value === 'number') {
    valueToFormat = value.toString(10);
  }
  if (valueToFormat.indexOf('.') >= 0) {
    // check for decimal
    const decimalPos = valueToFormat.indexOf('.');

    // split number by decimal point
    let leftSide = valueToFormat.substring(0, decimalPos);
    let rightSide = valueToFormat.substring(decimalPos);

    // add commas to left side of number
    leftSide = formatNumber(leftSide);

    // validate right side
    rightSide = formatNumber(rightSide);

    // Limit decimal to only 2 digits
    rightSide = rightSide.substring(0, 2);

    // join number by .
    valueToFormat = `$${leftSide}.${rightSide}`;
  } else {
    valueToFormat = formatNumber(valueToFormat);
    valueToFormat = `$${valueToFormat}.00`;
  }

  // send updated string to input
  return valueToFormat;
};
