export function moneyFormat(toFormat: string | number) {
  const convertToNumber =
    typeof toFormat === "number" ? toFormat : Number(toFormat);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(convertToNumber);
}

export function dateFormat(toFormat: string | number | Date) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(toFormat));
}
