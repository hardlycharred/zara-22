import { Shape } from "react-zdog"
import { a } from "@react-spring/zdog"

export const CatLeg = ({ length = 300, scale = 1, xPos, yPos, zPos, ...props }) => {
    return <a.Shape
        scale={scale}
        path={[
            { x: xPos, y: yPos, z: zPos },
            { x: xPos, y: yPos + length, z: zPos - 100 },
            { x: xPos, y: yPos + length, z: zPos }
        ]}
        closed={false}

        {...props}
    />
}