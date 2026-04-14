export function Footer() {
  return (
    <footer className="bg-zinc-950 px-4 py-8 text-center">
      <div className="mx-auto max-w-3xl border-t border-zinc-800 pt-8">
        <a
          href="https://x.com/vojtechprokop/status/2044159648291242224"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          Sdílet na X
        </a>
        <p className="text-sm text-zinc-600">
          Tato stránka dokumentuje reálnou zkušenost s reklamací u společnosti
          XXXLutz (XLCZ Nábytek s.r.o.). Všechna data vychází ze skutečné emailové
          a telefonní komunikace.
        </p>
        <p className="mt-4 text-xs text-zinc-700">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
