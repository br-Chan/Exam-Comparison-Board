import Header from "../../components/header";
import QuestionRow from "../../components/questionRow";

export default async function Exam({
  params,
}: {
  params: Promise<{ examId: string }>
}) {
  const examId = (await params).examId;

  return (
    <>
      <Header logo logout />
      <div>
        <div>
          <h1 className="mb-5 text-2xl font-bold">PAPER001 Semester 2 2077</h1>
        </div>
        <QuestionRow />
        <QuestionRow />
        <QuestionRow />
        <QuestionRow />
      </div>
    </>
  );
}
