import { Hemisphere, Shape } from "react-zdog"
import { CatEar } from "../parts/CatEar";
import { CatEye } from "../parts/CatEye";
import { CatHat } from "../parts/CatHat";
import { CatMouth } from "../parts/CatMouth";

export const CatHead = () => {

  // const { xBaseRot, yBaseRot, zBaseRot } = useStateStore(state => state);
  const earsZPos = -50;
  const eyesZPos = 150;


  return <>

    {/* Left Ear */}
    <CatEar xMid={-80} size={40} zPos={earsZPos} />
    {/* Right Ear */}
    <CatEar xMid={80} size={40} zPos={earsZPos} />

    {/* He face */}
    {/* <Shape stroke={300} color="#ededf0"> */}
    <Shape stroke={300} color="hsl(var(--p))">
      <CatHat />

      {/* Left Eye */}
      <CatEye xPos={-60} yPos={-30} zPos={eyesZPos} scleraSize={40} />
      {/* Right Eye */}
      <CatEye xPos={60} yPos={-30} zPos={eyesZPos} scleraSize={40} />

      <CatMouth zPos={eyesZPos} />

    </Shape>


  </>
}