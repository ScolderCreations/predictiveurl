const predictiveurlconsts = {
  prefixes: ['https://', 'http://', 'about:', 'chrome:', 'ws://', 'wss://'],
};
function containsPrefix() {
  return new RegExp(
    predictiveurlconsts.prefixes
      .map(function (a) {
        return a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      })
      .join('{1,}|') + '{1,}'
  );
}
function secure(a) {
  return a.replace("http://", "https://").replace("ws://", "wss://");
}
function addPrefix(a, b, c) {
  try {
    var d = a;
  } catch {
    throw new Error('addPrefix expected at least one value');
  }
  if (c) {
    const a = containsPrefix();
    if (a.test(d)) return d;
  }
  if (b || (b = 0))
    try {
      d = predictiveurlconsts.prefixes[b] + d;
    } catch (a) {
      throw new Error('request method cannot be added because of error:' + a);
    }
  else
    try {
      d = predictiveurlconsts.prefixes[1] + d;
    } catch (a) {
      throw new Error('error occured while adding prefix:' + a);
    }
  return d;
}
export {addPrefix, containsPrefix};

