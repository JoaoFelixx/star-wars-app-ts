import { Foot, Text } from './style';
import { localizedStrings } from 'constants/localizedStrings';

export function Footer() {
	return (
		<Foot>
			<Text>{localizedStrings.starWarsByFelixDeveloper}</Text>
		</Foot>
	)
}