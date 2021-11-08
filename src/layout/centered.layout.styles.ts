import { css } from '@emotion/css';
import { theme } from 'core/theme';


export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    justify-items: center;
  }
`;
