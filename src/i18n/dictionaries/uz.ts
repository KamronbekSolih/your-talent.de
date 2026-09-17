import type { Dictionary } from "../types";

export const uz: Dictionary = {
  nav: {
    start: "Bosh sahifa",
    forCompanies: "Kompaniyalar uchun",
    forCandidates: "Nomzodlar uchun",
    vacancies: "Bo'sh ish o'rinlari",
    contact: "Aloqa",
  },
  footer: {
    impressum: "Yuridik ma'lumot",
    datenschutz: "Maxfiylik siyosati",
    cookiePreferences: "Cookie sozlamalari",
  },
  cookieConsent: {
    message:
      "Ushbu veb-sayt texnik jihatdan zarur bo'lgan cookie fayllaridan tashqari, tashrif buyuruvchilarning saytdan qanday foydalanishini tushunish uchun tahliliy cookie fayllaridan (Google Analytics) ham foydalanadi. Siz tahliliy cookie fayllarini qabul qilishingiz yoki rad etishingiz mumkin.",
    accept: "Qabul qilish",
    decline: "Rad etish",
  },
  home: {
    title: "Kompaniyangiz uchun xalqaro malakali mutaxassislar",
    subtitle:
      "Biz chet eldan malakali mutaxassislarni ishga joylashtiramiz va nomzodlar hamda kompaniyalarga butun jarayon davomida yordam beramiz.",
    cta: "Bo'sh ish o'rinlarini ko'rish",
  },
  vacanciesList: {
    title: "Bo'sh ish o'rinlari",
    empty: "Hozircha bo'sh ish o'rinlari mavjud emas. Tez orada qayta tekshiring.",
    location: "Manzil",
  },
  vacancyDetail: {
    requirementsHeading: "Talablar",
    applyHeading: "Hoziroq ariza topshiring",
  },
  applicationForm: {
    name: "Ism-familiya *",
    email: "Elektron pochta *",
    phone: "Telefon",
    message: "Xabar",
    cv: "Rezyume (PDF, maksimal 10 MB)",
    consentPrefix: "Men ma'lumotlarim",
    consentLink: "Maxfiylik siyosati",
    consentSuffix:
      "ga muvofiq arizamni ko'rib chiqish uchun saqlanishi va qayta ishlanishiga rozilik bildiraman. *",
    submit: "Arizani yuborish",
    submitting: "Yuborilmoqda…",
    success: "Arizangiz uchun rahmat! Tez orada siz bilan bog'lanamiz.",
    errorConsent: "Iltimos, ma'lumotlaringizni qayta ishlashga rozilik bildiring.",
    errorFileSize: "Fayl hajmi 10 MB dan oshmasligi kerak.",
    errorUpload: "Rezyumeni yuklab bo'lmadi.",
    errorSubmit: "Arizani yuborib bo'lmadi. Iltimos, qaytadan urinib ko'ring.",
  },
  forCompanies: {
    title: "Kompaniyalar uchun",
    intro:
      "Ishonchli mutaxassislar qidiryapsizmi, ammo Germaniya mehnat bozorida mos nomzod topa olmayapsizmi? Biz xalqaro iste'dodlarni ishga joylashtiramiz va butun jarayon davomida — qidiruvdan muvaffaqiyatli ish boshlashgacha — sizga yordam beramiz.",
    services: [
      {
        title: "Xalqaro mutaxassislarni ishga joylashtirish",
        description:
          "Biz sizning talablaringizga mos keladigan chet ellik malakali mutaxassislarni topamiz — dastlabki tanlovdan malaka tekshiruvigacha.",
      },
      {
        title: "Viza va migratsiya bo'yicha maslahat",
        description:
          "Biz siz va yangi xodimlaringizni barcha viza va kirish rasmiyatlari bo'yicha qo'llab-quvvatlaymiz va amaldagi qonuniy talablarni yaxshi bilamiz.",
      },
      {
        title: "Chet el diplomlarini tan olish",
        description:
          "Biz chet el malakasini Germaniyada tan olinishi jarayonida yordam beramiz va tegishli idoralar bilan muvofiqlashtiramiz.",
      },
      {
        title: "Moslashuv va integratsiya",
        description:
          "Uy-joy izlashdan davlat idoralaridagi ishlargacha — yangi xodimlaringizga kompaniyangizda va Germaniyada joylashishga yordam beramiz.",
      },
    ],
    ctaTitle: "Xizmatlarimizga qiziqasizmi?",
    ctaText:
      "Bepul maslahat uchun biz bilan bog'laning. Sizning individual talablaringizni muhokama qilishdan mamnunmiz.",
    ctaButton: "Bog'lanish",
  },
  forCandidates: {
    title: "Nomzodlar uchun",
    intro:
      "Germaniyada ishlashni xohlaysizmi? Biz chet ellik mutaxassislarni Germaniyadagi kompaniyalarga joylashtiramiz va butun jarayon davomida — arizadan birinchi ish kunigacha — sizga bepul yordam beramiz.",
    steps: [
      {
        title: "1. Ariza topshirish",
        description:
          "Siz bizning bo'sh ish o'rinlarimizdan biriga oddiy tarzda — aloqa ma'lumotlaringiz va rezyumeingiz bilan — ariza topshirasiz.",
      },
      {
        title: "2. Suhbat",
        description:
          "Biz siz bilan tanishamiz, tajribangiz va istaklaringizni muhokama qilamiz va sizga mos kompaniyalarni tavsiya qilamiz.",
      },
      {
        title: "3. Viza va tan olish",
        description:
          "Biz sizga viza olish, Germaniyaga kirish va zarur bo'lsa, chet el malakangizni tan oldirish jarayonlarida yordam beramiz.",
      },
      {
        title: "4. Kelish va integratsiya",
        description:
          "Birinchi ish kunidan uy-joy topishgacha: biz sizga Germaniya hayotiga moslashishda yordam beramiz.",
      },
    ],
    ctaTitle: "Keyingi qadamga tayyormisiz?",
    ctaText:
      "Joriy bo'sh ish o'rinlarimizni ko'ring va to'g'ridan-to'g'ri onlayn ariza topshiring.",
    ctaButton: "Bo'sh ish o'rinlarini ko'rish",
  },
  impressum: {
    title: "Yuridik ma'lumot (Impressum)",
    draftNotice:
      "Qoralama — sahifa e'lon qilinishidan oldin haqiqiy kompaniya ma'lumotlari bilan almashtiring. Germaniya qonunchiligiga ko'ra, har bir tijorat veb-sayti to'liq va aniq yuridik ma'lumotga (Impressum) ega bo'lishi shart.",
    tmgHeading: "§ 5 TMG (Germaniya qonuni) talablariga muvofiq ma'lumotlar",
    tmgLines: [
      "[Kompaniya nomi / F.I.Sh.]",
      "[Ko'cha va uy raqami]",
      "[Pochta indeksi va shahar]",
      "[Mamlakat]",
    ],
    contactHeading: "Aloqa",
    phoneLine: "Telefon: [telefon raqami]",
    emailLine: "Elektron pochta: [elektron pochta manzili]",
    registerHeading: "Savdo reestri",
    registerText:
      "[Agar ro'yxatdan o'tgan bo'lsa: sud nomi, ro'yxat raqami. Agar ro'yxatdan o'tmagan yakka tartibdagi tadbirkorlik bo'lsa: ushbu bo'limni olib tashlang.]",
    vatHeading: "QQS identifikatsiya raqami",
    vatText:
      "§ 27a UStG ga muvofiq QQS identifikatsiya raqami: [QQS raqami, mavjud bo'lsa]",
    responsibleHeading: "§ 55 (2) RStV ga muvofiq mazmun uchun mas'ul shaxs",
    responsibleText: "[Mas'ul shaxsning ismi va manzili]",
    disputeHeading: "Yevropa Ittifoqi nizolarni hal qilish",
    disputeText:
      "Yevropa Komissiyasi onlayn nizolarni hal qilish (ODR) uchun platforma taqdim etadi: https://ec.europa.eu/consumers/odr/. Bizning elektron pochta manzilimizni ushbu sahifaning yuqori qismida topishingiz mumkin.",
  },
  datenschutz: {
    title: "Maxfiylik siyosati",
    draftNotice:
      "Qoralama — qavs ichidagi joy egallovchi matnlarni haqiqiy ma'lumotlar bilan almashtiring va, ayniqsa ariza hujjatlarini saqlash muddati bo'yicha, yurist bilan maslahatlashing.",
    s1Heading: "1. Mas'ul shaxs",
    s1Text:
      "Umumiy ma'lumotlarni himoya qilish reglamentiga (GDPR) ko'ra mas'ul shaxs: [Kompaniya nomi / F.I.Sh.], [Ko'cha va uy raqami, pochta indeksi, shahar], Elektron pochta: [elektron pochta manzili]",
    s2Heading: "2. Biz qanday ma'lumotlarni qayta ishlaymiz",
    s2Text:
      "Agar siz bizning veb-saytimiz orqali biror lavozimga ariza topshirsangiz yoki aloqa formasi orqali bizga yozsangiz, biz siz taqdim etgan ma'lumotlarni — ism, elektron pochta manzili, telefon raqami, xabaringiz va, agar yuklangan bo'lsa, rezyumeingizni — qayta ishlaymiz. Ushbu ma'lumotlar faqat sizning so'rovingiz yoki arizangizni ko'rib chiqish uchun ishlatiladi.",
    s3Heading: "3. Huquqiy asos",
    s3Text:
      "Qayta ishlash sizning roziligingiz asosida (GDPR 6-moddasining 1-qismi «a» bandi) hamda ariza topshirish jarayonining bir qismi sifatida shartnomagacha bo'lgan chora-tadbirlarni amalga oshirish uchun (GDPR 6-moddasining 1-qismi «b» bandi) amalga oshiriladi.",
    s4Heading: "4. Saqlash muddati",
    s4Text:
      "Ma'lumotlaringiz ariza yoki so'rov jarayoni davomida saqlanadi va jarayon yakunlangandan so'ng eng kech [muddat, masalan, 6 oy] ichida o'chiriladi, agar siz uzoqroq saqlashga rozilik bildirmagan bo'lsangiz.",
    s5Heading: "5. Xosting va texnik qayta ishlash",
    s5Text:
      "Bizning veb-saytimiz va unga tegishli ma'lumotlar bazasi Supabase'da (server joylashuvi: Yevropa Ittifoqi, Frankfurt) joylashtirilgan. Ushbu provayder bilan GDPR 28-moddasiga muvofiq ma'lumotlarni qayta ishlash shartnomasi mavjud. [Veb-saytning o'zi uchun xosting provayderi haqida ma'lumot qo'shing, masalan, Vercel.]",
    s6Heading: "6. Cookie fayllari",
    s6Text:
      "Ushbu veb-sayt admin panelidagi tizimga kirish sessiyasini saqlash, til tanlovingizni va cookie tanlovingizni eslab qolish uchun texnik jihatdan zarur bo'lgan cookie fayllaridan foydalanadi. Bundan tashqari — faqat sizning roziligingiz bilan — biz veb-saytdan foydalanishni anonim tarzda tahlil qilish uchun Google Analytics'dan foydalanamiz (IP-manzilni anonimlashtirish yoqilgan). Roziligingizni istalgan vaqtda footer'dagi «Cookie sozlamalari» havolasi orqali bekor qilishingiz yoki qayta berishingiz mumkin. Marketing yoki reklama cookie fayllari ishlatilmaydi.",
    s7Heading: "7. Sizning huquqlaringiz",
    s7Text:
      "Sizda o'z ma'lumotlaringiz haqida ma'lumot olish, ularni tuzatish, o'chirish, qayta ishlashni cheklash, ma'lumotlarni ko'chirish, shuningdek qayta ishlashga qarshi chiqish huquqi bor (GDPR 15–21-moddalar). Bundan tashqari, siz bergan roziligingizni istalgan vaqtda kelajakka nisbatan bekor qilishingiz mumkin. Buning uchun yuqorida ko'rsatilgan elektron pochta manziliga murojaat qiling.",
    s8Heading: "8. Shikoyat qilish huquqi",
    s8Text:
      "Sizda shaxsiy ma'lumotlaringizni qayta ishlash bo'yicha ma'lumotlarni himoya qilish nazorat organiga shikoyat qilish huquqi bor.",
  },
  contact: {
    title: "Aloqa",
    intro:
      "Xizmatlarimiz haqida savollaringiz bormi? Bizga yozing — imkon qadar tezroq siz bilan bog'lanamiz.",
    detailsHeading: "Aloqa ma'lumotlari",
    phoneLine: "Telefon: [telefon raqami]",
    emailLine: "Elektron pochta: [elektron pochta manzili]",
    formName: "Ism-familiya *",
    formEmail: "Elektron pochta *",
    formMessage: "Xabar *",
    consentPrefix: "Men ma'lumotlarim",
    consentLink: "Maxfiylik siyosati",
    consentSuffix:
      "ga muvofiq so'rovimni ko'rib chiqish uchun saqlanishi va qayta ishlanishiga rozilik bildiraman. *",
    submit: "Xabarni yuborish",
    submitting: "Yuborilmoqda…",
    success: "Xabaringiz uchun rahmat! Tez orada siz bilan bog'lanamiz.",
    errorConsent: "Iltimos, ma'lumotlaringizni qayta ishlashga rozilik bildiring.",
    errorSubmit: "Xabarni yuborib bo'lmadi. Iltimos, qaytadan urinib ko'ring.",
  },
};
