

global.isInt = (n) => {
    return Number(n) === n && n % 1 === 0;
}
  
global.isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
}
  