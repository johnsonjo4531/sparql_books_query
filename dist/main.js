import $67ZcC$nodefspromises from "node:fs/promises";


const $580a353bd368472f$var$url = new URL(`https://dbpedia.org/sparql`);
$580a353bd368472f$var$url.search = new URLSearchParams({
    query: await (0, $67ZcC$nodefspromises).readFile(`./query.sparql`, "utf8")
}).toString();
await fetch($580a353bd368472f$var$url, {
    headers: {
        Accept: "application/sparql-results+json"
    }
}).then((x)=>{
    if (x.ok) return x.json();
    throw new Error(`${x.status}: ${x.statusText}`);
}).then((x)=>{
    console.log(JSON.stringify(x.results, null, 2));
});


//# sourceMappingURL=main.js.map
