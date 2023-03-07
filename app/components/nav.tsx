import Image from "next/image";
import drGilette from "../../public/drGilette.png";
export default function Nav() {
  return (
    <nav className="flex">
      <Image src={drGilette} width={50} height={50} alt="DrGilette" />
      <ul className="flex w-full justify-around items-center text-lg font-semibold">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/info">Info</a>
        </li>
        <li>
          <a href="/movie">Movie</a>
        </li>
      </ul>
    </nav>
  );
}
