/**
 * Ausführliche Inhalte der organischen Leistungsseiten (/leistungen/[slug]).
 * Aufbau analog zu den SEA-Landingpages (lp-data.ts), aber indexierbar und
 * mit eigenständigen Texten nach dem kraftspuren-seo-content-writer-Skill.
 */

export type DetailFaq = { question: string; answer: string };

export type LeistungDetail = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  /** H2 der Was-ist-Sektion (individuell je Leistung; Definition-First liefert der erste Absatz) */
  wasIstTitle: string;
  /** H2 der Für-wen-Sektion (grammatikalisch ausformuliert) */
  fuerWenTitle: string;
  /** H2 der FAQ-Sektion (grammatikalisch ausformuliert) */
  faqTitle: string;
  wasIstAbsaetze: string[];
  fuerWenIntro: string;
  indikationen: string[];
  fuerWenOutro?: string;
  /** Sportraum-USP-Sektion nur auf passenden Seiten */
  sportraum: boolean;
  faq: DetailFaq[];
  /** Slugs verwandter Leistungen (2-3, interne Verlinkung) */
  verwandt: string[];
};

export const ABLAUF_LEISTUNG = [
  {
    title: "Termin anfragen",
    text: "Rufen Sie an - mit Rezept oder ohne. Ihre Verordnung muss in der Regel innerhalb von 28 Tagen nach Ausstellung begonnen werden, warten Sie also nicht zu lange.",
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
  {
    title: "Abschluss & wie es weitergeht",
    text: "Am Ende der Verordnung ziehen wir Bilanz: Was hat sich getan, was fehlt noch? Eine Folgeverordnung stellt bei Bedarf Ihr Arzt aus.",
  },
];

const FAQ_FRIST: DetailFaq = {
  question: "Wie schnell muss ich mein Rezept einlösen?",
  answer:
    "Die Behandlung muss in der Regel innerhalb von 28 Tagen nach Ausstellung der Verordnung beginnen, bei dringlichem Behandlungsbedarf innerhalb von 14 Tagen (Heilmittel-Richtlinie). Melden Sie sich am besten direkt, wenn Sie das Rezept in der Hand haben.",
};

const FAQ_ZUZAHLUNG: DetailFaq = {
  question: "Wie hoch ist die Zuzahlung bei gesetzlicher Versicherung?",
  answer:
    "Gesetzlich Versicherte ab 18 Jahren zahlen 10 Prozent der Behandlungskosten plus 10 Euro je Verordnung (§ 32 SGB V). Wer eine Zuzahlungsbefreiung der Krankenkasse hat, zahlt nichts dazu.",
};

const FAQ_OHNE_REZEPT: DetailFaq = {
  question: "Kann ich auch ohne Rezept kommen?",
  answer:
    "Ja, als Selbstzahler können Sie viele Behandlungen direkt bei uns buchen. Die Preise nennen wir Ihnen transparent vorab am Telefon.",
};

export const LEISTUNGEN_DETAIL: LeistungDetail[] = [
  {
    slug: "krankengymnastik",
    metaTitle: "Krankengymnastik Potsdam - KG mit Rezept | kraftspuren",
    metaDescription:
      "Krankengymnastik (KG) in Potsdam-Babelsberg: Ablauf, Zuzahlung und Rezept-Frist erklärt. Für GKV, PKV und Selbstzahler. Jetzt Termin anfragen.",
    wasIstTitle: "KG auf dem Rezept - was dahintersteckt.",
    fuerWenTitle: "Für wen ist Krankengymnastik geeignet?",
    faqTitle: "Was Patienten uns zur Krankengymnastik fragen.",
    wasIstAbsaetze: [
      "Krankengymnastik (KG) ist die Grundform der Physiotherapie: aktive Übungen und gezielte Mobilisation, die Ihr Therapeut nach Befund zusammenstellt. Auf ärztliche Verordnung ist sie eine Leistung der gesetzlichen Krankenkassen. Steht auf Ihrem Rezept die Abkürzung KG, sind Sie hier richtig.",
      "Was in der Behandlung passiert, hängt von Ihrem Befund ab. Mal geht es darum, ein Gelenk nach einer Operation wieder in Gang zu bringen. Mal um Kraft, die im Alltag fehlt, oder um Rückenbeschwerden, die immer wiederkommen. Ziel der Behandlung ist, Beweglichkeit und Belastbarkeit zu verbessern - in einem Tempo, das zu Ihnen passt.",
      "Bei uns bleibt es dabei nicht am Behandlungstisch. Übungen, die Sie tragen sollen, wiederholen Sie im großen Sportraum, bis sie sitzen. Eine kleine Auswahl bekommen Sie für zu Hause mit.",
    ],
    fuerWenIntro:
      "Krankengymnastik verordnen Ärzte bei vielen Diagnosen - vom Hausarzt über den Orthopäden bis zum Chirurgen nach einer Operation. Typische Anlässe sind:",
    indikationen: [
      "Rücken- und Nackenbeschwerden, auch wenn sie immer wiederkommen",
      "Die Zeit nach Operationen, etwa an Knie, Hüfte oder Schulter",
      "Arthrose und andere Gelenkbeschwerden",
      "Muskelschwäche oder Unsicherheit beim Gehen",
      "Überlastung durch Beruf oder Sport",
    ],
    fuerWenOutro:
      "Ob KG für Sie das passende Heilmittel ist, entscheidet Ihr Arzt mit der Verordnung. Kommen Sie ohne Rezept als Selbstzahler, besprechen wir beim Befund, was sinnvoll ist - und sagen ehrlich, wenn zuerst ein Arztbesuch dran ist.",
    sportraum: true,
    faq: [
      {
        question: "Was genau steht bei Krankengymnastik auf dem Rezept?",
        answer:
          "Auf der Heilmittelverordnung steht meist die Abkürzung KG plus die Anzahl der Behandlungen. Bringen Sie das Rezept einfach mit - wir erklären Ihnen beim ersten Termin, was verordnet wurde.",
      },
      FAQ_FRIST,
      FAQ_ZUZAHLUNG,
      {
        question: "Wie lange dauert eine Behandlung?",
        answer:
          "Das hängt von Ihrer Verordnung ab - sie gibt Art und Umfang der Behandlung vor. Beim ersten Termin kommt das Befundgespräch dazu, planen Sie dafür etwas mehr Zeit ein.",
      },
      {
        question: "Was soll ich zum ersten Termin mitbringen?",
        answer:
          "Ihre Verordnung, bequeme Kleidung und, falls vorhanden, aktuelle Befunde oder Arztberichte. Alles Weitere klären wir vor Ort.",
      },
      FAQ_OHNE_REZEPT,
    ],
    verwandt: ["manuelle-therapie", "kg-geraet", "waerme-elektrotherapie"],
  },
  {
    slug: "manuelle-therapie",
    metaTitle: "Manuelle Therapie Potsdam - MT-Rezept | kraftspuren",
    metaDescription:
      "Manuelle Therapie (MT) in Potsdam: gezielte Handgriffe an Gelenken und Muskeln. Ablauf, Kosten und Zuzahlung erklärt - GKV, PKV und Selbstzahler.",
    wasIstTitle: "Manuelle Therapie: mehr als Massage.",
    fuerWenTitle: "Für wen ist Manuelle Therapie geeignet?",
    faqTitle: "Was Patienten uns zur Manuellen Therapie fragen.",
    wasIstAbsaetze: [
      "Viele verwechseln Manuelle Therapie mit Massage. Der Unterschied ist groß: Manuelle Therapie (MT) ist eine eigenständige physiotherapeutische Behandlung, bei der Gelenke, Muskeln und Nerven mit gezielten Handgriffen untersucht und mobilisiert werden. Sie erfordert eine eigene Weiterbildung und Zulassung - beides haben wir.",
      "In der Behandlung geht es um Funktion: Wo blockiert ein Gelenk, wo zieht ein Muskel, wo reizt ein Nerv? Ihr Therapeut arbeitet mit Mobilisation, sanften Zugtechniken und Weichteilgriffen. Das kann Beschwerden lindern und die Beweglichkeit verbessern - wie schnell sich etwas tut, hängt vom Befund ab.",
      "Damit das Erreichte zwischen den Terminen nicht verloren geht, gehören Übungen dazu. Wenige, dafür passende. Die zeigen wir Ihnen so lange, bis Sie sie sicher allein ausführen.",
    ],
    fuerWenIntro:
      "Manuelle Therapie verordnet der Arzt vor allem bei Funktionsstörungen an Gelenken und Wirbelsäule. Häufige Anlässe sind:",
    indikationen: [
      "Eingeschränkte Beweglichkeit nach Verletzung oder Operation",
      "Beschwerden an Hals-, Brust- oder Lendenwirbelsäule",
      "Schulter-, Knie- oder Hüftbeschwerden, etwa bei Arthrose",
      "Kiefergelenkbeschwerden (CMD, Störungen im Zusammenspiel von Kiefergelenk und Kaumuskulatur)",
      "Kopfschmerzen, die vom Nacken ausgehen können",
    ],
    fuerWenOutro:
      "Grundlage ist die ärztliche Verordnung mit dem Heilmittel MT. Oft kombiniert der Arzt sie mit Krankengymnastik - beides lösen Sie bei uns ein.",
    sportraum: false,
    faq: [
      {
        question: "Was ist der Unterschied zwischen Manueller Therapie und Krankengymnastik?",
        answer:
          "Manuelle Therapie arbeitet vor allem mit den Händen des Therapeuten an Gelenken und Muskeln. Krankengymnastik setzt stärker auf aktive Übungen, die Sie selbst ausführen. Was für Sie passt, entscheidet der Arzt mit der Verordnung - oft ergänzen sich beide.",
      },
      {
        question: "Ist Manuelle Therapie das Gleiche wie Massage?",
        answer:
          "Nein. Eine Massage lockert vor allem die Muskulatur. Manuelle Therapie untersucht und behandelt gezielt Gelenke, Muskeln und Nerven, um Funktionsstörungen anzugehen - sie ist ein eigenes Heilmittel mit eigener Verordnung.",
      },
      {
        question: "Tut Manuelle Therapie weh?",
        answer:
          "Einzelne Handgriffe können ziehen oder ungewohnt sein, Schmerzen sind aber nicht das Ziel. Sagen Sie während der Behandlung einfach Bescheid - wir passen Druck und Technik an.",
      },
      FAQ_FRIST,
      FAQ_ZUZAHLUNG,
      {
        question: "Wie viele Behandlungen brauche ich?",
        answer:
          "Die Anzahl steht auf Ihrer Verordnung. Ob es dabei bleibt, zeigt der Verlauf - eine seriöse Vorhersage ist vorher nicht möglich, und Folgeverordnungen stellt Ihr Arzt aus.",
      },
    ],
    verwandt: ["krankengymnastik", "kg-geraet", "waerme-elektrotherapie"],
  },
  {
    slug: "kg-geraet",
    metaTitle: "KG-Gerät Potsdam - Training im Sportraum | kraftspuren",
    metaDescription:
      "Krankengymnastik am Gerät (KGG) in Potsdam: therapeutisch begleitetes Training im großen Sportraum. Kassenleistung auf Verordnung. Termin anfragen.",
    wasIstTitle: "KG am Gerät: Training, das Therapie ist.",
    fuerWenTitle: "Für wen ist Krankengymnastik am Gerät geeignet?",
    faqTitle: "Was Patienten uns zum Training am Gerät fragen.",
    wasIstAbsaetze: [
      "Krankengymnastik am Gerät (KG-Gerät oder KGG) ist ärztlich verordnetes Training an medizinischen Geräten - angeleitet und begleitet von Ihrem Therapeuten. Es sieht aus wie Fitnessstudio, folgt aber Ihrem Behandlungsplan statt einem Trainingsplan von der Stange.",
      "Der Arzt verordnet KGG, wenn Kraft und Belastbarkeit gezielt aufgebaut werden sollen - häufig nach Operationen, bei Rückenbeschwerden oder nach längerer Schonung. Ihr Therapeut legt Übungen, Gewichte und Wiederholungen nach Befund fest und passt sie an, sobald Sie stärker werden. Sie trainieren nie allein vor sich hin.",
      "Genau dafür ist unser Sportraum gebaut: Platz, moderne Geräte und ein Therapeut, der hinschaut. Und wenn Übungen zu Hause weitergehen sollen, üben wir sie, bis Sie sich sicher fühlen.",
    ],
    fuerWenIntro:
      "KG-Gerät verordnet der Arzt, wenn Muskulatur gezielt aufgebaut werden soll. Typische Anlässe sind:",
    indikationen: [
      "Die Zeit nach Operationen an Knie, Hüfte, Schulter oder Wirbelsäule",
      "Rückenbeschwerden, bei denen stützende Kraft fehlt",
      "Muskelabbau nach längerer Pause oder Krankheit",
      "Gelenke, die mehr muskuläre Führung brauchen",
      "Der Wiedereinstieg in Belastung nach Verletzungen",
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
        question: "Trainiere ich allein oder in einer Gruppe?",
        answer:
          "Krankengymnastik am Gerät kann einzeln oder in einer kleinen Gruppe stattfinden - immer unter Anleitung des Therapeuten. Wie es bei Ihnen läuft, besprechen wir beim ersten Termin.",
      },
      {
        question: "Was ziehe ich zum Training an?",
        answer:
          "Bequeme Kleidung, in der Sie sich gut bewegen können, und saubere Sportschuhe reichen völlig. Mehr brauchen Sie nicht.",
      },
      FAQ_FRIST,
      FAQ_OHNE_REZEPT,
    ],
    verwandt: ["krankengymnastik", "manuelle-therapie"],
  },
  {
    slug: "kg-zns",
    metaTitle: "KG-ZNS Potsdam - Neurologische Physiotherapie | kraftspuren",
    metaDescription:
      "KG-ZNS in Potsdam: Krankengymnastik nach Schlaganfall, bei Parkinson oder MS. Kleinschrittig und alltagsnah, alle Kassen. Jetzt Termin anfragen.",
    wasIstTitle: "KG-ZNS: Krankengymnastik für das Nervensystem.",
    fuerWenTitle: "Für wen ist KG-ZNS geeignet?",
    faqTitle: "Was Patienten und Angehörige uns zu KG-ZNS fragen.",
    wasIstAbsaetze: [
      "KG-ZNS ist Krankengymnastik auf neurophysiologischer Grundlage - Physiotherapie für Menschen mit Erkrankungen des zentralen Nervensystems (ZNS), also von Gehirn und Rückenmark. Der Arzt verordnet sie zum Beispiel nach einem Schlaganfall, bei Multipler Sklerose oder Parkinson. Für dieses Heilmittel braucht die Praxis eine eigene Zulassung - die haben wir.",
      "Im Mittelpunkt stehen Alltagsfunktionen: aufstehen, sicher gehen, greifen, das Gleichgewicht halten. Wir arbeiten kleinschrittig, wiederholen viel und passen das Tempo dem Patienten an. Fortschritte brauchen bei neurologischen Erkrankungen Zeit - das sagen wir ehrlich. Genau deshalb lohnt sich Dranbleiben.",
      "Oft organisieren Angehörige die Therapie: Die Reha ist vorbei, ambulant soll es weitergehen. Melden Sie sich gern auch dann, wenn Sie erst Fragen klären möchten - etwa zur Verordnung oder zum Ablauf.",
    ],
    fuerWenIntro:
      "KG-ZNS ist für Menschen gedacht, deren Beweglichkeit durch eine neurologische Erkrankung eingeschränkt ist. Verordnet wird sie unter anderem:",
    indikationen: [
      "Nach einem Schlaganfall",
      "Bei Multipler Sklerose (MS)",
      "Bei Parkinson",
      "Nach Schädel-Hirn-Verletzungen",
      "Bei anderen neurologischen Erkrankungen mit verordnetem KG-ZNS",
    ],
    fuerWenOutro:
      "Grundlage ist immer die ärztliche Verordnung mit dem Heilmittel KG-ZNS. Wenn Sie unsicher sind, was auf dem Rezept steht: anrufen, wir schauen gemeinsam drauf.",
    sportraum: false,
    faq: [
      {
        question: "Brauche ich für KG-ZNS eine besondere Verordnung?",
        answer:
          "Ja, KG-ZNS wird vom Arzt gezielt verordnet und steht so auf der Heilmittelverordnung. Die Zulassung dafür haben wir - Sie können das Rezept direkt bei uns einlösen.",
      },
      {
        question: "Kann eine Begleitperson mit in die Behandlung kommen?",
        answer:
          "Ja, gern. Gerade am Anfang hilft es oft, wenn Angehörige den Ablauf kennen und wissen, welche Übungen zu Hause sinnvoll sind.",
      },
      {
        question: "Wie lange dauert die Therapie insgesamt?",
        answer:
          "Das lässt sich seriös nicht vorhersagen. Bei chronischen neurologischen Erkrankungen verordnet der Arzt die Behandlung oft über längere Zeit - den Verlauf besprechen wir offen mit Ihnen und Ihren Angehörigen.",
      },
      FAQ_FRIST,
      FAQ_ZUZAHLUNG,
      {
        question: "Was ist, wenn der Weg in die Praxis nicht möglich ist?",
        answer:
          "Wenn Ihr Arzt einen Hausbesuch verordnet hat, kommen wir zu Ihnen. Rufen Sie uns an, dann klären wir die Details.",
      },
    ],
    verwandt: ["krankengymnastik", "kg-geraet"],
  },
  {
    slug: "lymphdrainage",
    metaTitle: "Lymphdrainage Potsdam - MLD mit Rezept | kraftspuren",
    metaDescription:
      "Manuelle Lymphdrainage (MLD) in Potsdam: sanfte Behandlung bei Schwellungen, Lymphödem und nach OP. Zuzahlung und Ablauf erklärt. Termin anfragen.",
    wasIstTitle: "Manuelle Lymphdrainage: Bewegung für gestautes Gewebe.",
    fuerWenTitle: "Für wen ist Manuelle Lymphdrainage geeignet?",
    faqTitle: "Was Patienten uns zur Lymphdrainage fragen.",
    wasIstAbsaetze: [
      "Nach der Operation spannt das Bein, fühlt sich schwer an - und auf dem Rezept steht MLD. Manuelle Lymphdrainage ist eine sanfte Grifftechnik, die gestaute Flüssigkeit im Gewebe in Richtung der Lymphbahnen bewegt. Sie kann Schwellungen reduzieren und das Spannungsgefühl lindern.",
      "Anders als eine Massage arbeitet die MLD mit leichten, rhythmischen Griffen an der Hautoberfläche. Die Behandlung ist ruhig und schmerzarm. Je nach Verordnung gehört eine Kompressionsversorgung dazu - Bandagen oder Kompressionsstrümpfe, die das Ergebnis der Behandlung halten sollen.",
      "Auf dem Rezept steht neben MLD eine Zeitangabe: MLD-30, MLD-45 oder MLD-60. Das ist die verordnete Behandlungszeit in Minuten. Sie müssen sich darum nicht kümmern - wir richten die Termine danach.",
    ],
    fuerWenIntro:
      "Manuelle Lymphdrainage verordnet der Arzt, wenn der Lymphabfluss gestört ist oder Gewebe geschwollen ist. Typische Anlässe sind:",
    indikationen: [
      "Lymphödem - eine chronische Schwellung durch gestörten Lymphabfluss",
      "Lipödem, wenn der Arzt MLD verordnet hat",
      "Schwellungen nach Operationen, etwa nach Gelenkersatz oder Brustoperationen",
      "Verletzungen mit ausgeprägter Schwellung",
    ],
    fuerWenOutro:
      "Grundlage ist die ärztliche Diagnose und Verordnung. Bei chronischen Ödemen verordnet der Arzt die Behandlung oft über längere Zeit.",
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
      {
        question: "Muss ich Kompressionsstrümpfe tragen?",
        answer:
          "Das legt Ihr Arzt mit der Verordnung fest. Gerade bei chronischen Ödemen gehört Kompression häufig dazu, weil sie das Ergebnis der Lymphdrainage halten soll. Was für Sie gilt, besprechen wir beim ersten Termin.",
      },
      FAQ_FRIST,
      FAQ_ZUZAHLUNG,
      {
        question: "Wie oft brauche ich Lymphdrainage?",
        answer:
          "Häufigkeit und Umfang stehen auf Ihrer Verordnung und hängen von der Ursache ab. Bei chronischen Beschwerden wie einem Lymphödem verordnet der Arzt die Behandlung oft über längere Zeit.",
      },
    ],
    verwandt: ["krankengymnastik", "waerme-elektrotherapie"],
  },
  {
    slug: "waerme-elektrotherapie",
    metaTitle: "Wärme- & Elektrotherapie Potsdam | kraftspuren",
    metaDescription:
      "Wärme- und Elektrotherapie in Potsdam: ergänzende Anwendungen zu Krankengymnastik und Manueller Therapie. Verordnung und Zuzahlung erklärt.",
    wasIstTitle: "Wärme und Strom: die zweite Zeile auf dem Rezept.",
    fuerWenTitle: "Für wen sind Wärme- und Elektrotherapie geeignet?",
    faqTitle: "Was Patienten uns zu Wärme- und Elektrotherapie fragen.",
    wasIstAbsaetze: [
      "Auf vielen Rezepten stehen sie in der zweiten Zeile: Wärmetherapie oder Elektrotherapie, verordnet als Ergänzung zu Krankengymnastik oder Manueller Therapie. Wärme kann die Muskulatur lockern und das Gewebe auf die Behandlung vorbereiten. Elektrotherapie arbeitet mit sanften Stromimpulsen, die Schmerzen lindern und die Muskulatur anregen können.",
      "Als ergänzende Heilmittel stehen beide selten allein auf dem Rezept: Meist bereiten sie die eigentliche Behandlung vor oder runden sie ab. Was genau verordnet wurde und wie lange die Anwendung dauert, steht auf Ihrer Verordnung - wir erklären es Ihnen beim ersten Termin.",
      "Keine Sorge vor dem Strom: Die Impulse der Elektrotherapie sind niedrig dosiert, die Intensität stellen wir gemeinsam ein. Kribbeln ja, Schmerzen nein.",
    ],
    fuerWenIntro:
      "Wärme- und Elektrotherapie verordnet der Arzt meist ergänzend zu einem anderen Heilmittel. Typische Anlässe sind:",
    indikationen: [
      "Verspannte Muskulatur bei Rücken- und Nackenbeschwerden",
      "Als Vorbereitung auf Krankengymnastik oder Manuelle Therapie",
      "Beschwerden, bei denen der Arzt Elektrotherapie zur Schmerzlinderung ergänzt",
    ],
    sportraum: false,
    faq: [
      {
        question: "Bekomme ich Wärme- oder Elektrotherapie auch einzeln?",
        answer:
          "In der Regel verordnet der Arzt beide als Ergänzung zu einem anderen Heilmittel wie KG oder MT. Was auf Ihrem Rezept steht, schauen wir uns gern gemeinsam an - rufen Sie einfach durch.",
      },
      {
        question: "Ist Elektrotherapie gefährlich?",
        answer:
          "Die Stromimpulse sind niedrig dosiert und die Intensität stellen wir gemeinsam ein. Wichtig: Sagen Sie uns vor der ersten Anwendung, wenn Sie einen Herzschrittmacher oder andere Implantate tragen - dann klären wir, was möglich ist.",
      },
      {
        question: "Wie fühlt sich Elektrotherapie an?",
        answer:
          "Meist wie ein leichtes Kribbeln oder Klopfen auf der Haut. Unangenehm soll es nicht sein - melden Sie sich während der Anwendung, dann passen wir die Intensität an.",
      },
      FAQ_FRIST,
      FAQ_ZUZAHLUNG,
      FAQ_OHNE_REZEPT,
    ],
    verwandt: ["krankengymnastik", "manuelle-therapie"],
  },
];
