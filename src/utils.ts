function omit<T>(obj: T, props: string[]): T {
  obj = { ...obj };
  props.forEach((prop) => delete obj[prop as keyof T]);
  return obj;
}

function omitBy<T>(obj: T, check: Function): T {
  obj = { ...obj };
  Object.entries(obj).forEach(
    ([key, value]) => check(value) && delete obj[key as keyof T]
  );
  return obj;
}

export { omit, omitBy };
