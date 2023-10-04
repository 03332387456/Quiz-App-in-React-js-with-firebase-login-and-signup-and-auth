import React, { useState } from 'react';
import "./AdminPanel.css"
import { useNavigate } from 'react-router-dom';

function AdminPanel() {
  const [quizName, setQuizName] = useState('');
  const [duration, setDuration] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [quizOpen, setQuizOpen] = useState('');
  const [description, setDescription] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState(['', '', '', '']);
  const [displayedQuizName, setDisplayedQuizName] = useState('');

  // Separate state variables for each input field
  const [isQuizNameDisabled, setIsQuizNameDisabled] = useState(false);
  const [isDurationDisabled, setIsDurationDisabled] = useState(false);
  const [isSecretKeyDisabled, setIsSecretKeyDisabled] = useState(false);
  const [isQuizOpenDisabled, setIsQuizOpenDisabled] = useState(false);
  const [isDescriptionDisabled, setIsDescriptionDisabled] = useState(false);

  const disableAll = () => {
    setIsLocked(true)
  }

  const addQuestion = () => {
    const newQuestion = {
      question: currentQuestion,
      options: currentOptions,
    };
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion('');
    setCurrentOptions(['']);
  }

  const saveQuiz = () => {
    // Save the quiz and update the displayedQuizName state
    setDisplayedQuizName(quizName);
    setQuizName('');
    setDuration('');
    setSecretKey('');
    setQuizOpen('');
    setDescription('');
    setCurrentQuestion('');
    setCurrentOptions(['', '', '', '']);
    setIsQuizNameDisabled(false);
    setIsDurationDisabled(false);
    setIsSecretKeyDisabled(false);
    setIsQuizOpenDisabled(false);
    setIsDescriptionDisabled(false);
  }

  const navigate = useNavigate();


  let logout = () => {
    navigate("/Login")
  }





  // const clearInputs = () => {
  //   // Clear all input values
  //   setQuizName('');
  //   setDuration('');
  //   setSecretKey('');
  //   setQuizOpen('');
  //   setDescription('');
  //   setCurrentQuestion('');
  //   setCurrentOptions(['', '', '', '']);
  // }

  return (
    <>
      <div className='container-fluid bg-secondary p-5 rounded shadow '>
        <div className="row">


          <div className="col-md-3 bg-seconadry py-2 border rounded shadow">
            <img src="https://i.insider.com/60638bd66183e1001981966a?width=1136&format=jpeg" alt="Set image here" className="rounded-circle py-3" />
            <button className='border p-2 mb-2 w-100 fs-5 text-center shadow rounded text-light bg-dark ' >{displayedQuizName}</button> <br /> <br /> <br />
            <button onClick={logout} className='border p-2 mb-2 w-100 fs-5 text-center shadow rounded text-dark bg-light' >Log out</button>
          </div>

          <div className="col-md-9">
            <b><span className='fs-4 text-dark-50'>Quiz App Admin</span></b>
            <button onClick={addQuestion} className='m-3 border p-2 fs-5 w-25 text-center shadow rounded text-light bg-dark' >Add Question</button>
            <button onClick={saveQuiz}  className='border p-2 fs-5 w-25 text-center shadow rounded text-light bg-dark' >Save Quiz</button>
            <br /> <br />

            <div>
              <input type="text" placeholder='Enter Quiz Name' className={`p-2 m-2 mb-4 border border-dark rounded w-25 ${isLocked || isQuizNameDisabled ? 'disabled' : ''}`} value={quizName} onChange={(e) => setQuizName(e.target.value)} disabled={isLocked || isQuizNameDisabled} />
              <input type="text" placeholder='30 sec duration' className={`p-2 m-2 mb-4 border border-dark rounded w-25 ${isLocked || isDurationDisabled ? 'disabled' : ''}`} value={duration} onChange={(e) => setDuration(e.target.value)} disabled={isLocked || isDurationDisabled} />
              <input type="text" placeholder='Enter Secret Key' className={`p-2 m-2 mb-4 border border-dark rounded w-25 ${isLocked || isSecretKeyDisabled ? 'disabled' : ''}`} value={secretKey} onChange={(e) => setSecretKey(e.target.value)} disabled={isLocked || isSecretKeyDisabled} />
              <input type="text" placeholder='Quiz Open' className={`p-2  m-2 mb-2 border border-dark rounded w-25 ${isLocked || isQuizOpenDisabled ? 'disabled' : ''}`} value={quizOpen} onChange={(e) => setQuizOpen(e.target.value)} disabled={isLocked || isQuizOpenDisabled} />
              <input type="text" placeholder='Description' className={`p-2  m-2 mb-2 border border-dark rounded w-50 ${isLocked || isDescriptionDisabled ? 'disabled' : ''}`} value={description} onChange={(e) => setDescription(e.target.value)} disabled={isLocked || isDescriptionDisabled} />
              <button onClick={disableAll} className='border p-2  text-center shadow rounded text-light bg-dark' >Lock Quiz</button> <br /> <br />
            </div>

            <div>
              <input
                type="text"
                placeholder='Questions'
                className='p-2 fs-5 m-2 mb-4 border border-dark rounded w-75'
                value={currentQuestion}
                onChange={(e) => setCurrentQuestion(e.target.value)}
              />
              {currentOptions.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => {
                    const updatedOptions = [...currentOptions];
                    updatedOptions[index] = e.target.value;
                    setCurrentOptions(updatedOptions);
                  }}
                  className='p-1 fs-5 m-1 border border-dark rounded w-75'
                />
              ))}
            </div>
            <ul className="list-group">
              {questions.map((question, questionIndex) => (
                <li key={questionIndex} className='border shadow rounded p-2 m-1 bg-info text-dark'>
                  {question.question}
                  <ul>
                    {question.options.map((option, optionIndex) => (
                      <li key={optionIndex}>{option}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPanel;














