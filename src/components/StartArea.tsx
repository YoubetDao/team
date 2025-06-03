"use client";
import { useEffect, useRef, useState } from "react";

interface IProps {
  canvasWidth?: number;
  canvasHeight?: number;
  className?: string;
  starsCount?: number;
}

interface Star {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  speed: number;
  opacity: number;
  originOpacity: number;
  blinkSpeed: number;
  direction: number;
}

const StarsArea = ({
  canvasHeight,
  canvasWidth,
  className = "",
  starsCount = 120,
}: IProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({
    width: canvasWidth || 800, // 默认值
    height: canvasHeight || 600, // 默认值
  });

  useEffect(() => {
    // 在客户端设置实际的窗口尺寸
    if (typeof window !== 'undefined') {
      setDimensions({
        width: canvasWidth || window.innerWidth,
        height: canvasHeight || window.innerHeight,
      });
    }
  }, [canvasWidth, canvasHeight]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    canvasRef.current!.width = dimensions.width;
    canvasRef.current!.height = dimensions.height;

    const STAR_MOVE_RANGE = 100;

    const stars: Star[] = [];

    // 创建星星
    const createStars = () => {
      for (let i = 0; i < starsCount; i++) {
        const originX = Math.random() * dimensions.width;
        const originY = Math.random() * dimensions.height;
        const originOpacity = Math.random();
        stars.push({
          x: originX,
          y: originY,
          originX,
          originY,
          size: Math.random() * 2,
          speed: Math.random() * 0.1,
          opacity: originOpacity,
          originOpacity,
          blinkSpeed: Math.random() * 0.001,
          direction: Math.random() * Math.PI * 2,
        });
      }
    };

    // 绘制星星
    function drawStars() {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      stars.forEach((star) => {
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = "white";
        ctx.fillRect(star.x, star.y, star.size, star.size);
        // ctx.globalAlpha = 1;

        // 控制星星闪烁
        star.opacity = Math.abs(
          Math.sin(Date.now() * star.blinkSpeed + Math.asin(star.originOpacity))
        );

        if (
          Math.abs(star.x - star.originX) > STAR_MOVE_RANGE ||
          Math.abs(star.y - star.originY) > STAR_MOVE_RANGE
        ) {
          star.direction = Math.random() * Math.PI * 2;
        }

        const dx = Math.cos(star.direction) * star.speed;
        const dy = Math.sin(star.direction) * star.speed;

        // 移动星星
        star.y += dy;
        star.x += dx;

        // 重新设置星星位置
        if (
          star.y > dimensions.height ||
          star.y < 0 ||
          star.x > dimensions.width ||
          star.x < 0
        ) {
          star.y = Math.random() * dimensions.height;
          star.x = Math.random() * dimensions.width;
        }
      });

      requestAnimationFrame(drawStars);
    }

    createStars();
    drawStars();
  }, [dimensions.width, dimensions.height, starsCount]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
      }}
    />
  );
};

export default StarsArea;
