import { Cylinder, Hemisphere, Shape } from "react-zdog"
import { CatButt } from "../parts/CatButt"
import { CatLeg } from "../parts/CatLeg"
import { CatTail } from "../parts/CatTail"

export const CatBody = ({ }) => {

    return <Shape visible={false} translate={{ y: 80, z: -300 }}>
        {/* Cat tube */}
        <Cylinder color="hsl(var(--p))" length={300} diameter={300}>

            {/* Front of cat chest */}
            <Hemisphere diameter={300} color="hsl(var(--p))"
                translate={{ z: 150 }}
            />

            {/* Back of cat */}
            <Hemisphere diameter={300} color="hsl(var(--p))"
                translate={{ z: -150 }}
                rotate={{
                    y: Math.PI
                }}
            >
                <CatTail zPos={100} />
                <CatButt zPos={150} stroke={3} />
            </Hemisphere>

            {/*  Back right leg */}
            <CatLeg xPos={-150} yPos={0} zPos={-150} stroke={20} />
            <CatLeg xPos={150} yPos={0} zPos={-150} stroke={20} />


            <CatLeg xPos={-150} yPos={0} zPos={150} stroke={20} />
            <CatLeg xPos={150} yPos={0} zPos={150} stroke={20} />



        </Cylinder>
    </Shape>

}