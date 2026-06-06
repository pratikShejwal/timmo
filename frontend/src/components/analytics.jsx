import React, { Suspense, useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/shadcn/chart"

import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts"

import Box from "../components/analytics/box"

const Heatmap = React.lazy(() => import("../components/analytics/heatmap"))












function Analytics() {

 // get stopwatch data
  const [stopwatchData, setStopwatchData] = useState(0)
  const [countdownData, setCountdownData] = useState(0)
  const [chartData, setChartData] = useState([]);
  const [heatmapData, setHeatmapData] = useState([]);


  const getStopwatchData = async () => {
    try{
      const res = await axios.get("api/stopwatch/stats")
      setStopwatchData(res.data.stats)
      setChartData(
        res.data.chartData.map((item) => ({
          date: new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          time: item.time, 
        }))
      );
      
      return res.data.heatmapData || res.data.chartData;
    } catch(err){
      console.log("error while getting stopwacth data: ", err);
      return [];
    }
  }
  const getCountdownData = async () => {
    try{
      const res = await axios.get("api/countdown/stats")
      setCountdownData(res.data.stats)
      
      return res.data.heatmapData || res.data.chartData;
    } catch(err){
      console.log("error while getting countdown data: ", err);
      return [];
    }
  }
 
  useEffect(() => {
    const fetchHeatmapData = async () => {
      const stopwatchChartData = await getStopwatchData();
      const countdownChartData = await getCountdownData();

      // Combine both datasets by date
      const combinedMap = new Map();

      stopwatchChartData.forEach(item => {
        combinedMap.set(item.date, {
          date: item.date,
          value: item.time
        });
      });

      countdownChartData.forEach(item => {
        if (combinedMap.has(item.date)) {
          combinedMap.get(item.date).value += item.time;
        } else {
          combinedMap.set(item.date, {
            date: item.date,
            value: item.time
          });
        }
      });

      const finalData = Array.from(combinedMap.values());
     
      setHeatmapData(finalData);
    };

    fetchHeatmapData();
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours} h ${minutes} m ${secs} s`;
    }

    if (minutes > 0) {
      return `${minutes} m ${secs} s`;
    }

    return `${secs} s`;
  };




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
            time: formatTime(stopwatchData.totalTime + countdownData.totalTime)
          }} />

          <Box boxData={{
            title: "Today's time",
            time: formatTime(stopwatchData.todayTime + countdownData.todayTime)
          }} />

          <Box boxData={{
            title: "Current streak",
            time: "14 days"
          }} />

          <Box boxData={{
            title: "Average time",
            time: formatTime(stopwatchData.averageTime + countdownData.averageTime)
          }} />
        </div>

        

        <div className='min-w-0 overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-[0_24px_80px_rgba(0,0,0,0.28)]'>
          <div className='flex flex-col justify-between gap-3 border-b border-white/10 bg-neutral-800/50 px-5 py-4 sm:flex-row sm:items-center'>
            <div>
              <p className='font-poppins text-lg font-semibold text-white'>Time tracked</p>
              <p className='mt-1 font-poppins text-sm text-neutral-500'>Monthly focus time</p>
            </div>
            <div className='flex items-center gap-2 font-poppins text-xs uppercase tracking-[0.18em] text-neutral-500'>
              <span className='h-2 w-2 rounded-full bg-green-500 ' />
              Time
            </div>
          </div>

          <ChartContainer
            className="h-[360px] min-h-[360px] w-full min-w-0 aspect-auto p-4 sm:h-[420px] sm:min-h-[420px]  sm:p-6"
            config={{
              value: {
                label: "Time",
                color: "rgba(255,255,255,0.92)",
              },
            }}
          >
            <BarChart data={chartData} margin={{ top: 20, right: 14, left: 10, bottom: 1 }} >
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)"  />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tickMargin={12}
                stroke="rgba(255,255,255,0.35)"
              />
              <YAxis
                tickFormatter={(value) => {
                  const hours = Math.floor(value / 3600);
                  const mins = Math.floor((value % 3600) / 60);

                  if (hours > 0) return `${hours}h`;
                  if (mins > 0) return `${mins}m`;
                  return `${value}s`;
                }}
                axisLine={false}
                tickLine={false}
                tickMargin={8}
                width={30}
                stroke="rgba(255,255,255,0.35)"
              />
              <ChartTooltip
                cursor={{ fill: "rgba(255,255,255,0.06)" }}
                content={<ChartTooltipContent className="border border-white/13 bg-neutral-900 text-white" />}
                
              />
              <Bar
                dataKey="time"
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
          <Heatmap data={heatmapData} formatTime={formatTime} />
        </Suspense>

      </div>

    </div>
  )
}

export default Analytics
