/*move all items we will store into the state object*/

var state = {

    questions: [{
        text: '<:48:x<:65:=<:6C:$=$=$$~<:03:+$~<:ffffffffffffffbd:+$<:ffffffffffffffb1:+$<:57:~$~<:18:x+$~<:03:+$~<:06:x-$x<:0e:x-$=x<:43:x-$',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 0
    }, {
        text: '+0+0+0+0+0+0+0+2)+0+0+9)+7))+3)-0-0-0-0-0-0-0-9)+0+0+0+0+0+0+0+0+7)-8)+3)-6)-8)-7-0-0-0-0-0-0)',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 1
    }, {
        text: '*6*3p*4*3*2*0p*2*1*0pp>0*1*0p*5*4*0p*5*4*2*1*0p*4*3p*1*0p/+0p+0*6*5*2p+0*5*0p',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 2
    }, {
        text: ']xhhhhooooooooohhhhhhxooooooooxooooooxjjjxhoooohhhxhohhhhhhhxhhhhjjjhhhxhhhhooooooooohhhhhhxjjjxxjjjjjjjxjhhhhxjhhhhhhhhjjjhh~',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 3
    }]
};

//renders the state

var showResults = function(questHide, resultReveal) {
    questHide.hide();
    resultReveal.show();
};

var showQuestions = function(questReveal, resultHide) {
    resultHide.hide();
    questReveal.show();
};

var resetScore = function(scoreElem) {
    scoreElem.text(0);
};

var increaseScore = function(scoreElem) {
    var score = parseInt(scoreElem.text(), 10);
    scoreElem.text(score + 1);
};

var setQuestion = function(state, questionIndex) {
    var question = state.questions[questionIndex];
    questionCurrentElement.text(questionIndex);
    questionElement.text(question.text);
    answersElement.empty();
    for (var i = 0; i < question.answers.length; i++) {
        var answer = question.answers[i];
        answersElement.append('<li><button type="button">' + answer + '</button></li>');
    }
};

//event listners

var questionCurrentElement = $('.question-current');
var questionElement = $('.question');
var answersElement = $('.answers');

$('.answers').on('click', 'button', function() {
    var choice = $(this).parent().index();
    var questionIndex = parseInt($('.question-current').text(), 10);
    var question = state.questions[questionIndex];
    if (question.correct === choice) {
        increaseScore($('.score'));
    }

    if (questionIndex + 1 < state.questions.length) {
        setQuestion(state, questionIndex + 1);
    } else {
        showResults($('.questions-page'), $('.results-page'));
    }
});

$('.restart-button').click(function() {
    setQuestion(state, 0);
    resetScore($('.score'));
    showQuestions($('.questions-page'), $('.results-page'));
});

$(document).ready(function() {
    $('.questions-total').text(state.questions.length);
    setQuestion(state, 0);
});
