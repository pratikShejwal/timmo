import * as React from "react"
import { HeatmapCalendar } from "@/components/heatmap-calendar"

function makeTrainingData(days = 365) {
  // Example: minutes trained per day (0..90)
  return Array.from({ length: days }).map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - i)

    // deterministic pattern for demos
    const minutes =
      i % 9 === 0 ? 0 : (i * 7) % 75 // 0..74
    return { date: d.toISOString().slice(0, 10), value: minutes }
  })
}

export default function ExampleFitness() {
  const data = React.useMemo(() => makeTrainingData(365), [])

  return (
    <HeatmapCalendar
      title="Streak"
      data={data}
      axisLabels
      legend={{ lessText: "Less", moreText: "More", placement: "bottom" }}
      renderTooltip={(cell) => (
        <div>
          <div className="font-medium">{cell.value} minutes</div>
          <div className="text-muted-foreground">{cell.label}</div>
        </div>
      )}
    />
  )
}
