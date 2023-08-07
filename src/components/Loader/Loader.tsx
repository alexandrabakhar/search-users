import { useEffect, useState } from "react";
import { IIsFetching } from "../../types/interfaces";

export const Loader = ({ isFetching }: IIsFetching) => {
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	const completed = 100;
	if (filled > 0 && !isFetching) setFilled(0);

	useEffect(() => {
		setIsRunning(true);
		if (filled > completed) {
			setFilled(0);
		}
		if (isRunning) setTimeout(() => setFilled((prev) => (prev += 0.5)), 1);
	}, [filled, isRunning, completed, isFetching]);
	return (
		isFetching && (
			<div
				style={{
					height: "2px",
					width: `${filled}%`,
					backgroundColor: `white`,
					position: "absolute",
					top: "-12px",
				}}
				data-testid="loader"
			></div>
		)
	);
};
