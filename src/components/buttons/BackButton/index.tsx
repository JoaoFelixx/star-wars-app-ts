import { Link } from 'react-router-dom';
import { Button } from './style';

export function BackButton() {
  return (
    <Link to='/'>
      <Button>Voltar</Button>
    </Link>
  )
}