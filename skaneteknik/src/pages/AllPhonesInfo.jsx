const phoneRepairPrices = {
    //Samsung Reperation priser
  samsung: {
    aSeries: {
      title: "Samsung A-Series Reparationspriser",
      models: [
        { 
          model: "Galaxy A02s", 
          repairs: [
            { type: "Skärmbyte", price: 890 },
          ]
        },
        { 
          model: "Galaxy A10", 
          repairs: [
            { type: "Skärmbyte", price: 890 },
          ]
        },
        { 
          model: "Galaxy A12", 
          repairs: [
            { type: "Skärmbyte", price: 990 },
          ]
        },
        { 
          model: "Galaxy A20", 
          repairs: [
            { type: "Skärmbyte", price: 800 },
          ]
        },
        { 
          model: "Galaxy A21s", 
          repairs: [
            { type: "Skärmbyte", price: 990 },
          ]
        },
        { 
          model: "Galaxy A21e", 
          repairs: [
            { type: "Skärmbyte", price: 990 },
          ]
        },
        { 
          model: "Galaxy A22 5G/4G", 
          repairs: [
            { type: "Skärmbyte", price: 1190 },
          ]
        },
        { 
          model: "Galaxy A30s", 
          repairs: [
            { type: "Skärmbyte", price: 1100 },
          ]
        },
        { 
          model: "Galaxy A31", 
          repairs: [
            { type: "Skärmbyte", price: 1190 },
          ]
        },
        { 
          model: "Galaxy A32 5G", 
          repairs: [
            { type: "Skärmbyte", price: 1200 },
          ]
        },
        { 
          model: "Galaxy A32 4G", 
          repairs: [
            { type: "Skärmbyte", price: 1190 },
          ]
        },
        { 
          model: "Galaxy A40", 
          repairs: [
            { type: "Skärmbyte", price: 1390 },
          ]
        },
        { 
          model: "Galaxy A41", 
          repairs: [
            { type: "Skärmbyte", price: 1490 },
          ]
        },
        { 
          model: "Galaxy A50", 
          repairs: [
            { type: "Skärmbyte", price: 1490 },
          ]
        },
        { 
          model: "Galaxy A51", 
          repairs: [
            { type: "Skärmbyte", price: 1690 }
          ]
        },
        { 
          model: "Galaxy A52", 
          repairs: [
            { type: "Skärmbyte", price: 1690 },
          ]
        },
        { 
          model: "Galaxy A52s", 
          repairs: [
            { type: "Skärmbyte", price: 1690 },
          ]
        },
        { 
          model: "Galaxy A53", 
          repairs: [
            { type: "Skärmbyte", price: 1690 },
          ]
        },
        { 
          model: "Galaxy A54", 
          repairs: [
            { type: "Skärmbyte", price: 1690 },
          ]
        },
        { 
          model: "Galaxy A70", 
          repairs: [
            { type: "Skärmbyte", price: 1390 }
          ]
        },
        { 
          model: "Galaxy A71", 
          repairs: [
            { type: "Skärmbyte", price: 1690 },
          ]
        },
        { 
          model: "Galaxy A72", 
          repairs: [
            { type: "Skärmbyte", price: 1690 },
          ]
        },
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" },
      ],
      legacyModels: {
        a3: {
          title: "Galaxy A3",
          models: [
            { 
              year: "2015",
              repairs: [
                { type: "Skärmbyte", price: 1099 },
                { type: "Baksidebyte", price: 550 }
              ]
            },
            { 
              year: "2016",
              repairs: [
                { type: "Skärmbyte", price: 1299 },
                { type: "Baksidebyte", price: 550 }
              ]
            },
            { 
              year: "2017",
              repairs: [
                { type: "Skärmbyte", price: 1299 },
                { type: "Baksidebyte", price: 550 }
              ]
            }
          ]
        },
        a5: {
          title: "Galaxy A5",
          models: [
            { 
              year: "2015",
              repairs: [
                { type: "Skärmbyte", price: 1099 },
                { type: "Baksidebyte", price: 550 }
              ]
            },
            { 
              year: "2016",
              repairs: [
                { type: "Skärmbyte", price: 1299 },
                { type: "Baksidebyte", price: 550 }
              ]
            },
            { 
              year: "2017",
              repairs: [
                { type: "Skärmbyte", price: 1399 },
                { type: "Baksidebyte", price: 550 }
              ]
            }
          ]
        },
        a7: {
          title: "Galaxy A7",
          models: [
            { 
              year: "2015",
              repairs: [
                { type: "Skärmbyte", price: 1299 }
              ]
            }
          ]
        }
      }
    },
    noteSeries: {
      title: "Samsung Note-Series Reparationspriser",
      models: [
        {
          model: "Galaxy Note 20 Ultra",
          repairs: [
            { type: "Skärmbyte", price: 3950 }
          ]
        },
        {
          model: "Galaxy Note 20",
          repairs: [
            { type: "Skärmbyte", price: 2990 }
          ]
        },
        {
          model: "Galaxy Note 10 Plus",
          repairs: [
            { type: "Skärmbyte", price: 3480 }
          ]
        },
        {
          model: "Galaxy Note 10",
          repairs: [
            { type: "Skärmbyte", price: 2990 }
          ]
        },
        {
          model: "Galaxy Note 10 Lite",
          repairs: [
            { type: "Skärmbyte", price: 2300 }
          ]
        },
        {
          model: "Galaxy Note 9",
          repairs: [
            { type: "Skärmbyte", price: 2990 }
          ]
        },
        {
          model: "Galaxy Note 8",
          repairs: [
            { type: "Skärmbyte", price: 2800 },
            { type: "Baksidebyte", price: 790 },
            { type: "Batteribyte", price: 790 }
          ]
        },
        {
          model: "Galaxy Note Edge",
          repairs: [
            { type: "Skärmbyte", price: 1990 }
          ]
        },
        {
          model: "Galaxy Note 4",
          repairs: [
            { type: "Skärmbyte", price: 1890 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    s7Series: {
      title: "Samsung S7-Series Reparationspriser",
      models: [
        {
          model: "Galaxy S7",
          repairs: [
            { type: "Skärmbyte", price: 1390 },
            { type: "Baksidebyte", price: 590 },
            { type: "Bakkamerabyte", price: 790 },
            { type: "Framkamerabyte", price: 590 },
            { type: "Sensorbyte", price: 590 },
            { type: "Batteribyte", price: 690 },
            { type: "Volymknappsbyte", price: 490 },
            { type: "On/Off knapp", price: 690 },
            { type: "Högtalarbyte", price: 690 },
            { type: "Laddportsbyte", price: 790 },
            { type: "Samtalshögtalarbyte", price: 690 },
            { type: "Mikrofonbyte", price: 790 },
          ]
        },
        {
          model: "Galaxy S7 Edge",
          repairs: [
            { type: "Skärmbyte", price: 2390 },
            { type: "Baksidebyte", price: 590 },
            { type: "Bakkamerabyte", price: 790 },
            { type: "Framkamerabyte", price: 590 },
            { type: "Sensorbyte", price: 590 },
            { type: "Batteribyte", price: 690 },
            { type: "Volymknappsbyte", price: 490 },
            { type: "On/Off knapp", price: 690 },
            { type: "Högtalarbyte", price: 690 },
            { type: "Laddportsbyte", price: 790 },
            { type: "Samtalshögtalarbyte", price: 690 },
            { type: "Mikrofonbyte", price: 790 },
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    s8Series: {
      title: "Samsung S8-Series Reparationspriser",
      models: [
        {
          model: "Galaxy S8",
          repairs: [
            { type: "Skärmbyte", price: 1990 },
            { type: "Baksidebyte", price: 890 },
            { type: "Bakkamerabyte", price: 690 },
            { type: "Framkamerabyte", price: 690 },
            { type: "Sensorbyte", price: 590 },
            { type: "Batteribyte", price: 590 },
            { type: "Volymknappsbyte", price: 590 },
            { type: "On/Off knapp", price: 890 },
            { type: "Högtalarbyte", price: 750 },
            { type: "Laddportsbyte", price: 760 },
            { type: "Mikrofonbyte", price: 760 }
          ]
        },
        {
          model: "Galaxy S8 Plus",
          repairs: [
            { type: "Skärmbyte", price: 2499 },
            { type: "Baksidebyte", price: 740 },
            { type: "Bakkamerabyte", price: 690 },
            { type: "Framkamerabyte", price: 690 },
            { type: "Sensorbyte", price: 590 },
            { type: "Batteribyte", price: 590 },
            { type: "Volymknappsbyte", price: 590 },
            { type: "On/Off knapp", price: 890 },
            { type: "Högtalarbyte", price: 750 },
            { type: "Laddportsbyte", price: 760 },
            { type: "Mikrofonbyte", price: 760 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    s9Series: {
      title: "Samsung S9-Series Reparationspriser",
      models: [
        {
          model: "Galaxy S9",
          repairs: [
            { type: "Skärmbyte", price: 2390 },
            { type: "Baksidebyte", price: 740 },
            { type: "Bakkamerabyte", price: 790 },
            { type: "Framkamerabyte", price: 690 },
            { type: "Sensorbyte", price: 590 },
            { type: "Batteribyte", price: 690 },
            { type: "Volymknappsbyte", price: 690 },
            { type: "On/Off knapp", price: 690 },
            { type: "Högtalarbyte", price: 790 },
            { type: "Laddportsbyte", price: 690 },
            { type: "Mikrofonbyte", price: 890 }
          ]
        },
        {
          model: "Galaxy S9 Plus",
          repairs: [
            { type: "Skärmbyte", price: 2490 },
            { type: "Baksidebyte", price: 740 },
            { type: "Bakkamerabyte", price: 790 },
            { type: "Framkamerabyte", price: 690 },
            { type: "Sensorbyte", price: 590 },
            { type: "Batteribyte", price: 690 },
            { type: "Volymknappsbyte", price: 690 },
            { type: "On/Off knapp", price: 690 },
            { type: "Högtalarbyte", price: 790 },
            { type: "Laddportsbyte", price: 690 },
            { type: "Mikrofonbyte", price: 890 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    s10Series: {
      title: "Samsung S10-Series Reparationspriser",
      models: [
        {
          model: "Galaxy S10",
          repairs: [
            { type: "Skärmbyte", price: 2990 },
            { type: "Baksidebyte", price: 799 },
            { type: "Bakkamerabyte", price: "Kontakta oss" },
            { type: "Framkamerabyte", price: "Kontakta oss" },
            { type: "Sensorbyte", price: "Kontakta oss" },
            { type: "Batteribyte", price: 890 },
            { type: "Volymknappsbyte", price: "Kontakta oss" },
            { type: "On/Off knapp", price: "Kontakta oss" },
            { type: "Högtalarbyte", price: "Kontakta oss" },
            { type: "Laddportsbyte", price: "Kontakta oss" },
            { type: "Mikrofonbyte", price: "Kontakta oss" }
          ]
        },
        {
          model: "Galaxy S10 Plus",
          repairs: [
            { type: "Skärmbyte", price: 3200 },
            { type: "Baksidebyte", price: 799 }
          ]
        },
        {
          model: "Galaxy S10E",
          repairs: [
            { type: "Skärmbyte", price: 2400 },
            { type: "Baksidebyte", price: 599 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    s20Series: {
      title: "Samsung S20-Series Reparationspriser",
      models: [
        {
          model: "Galaxy S20",
          repairs: [
            { type: "Skärmbyte", price: 3300 },
            { type: "Baksidebyte", price: 799 },
            { type: "Bakkamerabyte", price: "Kontakta oss" },
            { type: "Framkamerabyte", price: "Kontakta oss" },
            { type: "Sensorbyte", price: "Kontakta oss" },
            { type: "Batteribyte", price: 890 },
            { type: "Volymknappsbyte", price: "Kontakta oss" },
            { type: "On/Off knapp", price: "Kontakta oss" },
            { type: "Högtalarbyte", price: "Kontakta oss" },
            { type: "Laddportsbyte", price: "Kontakta oss" },
            { type: "Mikrofonbyte", price: "Kontakta oss" }
          ]
        },
        {
          model: "Galaxy S20 Plus",
          repairs: [
            { type: "Skärmbyte", price: 3300 },
            { type: "Baksidebyte", price: 899 }
          ]
        },
        {
          model: "Galaxy S20 Ultra",
          repairs: [
            { type: "Skärmbyte", price: 3700 },
            { type: "Baksidebyte", price: 990 }
          ]
        },
        {
          model: "Galaxy S20 FE",
          repairs: [
            { type: "Skärmbyte", price: 2490 },
            { type: "Baksidebyte", price: 699 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    s21Series: {
      title: "Samsung S21-Series Reparationspriser",
      models: [
        {
          model: "Galaxy S21",
          repairs: [
            { type: "Skärmbyte", price: 2800 }
          ]
        },
        {
          model: "Galaxy S21 Plus",
          repairs: [
            { type: "Skärmbyte", price: 2800 }
          ]
        },
        {
          model: "Galaxy S21 Ultra",
          repairs: [
            { type: "Skärmbyte", price: 4290 }
          ]
        },
        {
          model: "Galaxy S21 FE",
          repairs: [
            { type: "Skärmbyte", price: 2400 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    s22Series: {
      title: "Samsung S22-Series Reparationspriser",
      models: [
        {
          model: "Galaxy S22",
          repairs: [
            { type: "Skärmbyte", price: 2900 }
          ]
        },
        {
          model: "Galaxy S22 Plus",
          repairs: [
            { type: "Skärmbyte", price: 3000 }
          ]
        },
        {
          model: "Galaxy S22 Ultra",
          repairs: [
            { type: "Skärmbyte", price: 4290 },
            { type: "Baksidebyte", price: 1090 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    s23Series: {
      title: "Samsung S23-Series Reparationspriser",
      models: [
        {
          model: "Galaxy S23",
          repairs: [
            { type: "Skärmbyte", price: 3200 },
            { type: "Baksidebyte", price: 899 },
            { type: "Bakkamerabyte", price: "Kontakta oss" },
            { type: "Framkamerabyte", price: "Kontakta oss" },
            { type: "Sensorbyte", price: "Kontakta oss" },
            { type: "Batteribyte", price: 890 },
            { type: "Volymknappsbyte", price: "Kontakta oss" },
            { type: "On/Off knapp", price: "Kontakta oss" },
            { type: "Högtalarbyte", price: "Kontakta oss" },
            { type: "Laddportsbyte", price: "Kontakta oss" },
            { type: "Mikrofonbyte", price: "Kontakta oss" }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    }
  },
  huawei: {
    p9Series: {
      title: "Huawei P-Series Reparationspriser",
      models: [
        {
          model: "Huawei P9",
          repairs: [
            { type: "Skärmbyte", price: 1390 }
          ]
        },
        {
          model: "Huawei P9 Plus",
          repairs: [
            { type: "Skärmbyte", price: 1490 }
          ]
        },
        {
          model: "Huawei P9 Lite",
          repairs: [
            { type: "Skärmbyte", price: 1090 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Moderkortslödning", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    honor8Series: {
      title: "Huawei Honor 8 Reparationspriser",
      models: [
        {
          model: "Honor 8",
          repairs: [
            { type: "Skärmbyte", price: 1590 },
            { type: "Batteribyte", price: 690 },
            { type: "Sensorbyte", price: 790 },
            { type: "Samtalshögtalarbyte", price: 790 },
            { type: "Mikrofonbyte", price: 790 },
            { type: "Bakkamerabyte", price: 1099 },
            { type: "Baksida/Bakglasbyte", price: 1290 },
            { type: "Framkamerabyte", price: 990 },
            { type: "Kameraglasbyte", price: 490 },
            { type: "Laddportsbyte", price: 790 },
            { type: "Bluetoothbyte", price: 690 },
            { type: "Volymknappsbyte", price: 690 },
            { type: "Av/på knappbyte", price: 690 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    p10Series: {
      title: "Huawei P10-Series Reparationspriser",
      models: [
        {
          model: "Huawei P10",
          repairs: [
            { type: "Skärmbyte", price: 1390 }
          ]
        },
        {
          model: "Huawei P10 Plus",
          repairs: [
            { type: "Skärmbyte", price: 1490 }
          ]
        },
        {
          model: "Huawei P10 Lite",
          repairs: [
            { type: "Skärmbyte", price: 1090 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Moderkortslödning", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    p20Series: {
      title: "Huawei P20-Series Reparationspriser",
      models: [
        {
          model: "Huawei P20",
          repairs: [
            { type: "Skärmbyte", price: 1400 }
          ]
        },
        {
          model: "Huawei P20 Pro",
          repairs: [
            { type: "Skärmbyte", price: 2890 }
          ]
        },
        {
          model: "Huawei P20 Lite",
          repairs: [
            { type: "Skärmbyte", price: 990 }
          ]
        },
        {
          model: "Huawei P20 Plus",
          repairs: [
            { type: "Skärmbyte", price: 1490 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Moderkortslödning", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    mate10Series: {
      title: "Huawei Mate 10-Series Reparationspriser",
      models: [
        {
          model: "Huawei Mate 10",
          repairs: [
            { type: "Skärmbyte", price: 1990 }
          ]
        },
        {
          model: "Huawei Mate 10 Pro",
          repairs: [
            { type: "Skärmbyte", price: 2690 }
          ]
        },
        {
          model: "Huawei Mate 10 Lite",
          repairs: [
            { type: "Skärmbyte", price: 1290 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Moderkortslödning", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    honor9Series: {
      title: "Huawei Honor 9 Reparationspriser",
      models: [
        {
          model: "Honor 9",
          repairs: [
            { type: "Skärmbyte", price: 1290 },
            { type: "Baksidebyte", price: 590 }
          ]
        },
        {
          model: "Honor 9 Lite",
          repairs: [
            { type: "Skärmbyte", price: 1090 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Moderkortslödning", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    p30Series: {
      title: "Huawei P30-Series Reparationspriser",
      models: [
        {
          model: "Huawei P30",
          repairs: [
            { type: "Skärmbyte", price: 2200 },
            { type: "Baksidebyte", price: 890 },
            { type: "Laddportbyte", price: 750 },
            { type: "Batteribyte", price: 690 }
          ]
        },
        {
          model: "Huawei P30 Pro",
          repairs: [
            { type: "Skärmbyte", price: 2500 },
            { type: "Baksidebyte", price: 790 },
            { type: "Laddportbyte", price: 750 },
            { type: "Batteribyte", price: 690 }
          ]
        },
        {
          model: "Huawei P30 Lite",
          repairs: [
            { type: "Skärmbyte", price: 1290 },
            { type: "Baksidebyte", price: 790 },
            { type: "Laddportbyte", price: 750 },
            { type: "Batteribyte", price: 690 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Moderkortslödning", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    p40Series: {
      title: "Huawei P40-Series Reparationspriser",
      models: [
        {
          model: "Huawei P40",
          repairs: [
            { type: "Skärmbyte", price: 2400 },
            { type: "Baksidebyte", price: "Kontakta oss" },
            { type: "Laddportbyte", price: "Kontakta oss" },
            { type: "Batteribyte", price: "Kontakta oss" }
          ]
        },
        {
          model: "Huawei P40 Pro",
          repairs: [
            { type: "Skärmbyte", price: 3500 },
            { type: "Baksidebyte", price: "Kontakta oss" },
            { type: "Laddportbyte", price: "Kontakta oss" },
            { type: "Batteribyte", price: "Kontakta oss" }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Moderkortslödning", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    pSmartSeries: {
      title: "Huawei P Smart-Series Reparationspriser",
      models: [
        {
          model: "Huawei P Smart",
          repairs: [
            { type: "Skärmbyte", price: 990 }
          ]
        },
        {
          model: "Huawei P Smart 2019",
          repairs: [
            { type: "Skärmbyte", price: 1290 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 300 },
        { service: "Fuktsanering", price: 699 },
        { service: "Moderkortslödning", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    }
  },
  sony: {
    xzSeries: {
      title: "Sony XZ-Series Reparationspriser",
      models: [
        {
          model: "Xperia XZ",
          repairs: [
            { type: "Skärmbyte", price: 1490 },
            { type: "Batteribyte", price: 690 },
            { type: "Baksidebyte", price: 690 },
            { type: "Laddportsbyte", price: 690 },
            { type: "Mikrofonbyte", price: 690 },
            { type: "Hörlursuttagsbyte", price: 690 },
            { type: "Framkamerabyte", price: 690 },
            { type: "Bakkamerabyte", price: 690 },
            { type: "Samtalshögtalarbyte", price: 690 },
            { type: "Högtalarbyte", price: 690 },
            { type: "Volymknappsbyte", price: 690 },
            { type: "På/av knappsbyte", price: 690 }
          ]
        },
        {
          model: "Xperia XZ Premium",
          repairs: [
            { type: "Skärmbyte", price: 1490 },
            { type: "Batteribyte", price: 690 },
            { type: "Baksidebyte", price: 690 },
            { type: "Laddportsbyte", price: 690 },
            { type: "Mikrofonbyte", price: 690 },
            { type: "Hörlursuttagsbyte", price: 690 },
            { type: "Framkamerabyte", price: 690 },
            { type: "Bakkamerabyte", price: 690 },
            { type: "Samtalshögtalarbyte", price: 690 },
            { type: "Högtalarbyte", price: 690 },
            { type: "Volymknappsbyte", price: 690 },
            { type: "På/av knappsbyte", price: 690 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 250 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    xSeries: {
      title: "Sony X-Series Reparationspriser",
      models: [
        {
          model: "Xperia X",
          repairs: [
            { type: "Skärmbyte", price: 1090 },
            { type: "Batteribyte", price: 590 },
            { type: "Baksidebyte", price: 590 },
            { type: "Laddportsbyte", price: 590 },
            { type: "Mikrofonbyte", price: 590 },
            { type: "Hörlursuttagsbyte", price: 590 },
            { type: "Framkamerabyte", price: 590 },
            { type: "Bakkamerabyte", price: 590 },
            { type: "Samtalshögtalarbyte", price: 590 },
            { type: "Högtalarbyte", price: 590 },
            { type: "Volymknappsbyte", price: 590 },
            { type: "På/av knappsbyte", price: 590 }
          ]
        },
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 250 },
        { service: "Fuktsanering", price: 699 },
        { service: "Lödningsarbete", price: "från 700" },
        { service: "Mjukvara", price: "från 200" }
      ]
    },
    xPerformanceSeries: {
      title: "Sony X Performance Reparationspriser",
      models: [
        {
          model: "Xperia X Performance",
          repairs: [
            { type: "Skärmbyte", price: 1290 },
            { type: "Batteribyte", price: 590 },
            { type: "Baksidebyte", price: 590 },
            { type: "Laddportsbyte", price: 590 },
            { type: "Mikrofonbyte", price: 590 },
            { type: "Hörlursuttagsbyte", price: 590 },
            { type: "Framkamerabyte", price: 590 },
            { type: "Bakkamerabyte", price: 590 },
            { type: "Samtalshögtalarbyte", price: 590 },
            { type: "Högtalarbyte", price: 590 },
            { type: "Volymknappsbyte", price: 590 },
            { type: "På/av knappsbyte", price: 590 }
          ]
        }
      ]
    },
    legacySonySeries: {
      title: "Äldre Sony Modeller",
      models: [
        {
          model: "Xperia Z5/Z5 Premium",
          repairs: [
            { type: "Reparation", price: "Kontakta oss" }
          ]
        },
        {
          model: "Xperia XA/XA Dual",
          repairs: [
            { type: "Reparation", price: "Kontakta oss" }
          ]
        },
        {
          model: "Xperia X Compact",
          repairs: [
            { type: "Reparation", price: "Kontakta oss" }
          ]
        }
      ]
    }
  },
  apple: {
    iphone6Series: {
      title: "iPhone 6-Series Reparationspriser",
      models: [
        {
          model: "iPhone 6",
          repairs: [
            { type: "Skärmbyte", price: 490 },
            { type: "Batteribyte", price: 390 }
          ]
        },
        {
          model: "iPhone 6s",
          repairs: [
            { type: "Skärmbyte", price: 490 },
            { type: "Batteribyte", price: 390 }
          ]
        },
        {
          model: "iPhone 6 Plus",
          repairs: [
            { type: "Skärmbyte", price: 490 },
            { type: "Batteribyte", price: 390 }
          ]
        },
        {
          model: "iPhone 6s Plus",
          repairs: [
            { type: "Skärmbyte", price: 490 },
            { type: "Batteribyte", price: 390 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 250 }
      ]
    },
    iphone7Series: {
      title: "iPhone 7-Series Reparationspriser",
      models: [
        {
          model: "iPhone 7",
          repairs: [
            { type: "Skärmbyte", price: 490 },
            { type: "Batteribyte", price: 390 }
          ]
        },
        {
          model: "iPhone 7 Plus",
          repairs: [
            { type: "Skärmbyte", price: 490 },
            { type: "Batteribyte", price: 390 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 250 }
      ]
    },
    iphone8Series: {
      title: "iPhone 8-Series Reparationspriser",
      models: [
        {
          model: "iPhone 8",
          repairs: [
            { type: "Skärmbyte", price: 490 },
            { type: "Batteribyte", price: 390 },
            { type: "Backsida byte utan ram", price: 590 },
            { type: "Backsida kamera glas", price: 350 }
          ]
        },
        {
          model: "iPhone 8 Plus",
          repairs: [
            { type: "Skärmbyte", price: 490 },
            { type: "Batteribyte", price: 390 },
            { type: "Backsida byte utan ram", price: 590 },
            { type: "Backsida kamera glas", price: 350 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 250 }
      ]
    },
    iphoneXSeries: {
      title: "iPhone X-Series Reparationspriser",
      models: [
        {
          model: "iPhone X",
          repairs: [
            { type: "Skärmbyte", price: 590 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 690 },
            { type: "Backsida kamera glas", price: 350 }
          ]
        },
        {
          model: "iPhone XS",
          repairs: [
            { type: "Skärmbyte", price: 590 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 690 },
            { type: "Backsida kamera glas", price: 350 }
          ]
        },
        {
          model: "iPhone XS Max",
          repairs: [
            { type: "Skärmbyte", price: 790 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 790 },
            { type: "Backsida kamera glas", price: 350 }
          ]
        },
        {
          model: "iPhone XR",
          repairs: [
            { type: "Skärmbyte", price: 690 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 790 },
            { type: "Backsida kamera glas", price: 350 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 250 }
      ]
    },
    iphone11Series: {
      title: "iPhone 11-Series Reparationspriser",
      models: [
        {
          model: "iPhone 11",
          repairs: [
            { type: "Skärmbyte", price: 690 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 790 },
            { type: "Backsida kamera glas", price: 350 }
          ]
        },
        {
          model: "iPhone 11 Pro",
          repairs: [
            { type: "Skärmbyte", price: 790 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 890 },
            { type: "Backsida kamera glas", price: 350 }
          ]
        },
        {
          model: "iPhone 11 Pro Max",
          repairs: [
            { type: "Skärmbyte", price: 790 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 890 },
            { type: "Backsida kamera glas", price: 350 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 250 }
      ]
    },
    iphone12Series: {
      title: "iPhone 12-Series Reparationspriser",
      models: [
        {
          model: "iPhone 12",
          repairs: [
            { type: "Skärmbyte", price: 990 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1130 },
            { type: "Backsida kamera glas", price: 400 }
          ]
        },
        {
          model: "iPhone 12 Pro",
          repairs: [
            { type: "Skärmbyte", price: 990 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1130 },
            { type: "Backsida kamera glas", price: 390 }
          ]
        },
        {
          model: "iPhone 12 Pro Max",
          repairs: [
            { type: "Skärmbyte", price: 1290 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1290 },
            { type: "Backsida kamera glas", price: 390 }
          ]
        },
        {
          model: "iPhone 12 Mini",
          repairs: [
            { type: "Skärmbyte", price: 1290 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1290 },
            { type: "Backsida kamera glas", price: 400 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 250 }
      ]
    },
    iphone13Series: {
      title: "iPhone 13-Series Reparationspriser",
      models: [
        {
          model: "iPhone 13",
          repairs: [
            { type: "Skärmbyte", price: 1450 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1390 },
            { type: "Backsida kamera glas", price: 400 }
          ]
        },
        {
          model: "iPhone 13 Pro",
          repairs: [
            { type: "Skärmbyte", price: 1790 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1490 },
            { type: "Backsida kamera glas", price: 400 }
          ]
        },
        {
          model: "iPhone 13 Pro Max",
          repairs: [
            { type: "Skärmbyte", price: 2150 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1490 },
            { type: "Backsida kamera glas", price: 390 }
          ]
        },
        {
          model: "iPhone 13 Mini",
          repairs: [
            { type: "Skärmbyte", price: 1490 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1390 },
            { type: "Backsida kamera glas", price: 390 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 250 }
      ]
    },
    iphone14Series: {
      title: "iPhone 14-Series Reparationspriser",
      models: [
        {
          model: "iPhone 14",
          repairs: [
            { type: "Skärmbyte", price: 2190 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1390 },
            { type: "Backsida kamera glas", price: 390 }
          ]
        },
        {
          model: "iPhone 14 Pro",
          repairs: [
            { type: "Skärmbyte", price: 2490 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1790 },
            { type: "Backsida kamera glas", price: 450 }
          ]
        },
        {
          model: "iPhone 14 Pro Max",
          repairs: [
            { type: "Skärmbyte", price: 2990 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1990 },
            { type: "Backsida kamera glas", price: 450 }
          ]
        },
        {
          model: "iPhone 14 plus",
          repairs: [
            { type: "Skärmbyte", price: 2990 },
            { type: "Batteribyte", price: 590 },
            { type: "Backsida byte utan ram", price: 1990 },
            { type: "Backsida kamera glas", price: 450 }
          ]
        }
      ],
      additionalServices: [
        { service: "Felsökningsavgift", price: 250 }
      ]
    }
  }
};

export default phoneRepairPrices;
