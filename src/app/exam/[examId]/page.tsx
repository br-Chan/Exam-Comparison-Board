import { getPaper } from "@/app/lib/actions";
import Header from "../../components/header";
import QuestionRow from "../../components/questionRow";

export default async function Exam({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const examId = (await params).examId;
  const paper = getPaper(examId);

  return (
    <>
      <Header logo logout />
      {paper ? (
        <div>
          <div>
            <h1 className="mb-5 text-2xl font-bold">
              {paper.course} {paper.semester} {paper.year}
            </h1>
          </div>
          <QuestionRow />
          <QuestionRow />
          <QuestionRow />
          <QuestionRow />
        </div>
      ) : (
        <div>Couldn't find paper!</div>
      )}
    </>
  );
}
