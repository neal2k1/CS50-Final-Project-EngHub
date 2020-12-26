const myQuiz = [
    {
      'q': 'What do aerospace engineers do?',
      'options': [
        'Work on land construction projects such as building skyscrapers',
        'Work with aircraft and spacecraft designing and systems',
        'Go to space and observe the earth from space',
        'Design code used for programming'
      ],
      'correctIndex': 1,
      'correctResponse': 'You have passed level 1.',
      'incorrectResponse': 'Incorrect '
    },
    {
      'q': 'What sectors are aerospace engineers invovled with?',
      'options': [
        'TV and education',
        'Military',
        'Fashion design',
        'Mining'
      ],
      'correctIndex': 1,
      'correctResponse': 'That one was tricky well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What kind of job can you get as an aerospace engineer',
      'options': [
        'Payload Specialist',
        'Presenter',
        'Reporter',
        'Civil Service worker'
      ],
      'correctIndex': 0,
      'correctResponse': 'Nice one!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What sort of vehicle produced thrust from the expulsion of fastmoving exhaust gases through combustion reactions?',
        'options': [
        'Airplane',
        'Boat',
        'Rocket',
        'Car'
      ],
      'correctIndex': 2,
      'correctResponse': 'Great but it going to get harder.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What was the method used to first take flight?',
      'options': [
        'glider',
        'bike',
        'plane',
        'hot-air balloon'
      ],
      'correctIndex': 3,
      'correctResponse': 'Good work!.',
      'incorrectResponse': 'Incorrect (You might be overthinking it).'
    },
    {
      'q': 'What does mach number represent?',
      'options': [
        'Speed of an object realtive to speed of sound',
        'Speed of an object relative to the speed of light',
        'Speed in meters per second',
        'Pressure'
      ],
      'correctIndex': 0,
      'correctResponse': 'Yes thats Right',
      'incorrectResponse': 'INcorrect (Maybe look up what Mach is).'
    },
    {
      'q': 'Who was the first person to fly using an engine?',
      'options': [
        'Sir george cayley',
        'Wright Brothers',
        'William Kelly Johnson',
        'None of the above'
      ],
      'correctIndex': 1,
      'correctResponse': 'That one was easy',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Aircraft that fly between speeds of mach 10 to 25 are hypersonic?',
      'options': [
        'No',
        'Yes'
      ],
      'correctIndex': 1,
      'correctResponse': '50/50 chance to get it right well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What is the current largest aerospace company?',
      'options': [
        'Airbus',
        'Apple',
        'Boeing',
        'Lockheed Martin'
      ],
      'correctIndex': 2,
      'correctResponse': 'Excellent!',
      'incorrectResponse': 'Incorrect (This one is a bit tricky)'
    },
    {
      'q': 'What is the name for the real horizontal stabilizer that controls up and down pitching motion of an aircraft?',
      'options': [
        'Aileron',
        'Rudder',
        'Wing',
        'Elevator'
      ],
      'correctIndex': 3,
      'correctResponse': 'Correct (that one was a bit of a break)',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What if the force that acts in the opposite direction to thrust and limits the speed of an aircraft?',
      'options': [
        'Wind',
        'Weight',
        'Drag',
        'Resistance'
      ],
      'correctIndex': 2,
      'correctResponse': 'Nearly done',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'What is reynolds number?',
      'options': [
        'Ratio of interial to viscous forces on an aircraft',
        'Ratio of power to thrust of an aircraft',
        'The altitude of and aircraft relative to another',
        'The time taken for a rocket to reach space'
      ],
      'correctIndex': 0,
      'correctResponse': 'Nice work',
      'incorrectResponse': 'Incorrect'
    }

  ];

$('#quiz').quiz({
  questions: myQuiz,
});