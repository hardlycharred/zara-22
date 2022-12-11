import { Shape } from "react-zdog"

export const CatButt = ({ zPos, ...props }) => <Shape visible={false}>
    <Shape path={[
        { x: -10, y: 10, z: zPos },
        { x: 10, y: -10, z: zPos }
    ]}
        // all in on salmon
        color="salmon"
        {...props} />

    <Shape path={[
        { x: 10, y: 10, z: zPos },
        { x: -10, y: -10, z: zPos }
    ]}
        color="salmon"
        {...props} />
</Shape>