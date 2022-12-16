import { Shape } from "react-zdog"

export const CatLeg = ({ length = 300, xPos, yPos, zPos, ...props }) => {
    return <Shape
        path={[
            { x: xPos, y: yPos, z: zPos },
            { x: xPos, y: yPos + length, z: zPos - 100 },
            { x: xPos, y: yPos + length, z: zPos }
        ]}
        closed={false}

        {...props}
    />
}