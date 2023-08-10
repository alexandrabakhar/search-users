import { useEffect, useState } from "react";
import { IIsFetching } from "../../types/Interfaces";

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
					position: "fixed",
					top: "calc(100% - 2px)",
				}}
				data-testid="loader"
			></div>
		)
	);
};
