export type Leistung = {
  slug: string;
  title: string;
  klartext: string;
  teaser: string;
  img: string;
};

export const LEISTUNGEN: Leistung[] = [
  {
    slug: "krankengymnastik",
    img: "/praxis/sportraum-2.jpg",
    title: "Krankengymnastik",
    klartext: "Gezielte Übungen und Mobilisation, die Beweglichkeit und Kraft aufbauen.",
    teaser:
      "Krankengymnastik (KG) ist die Basis der Physiotherapie: aktive Übungen und gezielte Mobilisation, abgestimmt auf Ihren Befund. Ziel ist, Beweglichkeit, Kraft und Alltagstauglichkeit zu verbessern.",
  },
  {
    slug: "manuelle-therapie",
    img: "/praxis/behandlungsraum.jpg",
    title: "Manuelle Therapie",
    klartext: "Behandlung von Gelenken und Muskeln mit gezielten Handgriffen.",
    teaser:
      "Manuelle Therapie (MT) ist eine Behandlung, bei der Gelenke, Muskeln und Nerven mit gezielten Handgriffen mobilisiert werden. Auf ärztliche Verordnung eine Leistung der gesetzlichen Krankenkassen.",
  },
  {
    slug: "kg-geraet",
    img: "/praxis/sportraum.jpg",
    title: "KG-Gerät",
    klartext: "Krankengymnastik am Gerät: Training im Sportraum, therapeutisch begleitet.",
    teaser:
      "Krankengymnastik am Gerät (KG-Gerät) ist angeleitetes Training an medizinischen Geräten. In unserem großen Sportraum trainieren Sie unter therapeutischer Begleitung, bis die Übungen sitzen.",
  },
  {
    slug: "kg-zns",
    img: "/praxis/behandlungsraum-arbeitsplatz.jpg",
    title: "KG-ZNS",
    klartext: "Neurologische Krankengymnastik, z. B. nach Schlaganfall oder bei Parkinson.",
    teaser:
      "KG-ZNS ist neurologische Krankengymnastik für Menschen mit Erkrankungen des zentralen Nervensystems, etwa nach Schlaganfall, bei Multipler Sklerose oder Parkinson. Die Behandlung unterstützt Bewegungsabläufe und Alltagsfunktionen.",
  },
  {
    slug: "lymphdrainage",
    img: "/praxis/ruhebereich.jpg",
    title: "Manuelle Lymphdrainage",
    klartext: "Sanfte Grifftechnik, die gestaute Flüssigkeit im Gewebe in Bewegung bringt.",
    teaser:
      "Manuelle Lymphdrainage (MLD) ist eine sanfte Grifftechnik, die gestaute Flüssigkeit im Gewebe in Bewegung bringt. Sie kann Schwellungen reduzieren und das Spannungsgefühl lindern, z. B. nach Operationen oder bei Lymphödemen.",
  },
  {
    slug: "waerme-elektrotherapie",
    img: "/praxis/befundraum.jpg",
    title: "Wärme- & Elektrotherapie",
    klartext: "Ergänzende Anwendungen, die Muskeln lockern und die Behandlung unterstützen.",
    teaser:
      "Wärme- und Elektrotherapie sind ergänzende Anwendungen: Wärme kann die Muskulatur lockern, Elektrotherapie arbeitet mit sanften Stromimpulsen. Beides wird meist mit KG oder MT kombiniert verordnet.",
  },
];
