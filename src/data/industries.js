export const industries = [
  {
    slug: 'grocery-deli-equipment-repair', name: 'Grocery & Deli Equipment Repair', shortName: 'Grocery & Deli',
    intro: 'A stopped slicer or warming display case can interrupt the whole counter. Aslan handles repair and maintenance enquiries for grocery stores, delicatessens, and food retailers in Vernon and the Okanagan.',
    equipment: ['Meat and deli slicers', 'Bread slicers', 'Refrigerated display cases', 'Walk-in coolers and freezers'],
    questions: [
      {q: 'Who can repair a meat slicer that will not start?', a: 'Call Aslan with the slicer brand, model, and a description of what happens when it is started. A no-start problem needs diagnosis; the motor, controls, power supply, or safety interlocks may be involved. Take faulty equipment out of service and leave guards in place.'},
      {q: 'Why is our deli slicer tearing food or cutting unevenly?', a: 'Cut quality can depend on the blade condition, product, and machine setup. Report when the problem started and whether it affects all products. Arrange an assessment before continuing with an unreliable machine; do not remove guards or attempt blade work while it is connected to power.'},
      {q: 'Can you help when a grocery display fridge is getting warm?', a: 'Call with the unit details, current temperature, and when it last held its normal temperature. Tell us whether other refrigeration units are affected. Follow your food-safety procedures for the stock while service is arranged; a repair visit does not establish whether food is safe to sell.'}
    ], services: ['refrigeration', 'restaurant-equipment-repair']
  },
  {
    slug: 'bakery-equipment-service', name: 'Bakery Equipment Service & Repairs', shortName: 'Bakeries',
    intro: 'Bread slicers, mixers, ovens, and proofing equipment support a tightly timed production day. Talk to Aslan about a fault, an interrupted batch, or maintenance for the equipment your bakery depends on.',
    equipment: ['Bread slicers', 'Commercial mixers', 'Bakery ovens and proofers', 'Bakery refrigeration'],
    questions: [
      {q: 'Who fixes a commercial bread slicer that jams or stops?', a: 'Aslan accepts bread slicer repair enquiries. Share the make, model, displayed error, and whether the machine stops before or during slicing. Keep the machine out of service if it is jamming or has damaged blades; leave internal inspection and blade handling to qualified service personnel.'},
      {q: 'Why is our bakery oven not reaching its set temperature?', a: 'A heating fault needs assessment of the specific oven and its controls. Record the set temperature, observed temperature, and any error display for the technician. Tell us whether the issue affects one oven or several pieces of equipment so the service scope is clear.'},
      {q: 'Can bakery maintenance be arranged around production?', a: 'Call to discuss your production hours, available access window, and equipment list. We can discuss scheduling and the maintenance required for each machine. Confirm the appointment and any applicable charges before planning production around a visit.'}
    ], services: ['bakery-equipment-repair', 'gas-fitting', 'refrigeration']
  },
  {
    slug: 'restaurant-kitchen-equipment-repair', name: 'Restaurant & Commercial Kitchen Repairs', shortName: 'Restaurants & Cafés',
    intro: 'When cooking, washing, or refrigeration equipment stops working, the kitchen needs a clear next step. Aslan handles commercial equipment repair and maintenance enquiries from restaurants, cafés, and catering kitchens.',
    equipment: ['Commercial ovens and ranges', 'Dishwashing equipment', 'Coolers and freezers', 'Kitchen plumbing and gas appliances'],
    questions: [
      {q: 'Who should we call when a commercial oven stops heating?', a: 'Call Aslan with the oven make and model, fuel type, and any error message. Explain whether the oven fails to start or starts but does not heat. We will discuss availability and the service required. If there is a gas smell, leave the area and contact the gas emergency service from a safe place.'},
      {q: 'Why is our commercial dishwasher not cleaning properly?', a: 'Cleaning performance can be affected by wash conditions, loading, and a machine fault. Note the displayed temperatures, error messages, and changes in performance without opening the equipment. Have the manufacturer operating instructions available and call to discuss a service assessment.'},
      {q: 'Can one call cover kitchen refrigeration and plumbing problems?', a: 'Describe both issues when you call. Aslan works across refrigeration, plumbing, electrical, and gas service, so we can discuss the trades and equipment involved. Scheduling and whether one or more visits are needed depend on the job.'}
    ], services: ['restaurant-equipment-repair', 'commercial-plumber', 'refrigeration']
  },
  {
    slug: 'commercial-laundry-repair', name: 'Commercial Washer & Dryer Repairs', shortName: 'Laundromats & Laundry Rooms',
    intro: 'An out-of-order washer or dryer takes capacity out of a laundry room. Aslan welcomes repair and maintenance enquiries for coin laundries, commercial laundry operations, and on-site laundry rooms in hotels and managed properties.',
    equipment: ['Commercial washers', 'Gas and electric dryers', 'Laundry plumbing and drains', 'Laundry hot water and ventilation'],
    questions: [
      {q: 'Who repairs a coin laundry washer that will not drain?', a: 'Call Aslan with the washer model, the error shown, and whether one or multiple machines are affected. Drainage symptoms may involve the appliance or shared plumbing. Take the affected machine out of customer use and describe any standing water when arranging service.'},
      {q: 'Why is a commercial dryer running but not heating?', a: 'No heat and extended drying times need different checks depending on the dryer and fuel type. Tell us whether the drum turns, what the display shows, and when maintenance was last performed. Do not keep restarting an overheating machine or bypass its safety controls.'},
      {q: 'Can you maintain laundry equipment before machines fail?', a: 'Call to discuss the machines, operating hours, manufacturer maintenance requirements, and service history. We can assess maintenance needs for the equipment and supporting plumbing, hot water, or ventilation. Confirm scope and timing with our team.'}
    ], services: ['commercial-plumber', 'wiring-repair', 'gas-fitting']
  },
  {
    slug: 'dry-cleaning-equipment-service', name: 'Dry-Cleaning Equipment Service', shortName: 'Dry Cleaners',
    intro: 'Dry-cleaning businesses rely on a combination of cleaning machines, finishing equipment, heat, and supporting utilities. Call Aslan about equipment faults and maintenance, with the machine details ready so we can confirm the service scope.',
    equipment: ['Dry-cleaning machinery', 'Finishing and pressing equipment', 'Heating and utility connections', 'Supporting plumbing and electrical systems'],
    questions: [
      {q: 'Who can assess a dry-cleaning machine that stops mid-cycle?', a: 'Call with the manufacturer, model, solvent system, and exact error message. Note the stage at which the cycle stops. These machines need model-specific assessment; do not override interlocks or open solvent systems. We will confirm whether the job needs specialist manufacturer support.'},
      {q: 'Can you help with pressing equipment that is not heating?', a: 'Describe the equipment and whether it uses electricity or an external heat or steam supply. Tell us if several machines are affected. Aslan can discuss the mechanical and utility service needed and confirm the scope before a visit.'},
      {q: 'What should a dry cleaner have ready before calling?', a: 'Prepare model and serial numbers, recent error messages, maintenance records, and any warranty or existing service agreement details. Explain any changes in cycle time or performance. Keep unsafe equipment out of service and follow the manufacturer handling procedures.'}
    ], services: ['heating-repair', 'wiring-repair', 'commercial-plumber']
  },
  {
    slug: 'hotel-property-maintenance', name: 'Hotel & Property Mechanical Maintenance', shortName: 'Hotels & Managed Properties',
    intro: 'Guest rooms, shared laundry, kitchens, and building systems all need dependable upkeep. Aslan supports repair and maintenance enquiries from accommodation operators and property managers, including referrals from installation contractors.',
    equipment: ['Heating and hot water', 'Shared laundry equipment', 'Commercial kitchen refrigeration', 'Building plumbing and electrical systems'],
    questions: [
      {q: 'Who can help when a hotel loses hot water?', a: 'Call Aslan with the property location, equipment details, and whether the problem affects one area or the entire building. Explain the effect on occupied rooms or operations. We will discuss urgency and availability without assuming a response time before the call.'},
      {q: 'Can you service both guest laundry and building systems?', a: 'Tell us which machines and building systems need attention. Aslan can discuss laundry equipment alongside plumbing, electrical, heating, and refrigeration service. Access arrangements, equipment scope, and scheduling are agreed with the property contact.'},
      {q: 'Can a property manager arrange ongoing maintenance?', a: 'Yes, call to discuss the property and equipment list, service history, access requirements, and preferred maintenance windows. The maintenance scope and frequency should reflect the equipment and manufacturer requirements, rather than a generic schedule.'}
    ], services: ['heating-repair', 'water-heater-repair', 'commercial-plumber']
  },
  {
    slug: 'winery-farm-market-maintenance', name: 'Winery & Farm Market Maintenance', shortName: 'Wineries & Farm Markets',
    intro: 'Tasting rooms, farm shops, and food-service areas rely on working refrigeration, hot water, and building services. Aslan accepts repair and maintenance enquiries for these systems, with availability and equipment scope confirmed when you call.',
    equipment: ['Retail and kitchen refrigeration', 'Hot water and plumbing', 'Tasting-room heating and electrical systems', 'Food-service equipment'],
    questions: [
      {q: 'Who repairs refrigeration at a farm market or winery kitchen?', a: 'Call Aslan with the cooler, freezer, or display-case model and the temperature concern. Tell us what stock or service area is affected. We can discuss commercial refrigeration service; production-process cooling needs a separate scope discussion.'},
      {q: 'Can you plan maintenance around a busy season?', a: 'Contact us ahead of your busy period with the equipment list and available service windows. We can discuss maintenance requirements and scheduling for refrigeration and building systems. Confirm the booking before relying on a particular date.'},
      {q: 'Do you repair specialist winery production machinery?', a: 'Call with the exact machine, manufacturer, and fault. Our published focus here is refrigeration, food-service equipment, plumbing, electrical, and heating for the property. Specialist production machinery requires a scope check before we can confirm service.'}
    ], services: ['refrigeration', 'commercial-plumber', 'restaurant-equipment-repair']
  }
]
export const getIndustry = slug => industries.find(i => i.slug === slug)

// Editorial associations, not claims about individual customers or local call volume.
export const cityIndustries = {
  vernon: {intro: 'For Vernon food retailers, bakeries, laundry businesses, accommodation operators, and property managers: find equipment-specific repair information below.', slugs: [0,1,2,3,4,5]},
  coldstream: {intro: 'Repair enquiries from Coldstream properties and farm-market businesses can involve refrigeration, hot water, plumbing, and food-service equipment.', slugs:[6,0,5]},
  armstrong: {intro: 'Armstrong’s food producers, farm shops, and cafés create a useful focus for food equipment and refrigeration maintenance.', slugs:[1,6,2,0]},
  spallumcheen: {intro: 'For Spallumcheen farm shops and food businesses, these guides cover refrigeration, food equipment, and building maintenance enquiries.',slugs:[6,0,2]},
  enderby: {intro: 'For Enderby bakeries, food businesses, and property operators: discuss the equipment, location, and service required with our Vernon team.',slugs:[1,2,0,5]},
  lumby: {intro: 'Lumby businesses can call about food equipment, refrigeration, and the plumbing and heating systems supporting their premises.',slugs:[1,2,0,5]},
  'lake-country': {intro: 'Lake Country’s winery, orchard, and visitor economy makes tasting-room, food-service, and accommodation maintenance a practical focus.',slugs:[6,2,5,0]},
  kelowna: {intro: 'Kelowna’s food retail, hospitality, and laundry businesses have distinct equipment needs. Use these guides to describe your fault before calling.',slugs:[0,1,2,3,4,5,6]},
  'west-kelowna': {intro: 'For West Kelowna winery hospitality, commercial kitchens, and managed properties, discuss repair scope and travel arrangements before booking.',slugs:[6,2,5,3]},
  'salmon-arm': {intro: 'Salmon Arm’s food businesses and accommodation operators can discuss commercial equipment and building-service repairs with Aslan.',slugs:[1,2,0,5]},
  penticton: {intro: 'For Penticton hospitality and food-service properties, call first to confirm equipment scope, availability, and travel charges from Vernon.',slugs:[6,2,5,0]},
  summerland: {intro: 'Summerland farm-market and hospitality enquiries may involve refrigeration, food-service equipment, and building systems. Confirm travel and availability before booking.',slugs:[6,2,5]},
  peachland: {intro: 'For Peachland commercial kitchens and accommodation properties, these guides help identify the equipment and symptoms to discuss when arranging service.',slugs:[2,5]},
  revelstoke: {intro: 'Revelstoke accommodation and food-service operators can discuss specialist repair enquiries with our Vernon team. Confirm travel, availability, and scope before planning a visit.',slugs:[5,2,3]},
  kamloops: {intro: 'For Kamloops commercial equipment enquiries, call with the machine details and location to confirm service scope and travel arrangements.',slugs:[2,3,5,0]},
  cherryville: {intro: 'Cherryville business and property enquiries are assessed by equipment type and location. Discuss travel and availability with the team before booking.',slugs:[6,5]}
}
