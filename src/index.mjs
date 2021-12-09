const predictiveurlconsts = {"prefixes": new Array("https://",
                           "http://",
                           "about:",
                           "chrome:",
                           "ws://",
                           "wss://"
                           )};
function containsPrefix() {
  return new RegExp(
    predictiveurlconsts.prefixes
    .map(function (s) {return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');})
    .join('{1,}|') + '{1,}'
  );
}


function addPrefix(string, method, checkForPrefix) {
  try {var nstring = string} catch {throw new Error("addPrefix expected at least one value")}
  if (checkForPrefix) {
    const contemp = containsPrefix()
    if (contemp.test(nstring)) {
      return nstring
    }
  }
  if (method || (method = 0)) {
    try {nstring = predictiveurlconsts.prefixes[method] + nstring} catch(e) {throw new Error("request method cannot be added because of error:" + e)}
  } else {
    try {nstring = predictiveurlconsts.prefixes[1] + nstring} catch(e) {throw new Error("error occured while adding prefix:" + e)}
  }
  return nstring
}

export { addPrefix, containsPrefix }