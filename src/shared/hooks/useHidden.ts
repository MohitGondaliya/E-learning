import { useMediaQuery, useTheme } from '@mui/material';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const useHidden = ({
  up,
  down,
}: {
  up?: Breakpoint;
  down?: Breakpoint;
}) => {
  const theme = useTheme();

  // Use `false` as default, but ensure hooks are always called
  const matchesUp = useMediaQuery(up ? theme.breakpoints.up(up) : 'all');
  const matchesDown = useMediaQuery(down ? theme.breakpoints.down(down) : 'all');

  if (up && matchesUp) return true;
  if (down && matchesDown) return true;

  return false;
};
