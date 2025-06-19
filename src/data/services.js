import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety, MdLocalPharmacy } from "react-icons/md";
import { FaHeartbeat, FaSyringe, FaPills, FaStethoscope, FaUserMd, FaCalendarCheck, FaHome, FaLungs, FaBaby } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: RiMicroscopeLine,
    title: "Lab Test Services",
    shortDescription: "Accurate and fast diagnostic testing to support your health decisions.",
    fullDescription: "Our state-of-the-art laboratory offers a comprehensive range of diagnostic tests with quick turnaround times. From routine blood work to specialized panels, our certified technicians ensure accurate results to help you and your healthcare provider make informed decisions about your health. We offer convenient online booking, walk-in services, and home collection options for your comfort.",
    features: [
      "Comprehensive blood panels",
      "Diabetes screening and monitoring",
      "Cholesterol and lipid profiles",
      "Thyroid function tests",
      "Liver and kidney function tests",
      "Hormone level testing",
      "Allergy testing",
      "COVID-19 and other infectious disease testing"
    ],
    process: [
      "Book an appointment online or walk in during business hours",
      "Present your prescription or request specific tests",
      "Sample collection by trained phlebotomists",
      "Results available within 24-48 hours",
      "Digital reports sent directly to your email",
      "Consultation available to understand your results"
    ],
    imageUrl: "/src/assets/img/services/lab-test.jpg"
  },
  {
    id: 2,
    icon: MdHealthAndSafety,
    title: "Health Check Programs",
    shortDescription: "Routine health checks to monitor and maintain your overall wellness.",
    fullDescription: "Our comprehensive health check programs are designed to assess your current health status and identify potential risks before they become serious concerns. Each package is tailored to different age groups, genders, and specific health concerns. Regular health checks are essential for early detection and prevention of diseases, helping you maintain optimal health and wellbeing throughout your life.",
    features: [
      "Basic health screening packages",
      "Comprehensive executive health checks",
      "Women's wellness packages",
      "Men's health assessments",
      "Senior citizen health programs",
      "Pre-employment medical examinations",
      "Lifestyle disease risk assessment",
      "Personalized health reports with recommendations"
    ],
    process: [
      "Select a health check package suitable for your needs",
      "Schedule an appointment at your convenience",
      "Complete necessary tests and examinations",
      "Receive a detailed report of your health status",
      "Follow-up consultation with healthcare professionals",
      "Personalized health improvement recommendations"
    ],
    imageUrl: "/src/assets/img/services/health-check.jpg"
  },
  {
    id: 3,
    icon: FaHeartbeat,
    title: "Heart Health Services",
    shortDescription: "Support and screenings for maintaining a healthy heart.",
    fullDescription: "Our heart health services focus on both prevention and management of cardiovascular conditions. We offer specialized screenings, risk assessments, and ongoing monitoring for patients with existing heart conditions. Our team works closely with cardiologists to provide comprehensive care, including medication management, lifestyle modifications, and emergency preparedness for cardiac patients.",
    features: [
      "Cardiovascular risk assessment",
      "Blood pressure monitoring and management",
      "Cholesterol management programs",
      "ECG and other cardiac diagnostic tests",
      "Heart-healthy nutrition counseling",
      "Cardiac rehabilitation support",
      "Heart medication management",
      "Emergency preparedness for cardiac patients"
    ],
    process: [
      "Initial assessment of cardiovascular health",
      "Customized screening based on risk factors",
      "Development of personalized heart health plan",
      "Regular monitoring and follow-up",
      "Coordination with specialists when needed",
      "Ongoing education and support"
    ],
    imageUrl: "/src/assets/img/services/heart-health.jpg"
  },
  {
    id: 4,
    icon: MdLocalPharmacy,
    title: "Prescription Refill Services",
    shortDescription: "Quick and easy refills for your ongoing prescriptions.",
    fullDescription: "Our streamlined prescription refill service ensures you never run out of your essential medications. We offer multiple convenient options for requesting refills, automatic refill programs for maintenance medications, and personalized medication reviews to optimize your treatment. Our pharmacists are available to answer questions about your medications and provide guidance on proper usage.",
    features: [
      "Online, phone, and in-person refill requests",
      "Automatic refill program for maintenance medications",
      "Medication synchronization for multiple prescriptions",
      "SMS and email refill reminders",
      "Express pickup and home delivery options",
      "Insurance processing and copay assistance",
      "Medication therapy management",
      "Personalized medication reviews"
    ],
    process: [
      "Submit refill request through your preferred method",
      "Receive notification when your prescription is ready",
      "Choose pickup or delivery option",
      "Consult with pharmacist for any questions",
      "Set up automatic refills for regular medications",
      "Schedule periodic medication reviews"
    ],
    imageUrl: "/src/assets/img/services/prescription-refill.jpg"
  },
  {
    id: 5,
    icon: FaSyringe,
    title: "Vaccination Services",
    shortDescription: "Stay protected with essential vaccines for all ages.",
    fullDescription: "Our comprehensive vaccination services help protect you and your family from preventable diseases. We offer a full range of vaccines for all age groups, from childhood immunizations to travel vaccines and seasonal flu shots. Our trained immunization pharmacists provide pre-vaccination assessments, administer vaccines according to the latest guidelines, and maintain accurate vaccination records for your convenience.",
    features: [
      "Seasonal flu vaccines",
      "Childhood immunization programs",
      "Adult vaccination services",
      "Travel vaccines and consultations",
      "COVID-19 vaccinations",
      "Pneumonia and shingles vaccines",
      "HPV and hepatitis vaccines",
      "Vaccination record management"
    ],
    process: [
      "Pre-vaccination screening and assessment",
      "Consultation regarding recommended vaccines",
      "Vaccine administration by certified professionals",
      "Post-vaccination monitoring",
      "Documentation and record-keeping",
      "Reminder services for follow-up doses"
    ],
    imageUrl: "/src/assets/img/services/vaccination.jpg"
  },
  {
    id: 6,
    icon: FaPills,
    title: "Monthly Medicine Supply",
    shortDescription: "A convenient program delivering your medicines every month on time.",
    fullDescription: "Our Monthly Medicine Supply program takes the hassle out of managing chronic medications. We coordinate all your prescriptions to be filled at the same time each month, provide customized packaging options for easier adherence, and offer flexible delivery options to suit your lifestyle. Our pharmacists regularly review your medication regimen to ensure safety and effectiveness.",
    features: [
      "Synchronized prescription refills",
      "Customized packaging options (pill packs, blister packs)",
      "Automatic monthly refill and delivery",
      "Regular medication review and optimization",
      "Dosage reminders and adherence tools",
      "Coordination with healthcare providers",
      "Flexible payment options",
      "Seasonal medication adjustments"
    ],
    process: [
      "Initial medication reconciliation and enrollment",
      "Selection of packaging and delivery preferences",
      "Monthly preparation of medication packages",
      "Quality check by licensed pharmacists",
      "Delivery or pickup as per your choice",
      "Quarterly medication regimen review"
    ],
    imageUrl: "/src/assets/img/services/monthly-medicine.jpg"
  },
  {
    id: 7,
    icon: FaStethoscope,
    title: "Medication Therapy Management",
    shortDescription: "Personalized medication reviews to optimize your treatment plan.",
    fullDescription: "Our Medication Therapy Management service provides comprehensive reviews of all your medications to ensure they work effectively together and align with your health goals. Our clinical pharmacists work one-on-one with you to address medication-related problems, reduce side effects, and improve treatment outcomes. This service is especially valuable for patients taking multiple medications or managing complex health conditions.",
    features: [
      "Comprehensive medication review",
      "Drug interaction screening",
      "Side effect management strategies",
      "Medication optimization for effectiveness",
      "Cost-saving alternatives identification",
      "Coordination with multiple healthcare providers",
      "Personalized medication action plan",
      "Follow-up monitoring and adjustments"
    ],
    process: [
      "Initial comprehensive medication review",
      "Identification of medication-related problems",
      "Development of personalized action plan",
      "Collaboration with prescribers for necessary changes",
      "Implementation of medication optimization strategies",
      "Regular follow-up and plan adjustments"
    ],
    imageUrl: "/src/assets/img/services/medication-management.jpg"
  },
  {
    id: 8,
    icon: FaUserMd,
    title: "Pharmacist Consultation",
    shortDescription: "Expert advice on medications, health conditions, and wellness strategies.",
    fullDescription: "Our pharmacist consultation service provides you with direct access to medication experts who can answer your questions and provide personalized guidance. Whether you need help understanding a new prescription, managing side effects, or navigating complex treatment plans, our pharmacists offer confidential, one-on-one consultations to address your specific needs and concerns.",
    features: [
      "Private consultation in dedicated space",
      "Medication usage and administration guidance",
      "Side effect management strategies",
      "Drug interaction checks",
      "Over-the-counter medication recommendations",
      "Lifestyle and dietary advice",
      "Chronic disease management support",
      "Health device usage demonstrations"
    ],
    process: [
      "Schedule appointment or walk in for consultation",
      "Discuss your medications and health concerns",
      "Receive personalized advice and recommendations",
      "Get answers to your specific questions",
      "Develop strategies for medication management",
      "Follow-up as needed for ongoing support"
    ],
    imageUrl: "/src/assets/img/services/pharmacist-consultation.jpg"
  },
  {
    id: 9,
    icon: FaCalendarCheck,
    title: "Medication Adherence Programs",
    shortDescription: "Support services to help you take your medications correctly and consistently.",
    fullDescription: "Our medication adherence programs are designed to help you get the maximum benefit from your prescribed treatments by taking medications correctly and consistently. We offer a range of tools and services including specialized packaging, reminder systems, and regular check-ins to support your medication routine. Our goal is to improve your health outcomes by ensuring you stay on track with your treatment plan.",
    features: [
      "Customized pill packaging systems",
      "Digital medication reminders",
      "Simplified medication schedules",
      "Adherence monitoring and support",
      "Educational resources and counseling",
      "Refill synchronization",
      "Progress tracking and reporting",
      "Caregiver support and training"
    ],
    process: [
      "Assessment of current medication routine",
      "Identification of adherence barriers",
      "Selection of appropriate adherence tools",
      "Implementation of personalized adherence plan",
      "Regular follow-up and adjustment of strategies",
      "Coordination with healthcare providers"
    ],
    imageUrl: "/src/assets/img/services/medication-adherence.jpg"
  },
  {
    id: 10,
    icon: FaHome,
    title: "Home Medication Delivery",
    shortDescription: "Convenient delivery of prescriptions and health products to your doorstep.",
    fullDescription: "Our home medication delivery service brings your prescriptions and essential health products directly to your door, saving you time and ensuring you never run out of important medications. We offer flexible scheduling options, secure packaging, and real-time tracking to provide a seamless delivery experience. This service is especially valuable for patients with mobility challenges, busy schedules, or those who live far from our pharmacy.",
    features: [
      "Same-day and scheduled delivery options",
      "Temperature-controlled packaging when needed",
      "Real-time delivery tracking",
      "Contactless delivery available",
      "Delivery confirmation and verification",
      "Special handling for controlled substances",
      "Inclusion of OTC items with prescription delivery",
      "Rural and extended area service"
    ],
    process: [
      "Submit prescription through app, website, or phone",
      "Pharmacist prepares and verifies your order",
      "Select preferred delivery time window",
      "Receive tracking information via text or email",
      "Secure delivery to your specified location",
      "Confirmation of receipt and follow-up"
    ],
    imageUrl: "/src/assets/img/services/home-delivery.jpg"
  },
  {
    id: 11,
    icon: FaLungs,
    title: "Respiratory Care Services",
    shortDescription: "Comprehensive support for patients with respiratory conditions.",
    fullDescription: "Our respiratory care services provide specialized support for patients with asthma, COPD, and other breathing disorders. We offer a range of products, education, and monitoring services to help manage symptoms and improve quality of life. Our trained respiratory therapists work with you to develop personalized care plans and provide ongoing support for your respiratory health needs.",
    features: [
      "Asthma and COPD management programs",
      "Respiratory medication optimization",
      "Inhaler technique assessment and training",
      "Nebulizer equipment and maintenance",
      "Peak flow monitoring and tracking",
      "Oxygen therapy support services",
      "Smoking cessation programs",
      "Pulmonary rehabilitation coordination"
    ],
    process: [
      "Initial respiratory assessment",
      "Development of personalized care plan",
      "Equipment selection and training",
      "Medication management and optimization",
      "Regular monitoring and follow-up",
      "Coordination with pulmonologists and primary care"
    ],
    imageUrl: "/src/assets/img/services/respiratory-care.jpg"
  },
  {
    id: 12,
    icon: FaBaby,
    title: "Pediatric Pharmacy Services",
    shortDescription: "Specialized medication services for infants, children, and adolescents.",
    fullDescription: "Our pediatric pharmacy services are specially designed to meet the unique medication needs of children from infancy through adolescence. We provide accurate dosing, child-friendly formulations, and expert guidance for parents and caregivers. Our pediatric pharmacists are trained to address the specific concerns related to children's medications, ensuring safe and effective treatment for our youngest patients.",
    features: [
      "Pediatric medication compounding",
      "Flavor options for liquid medications",
      "Weight-based dosing calculations",
      "Child-resistant and caregiver-friendly packaging",
      "Medication administration tools and training",
      "Growth-stage appropriate counseling",
      "Vaccine scheduling and administration",
      "Common childhood illness management"
    ],
    process: [
      "Review of pediatric prescription for appropriateness",
      "Preparation of child-friendly medication forms",
      "Parent/caregiver education and demonstration",
      "Provision of specialized administration devices",
      "Follow-up for effectiveness and side effects",
      "Coordination with pediatricians"
    ],
    imageUrl: "/src/assets/img/services/pediatric-pharmacy.jpg"
  }
];

export default services;

