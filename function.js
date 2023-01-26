// const priceKrw =
//   new Intl.NumberFormat("kr-KO", { style: "currency", currency: "KRW" }).format(
//     price
//   ) + "원";
// let tax = (price / 11) * 10;
// tax = Math.round(tax);
// tax = new Intl.NumberFormat("kr-KO", {
//   style: "currency",
//   currency: "KRW",
// }).format(tax);
// tax = tax + "원";
// let originalPrice = price / 11;
// originalPrice = Math.round(originalPrice);
// originalPrice = new Intl.NumberFormat("kr-KO", {
//   style: "currency",
//   currency: "KRW",
// }).format(originalPrice);
// originalPrice = originalPrice + "원";

const currencyBycountry = {
  en: {
    format: "en-US",
    currency: "USD",
  },
  kr: {
    format: "kr-KD",
    currency: "KRW",
  },
};

const priceToKrwFormat = (price, country) => {
  const countryCode = country || "kr";
  const cur = currencyBycountry[countryCode];
  const priceKrw = new Intl.NumberFormat(cur.format, {
    style: "currency",
    currency: cur.currency,
  }).format(price);

  let tax = (price / 11) * 10;
  tax = Math.round(tax);
  tax = new Intl.NumberFormat(cur.format, {
    style: "currency",
    currency: cur.currency,
  }).format(tax);

  let originalPrice = price / 11;
  originalPrice = Math.round(originalPrice);
  originalPrice = new Intl.NumberFormat(cur.format, {
    style: "currency",
    currency: cur.currency,
  }).format(originalPrice);

  return {
    priceKrw,
    tax,
    originalPrice,
  };
};

const price = 1000;
console.log(priceToKrwFormat(price));
console.log(priceToKrwFormat(52800000));
console.log(priceToKrwFormat(1580000, "en"));
console.log(priceToKrwFormat(1000000, "en"));
