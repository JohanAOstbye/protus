import { ResponsiveRadar } from '@nivo/radar'
import style from 'styles/components/_radarChart.module.scss'
import styles from '/styles/utils/_colors.scss'

export interface RadarData {
  data: any
}

const RadarChart = ({ data }: RadarData) => (
  <div className={style.radarChart}>
    <ResponsiveRadar
      theme={{ textColor: style.colorText, background: style.colorBackground }}
      data={data}
      keys={['chardonay']} // activities completed - må matche variabel navn i data
      indexBy="taste" //chapter
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      dotSize={10}
      dotBorderWidth={2}
      colors={{ scheme: 'accent' }}
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: 'white',
          symbolSize: 12,
        },
      ]}
    />
  </div>
)
export default RadarChart
