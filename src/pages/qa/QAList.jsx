import { useQA } from "../../context/QAContext";
import QuestionCard from "../../components/QuestionCard";

const QAList = () => {
  const { questions } = useQA();

  const approvedQuestions = questions.filter((q) => q.approved);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">
            Questions
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Browse questions asked by the community
          </p>
        </div>

        {/* Question List */}
        {approvedQuestions.length > 0 ? (
          approvedQuestions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center text-sm text-slate-500">
            No questions available yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default QAList;
