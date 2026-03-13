console.log("Course website loaded");

// FAQ
  const faqs = [
    {
      q: `Berapa lama durasi kegiatan belajar mengajar?`,
      a: 
      `
Untuk bimbel adalah 90 menit, <br>
Untuk Mandarin adalah 60 menit.
      `
    },
    {
      q: "Bagaimana sistem program pertemuan les yang tersedia?",
      a: "Kami ada berbagai pertemuan les dari 1x pertemuan sampai 5x pertemuan dalam seminggu."
    },
    {
      q: "Dari mana asal para tutor yang mengajar?",
      a: "Tutor yang sudah berpengalaman dan menyenangkan, nilai plusnya masih muda semua lohh..."
    },
    {
      q: "Fasilitas apa saja yang akan didapatkan?",
      a: "Mulai dari free trial, suasana ruangan yang nyaman, ruang tunggu yang adem, dsb."
    },
    {
      q: "Bagaimana pengaturan jadwal les?",
      a: "Jadwal yang fleksibel disesuaikan dengan murid dan tutor."
    },
    {
      q: "Berapa jenis kelas yang tersedia?",
      a: 
      `
Kelas private (1-on-1) <br>
Kelas reguler (3-5 orang dalam satu kelas).
      `
    }
  ];

  let index = 0;

  const question = document.getElementById("question");
  const answer = document.getElementById("answer");
  const counter = document.getElementById("counter");
  const dotsContainer = document.getElementById("dots");

  function renderDots() {
    dotsContainer.innerHTML = "";
    faqs.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === index) dot.classList.add("active");
      dotsContainer.appendChild(dot);
    });
  }

  function showFAQ() {
    question.textContent = faqs[index].q;
    answer.innerHTML = faqs[index].a;
    counter.textContent = `${index + 1} / ${faqs.length}`;
    renderDots();
  }

  function nextFAQ() {
    index++;
    if (index >= faqs.length) index = 0;
    showFAQ();
  }

  function prevFAQ() {
    index--;
    if (index < 0) index = faqs.length - 1;
    showFAQ();
  }

  showFAQ();
// FAQ