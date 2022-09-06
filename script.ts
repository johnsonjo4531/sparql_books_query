import fs from "node:fs/promises";
const url = new URL(`https://dbpedia.org/sparql`);
url.search = new URLSearchParams({
  query: await fs.readFile(`./query.sparql`, "utf8"),
}).toString();
await fetch(url, {
  headers: {
    Accept: "application/sparql-results+json",
  },
})
  .then((x) => {
    if (x.ok) {
      return x.json();
    }
    throw new Error(`${x.status}: ${x.statusText}`);
  })
  .then((x) => {
    console.log(JSON.stringify(x.results, null, 2));
  });
