import React from 'react'
import './SkillCard.css'
import Image from "../../images/undraw_personal_email_t7nw.svg"
import Rating from '@material-ui/lab/Rating';
import { motion } from "framer-motion"

const SkillCard = ({name, image, rating}) => {
    return (
        <motion.div className = "card">
            <img src={image} alt=""/>
            <h1>{name}</h1>
            <Rating name="read-only" value={rating} readOnly precision = {0.1} />

        </motion.div>
    )
}

export default SkillCard
