import { Link } from "react-router-dom";

const QuestionCard = ({ question }) => {
  return (
    <Link to={`/qa/${question.id}`} className="block">
      <div className="bg-white border border-slate-200 rounded-xl p-5 mb-4 transition hover:shadow-md">
        
        <h2 className="text-lg font-semibold text-slate-800">
          {question.title}
        </h2>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {question.body.length > 120
            ? question.body.slice(0, 120) + "..."
            : question.body}
        </p>

        <div className="mt-3 text-xs text-slate-500 hover:text-indigo-300" >
          Click to view answers &#8594; 
        </div>

      </div>
    </Link>
  );
};

export default QuestionCard;
