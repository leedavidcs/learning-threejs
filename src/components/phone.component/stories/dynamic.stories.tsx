import { Phone } from "@/components/phone.component";
import { OrbitControls } from "@react-three/drei";
import React, { FC, Suspense } from "react";
import { Canvas } from "react-three-fiber";

export default {
	title: "phone/dynamic",
	component: Phone
};

export const Standard: FC = () => {
	return (
		<Canvas
			camera={{
				position: [0, 0, 40]
			}}
			style={{
				height: "100vh",
				maxHeight: 800,
				width: "100%",
				maxWidth: 800,
				border: "1px solid black"
			}}
		>
			<directionalLight intensity={1} position={[-1, 2, 4]} />
			<Suspense fallback={null}>
				<Phone />
			</Suspense>
			<OrbitControls />
		</Canvas>
	);
};
