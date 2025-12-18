const AnswerCard = ({ answer }) => {
  return (
    <div className="border p-2 mt-2 bg-gray-50">
      {answer.text}
    </div>
  );
};

export default AnswerCard;
