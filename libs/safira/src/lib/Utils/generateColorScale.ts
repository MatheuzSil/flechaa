
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return rgb ? {
    r: parseInt(rgb[1], 16),
    g: parseInt(rgb[2], 16),
    b: parseInt(rgb[3], 16)
  } : null;
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function interpolateColor(color1: number[], color2: number[], factor: number): number[] {
  if (factor < 0.5) {
    factor = factor * 2;
  } else {
    factor = (factor - 0.5) * 2;
  }
  
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round((1 - factor) * color1[i] + factor * color2[i]);
  }
  return result;
}

export const generateColorScale = (baseHexColor: string): string[] => {
  const baseColor = hexToRgb(baseHexColor);
  if (!baseColor) {
    throw new Error('Invalid base color');
  }

  const positions: number[] = [100, 96, 90, 80, 70, 60, 50, 40, 30, 20, 10, 2, 0];
  const gradient: string[] = [];

  for (let position of positions) {
    const factor = (100 - position) / 100;
    let color: number[];

    if (position >= 51) { 
      color = interpolateColor([255, 255, 255], [baseColor.r, baseColor.g, baseColor.b], factor);
    } else if (position <= 49) { 
      color = interpolateColor([baseColor.r, baseColor.g, baseColor.b], [0, 0, 0], factor);
    } else { 
      color = [baseColor.r, baseColor.g, baseColor.b];
    }

    gradient.push(rgbToHex(color[0], color[1], color[2]));
  }
  return gradient;
}