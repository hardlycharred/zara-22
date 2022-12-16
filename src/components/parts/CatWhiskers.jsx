import { Shape } from "react-zdog";

export const CatWhiskers = ({ xGap = 60, yPos = 30, zPos = 150 }) => <Shape visible={false}>

    {/* top right whisker  */}
    <Shape
        path={[
            { x: 0 + xGap, y: yPos + -10, z: zPos },   // start
            {
                arc: [ // start next arc from last end point
                    { x: 0 + xGap, y: yPos + -40, z: zPos + 15 }, // corner
                    { x: 60 + xGap, y: yPos + -30, z: zPos + 15 }, // end point
                ]
            },
        ]}
        closed={false}
        stroke={5}
        color="hsl(var(--sc))"
    />
    <Shape
        path={[
            { x: 0 + xGap, y: yPos + 0, z: zPos },   // start
            { x: 60 + xGap, y: yPos + 0, z: zPos },   // start
        ]}
        closed={false}
        stroke={5}
        color="hsl(var(--sc))"
    />
    <Shape
        path={[
            { x: 0 + xGap, y: yPos + 10, z: zPos },   // start
            {
                arc: [ // start next arc from last end point
                    { x: 0 + xGap, y: yPos + 40, z: zPos + 15 }, // corner
                    { x: 60 + xGap, y: yPos + 30, z: zPos +  15 }, // end point
                ]
            },
        ]}
        closed={false}
        stroke={5}
        color="hsl(var(--sc))"
    />

    <Shape
        path={[
            { x: 0 - xGap, y: yPos + -10, z: zPos },   // start
            {
                arc: [ // start next arc from last end point
                    { x: -0 - xGap, y: yPos + -40, z: zPos + 15 }, // corner
                    { x: -60 - xGap, y: yPos + -30, z: zPos + 15 }, // end point
                ]
            },
        ]}
        closed={false}
        stroke={5}
        color="hsl(var(--sc))"
    />

    <Shape
        path={[
            { x: 0 - xGap, y: yPos + 0, z: zPos },   // start
            { x: -60 - xGap, y: yPos + 0, z: zPos },   // start
        ]}
        closed={false}
        stroke={5}
        color="hsl(var(--sc))"
    />

    <Shape
        path={[
            { x: 0 - xGap, y: yPos + 10, z: zPos },   // start
            {
                arc: [ // start next arc from last end point
                    { x: -0 - xGap, y: yPos + 40, z: zPos + 15 }, // corner
                    { x: -60 - xGap, y: yPos + 30, z: zPos + 15 }, // end point
                ]
            },
        ]}
        closed={false}
        stroke={5}
        color="hsl(var(--sc))"
    />
</Shape> 
