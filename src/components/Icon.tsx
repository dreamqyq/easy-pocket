import React, { useEffect } from 'react';
import classnames from 'classnames';

interface SpriteInfo {
  id: string;
  viewBox: string;
  inner: string;
}

const svgModules = import.meta.glob('/src/icons/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function extractSvgInfo(raw: string, id: string): SpriteInfo | null {
  // Strip any <?xml?> declaration before parsing
  const cleaned = raw.replace(/<\?xml[^>]*\?>/g, '');
  const match = cleaned.match(/<svg[^>]*>/)?.[0];
  if (!match) return null;
  const viewBoxMatch = match.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch?.[1] || '0 0 1024 1024';
  const inner = cleaned.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');
  return { id, viewBox, inner };
}

const sprites: SpriteInfo[] = Object.entries(svgModules)
  .map(([path, content]) => {
    const id = path.split('/').pop()?.replace('.svg', '') || '';
    return extractSvgInfo(content, id);
  })
  .filter((s): s is SpriteInfo => s !== null);

let injected = false;

function injectSprite() {
  if (injected) return;
  injected = true;

  const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgEl.style.display = 'none';
  
  sprites.forEach(s => {
    const symbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
    symbol.setAttribute('id', s.id);
    symbol.setAttribute('viewBox', s.viewBox);
    symbol.innerHTML = s.inner;
    svgEl.appendChild(symbol);
  });

  document.body.appendChild(svgEl);
}

type Props = {
  name?: string;
} & React.SVGAttributes<SVGElement>;

const Icon: React.FC<Props> = props => {
  const { name, children, className, ...rest } = props;

  useEffect(() => {
    injectSprite();
  }, []);

  return (
    <svg className={classnames('icon', className)} aria-hidden="true" {...rest}>
      {props.name && <use xlinkHref={`#${props.name}`} />}
    </svg>
  );
};

export { Icon };
