import { expect, test } from "bun:test";

function url_parser(url: string) {
  let urlObj = new URL(url);
  let q = urlObj.search;
  let regex = /=(.*)/;
  console.log(q.match(regex));
}

test("url_parser", () => {
  let s1 = "https://hello.com/products?query=item";
  let item = url_parser(s1);
});
