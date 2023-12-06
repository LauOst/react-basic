import { memo } from 'react'
import ApexChart from 'react-apexcharts'
import type { Props as ApexChartProps } from 'react-apexcharts'

const Chart = (props: ApexChartProps) => {
  return <ApexChart {...props}></ApexChart>
}

export default memo(Chart)
