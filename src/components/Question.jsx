import React from "react";

import './Styles/QuestionList.css';
export function Question({question}) {
    return (
    <div className="question">
        <div className="question-title">{question.title}</div>
        <div className="question-body">{question.body}</div>
        <div className="question-author"> Автор: {question.login}</div>
    </div>
    )
}
