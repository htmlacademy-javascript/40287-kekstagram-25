//Функция для проверки максимальной длины строки

const checkMaxLength = function (string, maxLength) {
  if (string <= maxLength) {
    return true;
  }
  return false;
};
checkMaxLength(0, 140);

//Функция, возвращающая случайное целое число из переданного диапазона включительно

const getPositiveInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

};
getPositiveInteger(1,5);
