const myQuiz = [
    {
      'q': 'How many trailing zeros are in the number 5! (5 factorial)?',
      'options': [
        '0',
        '1',
        '2',
        'none of the above'
      ],
      'correctIndex': 1,
      'correctResponse': 'You have passed level 1.',
      'incorrectResponse': 'Incorrect (You can use a calculator)'
    },
    {
      'q': 'There are 50 bikes, each with a tank that holds enough fuel to go 100 km. Using these 50 bikes, what is the maximum distance that you can go?',
      'options': [
        '200km',
        '330km',
        '350km',
        '2500km'
      ],
      'correctIndex': 2,
      'correctResponse': 'That one was tricky well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'If you had 5,623 participants in a tournament, how many games would need to be played to determine the winner?',
      'options': [
        '1',
        '50',
        '5622',
        '5623'
      ],
      'correctIndex': 0,
      'correctResponse': 'Nice one!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'There are 20 different socks, of two types, in a drawer in a completely dark room. What is the minimum number of socks you should grab to ensure you have a matching pair?',
      'options': [
        '5',
        '10',
        '11',
        '19'
      ],
      'correctIndex': 2,
      'correctResponse': 'Great but it going to get harder.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'The probability of finding the parking slot occupied is 1/3. You find it empty for 9 consecutive days. Find the probability that it will be empty on the 10th day.',
      'options': [
        '1/10',
        '0.29865',
        '1/2',
        '1/3'
      ],
      'correctIndex': 3,
      'correctResponse': 'Good work!.',
      'incorrectResponse': 'Incorrect (You might be overthinking it).'
    },
    {
      'q': 'You toss two coins. If you get heads with the first coin, you stop. If you get tails, you toss it again. The second coin is tossed regardless. What is the ratio of heads to tails?',
      'options': [
        '1 to 5',
        '2 to 3',
        '1 to 2',
        '1 to 1'
      ],
      'correctIndex': 3,
      'correctResponse': 'Yes thats Right',
      'incorrectResponse': 'INcorrect (Maybe look up "Toss of a coin riddle").'
    },
    {
      'q': 'If you have a square room with no roof, and you had four flagpoles you had to plant on the walls so that each flagpole touched two walls, how would you do it?',
      'options': [
        'Plant one in eah corner',
        'Plant them in a cross shape',
        'Plant all 4 in the middle',
        'Plant 1 in the middle and 3 on the side'
      ],
      'correctIndex': 0,
      'correctResponse': 'That one was easy',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'You\'re in a boat and you throw out a suitcase. Does the water level increase?',
      'options': [
        'No',
        'Yes'
      ],
      'correctIndex': 0,
      'correctResponse': '50/50 chance to get it right well done!.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'You have 1,000 bottles of juice. One contains poison and tastes bitter. How do you find the poisoned bottle using the smallest number of sips?',
      'options': [
        '3',
        '10',
        '500',
        '999'
      ],
      'correctIndex': 1,
      'correctResponse': 'Excellent!',
      'incorrectResponse': 'Incorrect (This one is a bit tricky)'
    },
    {
      'q': 'One night, Aunt Judy was in the living room with only a reading book . Uncle Jim turned off the light, leaving the room completely dark. Aunt Judy continued to read. How is this possible?',
      'options': [
        'She has night vision glasses on',
        'She had the window open',
        'She was blind and reading in braile',
        'She turned the light back on'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct (that one was a bit of a break)',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'This object has holes in its top and bottom. It also has holes on its sides and bottom. Not only that, it is riddled with holes in the middle. Despite this, it can still hold water. What is it?',
      'options': [
        'A grater',
        'Paper',
        'A sponge',
        'A face-mask'
      ],
      'correctIndex': 2,
      'correctResponse': 'Nearly done',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'A clock chimes 5 times in 4 seconds. How many times will it chime in 10 seconds?',
      'options': [
        '7',
        '11',
        '10.3',
        '13'
      ],
      'correctIndex': 1,
      'correctResponse': 'Nice work',
      'incorrectResponse': 'Incorrect'
    }

  ];

$('#quiz').quiz({
  questions: myQuiz,
});