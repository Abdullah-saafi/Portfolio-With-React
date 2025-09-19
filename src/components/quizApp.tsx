import { useState, useEffect } from "react";

const QuizApp = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuizQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const data = await response.json();

      if (data.response_code === 0) {
        const processedData = data.results.map((question, index) => {
          const allAnswers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ];
          const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

          return {
            id: index,
            question: question.question,
            answers: shuffledAnswers,
            correctAnswer: question.correct_answer,
            selectedAnswer: null,
          };
        });

        setQuizData(processedData);
      } else {
        setError("Failed to fetch quiz questions. Please try again.");
      }
    } catch (err) {
      setError(
        "An error occurred while fetching questions. Please check your connection."
      );
    } finally {
      setLoading(false);
    }
  };

  const startQuiz = () => {
    fetchQuizQuestions();
    setQuizStarted(true);
    setTimeLeft(15);
  };

  const handleAnswerSelect = (answer) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);

    if (answer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const updatedQuizData = [...quizData];
    updatedQuizData[currentQuestion].selectedAnswer = answer;
    setQuizData(updatedQuizData);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(15);
    } else {
      setQuizFinished(true);
    }
  };

  useEffect(() => {
    if (!quizStarted || quizFinished) return;

    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizStarted, quizFinished]);

  const restartQuiz = () => {
    setQuizData([]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(15);
    setQuizStarted(false);
    setQuizFinished(false);
  };

  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-black mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Quiz App
      </h1>

      {!quizStarted && !loading && (
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Test your knowledge with this quiz!
          </p>
          <button
            onClick={startQuiz}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Start Quiz
          </button>
        </div>
      )}

      {loading && (
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-lg text-gray-700">Loading questions...</p>
        </div>
      )}

      {error && (
        <div className="text-center p-4 bg-red-100 rounded-lg">
          <p className="text-red-700">{error}</p>
          <button
            onClick={startQuiz}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {quizStarted && !quizFinished && quizData.length > 0 && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-semibold">
              Question {currentQuestion + 1} of {quizData.length}
            </div>
            <div
              className={`text-lg font-bold ${
                timeLeft <= 5 ? "text-red-600" : "text-blue-600"
              }`}
            >
              Time: {timeLeft}s
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{
                width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
              }}
            ></div>
          </div>

          <h2 className="text-xl font-semibold mb-6 bg-blue-50 p-4 rounded-lg">
            {decodeHtml(quizData[currentQuestion].question)}
          </h2>

          <div className="space-y-3 mb-6">
            {quizData[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(answer)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  selectedAnswer === answer
                    ? answer === quizData[currentQuestion].correctAnswer
                      ? "bg-green-200 border-2 border-green-500"
                      : "bg-red-200 border-2 border-red-500"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {decodeHtml(answer)}
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <div>
              {selectedAnswer && (
                <p
                  className={`font-semibold ${
                    selectedAnswer === quizData[currentQuestion].correctAnswer
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedAnswer === quizData[currentQuestion].correctAnswer
                    ? "Correct!"
                    : `Incorrect! The correct answer is: ${decodeHtml(
                        quizData[currentQuestion].correctAnswer
                      )}`}
                </p>
              )}
            </div>

            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer && timeLeft > 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {currentQuestion < quizData.length - 1
                ? "Next Question"
                : "Finish Quiz"}
            </button>
          </div>
        </div>
      )}

      {quizFinished && (
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">Quiz Results</h2>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">
                {score} / {quizData.length}
              </p>
              <p className="text-lg text-gray-700">
                {score === quizData.length
                  ? "Perfect score! Amazing job!"
                  : score >= quizData.length / 2
                  ? "Good job!"
                  : "Keep practicing!"}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600">{score}</p>
                <p className="text-gray-600">Correct</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-600">
                  {quizData.length - score}
                </p>
                <p className="text-gray-600">Incorrect</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Question Review</h3>

          <div className="space-y-6">
            {quizData.map((question, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">
                  {index + 1}. {decodeHtml(question.question)}
                </p>

                <div className="space-y-2">
                  <p
                    className={`p-2 rounded ${
                      question.selectedAnswer === question.correctAnswer
                        ? "bg-green-100"
                        : "bg-red-100"
                    }`}
                  >
                    Your answer:{" "}
                    {decodeHtml(question.selectedAnswer || "Skipped")}
                    {question.selectedAnswer !== question.correctAnswer && (
                      <span className="block text-sm mt-1">
                        Correct answer: {decodeHtml(question.correctAnswer)}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
