const predictiveurlconsts = new Object("prefixes": new Array("https://",
                           "http://",
                           "about:",
                           "chrome:"
                           "ws://"
                           "wss://"
                           ));

function addPrefix(string, method, checkForPrefix) {
  try {var nstring = string} catch {throw new Error("addPrefix expected at least one value")}
  if (checkForPrefix) {
    for item in predictiveurlconsts.prefixes {
      if string.includes(item) {
        return nstring
      }
    }
  }
  if (method) {
    try {nstring = predictiveurlconsts.prefixes[method] + nstring} catch(e) {throw new Error("request method cannot be added because of error:" + e)}
  }
}
