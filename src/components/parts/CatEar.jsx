import { Hemisphere, Shape } from "react-zdog"

export const CatEar = ({ xMid, size, zPos }) => {
  return <>
    <Shape path={
      [ // triangle
        { x: xMid, y: -200, z: zPos },
        { x: xMid + size, y: -100, z: zPos },
        { x: xMid - size, y: -100, z: zPos },
      ]
    }
      fill={true}
      color="hsl(var(--pf))"
      stroke={20}
    // rotate={{z: Math.PI / 3}}
    />
  </>
}