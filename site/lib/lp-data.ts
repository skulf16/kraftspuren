/**
 * Inhalte der SEA-Landingpages (/lp/...).
 * Aufbau nach sea-landingpage-struktur.md, Sprache nach voice-profile + SEO-Skill.
 * Eine LP pro Anzeigengruppe; Message Match: Ad-Headline muss sich in H1/Subline wiederfinden.
 */

export type LpFaq = { question: string; answer: string };

export type LandingPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  /** H1 = Hauptkeyword + Ort */
  h1: string;
  subline: string;
  heroImg: string;
  /** Sektion 4: Was ist das, für wen? 2-3 Absätze */
  leistungTitle: string;
  leistungAbsaetze: string[];
  /** Sektion 6 nur auf passenden Seiten */
  sportraum: boolean;
  faq: LpFaq[];
};

export const ABLAUF_LP = [
  {
    title: "Termin anfragen",
    text: "Rufen Sie an - mit Rezept oder ohne. Ihre Verordnung muss innerhalb von 28 Tagen nach Ausstellung begonnen werden, warten Sie also nicht zu lange.",
  },
  {
    title: "Befund & Erstgespräch",
    text: "Beim ersten Termin schauen wir genau hin: Was tut weh, was soll besser werden? Daraus entsteht Ihr Behandlungsplan.",
  },
  {
    title: "Behandlung",
    text: "Je nach Verordnung behandeln wir am Tisch, mit den Händen oder im Sportraum am Gerät. Sie wissen immer, warum wir was machen.",
  },
  {
    title: "Übungen für zu Hause",
    text: "Sie bekommen wenige, dafür passende Übungen mit. Die wirken nur, wenn Sie sie auch machen - das sagen wir ehrlich dazu.",
  },
];

const FAQ_REZEPT: LpFaq = {
  question: "Wie schnell muss ich mein Rezept einlösen?",
  answer:
    "Die Behandlung muss in der Regel innerhalb von 28 Tagen nach Ausstellung der Verordnung beginnen, bei dringlichem Behandlungsbedarf innerhalb von 14 Tagen (Heilmittel-Richtlinie). Melden Sie sich am besten direkt, wenn Sie das Rezept in der Hand haben.",
};

const FAQ_ZUZAHLUNG: LpFaq = {
  question: "Wie hoch ist die Zuzahlung bei gesetzlicher Versicherung?",
  answer:
    "Gesetzlich Versicherte ab 18 Jahren zahlen 10 Prozent der Behandlungskosten plus 10 Euro je Verordnung (§ 32 SGB V). Wer eine Zuzahlungsbefreiung der Krankenkasse hat, zahlt nichts dazu.",
};

const FAQ_OHNE_REZEPT: LpFaq = {
  question: "Kann ich auch ohne Rezept kommen?",
  answer:
    "Ja, als Selbstzahler können Sie viele Behandlungen direkt bei uns buchen. Die Preise nennen wir Ihnen transparent vorab am Telefon.",
};

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: "physiotherapie-potsdam",
    metaTitle: "Physiotherapie Potsdam - Alle Kassen | kraftspuren",
    metaDescription:
      "Physiotherapie in Potsdam mit jeder Zulassung: KG, Manuelle Therapie, KG-Gerät, Lymphdrainage. GKV, PKV und Selbstzahler. Jetzt Termin anfragen.",
    h1: "Physiotherapie in Potsdam",
    subline:
      "Alle Kassen, jede Zulassung: Wir behandeln gesetzlich Versicherte, Privatpatienten und Selbstzahler - von Krankengymnastik bis Lymphdrainage.",
    heroImg: "/praxis/behandlungsraum-arbeitsplatz.jpg",
    leistungTitle: "Was erwartet Sie bei uns?",
    leistungAbsaetze: [
      "Das Rezept liegt auf dem Tisch, und jetzt? Bei uns lösen Sie jede physiotherapeutische Verordnung ein. Wir haben sämtliche Zulassungen: Krankengymnastik (KG), Manuelle Therapie (MT, gezielte Handgriffe an Gelenken und Muskeln), Krankengymnastik am Gerät (KGG), neurologische Krankengymnastik (KG-ZNS), Manuelle Lymphdrainage (MLD) sowie Wärme- und Elektrotherapie.",
      "Typische Anlässe sind Rücken- und Gelenkbeschwerden, die Zeit nach einer Operation oder neurologische Erkrankungen - immer auf Grundlage der ärztlichen Verordnung. Was genau wir behandeln und worauf die Behandlung hinarbeitet, legen wir gemeinsam beim Befund fest.",
      "Und danach? Im großen Sportraum trainieren Sie an modernen Geräten weiter, begleitet von Ihrem Therapeuten, bis die Übungen sitzen.",
    ],
    sportraum: true,
    faq: [
      {
        question: "Brauche ich ein Rezept für die Physiotherapie?",
        answer:
          "Für eine Behandlung über die gesetzliche oder private Krankenversicherung brauchen Sie eine ärztliche Verordnung (Heilmittelverordnung). Ohne Rezept können Sie viele Leistungen auch als Selbstzahler buchen.",
      },
      FAQ_ZUZAHLUNG,
      FAQ_REZEPT,
      {
        question: "Was passiert beim ersten Termin?",
        answer:
          "Der erste Termin startet mit einem Befundgespräch: Wir besprechen Ihre Beschwerden, schauen uns Beweglichkeit und Kraft an und legen fest, worauf die Behandlung hinarbeitet. Danach beginnt meist schon die erste Behandlung.",
      },
      {
        question: "Bieten Sie auch Hausbesuche an?",
        answer:
          "Ja, wenn Ihr Arzt einen Hausbesuch verordnet hat, kommen wir zu Ihnen. Rufen Sie uns an, dann klären wir die Details.",
      },
    ],
  },
  {
    slug: "krankengymnastik-potsdam",
    metaTitle: "Krankengymnastik Potsdam - Mit Rezept | kraftspuren",
    metaDescription:
      "Krankengymnastik (KG) in Potsdam: Rezept einlösen als Kassen- oder Privatpatient, Zuzahlung erklärt, Übungen bis sie sitzen. Termin anfragen.",
    h1: "Krankengymnastik in Potsdam",
    subline:
      "Steht KG auf Ihrer Verordnung? Bei uns lösen Sie das Rezept ein - als gesetzlich Versicherter, Privatpatient oder Selbstzahler.",
    heroImg: "/praxis/sportraum-2.jpg",
    leistungTitle: "Was ist Krankengymnastik - und für wen?",
    leistungAbsaetze: [
      "Krankengymnastik (KG) ist die Basis der Physiotherapie: aktive Übungen und gezielte Mobilisation, abgestimmt auf Ihren Befund. Ziel der Behandlung ist, Beweglichkeit und Kraft zu verbessern und Sie zurück in Ihren Alltag zu bringen - nach einer Operation, bei Rückenbeschwerden oder wenn der Arzt KG verordnet hat.",
      "Bei uns bleibt es nicht bei der Behandlung am Tisch. Sie lernen die Übungen unter Anleitung, wiederholen sie im Sportraum und bekommen eine kleine Auswahl für zu Hause mit. Wie viele Behandlungen es braucht, lässt sich vorher nicht seriös sagen - das zeigt der Verlauf, und wir besprechen ihn offen mit Ihnen.",
    ],
    sportraum: true,
    faq: [
      {
        question: "Was genau steht bei Krankengymnastik auf dem Rezept?",
        answer:
          "Auf der Heilmittelverordnung steht meist die Abkürzung KG plus die Anzahl der Behandlungen. Bringen Sie das Rezept einfach mit - wir erklären Ihnen beim ersten Termin, was verordnet wurde.",
      },
      FAQ_REZEPT,
      FAQ_ZUZAHLUNG,
      {
        question: "Wie lange dauert eine Behandlung?",
        answer:
          "Das hängt von Ihrer Verordnung ab - sie gibt Art und Umfang der Behandlung vor. Beim ersten Termin kommt das Befundgespräch dazu, planen Sie dafür etwas mehr Zeit ein.",
      },
      FAQ_OHNE_REZEPT,
    ],
  },
  {
    slug: "manuelle-therapie-potsdam",
    metaTitle: "Manuelle Therapie Potsdam - Termin | kraftspuren",
    metaDescription:
      "Manuelle Therapie (MT) in Potsdam: gezielte Handgriffe an Gelenken und Muskeln. Zulassung für alle Kassen, Zuzahlung erklärt. Jetzt anrufen.",
    h1: "Manuelle Therapie in Potsdam",
    subline:
      "MT vom Arzt verordnet? Wir sind für Manuelle Therapie zugelassen und rechnen mit allen Kassen ab - auch privat und für Selbstzahler.",
    heroImg: "/praxis/behandlungsraum.jpg",
    leistungTitle: "Was ist Manuelle Therapie?",
    leistungAbsaetze: [
      "Das Rezept vom Orthopäden sagt: sechsmal MT. Aber was passiert da eigentlich? Manuelle Therapie ist eine physiotherapeutische Behandlung, bei der Gelenke, Muskeln und Nerven mit gezielten Handgriffen mobilisiert werden. Sie wird vom Arzt verordnet, etwa bei eingeschränkter Beweglichkeit oder Beschwerden an Gelenken und Wirbelsäule.",
      "Die Behandlung kann Beschwerden lindern und die Beweglichkeit verbessern - wie schnell sich etwas tut, hängt vom Befund ab, und genau darüber sprechen wir beim ersten Termin. Ergänzend zeigen wir Ihnen Übungen, damit das Erreichte zwischen den Terminen nicht verloren geht.",
    ],
    sportraum: false,
    faq: [
      {
        question: "Was ist der Unterschied zwischen Manueller Therapie und Krankengymnastik?",
        answer:
          "Manuelle Therapie arbeitet vor allem mit den Händen des Therapeuten an Gelenken und Muskeln. Krankengymnastik setzt stärker auf aktive Übungen, die Sie selbst ausführen. Was für Sie passt, entscheidet der Arzt mit der Verordnung - oft ergänzen sich beide.",
      },
      {
        question: "Tut Manuelle Therapie weh?",
        answer:
          "Einzelne Handgriffe können ziehen oder ungewohnt sein, Schmerzen sind aber nicht das Ziel. Sagen Sie während der Behandlung einfach Bescheid - wir passen Druck und Technik an.",
      },
      FAQ_REZEPT,
      FAQ_ZUZAHLUNG,
      {
        question: "Wie viele Behandlungen brauche ich?",
        answer:
          "Die Anzahl steht auf Ihrer Verordnung. Ob es dabei bleibt, zeigt der Verlauf - eine seriöse Vorhersage ist vorher nicht möglich, und Folgeverordnungen stellt Ihr Arzt aus.",
      },
    ],
  },
  {
    slug: "kg-geraet-potsdam",
    metaTitle: "KG am Gerät Potsdam - Großer Sportraum | kraftspuren",
    metaDescription:
      "Krankengymnastik am Gerät (KGG) in Potsdam: Training im großen Sportraum, therapeutisch begleitet. Kassenleistung auf Verordnung. Termin anfragen.",
    h1: "Krankengymnastik am Gerät in Potsdam",
    subline:
      "KGG auf dem Rezept? In unserem großen Sportraum trainieren Sie an modernen Geräten - angeleitet von Ihrem Therapeuten, bis die Übungen sitzen.",
    heroImg: "/praxis/sportraum.jpg",
    leistungTitle: "Was ist Krankengymnastik am Gerät?",
    leistungAbsaetze: [
      "Klingt nach Fitnessstudio, ist aber Therapie: Krankengymnastik am Gerät (KGG) ist angeleitetes Training an medizinischen Geräten, das der Arzt verordnet - zum Beispiel nach einer Operation oder um Kraft und Belastbarkeit wieder aufzubauen. Der Unterschied zum Studio: Ihr Therapeut legt die Übungen nach Befund fest und begleitet Sie dabei.",
      "Genau dafür haben wir Platz. Unser Sportraum ist das Herzstück der Praxis - Sie trainieren dort nicht nach Schema, sondern nach Ihrem Behandlungsplan. Und wenn eine Übung zu Hause weitergehen soll, üben wir sie so lange, bis Sie sich sicher fühlen.",
    ],
    sportraum: true,
    faq: [
      {
        question: "Was ist der Unterschied zum Fitnessstudio?",
        answer:
          "KG-Gerät ist eine ärztlich verordnete Therapie: Die Übungen richten sich nach Ihrem Befund, ein Therapeut leitet Sie an und passt das Training an. Im Fitnessstudio trainieren Sie auf eigene Verantwortung.",
      },
      {
        question: "Übernimmt die Krankenkasse Krankengymnastik am Gerät?",
        answer:
          "Ja, mit ärztlicher Verordnung ist KGG eine Leistung der gesetzlichen Krankenkassen. Ab 18 Jahren fällt die gesetzliche Zuzahlung an: 10 Prozent der Kosten plus 10 Euro je Verordnung (§ 32 SGB V).",
      },
      {
        question: "Was ziehe ich zum Training an?",
        answer:
          "Bequeme Kleidung, in der Sie sich gut bewegen können, und saubere Sportschuhe reichen völlig. Mehr brauchen Sie nicht.",
      },
      FAQ_REZEPT,
      FAQ_OHNE_REZEPT,
    ],
  },
  {
    slug: "lymphdrainage-potsdam",
    metaTitle: "Lymphdrainage Potsdam - MLD-Termin | kraftspuren",
    metaDescription:
      "Manuelle Lymphdrainage (MLD) in Potsdam: sanfte Grifftechnik bei Schwellungen und Lymphödem, z. B. nach OP. Alle Kassen. Jetzt Termin anfragen.",
    h1: "Manuelle Lymphdrainage in Potsdam",
    subline:
      "MLD verordnet - etwa nach einer Operation oder bei einem Lymphödem? Bei uns lösen Sie das Rezept ein, egal wie Sie versichert sind.",
    heroImg: "/praxis/ruhebereich.jpg",
    leistungTitle: "Was ist Manuelle Lymphdrainage?",
    leistungAbsaetze: [
      "Manuelle Lymphdrainage (MLD) ist eine sanfte Grifftechnik, die gestaute Flüssigkeit im Gewebe in Bewegung bringt. Sie kann Schwellungen reduzieren und das Spannungsgefühl lindern - typisch verordnet nach Operationen, bei einem Lymphödem oder Lipödem.",
      "Die Behandlung ist ruhig und schmerzarm; viele Patienten empfinden sie als angenehm. Je nach Verordnung gehört eine Kompressionsversorgung dazu - was für Sie gilt, steht auf dem Rezept, und wir erklären es Ihnen beim ersten Termin.",
    ],
    sportraum: false,
    faq: [
      {
        question: "Tut Lymphdrainage weh?",
        answer:
          "Nein, Manuelle Lymphdrainage arbeitet mit sanften, rhythmischen Griffen an der Hautoberfläche. Sollte etwas unangenehm sein, sagen Sie einfach Bescheid.",
      },
      {
        question: "Was bedeutet MLD-30, MLD-45 oder MLD-60 auf meinem Rezept?",
        answer:
          "Die Zahl ist die verordnete Behandlungszeit in Minuten. Ihr Arzt legt sie je nach Befund fest - Sie müssen sich darum nicht kümmern, wir richten den Termin danach.",
      },
      FAQ_REZEPT,
      FAQ_ZUZAHLUNG,
      {
        question: "Wie oft brauche ich Lymphdrainage?",
        answer:
          "Häufigkeit und Umfang stehen auf Ihrer Verordnung und hängen von der Ursache ab. Bei chronischen Beschwerden wie einem Lymphödem verordnet der Arzt die Behandlung oft über längere Zeit - das besprechen Sie mit Ihrer Praxis und uns.",
      },
    ],
  },
  {
    slug: "kg-zns-potsdam",
    metaTitle: "Neurologische Physiotherapie Potsdam | kraftspuren",
    metaDescription:
      "KG-ZNS in Potsdam: neurologische Krankengymnastik nach Schlaganfall, bei Parkinson oder MS. Zulassung vorhanden, alle Kassen. Termin anfragen.",
    h1: "Neurologische Physiotherapie in Potsdam",
    subline:
      "KG-ZNS ist Krankengymnastik für Menschen mit neurologischen Erkrankungen - zum Beispiel nach einem Schlaganfall, bei Parkinson oder Multipler Sklerose.",
    heroImg: "/praxis/behandlungsraum-arbeitsplatz.jpg",
    leistungTitle: "Was ist KG-ZNS - und für wen?",
    leistungAbsaetze: [
      "Oft sind es die Angehörigen, die suchen: Der Vater hatte einen Schlaganfall, die Reha ist vorbei, und jetzt soll es ambulant weitergehen. KG-ZNS ist neurologische Krankengymnastik für Erkrankungen des zentralen Nervensystems - der Arzt verordnet sie zum Beispiel nach einem Schlaganfall, bei Multipler Sklerose oder Parkinson.",
      "Die Behandlung unterstützt Bewegungsabläufe und Alltagsfunktionen: aufstehen, gehen, greifen. Wir arbeiten kleinschrittig und in einem Tempo, das zum Patienten passt. Fortschritte brauchen bei neurologischen Erkrankungen Zeit - das sagen wir ehrlich, und genau deshalb lohnt sich Dranbleiben.",
    ],
    sportraum: false,
    faq: [
      {
        question: "Brauche ich für KG-ZNS eine besondere Verordnung?",
        answer:
          "Ja, KG-ZNS wird vom Arzt gezielt verordnet und steht so auf der Heilmittelverordnung. Die Zulassung dafür haben wir - Sie können das Rezept direkt bei uns einlösen.",
      },
      FAQ_REZEPT,
      FAQ_ZUZAHLUNG,
      {
        question: "Kann eine Begleitperson mit in die Behandlung kommen?",
        answer:
          "Ja, gern. Gerade am Anfang hilft es oft, wenn Angehörige den Ablauf kennen und wissen, welche Übungen zu Hause sinnvoll sind.",
      },
      {
        question: "Was ist, wenn der Weg in die Praxis nicht möglich ist?",
        answer:
          "Wenn Ihr Arzt einen Hausbesuch verordnet hat, kommen wir zu Ihnen. Rufen Sie uns an, dann klären wir die Details.",
      },
    ],
  },
];
