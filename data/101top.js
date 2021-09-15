const blockchainStartups = Array.from(
  document.querySelectorAll(".has-huge-font-size span strong")
).map(startup => startup.innerText);

console.log(blockchainStartups);

let listOfblockchainStartups = "";

for (let i = 0; i < blockchainStartups.length; i++) {
  listOfblockchainStartups = `${listOfblockchainStartups} '${blockchainStartups[i]}' OR`;
}

listOfblockchainStartups = listOfblockchainStartups.slice(0, -3);

localStorage.setItem(
  "blockchain-startups-boolean-search",
  JSON.stringify(listOfblockchainStartups)
);
