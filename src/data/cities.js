export const cities = [
  {
    name: 'Vernon',
    slug: 'vernon',
    isHub: true,
    lat: 50.2670,
    lng: -119.2720,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82293.67!2d-119.35!3d50.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dd0072a77a7a5%3A0xc53406e1e66b6bd0!2sVernon%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Vernon is the vibrant heart of the North Okanagan, known for its stunning lakeside living on Kalamalka Lake and Okanagan Lake, world-class skiing at SilverStar Mountain Resort, and a thriving downtown core.',
    landmarks: ['SilverStar Mountain Resort', 'Kalamalka Lake Provincial Park', 'Polson Park', 'Davison Orchards', 'Historic Downtown Vernon Murals', 'Okanagan Science Centre', 'Allan Brooks Nature Centre'],
    funFacts: [
      'Vernon is home to the largest outdoor mural collection in Western Canada, with over 30 murals depicting the city\'s history.',
      'Kalamalka Lake, nicknamed "Lake of a Thousand Colours," changes hue with the seasons due to marl deposits.',
      'SilverStar Mountain Resort boasts one of the most colourful village bases in North America with its brightly painted Victorian-era buildings.'
    ],
    nearbyAreas: ['Coldstream', 'Armstrong', 'Lumby', 'Lake Country', 'Spallumcheen'],
    climate: 'Vernon experiences warm, dry summers (avg 28°C) and cold winters (avg -5°C), making proper heating, plumbing winterization, and electrical systems essential for year-round comfort.',
    population: '~44,000'
  },
  {
    name: 'Coldstream',
    slug: 'coldstream',
    lat: 50.2214,
    lng: -119.1683,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20573.42!2d-119.19!3d50.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dd12c63c6cf05%3A0x4fb2c79e03ed08c8!2sColdstream%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Coldstream is a picturesque district municipality nestled between Vernon and Kalamalka Lake. Known for its agricultural roots, ranching heritage, and family-friendly community feel, Coldstream offers rural charm just minutes from urban amenities.',
    landmarks: ['Kalamalka Lake', 'Coldstream Ranch', 'Coldstream Valley', 'Kal Beach', 'Kidston Elementary School'],
    funFacts: [
      'The Coldstream Ranch is one of the oldest and largest cattle ranches in British Columbia, established in 1863.',
      'Coldstream is named after the Coldstream Guards, reflecting its British colonial heritage.',
      'The community sits at the southern end of the stunning Kalamalka Lake, offering some of the best beach access in the Okanagan.'
    ],
    nearbyAreas: ['Vernon', 'Lake Country', 'Lumby'],
    climate: 'Coldstream shares Vernon\'s semi-arid climate with hot summers and cold winters. Properties near Kalamalka Lake may experience unique moisture conditions that affect plumbing and heating systems.',
    population: '~11,000'
  },
  {
    name: 'Armstrong',
    slug: 'armstrong',
    lat: 50.4487,
    lng: -119.1962,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20473.23!2d-119.22!3d50.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537de97e7d0c5c29%3A0x8c4eb8ed0e8a4e!2sArmstrong%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Armstrong is a charming agricultural community in the North Okanagan, famous for the Interior Provincial Exhibition (IPE) — one of the oldest annual fairs in BC. Known as the "Cheese Capital" for its Armstrong Cheese, the town celebrates its farming heritage year-round.',
    landmarks: ['Interior Provincial Exhibition (IPE) Fairgrounds', 'Armstrong Cheese Factory', 'Caravan Farm Theatre', 'Heritage Walking Tour', 'Armstrong Village Square'],
    funFacts: [
      'The Armstrong IPE fair has been running since 1899, making it one of the longest-running agricultural exhibitions in Western Canada.',
      'Armstrong Cheese has been crafting award-winning cheddar since 1927 and is a BC cultural icon.',
      'The Caravan Farm Theatre near Armstrong is one of Canada\'s only outdoor professional theatres, set on a working farm.'
    ],
    nearbyAreas: ['Vernon', 'Spallumcheen', 'Enderby', 'Salmon Arm'],
    climate: 'Armstrong sits in a fertile valley with cold winters that often bring heavy snowfall. Reliable heating systems and winterized plumbing are critical for both rural properties and homes in town.',
    population: '~5,400'
  },
  {
    name: 'Enderby',
    slug: 'enderby',
    lat: 50.5507,
    lng: -119.1397,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20423.89!2d-119.16!3d50.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537df6c0be6bbaff%3A0x8e83e6c9b6e3c19!2sEnderby%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Enderby is a scenic small city on the banks of the Shuswap River, known for its cliff jumping, river tubing, and laid-back lifestyle. The Enderby Cliffs offer breathtaking hiking with panoramic views of the North Okanagan valley.',
    landmarks: ['Enderby Cliffs', 'Shuswap River', 'Belvidere Street Heritage Walk', 'Enderby & District Museum', 'Riverside Park'],
    funFacts: [
      'The Enderby Cliffs are a popular hiking destination offering 360-degree views from granite cliff faces over 1,200 metres above sea level.',
      'River tubing on the Shuswap River through Enderby is a beloved Okanagan summer tradition.',
      'Enderby was originally a steamboat stop on the Shuswap River, and many heritage buildings from that era still stand.'
    ],
    nearbyAreas: ['Armstrong', 'Salmon Arm', 'Vernon', 'Spallumcheen'],
    climate: 'Enderby\'s riverside location brings unique humidity and frost patterns. Homes along the Shuswap River may need specialized plumbing solutions for riverbank properties.',
    population: '~3,000'
  },
  {
    name: 'Lumby',
    slug: 'lumby',
    lat: 50.2509,
    lng: -118.9658,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20570.45!2d-118.99!3d50.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dcb5e3a8d8d3d%3A0x52e0c7efe99e5c!2sLumby%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Lumby is a quiet village east of Vernon, surrounded by stunning mountain scenery and forests. Known as the gateway to the Monashee Mountains, Lumby offers a rural lifestyle with easy access to backcountry recreation.',
    landmarks: ['Monashee Mountains', 'Mabel Lake', 'White Valley Community Centre', 'Lumby Days', 'Cherryville'],
    funFacts: [
      'Lumby is the gateway to Mabel Lake, one of the North Okanagan\'s best-kept secrets for camping, fishing, and swimming.',
      'The annual Lumby Days festival celebrates the village\'s heritage with logger sports, parades, and community events.',
      'The Monashee Provincial Park, accessible from Lumby, offers pristine wilderness with waterfalls and alpine meadows.'
    ],
    nearbyAreas: ['Vernon', 'Coldstream', 'Cherryville'],
    climate: 'Lumby\'s mountain elevation brings colder, snowier winters than Vernon proper. Reliable heating and winterized water systems are essential for properties in this area.',
    population: '~1,900'
  },
  {
    name: 'Lake Country',
    slug: 'lake-country',
    lat: 50.0858,
    lng: -119.4133,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41123.45!2d-119.44!3d50.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8ca1b7e8bfed%3A0xb68a868c53b71a3!2sLake%20Country%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Lake Country is a rapidly growing district between Vernon and Kelowna, encompassing the communities of Winfield, Oyama, Carr\'s Landing, and Okanagan Centre. Surrounded by orchards, vineyards, and lakeside living, it\'s one of the Okanagan\'s most desirable residential areas.',
    landmarks: ['Wood Lake', 'Kalamalka Lake', 'Oyama', 'Okanagan Rail Trail', 'Okanagan Centre', 'Inniskillin Winery'],
    funFacts: [
      'Lake Country is home to the Okanagan Rail Trail, a 50+ km multi-use path connecting Lake Country to Kelowna along the lakeshore.',
      'The community of Oyama sits on a narrow isthmus between Wood Lake and Kalamalka Lake, creating spectacular dual-lake views.',
      'Lake Country\'s warm microclimate supports thriving vineyards and cherry orchards central to the Okanagan wine industry.'
    ],
    nearbyAreas: ['Vernon', 'Coldstream', 'Kelowna'],
    climate: 'Lake Country enjoys a warm, dry climate ideal for agriculture. Summer heat can stress cooling systems, while winter freezes require reliable plumbing and heating maintenance.',
    population: '~15,000'
  },
  {
    name: 'Salmon Arm',
    slug: 'salmon-arm',
    lat: 50.6824,
    lng: -119.2724,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40712.67!2d-119.31!3d50.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e3c5e7dd1a95%3A0x5e55e7bb02e9a68!2sSalmon%20Arm%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Salmon Arm is the cultural hub of the Shuswap region, situated on the shores of Shuswap Lake — one of BC\'s largest and most popular recreational lakes. The city boasts a vibrant arts scene, excellent houseboating, and a strong local economy.',
    landmarks: ['Shuswap Lake', 'Marine Peace Park', 'R.J. Haney Heritage Village', 'Salmon Arm Wharf', 'Larch Hills Cross Country Ski Area'],
    funFacts: [
      'The Salmon Arm wharf is one of the longest freshwater wharves in North America at over 700 metres.',
      'Shuswap Lake has over 1,000 km of shoreline, making it one of the most houseboat-friendly lakes in the world.',
      'Salmon Arm hosts the popular Roots & Blues Festival, drawing thousands of music lovers each August.'
    ],
    nearbyAreas: ['Enderby', 'Armstrong', 'Sicamous', 'Revelstoke'],
    climate: 'Salmon Arm receives more precipitation than the Okanagan Valley, with significant snowfall in winter. Homes here benefit from robust drainage, sump pump systems, and reliable heating.',
    population: '~19,000'
  },
  {
    name: 'Kelowna',
    slug: 'kelowna',
    lat: 49.8880,
    lng: -119.4960,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82656.34!2d-119.56!3d49.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cb6e3c4b0f5%3A0x4e50e7a529927db0!2sKelowna%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Kelowna is the largest city in the Okanagan and a major economic centre, known for its stunning beaches on Okanagan Lake, world-renowned wine region, and booming real estate market. From luxury lakefront homes to commercial developments, Kelowna demands top-tier trade services.',
    landmarks: ['Okanagan Lake', 'City Park Beach', 'Knox Mountain', 'Mission Hill Winery', 'Kelowna Floating Bridge', 'Bernard Avenue', 'Big White Ski Resort'],
    funFacts: [
      'Kelowna is the legendary home of Ogopogo, Canada\'s answer to the Loch Ness Monster, said to inhabit the depths of Okanagan Lake.',
      'The Kelowna floating bridge (W.R. Bennett Bridge) is one of the longest floating bridges in Canada.',
      'Kelowna\'s wine country produces over 30 grape varieties across 40+ wineries in the immediate area.'
    ],
    nearbyAreas: ['West Kelowna', 'Lake Country', 'Peachland'],
    climate: 'Kelowna enjoys hot, dry summers (avg 30°C+) and mild winters by BC Interior standards. Air conditioning, efficient cooling, and fire-safe electrical are growing priorities alongside traditional heating needs.',
    population: '~150,000'
  },
  {
    name: 'West Kelowna',
    slug: 'west-kelowna',
    lat: 49.8625,
    lng: -119.5833,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41341.23!2d-119.62!3d49.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8b53c234b1c7%3A0x471bad5457dceb3!2sWest%20Kelowna%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'West Kelowna (formerly Westbank) sits on the western shore of Okanagan Lake, connected to Kelowna by the W.R. Bennett Bridge. It\'s a fast-growing community with stunning lakeview properties, vineyards, and the nearby Mount Boucherie.',
    landmarks: ['Mount Boucherie', 'Gellatly Nut Farm', 'Westbank First Nation', 'Shannon Lake', 'Powers Creek', 'Quails\' Gate Winery'],
    funFacts: [
      'Mount Boucherie is the remnant of an ancient volcano that was active over 50 million years ago.',
      'The Gellatly Heritage Regional Park preserves one of the Okanagan\'s first homesteads and nut orchards.',
      'West Kelowna\'s wine trail features award-winning wineries like Quails\' Gate and Mission Hill on the hillside above Okanagan Lake.'
    ],
    nearbyAreas: ['Kelowna', 'Peachland', 'Lake Country'],
    climate: 'West Kelowna\'s hillside properties experience unique microclimates with variable temperatures. Higher-elevation homes need robust heating systems and winterized plumbing.',
    population: '~38,000'
  },
  {
    name: 'Penticton',
    slug: 'penticton',
    lat: 49.4991,
    lng: -119.5937,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41623.45!2d-119.63!3d49.50!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dd1b2d89d5c1f%3A0x2bfad5d52fd0c56!2sPenticton%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Penticton sits between Okanagan Lake and Skaha Lake, making it one of BC\'s premier beach destinations. With its famous Penticton Channel for tube floating, vibrant Ironman triathlon, and growing craft brewery scene, Penticton combines resort living with year-round community.',
    landmarks: ['Okanagan Lake Beach', 'Skaha Lake Beach', 'Penticton Channel', 'Naramata Bench Wineries', 'Apex Mountain Resort', 'SS Sicamous Heritage Ship'],
    funFacts: [
      'The Penticton Channel connects Okanagan Lake to Skaha Lake, and lazy river tubing down it is a rite of passage for Okanagan visitors.',
      'Penticton hosts the famous Ironman Canada triathlon, drawing athletes from around the world.',
      'The SS Sicamous, a restored 1912 sternwheeler ship, sits in Penticton as a floating heritage museum.'
    ],
    nearbyAreas: ['Summerland', 'Naramata', 'Oliver', 'Kelowna'],
    climate: 'Penticton is one of the warmest and driest cities in Canada, with temperatures regularly exceeding 35°C in summer. Cooling systems and efficient water heating are high-priority services.',
    population: '~37,000'
  },
  {
    name: 'Revelstoke',
    slug: 'revelstoke',
    lat: 50.9981,
    lng: -118.1957,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20223.67!2d-118.22!3d51.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537cfe40a87d9e73%3A0x3f14cc3e6d76bab5!2sRevelstoke%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Revelstoke is a mountain town legendary for its powder skiing at Revelstoke Mountain Resort and its railway heritage. Nestled in the Columbia Mountains along the Trans-Canada Highway, it experiences some of BC\'s heaviest snowfall — creating unique demands for robust heating, electrical, and plumbing systems.',
    landmarks: ['Revelstoke Mountain Resort', 'Mount Revelstoke National Park', 'Columbia River', 'Railway Museum', 'Enchanted Forest', 'Giant Cedars Boardwalk'],
    funFacts: [
      'Revelstoke Mountain Resort has the most vertical drop of any ski resort in North America at 1,713 metres.',
      'The town receives an average of 10+ metres (33+ feet) of snowfall annually, one of the snowiest inhabited places in Canada.',
      'Revelstoke\'s railway heritage dates to 1885 when the last spike of the Canadian Pacific Railway was driven nearby at Craigellachie.'
    ],
    nearbyAreas: ['Salmon Arm', 'Sicamous', 'Golden'],
    climate: 'Revelstoke\'s extreme snowfall and cold winters (-15°C or lower) make high-performance heating, snow-rated electrical panels, and freeze-proof plumbing absolute essentials for every property.',
    population: '~8,500'
  },
  {
    name: 'Kamloops',
    slug: 'kamloops',
    lat: 50.6745,
    lng: -120.3273,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81234.56!2d-120.39!3d50.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e2cd93d58cbdf%3A0x30f0593bbac24d5e!2sKamloops%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Kamloops is the "Tournament Capital of Canada," a major BC Interior city at the confluence of the North and South Thompson Rivers. Known for its hot, dry climate, ranching heritage, and Sun Peaks Resort, Kamloops is a growing urban centre with increasing demand for professional trade services.',
    landmarks: ['Sun Peaks Resort', 'Kamloops Lake', 'Tk\'emlúps te Secwépemc', 'Riverside Park', 'BC Wildlife Park', 'Kamloops Heritage Railway'],
    funFacts: [
      'Kamloops holds the record for some of the hottest temperatures ever recorded in British Columbia, exceeding 45°C during the 2021 heat dome.',
      'The city sits at the confluence of two major rivers — the North and South Thompson — creating a unique geography.',
      'Sun Peaks Resort near Kamloops is the second-largest ski area in Canada by skiable terrain.'
    ],
    nearbyAreas: ['Vernon', 'Salmon Arm', 'Merritt'],
    climate: 'Kamloops experiences extreme temperature swings — scorching summers (40°C+) and frigid winters (-20°C). HVAC systems, reliable heating, and robust electrical are critical for comfort and safety year-round.',
    population: '~100,000'
  },
  {
    name: 'Cherryville',
    slug: 'cherryville',
    lat: 50.2581,
    lng: -118.6258,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20570.45!2d-118.65!3d50.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dbb5e3a8d8d3d%3A0x52e0c7efe99e5c!2sCherryville%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Cherryville is a peaceful rural community east of Lumby in the Monashee foothills, surrounded by forests, farmland, and the headwaters of the Shuswap River. Known for its friendly small-town spirit and outdoor recreation, Cherryville is home to ranchers, retirees, and families seeking a quiet country lifestyle.',
    landmarks: ['Monashee Mountains', 'Sugar Lake', 'Cherry Ridge', 'Cherryville Community Hall', 'Shuswap River Headwaters'],
    funFacts: [
      'Cherryville got its name from the wild cherry trees that once dotted the area when settlers first arrived.',
      'Sugar Lake near Cherryville is a hidden gem for fishing, paddling, and lakeside camping.',
      'The community is the gateway to the Monashee wilderness — popular with hunters, hikers, and snowmobilers.'
    ],
    nearbyAreas: ['Lumby', 'Vernon', 'Coldstream'],
    climate: 'Cherryville\'s mountain elevation brings cold, snowy winters and warm summers. Many properties rely on well water, septic systems, and oil or wood heating — services that benefit from regular professional maintenance.',
    population: '~1,100'
  },
  {
    name: 'Peachland',
    slug: 'peachland',
    lat: 49.7733,
    lng: -119.7351,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41423.45!2d-119.77!3d49.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8a25c42b3b67%3A0x9f7c5e6b2a5d4c3!2sPeachland%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Peachland is a charming lakeside district on the western shore of Okanagan Lake between West Kelowna and Summerland. Known for its small-town feel, scenic waterfront promenade, and orchard heritage, Peachland combines resort living with quiet residential communities.',
    landmarks: ['Okanagan Lake Waterfront', 'Hardy Falls Regional Park', 'Pincushion Mountain', 'Antlers Beach', 'Historic Peachland Schoolhouse'],
    funFacts: [
      'Peachland was named for the peach orchards that once flourished along its lakeside benches.',
      'The Hardy Falls boardwalk is one of the most popular short hikes in the Okanagan, especially during the Kokanee salmon run each fall.',
      'Pincushion Mountain offers a steep but rewarding hike with panoramic views over Okanagan Lake.'
    ],
    nearbyAreas: ['West Kelowna', 'Summerland', 'Kelowna'],
    climate: 'Peachland enjoys a warm, dry Okanagan climate with mild winters by BC Interior standards. Lakeside homes benefit from regular HVAC and plumbing maintenance to handle summer heat and occasional winter freezes.',
    population: '~5,800'
  },
  {
    name: 'Summerland',
    slug: 'summerland',
    lat: 49.5970,
    lng: -119.6705,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41523.45!2d-119.71!3d49.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8b71d8a4e55f%3A0x6bfad5d52fd0c56!2sSummerland%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Summerland is a picturesque district on the western shore of Okanagan Lake between Peachland and Penticton. Famous for its orchards, vineyards, and the Kettle Valley Steam Railway, Summerland combines agricultural heritage with growing residential and tourism communities.',
    landmarks: ['Kettle Valley Steam Railway', 'Sun-Oka Beach Provincial Park', 'Summerland Ornamental Gardens', 'Giant\'s Head Mountain', 'Bottleneck Drive Wineries'],
    funFacts: [
      'The Kettle Valley Steam Railway is one of Canada\'s last operational heritage steam trains, offering scenic rides through Summerland\'s orchards.',
      'Summerland\'s Bottleneck Drive features a renowned cluster of boutique wineries and cideries.',
      'Giant\'s Head Mountain is a popular hike offering 360-degree views of Okanagan Lake and the surrounding valley.'
    ],
    nearbyAreas: ['Peachland', 'Penticton', 'West Kelowna'],
    climate: 'Summerland enjoys one of the warmest, sunniest climates in Canada, with hot summers and mild winters. Air conditioning, irrigation systems, and efficient water heating are key services for the area.',
    population: '~12,000'
  },
  {
    name: 'Spallumcheen',
    slug: 'spallumcheen',
    lat: 50.4340,
    lng: -119.2240,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41000.34!2d-119.25!3d50.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537de963a3a8b9bd%3A0x3db3b58bde56b3c!2sSpallumcheen%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    description: 'Spallumcheen is a sprawling agricultural township surrounding the city of Armstrong in the North Okanagan. Known for its fertile farmland, historic barns, and strong community spirit, Spallumcheen is home to many rural properties that require specialized trade services.',
    landmarks: ['Farmland & Agriculture Belt', 'Otter Lake', 'Stepney Cross Roads', 'Spallumcheen Municipality Office', 'Round Lake'],
    funFacts: [
      'Spallumcheen is one of the most productive agricultural areas in the North Okanagan, known for dairy farming, ranching, and vegetable crops.',
      'The township\'s name comes from the Secwépemc (Shuswap) language, meaning "beautiful valley."',
      'Many heritage barns dating back over a century still dot the Spallumcheen landscape.'
    ],
    nearbyAreas: ['Armstrong', 'Vernon', 'Enderby'],
    climate: 'Spallumcheen\'s rural valley setting experiences cold winters with heavy frost. Agricultural properties often need specialized pump, septic, and well water systems.',
    population: '~5,500'
  }
];

export const getCityBySlug = (slug) => cities.find(c => c.slug === slug);
export const getCitySlugs = () => cities.map(c => c.slug);
