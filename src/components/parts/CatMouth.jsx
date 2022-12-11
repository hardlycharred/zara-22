import { Shape } from "react-zdog"

export const CatMouth = ({ zPos }) => {

    return <Shape visible={false}>
        <Shape
            path={[
                { x: 0, y: 0, z: zPos },   // start
                { x: 0, y: 10, z: zPos },   // start
                {
                    arc: [ // start next arc from last end point
                        { x: 20, y: 40, z: zPos - 7 }, // corner
                        { x: 30, y: 30, z: zPos - 15 }, // end point
                    ]
                },
            ]}
            closed={false}
            stroke={5}
            color="hsl(var(--pc))"
        />
        <Shape
            path={[
                { x: 0, y: 0, z: zPos },   // start
                { x: 0, y: 10, z: zPos },   // start
                {
                    arc: [ // start next arc from last end point
                        { x: -20, y: 40, z: zPos - 7 }, // corner
                        { x: -30, y: 30, z: zPos - 15 }, // end point
                    ]
                },
            ]}
            closed={false}
            stroke={5}
            color="hsl(var(--pc))"
        />
    </Shape>

}