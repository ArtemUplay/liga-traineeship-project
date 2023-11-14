import CircularProgress from '@mui/material/CircularProgress';
import { LoaderProps } from './Loader.types';

export function Loader({ isLoading, children }: LoaderProps) {
  return isLoading ? <CircularProgress /> : <>{children}</>;
}
