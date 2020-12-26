const myQuiz = [
    {
      'q': 'Who was the father of chemical engineering?',
      'options': [
        'Joseph Priestley',
        'George Davis',
        'Marie Curie',
        'Alfred Nobel'
      ],
      'correctIndex': 1,
      'correctResponse': 'You have passed level 1.',
      'incorrectResponse': 'Incorrect '
    },
    {
      'q': 'What sectors are chemical engineers invovled with?',
      'options': [
        'Manufacturing proceses',
        'Planes and flight dynamics',
        'Crypto Mining',
        'Exploration of the earths structure'
      ],
      'correctIndex': 0,
      'correctResponse': 'That one was tricky well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What kind of job can you get as an chemical engineer',
      'options': [
        'Payload Specialist',
        'Aerodynamicist',
        'Waste management',
        'civil safety engineer'
      ],
      'correctIndex': 2,
      'correctResponse': 'Nice one!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Disposal engineers dispose of _______ and _______',
        'options': [
        'gas and oil',
        'general and non general',
        'automobile and aircraft',
        'industrial and residental'
      ],
      'correctIndex': 3,
      'correctResponse': 'Great but it going to get harder.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What is an example of a fossil fuel',
      'options': [
        'natural gas',
        'uranium',
        'biodesiel',
        'hydrogen'
      ],
      'correctIndex': 0,
      'correctResponse': 'Good work!.',
      'incorrectResponse': 'Incorrect (You might be overthinking it).'
    },
    {
      'q': 'What sort of modules can you expect to study in aerosapce and chemical engineering',
      'options': [
        'Bio-Chemistry',
        'Systems',
        'Thermodynamics',
        'Aerodynamics'
      ],
      'correctIndex': 2,
      'correctResponse': 'Yes thats Right',
      'incorrectResponse': 'INcorrect (Maybe look up what Mach is).'
    },
    {
      'q': 'What is the name of a brittle solid produced by decaying plants and fossils put under high pressure and heat?',
      'options': [
        'Granite',
        'Coal',
        'Remediation',
        'Diamond'
      ],
      'correctIndex': 1,
      'correctResponse': 'That one was easy',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Do chemical engineers need a high level of understanding of manufacturing and refininery processes?',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 0,
      'correctResponse': '50/50 chance to get it right well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What is the current largest chemical company?',
      'options': [
        'BASF',
        'SABIC',
        'Sinopec',
        'BP'
      ],
      'correctIndex': 0,
      'correctResponse': 'Excellent!',
      'incorrectResponse': 'Incorrect (This one is a bit tricky)'
    },
    {
      'q': 'Petrolleum engineers are involved in ____________',
      'options': [
        'Disposal',
        'Large scaled production factilities',
        'Looking at data models',
        'Transportation of fossil fuels'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct (that one was a bit of a break)',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Can you specialise as a chemical engineer?',
      'options': [
        'yes',
        'no'
      ],
      'correctIndex': 0,
      'correctResponse': 'Nearly done',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'An example of a challenge that a chemical engineer can face is:',
      'options': [
        'How to make the organisation of a compnay more effecient',
        'Unexpected shortages in a companies stock',
        'Failure of a system during its testing phase',
        'Creating cleaning agents which are less toxic and hazardous to the health'
      ],
      'correctIndex': 3,
      'correctResponse': 'Nice work',
      'incorrectResponse': 'Incorrect'
    }

  ];

$('#quiz').quiz({
  questions: myQuiz,
});