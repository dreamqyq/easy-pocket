/// <reference types="vite/client" />

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Augment react-router-dom types for React 18 compatibility
import 'react-router-dom';

declare module 'react-router-dom' {
  interface BrowserRouterProps {
    children?: React.ReactNode;
  }
  interface HashRouterProps {
    children?: React.ReactNode;
  }
  interface MemoryRouterProps {
    children?: React.ReactNode;
  }
  interface LinkProps {
    children?: React.ReactNode;
  }
  interface NavLinkProps {
    children?: React.ReactNode;
  }
  interface RouteProps {
    children?: React.ReactNode;
  }
}
