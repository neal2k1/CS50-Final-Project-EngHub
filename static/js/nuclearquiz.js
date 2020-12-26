const myQuiz = [
    {
      'q': 'What country uses the most nuclear power?',
      'options': [
        'Russia',
        'France',
        'UK',
        'USA'
      ],
      'correctIndex': 3,
      'correctResponse': 'You have passed level 1.',
      'incorrectResponse': 'Incorrect '
    },
    {
      'q': 'What country opened the first civilian nuclear power plant in 1954?',
      'options': [
        'The Soviet Union',
        'The United Kingdom',
        'France',
        'Germany'
      ],
      'correctIndex': 3,
      'correctResponse': 'That one was tricky well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Nuclear power is generated using which of the following?',
      'options': [
        'Hydrogen',
        'Uranium',
        'Carbon',
        'None of the above'
      ],
      'correctIndex': 1,
      'correctResponse': 'Nice one!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What Kind of jobs below are classed into the nuclear field?',
        'options': [
        'Test Pilot',
        'Safety Engineer',
        'Electrician',
        'Project Manager'
      ],
      'correctIndex': 1,
      'correctResponse': 'Great but it going to get harder.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'How does nuclear fission occur?',
      'options': [
        'Protons gather in the nucleus of Uranium atoms and cause the nucleus to explode and release energy in the form of heat.',
        'Neutrons smash into the nucleus of Uranium atoms. The neutrons are then split in hald and release the energy in the form of heat.'
      ],
      'correctIndex': 1,
      'correctResponse': 'Good work!.',
      'incorrectResponse': 'Incorrect (You might be overthinking it).'
    },
    {
      'q': 'Which of the following is the most harful type of radidation',
      'options': [
        'Alpha decay',
        'B+ Decay',
        'B- Decay',
        'Gamma Radiation'
      ],
      'correctIndex': 2,
      'correctResponse': 'Yes thats Right',
      'incorrectResponse': 'INcorrect (Maybe look up what Mach is).'
    },
    {
      'q': 'The SI unit of electrical energy is _________',
      'options': [
        'Watts per second',
        'Volts',
        'Joule per second',
        'Joule'
      ],
      'correctIndex': 0,
      'correctResponse': 'That one was easy',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What are the advantages of nuclear power?',
      'options': [
        'Produces a safe type of waste',
        'Nuclear power does not produce either smoke or carbon dioxide.'
      ],
      'correctIndex': 1,
      'correctResponse': '50/50 chance to get it right well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Nuclear Power produces about what percentage of the world\'s energy needs?',
      'options': [
        '5%',
        '8%',
        '11%',
        '30%'
      ],
      'correctIndex': 2,
      'correctResponse': 'Excellent!',
      'incorrectResponse': 'Incorrect (This one is a bit tricky)'
    },
    {
      'q': 'Who built the worlds first nuclear reactor?',
      'options': [
        'Marie Curie',
        'Sir Isaac Newton',
        'Leonardo da vinci',
        'Enrico Fermi'
      ],
      'correctIndex': 3,
      'correctResponse': 'Correct (that one was a bit of a break)',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Did the world wars have an impact into nuclear developments?',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 0,
      'correctResponse': 'Nearly done',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'An element with a half life of 10 minuites will take _________ minuites to reduce its count rate from 1000 to 250.',
      'options': [
        '10',
        '20',
        '30',
        '15'
      ],
      'correctIndex': 1,
      'correctResponse': 'Nice work',
      'incorrectResponse': 'Incorrect'
    }

  ];

$('#quiz').quiz({
  questions: myQuiz,
});