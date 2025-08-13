const price = "$120";

function extractCurrencyValue(str) {
	return Number(str.slice(1));
}

console.log(extractCurrencyValue(price));