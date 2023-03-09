import { PageWrapper } from "../components/pageWrapper";
import GetProject from "./GetProject";

export default async function About() {
  return (
    <PageWrapper>
      <main className="shadow-lg rounded-md my-5 h-md bg-custom-section-light">
        <div className="mx-5 my-5">
          <h1>Hello About</h1>
          <GetProject />
        </div>
      </main>
    </PageWrapper>
  );
}
