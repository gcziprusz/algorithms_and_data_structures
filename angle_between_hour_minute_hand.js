//           360deg
//             12
//          11 |  1   30deg
//         10  |   2  60deg
// 270deg 9 <<<|--- 3  90deg
//         8       4  120deg
//           7   5  150deg
//             6 
//           180deg     
function angle(time) {
  let parts = time.split(":").map(p => parseInt(p,10))
  
  let h = parts[0] >= 12 ? parts[0]-12:parts[0];
  let m = parts[1];
  let mAngle = (m/60)*360;
  let hAngle = (h/12)*360 + mAngle/12

  let angle = Math.abs(hAngle-mAngle);
  return Math.round(angle > 180 ? 360-angle: angle);
}
