import QuestionForm from "./QuestionForm";
import { useQA } from "../../context/QAContext";

const NewQuestion = () => {
  const { addQuestion } = useQA();

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">
            Ask a Question
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Share your question with the community and get helpful answers.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <QuestionForm onSubmit={addQuestion} />
        </div>

      </div>
    </div>
  );
};

export default NewQuestion;
