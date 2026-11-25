export interface WeddingEvent {
  id: string;
  title: string;
  arabicTitle: string;
  subtitle: string;
  dateText: string;
  hijriDate?: string;
  timeText: string;
  dinnerText?: string;
  venueName: string;
  venueAddress: string;
  city: string;
  state: string;
  country: string;
  mapsUrl: string;
  embedMapsUrl: string;
  startDateIso: string; // ISO format with IST +05:30
  endDateIso: string;
  description: string;
  cardTheme: 'maroon' | 'cream';
}

export interface CoupleMember {
  name: string;
  arabicName: string;
  title: string;
  qualification: string;
  designation?: string;
  description: string;
  imagePlaceholder: string;
}

export const WEDDING_DATA = {
  couple: {
    groom: {
      name: "Mohammad Faizan",
      arabicName: "محمد فيضان",
      title: "Groom",
      qualification: "MCA",
      designation:"Software Engineer",
      description: "Son of Basheer Ahmed",
      imagePlaceholder: "/images/groom-placeholder.svg",
    } as CoupleMember,
    bride: {
      name: "Muskan",
      arabicName: "مسكان",
      title: "Bride",
      qualification: "M.Sc. Nursing",
      designation:"Assistant Professor",
      description: "Daughter of Husain Saheb",
      imagePlaceholder: "/images/bride-placeholder.svg",
    } as CoupleMember,
  },
  islamicTexts: {
    bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    bismillahEnglish: "In the name of Allah, the Most Gracious, the Most Merciful",
    invitationGreeting: "With the blessings of Almighty Allah",
    invitationPreTitle: "You Are Cordially Invited To Celebrate",
    invitationTitle: "The Wedding Ceremony of",
    blessingDuaArabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    blessingDuaTransliteration: "Bārakallāhu laka wa bāraka 'alayka wa jama'a baynakumā fī khayr",
    blessingDuaEnglish: "May Allah bless you, shower His blessings upon you, and unite you both in goodness.",
    blessingReference: "Sunan Abi Dawud & Jami` at-Tirmidhi",
    quranicVerseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    quranicVerseEnglish: "And of His signs is that He created for you mates from among yourselves that you may find tranquility in them; and He placed between you affection and mercy.",
    quranicReference: "Surah Ar-Rum (30:21)",
    closingArabic: "جزاك الله خيرا",
    closingEnglish: "May Allah reward you with immense goodness",
  },
  events: {
    nikah: {
      id: "nikah-ceremony",
      title: "AQAD CEREMONY",
      arabicTitle: "عقد النكاح المبارك",
      subtitle: "Solemnization of Nikah",
      dateText: "Friday, 8th January 2027",
      hijriDate: "30th Rajjab 1448 Hijri",
      timeText: "11:30 AM",
      venueName: "J.B. Garden Hall",
      venueAddress: "Near Asar Mahal, Vijayapur, Karnataka, India",
      city: "Vijayapur",
      state: "Karnataka",
      country: "India",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=J.B.+Garden+Hall+Near+Asar+Mahal+Vijayapur+Karnataka",
      embedMapsUrl: "https://www.google.com/maps?q=J.B.+Garden+Hall,+Near+Asar+Mahal,+Vijayapur,+Karnataka&output=embed",
      startDateIso: "2027-01-08T11:30:00+05:30",
      endDateIso: "2027-01-08T15:00:00+05:30",
      description: "Nikah Ceremony of Mohammad Faizan & Muskan at J.B. Garden Hall, Vijayapur",
      cardTheme: "maroon",
    } as WeddingEvent,
    valima: {
      id: "valima-reception",
      title: "VALIMA RECEPTION",
      arabicTitle: "وليمة العرس المبارك",
      subtitle: "Grand Wedding Reception & Dinner",
      dateText: "Saturday, 9th January 2027",
      timeText: "7:00 PM onwards",
      dinnerText: "Dinner: After 7:00 PM",
      venueName: "Alamgiri Function Hall",
      venueAddress: "Beside Old Bus Stand, Vijayapur, Karnataka, India",
      city: "Vijayapur",
      state: "Karnataka",
      country: "India",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Alamgiri+Function+Hall+Beside+Old+Bus+Stand+Vijayapur+Karnataka",
      embedMapsUrl: "https://www.google.com/maps?q=Alamgiri+Function+Hall,+Beside+Old+Bus+Stand,+Vijayapur,+Karnataka&output=embed",
      startDateIso: "2027-01-09T19:00:00+05:30",
      endDateIso: "2027-01-09T23:30:00+05:30",
      description: "Valima Reception of Mohammad Faizan & Muskan at Alamgiri Function Hall, Vijayapur",
      cardTheme: "cream",
    } as WeddingEvent,
  },
  family: {
    header: "With Best Compliments From",
    notableMembers: [
      { name: "MR. BASHEER AHMED", relation: "Elder & Patron" },
      { name: "MOHAMMAD IBRAHIM URF HAJI SAHEB KHADIM", relation: "Family Head" },
    ],
    familyNames: "Khadim & Mujawar Families, Relatives & Friends.",
    message: "Your gracious presence and duas will make our celebration truly memorable. We request you and your family to join us and bless the newlyweds.",
  },
  closing: {
    quote: "Your Presence Is Our Greatest Gift",
    subquote: "We look forward to celebrating this beautiful occasion with you.",
    signature: "MOHAMMAD FAIZAN & MUSKAN",
    duaNotice: "With Love & Duas",
  },
  seo: {
    title: "Mohammad Faizan & Muskan | Premium Islamic Wedding Invitation (Nikah & Valima)",
    description: "You are cordially invited to celebrate the Nikah and Valima ceremony of Mohammad Faizan & Muskan on 8th & 9th January 2027 in Vijayapur, Karnataka.",
    keywords: ["Mohammad Faizan", "Muskan", "Islamic Wedding Invitation", "Nikah Ceremony", "Valima Reception", "Vijayapur Wedding", "Muslim Wedding Invitation"],
    themeColor: "#641C32",
    ogImage: "/images/og-wedding.png",
  },
};
