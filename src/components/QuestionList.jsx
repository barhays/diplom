import React from "react";
import './Styles/QuestionList.css';
import { Question } from "./Question";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

export function QuestionList({ questions, children }) {
    return (
        <motion.div
            className="question-list"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
        >
            {children}
            {questions.map((question, index) => (
                <motion.div
                    key={question.id}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                    <Link style={{textDecoration: 'none'}} to={`/${question.id}`}>

                        <Question question={question} />
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}
