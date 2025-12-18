import { createContext, useContext, useState } from "react";
import initialQuestions from "../data/initialQuestions";

const QAContext = createContext();

const QAProvider = ({ children }) => {
  const [questions, setQuestions] = useState(initialQuestions);

  const addQuestion = (data) => {
    const newQuestion = {
      id: Date.now().toString(),
      title: data.title,
      body: data.body,
      approved: false,
      answers: []
    };

    setQuestions([...questions, newQuestion]);
  };

  const addAnswer = (questionId, text) => {
    const updated = questions.map((q) => {
      if (q.id === questionId) {
        q.answers.push({
          id: Date.now().toString(),
          text: text,
          approved: false
        });
      }
      return q;
    });

    setQuestions(updated);
  };

  const approveQuestion = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, approved: true } : q
      )
    );
  };

  const approveAnswer = (qId, aId) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === qId) {
          q.answers = q.answers.map((a) =>
            a.id === aId ? { ...a, approved: true } : a
          );
        }
        return q;
      })
    );
  };

  return (
    <QAContext.Provider
      value={{ questions, addQuestion, addAnswer, approveQuestion, approveAnswer }}
    >
      {children}
    </QAContext.Provider>
  );
};

const useQA = () => useContext(QAContext);

export { QAProvider, useQA };
