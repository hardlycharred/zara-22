import { Shape } from "react-zdog"

export const CatTail = ({ zPos }) => {

    return <Shape
        translate={{
            y: -100
        }}
        path={[
            { x: 0, y: 0, z: zPos },   // start
            {
                arc: [ // start next arc from last end point
                    { x: 0, y: -200, z: zPos + 200 }, // corner
                    { x: 0, y: -300, z: zPos + 100 }, // end point
                ]
            },
            {
                arc: [ // start next arc from last end point
                    { x: 0, y: -400, z: zPos - 50 }, // corner
                    { x: 0, y: -300, z: zPos - 200 }, // end point
                ]
            },
        ]}
        closed={false}
        stroke={50}
        color="hsl(var(--pf))"
    />

}