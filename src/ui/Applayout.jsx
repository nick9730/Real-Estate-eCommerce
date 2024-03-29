import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import { useModalContext } from "../components/context/ModalContext";
import { useDetectWidth } from "../hooks/useDetectWidth";

import Modal from "../components/NavBars/Mobile/MobileNavbar";
import Transition from "./Transition";
import ScrollToTop from "./ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useGetVideos } from "../hooks/useGetVideos";

const Content = styled(motion.div)`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	gap: 10px;
`;

export default function Applayout() {
	const { showModal, setWidth } = useModalContext();
	const { isLoading } = useGetVideos();

	useDetectWidth(setWidth);

	return (
		<>
			{!isLoading && (
				<Content>
					<ScrollToTop />
					{showModal && <Modal />}

					<Transition content={<Outlet />} />

					<SpeedInsights />
				</Content>
			)}
		</>
	);
}
