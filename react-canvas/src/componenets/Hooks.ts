import { useEffect, useRef } from "react"

export const useOnDraw = (onDraw: any) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const prevPointRef = useRef<{ x: number, y: number } | null>(null);
    const isDrawingRef = useRef(false);

    const mouseMoveListenerRef = useRef<((e: MouseEvent) => void) | null>(null);
    const mouseUpListenerRef = useRef<((e: MouseEvent) => void) | null>(null);

    useEffect(() => {
        function initMouseMoveListener() {
            const mouseMoveListener = (e: MouseEvent) => {
                if (isDrawingRef.current) {
                    const point = computePointInCanvas(e.clientX, e.clientY);
                    const ctx = canvasRef.current?.getContext("2d");
                    if (onDraw) {
                        onDraw(ctx, point, prevPointRef.current);
                    }
                    prevPointRef.current = point;
                    console.log(point);
                }
            }

            mouseMoveListenerRef.current = mouseMoveListener;
            window.addEventListener("mousemove", mouseMoveListener);
        }

        function initMouseUpListener() {
            const listener = () => {
                isDrawingRef.current = false;
                prevPointRef.current = null;
            }

            mouseUpListenerRef.current = listener;
            window.addEventListener("mouseup", listener);
        }

        function computePointInCanvas(clientX: number, clientY: number) {
            if (canvasRef.current) {
                const boundingRect = canvasRef.current.getBoundingClientRect();
                return {
                    x: clientX - boundingRect.left,
                    y: clientY - boundingRect.top
                }
            }
            else {
                return null;
            }
        }

        function removeListeners() {
            if (mouseMoveListenerRef.current) {
                window.removeEventListener("mousemove", mouseMoveListenerRef.current as any);
            }
            if (mouseUpListenerRef.current) {
                window.removeEventListener("mouseup", mouseUpListenerRef.current as any);
            }
        }

        initMouseMoveListener();
        initMouseUpListener();

        return () => {
            //clean up listener
            removeListeners();
        }
    }, [onDraw])

    function setCanvasRef(ref: HTMLCanvasElement | null) {
        canvasRef.current = ref;
    }

    function onMouseDown() {
        isDrawingRef.current = true;
    }

    return {
        setCanvasRef,
        onMouseDown
    }
}
