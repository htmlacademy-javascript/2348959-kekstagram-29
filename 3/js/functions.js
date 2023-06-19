//функция для проверки длины строки

const checkStringLength = (string, length) => string.length <= length;
checkStringLength ('строка', 20);



//функция для проверки является ли строка палиндромом

function isPalindrom(rndmString) {
  const string = rndmString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i -1)) {
      return false;
    }
  }
  return true;
}

// console.log(isPalindrom('камаз'));
// console.log(isPalindrom('tenet'));
// console.log(isPalindrom('Аргентина манит негра'));
