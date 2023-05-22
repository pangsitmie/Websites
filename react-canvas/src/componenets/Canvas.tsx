import { useOnDraw } from "./Hooks"

type Props = {
  width: number
  height: number
}

const Canvas = ({ width, height }: Props) => {

  const { onMouseDown, setCanvasRef } = useOnDraw(onDraw);

  function onDraw(ctx: CanvasRenderingContext2D, point: PointerEvent, prevPoint: PointerEvent) {
    drawLine(prevPoint, point, ctx, 'black', 5);
  }

  function drawLine(start: PointerEvent, end: PointerEvent, ctx: CanvasRenderingContext2D, color: string, width: number) {
    start = start ?? end;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, width / 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <canvas
      width={width}
      height={height}
      ref={setCanvasRef}
      onMouseDown={onMouseDown}
      style={{
        border: '1px solid black',
      }}
    >
      this is canvas
    </canvas>
  )
}

export default Canvas