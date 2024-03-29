import { ResponsiveBar } from '@nivo/bar'
import style from 'styles/components/_barChart.module.scss'

export interface BarData {
  data: any
}

const BarChart = ({ data }: BarData) => (
  <div className={style.barChart}>
    <ResponsiveBar
      data={data}
      theme={{ textColor: style.colorText, background: style.colorBackground }}
      keys={['burger']} // Activities completed
      indexBy="country" //Chapter
      margin={{ top: 60, right: 30, bottom: 100, left: 30 }}
      padding={0.3}
      colors={{ scheme: 'accent' }}
      layout="vertical" //maybe horizontal?
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 90,
        legend: 'Actvities completed', //TODO dynamic
        legendPosition: 'middle',
        legendOffset: 80,
      }}
      axisLeft={{
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Chapter', //TODO dynamic
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'top-left',
          direction: 'column',
          justify: false,
          translateX: 0,
          translateY: -40,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
      }}
    />
  </div>
)

export default BarChart
