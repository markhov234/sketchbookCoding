import { PageWrapper } from "../components/pageWrapper";
import Movie from "./movie";
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <PageWrapper>
      <main className="my-12">
        <div className="grid gap-16 grid-cols-fluid">
          {res.results.map(
            (movie: {
              id: any;
              title: string;
              overview: string;
              poster_path: string;
              release_date: string;
            }) => (
              <Movie
                key={movie.id}
                title={movie.title}
                description={movie.overview}
                id={movie.id}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            )
          )}
        </div>
      </main>
    </PageWrapper>
  );
}

// "https://api.themoviedb.org/3/movie/popular";
