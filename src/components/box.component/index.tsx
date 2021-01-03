import React, { FC, useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Mesh, Vector3 } from "three";

export interface IBoxProps {
	color?: number | string;
	position?: Vector3 | [x: number, y: number, z: number];
}

export const Box: FC<IBoxProps> = ({ color, position }) => {
	const meshRef = useRef<Mesh>();

	useFrame((state) => {
		const mesh = meshRef.current;

		if (!mesh) {
			return;
		}

		const time: number = state.clock.getElapsedTime();

		mesh.rotation.x = time;
		mesh.rotation.y = time;
	});

	return (
		<mesh ref={meshRef} position={position}>
			<boxGeometry args={[1, 1, 1]} />
			<meshPhongMaterial color={color} />
		</mesh>
	);
};
