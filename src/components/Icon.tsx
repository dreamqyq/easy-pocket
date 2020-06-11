import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name: string
}
const Icon: React.FC<Props> = (props) => {
  return (
    <svg
      className="icon"
      aria-hidden="true"
    >
      <use
        xlinkHref={`#${props.name}`}
      />
    </svg>
  );
};

export { Icon };
