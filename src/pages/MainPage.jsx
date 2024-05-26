import { useEffect, useState } from 'react';
import '../App.css';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';
import { MyButton } from '../components/Mybutton';
import { QuestionList } from '../components/QuestionList';
import { CustomInput } from '../components/UI/CustomInput';
import { TextArea } from '../components/UI/CustomTextArea';
import { useToggle } from '../hooks/useToggle';

function MainPage() {
  const [modalActive, setModalActive] = useState(false);
  const [questions, setQuestions] = useState([
    { id: 1, title: "hui123", body: "body", login: "пухлик" },
    { id: 2, title: "huiqwer", body: "body", login: "пухлик" },
    { id: 3, title: "test", body: "body", login: "пухлик" },
    { id: 4, title: "huiqwr", body: "body", login: "пухлик" },
    { id: 5, title: "hui", body: "body", login: "пухлик" },
    { id: 6, title: "hui", body: "body", login: "пухлик" },
  ]);
  const [inputString, setInputString] = useState('');
  const [searchedQuestions, setSearchedQuestions] = useState(questions);
  const {isOpen, toggle} = useToggle()

  //TODO: write useEffect fetch to LOCALHOST(THIS IS DOMEN NAME!!!!! HTTP://LOCALHOST:5000/endpoint) server
  // useEffect(() => {
  //   const abortController = new AbortController()
  //   const { signal } = abortController;
  //   async function getPosts() { return }//recive data from server
  //   return () => {
  //     abortController.abort()
  //   }
  // }, [])

  useEffect(() => {
    setSearchedQuestions(
      questions.filter((value) =>
        value.title.toLowerCase().includes(inputString.toLowerCase())
      )
    );
  }, [inputString, questions]);

  return (
    <>
      <Header />
      <div className='mainblock'>
        <MyButton onClick={toggle}>Задать вопрос</MyButton>
        <Modal active={isOpen} setActive={toggle}>
          <p className='descriptionquestiontext'>Заголовок</p>
          <CustomInput className='ModalInput' />
          <p className='descriptionquestiontext'>Описание вопроса</p>
          <TextArea />
          <div className='sendbut'>
            <MyButton>Отправить</MyButton>
          </div>
        </Modal>
      </div>
      <div className="search-container">
        <CustomInput
          placeholder="Поиск"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
      </div>
      <QuestionList questions={searchedQuestions}></QuestionList>
    </>
  );
}

export default MainPage;