import { Shape } from "react-zdog"
import { CatBody } from "./CatBody"
import { CatHead } from "./CatHead"

export const Cat = ({ yRotation }) => {

    return <Shape visible={false}

        rotate={{
            y: yRotation
        }}

    >
        <CatHead />
        <CatBody />
    </Shape>
}