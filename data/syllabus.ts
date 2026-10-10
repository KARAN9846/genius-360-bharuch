export type BilingualText = {
  english: string;
  gujarati: string;
};

type SubjectId =
  | "mathematics"
  | "science"
  | "technology-ai"
  | "logic-reasoning"
  | "general-sst"
  | "languages";

export type SyllabusSubject = {
  id: SubjectId;
  name: BilingualText;
  marks: number;
  topics: BilingualText[];
};

export type SyllabusGroup = {
  id: "A" | "B" | "C";
  title: string;
  currentStandard: string;
  preparingFor: string;
  subjects: SyllabusSubject[];
};

type SourceSyllabusSubject = {
  id: SubjectId;
  name: string;
  marks: number;
  topics: string[];
};

type SourceSyllabusGroup = Omit<SyllabusGroup, "subjects"> & {
  subjects: SourceSyllabusSubject[];
};

type GroupId = SyllabusGroup["id"];

const sourceSyllabusGroups: SourceSyllabusGroup[] = [
  {
    id: "A",
    title: "Group A",
    currentStandard: "Std 5",
    preparingFor: "Std 6",
    subjects: [
      {
        id: "mathematics",
        name: "Mathematics",
        marks: 20,
        topics: [
          "Numbers up to 6-digits (place value, expanded form, comparison, ordering)",
          "Basic Operations (addition, subtraction, multiplication, division with larger numbers)",
          "Factors and Multiples (basic — even/odd, simple divisibility)",
          "Fractions (introduction, simple types, comparison — halves, quarters, etc.)",
          "Decimals (basic introduction — tenths, hundredths)",
          "Money (calculations involving rupees and paise, simple word problems)",
          "Measurement (length, weight, capacity — units and simple conversions)",
          "Time (reading clocks, calendars, simple duration problems)",
          "Shapes and Patterns (basic 2D/3D shapes, geometric patterns)",
          "Perimeter (basic — simple shapes only)",
          "Data Handling (simple tally marks and pictographs)",
        ],
      },
      {
        id: "science",
        name: "Science",
        marks: 20,
        topics: [
          "Family and Relationships (basic social-environmental awareness)",
          "Plants Around Us (parts, types, uses)",
          "Animals Around Us (types, habitats, basic classification)",
          "Our Body (basic body parts, sense organs, hygiene)",
          "Food and Nutrition (basic — what we eat, healthy habits)",
          "Water (sources, uses, conservation — basic)",
          "Air (basic properties, importance)",
          "Our Environment & Surroundings (basic ecology, cleanliness)",
          "Means of Transport & Communication (basic awareness)",
        ],
      },
      {
        id: "technology-ai",
        name: "Technology / AI",
        marks: 15,
        topics: [
          "What is a Computer? (very basic parts and uses)",
          "Simple AI Awareness (everyday examples like voice assistants — conceptual only)",
          "Safe Internet Habits (very basic — asking a parent/teacher before going online)",
          "Simple Sequencing (everyday step-by-step tasks, as a lead-in to logical thinking)",
          "Awareness of Gadgets Around Us (phone, TV, calculator)",
        ],
      },
      {
        id: "logic-reasoning",
        name: "Logic & Reasoning",
        marks: 15,
        topics: [
          "Simple number patterns (basic counting sequences)",
          "Basic classification (odd one out — simple categories)",
          "Simple analogies (very basic relationships)",
          "Basic direction sense (left-right, simple directions)",
          "Simple non-verbal reasoning (basic shape/picture matching)",
          "Basic puzzles (simple, single-step logic)",
        ],
      },
      {
        id: "general-sst",
        name: "General SST",
        marks: 15,
        topics: [
          "My Family and Community (basic social studies)",
          "My State and My Country (basic awareness — Gujarat, India)",
          "Our Neighbourhood (basic civics — helpers, community workers)",
          "Maps and Directions (very basic introduction)",
          "Festivals and Culture (basic awareness)",
          "Current Affairs (very basic, age-appropriate national symbols/facts)",
        ],
      },
      {
        id: "languages",
        name: "Languages",
        marks: 15,
        topics: [
          "Hindi — Very basic grammar (simple sangya, sarvanam, basic sentence structure), simple comprehension, basic vocabulary",
          "English — Very basic grammar (nouns, simple present tense), simple comprehension, basic vocabulary",
          "Gujarati — Very basic grammar (simple naam, sarvanaam, sentence structure), simple comprehension, basic vocabulary",
        ],
      },
    ],
  },

  {
    id: "B",
    title: "Group B",
    currentStandard: "Std 6",
    preparingFor: "Std 7",
    subjects: [
      {
        id: "mathematics",
        name: "Mathematics",
        marks: 20,
        topics: [
          "Large Numbers & Knowing Our Numbers (place value, comparison, estimation)",
          "Whole Numbers (properties, number line)",
          "Integers (introduction, number line, basic operations)",
          "Fractions (types, comparison, operations)",
          "Decimals (place value, operations)",
          "Playing with Numbers (factors, multiples, LCM, HCF, divisibility rules)",
          "Ratio and Proportion (basic)",
          "Basic Geometrical Ideas & Understanding Elementary Shapes (angles, triangles, quadrilaterals, polygons)",
          "Mensuration (perimeter and area — rectangle, square)",
          "Data Handling (pictographs, bar graphs — introductory)",
          "Symmetry & Practical Geometry (basic constructions with ruler/compass)",
        ],
      },
      {
        id: "science",
        name: "Science",
        marks: 20,
        topics: [
          "Food: Sources, Components of Food & Balanced Diet",
          "Fibre to Fabric (plant and animal fibres)",
          "Sorting Materials into Groups (properties of materials)",
          "Separation of Substances (sieving, filtration, evaporation)",
          "Changes Around Us (reversible/irreversible — basic)",
          "Getting to Know Plants (parts and functions)",
          "Body Movements (joints, skeleton, animal movement)",
          "The Living Organisms — Characteristics and Habitats",
          "Air Around Us & Water (properties, importance)",
          "Garbage In, Garbage Out (waste management, environment basics)",
        ],
      },
      {
        id: "technology-ai",
        name: "Technology / AI",
        marks: 15,
        topics: [
          "Introduction to Computers (basic parts, uses)",
          "What is AI? (very basic real-life examples, age-appropriate)",
          "Internet Safety Basics (safe browsing habits)",
          "Sequencing & Basic Logical Thinking (pre-algorithm — everyday step-by-step tasks)",
          "Awareness of Everyday Technology (smart devices around us)",
        ],
      },
      {
        id: "logic-reasoning",
        name: "Logic & Reasoning",
        marks: 15,
        topics: [
          "Number series & pattern completion (simpler progressions)",
          "Analogies and classification (basic)",
          "Simple coding-decoding",
          "Direction sense (basic)",
          "Non-verbal reasoning (mirror images, simple figure matching)",
          "Basic puzzles and simple seating/grouping",
        ],
      },
      {
        id: "general-sst",
        name: "General SST",
        marks: 15,
        topics: [
          "History: What, Where, How and When? / Earliest Societies (hunter-gatherers, Neolithic age, first cities, early kingdoms)",
          "Civics: Diversity and Discrimination, Government (what it is, why needed), Local Government (basic)",
          "Geography: The Earth in the Solar System, Globe & Maps, Motions of the Earth (rotation/revolution), Major Domains of the Earth",
          "Current Affairs (age-appropriate, basic national awareness)",
        ],
      },
      {
        id: "languages",
        name: "Languages",
        marks: 15,
        topics: [
          "Hindi — Basic grammar (sangya, sarvanam, kriya, kaal basics), simple comprehension, vocabulary",
          "English — Basic grammar (parts of speech, simple tenses), comprehension, vocabulary",
          "Gujarati — Basic grammar (naam, sarvanaam, kriyapad, kaal basics), comprehension, vocabulary",
        ],
      },
    ],
  },

  {
    id: "C",
    title: "Group C",
    currentStandard: "Std 7",
    preparingFor: "Std 8",
    subjects: [
      {
        id: "mathematics",
        name: "Mathematics",
        marks: 20,
        topics: [
          "Integers, Fractions & Decimals (operations, word problems)",
          "Rational Numbers",
          "Simple Equations & Algebraic Expressions",
          "Ratio, Proportion & Percentage",
          "Profit, Loss & Simple Interest",
          "Lines and Angles, Triangles (properties, congruence)",
          "Perimeter and Area (rectangle, square, triangle, circle basics)",
          "Data Handling (mean, median, mode, bar graphs)",
          "Exponents and Powers",
        ],
      },
      {
        id: "science",
        name: "Science",
        marks: 20,
        topics: [
          "Nutrition in Plants & Animals",
          "Respiration in Organisms",
          "Heat (temperature, transfer)",
          "Acids, Bases and Salts",
          "Physical and Chemical Changes",
          "Weather, Climate and Adaptations",
          "Motion and Time",
          "Electric Current and its Effects",
          "Light (reflection basics)",
          "Water: A Precious Resource / Forests",
        ],
      },
      {
        id: "technology-ai",
        name: "Technology / AI",
        marks: 15,
        topics: [
          "Basics of Computers & Digital Devices",
          "Introduction to AI (what is AI, real-life examples)",
          "Internet Safety & Digital Citizenship",
          "Logical operations in computing (basic algorithms/flowcharts)",
          "Emerging tech awareness (robotics, automation — conceptual, age-appropriate)",
        ],
      },
      {
        id: "logic-reasoning",
        name: "Logic & Reasoning",
        marks: 15,
        topics: [
          "Number series & pattern completion",
          "Analogies and classification",
          "Coding-decoding",
          "Direction sense",
          "Non-verbal reasoning (mirror/water images, figure series)",
          "Puzzles and seating arrangement basics",
        ],
      },
      {
        id: "general-sst",
        name: "General SST",
        marks: 15,
        topics: [
          "History: Medieval India (Delhi Sultanate to Mughals)",
          "Civics: Equality, State Government, Media and Democracy",
          "Geography: Environment, Inside Our Earth, Our Changing Earth, Water",
          "Current Affairs (age-appropriate, national/state level)",
        ],
      },
      {
        id: "languages",
        name: "Languages",
        marks: 15,
        topics: [
          "Hindi — Grammar basics (sandhi, vachan, kaal), comprehension, vocabulary",
          "English — Grammar (tenses, parts of speech), comprehension, vocabulary",
          "Gujarati — Grammar (kaal, vachan, jodni), comprehension, vocabulary",
        ],
      },
    ],
  },
];

const subjectTranslations: Record<SubjectId, string> = {
  mathematics: "ગણિત",
  science: "વિજ્ઞાન",
  "technology-ai": "ટેકનોલોજી / કૃત્રિમ બુદ્ધિ (AI)",
  "logic-reasoning": "તર્કશક્તિ અને તાર્કિક વિચારસરણી",
  "general-sst": "સામાન્ય સામાજિક વિજ્ઞાન",
  languages: "ભાષાઓ",
};

const topicTranslations: Record<GroupId, Record<SubjectId, string[]>> = {
  A: {
    mathematics: [
      "6 અંક સુધીની સંખ્યાઓ (સ્થાનિક કિંમત, વિસ્તૃત સ્વરૂપ, સરખામણી અને ક્રમમાં ગોઠવણ)",
      "મૂળભૂત ક્રિયાઓ (મોટી સંખ્યાઓ સાથે સરવાળો, બાદબાકી, ગુણાકાર અને ભાગાકાર)",
      "અવયવો અને ગુણાકો (મૂળભૂત — સમ અને વિષમ સંખ્યાઓ, સરળ વિભાજ્યતા)",
      "ભિન્ન (પરિચય, સરળ પ્રકારો, સરખામણી — અડધા, ચોથા ભાગ વગેરે)",
      "દશાંશ (મૂળભૂત પરિચય — દશાંશના દસમા અને સોમા ભાગ)",
      "નાણાં (રૂપિયા અને પૈસાની ગણતરી, સરળ શાબ્દિક દાખલા)",
      "માપન (લંબાઈ, વજન, ક્ષમતા — એકમો અને સરળ રૂપાંતરણ)",
      "સમય (ઘડિયાળ અને કૅલેન્ડર વાંચવું, સમયગાળાના સરળ દાખલા)",
      "આકારો અને ભાતો (મૂળભૂત 2D/3D આકારો, ભૌમિતિક ભાતો)",
      "પરિમિતિ (મૂળભૂત — માત્ર સરળ આકારો)",
      "માહિતીનું સંચાલન (સરળ ટેલી નિશાનીઓ અને ચિત્રલેખ)",
    ],
    science: [
      "કુટુંબ અને સંબંધો (સમાજ અને પર્યાવરણ વિશેની મૂળભૂત જાગૃતિ)",
      "આપણી આસપાસના છોડ (ભાગો, પ્રકારો અને ઉપયોગો)",
      "આપણી આસપાસનાં પ્રાણીઓ (પ્રકારો, રહેઠાણો અને મૂળભૂત વર્ગીકરણ)",
      "આપણું શરીર (શરીરના મૂળભૂત ભાગો, જ્ઞાનેન્દ્રિયો અને સ્વચ્છતા)",
      "ખોરાક અને પોષણ (મૂળભૂત — આપણે શું ખાઈએ છીએ અને આરોગ્યપ્રદ આદતો)",
      "પાણી (સ્ત્રોતો, ઉપયોગો અને સંરક્ષણ — મૂળભૂત જાણકારી)",
      "હવા (મૂળભૂત ગુણધર્મો અને મહત્ત્વ)",
      "આપણું પર્યાવરણ અને આસપાસનો વિસ્તાર (મૂળભૂત પરિસ્થિતિવિજ્ઞાન અને સ્વચ્છતા)",
      "પરિવહન અને સંદેશાવ્યવહારનાં સાધનો (મૂળભૂત જાણકારી)",
    ],
    "technology-ai": [
      "કમ્પ્યુટર શું છે? (મૂળભૂત ભાગો અને ઉપયોગો)",
      "AI વિશે સરળ જાણકારી (વૉઇસ આસિસ્ટન્ટ જેવા રોજિંદા ઉદાહરણો — માત્ર સમજ આધારિત)",
      "ઇન્ટરનેટની સલામત આદતો (ખૂબ જ મૂળભૂત — ઑનલાઇન જતાં પહેલાં માતા-પિતા અથવા શિક્ષકને પૂછવું)",
      "સરળ ક્રમબદ્ધતા (તાર્કિક વિચારસરણીની શરૂઆત તરીકે રોજિંદાં પગલાંવાર કાર્યો)",
      "આસપાસનાં ઉપકરણોની જાણકારી (ફોન, ટીવી, કૅલ્ક્યુલેટર)",
    ],
    "logic-reasoning": [
      "સરળ સંખ્યા ભાતો (ગણતરીના મૂળભૂત ક્રમ)",
      "મૂળભૂત વર્ગીકરણ (અલગ પડતી વસ્તુ ઓળખવી — સરળ શ્રેણીઓ)",
      "સરળ સામ્યતા (ખૂબ જ મૂળભૂત સંબંધો)",
      "દિશાની મૂળભૂત સમજ (ડાબે-જમણે અને સરળ દિશાઓ)",
      "સરળ આકારિક તર્કશક્તિ (આકારો અથવા ચિત્રોની સરખામણી)",
      "મૂળભૂત કોયડાઓ (એક પગલાંવાળું સરળ તર્ક)",
    ],
    "general-sst": [
      "મારું કુટુંબ અને સમુદાય (સમાજશાસ્ત્રની મૂળભૂત જાણકારી)",
      "મારું રાજ્ય અને મારો દેશ (ગુજરાત અને ભારત વિશેની મૂળભૂત જાણકારી)",
      "આપણી આસપાસનો વિસ્તાર (મૂળભૂત નાગરિકશાસ્ત્ર — મદદગાર લોકો અને સમુદાયના કર્મચારીઓ)",
      "નકશા અને દિશાઓ (મૂળભૂત પરિચય)",
      "તહેવારો અને સંસ્કૃતિ (મૂળભૂત જાણકારી)",
      "ચાલુ પ્રવાહો (ઉંમરને અનુરૂપ રાષ્ટ્રીય પ્રતીકો અને તથ્યોની મૂળભૂત જાણકારી)",
    ],
    languages: [
      "હિન્દી — ખૂબ જ મૂળભૂત વ્યાકરણ (સરળ સંજ્ઞા, સર્વનામ અને વાક્યરચના), સરળ સમજણ અને મૂળભૂત શબ્દભંડોળ",
      "અંગ્રેજી — ખૂબ જ મૂળભૂત વ્યાકરણ (નામપદ અને સાદો વર્તમાનકાળ), સરળ સમજણ અને મૂળભૂત શબ્દભંડોળ",
      "ગુજરાતી — ખૂબ જ મૂળભૂત વ્યાકરણ (સરળ નામ, સર્વનામ અને વાક્યરચના), સરળ સમજણ અને મૂળભૂત શબ્દભંડોળ",
    ],
  },
  B: {
    mathematics: [
      "મોટી સંખ્યાઓ અને સંખ્યાઓની ઓળખ (સ્થાનિક કિંમત, સરખામણી અને અંદાજ)",
      "પૂર્ણ સંખ્યાઓ (ગુણધર્મો અને સંખ્યા રેખા)",
      "પૂર્ણાંકો (પરિચય, સંખ્યા રેખા અને મૂળભૂત ક્રિયાઓ)",
      "ભિન્ન (પ્રકારો, સરખામણી અને ક્રિયાઓ)",
      "દશાંશ (સ્થાનિક કિંમત અને ક્રિયાઓ)",
      "સંખ્યાઓ સાથે રમત (અવયવો, ગુણાકો, લ.સા.અ., ગુ.સા.અ. અને વિભાજ્યતાના નિયમો)",
      "ગુણોત્તર અને પ્રમાણ (મૂળભૂત)",
      "મૂળભૂત ભૌમિતિક ખ્યાલો અને પ્રાથમિક આકારોની સમજ (ખૂણા, ત્રિકોણ, ચતુષ્કોણ અને બહુકોણ)",
      "ક્ષેત્રમિતિ (લંબચોરસ અને ચોરસની પરિમિતિ તથા ક્ષેત્રફળ)",
      "માહિતીનું સંચાલન (ચિત્રલેખ અને સ્તંભ આલેખ — પ્રાથમિક પરિચય)",
      "સપ્રમાણતા અને પ્રાયોગિક ભૂમિતિ (માપપટ્ટી અને કંપાસથી મૂળભૂત રચનાઓ)",
    ],
    science: [
      "ખોરાક: સ્ત્રોતો, ખોરાકના ઘટકો અને સંતુલિત આહાર",
      "તંતુમાંથી કાપડ (વનસ્પતિ અને પ્રાણીજન્ય રેસાઓ)",
      "પદાર્થોને જૂથોમાં ગોઠવવા (પદાર્થોના ગુણધર્મો)",
      "પદાર્થોનું વિભાજન (ચાળવું, ગાળવું અને બાષ્પીભવન)",
      "આપણી આસપાસના ફેરફારો (ઉલટાવી શકાય તેવા અને ન શકાય તેવા — મૂળભૂત)",
      "છોડને ઓળખીએ (ભાગો અને તેમનાં કાર્યો)",
      "શરીરની હિલચાલ (સાંધા, હાડપિંજર અને પ્રાણીઓની હિલચાલ)",
      "સજીવો — લક્ષણો અને રહેઠાણો",
      "આપણી આસપાસની હવા અને પાણી (ગુણધર્મો અને મહત્ત્વ)",
      "કચરો ક્યાં જાય છે? (કચરાનું વ્યવસ્થાપન અને પર્યાવરણની મૂળભૂત જાણકારી)",
    ],
    "technology-ai": [
      "કમ્પ્યુટરનો પરિચય (મૂળભૂત ભાગો અને ઉપયોગો)",
      "AI શું છે? (ઉંમરને અનુરૂપ, વાસ્તવિક જીવનનાં ખૂબ જ સરળ ઉદાહરણો)",
      "ઇન્ટરનેટ સલામતીની મૂળભૂત બાબતો (સલામત રીતે ઇન્ટરનેટ વાપરવાની આદતો)",
      "ક્રમબદ્ધતા અને તાર્કિક વિચારસરણી (અલ્ગોરિધમના પ્રારંભિક ખ્યાલ તરીકે રોજિંદાં પગલાંવાર કાર્યો)",
      "રોજિંદી ટેકનોલોજીની જાણકારી (આસપાસનાં સ્માર્ટ ઉપકરણો)",
    ],
    "logic-reasoning": [
      "સંખ્યા શ્રેણી અને ભાત પૂર્ણ કરવી (સરળ ક્રમ)",
      "સામ્યતા અને વર્ગીકરણ (મૂળભૂત)",
      "સરળ કોડિંગ-ડિકોડિંગ",
      "દિશાની સમજ (મૂળભૂત)",
      "આકારિક તર્કશક્તિ (અરીસામાં દેખાતાં પ્રતિબિંબો અને સરળ આકારોની સરખામણી)",
      "મૂળભૂત કોયડાઓ અને સરળ બેઠક અથવા જૂથ ગોઠવણ",
    ],
    "general-sst": [
      "ઇતિહાસ: શું, ક્યાં, કેવી રીતે અને ક્યારે? / પ્રારંભિક સમાજો (શિકારી-સંગ્રાહકો, નવપાષાણ યુગ, પ્રથમ શહેરો અને પ્રારંભિક રાજ્યો)",
      "નાગરિકશાસ્ત્ર: વિવિધતા અને ભેદભાવ, સરકાર (તે શું છે અને શા માટે જરૂરી છે), સ્થાનિક સરકાર (મૂળભૂત)",
      "ભૂગોળ: સૌરમંડળમાં પૃથ્વી, ગ્લોબ અને નકશા, પૃથ્વીની ગતિઓ (પરિભ્રમણ અને પરિક્રમણ), પૃથ્વીનાં મુખ્ય વિભાગો",
      "ચાલુ પ્રવાહો (ઉંમરને અનુરૂપ રાષ્ટ્રીય બાબતોની મૂળભૂત જાણકારી)",
    ],
    languages: [
      "હિન્દી — મૂળભૂત વ્યાકરણ (સંજ્ઞા, સર્વનામ, ક્રિયા અને કાળના પ્રાથમિક ખ્યાલો), સરળ સમજણ અને શબ્દભંડોળ",
      "અંગ્રેજી — મૂળભૂત વ્યાકરણ (શબ્દભેદ અને સાદા કાળ), સમજણ અને શબ્દભંડોળ",
      "ગુજરાતી — મૂળભૂત વ્યાકરણ (નામ, સર્વનામ, ક્રિયાપદ અને કાળના પ્રાથમિક ખ્યાલો), સમજણ અને શબ્દભંડોળ",
    ],
  },
  C: {
    mathematics: [
      "પૂર્ણાંકો, ભિન્ન અને દશાંશ (ક્રિયાઓ અને શાબ્દિક દાખલા)",
      "સંમેય સંખ્યાઓ",
      "સરળ સમીકરણો અને બીજગણિતીય પદાવલીઓ",
      "ગુણોત્તર, પ્રમાણ અને ટકાવારી",
      "નફો, નુકસાન અને સાદું વ્યાજ",
      "રેખાઓ અને ખૂણાઓ, ત્રિકોણ (ગુણધર્મો અને સર્વાંગસમતા)",
      "પરિમિતિ અને ક્ષેત્રફળ (લંબચોરસ, ચોરસ, ત્રિકોણ અને વર્તુળના મૂળભૂત ખ્યાલો)",
      "માહિતીનું સંચાલન (સરેરાશ, મધ્યસ્થ, બહુલક અને સ્તંભ આલેખ)",
      "ઘાત અને ઘાતાંક",
    ],
    science: [
      "વનસ્પતિ અને પ્રાણીઓમાં પોષણ",
      "સજીવોમાં શ્વસન",
      "ઉષ્મા (તાપમાન અને ઉષ્માનું વહન)",
      "ઍસિડ, બેઝ અને ક્ષાર",
      "ભૌતિક અને રાસાયણિક ફેરફારો",
      "હવામાન, આબોહવા અને અનુકૂલન",
      "ગતિ અને સમય",
      "વિદ્યુતપ્રવાહ અને તેની અસરો",
      "પ્રકાશ (પરાવર્તનના મૂળભૂત ખ્યાલો)",
      "પાણી: અમૂલ્ય સંસાધન / જંગલો",
    ],
    "technology-ai": [
      "કમ્પ્યુટર અને ડિજિટલ ઉપકરણોની મૂળભૂત જાણકારી",
      "AIનો પરિચય (AI શું છે અને વાસ્તવિક જીવનનાં ઉદાહરણો)",
      "ઇન્ટરનેટ સલામતી અને ડિજિટલ નાગરિકતા",
      "કમ્પ્યુટિંગમાં તાર્કિક ક્રિયાઓ (મૂળભૂત અલ્ગોરિધમ અને ફ્લોચાર્ટ)",
      "નવીન ટેકનોલોજીની જાણકારી (રોબોટિક્સ અને સ્વચાલન — ઉંમરને અનુરૂપ, સમજ આધારિત)",
    ],
    "logic-reasoning": [
      "સંખ્યા શ્રેણી અને ભાત પૂર્ણ કરવી",
      "સામ્યતા અને વર્ગીકરણ",
      "કોડિંગ-ડિકોડિંગ",
      "દિશાની સમજ",
      "આકારિક તર્કશક્તિ (અરીસા અને પાણીમાં દેખાતાં પ્રતિબિંબો, આકારોની શ્રેણી)",
      "કોયડાઓ અને બેઠક ગોઠવણના મૂળભૂત ખ્યાલો",
    ],
    "general-sst": [
      "ઇતિહાસ: મધ્યકાલીન ભારત (દિલ્હી સલ્તનતથી મુઘલો સુધી)",
      "નાગરિકશાસ્ત્ર: સમાનતા, રાજ્ય સરકાર, મીડિયા અને લોકશાહી",
      "ભૂગોળ: પર્યાવરણ, આપણી પૃથ્વીની અંદર, બદલાતી પૃથ્વી અને પાણી",
      "ચાલુ પ્રવાહો (ઉંમરને અનુરૂપ, રાષ્ટ્રીય અને રાજ્ય સ્તરની બાબતો)",
    ],
    languages: [
      "હિન્દી — વ્યાકરણના મૂળભૂત ખ્યાલો (સંધિ, વચન અને કાળ), સમજણ અને શબ્દભંડોળ",
      "અંગ્રેજી — વ્યાકરણ (કાળ અને શબ્દભેદ), સમજણ અને શબ્દભંડોળ",
      "ગુજરાતી — વ્યાકરણ (કાળ, વચન અને જોડણી), સમજણ અને શબ્દભંડોળ",
    ],
  },
};

export const syllabusGroups: SyllabusGroup[] = sourceSyllabusGroups.map(
  (group) => ({
    ...group,
    subjects: group.subjects.map((subject) => ({
      ...subject,
      name: {
        english: subject.name,
        gujarati: subjectTranslations[subject.id],
      },
      topics: subject.topics.map((english, index) => ({
        english,
        gujarati:
          topicTranslations[group.id][subject.id][index],
      })),
    })),
  }),
);
