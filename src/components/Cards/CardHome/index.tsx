import { Link } from 'react-router-dom';
import { Card, Title, Image, Button } from './style';
import { localizedStrings } from 'constants/localizedStrings';

interface InfoLinks {
	src: string;
	alt: string;
	link: string;
	title: string;
}

export function CardHome({
	src,
	alt,
	link,
	title,
}: InfoLinks) {
	return (
		<Card>
			<Image alt={alt} src={src} />
			<Title> {title} </Title>
			<br />
			<Link to={link}>
				<Button> {localizedStrings.clickHere} </Button>
			</Link>
		</Card>
	)
}