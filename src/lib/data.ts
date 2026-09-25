export interface Program {
  id: string
  category: 'water' | 'education' | 'health' | 'orphan' | 'food' | 'emergency'
  name: { en: string; sw: string }
  description: { en: string; sw: string }
  goal: number
  raised: number
  donors: number
  image: string
  stats: { en: string[]; sw: string[] }
}

export interface Campaign {
  id: string
  title: { en: string; sw: string }
  category: string
  location: { en: string; sw: string }
  description: { en: string; sw: string }
  goal: number
  raised: number
  donors: number
  daysLeft: number
  image: string
}

export interface Story {
  id: string
  title: { en: string; sw: string }
  location: { en: string; sw: string }
  program: string
  image: string
  excerpt: { en: string; sw: string }
  quote: { en: string; sw: string }
  quoteAuthor: string
  quoteRole: { en: string; sw: string }
  body: { en: string[]; sw: string[] }
  date: string
  readTime: { en: string; sw: string }
}

export interface NewsItem {
  id: string
  date: string
  dateISO: string
  category: { en: string; sw: string }
  title: { en: string; sw: string }
  excerpt: { en: string; sw: string }
  body: { en: string[]; sw: string[] }
}

export interface Testimonial {
  id: string
  quote: { en: string; sw: string }
  author: string
  role: { en: string; sw: string }
  location: string
}

export interface Partner {
  id: string
  name: string
}

export const annualFund = {
  year: 2026,
  goal: 2500000,
  raised: 1847392,
  donors: 12483,
}

export const recentDonations = [
  { name: 'Amina H.', place: 'Dar es Salaam', amount: 100, campaign: 'Clean Water' },
  { name: 'James K.', place: 'London, UK', amount: 250, campaign: 'Orphan Support' },
  { name: 'Fatma R.', place: 'Zanzibar', amount: 75, campaign: 'Education' },
  { name: 'Yusuf A.', place: 'Dubai, UAE', amount: 50, campaign: 'Food Security' },
  { name: 'Hawa L.', place: 'Arusha', amount: 500, campaign: 'Annual Fund' },
  { name: 'David O.', place: 'Nairobi, KE', amount: 30, campaign: 'Emergency Relief' },
  { name: 'Maryam S.', place: 'Toronto, CA', amount: 150, campaign: 'Health' },
  { name: 'Ahmed W.', place: 'Riyadh, SA', amount: 200, campaign: 'Clean Water' },
]

export const programs: Program[] = [
  {
    id: 'water',
    category: 'water',
    name: { en: 'Clean Water', sw: 'Maji Safi' },
    description: {
      en: 'Boreholes, hand pumps, and solar-powered systems — always paired with locally trained maintenance committees that keep water flowing for decades.',
      sw: 'Visima, pampu za mikono, na mifumo ya jua — kila wakati pamoja na kamati za usimamizi zilizofunzwa ndani zinazohakikisha maji yanatokwa kwa miongo.',
    },
    goal: 120000,
    raised: 86400,
    donors: 2104,
    image: 'https://images.pexels.com/photos/28101461/pexels-photo-28101461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stats: {
      en: ['214 wells completed', '178,000 people served', '98% still functional'],
      sw: ['Visima 214 vimekamilika', 'Watu 178,000 wamehudumiwa', '98% bado vinafanya kazi'],
    },
  },
  {
    id: 'education',
    category: 'education',
    name: { en: 'Education', sw: 'Elimu' },
    description: {
      en: 'School construction, teacher training, and scholarship programs that remove the barriers — fees, uniforms, distance — that keep children out of class.',
      sw: 'Ujenzi wa shule, mafunzo ya walimu, na programu za udhamini zinazoondoa vizuizi — ada, sare, mbali — zinazowazuia watoto kuingia darasani.',
    },
    goal: 95000,
    raised: 61250,
    donors: 1583,
    image: 'https://images.pexels.com/photos/39523812/pexels-photo-39523812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stats: {
      en: ['23 schools built', '38,500 students supported', '94% retention rate'],
      sw: ['Shule 23 zimejengwa', 'Wanafunzi 38,500 wamesaidiwa', '94% wanabaki shuleni'],
    },
  },
  {
    id: 'health',
    category: 'health',
    name: { en: 'Health', sw: 'Afya' },
    description: {
      en: 'Mobile clinics, maternal care centers, and vaccination campaigns bringing essential healthcare to remote communities across Tanzania.',
      sw: 'Vituo vya afya vya mkononi, vituo vya huduma za uzazi, na kampeni za chanjo zinazoleta afya muhimu kwa jamii za mbali nchini Tanzania.',
    },
    goal: 80000,
    raised: 44800,
    donors: 967,
    image: 'https://images.pexels.com/photos/8248433/pexels-photo-8248433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stats: {
      en: ['42 mobile clinics', '156,000 patients treated', '12 maternal centers'],
      sw: ['Vituo 42 vya mkononi', 'Wagonjwa 156,000 wamehudumiwa', 'Vituo 12 vya uzazi'],
    },
  },
  {
    id: 'orphan',
    category: 'orphan',
    name: { en: 'Orphan Support', sw: 'Msaada kwa Yatima' },
    description: {
      en: 'Comprehensive sponsorship covering education, healthcare, food, and emotional support for children who have lost one or both parents.',
      sw: 'Udhamini kamili unaofunika elimu, afya, chakula, na msaada wa kihemko kwa watoto waliopoteza mzazi mmoja au wote wawili.',
    },
    goal: 110000,
    raised: 78200,
    donors: 3201,
    image: 'https://images.pexels.com/photos/33740771/pexels-photo-33740771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stats: {
      en: ['1,240 orphans sponsored', '100% school enrollment', '6 regions covered'],
      sw: ['Yatima 1,240 wamedhaminiwa', '100% wamesajiliwa shuleni', 'Mikoa 6 imefikiwa'],
    },
  },
  {
    id: 'food',
    category: 'food',
    name: { en: 'Food Security', sw: 'Usalama wa Chakula' },
    description: {
      en: 'Drought-resistant seeds, irrigation systems, and farmer cooperatives that turn subsistence plots into reliable household income and food security.',
      sw: 'Mbegu zinazostahimili ukame, mifumo ya umwagiliaji, na ushirika wa wakulima zinazogeuza mashamba madogo kuwa mapato thabiti na usalama wa chakula.',
    },
    goal: 70000,
    raised: 31500,
    donors: 724,
    image: 'https://images.pexels.com/photos/34705724/pexels-photo-34705724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stats: {
      en: ['5,600 farming families', '31 cooperatives formed', '2.4× yield increase'],
      sw: ['Familia 5,600 za wakulima', 'Ushirika 31 umeundwa', 'Mazao yameongezwa 2.4×'],
    },
  },
  {
    id: 'emergency',
    category: 'emergency',
    name: { en: 'Emergency Relief', sw: 'Msaidizi wa Dharura' },
    description: {
      en: 'Rapid response teams delivering food, water, shelter, and medical supplies to communities affected by floods, droughts, and displacement.',
      sw: 'Timu za majibu wa haraka zinazoleta chakula, maji, makazi, na dawa kwa jamii zilizoathiriwa na mafuriko, ukame, na uhamisho.',
    },
    goal: 150000,
    raised: 127500,
    donors: 4892,
    image: 'https://images.pexels.com/photos/33749790/pexels-photo-33749790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    stats: {
      en: ['18 emergency responses', '42,000 people reached', '48-hour deployment'],
      sw: ['Majibu 18 ya dharura', 'Watu 42,000 wamefikiwa', 'Upelelezi wa saa 48'],
    },
  },
]

export const campaigns: Campaign[] = [
  {
    id: 'wells-of-hope',
    title: {
      en: 'Wells of Hope: Dodoma Region',
      sw: 'Visima vya Tumaini: Mkoa wa Dodoma',
    },
    category: 'water',
    location: { en: 'Dodoma, Tanzania', sw: 'Dodoma, Tanzania' },
    description: {
      en: 'Five new borehole wells and hand-pump stations will bring safe drinking water within a 10-minute walk for 4,200 people across six villages.',
      sw: 'Visima vipya vitano na vituo vya pampu vitaleta maji safi ya kunywa ndani ya dakika 10 kwa watu 4,200 katika vijiji sita.',
    },
    goal: 85000,
    raised: 62380,
    donors: 1247,
    daysLeft: 18,
    image: 'https://images.pexels.com/photos/14179265/pexels-photo-14179265.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'orphans-back-to-school',
    title: {
      en: '100 Orphans Back to School',
      sw: 'Yatima 100 Rudi Shuleni',
    },
    category: 'orphan',
    location: { en: 'Mwanza, Tanzania', sw: 'Mwanza, Tanzania' },
    description: {
      en: 'Full-year sponsorships, uniforms, books, and mentorship for 100 orphaned children — so they can attend school and build a future.',
      sw: 'Udhamini wa mwaka mzima, sare, vitabu, na ushauri kwa watoto 100 yatima — ili waweze kuhudhuria shule na kujenga mustakabali.',
    },
    goal: 50000,
    raised: 41750,
    donors: 892,
    daysLeft: 25,
    image: 'https://images.pexels.com/photos/11834936/pexels-photo-11834936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'food-for-families',
    title: {
      en: 'Food for 500 Families',
      sw: 'Chakula kwa Familia 500',
    },
    category: 'food',
    location: { en: 'Manyara, Tanzania', sw: 'Manyara, Tanzania' },
    description: {
      en: 'Drought-resistant seed kits, irrigation tools, and agronomy training for 500 farming families rebuilding after two failed rainy seasons.',
      sw: 'Vifurushi vya mbegu zinazostahimili ukame, zana za umwagiliaji, na mafunzo ya kilimo kwa familia 500 za wakulima zinazojenga baada ya misimu miwili ya mvua iliyoshindikana.',
    },
    goal: 35000,
    raised: 12940,
    donors: 384,
    daysLeft: 40,
    image: 'https://images.pexels.com/photos/34411687/pexels-photo-34411687.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'mobile-clinic',
    title: {
      en: 'Mobile Health Clinic Expansion',
      sw: 'Upanuzi wa Kliniki ya Afya ya Mkono',
    },
    category: 'health',
    location: { en: 'Tanga, Tanzania', sw: 'Tanga, Tanzania' },
    description: {
      en: 'A new mobile clinic vehicle equipped with diagnostic tools and vaccination supplies, serving 15 remote villages on a rotating weekly schedule.',
      sw: 'Gari jipya la kliniki ya mkononi lenye vifaa vya upimaji na chanjo, kihudumia vijiji 15 vya mbali kwa ratiba ya kila wiki.',
    },
    goal: 60000,
    raised: 55800,
    donors: 1406,
    daysLeft: 12,
    image: 'https://images.pexels.com/photos/34717769/pexels-photo-34717769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
]

export const stories: Story[] = [
  {
    id: 'amina-water',
    title: {
      en: 'The Girl Who Counted Water',
      sw: 'Msichana Aliyehesabu Maji',
    },
    location: { en: 'Dodoma, Tanzania', sw: 'Dodoma, Tanzania' },
    program: 'Clean Water',
    image: 'https://images.pexels.com/photos/28101466/pexels-photo-28101466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt: {
      en: 'Every morning at 4:30, Amina walked three hours to fetch water before school — until she stopped going at all. This is how a well brought her back.',
      sw: 'Kila asubuhi saa 4:30, Amina alitemba masaa matatu kukata maji kabla ya shule — hadi akaacha kwenda kabisa. Hivi ndivyo kisima kilivyoirudisha.',
    },
    quote: {
      en: 'Now I am the one who reads the water meter for the village committee. My father says I count water better than anyone.',
      sw: 'Sasa mimi ndiye anayesoma mita ya maji kwa kamati ya kijiji. Baba yangu anasema nahesabu maji vizuri kuliko mtu yeyote.',
    },
    quoteAuthor: 'Amina, 12',
    quoteRole: { en: 'Student, Al Ihsan Scholar', sw: 'Mwanafunzi, Mwanafunzi wa Al Ihsan' },
    date: '2026-06-15',
    readTime: { en: '6 min read', sw: 'Soma kwa dakika 6' },
    body: {
      en: [
        'The walk to the seasonal river took Amina ninety minutes each way. She knew this precisely, because she had counted her steps — 10,400 on a dry morning, more when the mud pulled at her sandals. She would set out at 4:30 with two yellow jerrycans, and if she was fast, she could be back by seven, in time to borrow a neighbor\'s exercise book and copy out the lessons she had missed.',
        'By the time she turned eleven, the arithmetic of her days no longer worked. The riverbed was dry nine months of the year, and the queue at the distant borehole meant returning home after dark. Her mother needed her. School, the family decided, would have to wait. Amina was one of 34 girls in her district who stopped attending that year.',
        'Al Ihsan Foundation first came to her village not with a well, but with a question. Field officer Naomi Mwangi spent three weeks sitting with village elders, school committees, and — crucially — the girls themselves, mapping where water points would do the most good. The community chose the site: a plot beside the primary school, donated by Amina\'s own grandfather.',
        'The borehole struck water at 68 meters. When the hand pump was commissioned in March, the head teacher did something deliberate: he asked the pump committee to reserve the first hour of every morning for schoolchildren, and he knocked on the door of every family that had withdrawn a daughter. Thirty-one of the 34 girls re-enrolled within a month.',
        'Amina returned to find she had not fallen as far behind as she feared. "Numbers stayed with me," she says. "I practiced them counting water." She is now first in her class in mathematics and was appointed the youngest-ever member of the village water committee, where she keeps the usage log.',
        'Her story is why the Wells of Hope campaign pairs every water investment with a school enrollment drive. A uniform gets a girl to the school gate. But it is the well, her head teacher says, that keeps her there.',
      ],
      sw: [
        'Safari ya mto wa maji wa msimu ilimchukua Amina dakika tisini kila upande. Alizijua hii kwa usahihi, kwa sababu alihesabu hatua zake — 10,400 asubuhi ya ukame, zaidi wakati matope yanavuta viatu vyake. Angeweka saa 4:30 na vyombo viwili vya maji, na kama alikuwa mwepesi, angeweza kurudi saa saba, kwa wakati wa kuazima kitabu cha mazoezi cha jirani na kunakili masomo aliyoacha.',
        'Alipofikisha miaka kumi na moja, hesabu ya siku zake haikufanya kazi tena. Kituo cha mto kilikauka miezi tisa kwa mwaka, na foleni kwenye kisima cha mbali ilimaanisha kurudi nyumbani usiku. Mama yake alimhitaji. Shule, familia iliamua, itasubiri. Amina alikuwa mmoja wa wasichana 34 katika wilaya yake ambao waliacha kuhudhuria mwaka huo.',
        'Al Ihsan Foundation ilikuja kijijini kwake sio na kisima, bali na swali. Mamaofisa wa uwanjani Naomi Mwangi alitumia wiki tatu akizungumza na wazee wa kijiji, kamati za shule, na — muhimu — wasichana wenyewe, akipanga palipo pa maji kufanya mema zaidi. Jamii ilichagua eneo: kipande karibu na shule ya msingi, lililotolewa na babu yake Amina.',
        'Kisima kilipata maji kwa mita 68. Pampu ikapokelewa Machi, mwalimu mkuu akafanya jambo la makusudi: aliuliza kamati ya pampu kuhifadhi saa ya kwanza ya kila asubuhi kwa watoto wa shule, na akabisha mlango wa kila familia iliyoondoa binti. Wasichana 31 kati ya 34 walirudi shuleni ndani ya mwezi.',
        'Amina alirudi akaona hakuachwa nyuma kama alivyoogopa. "Nambari zilikuwa nami," anasema. "Nilihoezhesabu zikihesabu maji." Sasa yeye wa kwanza darasani katika hesabu na aliteuliwa kuwa mjumbe mdogo zaidi wa kamati ya maji ya kijiji, anapoandika kumbukumbu za matumizi.',
        'Hadithi yake ndiyo sababu kituo cha Wells of Hope kinaambatana kila uwekezaji wa maji na kampeni ya usajili wa shule. Sare inampeleka msichana lango la shule. Lakini kisima, mwalimu wake anasema, ndicho kinachomweka hapo.',
      ],
    },
  },
  {
    id: 'baraka-orphan',
    title: {
      en: 'Baraka\'s Second Chance',
      sw: 'Fursa ya Pili ya Baraka',
    },
    location: { en: 'Mwanza, Tanzania', sw: 'Mwanza, Tanzania' },
    program: 'Orphan Support',
    image: 'https://images.pexels.com/photos/33959049/pexels-photo-33959049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt: {
      en: 'When Baraka lost his father at age seven, his education seemed over. An Al Ihsan sponsorship gave him textbooks, a uniform, and a future.',
      sw: 'Baraka alipopoteza baba yake akiwa na umri wa miaka saba, elimu yake iliionekana kuisha. Udhamini wa Al Ihsan ulimpa vitabu, sare, na mustakabali.',
    },
    quote: {
      en: 'They did not just give me a uniform. They gave me back the idea that I could be somebody.',
      sw: 'Hawukunionia sare tu. Walinirudisha wazo kwamba ningeweza kuwa mtu.',
    },
    quoteAuthor: 'Baraka, 14',
    quoteRole: { en: 'Al Ihsan Sponsored Orphan', sw: 'Yatima Aliyedhaminiwa na Al Ihsan' },
    date: '2026-05-20',
    readTime: { en: '5 min read', sw: 'Soma kwa dakika 5' },
    body: {
      en: [
        'Baraka was seven when his father, a fisherman on Lake Victoria, did not come home. His mother sold vegetables at the market, but the loss of the family\'s main income meant school fees became an impossible calculation. Within months, Baraka was pulled from class.',
        'An Al Ihsan Foundation field officer met Baraka during a community assessment in Mwanza. The orphan sponsorship program does not simply pay fees — it provides comprehensive support: uniforms, books, meals during school hours, healthcare access, and a dedicated mentor who checks in weekly.',
        '"The first day I came back to school with the new uniform," Baraka recalls, "the other children clapped. I did not understand why. My teacher said it was because they had missed me."',
        'Seven years later, Baraka is now 14 and ranked third in his class. He wants to become a doctor — specifically, he says, a doctor who works in villages like his own, where the nearest clinic is still a two-hour bus ride away. He is one of 1,240 orphans currently sponsored through Al Ihsan Foundation.',
        'His mother, Zainabu, now runs a small tailoring business she started with a micro-grant from the foundation\'s livelihood program. "I could not give him what his father would have given," she says. "But Al Ihsan filled that space. I pray for them every night."',
      ],
      sw: [
        'Baraka alikuwa na miaka saba baba yake, mvuvi wa Ziwa Victoria, hapokurudi nyumbani. Mama yake aliuza mboga sokani, lakini kupoteza kipato kikuu cha familia kulifanya ada za shule kuwa hesabu isiwezekanayo. Ndani ya miezi, Baraka aliondolewa darasani.',
        'Mamaofisa wa uwanjani wa Al Ihsan Foundation alikutana na Baraka wakati wa tathani ya jamii Mwanza. Programu ya udhamini wa yatima hailipii ada tu — inatoa msaada kamili: sare, vitabu, chakula wakati wa shule, ufikiaji wa afya, na mshauri maalum anayemuangalia kila wiki.',
        '"Siku ya kwanza niliporudi shuleni na sare mpya," Baraka anakumbuka, "watoto wengine walipiga makofi. Sikuelewa kwa nini. Mwalimu wangu alisema ni kwa sababu waliniacha."',
        'Miaka saba baadaye, Baraka sasa ana miaka 14 na wa tatu darasani. Anataka kuwa daktari — hasa, anasema, daktari anayefanya kazi vijijini kwake, ambapo kliniki ya karibu bado ni saa mbili za basi. Yeye ni mmoja wa yatima 1,240 wanaodhaminiwa kupitia Al Ihsan Foundation.',
        'Mama yake, Zainabu, sasa anaendesha biashara ndogo ya uashi aliyoianza na ruzuku ndogo ya foundation. "Singeweza kumpa anachompatia baba yake," anasema. "Lakini Al Ihsan walijaza nafasi hiyo. Nawaombea kila usiku."',
      ],
    },
  },
  {
    id: 'rehema-health',
    title: {
      en: 'The Clinic That Came to Rehema',
      sw: 'Kliniki Iliyofika kwa Rehema',
    },
    location: { en: 'Tanga, Tanzania', sw: 'Tanga, Tanzania' },
    program: 'Health',
    image: 'https://images.pexels.com/photos/8248293/pexels-photo-8248293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt: {
      en: 'For years, Rehema\'s village had no medical care within 50 kilometers. Then a mobile clinic arrived — and everything changed for her and 15,000 others.',
      sw: 'Kwa miaka, kijiji cha Rehema hakilikua na huduma ya matibabu ndani ya kilomita 50. Kisha kliniki ya mkononi ilifika — na kila kitu kilibadilika kwake na wengine 15,000.',
    },
    quote: {
      en: 'I walked for two days to reach a hospital when my child was sick. Now the hospital comes to us. I still cannot believe it.',
      sw: 'Nilitemba kwa siku mbili kufika hospitali mtoto wangu alipokuwa mgonjwa. Sasa hospitali inakuja kwetu. Bado sieleweki.',
    },
    quoteAuthor: 'Rehema Juma, 34',
    quoteRole: { en: 'Mother, Tanga Village', sw: 'Mama, Kijiji cha Tanga' },
    date: '2026-04-10',
    readTime: { en: '5 min read', sw: 'Soma kwa dakika 5' },
    body: {
      en: [
        'Rehema Juma remembers the night her youngest daughter, Salima, developed a high fever. The nearest health center was 52 kilometers away. Rehema loaded the child onto her back and began walking at dawn, hoping to flag down a passing truck. She reached the clinic at midnight, eighteen hours later. Salima survived — but barely.',
        'Stories like Rehema\'s are why Al Ihsan Foundation launched its mobile health clinic program in 2022. Each clinic is a modified Land Cruiser equipped with diagnostic tools, basic laboratory capacity, vaccination cold-chain storage, and a three-person team: a clinical officer, a nurse, and a community health worker.',
        'The clinics rotate through remote villages on a fixed weekly schedule. In Tanga region alone, the foundation operates three mobile units serving 15 villages — bringing care to an estimated 15,000 people who previously had no health facility within reasonable distance.',
        'The impact is measurable. In the first year of operation, clinic visits for children under five in served villages increased fourfold. Vaccination coverage rose from 34% to 87%. Maternal health checkups, once rare, became routine.',
        'For Rehema, the change is personal. When Salima developed a fever last month, Rehema did not walk. She walked seven minutes to the village center, where the mobile clinic was set up under a tent. The clinical officer diagnosed malaria early, prescribed medication, and Salima was playing again within two days.',
        '"I used to fear sickness in my children," Rehema says. "Now I do not. The clinic comes every Tuesday. That is enough."',
      ],
      sw: [
        'Rehema Juma anakumbuka usiku mtoto wake mdogo, Salima, alipokuwa na homa kali. Kituo cha afya cha karibu kilikuwa kilomita 52. Rehema alimweka mtoto mgongoni na kuanza kutemba alfajiri, akatumai kupata lori. Alifika kliniki usiku wa manane, masaa kumi na nane baadaye. Salima alinusurika — lakini kwa kiwango kidogo.',
        'Hadithi kama ya Rehema ndiyo sababu Al Ihsan Foundation ilianzisha programu yake ya kliniki ya afya ya mkononi mwaka 2022. Kila kliniki ni Land Cruiser iliyorekebishwa wenye vifaa vya upimaji, uwezo wa maabara, hifadhi ya chanjo, na timu ya watu watatu: afisa wa kitabibu, muuguzi, na mfanyakazi wa afya ya jamii.',
        'Kliniki zinazunguka vijiji vya mbali kwa ratibu thabiti wa kila wiki. Mkoani Tanga peke yake, foundation inaendesha vituo vitatu vya mkononi kihudumia vijiji 15 — ikileta huduma kwa watu 15,000 ambao awali hawakuwa na kituo cha afya ndani ya umbali wa busara.',
        'Athari inaweza kupimwa. Katika mwaka wa kwanza, matembezi ya kliniki kwa watoto chini ya miaka mitano katika vijiji vilivyohudumiwa viliongezeka mara nne. Ufunikaji wa chanjo ulipanda kutoka 34% hadi 87. Uchunguzi wa afya ya uzazi, ambao ulikuwa nadra, ukawa wa kawaida.',
        'Kwa Rehema, mabadiliko ni ya kibinafsi. Salima alipokuwa na homa mwezi uliopita, Rehema hakutemba. Alitemba dakika saba hadi katikati ya kijiji, ambapo kliniki ya mkononi ilikuwa imewekwa chini ya hema. Afisa wa kitabibu alipima malaria mapema, akatoa dawa, na Salima alikuwa anacheza tena ndani ya siku mbili.',
        '"Nilikuwa naogopa ugonjwa kwa watoto wangu," Rehema anasema. "Sasa siogopi. Kliniki inakuja kila Jumanne. Hiyo inatosha."',
      ],
    },
  },
  {
    id: 'ramadhan-food',
    title: {
      en: 'A Harvest After the Drought',
      sw: 'Mavuno Baada ya Ukame',
    },
    location: { en: 'Manyara, Tanzania', sw: 'Manyara, Tanzania' },
    program: 'Food Security',
    image: 'https://images.pexels.com/photos/14314173/pexels-photo-14314173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt: {
      en: 'Two failed rainy seasons pushed Ramadhan to the edge of selling his family\'s land. A seed kit and training program changed everything.',
      sw: 'Misimu miwili ya mvua iliyoshindikana ilimsukuma Ramadhan kwenye ukingo wa kuuza shamba la familia yake. Kifurushi cha mbegu na programu ya mafunzo vilibadilisha kila kitu.',
    },
    quote: {
      en: 'The old seeds waited for rain that did not come. The new seeds do not wait. That is the difference between leaving and staying.',
      sw: 'Mbegu za zamani zilisubiri mvua isiyokuja. Mbegu mpya hazisubiri. Hiyo ndiyo tofauti kati ya kuondoka na kubaki.',
    },
    quoteAuthor: 'Ramadhan Joseph, 48',
    quoteRole: { en: 'Farmer & Program Graduate', sw: 'Mkulima na Mzaliwa wa Programu' },
    date: '2026-03-05',
    readTime: { en: '5 min read', sw: 'Soma kwa dakika 5' },
    body: {
      en: [
        'The fields above Ramadhan Joseph\'s house were tilled by his great-grandfather, stone by stone, into a hillside in Manyara. For four generations they grew maize and millet — until the rains became, in his words, "a rumor." The short rains of 2024 arrived six weeks late. The ones in 2025 barely arrived at all.',
        'By last autumn, Ramadhan had begun quietly asking neighbors what his land might sell for. The answer, from a region where hundreds of families were making the same calculation, was not much.',
        'The Food for Families program reached his village in January. It is deliberately practical: drought-tolerant seed varieties, low-cost drip lines, soil-moisture training, and a small grant contingent on one thing — that participants teach the same methods to two neighboring farms.',
        'Ramadhan planted tomatoes, a crop his father would have called reckless. Using half the water of his old maize plot, the first harvest filled 34 baskets. He sold them at the Saturday market and earned more in one morning than the previous season\'s entire maize crop.',
        'This year, 500 families across the district are enrolled, and the cooperative they formed has negotiated direct contracts with two regional grocers, cutting out the middlemen who once took a third of their earnings.',
        'Ramadhan no longer asks what his land is worth. He has started rebuilding the top terrace — the one his great-grandfather cut first — and plans to plant it with fruit trees. "For the grandchildren," he says, "who will think farming was always like this."',
      ],
      sw: [
        'Mashamba juu ya nyumba ya Ramadhan Joseph yalilimwa na babu yake mkubwa, jiwe kwa jiwe, kwenye mteremko wa Manyara. Kwa vizazi vinne walilima mahindi na uwele — hadi mvua ikawa, kwa maneno yake, "kisiwa." Mvua fupi ya 2024 ilifika wiki sita kuchelewa. Ile ya 2025 haikufika kabisa.',
        'Kupita majira ya joto, Ramadhan alianza kwa siri kuuliza majirani shamba lake linaweza kuuzwa kiasi gani. Jibu, kutoka mkoa ambapo familia mamia zilifanya hesabu ile ile, haikuwa kubwa.',
        'Programu ya Chakula kwa Familia ilifika kijijini kwake Januari. Ni ya kiunaji kwa makusudi: aina za mbegu zinazostahimili ukame, mistari ya maji ya bei ya chini, mafunzo ya unyevu wa udongo, na ruzuku ndogo inayotegemea jambo moja — washiriki wafundishe njia hizo kwa mashamba mawili ya jirani.',
        'Ramadhan alipanda nyanya, zao ambalo baba yake angeliita la uzushi. Akitumia nusu ya maji ya shamba lake la mahindi la zamani, mavuno ya kwanza yalijaza vikapu 34. Aliuza sokoni Jumamosi na akapata zaidi asubuhi moja kuliko mavuno yote ya mahindi ya msimu uliopita.',
        'Mwaka huu, familia 500 katika wilaya zimejiandikisha, na ushirika waliouunda umepitia mikataba ya moja kwa moja na wauza matunda wawili wa mkoa, wakaondoa wapatanishi ambao awali walichukua theluthi moja ya mapato yao.',
        'Ramadhan haulizi tena shamba lake ni la thamani gani. Ameshauriana kujenga upanda wa juu — ule aliokatwa na babu yake wa kwanza — na ana mpango wa kupanda miti ya matunda. "Kwa ajili ya wajukuu," anasema, "ambao watafikiri kilimo kilikuwa kila wakati kama hiki."',
      ],
    },
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'amina',
    quote: {
      en: 'Al Ihsan Foundation did not just bring water to our village — they brought us back our dignity. My daughter is in school because of them.',
      sw: 'Al Ihsan Foundation haikuleta maji tu kijijini kwetu — waliturudisha heshima yetu. Binti yangu yeye shuleni kwa sababu yao.',
    },
    author: 'Amina Hassan',
    role: { en: 'Village Mother, Dodoma', sw: 'Mama wa Kijiji, Dodoma' },
    location: 'Dodoma, Tanzania',
  },
  {
    id: 'baraka',
    quote: {
      en: 'When I lost my father, I thought my life was over. Al Ihsan gave me a uniform, books, and the belief that I could be somebody. I will be a doctor.',
      sw: 'Nilipopoteza baba yangu, nilifikiri maisha yangu yameisha. Al Ihsan walinipa sare, vitabu, na imani kwamba ningeweza kuwa mtu. Nitakuwa daktari.',
    },
    author: 'Baraka Juma',
    role: { en: 'Sponsored Student, Mwanza', sw: 'Mwanafunzi Aliyedhaminiwa, Mwanza' },
    location: 'Mwanza, Tanzania',
  },
  {
    id: 'reema',
    quote: {
      en: 'I have been a monthly donor for three years. Every quarter, I receive a report showing exactly where my money went. That is why I trust Al Ihsan.',
      sw: 'Nimekuwa mfadhili wa kila mwezi kwa miaka mitatu. Kila robo mwaka, napokea ripoti inayoonyesha hasa pesa yangu ilikwenda wapi. Ndiyo sababu naamini Al Ihsan.',
    },
    author: 'Reema Al-Rashid',
    role: { en: 'Monthly Donor, Dubai', sw: 'Mfadhili wa Kila Mwezi, Dubai' },
    location: 'Dubai, UAE',
  },
  {
    id: 'joseph',
    quote: {
      en: 'As a farmer, I was ready to give up. The seed program taught me to work with the land, not against it. Now my family eats and sells.',
      sw: 'Kama mkulima, nilikuwa tayari kuacha. Programu ya mbegu ilinifundisha kufanya kazi na ardhi, sio dhidi yake. Sasa familia yangu hula na wauza.',
    },
    author: 'Joseph Ramadhan',
    role: { en: 'Farmer, Manyara', sw: 'Mkulima, Manyara' },
    location: 'Manyara, Tanzania',
  },
  {
    id: 'sister',
    quote: {
      en: 'I have volunteered with many organizations. Al Ihsan is different — they listen to the community first, then act. That is why their projects last.',
      sw: 'Nimejitolea na taasisi nyingi. Al Ihsan ni tofauti — wanaisikiliza jamii kwanza, kisha watenda. Ndiyo sababu miradi yao inadumu.',
    },
    author: 'Sister Maria Gonzalez',
    role: { en: 'Volunteer Coordinator, Dar es Salaam', sw: 'Mratibu wa Watu wa Kujitolea, Dar es Salaam' },
    location: 'Dar es Salaam, Tanzania',
  },
]

export const news: NewsItem[] = [
  {
    id: 'ramadhan-campaign',
    date: '2026-03-01',
    dateISO: '2026-03-01',
    category: { en: 'Announcement', sw: 'Tangazo' },
    title: {
      en: 'Ramadhan Food Drive: Reaching 5,000 families this holy month',
      sw: 'Mkakati wa Chakula wa Ramadhan: Kufikia familia 5,000 mwezi mtukufu huu',
    },
    excerpt: {
      en: 'Our annual Ramadhan campaign aims to distribute food packages to 5,000 families across Tanzania during the holy month of Ramadhan.',
      sw: 'Kampeni yetu ya kila mwaka ya Ramadhan inalenga kusambaza vifurushi vya chakula kwa familia 5,000 nchini Tanzania wakati wa mwezi mtukufu wa Ramadhan.',
    },
    body: {
      en: [
        'As the holy month of Ramadhan approaches, Al Ihsan Foundation is launching its largest food distribution campaign to date. Our goal: to ensure that 5,000 families across Tanzania can break their fast with dignity and nutrition.',
        'Each food package contains 25 kilograms of rice, 10 kilograms of flour, 5 liters of cooking oil, dates, sugar, and tea — enough to sustain a family of six throughout the month. Packages are distributed through our network of community partners and local mosques.',
        'This year, we have expanded the campaign to include families in Dodoma, Mwanza, Arusha, Tanga, and Dar es Salaam. Our field teams have already begun pre-positioning supplies in regional warehouses to ensure timely delivery before the first day of fasting.',
        'The Ramadhan Food Drive is funded entirely by community donations. A gift of $50 provides a complete food package for one family for the entire month. We invite you to join us in this act of generosity — one of the most beloved forms of charity in our tradition.',
        'To contribute, visit our Donate page and select "Food Security" as your designated fund. May this Ramadhan bring blessings to you and your family.',
      ],
      sw: [
        'Mwezi mtukufu wa Ramadhan unakaribia, Al Ihsan Foundation inazindua kampeni yake kubwa zaidi ya usambazaji wa chakula hadi sasa. Lengo letu: kuhakikisha familia 5,000 nchini Tanzania zinaweza kufunga kwa heshima na lishe.',
        'Kila kifurushi cha chakula kina kilo 25 za mchele, kilo 10 za unga, lita 5 za mafuta ya kupika, tende, sukari, na chai — vya kutosha kwa familia ya watu sita mwezi mzima. Vifurushi vinasambazwa kupitia mtandao wetu wa washirika wa jamii na misikiti ya ndani.',
        'Mwaka huu, tumeupanua kampeni kufunika familia Dodoma, Mwanza, Arusha, Tanga, na Dar es Salaam. Timu zetu za uwanjani zimeshaanza kuweka akiba za vifaa kwenye ghala za mkoa kuhakikisha utoaji kwa wakati kabla ya siku ya kwanza ya kufunga.',
        'Mkakati wa Chakula wa Ramadhan unafadhiliwa kabisa na michango ya jamii. Mchango wa $50 unatoa kifurushi kamili cha chakula kwa familia moja kwa mwezi mzima. Tunakualika kujiunga nasi katika kitendo hiki cha ukarimu — kimoja cha aina za hisani zinazopendwa zaidi katika mapokeo yetu.',
        'Ili kuchangia, tembelea ukurasa wetu wa Changia na uchague "Usalama wa Chakula" kama lengo lako. Mola aweke baraka kwako na familia yako Ramadhan hii.',
      ],
    },
  },
  {
    id: 'mobile-clinic-launch',
    date: '2026-02-15',
    dateISO: '2026-02-15',
    category: { en: 'Field Notes', sw: 'Maelezo ya Uwanjani' },
    title: {
      en: 'New mobile clinic begins serving 15 villages in Tanga region',
      sw: 'Kliniki mpya ya mkononi inaanza kuhudumia vijiji 15 mkoani Tanga',
    },
    excerpt: {
      en: 'Our third mobile health clinic has been deployed to Tanga, bringing essential healthcare to an estimated 15,000 people in remote communities.',
      sw: 'Kliniki yetu ya tatu ya afya ya mkononi imetumwa Tanga, ikileta afya muhimu kwa watu 15,000 katika jamii za mbali.',
    },
    body: {
      en: [
        'We are pleased to announce the deployment of our third mobile health clinic, now operational in Tanga region. This unit joins our existing fleet serving Dodoma and Mwanza, bringing our total reach to 45 villages across three regions.',
        'The new clinic is a modified Land Cruiser equipped with diagnostic tools, basic laboratory capacity for malaria and HIV testing, vaccination cold-chain storage, and a three-person medical team. It rotates through 15 villages on a fixed weekly schedule, ensuring communities know exactly when care will be available.',
        'In its first three weeks of operation, the Tanga clinic has already treated 847 patients, administered 234 vaccinations, and conducted 56 maternal health checkups. These numbers represent people who previously had to travel 40 kilometers or more to reach the nearest health facility.',
        'The mobile clinic program is made possible by our Health program donors and a partnership with the Tanga Regional Health Authority, which provides clinical officers and supplies logistical support.',
        'We plan to expand the fleet to five units by the end of 2026, reaching an additional 20 villages in Manyara and Kigoma regions.',
      ],
      sw: [
        'Tunafurahisha kutangaza upelelezi wa kliniki yetu ya tatu ya afya ya mkononi, sasa inayofanya kazi mkoani Tanga. Kituo hiki kinaunga mkono meli yetu iliyopo inayohudumia Dodoma na Mwanza, ikifika jumla ya vijiji 45 katika mikoa mitatu.',
        'Kliniki mpya ni Land Cruiser iliyorekebishwa wenye vifaa vya upimaji, uwezo wa maabara kwa kupima malaria na VVU, hifadhi ya chanjo, na timu ya matibabu ya watu watatu. Inazunguka vijiji 15 kwa ratibu thabiti wa kila wiki, kuhakikisha jamii zinajua hasa afya itakapopatikana.',
        'Katika wiki tatu za kwanza za uendeshaji, kliniki ya Tanga imeshahudumia wagonjwa 847, kutoa chanjo 234, na kufanya uchunguzi 56 wa afya ya uzazi. Nambari hizi zinawakilisha watu ambao awali walilazimikakusafiri kilomita 40 au zaidi kufika kituo cha afya cha karibu.',
        'Programu ya kliniki ya mkononi inawezekana kwa wafadhili wa programu yetu ya Afya na ushirikiano na Mamlaka ya Afya ya Mkoa wa Tanga, inayotoa maafisa wa kitabibu na msaada wa vifaa.',
        'Tunapanga kupanua meli hadi vituo vitano mwishoni mwa 2026, kufikia vijiji 20 zaidi Manyara na Kigoma.',
      ],
    },
  },
  {
    id: 'annual-report-2025',
    date: '2026-01-30',
    dateISO: '2026-01-30',
    category: { en: 'Report', sw: 'Ripoti' },
    title: {
      en: 'Annual Report 2025: $4.2M invested across 96 communities',
      sw: 'Ripoti ya Mwaka 2025: $4.2M imekeka katika jamii 96',
    },
    excerpt: {
      en: 'Last year\'s audited results: 27 new water points, 4 school blocks, 5,600 farming families trained, and our largest orphan sponsorship cohort yet.',
      sw: 'Matokeo ya mwaka jana yaliyokaguliwa: vituo 27 vipya vya maji, vitalu 4 vya shule, familia 5,600 za wakulima zilizofunzwa, na kundi letu kubwa zaidi la udhamini wa yatima.',
    },
    body: {
      en: [
        'Our 2025 Annual Report is now available, covering audited financials and independently verified program results for the fiscal year ending December 31, 2025.',
        'The headline numbers: $4.2M invested across 96 communities in Tanzania, Kenya, and Uganda. That funded 27 new water points serving 22,400 people, four new school blocks with 18 classrooms, drought-resilience training for 5,600 farming families, and 1,240 active orphan sponsorships — our largest cohort to date.',
        'The report also covers what did not go to plan. Two water points in Dodoma underperformed following pump failures (detailed in our April post-mortem), retention among re-enrolled students in Mwanza came in at 91% against a 94% target, and our agriculture program\'s yield gains in one district were roughly half the program average. Each shortfall includes our analysis and corrective plan.',
        'Financially, 85% of spending went directly to programs, 10% to operations, and 5% to fundraising. The full audited statements and the independent program evaluation are all available on our About page. As always: if you have questions about any line item, write to us — the finance team answers every single one.',
      ],
      sw: [
        'Ripoti yetu ya Mwaka 2025 sasa inapatikana, ikifunika taarifa za fedha zilizokaguliwa na matokeo ya programu yaliyothibitishwa kwa mwaka wa fedha unaomaliza Desemba 31, 2025.',
        'Nambari za habari: $4.2M imekeka katika jamii 96 Tanzania, Kenya, na Uganda. Hilo lilifadhili vituo 27 vipya vya maji kihudumia watu 22,400, vitalu 4 vipya vya shule na madarasa 18, mafunzo ya ustahimilivu wa ukame kwa familia 5,600 za wakulima, na udhamini 1,240 wa yatima — kundi letu kubwa zaidi hadi sasa.',
        'Ripoti pia inafunika yaliyokwenda vibaya. Vituo viwili vya maji Dodoma havikufanya vizuri baada ya kushindwa kwa pampu (vilivyoelezwa katika ripoti yetu ya Aprili), ubakishaji wa wanafunzi waliorudi Mwanza ulikuwa 91% dhidi ya lengo la 94%, na mavuno ya programu yetu ya kilimo katika wilaya moja yalikuwa takriban nusu ya wastani wa programu. Kila upungufu unajumuisha uchambuzi wetu na mpango wa urekebisho.',
        'Kwa kifedha, 85% ya matumizi ilikwenda moja kwa moja kwenye programu, 10% kwa utawala, na 5% kwa ukusanyaji wa fedha. Taarifa kamili zilizokaguliwa na tathani ya programu huru zinapatikana kwenye ukurasa wetu wa Kuhusu. Kama kila wakati: kama una maswali kuhuda kila fedha, tuandikie — timu ya fedha inajibu kila moja.',
      ],
    },
  },
  {
    id: 'qurbani-2025',
    date: '2025-06-10',
    dateISO: '2025-06-10',
    category: { en: 'Announcement', sw: 'Tangazo' },
    title: {
      en: 'Qurbani 2025: 3,200 families received fresh meat during Eid al-Adha',
      sw: 'Qurbani 2025: Familia 3,200 zimepokea nyama safi wakati wa Eid al-Adha',
    },
    excerpt: {
      en: 'Thanks to our donors, this year\'s Qurbani program distributed meat to 3,200 families across 12 regions of Tanzania — the largest distribution in our history.',
      sw: 'Shukrani kwa wafadhili wetu, programu ya Qurbani mwaka huu ilisambaza nyama kwa familia 3,200 katika mikoa 12 ya Tanzania — usambazaji mkubwa zaidi katika historia yetu.',
    },
    body: {
      en: [
        'Alhamdulillah — thanks to the generosity of our donors, this year\'s Qurbani program was our largest ever. During the blessed days of Eid al-Adha, we distributed fresh meat from 640 animals to 3,200 families across 12 regions of Tanzania.',
        'Each family received approximately 5 kilograms of fresh meat, enough to prepare meals for several days during the Eid celebration. The distribution was carried out in partnership with 48 local mosques and community organizations, ensuring the meat reached those most in need — including orphan families, elderly individuals, and displaced households.',
        'This year, we introduced a new tracking system that allowed donors to receive confirmation of when and where their Qurbani was performed. Over 2,000 donors participated, contributing between one share and multiple full animals.',
        'We are deeply grateful to everyone who made this possible. Your generosity brought joy and nourishment to thousands of families during this blessed occasion. We look forward to serving even more families next year, inshallah.',
      ],
      sw: [
        'Alhamdulillah — shukrani kwa ukarimu wa wafadhili wetu, programu ya Qurbani mwaka huu ilikuwa kubwa zaidi kupita wakati. Wakati wa siku zilizo barikiwa za Eid al-Adha, tulisambaza nyama safi kutoka wanyama 640 kwa familia 3,200 katika mikoa 12 ya Tanzania.',
        'Kila familia ilipata takriban kilo 5 za nyama safi, za kutosha kupika chakula cha siku kadhaa wakati wa sherehe ya Eid. Usambazaji ulifanywa kwa ushirikiano na misikiti 48 ya ndani na taasisi za jamii, kuhakikisha nyama inafikia walio hitaji zaidi — pamoja na familia za yatima, wazee, na nyumba zilizohamishwa.',
        'Mwaka huu, tuliingiza mfumo mpya wa kufuatilia ulioruhusu wafadhili kupokea uthibitisho wa lini na wapi Qurbani yao ilifanyika. Wafadhili zaidi ya 2,000 walishiriki, wakichangia kati ya hisa moja na wanyama wengi kamili.',
        'Tunashukuru kwa kila mmoja aliyeifanya hii iwezekane. Ukarimu wako ulileta furaha na lishe kwa maelfu ya familia wakati wa tukio hili lililo barikiwa. Tunatamani kuwahudumia familia zaidi mwakani, inshallah.',
      ],
    },
  },
  {
    id: 'transparency-rating',
    date: '2025-05-22',
    dateISO: '2025-05-22',
    category: { en: 'Announcement', sw: 'Tangazo' },
    title: {
      en: 'Al Ihsan earns top charity rating for the eighth consecutive year',
      sw: 'Al Ihsan anapata kiwango cha juu kabisa cha hisani kwa mwaka wa nane mfululizo',
    },
    excerpt: {
      en: 'Independent evaluators again rated Al Ihsan Foundation among the top 3% of international development nonprofits for financial health, accountability, and transparency.',
      sw: 'Wakaguzi huru tena waliipima Al Ihsan Foundation kati ya 3% ya juu ya NGO za maendeleo ya kimataifa kwa afya ya fedha, uwajibikaji, na uwazi.',
    },
    body: {
      en: [
        'For the eighth year in a row, Al Ihsan Foundation has received the highest possible rating from the leading independent charity evaluators — placing us in the top 3% of international development nonprofits assessed for financial health, accountability, and transparency.',
        'The evaluation reviewed our audited FY 2025 financials, governance practices, and program reporting. Evaluators specifically noted our 85% program-spending ratio, our published failure reports, and our policy of restricting every campaign gift to its stated purpose unless a donor opts otherwise.',
        'We are proud of the rating, but we want to be clear about what it is and is not. It measures whether we run an honest, well-governed organization. It does not measure impact — which is why we separately commission independent evaluations of whether wells still flow, students still attend, and incomes actually rise. Those results are published in our annual report, alongside the numbers we would rather forget.',
        'Thank you to the 12,483 donors whose trust this rating represents. We intend to keep earning it.',
      ],
      sw: [
        'Kwa mwaka wa nane mfululizo, Al Ihsan Foundation imepokea kiwango cha juu kabisa kutoka kwa wakaguzi wa kuongoza wa hisani huru — tukiwa kati ya 3% ya juu ya NGO za maendeleo ya kimataifa zilizopimwa kwa afya ya fedha, uwajibikaji, na uwazi.',
        'Ukaguzi ulihakiki taarifa zetu za fedha za FY 2025 zilizokaguliwa, mazoea ya utawala, na ripoti za programu. Wakaguzi waliangazia hasa uwiano wetu wa 85% wa matumizi ya programu, ripoti zetu za hitilafu zilizochapishwa, na sera yetu ya kulenga kila mchango wa kituo kwa lengo lake ilisipokuwa mfadhili achague vinginevyo.',
        'Tunajivunia kiwango, lakini tunataka kuwa wazi kuhusu ni nini na sio nini. Kinapima ikiwa tunaendesha taasisi ya uaminifu, inayoongozwa vizuri. Hakipimii athari — ndiyo sababu tunatoa kazi tathani huru kuhusu kama visima bado vinatokwa, wanafunzi bado wanahudhuria, na mapato yakipanda kweli. Matokeo hayo yamechapishwa katika ripoti yetu ya mwaka, pamoja na nambari ambayo tungependa kusahau.',
        'Asante kwa wafadhili 12,483 ambao imani yao kiwango hiki kinawakilisha. Tunakusudia kuendelea kuipata.',
      ],
    },
  },
  {
    id: 'school-construction',
    date: '2025-04-08',
    dateISO: '2025-04-08',
    category: { en: 'Field Notes', sw: 'Maelezo ya Uwanjani' },
    title: {
      en: 'New school block opens in Mafinga, serving 450 students',
      sw: 'Kitalu kipya cha shule kimefunguliwa Mafinga, kihudumia wanafunzi 450',
    },
    excerpt: {
      en: 'Our latest school construction project has been completed in Mafinga, bringing six new classrooms and a library to a community that had been holding classes under trees.',
      sw: 'Mradi wetu wa hivi karibuni wa ujenzi wa shule umekamilika Mafinga, ukiileta madarasa sita mapya na maktaba kwa jamii iliyokuwa ikifundisha chini ya miti.',
    },
    body: {
      en: [
        'We are thrilled to announce the completion of our newest school construction project in Mafinga, Iringa region. The new block includes six fully equipped classrooms, a library with 3,000 books, an administrative office, and clean water and sanitation facilities.',
        'Before this construction, the community\'s 450 primary school students were attending classes in shifts — many sitting under trees when the weather permitted, or crammed into a single dilapidated room when it did not. Teacher morale was low, and dropout rates were high.',
        'The project was funded through a combination of our Education program fund and a matching grant from a corporate partner. Construction took eight months and employed 34 local workers, including three graduates of our scholarship program who are now pursuing careers in construction and engineering.',
        'The impact was immediate. Within the first week of the new block opening, attendance rose from 73% to 96%. "My children used to complain about going to school," says mother Hawa Issa. "Now they run there. They want to be the first in the new classrooms."',
        'This is the 23rd school construction project completed by Al Ihsan Foundation since 2014. Three more are planned for 2026, in Mwanza, Tanga, and Kigoma regions.',
      ],
      sw: [
        'Tunafurahisha kutangaza ukamilishaji wa mradi wetu mpya zaidi wa ujenzi wa shule Mafinga, mkoa wa Iringa. Kitalu kipya kina madarasa sita yaliyo na vifaa kamili, maktaba yenye vitabu 3,000, ofisi ya utawala, na vifaa vya maji safi na usafi.',
        'Kabla ya ujenzi huu, wanafunzi 450 wa shule ya msingi ya jamii walihudhuria madarasa kwa zamu — wengi wakiwa wameketi chini ya miti wakati hali ya hewa iliruhusu, au wamejaa katika chumba kimoja kilicho hoi wakati haikuruhusu. Morali ya walimu ilikuwa chini, na viwango vya kuacha shule vilikuwa juu.',
        'Mradi ulifadhiliwa kupitia mchanganyiko wa mfuko wetu wa programu ya Elimu na ruzuku ya kulinganisha kutoka kwa mshirika wa makampuni. Ujenzi ulichukua miezi nane na kuajiri wafanyakazi 34 wa ndani, pamoja na wahitimu watatu wa programu yetu ya udhamini ambao sasa wanafuata taaluma katika ujenzi na uhandisi.',
        'Athari ilionekana mara moja. Ndani ya wiki ya kwanza ya kitalu kipya kufunguliwa, mahudhurio yalipanda kutoka 73% hadi 96%. "Watoto wangu walikuwa wakilalamika kuhusu kwenda shule," anasema mama Hawa Issa. "Sasa wanakimbia. Wanataka kuwa wa kwanza kwenye madarasa mapya."',
        'Hii ni mradi wa 23 wa ujenzi wa shule umekamilishwa na Al Ihsan Foundation tangu 2014. Mitatu zaidi imepangwa kwa 2026, Mwanza, Tanga, na Kigoma.',
      ],
    },
  },
]

export const partners: Partner[] = [
  { id: 'crdb', name: 'CRDB Bank' },
  { id: 'voda', name: 'Vodacom Foundation' },
  { id: 'tanzania', name: 'Tanzania Red Cross' },
  { id: 'unicef', name: 'UNICEF Tanzania' },
  { id: 'rotary', name: 'Rotary Tanzania' },
  { id: 'islamic', name: 'Islamic Relief' },
]

export const impactStats: { value: number; suffix: string; key: string }[] = [
  { value: 5000, suffix: '+', key: 'families' },
  { value: 10, suffix: '', key: 'programs' },
  { value: 3, suffix: '', key: 'countries' },
  { value: 214, suffix: '', key: 'wells' },
  { value: 38500, suffix: '', key: 'students' },
  { value: 1240, suffix: '', key: 'orphans' },
]

export const fundAllocation = [
  { label: { en: 'Programs & field work', sw: 'Programu na kazi ya uwanjani' }, pct: 85, color: 'bg-forest-600' },
  { label: { en: 'Operations', sw: 'Utawala' }, pct: 10, color: 'bg-ember-500' },
  { label: { en: 'Fundraising', sw: 'Ukusanyaji wa fedha' }, pct: 5, color: 'bg-sand-400' },
]

// Exchange rate: 1 USD ≈ 2500 TZS (approximate, for display purposes)
export const USD_TO_TZS = 2500

export function formatMoney(n: number, currency: 'USD' | 'TZS' = 'USD'): string {
  if (currency === 'TZS') {
    return 'TSh ' + (n * USD_TO_TZS).toLocaleString('en-US')
  }
  return '$' + n.toLocaleString('en-US')
}

export function pct(raised: number, goal: number): number {
  return Math.round((raised / goal) * 100)
}

export const donationPresetsUSD = [25, 50, 100, 250, 500]
export const donationPresetsTZS = [50000, 100000, 250000, 500000, 1000000]
