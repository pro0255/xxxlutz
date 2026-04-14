export type EventType = "action" | "problem" | "waiting";

export interface TimelineEvent {
  date: string;
  title: string;
  desc: string;
  type: EventType;
  quote?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    date: "28. 12. 2025",
    title: "Objednávka pohovky",
    desc: "Objednáno v prodejně v Ostravě. Obj. číslo 91NFRT.",
    type: "action",
  },
  {
    date: "29. 12. 2025",
    title: "Vyzvednutí v Praze",
    desc: "Pohovka vyzvednuta na prodejně, zabalená. Naložena do dodávky.",
    type: "action",
  },
  {
    date: "~30. 12. 2025",
    title: "Rozbalení — překvapení",
    desc: "Chybí 2 polštáře. U nového nábytku nepřijatelné.",
    type: "problem",
  },
  {
    date: "~30. 12. 2025",
    title: "Nahlášení reklamace",
    desc: "Email na infocentrum s fotodokumentací a detailním popisem problému. Telefonicky reklamaci nejprve nechtěli přijmout.",
    type: "action",
  },
  {
    date: "5. 1. 2026",
    title: "Odpověď reklamačního oddělení",
    desc: "Po několika kolech emailové komunikace reklamaci konečně přijali.",
    quote: "Prosím o informaci kde konkrétně jsou reklamované vady.",
    type: "waiting",
  },
  {
    date: "7. 1. 2026",
    title: "Další požadavek na fotky",
    desc: "Potřebují foto z větší perspektivy, aby mohli určit konkrétní díly.",
    quote: "Prosím o nafocení vady z větší perspektivy.",
    type: "waiting",
  },
  {
    date: "7. 1. 2026",
    title: "Foto odesláno",
    desc: "Foto odesláno ten samý den večer. Splněno vše co chtěli.",
    type: "action",
  },
  {
    date: "18. 1. 2026",
    title: "Follow-up email",
    desc: "Ptám se na update z jejich strany. Žádná odpověď.",
    quote: "Je k problému nějaký update z vaší strany?",
    type: "problem",
  },
  {
    date: "19. 1. 2026",
    title: "Čekáme na díly",
    desc: "Konečně odpověď — čekají na dodání nových dílů. Prý to bude trvat až 10 týdnů.",
    quote: "Čekáme na dodání nových dílů k dořešení reklamace.",
    type: "waiting",
  },
  {
    date: "21. 1. 2026",
    title: "Rodina se zapojuje",
    desc: "Rodinný příslušník kontaktuje firmu. Jiný pracovník odpovídá, že lhůta pro vyřízení reklamace marně uplynula. Nabízí výběr jiného zboží.",
    quote: "Po marném uplynutí lhůty pro vyřízení reklamace to možné samozřejmě je. Mohu Vám případně nabídnout výběr jiného zboží.",
    type: "problem",
  },
  {
    date: "~Únor 2026",
    title: "Telefonát #1",
    desc: "Volám na reklamační oddělení. Chci vědět, jak to pokračuje. Slíbí, že se kolegynka ozve.",
    quote: "Kolegynka se Vám ozve.",
    type: "problem",
  },
  {
    date: "~Únor 2026",
    title: "Telefonát #2",
    desc: "Nikdo se neozval. Volám znovu. Stejná odpověď, jiný člověk.",
    quote: "Předám to kolegům, ozvou se Vám.",
    type: "problem",
  },
  {
    date: "~Březen 2026",
    title: "Telefonát #3",
    desc: "Rodinný příslušník volá. Říkají, že to bude ještě trvat. Žádný konkrétní termín.",
    quote: "Reklamace se stále řeší, musíte počkat.",
    type: "problem",
  },
  {
    date: "~Březen 2026",
    title: "Telefonát #4",
    desc: "Volám znovu, chci konečně řešení. Opět příslib callbacku. Opět nic.",
    quote: "Kolegynka se Vám ozve.",
    type: "problem",
  },
  {
    date: "Březen / Duben 2026",
    title: "Reklamace připravena",
    desc: "Email o tom, že reklamace je připravena k vyzvednutí na skladu v Čestlicích. Ale musím přivézt staré díly na výměnu — na vlastní náklady do skladu.",
    quote: "Pokud se díly, které je nutné vyměnit, stále nachází u Vás, prosím, přivezte je s sebou na výměnu do našeho skladu.",
    type: "waiting",
  },
  {
    date: "4. 4. 2026",
    title: "Urgence s deadlinem",
    desc: "Připomenutí s ultimátem: vyzvednout do 19. 4. 2026, jinak reklamaci považují za neplatnou a díly vrátí výrobci.",
    quote: "Požádali bychom Vás, abyste si je přijel/a vyměnit nejpozději do 19.04.2026. Po uplynutí této lhůty budeme považovat Vaši reklamaci za neplatnou.",
    type: "problem",
  },
  {
    date: "Duben 2026",
    title: "Poslední pokus",
    desc: "Volám na customer service, že navrhované řešení není přijatelné. Chtěl bych doručení, ne jezdit po skladech. Od té doby opět ticho.",
    type: "problem",
  },
];

export const COMPLAINT_START_DATE = new Date(2025, 11, 30); // 30.12.2025
export const DEADLINE_DATE = new Date(2026, 3, 19); // 19.4.2026
