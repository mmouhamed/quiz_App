import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1>All Quizzes</h1>
      <ul>
        <li>
          <a href="/quiz">Quiz 1</a>
        </li>
        <li>
          <a href="/quiz">Quiz 2</a>
        </li>
        <li>
          <a href="/quiz">Quiz 3</a>
        </li>
      </ul>
    </section>
  );
}
