import AnswerCard from "./answer_card";

export default function QuestionRow() {
  return (
    <div className="border-t-2 border-white py-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">QUESTION 1</h3>
        <button className="rounded-full bg-blue px-6 py-3 text-sm">
          ADD ANSWER
        </button>
      </div>
      <div className="-mx-primary mt-4 w-screen overflow-x-auto">
        <div className="flex w-fit gap-2 px-primary">
          <AnswerCard
            author="Username"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            votes={{ up: 10, down: 15 }}
          ></AnswerCard>
          <AnswerCard
            author="Username"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            votes={{ up: 10, down: 15 }}
          ></AnswerCard>
          <AnswerCard
            author="Username"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            votes={{ up: 10, down: 15 }}
          ></AnswerCard>
          <AnswerCard
            author="Username"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            votes={{ up: 10, down: 15 }}
          ></AnswerCard>
        </div>
      </div>
    </div>
  );
}
