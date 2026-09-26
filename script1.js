// NAVIGATION MENU CONFIGURATION
const subCategories = {
  tense: [
    { label: "Present Tense", key: "present" },
    { label: "Past Tense", key: "past" },
    { label: "Future Tense", key: "future" }
  ],
  vocabulary: [
    { label: "Synonyms & Antonyms", key: "syn_ant" },
    { label: "Idioms & Phrases", key: "idioms" },
    { label: "Daily Vocabulary", key: "daily_words" }
  ],
  speech: [
    { label: "Direct Speech", key: "direct" },
    { label: "Indirect Speech", key: "indirect" },
    { label: "Rules of Direct to Indirect", key: "speech_rules" }
  ],
  voice: [
    { label: "Active Voice", key: "active" },
    { label: "Passive Voice", key: "passive" },
    { label: "Voice Transformation Rules", key: "voice_rules" }
  ],
  others: [
    { label: "Prepositions", key: "prepositions" },
    { label: "Articles (A, An, The)", key: "articles" },
    { label: "Conjunctions", key: "conjunctions" }
  ],
  rule: [
    { label: "IPA (Phonetic Alphabet)", key: "ipa" },
    { label: "Syllables & Division Rules", key: "syllable" },
    { label: "Subject-Verb Agreement", key: "sva" },
    { label: "Punctuation Rules", key: "punctuation" }
  ]
};

// FULL COMPREHENSIVE DATA STORE
const contentData = {
  
  // -------------------------------------------------------------
  // 1. TENSE DATA
  // -------------------------------------------------------------
  present: `
    <h2>Present Tense (వర్తమాన కాలం)</h2>
    <p>ప్రస్తుతం జరుగుతున్న, అలవాటుగా చేసే లేదా విశ్వసత్యాలైన పనులను తెలియజేయడానికి వాడతారు.</p>
    
    <h3>1. Simple Present Tense</h3>
    <p><b>Structure:</b> Subject + V1 (s/es) + Object</p>
    <ul>
      <li><b>ఉపయోగం:</b> అలవాట్లు, రోజువారీ పనులు, నిజాలు.</li>
      <li><b>Ex 1:</b> I wake up at 6 AM every day. (నేను ప్రతిరోజూ ఉదయం 6 గంటలకు లేస్తాను.)</li>
      <li><b>Ex 2:</b> The Sun rises in the East. (సూర్యుడు తూర్పున ఉదయిస్తాడు.)</li>
      <li><b>Ex 3:</b> She speaks English fluently. (ఆమె ఇంగ్లీష్ ధారాళంగా మాట్లాడుతుంది.)</li>
    </ul>

    <h3>2. Present Continuous Tense</h3>
    <p><b>Structure:</b> Subject + am/is/are + V1 + ing + Object</p>
    <ul>
      <li><b>ఉపయోగం:</b> మాట్లాడే క్షణంలో జరుగుతున్న పనులు.</li>
      <li><b>Ex 1:</b> I am writing an exam now. (నేను ఇప్పుడు పరీక్ష రాస్తున్నాను.)</li>
      <li><b>Ex 2:</b> They are playing cricket. (వారు క్రికెట్ ఆడుతున్నారు.)</li>
    </ul>

    <h3>3. Present Perfect Tense</h3>
    <p><b>Structure:</b> Subject + have/has + V3 + Object</p>
    <ul>
      <li><b>ఉపయోగం:</b> ఇప్పుడే పూర్తయిన పనులు.</li>
      <li><b>Ex 1:</b> I have just finished my dinner. (నేను ఇప్పుడే నా రాత్రి భోజనం పూర్తి చేశాను.)</li>
      <li><b>Ex 2:</b> She has gone to Hyderabad. (ఆమె హైదరాబాద్ వెళ్ళింది.)</li>
    </ul>

    <h3>4. Present Perfect Continuous Tense</h3>
    <p><b>Structure:</b> Subject + have been/has been + V1 + ing + Object</p>
    <ul>
      <li><b>ఉపయోగం:</b> గతంలో ప్రారంభమై ఇప్పటికీ కొనసాగుతున్న పనులు.</li>
      <li><b>Ex 1:</b> I have been working here for 5 years. (నేను 5 సంవత్సరాలుగా ఇక్కడ పనిచేస్తున్నాను.)</li>
    </ul>
  `,

  past: `
    <h2>Past Tense (భూత కాలం)</h2>
    <p>గతంలో పూర్తయిన పనుల గురించి చెప్పడానికి వాడతారు.</p>
    
    <h3>1. Simple Past Tense</h3>
    <p><b>Structure:</b> Subject + V2 + Object</p>
    <ul>
      <li><b>Ex 1:</b> India won the match yesterday. (నిన్న భారతదేశం మ్యాచ్ గెలిచింది.)</li>
      <li><b>Ex 2:</b> She wrote a letter. (ఆమె ఉత్తరం రాసింది.)</li>
    </ul>

    <h3>2. Past Continuous Tense</h3>
    <p><b>Structure:</b> Subject + was/were + V1 + ing + Object</p>
    <ul>
      <li><b>Ex 1:</b> I was studying when he arrived. (అతను వచ్చినప్పుడు నేను చదువుకుంటున్నాను.)</li>
    </ul>

    <h3>3. Past Perfect Tense</h3>
    <p><b>Structure:</b> Subject + had + V3 + Object</p>
    <ul>
      <li><b>Ex 1:</b> The train had left before I reached the station. (నేను స్టేషన్‌కు చేరుకునే సరికి రైలు వెళ్ళిపోయింది.)</li>
    </ul>

    <h3>4. Past Perfect Continuous Tense</h3>
    <p><b>Structure:</b> Subject + had been + V1 + ing + Object</p>
    <ul>
      <li><b>Ex 1:</b> He had been living in Delhi before moving to London. (అతను లండన్ వెళ్లకముందు ఢిల్లీలో నివసిస్తూ ఉండినాడు.)</li>
    </ul>
  `,

  future: `
    <h2>Future Tense (భవిష్యత్ కాలం)</h2>
    
    <h3>1. Simple Future Tense</h3>
    <p><b>Structure:</b> Subject + will/shall + V1 + Object</p>
    <ul><li><b>Ex:</b> I will call you tomorrow. (నేను నిన్ను రేపు పిలుస్తాను.)</li></ul>

    <h3>2. Future Continuous Tense</h3>
    <p><b>Structure:</b> Subject + will be + V1 + ing + Object</p>
    <ul><li><b>Ex:</b> At this time tomorrow, I will be flying to US. (రేపు ఈ సమయానికి నేను యూఎస్‌కి విమానంలో ప్రయాణిస్తూ ఉంటాను.)</li></ul>

    <h3>3. Future Perfect Tense</h3>
    <p><b>Structure:</b> Subject + will have + V3 + Object</p>
    <ul><li><b>Ex:</b> I will have completed this course by next month. (వచ్చే నెల నాటికి నేను ఈ కోర్సు పూర్తి చేసి ఉంటాను.)</li></ul>

    <h3>4. Future Perfect Continuous Tense</h3>
    <p><b>Structure:</b> Subject + will have been + V1 + ing + Object</p>
    <ul><li><b>Ex:</b> By next June, she will have been teaching for 10 years.</li></ul>
  `,

  // -------------------------------------------------------------
  // 2. VOICE DATA (FULL COMPREHENSIVE)
  // -------------------------------------------------------------
  active: `
    <h2>Active Voice (కర్తరి ప్రయోగం)</h2>
    <p>ఒక వాక్యంలో <b>Subject (పని చేసే వ్యక్తి)</b> ప్రధానంగా ఉండి, పని నేరుగా చేసినట్లు తెలిపితే దాన్ని Active Voice అంటారు.</p>
    <p><b>సారూప్యత:</b> Subject + Verb + Object</p>
    <ul>
      <li><b>Ex 1:</b> Rama killed Ravana. (రాముడు రావణుడిని చంపాడు.)</li>
      <li><b>Ex 2:</b> She is cooking food. (ఆమె వంట చేస్తోంది.)</li>
      <li><b>Ex 3:</b> They built a house. (వారు ఇల్లు కట్టారు.)</li>
    </ul>
  `,

  passive: `
    <h2>Passive Voice (కర్మణి ప్రయోగం)</h2>
    <p>ఒక వాక్యంలో <b>Object (పని ఫలితాన్ని పొందేది)</b> ప్రధానంగా ఉండి, దానిపై పని జరిగినట్లు తెలిపితే దాన్ని Passive Voice అంటారు.</p>
    <p><b>సారూప్యత:</b> Object + Helping Verb + V3 (Past Participle) + by + Subject</p>
    <ul>
      <li><b>Ex 1:</b> Ravana was killed by Rama. (రావణుడు రాముడిచే చంపబడ్డాడు.)</li>
      <li><b>Ex 2:</b> Food is being cooked by her. (ఆమె ద్వారా వంట చేయబడుతోంది.)</li>
      <li><b>Ex 3:</b> A house was built by them. (వారిచే ఇల్లు కట్టబడింది.)</li>
    </ul>
  `,

  voice_rules: `
    <h2>Voice Transformation Rules (Active ⇄ Passive మార్పు నియమాలు)</h2>
    <p>Active Voice ని Passive Voice లోకి మార్చడానికి ముఖ్యమైన 5 సూత్రాలు:</p>
    <ol>
      <li>Active Voice లోని <b>Object</b> ను Passive Voice లో <b>Subject</b> గా మార్చాలి.</li>
      <li>Tense ని బట్టి సరైన <b>Helping Verb</b> (am/is/are/was/were/been/being) ని చేర్చాలి.</li>
      <li>ఎల్లప్పుడూ వెర్బ్ యొక్క మూడవ రూపం <b>V3 (Past Participle)</b> మాత్రమే వాడాలి.</li>
      <li>ముఖ్యమైన క్రియ (V3) తర్వాత <b>'by'</b> అనే Preposition చేర్చాలి.</li>
      <li>Active Voice లోని <b>Subject</b> ను Passive Voice చివరలో <b>Object</b> గా మార్చాలి.</li>
    </ol>

    <h3>Tense ప్రకారం రూపాంతరం (Tense Change Chart):</h3>
    <table class="data-table">
      <tr><th>Tense</th><th>Active Voice</th><th>Passive Voice</th></tr>
      <tr><td>Simple Present</td><td>writes</td><td>is/am/are + written</td></tr>
      <tr><td>Present Continuous</td><td>is writing</td><td>is/am/are + being + written</td></tr>
      <tr><td>Present Perfect</td><td>has written</td><td>has/have + been + written</td></tr>
      <tr><td>Simple Past</td><td>wrote</td><td>was/were + written</td></tr>
      <tr><td>Past Continuous</td><td>was writing</td><td>was/were + being + written</td></tr>
      <tr><td>Simple Future</td><td>will write</td><td>will be + written</td></tr>
    </table>
  `,

  // -------------------------------------------------------------
  // 3. SPEECH DATA (FULL COMPREHENSIVE)
  // -------------------------------------------------------------
  direct: `
    <h2>Direct Speech (ప్రత్యక్ష కథనము)</h2>
    <p>ఒక వ్యక్తి చెప్పిన మాటలను ఎటువంటి మార్పు లేకుండా, అతను చెప్పిన పదాలనే ఇన్వర్టెడ్ కామాలలో <b>(" ")</b> యథాతథంగా చెప్పడాన్ని Direct Speech అంటారు.</p>
    <ul>
      <li><b>Ex 1:</b> Raju said, "I am going to school." (రాజు, "నేను స్కూల్‌కి వెళ్తున్నాను" అని చెప్పాడు.)</li>
      <li><b>Ex 2:</b> She said, "I love music." (ఆమె, "నాకు సంగీతం ఇష్టం" అని చెప్పింది.)</li>
    </ul>
  `,

  indirect: `
    <h2>Indirect Speech (పరోక్ష కథనము)</h2>
    <p>ఒక వ్యక్తి చెప్పిన మాటలలోని అర్ధాన్ని మార్చకుండా, మన సొంత మాటలలో (Inverted Commas లేకుండా) చెప్పడాన్ని Indirect Speech అంటారు.</p>
    <ul>
      <li><b>Ex 1:</b> Raju said that he was going to school. (తాను స్కూల్‌కి వెళ్తున్నట్లు రాజు చెప్పాడు.)</li>
      <li><b>Ex 2:</b> She said that she loved music. (తనకు సంగీతం ఇష్టమని ఆమె చెప్పింది.)</li>
    </ul>
  `,

  speech_rules: `
    <h2>Rules for Changing Direct to Indirect Speech</h2>
    <ol>
      <li><b>Inverted Commas (" ") మరియు Comma (,) లను తొలగించి</b> రెండింటి మధ్య 'that' అనే Conjunction ని ఉపయోగించాలి.</li>
      <li><b>Reporting Verb మార్పులు:</b> 'said to' ఉంటే అది 'told' గా మారుతుంది.</li>
      <li><b>Pronoun మార్పులు:</b> మాట్లాడే వ్యక్తిని బట్టి Pronouns (I -> he/she, My -> his/her) మారుతాయి.</li>
      <li><b>Tense మార్పులు (Present Tense ను Past Tense గా మార్చాలి):</b></li>
    </ol>

    <table class="data-table">
      <tr><th>Direct Speech</th><th>Indirect Speech</th></tr>
      <tr><td>Simple Present (V1)</td><td>Simple Past (V2)</td></tr>
      <tr><td>Present Continuous (am/is/are)</td><td>Past Continuous (was/were)</td></tr>
      <tr><td>Present Perfect (have/has)</td><td>Past Perfect (had)</td></tr>
      <tr><td>Simple Past (V2)</td><td>Past Perfect (had + V3)</td></tr>
      <tr><td>Will / Shall / Can / May</td><td>Would / Should / Could / Might</td></tr>
    </table>
  `,

  // -------------------------------------------------------------
  // 4. RULES: IPA & SYLLABLES (FULL COMPREHENSIVE DATA)
  // -------------------------------------------------------------
  ipa: `
    <h2>IPA - International Phonetic Alphabet (44 Sounds)</h2>
    <p>ఇంగ్లీష్ భాషలో 26 అక్షరాలు మాత్రమే ఉన్నప్పటికీ, వాటి ఉచ్చారణ శబ్దాలు (Sounds) మొత్తం <b>44</b> ఉంటాయి.</p>

    <h3>1. Short & Long Vowels (12 Sounds)</h3>
    <table class="data-table">
      <tr><th>Symbol</th><th>Example</th><th>Telugu Sound</th></tr>
      <tr><td>/ɪ/</td><td>S<b>i</b>t, F<b>i</b>sh</td><td>ఇ (హ్రస్వం)</td></tr>
      <tr><td>/iː/</td><td>S<b>ee</b>, M<b>ee</b>t</td><td>ఈ (దీర్ఘం)</td></tr>
      <tr><td>/e/</td><td>B<b>e</b>d, M<b>e</b>n</td><td>ఎ</td></tr>
      <tr><td>/æ/</td><td>C<b>a</b>t, B<b>a</b>g</td><td>యా</td></tr>
      <tr><td>/ɑː/</td><td>F<b>a</b>ther, C<b>a</b>r</td><td>ఆ (దీర్ఘం)</td></tr>
      <tr><td>/ɒ/</td><td>H<b>o</b>t, B<b>o</b>x</td><td>ఒ</td></tr>
      <tr><td>/ɔː/</td><td>F<b>ou</b>r, S<b>aw</b></td><td>ఓ (దీర్ఘం)</td></tr>
      <tr><td>/ʊ/</td><td>P<b>u</b>t, B<b>oo</b>k</td><td>ఉ</td></tr>
      <tr><td>/uː/</td><td>T<b>oo</b>, T<b>wo</b></td><td>ఊ (దీర్ఘం)</td></tr>
      <tr><td>/ʌ/</td><td>C<b>u</b>p, S<b>u</b>n</td><td>అ</td></tr>
      <tr><td>/ɜː/</td><td>B<b>ir</b>d, Sh<b>ir</b>t</td><td>అః (దీర్ఘ శబ్దం)</td></tr>
      <tr><td>/ə/</td><td><b>A</b>bout, T<b>ea</b>cher</td><td>అ (Soft Sound)</td></tr>
    </table>

    <h3>2. Diphthongs - డబుల్ వోవెల్ శబ్దాలు (8 Sounds)</h3>
    <table class="data-table">
      <tr><th>Symbol</th><th>Example</th><th>Telugu Sound</th></tr>
      <tr><td>/eɪ/</td><td>D<b>ay</b>, M<b>a</b>ke</td><td>ఏయి</td></tr>
      <tr><td>/aɪ/</td><td>M<b>y</b>, Sk<b>y</b></td><td>ఆయి</td></tr>
      <tr><td>/ɔɪ/</td><td>B<b>oy</b>, T<b>oy</b></td><td>ఓయి</td></tr>
      <tr><td>/aʊ/</td><td>N<b>ow</b>, C<b>ow</b></td><td>ఆవు</td></tr>
      <tr><td>/əʊ/</td><td>G<b>o</b>, H<b>ome</b></td><td>ఓఉ</td></tr>
      <tr><td>/ɪə/</td><td>N<b>ea</b>r, H<b>ere</b></td><td>ఇయ</td></tr>
      <tr><td>/eə/</td><td>H<b>air</b>, C<b>are</b></td><td>ఎయ</td></tr>
      <tr><td>/ʊə/</td><td>P<b>oor</b>, T<b>our</b></td><td>ఉయ</td></tr>
    </table>

    <h3>3. Consonants - హల్లు శబ్దాలు (24 Sounds)</h3>
    <table class="data-table">
      <tr><th>Symbol</th><th>Example</th><th>Telugu Sound</th></tr>
      <tr><td>/p/</td><td><b>P</b>en</td><td>ప</td></tr>
      <tr><td>/b/</td><td><b>B</b>ook</td><td>బ</td></tr>
      <tr><td>/t/</td><td><b>T</b>ea</td><td>ట</td></tr>
      <tr><td>/d/</td><td><b>D</b>og</td><td>డ</td></tr>
      <tr><td>/k/</td><td><b>K</b>ey</td><td>క</td></tr>
      <tr><td>/ɡ/</td><td><b>G</b>o</td><td>గ</td></tr>
      <tr><td>/tʃ/</td><td><b>Ch</b>air</td><td>చ</td></tr>
      <tr><td>/dʒ/</td><td><b>J</b>am</td><td>జ</td></tr>
      <tr><td>/f/</td><td><b>F</b>ish</td><td>ఫ</td></tr>
      <tr><td>/v/</td><td><b>V</b>an</td><td>వ (దంతాల శబ్దం)</td></tr>
      <tr><td>/θ/</td><td><b>Th</b>ink</td><td>థ</td></tr>
      <tr><td>/ð/</td><td><b>Th</b>is</td><td>ద</td></tr>
      <tr><td>/s/</td><td><b>S</b>un</td><td>స</td></tr>
      <tr><td>/z/</td><td><b>Z</b>oo</td><td>జ (విజిలింగ్ శబ్దం)</td></tr>
      <tr><td>/ʃ/</td><td><b>Sh</b>ip</td><td>ష</td></tr>
      <tr><td>/ʒ/</td><td>Vi<b>si</b>on</td><td>ఝ</td></tr>
      <tr><td>/h/</td><td><b>H</b>at</td><td>హ</td></tr>
      <tr><td>/m/</td><td><b>M</b>an</td><td>మ</td></tr>
      <tr><td>/n/</td><td><b>N</b>o</td><td>న</td></tr>
      <tr><td>/ŋ/</td><td>Si<b>ng</b></td><td>ంగ్</td></tr>
      <tr><td>/l/</td><td><b>L</b>eg</td><td>ల</td></tr>
      <tr><td>/r/</td><td><b>R</b>ed</td><td>ర</td></tr>
      <tr><td>/w/</td><td><b>W</b>et</td><td>వ</td></tr>
      <tr><td>/j/</td><td><b>Y</b>es</td><td>య</td></tr>
    </table>
  `,

  syllable: `
    <h2>Syllables & Syllable Division Rules</h2>
    <p><b>Syllable (అక్షర యూనిట్ / శబ్ద భాగం):</b> ఒక పదాన్ని పలికేటప్పుడు అందులో ఉండే ఒక వోవెల్ శబ్దాన్ని (Vowel Sound) ఒక Syllable అంటారు. ఒక పదాన్ని విరిచి పలికే భాగాన్నే Syllables గా విభాగిస్తాం.</p>

    <h3>1. Types of Syllables (పదాల రకాలు)</h3>
    <ul>
      <li><b>Monosyllabic Words (ఒకే శబ్దం ఉన్న పదాలు):</b> Cat, Dog, Pen, Book.</li>
      <li><b>Disyllabic Words (రెండు శబ్దాలు ఉన్న పదాలు):</b> Wa-ter, Doc-tor, Pa-per.</li>
      <li><b>Trisyllabic Words (మూడు శబ్దాలు ఉన్న పదాలు):</b> Beau-ti-ful, Com-pu-ter.</li>
      <li><b>Polysyllabic Words (నాలుగు అంతకంటే ఎక్కువ శబ్దాలు):</b> Ed-u-ca-ti-on, Un-i-ver-si-ty.</li>
    </ul>

    <h3>2. Syllable Division Rules (పదాలను విరిచే సూత్రాలు)</h3>
    
    <p><b>Rule 1: VC/CV Rule (కన్సోనంట్ - కన్సోనంట్ మధ్యలో విభజించడం)</b><br>
    రెండు వోవెల్స్ మధ్య రెండు కన్సోనంట్లు (Consonants) వస్తే, ఆ రెండింటి మధ్య విరవాలి.<br>
    <i>Examples:</i> Rab-bit, Sup-per, Win-dow, Bas-ket.</p>

    <p><b>Rule 2: V/CV or VC/V Rule (ఒకే కన్సోనంట్ ఉన్నప్పుడు)</b><br>
    రెండు వోవెల్స్ మధ్య ఒకే కన్సోనంట్ ఉంటే, మొదటి వోవెల్ దీర్ఘ శబ్దం ఇస్తే దాని తర్వాతే విరవాలి.<br>
    <i>Examples:</i> Ti-ger, Mu-sic, Ra-dio.</p>

    <p><b>Rule 3: Consonant + le Rule</b><br>
    పదం చివర 'le' వచ్చి దాని ముందు కన్సోనంట్ ఉంటే, ఆ కన్సోనంట్‌తో కలిపి విరవాలి.<br>
    <i>Examples:</i> Can-dle, Ap-ple, Lit-tle, Ta-ble.</p>

    <p><b>Rule 4: Compound Words Rule (సంయుక్త పదాలు)</b><br>
    రెండు స్వతంత్ర పదాలు కలిసి ఏర్పడినప్పుడు ఆ రెండు పదాల మధ్య విరవాలి.<br>
    <i>Examples:</i> Sun-flower, Rail-way, Class-room.</p>

    <p><b>Rule 5: Prefix and Suffix Rule</b><br>
    పదానికి ముందు చేరే Prefix మరియు చివర చేరే Suffix లను మూల పదం (Base Word) నుండి విడదీయాలి.<br>
    <i>Examples:</i> Un-happy, Teach-er, Re-write, Help-ful.</p>
  `,

  // -------------------------------------------------------------
  // 5. VOCABULARY & OTHERS DATA
  // -------------------------------------------------------------
  syn_ant: `<h2>Synonyms & Antonyms</h2><ul><li><b>Happy:</b> Joyful (Synonym) | Sad (Antonym)</li><li><b>Brave:</b> Courageous (Synonym) | Cowardly (Antonym)</li><li><b>Huge:</b> Massive (Synonym) | Tiny (Antonym)</li></ul>`,
  idioms: `<h2>Idioms & Phrases</h2><ul><li><b>Piece of cake:</b> చాలా సులువైన పని.</li><li><b>Break a leg:</b> ఆల్ ది బెస్ట్ చెప్పడం.</li><li><b>Once in a blue moon:</b> ఎప్పుడో ఒకసారి జరిగే విషయం.</li></ul>`,
  daily_words: `<h2>Daily Vocabulary</h2><ul><li><b>Persistent:</b> పట్టుదల కలగడం</li><li><b>Grateful:</b> కృతజ్ఞత కలిగి ఉండటం</li><li><b>Meticulous:</b> ప్రతీ విషయాన్నీ నిశితంగా గమనించడం</li></ul>`,
  prepositions: `<h2>Prepositions</h2><p>స్థలము, సమయము మరియు దిశలను తెలపడానికి వాడతారు.</p><ul><li><b>In:</b> పెద్ద నగరాలు, సంవత్సరాల ముందు (e.g., In India, In 2024).</li><li><b>On:</b> రోజులు, తేదీల ముందు (e.g., On Monday, On May 15th).</li><li><b>At:</b> కచ్చితమైన సమయానికి (e.g., At 5 PM, At night).</li></ul>`,
  articles: `<h2>Articles (A, An, The)</h2><p><b>A / An (Indefinite Articles):</b> వోవెల్ శబ్దాలకు (Vowel Sounds) ముందు 'An' వాడాలి, కన్సోనంట్ శబ్దాలకు ముందు 'A' వాడాలి.<br><b>The (Definite Article):</b> నదులు, పర్వతాలు, పవిత్ర గ్రంథాలు మరియు ప్రత్యేకమైన విషయాల ముందు 'The' వాడాలి.</p>`,
  conjunctions: `<h2>Conjunctions</h2><p>పదాలు మరియు వాక్యాలను కలిపే పదాలు (And, But, Because, Or, Although).</p>`,
  sva: `<h2>Subject-Verb Agreement</h2><p>వాక్యంలోని Subject సింగులర్ అయితే Verb కూడా సింగులర్ ఉండాలి. Subject ప్లూరల్ అయితే Verb కూడా ప్లూరల్ ఉండాలి.</p><ul><li>He <b>is</b> going. (Singular)</li><li>They <b>are</b> going. (Plural)</li></ul>`,
  punctuation: `<h2>Punctuation Rules</h2><p>Full Stop (.), Comma (,), Question Mark (?), Exclamation Mark (!), Capitalization నియమాలు.</p>`
};

// SHOW SUBCATEGORIES ON MAIN BUTTON CLICK
function showCategory(category) {
  const subnav = document.getElementById("subnav-container");
  const display = document.getElementById("content-display");

  if (category === "home") {
    subnav.classList.add("hidden");
    display.innerHTML = "<h2>స్వాగతం! 👋</h2><p>పైన ఉన్న మెనూ నుండి మీకు కావలసిన ఆప్షన్‌ను ఎంచుకోండి.</p>";
    return;
  }

  if (subCategories[category]) {
    subnav.innerHTML = subCategories[category]
      .map(item => `<button class="sub-btn" onclick="showData('${item.key}')">${item.label}</button>`)
      .join("");
    
    subnav.classList.remove("hidden");
    display.innerHTML = `<h2>${category.toUpperCase()} Section</h2><p>దయచేసి పైన ఉన్న సబ్-ఆప్షన్‌లలో ఒకదానిని ఎంచుకోండి.</p>`;
  }
}

// SHOW CONTENT ON SUB BUTTON CLICK
function showData(key) {
  const display = document.getElementById("content-display");
  display.innerHTML = contentData[key] || "<h2>డేటా అందుబాటులో లేదు</h2>";
}
