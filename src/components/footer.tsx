import { Github } from "../assets/icons/github";

export default function Footer() {
  return (
    <footer className="fixed w-100vw bottom-0 py-8px flex items-center justify-center">
      © 2024 -
      <span className="ml-8px px-8px py-4px rounded bg-#e6edf378 hover:bg-#e6edf3 transition-all flex items-center gap-8px">
        <Github />
        <a
          href="https://github.com/ramazandogna"
          target="_blank"
          rel="noreferrer"
          className="text-current"
        >
          Ramazan Doğan
        </a>
      </span>
    </footer>
  );
}
