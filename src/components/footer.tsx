export function Footer() {
  return (
    <footer className="bg-zinc-950 px-4 py-8 text-center">
      <div className="mx-auto max-w-3xl border-t border-zinc-800 pt-8">
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
