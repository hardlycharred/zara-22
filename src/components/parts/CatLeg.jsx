import { Shape } from "react-zdog"

export const CatLeg = ({ xPos, yPos, zPos, ...props }) => {
    return <Shape
        path={[
            { x: xPos, y: yPos, z: zPos },
            { x: xPos, y: yPos + 300, z: zPos - 100 },
            { x: xPos, y: yPos + 300, z: zPos }
        ]}
        closed={false}

        {...props}
    />
}