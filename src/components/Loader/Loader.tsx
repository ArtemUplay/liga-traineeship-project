import CircularProgress from '@mui/material/CircularProgress';
import { LoaderProps } from 'src/components/Loader';

export function Loader({ isLoading, children }: LoaderProps) {
  return isLoading ? <CircularProgress /> : <>{children}</>;
}
