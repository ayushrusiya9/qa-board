import { useState } from "react";

const AnswerForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        rows={4}
        className="w-full rounded-lg border border-slate-200 p-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
        placeholder="Write your answer..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          disabled={!text.trim()}
        >
          Submit Answer
        </button>
      </div>
    </form>
  );
};

export default AnswerForm;
