export function getValueByProp<T extends string>(
  prop: T,
  obj: Record<T, string>,
) {
  return obj[prop];
}
