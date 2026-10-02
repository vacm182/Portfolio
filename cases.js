// Datos de los casos de packaging (ES / EN / FR).
// Para editar un texto, cambia solo lo que está entre comillas.
var CASES = [
  {
    slug: "maggi",
    count: 8,
    brand: "Nestlé",
    es: {
      title: "Maggi Jugo 800 ml — de vidrio a PET",
      sub: "Diseño de botella, ingeniería y validación industrial",
      challenge: "Maggi Jugo se vendía en una botella de vidrio con una silueta muy reconocible. Nestlé buscaba pasarla a PET para reducir peso, roturas y costo logístico sin perder la identidad de la marca ni cambiar su línea de llenado.",
      process: "Superpuse la botella de vidrio actual con la propuesta en PET para conservar silueta, capacidad y altura. Diseñé la botella de 800 ml con 37 g de PET y cuello 24 mm snap, con su plano mecánico y vistas 3D. Después acompañé las pruebas en planta: soplado de muestras, llenado, cierre con tapa dosificadora y verificación de peso en báscula de precisión.",
      result: "Una botella PET que mantiene la forma icónica de Maggi, validada en llenado y cierre en la planta del cliente."
    },
    en: {
      title: "Maggi Jugo 800 ml — glass to PET",
      sub: "Bottle design, engineering and industrial validation",
      challenge: "Maggi Jugo was sold in a glass bottle with a highly recognizable silhouette. Nestlé wanted to move it to PET to cut weight, breakage and logistics cost, without losing brand identity or changing its filling line.",
      process: "I overlaid the current glass bottle with the PET proposal to keep silhouette, capacity and height. I designed the 800 ml bottle at 37 g of PET with a 24 mm snap finish, including its mechanical drawing and 3D views. I then supported the plant trials: sample blowing, filling, capping with the dispensing closure and weight checks on a precision scale.",
      result: "A PET bottle that keeps Maggi's iconic shape, validated for filling and capping at the customer's plant."
    },
    fr: {
      title: "Maggi Jugo 800 ml — du verre au PET",
      sub: "Design de bouteille, ingénierie et validation industrielle",
      challenge: "Maggi Jugo était vendu dans une bouteille en verre à la silhouette très reconnaissable. Nestlé voulait passer au PET pour réduire le poids, la casse et les coûts logistiques, sans perdre l'identité de la marque ni modifier sa ligne de remplissage.",
      process: "J'ai superposé la bouteille en verre actuelle et la proposition en PET pour conserver la silhouette, la contenance et la hauteur. J'ai conçu la bouteille de 800 ml à 37 g de PET avec un col 24 mm snap, avec son plan mécanique et ses vues 3D. J'ai ensuite accompagné les essais en usine : soufflage d'échantillons, remplissage, bouchage avec le doseur et contrôle du poids sur balance de précision.",
      result: "Une bouteille PET qui conserve la forme iconique de Maggi, validée au remplissage et au bouchage dans l'usine du client."
    }
  },
  {
    slug: "waterpeople",
    count: 10,
    brand: "Santa Ana Springs",
    es: {
      title: "Water People 1.5 L — botella sin etiqueta",
      sub: "Diseño sustentable, ingeniería de molde y homologación de materiales",
      challenge: "Water People quería un empaque que comunicara su compromiso ecológico: una botella 100% rPET y sin etiqueta. Sin etiqueta, toda la información obligatoria y de marca tenía que vivir en la propia botella.",
      process: "Diseñé una botella de 1.5 L con 46.5 g de PET y cuello PCO 1873, donde el grabado sustituye a la etiqueta: logotipo de huella, contenido neto, pH, ingredientes, legales y mensaje de reciclaje. Validé la forma con impresión 3D, desarrollé un molde piloto y corrí pruebas de inyección y soplado. Homologué tres materiales en laboratorio (PET cristal con antiamarillo, verde translúcido con 50% PCR y rPET), analicé la bi-orientación y definí el paletizado.",
      result: "La botella pasó del molde piloto al molde de producción y se convirtió en una familia sin etiqueta de 400 ml, 600 ml, 750 ml, 1 L y 3.8 L. Sin etiqueta ni pegamento, facilita la separación y el lavado en el reciclaje."
    },
    en: {
      title: "Water People 1.5 L — label-less bottle",
      sub: "Sustainable design, mold engineering and material qualification",
      challenge: "Water People wanted packaging that expressed its environmental commitment: a 100% rPET bottle with no label. Without a label, all mandatory and brand information had to live on the bottle itself.",
      process: "I designed a 1.5 L bottle at 46.5 g of PET with a PCO 1873 finish, where embossing replaces the label: fingerprint logo, net content, pH, ingredients, legal text and recycling message. I validated the shape with 3D printing, developed a pilot mold and ran injection and blow-molding trials. I qualified three materials in the lab (crystal PET with anti-yellowing additive, translucent green with 50% PCR, and rPET), analysed bi-orientation and defined the palletization.",
      result: "The bottle moved from pilot to production mold and grew into a label-less family of 400 ml, 600 ml, 750 ml, 1 L and 3.8 L. With no label or adhesive, it makes sorting and washing easier at recycling plants."
    },
    fr: {
      title: "Water People 1,5 L — bouteille sans étiquette",
      sub: "Design durable, ingénierie de moule et homologation des matériaux",
      challenge: "Water People voulait un emballage qui exprime son engagement écologique : une bouteille 100 % rPET et sans étiquette. Sans étiquette, toutes les mentions obligatoires et de marque devaient figurer sur la bouteille elle-même.",
      process: "J'ai conçu une bouteille de 1,5 L à 46,5 g de PET avec un col PCO 1873, où la gravure remplace l'étiquette : logo empreinte, contenance, pH, ingrédients, mentions légales et message de recyclage. J'ai validé la forme par impression 3D, développé un moule pilote et mené des essais d'injection et de soufflage. J'ai homologué trois matériaux en laboratoire (PET cristal anti-jaunissement, vert translucide à 50 % de PCR et rPET), analysé la bi-orientation et défini la palettisation.",
      result: "La bouteille est passée du moule pilote au moule de production et a donné naissance à une gamme sans étiquette de 400 ml, 600 ml, 750 ml, 1 L et 3,8 L. Sans étiquette ni colle, elle facilite le tri et le lavage au recyclage."
    }
  },
  {
    slug: "coronado",
    count: 10,
    brand: "Coronado · Grupo Bimbo",
    es: {
      title: "Coronado — cajeta squeeze y crema de avellana",
      sub: "Diseño de familia de envases, análisis de anaquel y prototipado",
      challenge: "Coronado quería modernizar su cajeta con un envase squeeze que se apoye de cabeza, y entrar a la categoría de cremas para untar frente a Nutella. Ambos envases tenían que destacar en un anaquel muy saturado y mantener el carácter de la marca.",
      process: "Empecé con un estudio de anaquel en tienda para entender tamaños, colores y competencia. Diseñé una familia squeeze upside-down en varias capacidades (hasta 660 g), con tapa roja como código de marca, y propuestas de tarro para la crema de avellana en 250 g y 350 g. Desarrollé los modelos en CAD, las cotas, los renders con etiqueta y prototipos impresos en 3D que coloqué en el anaquel real para evaluarlos junto a la competencia.",
      result: "Una familia coherente de squeeze y tarros con propuestas validadas en contexto de anaquel y comparadas directamente contra el líder de la categoría."
    },
    en: {
      title: "Coronado — squeeze cajeta and hazelnut spread",
      sub: "Packaging family design, shelf analysis and prototyping",
      challenge: "Coronado wanted to modernize its cajeta (caramel) with an upside-down squeeze bottle, and to enter the spreads category against Nutella. Both packs had to stand out on a crowded shelf while keeping the brand's character.",
      process: "I started with an in-store shelf study to understand sizes, colours and competitors. I designed an upside-down squeeze family in several sizes (up to 660 g), with the red cap as a brand cue, and jar proposals for the hazelnut spread in 250 g and 350 g. I built the CAD models, dimensions, labelled renders and 3D-printed prototypes, which I placed on the real shelf to assess them next to the competition.",
      result: "A consistent family of squeeze bottles and jars, with proposals validated in a shelf context and benchmarked directly against the category leader."
    },
    fr: {
      title: "Coronado — cajeta en flacon souple et pâte à tartiner",
      sub: "Design de gamme, analyse de linéaire et prototypage",
      challenge: "Coronado souhaitait moderniser sa cajeta (confiture de lait) avec un flacon souple tête en bas, et entrer sur le marché des pâtes à tartiner face à Nutella. Les deux emballages devaient se démarquer dans un rayon très chargé tout en gardant le caractère de la marque.",
      process: "J'ai commencé par une étude de linéaire en magasin pour comprendre formats, couleurs et concurrents. J'ai conçu une gamme de flacons tête en bas en plusieurs contenances (jusqu'à 660 g), avec le bouchon rouge comme code de marque, et des propositions de pots de 250 g et 350 g pour la pâte à tartiner. J'ai réalisé les modèles CAO, les cotes, les rendus avec étiquette et des prototypes imprimés en 3D, placés dans le vrai rayon pour les évaluer face à la concurrence.",
      result: "Une gamme cohérente de flacons et de pots, avec des propositions validées en situation de rayon et comparées directement au leader de la catégorie."
    }
  },
  {
    slug: "agua",
    count: 13,
    brand: "Nestlé Waters · Santa Ana Springs",
    es: {
      title: "Agua embotellada — diseño de forma",
      sub: "Sta. María, Alyera, Cuna de Agua y Pietra Santa: del boceto a la preforma",
      challenge: "En agua embotellada la botella es casi el único diferenciador. Nestlé Waters necesitaba un formato de 250 ml para Sta. María con una preforma ligera, y Santa Ana Springs buscaba botellas con imagen premium para varias marcas.",
      process: "Para Sta. María exploré conceptos a mano, los convertí en propuestas presentadas al cliente y los ajusté a una preforma de 16.9 g. Para Santa Ana Springs diseñé Alyera (600 ml y 1.5 L, con nervaduras en espiral), Cuna de Agua (355 y 500 ml, silueta estilizada con preforma de 20.5 g) y Pietra Santa, además de propuestas de garrafón de 4 L. En cada caso validé las tasas de bi-orientación para asegurar el soplado y revisé las fotos y ajustes del molde.",
      result: "Un portafolio de botellas de agua con identidades distintas, todas diseñadas para producirse con preformas estándar y gramajes bajos."
    },
    en: {
      title: "Bottled water — form design",
      sub: "Sta. María, Alyera, Cuna de Agua and Pietra Santa: from sketch to preform",
      challenge: "In bottled water, the bottle is almost the only differentiator. Nestlé Waters needed a 250 ml format for Sta. María on a lightweight preform, and Santa Ana Springs wanted premium-looking bottles for several brands.",
      process: "For Sta. María I explored hand-sketched concepts, turned them into proposals for the client and fitted them to a 16.9 g preform. For Santa Ana Springs I designed Alyera (600 ml and 1.5 L, with spiral ribs), Cuna de Agua (355 and 500 ml, a slender silhouette on a 20.5 g preform) and Pietra Santa, plus 4 L jug proposals. In each case I checked bi-orientation ratios to secure blow-moldability and reviewed mold photos and adjustments.",
      result: "A portfolio of water bottles with distinct identities, all designed to run on standard preforms at low gram weights."
    },
    fr: {
      title: "Eau en bouteille — design de forme",
      sub: "Sta. María, Alyera, Cuna de Agua et Pietra Santa : du croquis à la préforme",
      challenge: "Pour l'eau en bouteille, la bouteille est presque le seul élément de différenciation. Nestlé Waters avait besoin d'un format 250 ml pour Sta. María sur une préforme allégée, et Santa Ana Springs cherchait des bouteilles à l'image premium pour plusieurs marques.",
      process: "Pour Sta. María, j'ai exploré des concepts dessinés à la main, puis je les ai transformés en propositions client et adaptés à une préforme de 16,9 g. Pour Santa Ana Springs, j'ai conçu Alyera (600 ml et 1,5 L, nervures en spirale), Cuna de Agua (355 et 500 ml, silhouette élancée sur préforme de 20,5 g) et Pietra Santa, ainsi que des propositions de bidon de 4 L. À chaque fois, j'ai vérifié les taux de bi-orientation pour garantir le soufflage et suivi les photos et ajustements du moule.",
      result: "Un portefeuille de bouteilles d'eau aux identités distinctes, toutes conçues pour être produites sur des préformes standard à faible grammage."
    }
  },
  {
    slug: "deportivas",
    count: 13,
    brand: "Coca-Cola · Jugos del Valle · Jumex",
    es: {
      title: "Bebidas deportivas y hot fill",
      sub: "Flashlyte, Powerade, Jumex Sport y Del Valle Reserva: del boceto al render final",
      challenge: "Las bebidas deportivas y los jugos se llenan en caliente: la botella debe resistir la temperatura y el vacío sin deformarse, y al mismo tiempo ser ergonómica y reconocible en un anaquel donde todas compiten por energía visual.",
      process: "Para Jumex Sport pasé de bocetos a mano a tres propuestas de forma y al render final con etiqueta. Para Powerade 750 ml y Jugos del Valle Reserva 1 L (cuello 33 mm hot fill) diseñé paneles de vacío y nervaduras integrados a la forma, y documenté detalles de base y comparativas de proceso. Para Flashlyte 355 ml (by BodyArmor) desarrollé la botella y los renders de producto con splash para presentación.",
      result: "Botellas hot fill que integran la función técnica a la estética, con renders listos para marketing."
    },
    en: {
      title: "Sports drinks and hot fill",
      sub: "Flashlyte, Powerade, Jumex Sport and Del Valle Reserva: from sketch to final render",
      challenge: "Sports drinks and juices are hot-filled: the bottle has to withstand heat and vacuum without deforming, while being ergonomic and recognizable on a shelf where every brand competes for visual energy.",
      process: "For Jumex Sport I went from hand sketches to three shape proposals and a final labelled render. For Powerade 750 ml and Jugos del Valle Reserva 1 L (33 mm hot-fill finish) I designed vacuum panels and ribs built into the form, and documented base details and process comparisons. For Flashlyte 355 ml (by BodyArmor) I developed the bottle and splash product renders for presentation.",
      result: "Hot-fill bottles that blend technical function with aesthetics, with marketing-ready renders."
    },
    fr: {
      title: "Boissons sportives et remplissage à chaud",
      sub: "Flashlyte, Powerade, Jumex Sport et Del Valle Reserva : du croquis au rendu final",
      challenge: "Les boissons sportives et les jus sont remplis à chaud : la bouteille doit résister à la chaleur et au vide sans se déformer, tout en restant ergonomique et reconnaissable dans un rayon où chaque marque rivalise d'énergie visuelle.",
      process: "Pour Jumex Sport, je suis passé de croquis à la main à trois propositions de forme et à un rendu final avec étiquette. Pour Powerade 750 ml et Jugos del Valle Reserva 1 L (col 33 mm hot-fill), j'ai conçu des panneaux de vide et des nervures intégrés à la forme, et documenté les détails de fond et les comparatifs de procédé. Pour Flashlyte 355 ml (by BodyArmor), j'ai développé la bouteille et des rendus produit avec éclaboussures pour la présentation.",
      result: "Des bouteilles hot-fill qui intègrent la fonction technique à l'esthétique, avec des rendus prêts pour le marketing."
    }
  },
  {
    slug: "conagra",
    count: 13,
    brand: "ConAgra",
    es: {
      title: "Hunt's y Del Monte — catsup y BBQ",
      sub: "Iteración de forma, estudio de ángulos y aprobación de moldes",
      challenge: "ConAgra necesitaba renovar sus envases de catsup y salsa BBQ en PET: botellas squeeze fáciles de vaciar, estables en línea y con buena presencia de marca, incluido un formato upside-down para Del Monte.",
      process: "Para Hunt's Catsup 600 g comparé tres ángulos bajo el cuello (10°, 20° y 30°) para equilibrar agarre, vaciado y estabilidad. Desarrollé la familia Hunt's BBQ con renders y planos, y Del Monte Catsup Upside-down de 360 g (26 g de PET, cuello 33 mm SP400) con sus vistas técnicas. Revisé los planos de molde de producción y las comparativas físicas de muestras.",
      result: "Formas iteradas con criterio técnico y planos aprobados para molde de producción."
    },
    en: {
      title: "Hunt's and Del Monte — ketchup and BBQ",
      sub: "Shape iteration, angle study and mold approval",
      challenge: "ConAgra needed to refresh its PET ketchup and BBQ sauce packs: squeeze bottles that empty easily, run stably on the line and carry strong brand presence, including an upside-down format for Del Monte.",
      process: "For Hunt's Ketchup 600 g I compared three under-neck angles (10°, 20° and 30°) to balance grip, evacuation and stability. I developed the Hunt's BBQ family with renders and drawings, and Del Monte Upside-down Ketchup 360 g (26 g PET, 33 mm SP400 finish) with its technical views. I reviewed production mold drawings and physical sample comparisons.",
      result: "Shapes iterated on technical criteria and drawings approved for production molds."
    },
    fr: {
      title: "Hunt's et Del Monte — ketchup et BBQ",
      sub: "Itération de forme, étude d'angles et validation des moules",
      challenge: "ConAgra devait renouveler ses emballages PET de ketchup et de sauce BBQ : des flacons souples faciles à vider, stables en ligne et à forte présence de marque, dont un format tête en bas pour Del Monte.",
      process: "Pour Hunt's Ketchup 600 g, j'ai comparé trois angles sous le col (10°, 20° et 30°) pour équilibrer prise en main, vidage et stabilité. J'ai développé la gamme Hunt's BBQ avec rendus et plans, et Del Monte Ketchup tête en bas 360 g (26 g de PET, col 33 mm SP400) avec ses vues techniques. J'ai revu les plans des moules de production et les comparatifs physiques d'échantillons.",
      result: "Des formes itérées selon des critères techniques et des plans validés pour les moules de production."
    }
  },
  {
    slug: "juslab",
    count: 8,
    brand: "Juslab",
    es: {
      title: "Juslab — jugos prensados en frío (HPP)",
      sub: "Desarrollo para una marca emergente, del concepto a la familia de envases",
      challenge: "Juslab, una marca joven de jugos prensados en frío, necesitaba botellas que resistieran el proceso de alta presión (HPP) y transmitieran una imagen fresca y premium para sus distintas líneas.",
      process: "Partiendo de las ideas del cliente, diseñé botellas circulares de 350 ml (24 g) y 480 ml (26.5 g) con cuello 38 mm HF, un nuevo diseño de 450 ml, un formato de 1 L y un shot de 65 ml. Desarrollé versiones para sus marcas Know Brainer, Kokomio y Snooze, con renders, planos y definición de preforma.",
      result: "Una familia de envases HPP que acompañó el crecimiento de la marca con formatos coherentes de 65 ml a 1 L."
    },
    en: {
      title: "Juslab — cold-pressed juices (HPP)",
      sub: "Development for an emerging brand, from concept to packaging family",
      challenge: "Juslab, a young cold-pressed juice brand, needed bottles that could withstand high-pressure processing (HPP) and convey a fresh, premium image across its product lines.",
      process: "Starting from the client's ideas, I designed round 350 ml (24 g) and 480 ml (26.5 g) bottles with a 38 mm HF finish, a new 450 ml design, a 1 L format and a 65 ml shot. I developed versions for its Know Brainer, Kokomio and Snooze brands, with renders, drawings and preform definition.",
      result: "An HPP packaging family that supported the brand's growth with consistent formats from 65 ml to 1 L."
    },
    fr: {
      title: "Juslab — jus pressés à froid (HPP)",
      sub: "Développement pour une marque émergente, du concept à la gamme d'emballages",
      challenge: "Juslab, une jeune marque de jus pressés à froid, avait besoin de bouteilles résistant au traitement haute pression (HPP) et véhiculant une image fraîche et premium pour ses différentes gammes.",
      process: "À partir des idées du client, j'ai conçu des bouteilles rondes de 350 ml (24 g) et 480 ml (26,5 g) avec col 38 mm HF, un nouveau design de 450 ml, un format 1 L et un shot de 65 ml. J'ai développé des versions pour ses marques Know Brainer, Kokomio et Snooze, avec rendus, plans et définition de la préforme.",
      result: "Une gamme d'emballages HPP qui a accompagné la croissance de la marque avec des formats cohérents de 65 ml à 1 L."
    }
  },
  {
    slug: "molde",
    count: 10,
    brand: "Envases Universales",
    es: {
      title: "Ingeniería de molde y calidad",
      sub: "Evaluación de moldes, estabilidad y bidón de 10 L apilable",
      challenge: "Un buen diseño solo vale si se produce bien. Había que evaluar moldes de nuevos proveedores, resolver problemas de estabilidad en bases y llevar a producción un bidón de 10 L apilable con asa.",
      process: "Comparé muestras de un molde de proveedor coreano (Jung Sung) contra nuestro molde ASB y documenté los defectos: acumulación de material, efecto lupa, opacidad en el punto de inyección y fondo incompleto. Medí bidones de 10 L frente a la muestra del cliente y analicé el ángulo mínimo de estabilidad de una base estándar contra una base BOSS (9.6° contra 13.67°). Para el bidón de 10 L de hombro plano diseñé la botella, el asa trapezoidal de 7.4 g y el acomodo en tarima, y acompañé su arranque en producción.",
      result: "Decisiones de proveedor y de diseño basadas en evidencia medible, y un bidón apilable producido y paletizado."
    },
    en: {
      title: "Mold engineering and quality",
      sub: "Mold evaluation, stability and a stackable 10 L jug",
      challenge: "A good design only counts if it runs well in production. The work involved assessing molds from new suppliers, solving base-stability issues and bringing a stackable 10 L jug with handle into production.",
      process: "I compared samples from a Korean supplier's mold (Jung Sung) against our ASB mold and documented the defects: material build-up, lens effect, haze at the injection point and incomplete base formation. I measured 10 L jugs against the client's sample and analysed the minimum stability angle of a standard base versus a BOSS base (9.6° vs. 13.67°). For the flat-shoulder 10 L jug I designed the bottle, a 7.4 g trapezoidal handle and the pallet pattern, and supported its production start-up.",
      result: "Supplier and design decisions based on measurable evidence, and a stackable jug produced and palletized."
    },
    fr: {
      title: "Ingénierie de moule et qualité",
      sub: "Évaluation de moules, stabilité et bidon empilable de 10 L",
      challenge: "Un bon design ne vaut que s'il se produit bien. Il fallait évaluer les moules de nouveaux fournisseurs, résoudre des problèmes de stabilité des fonds et mettre en production un bidon empilable de 10 L avec poignée.",
      process: "J'ai comparé des échantillons d'un moule de fournisseur coréen (Jung Sung) à notre moule ASB et documenté les défauts : accumulation de matière, effet loupe, opacité au point d'injection et fond incomplet. J'ai mesuré des bidons de 10 L par rapport à l'échantillon du client et analysé l'angle minimal de stabilité d'un fond standard face à un fond BOSS (9,6° contre 13,67°). Pour le bidon de 10 L à épaule plate, j'ai conçu la bouteille, une poignée trapézoïdale de 7,4 g et le plan de palettisation, et accompagné le démarrage en production.",
      result: "Des décisions fournisseur et design fondées sur des preuves mesurables, et un bidon empilable produit et palettisé."
    }
  },
  {
    "slug": "barracuda",
    "count": 13,
    "brand": "Luidia · eBeam",
    "cat": "hardware",
    "dir": "hardware",
    "es": {
      "title": "Proyecto Barracuda — stylus interactivo para el aula",
      "sub": "Investigación con usuarios, prototipado rápido y definición de producto",
      "challenge": "Luidia (eBeam) convierte cualquier pizarrón o superficie de proyección en una pantalla interactiva. El stylus era el punto de contacto principal con maestros y alumnos, y el equipo quería saber qué funciones realmente aportaban valor en el aula antes de invertir en ingeniería: scroll, botones, hover, carga, buzzer, uso fuera del pizarrón.",
      "process": "Seguimos un ciclo de needfinding y benchmarking → brainstorm → prototipos → pruebas → evaluación. Construí decenas de modelos de forma en espuma y cartón, prototipos funcionales cableados y exploraciones como un guante con sensores y un puntero. Los probamos con 5 personas internas y 12 usuarios externos (9 maestros y 3 coordinadores de tecnología) y documentamos cada hallazgo: el scroll es muy deseado, menos botones es mejor (3 como máximo), los botones traseros distraen y la gente espera poder apuntar en cuanto se aleja del pizarrón.",
      "result": "Un set de funciones recomendado para el stylus (zona segura para el dedo, rueda de scroll en lugar del botón frontal) y para el software, presentado en la revisión final de septiembre de 2011 junto con los renders del concepto y los siguientes pasos para Ingeniería.",
      "role": "Diseñador industrial y de producto · Luidia Inc. (eBeam), California · 2011–2012"
    },
    "en": {
      "title": "Project Barracuda — interactive classroom stylus",
      "sub": "User research, rapid prototyping and product definition",
      "challenge": "Luidia (eBeam) turns any whiteboard or projection surface into an interactive display. The stylus was the main touchpoint for teachers and students, and the team needed to know which features truly added value in the classroom before investing in engineering: scroll, buttons, hover, charging, buzzer, off-board use.",
      "process": "We ran a needfinding and benchmarking → brainstorm → prototype → test → evaluate cycle. I built dozens of foam and cardboard form models, wired functional prototypes and explorations such as a sensor glove and a pointer. We tested them with 5 internal people and 12 external users (9 teachers and 3 technology coordinators) and documented every finding: scroll is highly wanted, fewer buttons are better (3 at most), rear buttons are distracting, and people expect to point as soon as they step away from the board.",
      "result": "A recommended feature set for the stylus (finger safe zone, scroll wheel replacing the front button) and for the software, presented at the September 2011 final review together with concept renders and next steps for Engineering.",
      "role": "Industrial & product designer · Luidia Inc. (eBeam), California · 2011–2012"
    },
    "fr": {
      "title": "Projet Barracuda — stylet interactif pour la classe",
      "sub": "Recherche utilisateurs, prototypage rapide et définition produit",
      "challenge": "Luidia (eBeam) transforme n'importe quel tableau blanc ou surface de projection en écran interactif. Le stylet était le principal point de contact avec enseignants et élèves, et l'équipe devait savoir quelles fonctions apportaient vraiment de la valeur en classe avant d'investir en ingénierie : défilement, boutons, survol, charge, buzzer, usage hors du tableau.",
      "process": "Nous avons suivi un cycle needfinding et benchmarking → brainstorming → prototypes → tests → évaluation. J'ai construit des dizaines de maquettes de forme en mousse et carton, des prototypes fonctionnels câblés et des explorations comme un gant à capteurs et un pointeur. Nous les avons testés avec 5 personnes internes et 12 utilisateurs externes (9 enseignants et 3 coordinateurs techniques) et documenté chaque constat : le défilement est très demandé, moins de boutons c'est mieux (3 au maximum), les boutons arrière distraient et les utilisateurs veulent pointer dès qu'ils s'éloignent du tableau.",
      "result": "Un ensemble de fonctions recommandé pour le stylet (zone de sécurité pour le doigt, molette de défilement à la place du bouton avant) et pour le logiciel, présenté lors de la revue finale de septembre 2011 avec les rendus du concept et les prochaines étapes pour l'Ingénierie.",
      "role": "Designer industriel et produit · Luidia Inc. (eBeam), Californie · 2011–2012"
    }
  },
  {
    "slug": "borrador",
    "count": 14,
    "brand": "Luidia · eBeam",
    "cat": "hardware",
    "dir": "hardware",
    "es": {
      "title": "Borrador interactivo y domo sensor",
      "sub": "Exploración de forma con prototipos físicos probados en pizarrón",
      "challenge": "El sistema eBeam necesitaba accesorios que se sintieran naturales sobre el pizarrón: un borrador que el sistema pudiera detectar y una carcasa para el sensor que se montara en la superficie sin estorbar. Había que resolver agarre, tamaño, montaje y la convivencia con la electrónica.",
      "process": "Empecé con modelos rápidos en cartón, espuma y madera de distintos diámetros y perfiles, y los probé directamente en el pizarrón con usuarios para evaluar agarre, presión y movimiento. A partir de esos hallazgos pasé a prototipos impresos y piezas desarmables para revisar el ensamble interno, y desarrollé en 3D varias familias de forma —base plana con asa, domo y perfiles de pared— con sus vistas explotadas.",
      "result": "Una familia de conceptos de borrador y domo sensor validados en uso real, con la arquitectura de piezas y renders listos para revisión con Ingeniería.",
      "role": "Diseñador industrial y de producto · Luidia Inc. (eBeam), California · 2011–2012"
    },
    "en": {
      "title": "Interactive eraser and sensor dome",
      "sub": "Form exploration through physical prototypes tested on the whiteboard",
      "challenge": "The eBeam system needed accessories that felt natural on the whiteboard: an eraser the system could detect and a sensor housing that mounted on the surface without getting in the way. Grip, size, mounting and integration with the electronics all had to be solved.",
      "process": "I started with quick cardboard, foam and wood models of different diameters and profiles and tested them directly on the whiteboard with users to evaluate grip, pressure and motion. From those findings I moved to printed prototypes and take-apart parts to review the internal assembly, and developed several form families in 3D —flat base with handle, dome and wall profiles— with exploded views.",
      "result": "A family of eraser and sensor-dome concepts validated in real use, with part architecture and renders ready for engineering review.",
      "role": "Industrial & product designer · Luidia Inc. (eBeam), California · 2011–2012"
    },
    "fr": {
      "title": "Effaceur interactif et dôme capteur",
      "sub": "Exploration de forme par prototypes physiques testés au tableau",
      "challenge": "Le système eBeam avait besoin d'accessoires naturels à utiliser au tableau : un effaceur détectable par le système et un boîtier de capteur qui se fixe sur la surface sans gêner. Il fallait résoudre la prise en main, la taille, la fixation et l'intégration de l'électronique.",
      "process": "J'ai commencé par des maquettes rapides en carton, mousse et bois de différents diamètres et profils, testées directement au tableau avec des utilisateurs pour évaluer prise, pression et mouvement. À partir de ces constats, je suis passé à des prototypes imprimés et des pièces démontables pour étudier l'assemblage interne, puis j'ai développé en 3D plusieurs familles de formes —base plate avec poignée, dôme et profils muraux— avec leurs vues éclatées.",
      "result": "Une famille de concepts d'effaceur et de dôme capteur validés en usage réel, avec architecture des pièces et rendus prêts pour la revue d'ingénierie.",
      "role": "Designer industriel et produit · Luidia Inc. (eBeam), Californie · 2011–2012"
    }
  },
  {
    "slug": "captura",
    "count": 12,
    "brand": "Luidia · eBeam · Polycom · Cisco",
    "cat": "hardware",
    "dir": "hardware",
    "es": {
      "title": "Barra de captura y charola para pantallas interactivas",
      "sub": "Familia de accesorios eBeam y conceptos co-branded para videoconferencia",
      "challenge": "Para llevar eBeam a salas de juntas y videoconferencia, el receptor y los stylus debían integrarse a pantallas planas como un accesorio de línea: guardar y cargar las plumas, ofrecer accesos directos a herramientas y verse a la altura de marcas como Polycom y Cisco.",
      "process": "Diseñé varias arquitecturas —barra cilíndrica bajo la pantalla, charola de aluminio con bandeja para pluma y panel de iconos (puntero, pluma, borrador, pantalla)— y exploré materiales, iluminación del logo y su relación con distintos tamaños de pantalla. Desarrollé además conceptos co-branded: una barra para Polycom y un set stylus + receptor para la tablet Cisco Cius.",
      "result": "Una familia de accesorios coherente, presentada con renders en contexto para las conversaciones con socios y la definición de producto.",
      "role": "Diseñador industrial y de producto · Luidia Inc. (eBeam), California · 2011–2012"
    },
    "en": {
      "title": "Capture bar and pen tray for interactive displays",
      "sub": "eBeam accessory family and co-branded videoconferencing concepts",
      "challenge": "To bring eBeam into meeting and videoconferencing rooms, the receiver and styluses had to integrate with flat-panel displays as a first-class accessory: store and charge the pens, offer tool shortcuts and look at home next to brands like Polycom and Cisco.",
      "process": "I designed several architectures —a cylindrical bar below the screen, an aluminium tray with pen cradle and icon panel (pointer, pen, eraser, screen)— and explored materials, logo lighting and fit across screen sizes. I also developed co-branded concepts: a bar for Polycom and a stylus + receiver set for the Cisco Cius tablet.",
      "result": "A coherent accessory family, presented through in-context renders for partner discussions and product definition.",
      "role": "Industrial & product designer · Luidia Inc. (eBeam), California · 2011–2012"
    },
    "fr": {
      "title": "Barre de capture et plateau pour écrans interactifs",
      "sub": "Famille d'accessoires eBeam et concepts co-brandés pour la visioconférence",
      "challenge": "Pour amener eBeam dans les salles de réunion et de visioconférence, le récepteur et les stylets devaient s'intégrer aux écrans plats comme un véritable accessoire : ranger et charger les stylets, offrir des raccourcis d'outils et tenir la comparaison avec des marques comme Polycom et Cisco.",
      "process": "J'ai conçu plusieurs architectures —barre cylindrique sous l'écran, plateau en aluminium avec support de stylet et panneau d'icônes (pointeur, stylet, gomme, écran)— et exploré matériaux, éclairage du logo et adaptation à différentes tailles d'écran. J'ai aussi développé des concepts co-brandés : une barre pour Polycom et un ensemble stylet + récepteur pour la tablette Cisco Cius.",
      "result": "Une famille d'accessoires cohérente, présentée par des rendus en situation pour les échanges avec les partenaires et la définition produit.",
      "role": "Designer industriel et produit · Luidia Inc. (eBeam), Californie · 2011–2012"
    }
  },
  {
    "slug": "proyector",
    "count": 10,
    "brand": "Luidia · eBeam",
    "cat": "hardware",
    "dir": "hardware",
    "es": {
      "title": "Sensor eBeam para proyector de tiro corto",
      "sub": "Integración del receptor en el brazo de montaje del proyector",
      "challenge": "En las aulas el proyector de tiro corto se monta en un brazo sobre el pizarrón, y es justo donde el sensor eBeam tiene la mejor vista de la superficie. El reto era integrar el receptor ahí, sin cables sueltos ni piezas que parecieran añadidas, y compatible con los brazos de montaje existentes.",
      "process": "Estudié la geometría del proyector y del brazo y propuse dos posiciones: un módulo en la placa de pared y una carcasa que abraza el frente del proyector. Diseñé las piezas en 3D con su ensamble de dos partes, revisé el paso de cables y la línea de visión del sensor, y validé el conjunto con renders en contexto de aula.",
      "result": "Un accesorio de integración limpio que hace que el sensor parezca parte del proyector, listo para discutir fabricación y compatibilidad con Ingeniería.",
      "role": "Diseñador industrial y de producto · Luidia Inc. (eBeam), California · 2011–2012"
    },
    "en": {
      "title": "eBeam sensor for short-throw projectors",
      "sub": "Integrating the receiver into the projector mounting arm",
      "challenge": "In classrooms the short-throw projector hangs on an arm above the whiteboard, exactly where the eBeam sensor has the best view of the surface. The challenge was to integrate the receiver there with no loose cables or add-on look, and compatible with existing mounting arms.",
      "process": "I studied the projector and arm geometry and proposed two positions: a module on the wall plate and a housing that wraps the front of the projector. I designed the parts in 3D as a two-piece assembly, checked cable routing and the sensor's line of sight, and validated the set with in-classroom renders.",
      "result": "A clean integration accessory that makes the sensor look like part of the projector, ready to discuss manufacturing and compatibility with Engineering.",
      "role": "Industrial & product designer · Luidia Inc. (eBeam), California · 2011–2012"
    },
    "fr": {
      "title": "Capteur eBeam pour projecteur à courte focale",
      "sub": "Intégration du récepteur dans le bras de fixation du projecteur",
      "challenge": "En classe, le projecteur à courte focale est fixé sur un bras au-dessus du tableau, précisément là où le capteur eBeam a la meilleure vue sur la surface. Le défi était d'y intégrer le récepteur sans câbles apparents ni aspect rapporté, en restant compatible avec les bras existants.",
      "process": "J'ai étudié la géométrie du projecteur et du bras et proposé deux positions : un module sur la platine murale et un boîtier qui enveloppe l'avant du projecteur. J'ai conçu les pièces en 3D en assemblage de deux parties, vérifié le passage des câbles et le champ de vision du capteur, puis validé l'ensemble par des rendus en situation de classe.",
      "result": "Un accessoire d'intégration propre qui fait paraître le capteur comme une partie du projecteur, prêt à être discuté avec l'Ingénierie pour la fabrication et la compatibilité.",
      "role": "Designer industriel et produit · Luidia Inc. (eBeam), Californie · 2011–2012"
    }
  }
];
