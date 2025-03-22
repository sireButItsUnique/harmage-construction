'use client';
import { motion } from "framer-motion";

export default function PopupBackground({imgPath}) {
    return <motion.img
        src={imgPath} // Replace with your image path
        alt="Background"
        className="fixed left-0 z-[-1] opacity-8 top-0 w-full h-full object-cover"
        initial={{ y: "100%", opacity: "0%"}} // Start below the screen
        animate={{ y: "0%", opacity: "8%"}} // Move to normal position
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth animation
    />;
}