import { Cone, Shape } from "react-zdog"
import * as Zdog from "zdog"

export const CatHat = ({ }) => {

    return <Shape visble={false} >

        <Cone diameter={80} length={100}
            color="hsl(var(--er))"
            rotate={{
                x: Math.PI / 2
            }}
            translate={{
                y: -140
            }}
        />

        <Shape stroke={20}
            color="hsl(var(--s))"
            translate={{
                y: -250
            }}
        />


    </Shape>
}