const products = [
  {
    id: 1,
    title: "Asus Zenbook",
    price: 32.42,
    offerPrice: 20.99,
    off: 0.2,
    img64: "/product-images/64/pim-0-64.jpg",
    img256: "/product-images/256/pim-0-256.jpg",
    img512: "/product-images/512/pim-0-512.jpg",
    imgorg: "/product-images/org/pim-0-org.jpg",
    rate: 3,
    description:
      "ASUS ZenBook 14 Ultra-Slim Laptop 14” FHD Nano-Edge Bezel, 8th-Gen Intel Core i7-8565U Processor, 16GB LPDDR3, 512GB PCIe SSD, Backlit KB, Numberpad, Windows 10 - UX433FA-DH74, Royal Blue",
    variants: [
      { name: "Config", values: ["I7-16-512", "I5-32-512"] },
      { name: "Style", values: ["No Screen Pad", "Screen Pad"] },
    ],
    spec: {
      Series: "ZenBook 14",
      Brand: "ASUS",
      "Specific Uses For Product": "Personal, Business",
      "Screen Size": "14 Inches",
      "Operating System": "Windows 10 Home",
      "Human Interface Input": "Touch Pad",
      "CPU Manufacturer": "Intel",
      "Card Description": "Integrated",
      Color: "Royal blue",
      "Hard Disk Size": "512 GB",
    },
    blts: [
      "14-Inch wide-view full HD 4-way Nano-edge bezel Display Matte",
      "Latest 8th generation Intel Core i7-8565u Quad Core Processor (8M Cache up to 4 6 GHz)",
      "Fast storage and memory featuring 512GB Pie NV Me SSD and16GB LPDDR3 RAM Windows 10 Home",
      "Exclusive Ergo Lift design for improved typing position optimized cooling System and enhanced audio performance",
      "Built-in IR Camera for facial recognition sign in with Windows Hello",
      "Exclusive dual-function touchpad a touchpad with switchable numeric keypad for immediate data entry",
      "Extensive connectivity with HDMI/USB Type C gigabit-class Wi-Fi 802 11AC Bluetooth 5 0 and Micro SD card reader",
      "Sleek and lightweight 2 6 lbs for comfortable portability Carry Sleeve and USB3 0 to RJ45 cable included",
      "Mil-stud 810G military standard for reliability and durability",
    ],
    notes: [
      "Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.",
    ],
  },
  {
    id: 2,
    title: "Black T-Shirt",
    price: 5.38,
    offerPrice: 2.93,
    off: 0.5,
    img64: "/product-images/64/pim-2-64.jpg",
    img256: "/product-images/256/pim-2-256.jpg",
    img512: "/product-images/512/pim-2-512.jpg",
    imgorg: "/product-images/org/pim-2-org.jpg",
    rate: 4.5,
  },
  {
    id: 3,
    title: "Dr.Martens Jadon Bottes",
    price: 32.42,
    offerPrice: 5.99,
    off: 0.83,
    img64: "/product-images/64/pim-1-64.jpg",
    img256: "/product-images/256/pim-1-256.jpg",
    img512: "/product-images/512/pim-1-512.jpg",
    imgorg: "/product-images/org/pim-1-org.jpg",
    rate: 5,
  },
  {
    id: 4,
    title: "IPad Pro 2021",
    price: 245.42,
    offerPrice: 239.99,
    off: 0.2,
    img64: "/product-images/64/pim-3-64.jpg",
    img256: "/product-images/256/pim-3-256.jpg",
    img512: "/product-images/512/pim-3-512.jpg",
    imgorg: "/product-images/org/pim-3-org.jpg",
    rate: 4,
  },
  {
    id: 5,
    title: "IPad Mini 6",
    price: 80.34,
    offerPrice: 76.99,
    off: 0.02,
    img64: "/product-images/64/pim-4-64.jpg",
    img256: "/product-images/256/pim-4-256.jpg",
    img512: "/product-images/512/pim-4-512.jpg",
    imgorg: "/product-images/org/pim-4-org.jpg",
    rate: 4,
  },
  {
    id: 6,
    title: "IPhone 13 Pro Max",
    price: 46.42,
    offerPrice: 23.99,
    off: 0.53,
    img64: "/product-images/64/pim-5-64.jpg",
    img256: "/product-images/256/pim-5-256.jpg",
    img512: "/product-images/512/pim-5-512.jpg",
    imgorg: "/product-images/org/pim-5-org.jpg",
    rate: 3,
  },
  {
    id: 7,
    title: "IWatch Series 6",
    price: 32.42,
    offerPrice: 20.99,
    off: 0.2,
    img64: "/product-images/64/pim-6-64.jpg",
    img256: "/product-images/256/pim-6-256.jpg",
    img512: "/product-images/512/pim-6-512.jpg",
    imgorg: "/product-images/org/pim-6-org.jpg",
    rate: 3.5,
  },
  {
    id: 8,
    title: "Nike White Sneakers",
    price: 8.56,
    offerPrice: 6.99,
    off: 0.2,
    img64: "/product-images/64/pim-8-64.jpg",
    img256: "/product-images/256/pim-8-256.jpg",
    img512: "/product-images/512/pim-8-512.jpg",
    imgorg: "/product-images/org/pim-8-org.jpg",
    rate: 2.5,
  },
  {
    id: 9,
    title: "Brown Sneaker",
    price: 12.86,
    offerPrice: 10.99,
    off: 0.2,
    img64: "/product-images/64/pim-7-64.jpg",
    img256: "/product-images/256/pim-7-256.jpg",
    img512: "/product-images/512/pim-7-512.jpg",
    imgorg: "/product-images/org/pim-7-org.jpg",
    rate: 4,
  },
  {
    id: 10,
    title: "Red Nike Sneaker",
    price: 23.34,
    offerPrice: 19.99,
    off: 0.2,
    img64: "/product-images/64/pim-9-64.jpg",
    img256: "/product-images/256/pim-9-256.jpg",
    img512: "/product-images/512/pim-9-512.jpg",
    imgorg: "/product-images/org/pim-9-org.jpg",
    rate: 5,
  },
  {
    id: 11,
    title: "White T-Shirt",
    price: 6.42,
    offerPrice: 4.99,
    off: 0.2,
    img64: "/product-images/64/pim-10-64.jpg",
    img256: "/product-images/256/pim-10-256.jpg",
    img512: "/product-images/512/pim-10-512.jpg",
    imgorg: "/product-images/org/pim-10-org.jpg",
    rate: 3.5,
  },
];

export default products;
