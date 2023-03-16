import { PageWrapper } from "../components/pageWrapper";
import GetProject from "./GetProject";

export default async function About() {
  return (
    <PageWrapper>
      <main className="shadow-lg rounded-md my-5 dark:bg-custom-section-dark bg-custom-section-light ">
        <div className="mx-5 my-5">
          <h1 className="py-5 text-2xl font-semibold w-full text-center">
            Mes projets
          </h1>
          <GetProject />
        </div>
      </main>
    </PageWrapper>
  );
}
