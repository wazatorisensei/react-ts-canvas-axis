/*
 * React Canvas para exibição de eixos de medidas.
 */
import { FC, useEffect, useRef } from "react";

import './react-canvas.css';

type TReactCanvas = {
  larguraCanva?: number;
  alturaCanva?: number;
  largura?: number;
  altura?: number;
  medidaY?: 'mm' | 'm' | 'km';
  medidaX?: 'mm' | 'm' | 'km';
  strokeColor?: string;
  strokeLine?: string;
  strokeFormat?: 'dashed' | 'solid';
}

export const ReactCanvas: FC<TReactCanvas> = ({
  larguraCanva = 500,
  alturaCanva = 500,
  largura = 500,
  altura = 500,
  medidaY = 'm',
  medidaX = 'm',
  strokeColor = '#000',
  strokeLine = '1px',
  strokeFormat = 'solid',
}) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Configuração das dimensões do canvas.
        canvas.width = largura;
        canvas.height = altura;
        // Desenhar o eixo X.
        ctx.moveTo(0, 450);
        ctx.lineTo(500, 450);
        ctx.stroke();
        // Desenhar o eixo Y.
        ctx.moveTo(50, 0);
        ctx.lineTo(50, 500);
        ctx.stroke();
        // Inserir nomes dos eixos
        ctx.fillText('Eixo Y', 250, 490); // cria pequenos textos dentro do plano cartesiano       
        ctx.fillText('Eixo Y', 5, 250); // cria pequenos textos dentro do plano cartesiano
        // Desenhar a marcação do eixo Y.
        for (var i = 50; i <= 450; i += 50) {
          ctx.beginPath();
          ctx.moveTo(45, i);
          ctx.lineTo(55, i);
          ctx.stroke();
        }
        // Desenhar a marcação do eixo X.
        for (var i = 50; i <= 450; i += 50) {
          ctx.beginPath();
          ctx.moveTo(i, 445);
          ctx.lineTo(i, 455);
          ctx.stroke();
        }
        // Adicionar as etiquetas(labels) do eixo Y.
        for (var i = 50; i <= 450; i += 50) {
          ctx.fillText((450 - i) / 50 + medidaY, 20, i);
        }
        // Adicionar as etiquetas(labels) do eixo X.
        for (var i = 50; i <= 450; i += 50) {
          ctx.fillText((i - 50) / 50 + medidaX, i, 470);
        }
      }
    }
  }, [ReactCanvas, medidaX, medidaY]);

  useEffect(() => {

  }, [])

  return (
    <canvas
      id='canvas'
      style={{ border: `${strokeLine} ${strokeFormat} ${strokeColor}` }}
      height={alturaCanva}
      width={larguraCanva}
      ref={canvasRef}
    />
  );
};