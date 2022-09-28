import { ResponsiveRadar } from '@nivo/radar'

export default function RadarChart(props) {
    const { tasteData } = props;

    return(
    <div style={{ width: "650px", height: "400px", margin: "0 auto" }}>
        <ResponsiveRadar
            data={tasteData}
            keys={[ "전통주" ]}
            indexBy="taste"
            maxValue="5"
            valueFormat=">-.2f"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            borderColor={{ from: 'color' }}
            gridLabelOffset={36}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            colors={{ scheme: 'nivo' }}
            blendMode="multiply"
            motionConfig="wobbly"
            fillOpacity="1"
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    </div>
    )
    }