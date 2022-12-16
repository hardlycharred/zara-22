import { Shape } from "react-zdog"
import { CatBody } from "./CatBody"
import { CatHead } from "./CatHead"

export const Cat = ({ xRotation, yRotation, zRotation }) => {

    return <Shape visible={false}

        scale={0.9}

        rotate={{
            x: xRotation,
            y: yRotation,
            z: zRotation
        }}

    >
        <CatHead />
        <CatBody />
    </Shape>
}