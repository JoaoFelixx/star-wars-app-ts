import { Jumbo, Title, SubTitle } from './style';

interface Props {
	title: string;
	subTitle: string;
}

export function Jumbotron({ title, subTitle }: Props) {
	return (
		<Jumbo>
			<Title>{title}</Title>
			<SubTitle>{subTitle}</SubTitle>
		</Jumbo>
	)
}