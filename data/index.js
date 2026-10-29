/* ============================================================
 *  data/index.js  —  টাইটেল / কালেকশন / সাবসেকশনের তালিকা
 *  এটা একবার সাজালেই হবে। নতুন প্রশ্ন যোগ করতে এই ফাইল ছুঁতে হবে না।
 *  নতুন কালেকশন চাইলে: নিচে একটা অবজেক্ট যোগ করুন + data/<id>.js নামে ফাইল বানান।
 * ============================================================ */
window.PB = window.PB || {};
// (PB.sets / PB.add এখন assets/app.js নিজে বানায় — এখানে আর লাগে না)

// ঐচ্ছিক: GitHub Pages ছাড়া অন্য ডোমেইনে (বা কম্পিউটারে) নতুন ফাইল লোড করতে চাইলে নিচে নাম লিখুন:
// PB.repo  = "আপনার-ইউজারনেম/রিপোর-নাম";      // কাস্টম ডোমেইনে অটো-স্ক্যানের জন্য
// PB.files = ["ncert-physics-1.js"];           // অটো-স্ক্যান না চললে হাতে তালিকা

// স্থানীয়ভাবে (ডাবল-ক্লিকে) বা GitHub API সীমা পেরোলেও যেন সব ফাইল লোড হয়, তাই তালিকা দেওয়া আছে। নতুন ফাইল GitHub Pages-এ নিজে থেকেই জোড়া লাগবে।
PB.files = [
  "bcs.js",
  "exam-batch-01.js",
  "exam-batch-b51-00.js",
  "exam-batch-b51-02.js",
  "exam-batch-b51-03.js",
  "exam-batch-b51-04.js",
  "exam-batch-b51-05.js",
  "exam-batch-b51-06.js",
  "exam-batch-b51-07.js",
  "exam-batch-b51-08.js",
  "exam-batch-b51-09.js",
  "exam-batch-b51-10.js",
  "exam-batch-b51-11.js",
  "exam-batch-b51-12.js",
  "exam-batch-b51-14.js",
  "exam-batch-b52-01.js",
  "exam-batch-b52-01b.js",
  "exam-batch-b52-02.js",
  "exam-batch-b52-03.js",
  "exam-batch-b52-04.js",
  "friends-01.js",
  "friends.js",
  "grade-11-20.js",
  "shakil-sir.js",
  "tutor-academy-01.js",
  "tutor-academy-02.js",
  "tutor-academy-03.js",
  "tutor-academy-04.js",
  "tutor-academy-05.js",
  "tutor-academy-06.js",
  "tutor-academy-07.js",
  "tutor-academy-08.js",
  "tutor-academy-09.js",
  "tutor-academy-10.js",
  "tutor-academy-11.js",
  "tutor-academy-12.js",
  "tutor-academy.js",
];

PB.site = {
  title: "প্রশ্নভান্ডার",
  tagline: "কালেকশন খুলুন → সেট বেছে নিন → পরীক্ষা দিন, সাথে সাথে স্কোর দেখুন।"
};

PB.collections = [
  { id: "tutor-academy", icon: "🏫", title: "টিউটর একাডেমি", desc: "টিউটর একাডেমির পরীক্ষা ও মডেল টেস্ট",
    subs: [
      { id: "daily-exam", title: "ডেইলি এক্সাম" },
      { id: "periodic-revision", title: "পিরিয়ডিক রিভিশন" },
      { id: "model-test", title: "মডেল টেস্ট" },
    ] },
  { id: "shakil-sir", icon: "👨‍🏫", title: "শাকিল স্যারের প্রশ্ন", desc: "স্যারের মডেল টেস্ট ও প্রশ্নব্যাংক",
    subs: [
      { id: "youth-officer", title: "যুব উন্নয়ন কর্মকর্তা" },
      { id: "model-test", title: "মডেল টেস্ট" },
      { id: "daily-exam", title: "দৈনিক পরীক্ষা" },
    ] },
  { id: "friends", icon: "🤝", title: "বন্ধুদের প্রশ্ন", desc: "বন্ধুদের শেয়ার করা প্রশ্ন",
    subs: [
      { id: "group-study", title: "গ্রুপ স্টাডি" },
      { id: "shared", title: "শেয়ার করা সেট" },
    ] },
  { id: "bcs", icon: "🏛️", title: "বিসিএস কনফিডেন্স", desc: "বিসিএস প্রিলি ও মডেল টেস্ট",
    subs: [
      { id: "prelim", title: "প্রিলিমিনারি (বিগত বছর)" },
      { id: "model", title: "বিসিএস মডেল টেস্ট" },
      { id: "subject", title: "বিষয়ভিত্তিক" },
    ] },
  { id: "admission", icon: "📚", title: "এক্সাম ব্যাচ (লাইব্রেরি)", desc: "লাইব্রেরি এক্সাম ব্যাচ",
    subs: [
      { id: "batch-51", title: "৫১তম প্রিলি. ও কম্বাইন্ড ব্যাচ" },
      { id: "batch-52", title: "৫২তম প্রিলি. ও কম্বাইন্ড ব্যাচ" },
      { id: "college", title: "অন্যান্য পরীক্ষা" },
    ] },
  { id: "grade-11-20", icon: "📋", title: "১১-২০ গ্রেড প্রস্তুতি", desc: "১১ থেকে ২০ গ্রেডের নিয়োগ পরীক্ষার প্রস্তুতি",
    subs: [
      { id: "previous", title: "বিগত বছরের প্রশ্ন" },
      { id: "model", title: "মডেল টেস্ট" },
    ] },
];
