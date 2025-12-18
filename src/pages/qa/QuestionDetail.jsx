import { useParams } from "react-router-dom";
import { useQA } from "../../context/QAContext";
import AnswerForm from "../../components/AnswerForm";

const QuestionDetail = () => {
  const { id } = useParams();
  const { questions, addAnswer } = useQA();

  const question = questions.find((q) => q.id === id);

  if (!question) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-slate-500">
        Question not found.
      </div>
    );
  }

  const approvedAnswers = question.answers.filter((a) => a.approved);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Question */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
          <h1 className="text-2xl font-semibold text-slate-800">
            {question.title}
          </h1>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            {question.body}
          </p>
        </div>

        {/* Answers */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Answers
          </h2>

          {approvedAnswers.length > 0 ? (
            <div className="space-y-4">
              {approvedAnswers.map((a) => (
                <div
                  key={a.id}
                  className="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-700"
                >
                  {a.text}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-dashed border-slate-300 rounded-xl p-6 text-sm text-slate-500">
              No answers yet. Be the first to answer.
            </div>
          )}
        </div>

        {/* Answer Form */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-md font-semibold text-slate-800 mb-3">
            Your Answer
          </h3>

          <AnswerForm onSubmit={(text) => addAnswer(question.id, text)} />
        </div>

      </div>
    </div>
  );
};

export default QuestionDetail;
