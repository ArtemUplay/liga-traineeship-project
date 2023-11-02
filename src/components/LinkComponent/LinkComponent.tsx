import { Link } from 'react-router-dom';
import './LinkComponent.scss';
import { ILinkComponentProps } from './LinkComponent.types';

export const LinkComponent = ({ path, text }: ILinkComponentProps) => {
  return (
    <Link to={path} className="link">
      {text}
    </Link>
  );
};
