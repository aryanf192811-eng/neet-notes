const MANIFEST = {
  subjects: [
    {
      id: "physics",
      icon: "âš›ï¸",
      iconStyle: "ti-ph",
      themeColor: "ab (blue)",
      label: "7 Files Â· Physics Master System Â· Class 11 & 12",
      title: "Physics",
      titleEm: "Mechanics to Modern Physics",
      titleColor: "t-ph",
      sub: "PYQ cheatsheets + formula intelligence system Â· full Class 11 & 12 coverage.",
      branches: [
        {
          label: "Class 11 â€” Foundation Â· 2 Files",
          notes: [
            { num: "01", title: "Physics 11 â€” PYQ Master Cheatsheet", desc: "Mechanics Â· Waves Â· Thermodynamics Â· KTG Â· SHM Â· Rotational Dynamics", file: "notes/neet-physics-11-fixed_copy.html", type: "pyq", live: true },
            { num: "02", title: "Physics 11 â€” Formula Intelligence System", desc: "Complete formula sheets Â· PYQ traps Â· Shortcut maps Â· Quick revision reference", file: "notes/neet11_final.html", type: "formula", live: true }
          ]
        },
        {
          label: "Class 12 â€” Advanced Â· 5 Files",
          notes: [
            { num: "03", title: "Electrostatics â€” PYQ Master Cheatsheet", desc: "Coulomb's Law Â· Gauss's Law Â· Capacitors Â· Electric Field & Potential Â· Conductors", file: "notes/neet-physics-12-electrostatics__2_.html", type: "pyq", live: true },
            { num: "04", title: "Electromagnetism â€” PYQ Master Cheatsheet", desc: "Magnetic Force Â· EMI Â· Faraday's Law Â· AC Circuits Â· Transformers Â· Lenz's Law", file: "notes/neet-physics-12-electromagnetism.html", type: "pyq", live: true },
            { num: "05", title: "Optics â€” PYQ Master Cheatsheet", desc: "Ray Optics Â· Wave Optics Â· Refraction Â· Reflection Â· Interference Â· Diffraction", file: "notes/neet-physics-12-optics.html", type: "pyq", live: true },
            { num: "06", title: "Modern Physics â€” PYQ Master Cheatsheet", desc: "Photoelectric Effect Â· Dual Nature Â· Atomic Models Â· Nuclei Â· Semiconductors", file: "notes/neet-physics-12-modern-physics.html", type: "pyq", live: true },
            { num: "07", title: "Physics 12 â€” Complete Formula Sheet", desc: "All formulae Â· Unit cheatsheet Â· PYQ patterns Â· Derivation shortcuts", file: "notes/neet12_final.html", type: "formula", live: true }
          ]
        }
      ]
    },
    {
      id: "chem",
      icon: "ðŸ§ª",
      iconStyle: "ti-ch",
      themeColor: "at (teal)",
      label: "Inorganic · Physical · Organic · 5 Live",
      title: "Chemistry",
      titleEm: "Three Branches",
      titleColor: "t-ch",
      sub: "Inorganic + Organic 11 & 12 live · Physical Chemistry 11 & 12 Intelligence System live · Complete NCERT coverage.",
      branches: [
        {
          label: "Inorganic Chemistry Â· 1 Live",
          notes: [
            { num: "C1", title: "Inorganic Chemistry â€” PYQ Master Cheatsheet v2", desc: "p-Block Â· d-Block Â· Coordination Compounds Â· Metallurgy Â· Qualitative Analysis", file: "notes/neet-inorganic-v2.html", type: "pyq", live: true }
          ]
        },
        {
          label: "Physical Chemistry · 2 Live",
          notes: [
            { num: "C4", title: "Physical Chemistry 11 — Complete Intelligence System", desc: "Mole Concept · Atomic Structure · States of Matter · Thermodynamics · Chemical & Ionic Equilibrium · pH · Buffers · Ksp · PYQ 2015–2025 · Decision Engine", file: "notes/neet-chem-physical-11.html", type: "pyq", live: true },
            { num: "C5", title: "Physical Chemistry 12 — Complete Intelligence System", desc: "Solutions · Electrochemistry · Chemical Kinetics · Practicals · PYQ mapped", file: "notes/neet-chem-physical-12.html", type: "pyq", live: true }
          ]
        },
        {
          label: "Organic Chemistry · 2 Live",
          notes: [
            { num: "C2", title: "Organic Chemistry 11 — PYQ Master Cheatsheet", desc: "Reaction mechanisms · Inductive effect · Resonance · Alkanes · Alkenes · Alkynes", file: "notes/neet-chem-organic-11.html", type: "pyq", live: true },
            { num: "C3", title: "Organic Chemistry 12 — Complete NEET Intelligence System", desc: "Haloalkanes · Alcohols, Phenols & Ethers · Aldehydes, Ketones & Carboxylic Acids · Amines · Biomolecules · SN1/SN2 · Named Reactions · PYQ 2009–2025 · NCERT Fully Mapped", file: "notes/neet-chem-organic-12.html", type: "pyq", live: true }
          ]
        }
      ]
    },
    {
      id: "bio",
      icon: "ðŸ§¬",
      iconStyle: "ti-bi",
      themeColor: "ag (green)",
      label: "Botany Â· Zoology Â· Genetics Â· Ecology Â· All Live",
      title: "Biology",
      titleEm: "Complete Biology",
      titleColor: "t-bi",
      sub: "All 4 biology modules live â€” Botany, Zoology, Genetics, Ecology. Decision Engine in every file.",
      branches: [
        {
          label: "Botany",
          notes: [
            { num: "B1", title: "Botany Complete â€” PYQ Master Cheatsheet", desc: "Plant Kingdom Â· Morphology Â· Plant Physiology Â· Photosynthesis Â· Respiration Â· Reproduction Â· PYQ 2009â€“2025 Â· NCERT Fully Mapped", file: "notes/neet-botany-complete.html", type: "pyq", live: true }
          ]
        },
        {
          label: "Zoology",
          notes: [
            { num: "B2", title: "Zoology Complete â€” PYQ Master Cheatsheet", desc: "Animal Kingdom Â· Human Physiology Â· Reproduction Â· Deep Analysis Â· Bonus Content", file: "notes/neet-zoology-complete.html", type: "pyq", live: true }
          ]
        },
        {
          label: "Genetics & Ecology",
          notes: [
            { num: "B3", title: "Genetics, Molecular Biology & Evolution â€” PYQ Master Cheatsheet", desc: "Mendel's Laws Â· Chromosomal Theory Â· DNA Structure Â· Replication Â· Transcription Â· Translation Â· Mutations Â· Evolution Â· Biotechnology Â· PYQ 2009â€“2025", file: "notes/neet-genetics-complete.html", type: "pyq", live: true },
            { num: "B4", title: "Ecology & Environment â€” PYQ Master Cheatsheet", desc: "Ecosystems Â· Food Chains Â· Energy Flow Â· Biodiversity Â· Conservation Â· Ecological Succession Â· Environmental Issues Â· PYQ 2009â€“2025", file: "notes/neet-ecology-complete.html", type: "pyq", live: true }
          ]
        }
      ]
    }
  ]
};

