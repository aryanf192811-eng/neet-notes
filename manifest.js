const MANIFEST = {
  subjects: [
    {
      id: "physics",
      icon: "⚛️",
      iconStyle: "ti-ph",
      themeColor: "ab (blue)",
      label: "7 Files · Physics Master System · Class 11 & 12",
      title: "Physics",
      titleEm: "Mechanics to Modern Physics",
      titleColor: "t-ph",
      sub: "PYQ cheatsheets + formula intelligence system · full Class 11 & 12 coverage.",
      branches: [
        {
          label: "Class 11 — Foundation · 2 Files",
          notes: [
            { num: "01", title: "Physics 11 — PYQ Master Cheatsheet", desc: "Mechanics · Waves · Thermodynamics · KTG · SHM · Rotational Dynamics", file: "notes/neet-physics-11-fixed_copy.html", type: "pyq", live: true },
            { num: "02", title: "Physics 11 — Formula Intelligence System", desc: "Complete formula sheets · PYQ traps · Shortcut maps · Quick revision reference", file: "notes/neet11_final.html", type: "formula", live: true }
          ]
        },
        {
          label: "Class 12 — Advanced · 5 Files",
          notes: [
            { num: "03", title: "Electrostatics — PYQ Master Cheatsheet", desc: "Coulomb's Law · Gauss's Law · Capacitors · Electric Field & Potential · Conductors", file: "notes/neet-physics-12-electrostatics__2_.html", type: "pyq", live: true },
            { num: "04", title: "Electromagnetism — PYQ Master Cheatsheet", desc: "Magnetic Force · EMI · Faraday's Law · AC Circuits · Transformers · Lenz's Law", file: "notes/neet-physics-12-electromagnetism.html", type: "pyq", live: true },
            { num: "05", title: "Optics — PYQ Master Cheatsheet", desc: "Ray Optics · Wave Optics · Refraction · Reflection · Interference · Diffraction", file: "notes/neet-physics-12-optics.html", type: "pyq", live: true },
            { num: "06", title: "Modern Physics — PYQ Master Cheatsheet", desc: "Photoelectric Effect · Dual Nature · Atomic Models · Nuclei · Semiconductors", file: "notes/neet-physics-12-modern-physics.html", type: "pyq", live: true },
            { num: "07", title: "Physics 12 — Complete Formula Sheet", desc: "All formulae · Unit cheatsheet · PYQ patterns · Derivation shortcuts", file: "notes/neet12_final.html", type: "formula", live: true }
          ]
        }
      ]
    },
    {
      id: "chem",
      icon: "🧪",
      iconStyle: "ti-ch",
      themeColor: "at (teal)",
      label: "Inorganic · Physical · Organic · Live",
      title: "Chemistry",
      titleEm: "Three Branches",
      titleColor: "t-ch",
      sub: "Inorganic PYQ cheatsheet live · Physical & Organic notes incoming.",
      branches: [
        {
          label: "Inorganic Chemistry · 1 Live",
          notes: [
            { num: "C1", title: "Inorganic Chemistry — PYQ Master Cheatsheet v2", desc: "p-Block · d-Block · Coordination Compounds · Metallurgy · Qualitative Analysis", file: "notes/neet-inorganic-v2.html", type: "pyq", live: true }
          ]
        },
        {
          label: "Physical Chemistry · Incoming",
          notes: [
            { num: "—", title: "Thermodynamics & Chemical Equilibrium", desc: "Laws of thermo · ΔG · Kp Kc · Le Chatelier's Principle · Hess's Law", file: "", live: false },
            { num: "—", title: "Electrochemistry & Chemical Kinetics", desc: "Nernst Equation · EMF · Rate Laws · Arrhenius Equation · Half-life", file: "", live: false },
            { num: "—", title: "Solutions & Colligative Properties", desc: "Raoult's Law · Boiling elevation · Freezing depression · Osmosis · Van't Hoff", file: "", live: false }
          ]
        },
        {
          label: "Organic Chemistry · 1 Live",
          notes: [
            { num: "C2", title: "Organic Chemistry 11 — PYQ Master Cheatsheet", desc: "Reaction mechanisms · Inductive effect · Resonance · Alkanes · Alkenes · Alkynes", file: "notes/neet-chem-organic-11.html", type: "pyq", live: true },
            { num: "—", title: "Functional Groups & Named Reactions", desc: "Alcohols · Aldehydes · Ketones · Carboxylic Acids · Amines · Biomolecules", file: "", live: false }
          ]
        }
      ]
    },
    {
      id: "bio",
      icon: "🧬",
      iconStyle: "ti-bi",
      themeColor: "ag (green)",
      label: "Botany · Zoology · Genetics · Ecology",
      title: "Biology",
      titleEm: "Botany & Zoology",
      titleColor: "t-bi",
      sub: "Human physiology, plant biology, genetics, evolution and ecology — all incoming.",
      branches: [
        {
          label: "Botany",
          notes: [
            { num: "B1", title: "Botany Complete — PYQ Master Cheatsheet", desc: "Plant Kingdom · Morphology · Plant Physiology · Photosynthesis · Respiration · Reproduction · PYQ 2009–2025 · NCERT Fully Mapped", file: "notes/neet-botany-complete.html", type: "pyq", live: true }
          ]
        },
        {
          label: "Zoology",
          notes: [
            { num: "B2", title: "Zoology Complete — PYQ Master Cheatsheet", desc: "Animal Kingdom · Human Physiology · Reproduction · Deep Analysis · Bonus Content", file: "notes/neet-zoology-complete.html", type: "pyq", live: true }
          ]
        },
        {
          label: "Genetics & Ecology",
          notes: [
            { num: "—", title: "Genetics, Molecular Biology & Evolution", desc: "Mendel's Laws · DNA Replication · Transcription · Translation · Biotechnology", live: false },
            { num: "—", title: "Ecology & Environment", desc: "Ecosystems · Food chains · Biodiversity · Conservation · Ecological Succession", live: false }
          ]
        }
      ]
    }
  ]
};
