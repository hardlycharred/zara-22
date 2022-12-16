import { Cylinder, Shape } from "react-zdog"
import { TAU } from "zdog"

export const Cake = ({ yPos, zPos }) => {
    return <Shape visible={false}
        translate={{
            y: yPos,
            z: zPos
        }}
        rotate={{
            x: TAU / 4
        }}
    >

        <Cylinder
            diameter={200}
            length={20}
            color="hsl(var(--a)"
            translate={{
                z: 50
            }}
        />

        <Cylinder
            diameter={200}
            length={100}
            color="hsl(var(--af))"
        />


        <CakeCandle translate={{
            z: 75
        }} />
    </Shape>
}

export const CakeCandle = (props) => <Shape visible={false} {...props}>


    <Cylinder
        diameter={5}
        length={30}
        color="hsl(var(--suc)"
    />

    <Shape visible={false} translate={{
        z: props.z ? props.z + 20 : 20
    }}>
        <Shape
            stroke={10}
            color="red"
        />
        <Shape
            stroke={5}
            color="orange"
        />
    </Shape>

</Shape>