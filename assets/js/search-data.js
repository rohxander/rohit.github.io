// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Industrial systems, firmware applications, and personal experiments.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A concise overview of my academic journey, professional experience, and technical competencies — designed to reflect both my depth as an engineer and my versatility across domains. For a full downloadable version, use the link above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-dream-a-6g-ready-architecture-for-disaster-response",
        
          title: "DREAM: A 6G-Ready Architecture for Disaster Response",
        
        description: "How 6G concepts can be used to rapidly restore critical communication networks during natural disasters.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/6g_for_all_Report/";
          
        },
      },{id: "post-visions-for-6g-building-smarter-and-more-connected-networks",
        
          title: "Visions for 6G: Building Smarter and More Connected Networks",
        
        description: "A simple and clear explanation of what 6G networks aim to achieve, and how they will change the way we connect and communicate in the future.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/visions-for-6g-copy/";
          
        },
      },{id: "post-rssi-fingerprinting-in-iot-a-modern-approach-to-indoor-localization",
        
          title: "RSSI Fingerprinting in IoT: A Modern Approach to Indoor Localization",
        
        description: "An exploration of RSSI-based localization and fingerprinting techniques—highlighting methods, challenges, and intelligent enhancements for future IoT systems.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/RSSI-Fingerprinting-in-IoT/";
          
        },
      },{id: "books-the-almanack-of-naval-ravikant",
          title: 'The Almanack of Naval Ravikant',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/naval_ravikant/";
            },},{id: "books-the-stranger",
          title: 'The Stranger',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_stranger/";
            },},{id: "news-completed-a-2-year-tenure-at-microchip-technology-as-application-engineer-shipped-enterprise-wi-fi-security-wpa2-wpa3-uart-flow-control-at-25-mbps-qspi-flash-drivers-and-supported-global-certifications-fcc-ce-tüv",
          title: '🔧 Completed a 2-year tenure at Microchip Technology as Application Engineer — shipped...',
          description: "",
          section: "News",},{id: "news-started-my-m-sc-in-information-amp-amp-communication-technology-at-fau-erlangen-nürnberg-diving-deep-into-embedded-systems-wireless-communication-mimo-and-ai",
          title: '🎓 Started my M.Sc. in Information &amp;amp;amp; Communication Technology at FAU Erlangen-Nürnberg —...',
          description: "",
          section: "News",},{id: "news-joined-exasol-ag-in-nuremberg-as-a-working-student-in-it-operations-amp-amp-analytics-building-power-bi-dashboards-supporting-salesforce-workflows-and-debugging-internal-systems",
          title: '💼 Joined Exasol AG in Nuremberg as a Working Student in IT Operations...',
          description: "",
          section: "News",},{id: "news-portfolio-redesigned-and-launched-a-clean-futuristic-space-to-showcase-projects-writing-and-engineering-work-built-with-jekyll-and-deployed-on-github-pages",
          title: '🚀 Portfolio redesigned and launched — a clean, futuristic space to showcase projects,...',
          description: "",
          section: "News",},{id: "projects-high-speed-uart-flow-control-application",
          title: 'High-Speed UART Flow Control Application',
          description: "Validating RTS/CTS hardware flow control on PIC32 at speeds up to 25 Mbps.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-wi-fi-enterprise-security-application",
          title: 'Wi‑Fi Enterprise Security Application',
          description: "Implemented WPA2/WPA3 Enterprise (TTLS/TLS/PEAP) with FreeRADIUS integration on WFI32 modules.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-qspi-validation-application",
          title: 'QSPI Validation Application',
          description: "Integrated and validated QSPI/SQI flash interface on Microchip modules.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-class-b-functional-safety-certification",
          title: 'Class-B Functional Safety Certification',
          description: "Assisted in validating error-catch mechanisms for SRAM, FLASH, CPU, and I/O to support EN/IEC 60730 Class-B safety certification on PIC32MZW1.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-tüv-certification-amp-module-validation",
          title: 'TÜV Certification &amp;amp; Module Validation',
          description: "Developed IPv6-compatible firmware applications to support CE/FCC certification and validate UART, SPI, I2C, ADC, PWM, Ethernet, and Wi-Fi peripherals on PIC32MZW1.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-python-uart-based-alphabet-recognition",
          title: 'Python UART-Based Alphabet Recognition',
          description: "Built a Python GUI to read QT8 touchpad input over UART and recognize alphabet characters from 5x5 touch matrices.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%6F%68%69%74.%70%72%61%6B%61%73%68@%66%61%75.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rohxander", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rohitprakashmk", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/RohitPrakash97", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
