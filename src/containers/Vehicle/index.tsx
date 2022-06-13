import React, { useEffect, useState } from 'react';
import {
	Spinner,
	Jumbotron,
	BackButton,
	ProgressBar,
	CardStarWars,
	FlexContainer,
} from 'components';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorStarWars } from 'Context/StarWarsProvider';

interface VehiclesInfo {
	speeds: Array<number>;
	lengths: Array<number>;
	passengers: Array<number>;
}

export function Vehicle() {
	const { vehicles, isLoading } = useSelectorStarWars();
	const [maxSpeed, setMaxSpeed] = useState<number>(0);
	const [maxLength, setMaxLength] = useState<number>(0);
	const [maxPassengers, setMaxPassengers] = useState<number>(0);

	const MemorizedVehicles = React.memo(() => {
		return (
			<FlexContainer>
				{React.Children.toArray(
					vehicles?.map((vehicle) => {
						return (
							<CardStarWars src={localizedStrings.images[vehicle.name]} alt={vehicle.name}>
								<h2>{vehicle.name}</h2><br />
								<p>Velocidade: {vehicle.max_atmosphering_speed} KPH</p>
								<ProgressBar
									color="#ff0000"
									value={vehicle.max_atmosphering_speed}
									max={maxSpeed}>
									{vehicle.max_atmosphering_speed}
								</ProgressBar>

								<p>Tamanho: {vehicle.length} metros</p>
								<ProgressBar
									color="#0000ff"
									value={Math.round(Number(vehicle.length))}
									max={maxLength}>
									{vehicle.length}
								</ProgressBar>

								<p>Passageiros: {vehicle.passengers} Passageiro(s)</p>
								<ProgressBar
									color="#00ff00"
									value={vehicle.passengers}
									max={maxPassengers}>
									{vehicle.passengers}
								</ProgressBar>
							</CardStarWars>
						)
					})
				)}
			</FlexContainer>
		)
	})

	useEffect(() => {
		try {
			if (!vehicles)
				return

			const { lengths, passengers, speeds } = vehicles.reduce<VehiclesInfo>((acc, current) => {
				return {
					speeds: [...acc.speeds, Number(current.max_atmosphering_speed)],
					lengths: [...acc.lengths, Math.round(Number(current.length))],
					passengers: [...acc.passengers, Number(current.passengers)]
				}
			}, { speeds: [0], lengths: [0], passengers: [0] });

			setMaxSpeed(Math.max(...speeds));
			setMaxLength(Math.max(...lengths));
			setMaxPassengers(Math.max(...passengers));

		} catch (error) {
			return
		}
	}, [vehicles])

	return (
		<React.Fragment>
			<BackButton />
			<Jumbotron title="veículos" subTitle="Lista de veiculos Star Wars" />
			{isLoading ? <Spinner /> : <MemorizedVehicles />}
		</React.Fragment>
	)
}