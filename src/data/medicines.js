const medicines = [
  // Analgesics (Pain Relievers)
  {
    id: 1,
    name: "Paracetamol",
    brand: "Tylenol",
    category: "Analgesics",
    symptoms: ["headache", "fever", "pain", "cold", "flu"],
    description: "A common pain reliever and fever reducer used for mild to moderate pain.",
    dosage: "Adults: 500-1000mg every 4-6 hours as needed (max 4000mg daily)",
    sideEffects: "Rare when taken as directed. Liver damage possible with overdose or alcohol use.",
    warnings: "Do not exceed recommended dose. Avoid alcohol. Consult doctor if pregnant.",
    image: "/src/assets/img/medicines/paracetamol.jpg"
  },
  {
    id: 2,
    name: "Ibuprofen",
    brand: "Advil, Motrin",
    category: "Analgesics",
    symptoms: ["headache", "fever", "pain", "inflammation", "muscle pain", "menstrual pain"],
    description: "Non-steroidal anti-inflammatory drug (NSAID) that reduces pain, inflammation, and fever.",
    dosage: "Adults: 200-400mg every 4-6 hours as needed (max 1200mg daily)",
    sideEffects: "Stomach upset, heartburn, dizziness, mild headache.",
    warnings: "Take with food. Not recommended during pregnancy. Avoid if you have stomach ulcers or heart conditions.",
    image: "/src/assets/img/medicines/ibuprofen.jpg"
  },
  {
    id: 3,
    name: "Aspirin",
    brand: "Bayer, Ecotrin",
    category: "Analgesics",
    symptoms: ["headache", "fever", "pain", "inflammation", "heart attack prevention"],
    description: "Pain reliever, fever reducer, and anti-inflammatory medication that also helps prevent blood clots.",
    dosage: "Adults: 325-650mg every 4 hours as needed (max 4000mg daily)",
    sideEffects: "Stomach upset, heartburn, increased risk of bleeding.",
    warnings: "Not for children under 12 (risk of Reye's syndrome). Avoid if you have bleeding disorders or stomach ulcers.",
    image: "/src/assets/img/medicines/aspirin.jpg"
  },

  // Antihistamines
  {
    id: 4,
    name: "Cetirizine",
    brand: "Zyrtec",
    category: "Antihistamines",
    symptoms: ["allergies", "hay fever", "hives", "itching", "runny nose", "watery eyes"],
    description: "Second-generation antihistamine that relieves allergy symptoms with less drowsiness.",
    dosage: "Adults and children 6+: 10mg once daily",
    sideEffects: "Mild drowsiness, dry mouth, fatigue.",
    warnings: "May cause drowsiness. Use caution when driving or operating machinery.",
    image: "/src/assets/img/medicines/cetirizine.jpg"
  },
  {
    id: 5,
    name: "Diphenhydramine",
    brand: "Benadryl",
    category: "Antihistamines",
    symptoms: ["allergies", "hay fever", "hives", "itching", "insomnia", "cold symptoms"],
    description: "First-generation antihistamine that relieves allergy symptoms and can help with sleep.",
    dosage: "Adults: 25-50mg every 4-6 hours (max 300mg daily)",
    sideEffects: "Drowsiness, dizziness, dry mouth, blurred vision, urinary retention.",
    warnings: "Causes drowsiness. Do not drive or operate machinery. Avoid alcohol.",
    image: "/src/assets/img/medicines/diphenhydramine.jpg"
  },

  // Antacids
  {
    id: 6,
    name: "Calcium Carbonate",
    brand: "Tums, Rolaids",
    category: "Antacids",
    symptoms: ["heartburn", "indigestion", "acid reflux", "upset stomach"],
    description: "Fast-acting antacid that neutralizes stomach acid to relieve heartburn and indigestion.",
    dosage: "Adults: 1-2 tablets as needed (max 7 tablets daily)",
    sideEffects: "Constipation, gas, rebound acid production with overuse.",
    warnings: "Do not use for more than 2 weeks continuously. May interact with certain medications.",
    image: "/src/assets/img/medicines/calcium_carbonate.jpg"
  },
  {
    id: 7,
    name: "Omeprazole",
    brand: "Prilosec",
    category: "Antacids",
    symptoms: ["heartburn", "acid reflux", "GERD", "stomach ulcers"],
    description: "Proton pump inhibitor that reduces stomach acid production for longer-term relief.",
    dosage: "Adults: 20mg once daily before a meal for 14 days",
    sideEffects: "Headache, abdominal pain, nausea, diarrhea, vitamin B12 deficiency with long-term use.",
    warnings: "Not for immediate relief. May take 1-4 days for full effect. Not for continuous use beyond 14 days without medical supervision.",
    image: "/src/assets/img/medicines/omeprazole.jpg"
  },

  // Cough & Cold
  {
    id: 8,
    name: "Dextromethorphan",
    brand: "Robitussin DM, Delsym",
    category: "Cough & Cold",
    symptoms: ["cough", "cold", "dry cough"],
    description: "Cough suppressant that works by affecting signals in the brain that trigger the cough reflex.",
    dosage: "Adults: 10-30mg every 4-8 hours as needed (max 120mg daily)",
    sideEffects: "Dizziness, drowsiness, nausea, mild excitation.",
    warnings: "Do not use with MAO inhibitors. Not recommended for productive coughs (coughs with phlegm).",
    image: "/src/assets/img/medicines/dextromethorphan.jpg"
  },
  {
    id: 9,
    name: "Pseudoephedrine",
    brand: "Sudafed",
    category: "Cough & Cold",
    symptoms: ["nasal congestion", "sinus pressure", "cold", "flu", "allergies"],
    description: "Decongestant that reduces nasal and sinus congestion by shrinking blood vessels in nasal passages.",
    dosage: "Adults: 60mg every 4-6 hours (max 240mg daily)",
    sideEffects: "Nervousness, dizziness, sleeplessness, increased blood pressure.",
    warnings: "Not for people with high blood pressure, heart disease, diabetes, or thyroid problems. May require ID to purchase.",
    image: "/src/assets/img/medicines/pseudoephedrine.jpg"
  },
  {
    id: 10,
    name: "Guaifenesin",
    brand: "Mucinex",
    category: "Cough & Cold",
    symptoms: ["chest congestion", "productive cough", "cold", "bronchitis"],
    description: "Expectorant that helps loosen congestion by thinning mucus in the lungs, making it easier to cough up.",
    dosage: "Adults: 200-400mg every 4 hours (max 2400mg daily)",
    sideEffects: "Nausea, vomiting, stomach pain, dizziness.",
    warnings: "Drink plenty of water when taking this medication. Not for dry coughs.",
    image: "/src/assets/img/medicines/guaifenesin.jpg"
  },

  // Anti-diarrheals
  {
    id: 11,
    name: "Loperamide",
    brand: "Imodium",
    category: "Anti-diarrheals",
    symptoms: ["diarrhea", "loose stools", "stomach upset"],
    description: "Anti-diarrheal medication that slows down intestinal movement, reducing stool frequency.",
    dosage: "Adults: 2mg after each loose stool (max 8mg daily)",
    sideEffects: "Constipation, abdominal pain, dizziness, drowsiness.",
    warnings: "Do not use if you have bloody diarrhea or fever. Not for children under 6 without medical advice.",
    image: "/src/assets/img/medicines/loperamide.jpg"
  },

  // Anti-inflammatories
  {
    id: 12,
    name: "Naproxen",
    brand: "Aleve",
    category: "Anti-inflammatories",
    symptoms: ["pain", "inflammation", "fever", "arthritis", "menstrual pain", "muscle pain"],
    description: "Non-steroidal anti-inflammatory drug (NSAID) that provides longer-lasting pain relief and reduces inflammation.",
    dosage: "Adults: 220-440mg every 8-12 hours (max 660mg daily)",
    sideEffects: "Stomach upset, heartburn, dizziness, drowsiness, increased risk of heart attack and stroke.",
    warnings: "Take with food. Not for use before or after heart surgery. Increased risk of heart attack and stroke.",
    image: "/src/assets/img/medicines/naproxen.jpg"
  },
  {
    id: 13,
    name: "Hydrocortisone Cream",
    brand: "Cortaid, Cortizone-10",
    category: "Anti-inflammatories",
    symptoms: ["skin irritation", "itching", "rash", "eczema", "insect bites", "allergic reactions"],
    description: "Topical corticosteroid that reduces skin inflammation, itching, and irritation.",
    dosage: "Adults and children: Apply a thin layer to affected area 1-4 times daily",
    sideEffects: "Skin thinning, discoloration, burning sensation with prolonged use.",
    warnings: "For external use only. Do not use on broken skin or for more than 7 days without medical advice.",
    image: "/src/assets/img/medicines/hydrocortisone.jpg"
  },

  // Sleep Aids
  {
    id: 14,
    name: "Melatonin",
    brand: "Various brands",
    category: "Sleep Aids",
    symptoms: ["insomnia", "jet lag", "sleep difficulties", "shift work sleep disorder"],
    description: "Natural hormone supplement that helps regulate sleep-wake cycles and promote sleep.",
    dosage: "Adults: 1-5mg taken 30-60 minutes before bedtime",
    sideEffects: "Headache, dizziness, nausea, drowsiness the next day.",
    warnings: "Not regulated by FDA as strictly as medications. Quality and potency may vary between brands.",
    image: "/src/assets/img/medicines/melatonin.jpg"
  },

  // Antifungals
  {
    id: 15,
    name: "Clotrimazole",
    brand: "Lotrimin, Canesten",
    category: "Antifungals",
    symptoms: ["athlete's foot", "ringworm", "jock itch", "fungal infections", "yeast infections"],
    description: "Topical antifungal medication that treats common fungal skin infections.",
    dosage: "Adults and children: Apply to affected area 2-3 times daily for 2-4 weeks",
    sideEffects: "Skin irritation, burning, redness at application site.",
    warnings: "For external use only. Discontinue if irritation occurs. See doctor if no improvement after 4 weeks.",
    image: "/src/assets/img/medicines/clotrimazole.jpg"
  },

  // Laxatives
  {
    id: 16,
    name: "Psyllium Husk",
    brand: "Metamucil",
    category: "Laxatives",
    symptoms: ["constipation", "irregular bowel movements", "digestive health"],
    description: "Natural fiber supplement that promotes regularity and digestive health.",
    dosage: "Adults: 1 tablespoon in 8oz water 1-3 times daily",
    sideEffects: "Bloating, gas, abdominal cramps, especially when first starting.",
    warnings: "Take with plenty of water. May interact with certain medications by affecting absorption.",
    image: "/src/assets/img/medicines/psyllium.jpg"
  },
  {
    id: 17,
    name: "Docusate Sodium",
    brand: "Colace",
    category: "Laxatives",
    symptoms: ["constipation", "hard stools"],
    description: "Stool softener that makes bowel movements easier by increasing water in the stool.",
    dosage: "Adults: 50-300mg daily in divided doses",
    sideEffects: "Throat irritation, mild stomach cramps.",
    warnings: "Not for long-term use. Drink plenty of water. Consult doctor if constipation persists.",
    image: "/src/assets/img/medicines/docusate.jpg"
  },

  // Vitamins & Supplements
  {
    id: 18,
    name: "Multivitamin",
    brand: "Centrum, One A Day",
    category: "Vitamins & Supplements",
    symptoms: ["vitamin deficiency", "general health", "immune support"],
    description: "Dietary supplement containing essential vitamins and minerals to support overall health.",
    dosage: "Adults: 1 tablet daily with food",
    sideEffects: "Mild stomach upset, unpleasant taste, constipation.",
    warnings: "Not a substitute for a balanced diet. Some vitamins can accumulate to harmful levels if taken in excess.",
    image: "/src/assets/img/medicines/multivitamin.jpg"
  },
  {
    id: 19,
    name: "Vitamin D3",
    brand: "Various brands",
    category: "Vitamins & Supplements",
    symptoms: ["vitamin D deficiency", "bone health", "immune support", "seasonal depression"],
    description: "Essential vitamin that supports bone health, immune function, and mood regulation.",
    dosage: "Adults: 600-2000 IU daily",
    sideEffects: "Rare at recommended doses. High doses may cause nausea, vomiting, weakness.",
    warnings: "Fat-soluble vitamin that can accumulate in the body. High doses should be monitored by a doctor.",
    image: "/src/assets/img/medicines/vitamin_d.jpg"
  },
  {
    id: 20,
    name: "Vitamin C",
    brand: "Various brands",
    category: "Vitamins & Supplements",
    symptoms: ["immune support", "cold", "flu", "vitamin C deficiency", "scurvy"],
    description: "Water-soluble vitamin that supports immune function and acts as an antioxidant.",
    dosage: "Adults: 65-90mg daily (up to 2000mg daily for short-term immune support)",
    sideEffects: "Nausea, heartburn, stomach cramps, headache at high doses.",
    warnings: "High doses may cause kidney stones in susceptible individuals and interfere with certain lab tests.",
    image: "/src/assets/img/medicines/vitamin_c.jpg"
  }
];

export default medicines;

