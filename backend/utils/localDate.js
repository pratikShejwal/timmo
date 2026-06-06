// YYYY-MM-DD in server local timezone (not UTC)
export const localDateKey = (date = new Date()) => {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, "0")
    const d = String(date.getDate()).padStart(2, "0")
    return `${y}-${m}-${d}`
}

// Build { date, time } for the last N days (inclusive of today)
export const buildDailySeries = (days, dateMap) => {
    const series = []
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        const dateStr = localDateKey(date)
        series.push({
            date: dateStr,
            time: dateMap.get(dateStr) || 0
        })
    }
    return series
}