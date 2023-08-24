import MainSection from "./components/mainSection";
import { PageWrapper } from "./components/pageWrapper";
// import SpotifyCurrentlyPlaying from "./components/SpotifyCurrentlyPlaying";

export default function Home() {
  return (
    <PageWrapper>
      <MainSection>
        <div className=" px-8 flex justify-center md:justify-between flex-shrink flex-wrap py-5">
          <div className="w-full text-center md:text-left  md:w-4/6">
            <div className=" w-full md:w-3/5 ">
              <h1 className="text-lg md:text-xl font-semibold">
                Qu&apos;est-ce qu&apos;un sketchbook coding ?
              </h1>
              <div className="py-3 ">
                Ceci est regroupement de plusieurs petits projets, expliqué en
                détail. Lorsque je trouve quelques choses d&apos;intéressant, je vais
                le répliquer à ma façon dans ce petit site web.
              </div>
            </div>
            <div className="py-5">
              <h2 className="text-base text-left md:text-lg">
                Dernier projet travaillé
              </h2>
            </div>
          </div>

          <div className="">
            <h3 className=" text-base md:text-lg text-right ml-auto">
              Activités récentes
            </h3>
            <div>{/* <SpotifyCurrentlyPlaying /> */}</div>
          </div>
        </div>
      </MainSection>
    </PageWrapper>
  );
}

// "https://api.themoviedb.org/3/movie/popular";
