import { Provider } from 'interfaces';
import { Flex, Image } from './style';

interface CardProvider extends Provider {
  src: string;
  alt: string;
}

export function CardStarWars({ children, src, alt }: CardProvider) {
  return (
    <Flex>
      <Image src={src} alt={alt} />
      {children}
    </Flex>
  )
}