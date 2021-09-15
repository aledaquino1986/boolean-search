const table = Array.from(document.querySelectorAll(".row-hover tr"));

const listOf100Fintech = table.map(item => {
  return item.cells[0].innerText;
});

let listOf100FintechBoolean = "";

for (let i = 0; i < listOf100Fintech.length; i++) {
  listOf100FintechBoolean = `${listOf100FintechBoolean} '${listOf100Fintech[i]}' OR`;
}

listOf100FintechBoolean = listOf100FintechBoolean.slice(0, -3);

localStorage.setItem(
  "fintech-boolean-search",
  JSON.stringify(listOf100FintechBoolean)
);

console.log(listOf100FintechBoolean);
