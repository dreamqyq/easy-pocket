import styled from 'styled-components';

type MaskProps = {
  visible: boolean;
  theme?: 'white' | 'black';
}
const Mask = styled.div<MaskProps>`
  position: fixed;
  background: ${props => props.theme === 'black' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0)'};
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  display: ${props => props.visible ? 'block' : 'none'}; 
`;

export { Mask };
