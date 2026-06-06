import React, { Suspense } from 'react'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/shadcn/chart"

import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts"

import Box from "../components/analytics/box"

const Heatmap = React.lazy(() => import("../components/analytics/heatmap"))

const data = [
  { month: "Jan", value: 340 },
  { month: "Feb", value: 200 },
  { month: "mar", value: 410 },
  { month: "Apr", value: 550 },
  { month: "May", value: 390 },
  { month: "Jun", value: 265 },
  { month: "Jul", value: 410 },
  { month: "Aug", value: 550 },
  { month: "Sep", value: 390 },
  { month: "Oct", value: 265 },
  { month: "Nov", value: 340 },
  { month: "Dec", value: 450 },
]





function Analytics() {
  return (
    <div className='h-screen w-screen min-w-0 overflow-y-auto bg-neutral-900 px-5 py-6 text-white sm:px-8 lg:px-10'
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "gray transparent",
      }} >

      <div className='mx-auto flex w-full max-w-7xl flex-col gap-5'>


        <div className='flex flex-col gap-2 border-b border-white/10 pb-5'>
          <p className='font-poppins text-sm  tracking-[0.1em] text-neutral-500'>Analytics</p>
          <div className='flex flex-col justify-between gap-3 sm:flex-row sm:items-end'>
            <h1 className='font-poppins text-3xl font-semibold tracking-normal text-white sm:text-4xl'>
              Focus overview
            </h1>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
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
            title: "Average time",
            time: "38 min"
          }} />
        </div>

        

        <div className='min-w-0 overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-[0_24px_80px_rgba(0,0,0,0.28)]'>
          <div className='flex flex-col justify-between gap-3 border-b border-white/10 bg-neutral-800/50 px-5 py-4 sm:flex-row sm:items-center'>
            <div>
              <p className='font-poppins text-lg font-semibold text-white'>Time tracked</p>
              <p className='mt-1 font-poppins text-sm text-neutral-500'>Monthly focus minutes</p>
            </div>
            <div className='flex items-center gap-2 font-poppins text-xs uppercase tracking-[0.18em] text-neutral-500'>
              <span className='h-2 w-2 rounded-full bg-green-500 ' />
              Time
            </div>
          </div>

          <ChartContainer
            className="h-[360px] min-h-[360px] w-full min-w-0 aspect-auto p-4 sm:h-[420px] sm:min-h-[420px] sm:p-6"
            config={{
              value: {
                label: "Time",
                color: "rgba(255,255,255,0.92)",
              },
            }}
          >
            <BarChart data={data} margin={{ top: 20, right: 14, left: 0, bottom: 8 }}>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tickMargin={12}
                stroke="rgba(255,255,255,0.35)"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                width={34}
                stroke="rgba(255,255,255,0.35)"
              />
              <ChartTooltip
                cursor={{ fill: "rgba(255,255,255,0.06)" }}
                content={<ChartTooltipContent className="border border-white/13 bg-neutral-900 text-white" />}
              />
              <Bar
                dataKey="value"
                fill="var(--color-value)"
                radius={[7, 7, 0, 0]}
                maxBarSize={46}
              />
            </BarChart>
          </ChartContainer>
        </div>

        <Suspense
          fallback={
            <div className='h-56 rounded-lg border border-white/10 bg-neutral-900/80 animate-pulse'  />
          }
        >
          <Heatmap />
        </Suspense>

      </div>

    </div>
  )
}

export default Analytics
