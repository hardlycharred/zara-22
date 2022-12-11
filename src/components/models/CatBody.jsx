import { Cylinder, Hemisphere, Shape } from "react-zdog"

export const CatBody = ({ }) => {

    return <Shape visible={false} translate={{ y: 80, z: -300 }}>
        {/* Cat tube */}
        <Cylinder color="hsl(var(--p))" length={300} diameter={300}>
            {/* Front of cat chest */}
            <Hemisphere diameter={300} color="hsl(var(--p))"
                translate={{ z: 150 }}
            />
            {/* Back of cat chest */}
            <Hemisphere diameter={300} color="hsl(var(--p))"
                translate={{ z: -150 }}
                rotate={{
                    y: Math.PI
                }}
            />


        </Cylinder>
    </Shape>

}