import { Shape } from "react-zdog"

export const CatEye = ({ scleraSize, irisSize = scleraSize / 2, xPos, yPos, zPos }) => {

  return <>
    <Shape stroke={scleraSize} translate={{ x: xPos, y: yPos, z: zPos - 1 }} color="white" >
      <Shape stroke={irisSize} color="black" translate={{z: irisSize }}/>
    </Shape>
  </>
}