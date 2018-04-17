export default function (prefix, keys) {
  let actions = {};

  keys.forEach(key => {
    actions[key] = `${prefix}/${key}`;
  });

  return actions;
}
