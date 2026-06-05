import React from 'react'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/shadcn/chart"

import { BarChart, Bar, XAxis } from "recharts"

import Box from "../components/analytics/box"

const data = [
  { month: "Jan", value: 340 },
  { month: "Feb", value: 200 },
  { month: "Jan", value: 410 },
  { month: "Feb", value: 550 },
  { month: "Jan", value: 390 },
  { month: "Feb", value: 265 },
  { month: "Jan", value: 410 },
  { month: "Feb", value: 550 },
  { month: "Jan", value: 390 },
  { month: "Feb", value: 265 },
  { month: "Jan", value: 340 },
  { month: "Feb", value: 450 },
]





function Analytics() {
  return (
    <div className='bg-neutral-900 p-10  h-screen w-screen overflow-y-scroll '>


      <div className='flex flex-row gap-5 '>
        
        <Box boxData={{
          title: "Total time",
          time: "3.32 Hours"
        }} />

        <Box boxData={{
          title: "Today's time",
          time: "23 min"
        }} />

        <Box boxData={{
          title: "Current streak",
          time: "14 days"
        }} />

        <Box boxData={{
          title: "Tasks completed",
          time: "3/8"
        }} />

      </div>


      <ChartContainer
        className="h-[360px] w-295 rounded-lg border-2  border-neutral-700/50 pb-7 overflow-hidden mt-2"
        config={{
          value: {
            label: "Time",
            color: "var(--chart-1)",
          },
        }}
      >
        <div className='text-xl font-poppins border-2 border-b-neutral-700/50 border-x-0 border-t-0  w-screen h-12 z-12 flex items-center pl-3  bg-neutral-800/50'>
          Time
        </div>

        <BarChart data={data} className='p-3 '>
          <XAxis dataKey="month" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--color-value)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ChartContainer>



    </div>
  )
}

export default Analytics