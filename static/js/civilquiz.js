const myQuiz = [
    {
      'q': 'Which on of the following is a Civil engineering company?',
      'options': [
        'Arup',
        'Google',
        'Facebook',
        'Rolls Royce'
      ],
      'correctIndex': 0,
      'correctResponse': 'You have passed level 1.',
      'incorrectResponse': 'Incorrect '
    },
    {
      'q': 'What sectors are civil engineers invovled with?',
      'options': [
        'Manufacturing proceses',
        'Architecture',
        'Crypto Mining',
        'Exploration of the earths structure'
      ],
      'correctIndex': 1,
      'correctResponse': 'That one was tricky well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What kind of job can you get as an civil engineer',
      'options': [
        'Payload Specialist',
        'CAD technician',
        'Waste management',
        'civil safety engineer'
      ],
      'correctIndex': 1,
      'correctResponse': 'Nice one!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Which of these buildings is the oldest work of civil engineers?',
        'options': [
        'Appian Way',
        'Egyptian Pyramids',
        'Irrigation in Rome',
        'Quanat'
      ],
      'correctIndex': 1,
      'correctResponse': 'Great but it going to get harder.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'The 9 cm x 9 cm side of a brick as seen in the wall face, is generally known as',
      'options': [
        'Side',
        'Front',
        'Header',
        'Top'
      ],
      'correctIndex': 2,
      'correctResponse': 'Good work!.',
      'incorrectResponse': 'Incorrect (You might be overthinking it).'
    },
    {
      'q': 'What sort of modules can you expect to study in civil engineering',
      'options': [
        'Bio-Chemistry',
        'Systems',
        'Materials',
        'Aerodynamics'
      ],
      'correctIndex': 2,
      'correctResponse': 'Yes thats Right',
      'incorrectResponse': 'INcorrect (Maybe look up what Mach is).'
    },
    {
      'q': 'The carbon content of steel is:',
      'options': [
        'less than 0.15%',
        '2-4%',
        '0.08%',
        '0.002%-2.1%'
      ],
      'correctIndex': 3,
      'correctResponse': 'That one was easy',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Do civil engineers need a high level of manufacturing and refininery processes?',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 1,
      'correctResponse': '50/50 chance to get it right well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'The lowest part of a structure which transmits the load to the soil is known as',
      'options': [
        'Superstructure',
        'Plinth',
        'Foundation',
        'Basement'
      ],
      'correctIndex': 0,
      'correctResponse': 'Excellent!',
      'incorrectResponse': 'Incorrect (This one is a bit tricky)'
    },
    {
      'q': 'Which of the below is not an ISI classified channel section?',
      'options': [
        'ISLC',
        'ISJC',
        'ISMC',
        'ISHC'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct (that one was a bit of a break)',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'The foundation in which a cantilever beam is provided to join two footings is known as',
      'options': [
        'Strap Footing',
        'Strip Footing',
        'Raft Footing',
      ],
      'correctIndex': 0,
      'correctResponse': 'Nearly done',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What is the largest project in civil engineering (including history)?',
      'options': [
        'International Space Station',
        'Burj Khalifa',
        'Great wall of China',
        'London CrossRail Project'
      ],
      'correctIndex': 2,
      'correctResponse': 'Nice work',
      'incorrectResponse': 'Incorrect'
    }

  ];

$('#quiz').quiz({
  questions: myQuiz,
});