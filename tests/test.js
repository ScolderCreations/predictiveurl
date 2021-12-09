import * as purl from "../src/index.mjs";

console.log(purl.addPrefix("example.com", false, true))

console.log(purl.addPrefix("blank", 2, true))

console.log(purl.addPrefix("http://scratch.mit.edu/", false, true))

console.log(purl.containsPrefix().test("wss://example.com"))
console.log(purl.containsPrefix().test("I CAN DO ANYTHING"))