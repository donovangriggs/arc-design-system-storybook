import { Component, Prop, h } from '@stencil/core';

interface IconDefinition {
  paths: string[];
  circles?: Array<{ cx: number; cy: number; r: number }>;
  lines?: Array<{ x1: number; y1: number; x2: number; y2: number }>;
  polylines?: string[];
  polygons?: string[];
  rects?: Array<{ x: number; y: number; width: number; height: number; rx?: number }>;
}

const ICON_MAP: Record<string, IconDefinition> = {
  'chevron-down': {
    paths: [],
    polylines: ['6 9 12 15 18 9'],
  },
  'chevron-up': {
    paths: [],
    polylines: ['18 15 12 9 6 15'],
  },
  'chevron-left': {
    paths: [],
    polylines: ['15 18 9 12 15 6'],
  },
  'chevron-right': {
    paths: [],
    polylines: ['9 18 15 12 9 6'],
  },
  'x': {
    paths: [],
    lines: [
      { x1: 18, y1: 6, x2: 6, y2: 18 },
      { x1: 6, y1: 6, x2: 18, y2: 18 },
    ],
  },
  'check': {
    paths: [],
    polylines: ['20 6 9 17 4 12'],
  },
  'plus': {
    paths: [],
    lines: [
      { x1: 12, y1: 5, x2: 12, y2: 19 },
      { x1: 5, y1: 12, x2: 19, y2: 12 },
    ],
  },
  'minus': {
    paths: [],
    lines: [
      { x1: 5, y1: 12, x2: 19, y2: 12 },
    ],
  },
  'search': {
    paths: [],
    circles: [{ cx: 11, cy: 11, r: 8 }],
    lines: [{ x1: 21, y1: 21, x2: 16.65, y2: 16.65 }],
  },
  'menu': {
    paths: [],
    lines: [
      { x1: 4, y1: 12, x2: 20, y2: 12 },
      { x1: 4, y1: 6, x2: 20, y2: 6 },
      { x1: 4, y1: 18, x2: 20, y2: 18 },
    ],
  },
  'user': {
    paths: ['M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'],
    circles: [{ cx: 12, cy: 7, r: 4 }],
  },
  'heart': {
    paths: ['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'],
    circles: undefined,
  },
  'star': {
    paths: [],
    polygons: ['12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'],
  },
  'info': {
    paths: [],
    circles: [{ cx: 12, cy: 12, r: 10 }],
    lines: [
      { x1: 12, y1: 16, x2: 12, y2: 12 },
      { x1: 12, y1: 8, x2: 12.01, y2: 8 },
    ],
  },
  'alert-triangle': {
    paths: ['M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'],
    lines: [
      { x1: 12, y1: 9, x2: 12, y2: 13 },
      { x1: 12, y1: 17, x2: 12.01, y2: 17 },
    ],
  },
};

@Component({
  tag: 'arc-icon',
  styleUrl: 'arc-icon.css',
  shadow: false,
})
export class ArcIcon {
  /** Name of the icon to render */
  @Prop() name: string = '';

  /** Size of the icon in pixels */
  @Prop() size: number = 24;

  /** Stroke color */
  @Prop() color: string = 'currentColor';

  /** Stroke width */
  @Prop() strokeWidth: number = 2;

  render() {
    const icon = ICON_MAP[this.name];

    if (!icon) {
      return null;
    }

    return (
      <svg
        part="svg"
        xmlns="http://www.w3.org/2000/svg"
        width={this.size}
        height={this.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={this.color}
        stroke-width={this.strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        role="img"
      >
        {icon.paths?.map((d) =>
          d ? <path d={d} /> : null
        )}
        {icon.circles?.map((c) => (
          <circle cx={c.cx} cy={c.cy} r={c.r} />
        ))}
        {icon.lines?.map((l) => (
          <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
        ))}
        {icon.polylines?.map((points) => (
          <polyline points={points} />
        ))}
        {icon.polygons?.map((points) => (
          <polygon points={points} />
        ))}
        {icon.rects?.map((r) => (
          <rect x={r.x} y={r.y} width={r.width} height={r.height} rx={r.rx ?? 0} />
        ))}
      </svg>
    );
  }
}
