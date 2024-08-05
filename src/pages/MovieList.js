import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies, error, isLoading } = useFetch(apiPath);
  useTitle(title);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => <Card key={movie.id} movie={movie} />)
          ) : (
            <div>
              <p className="text-slate-800 dark:text-slate-50">
                No movies found.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
