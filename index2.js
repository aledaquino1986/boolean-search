const populatePage = () => {
  const companiesParagraph = document.querySelector(".list-of-cryptocompanies");
  const fintechsParagraph = document.querySelector(".list-of-fintech");
  const blockchainCompaniesInSF = document.querySelector(
    ".list-of-startups-in-San-Francisco"
  );

  console.log(blockchainCompaniesInSF);

  companiesParagraph.innerText = JSON.parse(
    localStorage.getItem("boolean-search")
  );

  fintechsParagraph.innerText = JSON.parse(
    localStorage.getItem("fintech-boolean-search")
  );

  blockchainCompaniesInSF.innerText = JSON.parse(
    localStorage.getItem("blockchain-startups-boolean-search")
  );
};

populatePage();
