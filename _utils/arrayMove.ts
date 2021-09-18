export const arrayMove = (array: any[], from: number, to: number) => {
  if (to === from) {
    return array;
  }

  const target = array[from];
  const increment = to < from ? -1 : 1;

  for (var k = from; k != to; k += increment) {
    array[k] = array[k + increment];
  }

  array[to] = target;

  return array;
};
