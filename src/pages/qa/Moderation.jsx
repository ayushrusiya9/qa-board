import { useQA } from "../../context/QAContext";

const Moderation = () => {
  const { questions, approveQuestion, approveAnswer } = useQA();

  const pendingQuestions = questions.filter((q) => !q.approved);

  const pendingAnswers = [];

  questions.forEach((q) => {
    q.answers.forEach((a) => {
      if (!a.approved) {
        pendingAnswers.push({
          questionId: q.id,
          answer: a,
          questionTitle: q.title,
        });
      }
    });
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-800">
            Moderation Panel
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Review and approve pending questions and answers
          </p>
        </div>

        {/* Pending Questions */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Pending Questions
          </h2>

          {pendingQuestions.length === 0 ? (
            <div className="bg-white border border-dashed border-slate-300 rounded-xl p-6 text-sm text-slate-500">
              No pending questions.
            </div>
          ) : (
            <div className="space-y-4">
              {pendingQuestions.map((q) => (
                <div
                  key={q.id}
                  className="bg-white border border-slate-200 rounded-xl p-5"
                >
                  <h3 className="font-semibold text-slate-800">
                    {q.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {q.body}
                  </p>

                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => approveQuestion(q.id)}
                      className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                      Approve Question
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pending Answers */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Pending Answers
          </h2>

          {pendingAnswers.length === 0 ? (
            <div className="bg-white border border-dashed border-slate-300 rounded-xl p-6 text-sm text-slate-500">
              No pending answers.
            </div>
          ) : (
            <div className="space-y-4">
              {pendingAnswers.map((item) => (
                <div
                  key={item.answer.id}
                  className="bg-white border border-slate-200 rounded-xl p-5"
                >
                  <p className="text-xs text-slate-500 mb-2">
                    Question: {item.questionTitle}
                  </p>

                  <p className="text-sm text-slate-700">
                    {item.answer.text}
                  </p>

                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() =>
                        approveAnswer(item.questionId, item.answer.id)
                      }
                      className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                      Approve Answer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Moderation;
