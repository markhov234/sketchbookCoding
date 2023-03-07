import { LargeNumberLike } from "crypto";
import Link from "next/link";
import Image from "next/image";

// Ceci est pour déclarés plusieur type de variables.
interface MovieProps {
  title: string;
  description: string;
  id: string | LargeNumberLike;
  poster_path: string;
  release_date: string;
}

// Je mentionnes les arguments que je recois, et j'associe le tout avec Interface MovieProps qui les définits
export default function Movie({
  title,
  description,
  id,
  poster_path,
  release_date,
}: MovieProps) {
  const imagePath = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <h2>{title}</h2>
      <h3>{release_date}</h3>
      <Link href={`/movie/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}
