import CircularProgress from '@mui/material/CircularProgress';
import { LoaderProps } from 'src/components/Loader/Loader.types';

export function Loader({ isLoading, children }: LoaderProps) {
  return isLoading ? <CircularProgress /> : <>{children}</>;
}
