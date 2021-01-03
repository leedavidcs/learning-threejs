import { Box } from "@/components/box.component";
import React, { FC } from "react";
import { Canvas } from "react-three-fiber";

export default {
	title: "box/dynamic",
	component: Box
};

export const Standard: FC = () => {
	return (
		<Canvas
			camera={{
				fov: 75,
				aspect: 2,
				near: 0.1,
				far: 5,
				position: [0, 0, 2]
			}}
		>
			<directionalLight intensity={1} position={[-1, 2, 4]} />
			<Box color={0x44aa88} position={[-1.2, 0, 0]} />
			<Box color={0x8844aa} position={[1.2, 0, 0]} />
		</Canvas>
	);
};
