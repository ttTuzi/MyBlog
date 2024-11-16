import { useEffect, useState, useRef } from "react";
import StarRating from "./StarRating";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState.jsx";
import { useKey } from "./useKey";

const KEY = "67b5ad9c";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    if (id !== selectedId) {
      setSelectedId(id);
    } else {
      setSelectedId(null);
    }
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  //fetch movie according to the query

  return (
    <div className="bg-slate-900 min-h-screen p-6 font-sans text-white">
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}

          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}

          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

function Loader() {
  return (
    <p className="text-center uppercase text-2xl font-semibold my-12">
      Loading...
    </p>
  );
}

function NavBar({ children }) {
  return (
    <nav
      style={{ "--color-primary": "#6741d9" }}
      className="grid grid-cols-3 items-center h-[7.2rem] px-[3.2rem] bg-[var(--color-primary)] rounded-[0.9rem]"
    >
      {children}
    </nav>
  );
}

function ErrorMessage({ message }) {
  return <p className="text-center text-2xl p-12">{message}</p>;
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-4xl" role="img">
        🍿
      </span>
      <h1 className="text-2xl font-semibold text-white">usePopcorn</h1>
    </div>
  );
}

function Search({ query, setQuery }) {
  // useEffect(function () {
  //   const el = document.querySelector(".search");
  //   el.focus();
  // }, []);

  //useRef to connect the component
  const inputElement = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    setQuery("");
  });

  // useEffect(
  //   function () {
  //     function callback(e) {

  //       if (e.code === "Enter") {
  //         if (document.activeElement === inputElement.current) return;
  //         inputElement.current.focus();
  //         setQuery("");
  //       }
  //     }

  //     document.addEventListener("keydown", callback);

  //     inputElement.current.focus();

  //     return () => document.removeEventListener("keydown", callback);
  //   },
  //   [setQuery]
  // );

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
      style={{
        "--color-text": "#dee2e6",
        "--color-text-dark": "#adb5bd",
        "--color-primary-light": "#7950f2",
      }}
      className="
    self-center
    border-none
    px-4 py-2.5
    text-[1.8rem]
    rounded-[0.7rem]
    w-[40rem]
    transition-all
    duration-300
    text-[var(--color-text)]
    bg-[var(--color-primary-light)]
    placeholder-[var(--color-text-dark)]
    focus:outline-none
    focus:shadow-lg
    focus:translate-y-[-2px]"
    />
  );
}

function NumResult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length + 1}</strong> results
    </p>
  );
}

function Main({ children }) {
  return (
    <main className="mt-6 h-[calc(100vh-7.2rem-3*2.4rem)] flex gap-6 justify-center">
      {children}
    </main>
  );
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-[32rem] max-w-[32rem] bg-[var(--color-background-500)] rounded-[0.9rem] relative overflow-hidden">
      <button
        className="absolute top-2 right-2 h-6 w-6 rounded-full border-none bg-[var(--color-background-900)] text-[var(--color-text)] text-lg font-bold cursor-pointer z-10"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && (
        <div className="max-h-[32rem] overflow-y-auto overflow-x-hidden p-4 text-[1.6rem]">
          {children}
        </div>
      )}
    </div>
  );
}

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list-none py-2 overflow-hidden h-[calc(100%-9rem)]">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelectMovie }) {
  return (
    <li
      onClick={() => onSelectMovie(movie.imdbID)}
      className="relative grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-6 text-[1.6rem] items-center p-4 border-b border-[var(--color-background-100)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-background-100)]"
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="w-full row-span-full"
      />
      <h3 className="text-[1.8rem]">{movie.Title}</h3>
      <div className="flex items-center gap-6">
        <p className="flex items-center gap-2">
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setmovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  //why not use let, because it will reset to initial value each time
  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) {
        countRef.current = countRef.current + 1;
      }
    },
    [userRating]
  );

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split("").at(0)),
      userRating,
      conuntRatingDecisions: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  //liscen to escape key, when movie detail is open
  //这里useEffect的执行顺序:
  /**
   * 1. 按下 Escape 键，浏览器触发 keydown 事件。
     2. 浏览器调用 绑定在 document 上的所有 keydown 事件监听器，包括你在 useEffect 中注册的 callback 函数。
     3. callback 函数执行，检查事件对象 e.code 是否等于 "Escape"。
     4. 如果 e.code === "Escape"，则调用 onCloseMovie 函数，执行关闭电影的逻辑。
     5. 清理函数：
          如果 onCloseMovie 函数发生变化或组件即将卸载，useEffect 返回的清理函数将会执行，移除 keydown 事件监听器。
          然后 useEffect 会根据新的依赖项重新绑定监听器，确保使用最新的 onCloseMovie。
   */
  //总结:useEffect在这里就是为了在onCloseMovie发生变化的时候触发Cleanup function.
  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (e.code === "Escape") {
  //         onCloseMovie();
  //       }
  //     }

  //     document.addEventListener("keydown", callback);

  //     return function () {
  //       document.removeEventListener("keydown", callback);
  //     };
  //   },
  //   [onCloseMovie]
  // );

  useKey("escape", onCloseMovie);

  //fetch select the movie detail
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setmovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  //set title to current movie
  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [title]
  );

  return (
    <div className="leading-relaxed text-[1.4rem]">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="flex">
            <button
              className="absolute top-[0.6rem] h-8 left-[0.6rem] w-8 rounded-full border-none bg-white text-[var(--color-background-500)] shadow-lg font-sans text-3xl font-bold cursor-pointer z-10 flex items-center justify-center"
              onClick={onCloseMovie}
            >
              &larr;
            </button>
            <img
              src={poster}
              alt={`poster of the ${movie} movie`}
              className="w-1/3"
            />
            <div className="w-full p-6 bg-[var(--color-background-100)] flex flex-col gap-4">
              <h2 className="text-2xl mb-1 text-bold leading-tight">{title}</h2>
              <p className="flex items-center gap-2">
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p className="flex items-center gap-2">
                <span>⭐</span>
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>

          <section className="p-10 flex flex-col gap-4">
            <div className="bg-[var(--color-background-100)] rounded-[0.9rem] p-8 font-semibold flex flex-col gap-6">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="bg-[var(--color-primary)] text-[var(--color-text)] border-none rounded-full text-[1.4rem] p-4 font-bold cursor-pointer transition-all duration-300 hover:bg-[var(--color-primary-light)]"
                      onClick={handleAdd}
                    >
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>you rated this movie {watchedRating} 🌟</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="p-[2.2rem_3.2rem_1.8rem_3.2rem] rounded-[0.9rem] bg-[var(--color-background-100)] shadow-md text-xl">
      <h2 className="uppercase mb-[0.6rem] font-bold">Movies you watched</h2>
      <div className="flex items-center gap-6 font-semibold">
        <p className="flex items-center gap-2">
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p className="flex items-center gap-2">
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchList({ watched, onDeleteWatched }) {
  return (
    <ul className="list-none py-2 overflow-hidden">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li className="relative grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-6 text-[1.6rem] items-center py-4 px-8 border-b border-[var(--color-background-100)]">
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        className="w-full row-span-full"
      />
      <h3 className="text-[1.8rem]">{movie.title}</h3>
      <div className="flex items-center gap-6">
        <p className="flex items-center gap-2">
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="absolute right-6 h-[1.8rem] w-[1.8rem] rounded-full border-none bg-[var(--color-red)] text-[var(--color-background-900)] text-[0.9rem] font-bold cursor-pointer transition-all duration-300 hover:bg-[var(--color-red-dark)]"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
