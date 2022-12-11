import { Shape } from "react-zdog"
import { CatBody } from "./CatBody"
import { CatHead } from "./CatHead"

export const Cat = ({}) => {

    return <Shape visible={false}>
        <CatHead />
        <CatBody />
    </Shape>
}