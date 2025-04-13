let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 326,
        chapter: 1,
        title: "Вертикальная асимптота",
        question: "Имеет ли вертикальную асимптоту функция y = x² +1?",
        answers: ["не имеет", "имеет", "только при x=0", "зависит от x"],
        correct: 0,
        multiple: false
      },
      {
        id: 327,
        chapter: 1,
        title: "Горизонтальная асимптота",
        question: "Найди горизонтальную асимптоту y = (2x²+1)/(x²+4):",
        answers: ["y=2", "y=1", "y=0", "y=4"],
        correct: 0,
        multiple: false
      },
      {
        id: 328,
        chapter: 1,
        title: "Определение знака производной",
        question: "Выбери производную xᵃ:",
        answers: ["(a-1)x^{a-1}", "axᵃ", "(a-1)xᵃ", "ax^{a-1}"],
        correct: 3,
        multiple: false
      },
      {
        id: 329,
        chapter: 1,
        title: "Вычисление производной",
        question: "Знаки φ'(x) в точках b и d:",
        answers: ["b: +; d: -", "b: -; d: +", "b: +; d: +", "b: -; d: -"],
        correct: 0,
        multiple: false
      },
      {
        id: 330,
        chapter: 1,
        title: "Выпуклости графика функции",
        question: "Промежутки выпуклости y = x³ -9x² +5x -22:",
        answers: ["(3; ∞); (-∞; 3)", "(-∞; 0); (0; ∞)"],
        correct: 0,
        multiple: false
      },
      {
        id: 331,
        chapter: 1,
        title: "Угловой коэффициент касательной",
        question: "Угловой коэффициент касательной к f(x)=x² в x₀=-5:",
        answers: ["-10", "10", "0", "25"],
        correct: 0,
        multiple: false
      },
      {
        id: 332,
        chapter: 1,
        title: "Производная многочлена",
        question: "Производная -5x⁴ +7x -6:",
        answers: ["-20x³ +7", "20x³ -7", "-5x³ +7", "10x³"],
        correct: 0,
        multiple: false
      },
      {
        id: 333,
        chapter: 1,
        title: "Производная функции, состоящей из слагаемых",
        question: "Производная y =2x³ -4/x⁴ +20∛x⁵ +18:",
        answers: ["6x² +16/x⁵ +12x^{-2/5}", "6x² -16/x⁵ +12x^{3/5}", "6x² +16/x³ +12x^{2/5}", "6x² +16/x⁵"],
        correct: 0,
        multiple: false
      },
      {
        id: 334,
        chapter: 1,
        title: "Построение графика дробной функции",
        question: "D(f) для y =10x/(4+x²):",
        answers: ["(-∞; +∞)", "(-2; 2)", "(-∞; 0)", "(0; ∞)"],
        correct: 0,
        multiple: false
      },
      {
        id: 335,
        chapter: 1,
        title: "Интервалы монотонности дробной функции",
        question: "Интервалы возрастания f(x)=(3+11x²)/x:",
        answers: ["(-∞; -√(3/11)) ∪ (√(3/11); ∞)", "(-∞; 0) ∪ (0; ∞)", "(-√(3/11); √(3/11))", "Нет интервалов"],
        correct: 0,
        multiple: false
      },
      {
        id: 336,
        chapter: 1,
        title: "Точки перегиба функции",
        question: "Найди точку перегиба функции y =x³−9x²+26x−14:",
        answers: ["(3; 5)", "(4; -2)", "(2; 10)", "(5; 0)"],
        correct: 0,
        multiple: false
      },
      {
        id: 337,
        chapter: 1,
        title: "Монотонность функции в зависимости от параметра",
        question: "При каком a функция f(x)=ax⁵−2x+7 убывает?",
        answers: ["a ≤ 0", "a ≥ 0", "a = 0", "Нет таких a"],
        correct: 0,
        multiple: false
      },
      {
        id: 338,
        chapter: 1,
        title: "Доказательство выпуклости функции",
        question: "Докажи выпуклость y=10x²−cosx:",
        answers: ["y'=20x+sinx; y''=20+cosx", "y'=20x−sinx; y''=20−cosx", "y'=20x+sinx; y''=20+sinx", "y'=10x+sinx; y''=10+cosx"],
        correct: 0,
        multiple: false
      },
      {
        id: 339,
        chapter: 1,
        title: "Нахождение функции по производной",
        question: "Найди f(x), если f'(x)=30x⁵+21x²:",
        answers: ["5x⁶ +7x³ +C", "6x⁵ +21x² +C", "30x⁶ +21x³ +C", "5x⁵ +7x² +C"],
        correct: 0,
        multiple: false
      },
      {
        id: 341,
        chapter: 1,
        title: "Производная произведения функций в данной точке",
        question: "Вычисли f'(x₀) для f(x)=u(x)v(x):",
        answers: ["-3*2 +4*(-4) = -14", "4*2 + (-3)*(-4) = 20", "4*(-3) +2*(-4) = -20", "4*2 + (-3)*4 = -4"],
        correct: 3,
        multiple: false
      },
      {
        id: 340,
        chapter: 1,
        title: "Характер монотонности",
        question: "Производная y=3x⁹+2x³−9:",
        answers: ["27x⁸ +6x²", "9x⁸ +6x²", "3x⁸ +2x²", "27x⁸ +6x"],
        correct: 0,
        multiple: false
      },
      {
        id: 342,
        chapter: 1,
        title: "Производная частного функций в данной точке",
        question: "Вычисли f'(x₀) для f(x)=u(x)/v(x):",
        answers: ["(5*5 -2*(-3))/5² = 31/25", "(5*5 -2*3)/5² = 19/25", "(2*5 -5*(-3))/5² = 25/25", "(5*5 +2*3)/5² = 31/25"],
        correct: 0,
        multiple: false
      },
      {
        id: 343,
        chapter: 1,
        title: "Производная сложной функции",
        question: "Производная (sin⁷x)':",
        answers: ["7sin⁶x·cosx", "7cos⁶x", "sin⁶x·cosx", "7sinx·cosx"],
        correct: 0,
        multiple: false
      },
      {
        id: 344,
        chapter: 1,
        title: "Производная сложной тригонометрической функции",
        question: "Производная y=1/cos²4x:",
        answers: ["8sin4x/cos³4x", "2sin4x/cos³4x", "4sin4x/cos³4x", "−8sin4x/cos³4x"],
        correct: 0,
        multiple: false
      },
      {
        id: 345,
        chapter: 1,
        title: "Производная третьего порядка",
        question: "f(x)=5x⁴−8x². Найди f⁽ⁿ⁾(x):",
        answers: ["0 при n≥5", "120x при n=3", "60x² при n=2", "20x³−16x при n=1"],
        correct: 0,
        multiple: false
      },
      {
        id: 346,
        chapter: 1,
        title: "Производная функции в данной точке",
        question: "Вычисли f'(x₀) для f(x)=−4u(x)+3v(x):",
        answers: ["−4*4 +3*1.5 = −13.5", "−4*5 +3*1.5 = −15.5", "4*4 +3*1.5 = 20.5", "−4*1.5 +3*4 = 6"],
        correct: 0,
        multiple: false
      }
    ];
    
    function initializeCourse() {
      const chapters = [...new Set(tasks.map(task => task.chapter))];
      const content = document.getElementById('courseContent');
      content.innerHTML = "";
    
      chapters.forEach(chapter => {
        const chapterTasks = tasks.filter(task => task.chapter === chapter);
        content.innerHTML += `
          <div class="chapter" onclick="toggleSubitems(this)">
            <div class="chapter-title">
              Задания
              <div class="status">${getChapterProgress(chapter)}</div>
            </div>
            <ul class="subitems">
              ${chapterTasks.map(task => `
                <li data-task-id="${task.id}" onclick="showTask(${task.id}, event)"
                    class="${localStorage.getItem('task-' + task.id) ? 'solved' : ''}">
                  ${task.title}
                  <span class="status">
                    ${localStorage.getItem('task-' + task.id) ? '1/1' : '0/1'}
                  </span>
                </li>
              `).join('')}
            </ul>
          </div>
        `;
      });
    }
    
    function toggleSubitems(chapterElement) {
      const subitems = chapterElement.querySelector('.subitems');
      subitems.classList.toggle('show');
    }
    
    function getChapterProgress(chapter) {
      const tasksInChapter = tasks.filter(t => t.chapter === chapter);
      const solved = tasksInChapter.filter(t => localStorage.getItem('task-' + t.id)).length;
      return `${solved}/${tasksInChapter.length}`;
    }
    
    function showTask(taskId, event) {
      event.stopPropagation();
      const task = tasks.find(t => t.id === taskId);
      
      document.getElementById('task-title').textContent = task.title;
      document.getElementById('task-content').textContent = task.question;
      
      if (task.multiple) {
        currentTask = task;
        currentSelectedAnswers = [];
        let answersHtml = "";
        task.answers.forEach((answer, index) => {
          answersHtml += `<button class="answer-btn" onclick="toggleAnswer(this, ${index})">${answer}</button>`;
        });
        answersHtml += `<button class="submit-btn" onclick="submitMultipleAnswer(${task.id})">Отправить ответ</button>`;
        document.getElementById('answers-container').innerHTML = answersHtml;
      } else {
        let answersHtml = "";
        task.answers.forEach((answer, index) => {
          answersHtml += `<button onclick="checkAnswer(${task.id}, ${index})">${answer}</button>`;
        });
        document.getElementById('answers-container').innerHTML = answersHtml;
      }
      
      let resultMsg = "";
      if (wrongCounter > 0) {
        resultMsg = `Неправильных ответов: ${wrongCounter}`;
      }
      document.getElementById('result-message').textContent = resultMsg;
      
      document.getElementById('modal').style.display = "flex";
    }
    
    function checkAnswer(taskId, selectedIndex) {
      const task = tasks.find(t => t.id === taskId);
      const resultDisplay = document.getElementById('result-message');
      
      if (selectedIndex === task.correct) {
        resultDisplay.textContent = "Правильно!";
        localStorage.setItem('task-' + task.id, "true");
        setTimeout(() => {
          hideModal();
          initializeCourse();
        }, 1000);
      } else {
        wrongCounter++;
        localStorage.setItem('wrongCounter', wrongCounter);
        resultDisplay.textContent = `Неправильно! Попробуйте ещё раз. Неправильных ответов: ${wrongCounter}`;
      }
    }
    
    function toggleAnswer(button, index) {
      if (button.classList.contains('selected')) {
        button.classList.remove('selected');
        currentSelectedAnswers = currentSelectedAnswers.filter(i => i !== index);
      } else {
        button.classList.add('selected');
        currentSelectedAnswers.push(index);
      }
    }
    
    function submitMultipleAnswer(taskId) {
      const task = tasks.find(t => t.id === taskId);
      const resultDisplay = document.getElementById('result-message');
      
      let selected = currentSelectedAnswers.slice().sort((a, b) => a - b);
      let correctAnswers = task.correct.slice().sort((a, b) => a - b);
      let isCorrect = (selected.length === correctAnswers.length) &&
                      selected.every((val, idx) => val === correctAnswers[idx]);
      
      if (isCorrect) {
        resultDisplay.textContent = "Правильно!";
        localStorage.setItem('task-' + task.id, "true");
        setTimeout(() => {
          hideModal();
          initializeCourse();
        }, 1000);
      } else {
        wrongCounter++;
        localStorage.setItem('wrongCounter', wrongCounter);
        resultDisplay.textContent = `Неправильно! Попробуйте ещё раз. Неправильных ответов: ${wrongCounter}`;
      }
    }
    
    function hideModal() {
      document.getElementById('modal').style.display = "none";
    }
    
    window.onload = initializeCourse;