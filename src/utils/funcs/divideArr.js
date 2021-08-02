export const divideArr = (arr, count) => {
  const iterationCount = Math.ceil(arr.length / count);
  const dividedArr = [];

  for (let i = 0; i < iterationCount * count; i += count) {
    const arrFragment = arr.slice(i, i + count);
    dividedArr.push({ id: i, fragment: arrFragment });
  }

  return dividedArr;
};
