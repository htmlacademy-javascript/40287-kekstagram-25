//Функция, возвращающая случайное целое число из переданного диапазона включительно

const getPositiveInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

};

export {getPositiveInteger};
