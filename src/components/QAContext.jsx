import { createContext, useContext, useState } from "react";
import initialQuestions from "../data/initialQuetions";

const QAContext = createContext();

const QAProvider = ({ children }) => {
  const [questions, setQuestions] = useState(initialQuestions);

  // -------------------------
  // ADD QUESTION
  // -------------------------
  const addQuestion = ({ title, body }) => {
    const newQuestion = {
      id: Date.now().toString(),
      title,
      body,
      approved: false,
      answers: [],
    };

    setQuestions((prev) => [...prev, newQuestion]);
  };

  // -------------------------
  // ADD ANSWER
  // -------------------------
  const addAnswer = (questionId, text) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
              ...q,
              answers: [
                ...q.answers,
                {
                  id: Date.now().toString(),
                  text,
                  approved: false,
                },
              ],
            }
          : q
      )
    );
  };

  // -------------------------
  // APPROVE QUESTION
  // -------------------------
  const approveQuestion = (id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, approved: true } : q
      )
    );
  };

  // -------------------------
  // APPROVE ANSWER
  // -------------------------
  const approveAnswer = (questionId, answerId) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
              ...q,
              answers: q.answers.map((a) =>
                a.id === answerId
                  ? { ...a, approved: true }
                  : a
              ),
            }
          : q
      )
    );
  };

  return (
    <QAContext.Provider
      value={{
        questions,
        addQuestion,
        addAnswer,
        approveQuestion,
        approveAnswer,
      }}
    >
      {children}
    </QAContext.Provider>
  );
};

const useQA = () => useContext(QAContext);

export { QAProvider, useQA };
