function getAllCryptoCompanies() {
  const cryptoCurrencies = Array.from(
    document.querySelectorAll(".crypto_250_company_name")
  );

  const listOfCompanies = cryptoCurrencies.map(crypto => {
    return crypto.innerHTML;
  });

  let cryptoCompanyBoolean = "";

  for (let i = 0; i < listOfCompanies.length; i++) {
    cryptoCompanyBoolean = `${cryptoCompanyBoolean} '${listOfCompanies[i]}' OR`;
  }

  cryptoCompanyBoolean = cryptoCompanyBoolean.slice(0, -3);

  localStorage.setItem("boolean-search", JSON.stringify(cryptoCompanyBoolean));
}

getAllCryptoCompanies();
