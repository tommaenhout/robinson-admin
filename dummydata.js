const dummyData  = [
    {
      id: { $oid: "64553d597bd516fac07b697a" },
      firstName: "Lorenzo",
      lastName: "Bianchi",
      email: "lorenzo@example.com",
      language: "Italian",
      level: "Intermediate",
      objective: "Business Italian",
      phone: "01158641840",
      exam: "IELTS",
      timeZone: {
        value: "Europe/Rome",
        label: "(GMT+1:00) Rome, Berlin",
        offset: { $numberInt: 1 },
        abbrev: "Europe/Rome",
        altName: "Europe/Rome"
      },
      argentineTime: [
        { day: "Monday", hour: { $numberInt: 14 }, minute: { $numberInt: 45 } },
        { day: "Tuesday", hour: { $numberInt: 14 }, minute: { $numberInt: 45 } },
        { day: "Wednesday", hour: { $numberInt: 14 }, minute: { $numberInt: 45 } },
        { day: "Thursday", hour: { $numberInt: 14 }, minute: { $numberInt: 45 } },
        { day: "Friday", hour: { $numberInt: 14 }, minute: { $numberInt: 45 } }
      ],
      localTime: [
        { day: "Monday", hour: "14", minute: "45" },
        { day: "Tuesday", hour: "14", minute: "45" },
        { day: "Wednesday", hour: "14", minute: "45" },
        { day: "Thursday", hour: "14", minute: "45" },
        { day: "Friday", hour: "14", minute: "45" }
      ],
      wantsGroup: false,
      pricePack: "Advanced",
      price: "EUR €50.00",
      amountMonths: "6 months",
      createdAt: { $date: { $numberLong: 1683307865889 } },
      _v: { $numberInt: 1 }
    },
    {
      id: { $oid: "64553d597bd516fac07b697b" },
      firstName: "Giulia",
      lastName: "Rossi",
      email: "giulia@example.com",
      language: "Italian",
      level: "Advanced",
      objective: "Italian Literature",
      phone: "01123456789",
      exam: "TOEFL",
      timeZone: {
        value: "Europe/Berlin",
        label: "(GMT+2:00) Berlin, Paris",
        offset: { $numberInt: 2 },
        abbrev: "Europe/Berlin",
        altName: "Europe/Berlin"
      },
      argentineTime: [
        { day: "Monday", hour: { $numberInt: 16 }, minute: { $numberInt: 15 } },
        { day: "Tuesday", hour: { $numberInt: 16 }, minute: { $numberInt: 15 } },
        { day: "Wednesday", hour: { $numberInt: 16 }, minute: { $numberInt: 15 } },
        { day: "Thursday", hour: { $numberInt: 16 }, minute: { $numberInt: 15 } },
        { day: "Friday", hour: { $numberInt: 16 }, minute: { $numberInt: 15 } }
      ],
      localTime: [
        { day: "Monday", hour: "16", minute: "15" },
        { day: "Tuesday", hour: "16", minute: "15" },
        { day: "Wednesday", hour: "16", minute: "15" },
        { day: "Thursday", hour: "16", minute: "15" },
        { day: "Friday", hour: "16", minute: "15" }
      ],
      wantsGroup: true,
      pricePack: "Premium",
      price: "EUR €70.00",
      amountMonths: "12 months",
      createdAt: { $date: { $numberLong: 1683307865890 } },
      _v: { $numberInt: 2 }
    },
    {
        id: { $oid: "64553d597bd516fac07b697c" },
        firstName: "Sofia",
        lastName: "Moretti",
        email: "sofia@example.com",
        language: "Italian",
        level: "Beginner",
        objective: "Basic Conversation",
        phone: "01155555555",
        exam: "None",
        timeZone: {
          value: "Europe/Madrid",
          label: "(GMT+1:00) Madrid, Barcelona",
          offset: { $numberInt: 1 },
          abbrev: "Europe/Madrid",
          altName: "Europe/Madrid"
        },
        argentineTime: [
          { day: "Monday", hour: { $numberInt: 12 }, minute: { $numberInt: 30 } },
          { day: "Tuesday", hour: { $numberInt: 12 }, minute: { $numberInt: 30 } },
          { day: "Wednesday", hour: { $numberInt: 12 }, minute: { $numberInt: 30 } },
          { day: "Thursday", hour: { $numberInt: 12 }, minute: { $numberInt: 30 } },
          { day: "Friday", hour: { $numberInt: 12 }, minute: { $numberInt: 30 } }
        ],
        localTime: [
          { day: "Monday", hour: "12", minute: "30" },
          { day: "Tuesday", hour: "12", minute: "30" },
          { day: "Wednesday", hour: "12", minute: "30" },
          { day: "Thursday", hour: "12", minute: "30" },
          { day: "Friday", hour: "12", minute: "30" }
        ],
        wantsGroup: true,
        pricePack: "Starter",
        price: "EUR €40.00",
        amountMonths: "3 months",
        createdAt: { $date: { $numberLong: 1683307865891 } },
        _v: { $numberInt: 3 }
      }      
  ]

  export default dummyData
  
  