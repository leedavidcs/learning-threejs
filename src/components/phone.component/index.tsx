import { useGLTF } from "@react-three/drei";
import React, { FC, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { Group } from "three";

const MOUSE_INTERACTIVITY_THRESHOLD: number = 0.125 * Math.PI;

export interface IPhoneProps {
	val?: number;
}

export const Phone: FC<IPhoneProps> = () => {
	const phoneGltf = useGLTF("/glb/phone.glb") as any;
	const groupRef = useRef<Group>();

	const [video] = useState<HTMLVideoElement>(() => {
		const _video = document.createElement("video");

		_video.src = "/mp4/11.mp4";
		_video.crossOrigin = "Anonymous";
		_video.loop = true;
		_video.play();

		return _video;
	});

	useFrame((state) => {
		const group = groupRef.current;

		if (!group) {
			return;
		}

		group.rotation.set(
			-1 * state.mouse.y * MOUSE_INTERACTIVITY_THRESHOLD,
			1 * state.mouse.x * MOUSE_INTERACTIVITY_THRESHOLD,
			0
		);
	});

	return (
		<>
			<group ref={groupRef}>
				<mesh
					geometry={phoneGltf.nodes.PhoneBase.geometry}
					material={phoneGltf.materials.PhoneBase}
				>
					<mesh
						geometry={phoneGltf.nodes.ScreenBezel.geometry}
						material={phoneGltf.materials.ScreenBezel}
					/>
					<mesh geometry={phoneGltf.nodes.ScreenFront.geometry}>
						<meshBasicMaterial>
							<videoTexture attach="map" args={[video]} />
						</meshBasicMaterial>
					</mesh>
					<mesh
						geometry={phoneGltf.nodes.Notch.geometry}
						material={phoneGltf.materials.ScreenBezel}
					/>
					<mesh
						geometry={phoneGltf.nodes.SideButton.geometry}
						material={phoneGltf.materials.SideButton}
					/>
					<mesh
						geometry={phoneGltf.nodes.SideButton001.geometry}
						material={phoneGltf.materials.SideButton}
					/>
					<mesh
						geometry={phoneGltf.nodes.SideButton002.geometry}
						material={phoneGltf.materials.SideButton}
					/>
					<mesh
						geometry={phoneGltf.nodes.SideButton003.geometry}
						material={phoneGltf.materials.SideButton}
					/>
				</mesh>
			</group>
		</>
	);
};
