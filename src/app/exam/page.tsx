import AnswerCard from "../components/answer_card"
import Header from "../components/header"

function QuestionRow() {
  return (
    <div className=" border-white border-t-2 py-4">
      <div className=" flex justify-between items-center">
        <h3 className=" text-lg font-bold">QUESTION 1</h3>
        <button className=" bg-blue px-6 py-3 rounded-full text-sm">ADD ANSWER</button>
      </div>
      <div className=" mt-4 w-screen overflow-x-scroll -mx-primary">
        <div className=" flex gap-2 w-fit px-primary">
          <AnswerCard author="Username" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." votes={{ up: 10, down: 15 }}></AnswerCard>
          <AnswerCard author="Username" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." votes={{ up: 10, down: 15 }}></AnswerCard>
          <AnswerCard author="Username" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." votes={{ up: 10, down: 15 }}></AnswerCard>
          <AnswerCard author="Username" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." votes={{ up: 10, down: 15 }}></AnswerCard>
        </div>
      </div>
    </div>
  )
}

export default function Exam() {
  return <>
    <Header logo logout />
    <div>
      <div>
        <h1 className=" text-2xl font-bold mb-5">PAPER001 Semester 2 2077</h1>
      </div>
      <QuestionRow />
      <QuestionRow />
      <QuestionRow />
      <QuestionRow />
    </div>
  </>
}
