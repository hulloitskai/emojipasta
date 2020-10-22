const select = <T, K extends string | number | symbol = string>(
  key: K,
  options: Record<K, T> & { default?: T }
): T | undefined => {
  if (key in options) {
    return options[key];
  }
  return options["default"];
};

export default select;
