const formatCurrency = (
  value: number,
  locale: string = 'en-US',
  currency: string = 'USD',
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value)
}

export { formatCurrency }
