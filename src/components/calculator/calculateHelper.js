export default function calculatePoolVolume(
  length,
  width,
  width2,
  depth,
  shape
) {
  console.log("Calculating...");

  let result;
  if (shape === "squareOrRectangle") {
    result = length * width * depth * 7.5;
    console.log("pool is square");
  }

  if (shape === "circle") {
    console.log("pool is circular");
    let radius = length / 2;
    result = 3.14 * Math.pow(radius, 2) * depth * 7.5;
  }

  if (shape === "kidney") {
    let averageWidth = parseInt(width) + parseInt(width2);

    console.log(averageWidth);
    result = 0.45 * averageWidth * length * depth * 7.5;
  }
  return result;
}
