const generateNumbers = (arraySize = 12, maxValue = 20): number[] => {
  const numbers: number[] = [];

  for (let i = 0; i < arraySize; i++) {
    const randomNum = Math.floor(Math.random() * (maxValue + 1));
    numbers.push(randomNum);
  }

  return numbers;
};

export default generateNumbers;
