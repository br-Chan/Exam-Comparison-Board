export default async function Exam({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const examId = (await params).examId;

  return (
    <main>
      <div>This is {examId}</div>
    </main>
  );
}
