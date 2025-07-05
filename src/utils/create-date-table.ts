const createDateTable = (from: Date, to: Date): string[] => {
  const dates: string[] = []
  const current = new Date(from)
  while (current <= to) {
    // Use toISOString and slice to get yyyy-mm-dd
    dates.push(current.toISOString().slice(0, 10))
    current.setDate(current.getDate() + 1)
  }
  return dates
}

export { createDateTable }
