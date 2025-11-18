import { useState } from 'react';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "O que é uma DIV?",
      options: ["Divergência", "Divisão (parte do site)", "Divulgação", "Radiador"],
      correct: 1
    },
    {
      question: "O que é HTML?",
      options: ["Linguagem de Programação", "Mecanismo de busca", "Linguagem de Marcação", "Sistema operacional"],
      correct: 2
    },
    {
      question: "Qual linguagem é usada para estilizar páginas web?",
      options: ["HTML", "JavaScript", "CSS", "Python"],
      correct: 2
    },
    {
      question: "O que significa CSS?",
      options: ["Cascading Style Sheets", "Computer System Software", "Code Style System", "Central Style Structure"],
      correct: 0
    },
    {
      question: "Qual é a linguagem de programação mais popular para desenvolvimento web?",
      options: ["Java", "JavaScript", "C++", "Ruby"],
      correct: 1
    },
    {
      question: "O que é React?",
      options: ["Banco de dados", "Biblioteca JavaScript para interfaces", "Servidor web", "Sistema operacional"],
      correct: 1
    },
    {
      question: "Qual comando é usado para instalar pacotes em Node.js?",
      options: ["pip install", "npm install", "apt-get", "brew install"],
      correct: 1
    },
    {
      question: "O que significa API?",
      options: ["Application Programming Interface", "Advanced Programming Information", "Automated Process Interface", "Application Protocol Integration"],
      correct: 0
    },
    {
      question: "Qual é a função do Git no desenvolvimento?",
      options: ["Criar bancos de dados", "Controlar versão de código", "Compilar programas", "Hospedar servidores"],
      correct: 1
    },
    {
      question: "O que é um Framework?",
      options: ["Um tipo de linguagem", "Uma estrutura/conjunto de ferramentas para desenvolvimento", "Um banco de dados", "Um servidor web"],
      correct: 1
    }
  ];

  const handleAnswerClick = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="App">
      <div className="quiz-container">
        <h1>Quiz de DEV</h1>
        
        {showScore ? (
          <div className="score-section">
            <h2>Você acertou {score} de {questions.length} perguntas!</h2>
            <p>Sua pontuação: {Math.round((score / questions.length) * 100)}%</p>
            <button onClick={restartQuiz} className="restart-btn">
              Recomeçar Quiz
            </button>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              <span>Pergunta {currentQuestion + 1}/{questions.length}</span>
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className="option-btn"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
