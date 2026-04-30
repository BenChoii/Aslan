export const galleryPhotos = [
  {
    src: '/gallery/furnace-aslan-sticker.jpg',
    title: 'Residential Furnace Service',
    category: 'Heating',
    alt: 'Aslan technician servicing a residential gas furnace in Vernon, BC'
  },
  {
    src: '/gallery/furnace-install.jpg',
    title: 'High-Efficiency Furnace Install',
    category: 'Heating',
    alt: 'New high-efficiency furnace installation with custom ductwork'
  },
  {
    src: '/gallery/exterior-residential.jpg',
    title: 'Residential Heat Pump',
    category: 'Heating',
    alt: 'Exterior residential heat pump installation overlooking the Okanagan Valley'
  },
  {
    src: '/gallery/electrical-outlet.jpg',
    title: 'Outlet & Junction Box Install',
    category: 'Electrical',
    alt: 'Custom outlet and ceiling-mounted junction box installation'
  },
  {
    src: '/gallery/wiring-conduit.jpg',
    title: 'Commercial Wiring Run',
    category: 'Electrical',
    alt: 'Armored conduit feed for a commercial circuit installation'
  },
  {
    src: '/gallery/commercial-ductwork.jpg',
    title: 'Custom Sheet Metal Frame',
    category: 'Sheet Metal',
    alt: 'Custom sheet metal framing fabricated for a commercial project'
  },
  {
    src: '/gallery/salon-mirrors.jpg',
    title: 'Salon Buildout — Stations',
    category: 'Commercial',
    alt: 'Commercial salon buildout: mirrors, lighting, and storage cabinets'
  },
  {
    src: '/gallery/salon-stations.jpg',
    title: 'Salon Buildout — Finished',
    category: 'Commercial',
    alt: 'Finished salon stations with chairs, mirrors, and sconce lighting'
  },
  {
    src: '/gallery/damark-equipment.jpg',
    title: 'Commercial Equipment Repair',
    category: 'Commercial',
    alt: 'Commercial DAMARK shrink packaging equipment being serviced in a kitchen'
  },
];

export const galleryCategories = ['All', ...Array.from(new Set(galleryPhotos.map(p => p.category)))];
