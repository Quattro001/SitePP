let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 367,
        chapter: 1,
        title: "Первообразная для функции",
        question: "Является ли F(x)=x¹⁷ первообразной для f(x)=17x¹⁸?",
        answers: ["да", "нет", "только при x>0", "частично"],
        correct: 1,
        multiple: false
      },
      {
        id: 368,
        chapter: 1,
        title: "Первообразная тригонометрической функции",
        question: "Является ли F(x)=sin²x первообразной для f(x)=sin2x?",
        answers: ["нет", "да", "только на интервале", "зависит от x"],
        correct: 1,
        multiple: false
      },
      {
        id: 369,
        chapter: 1,
        title: "Первообразные степенной функции",
        question: "Первообразная для f(x)=4x⁴+3x⁶:",
        answers: ["(4/5)x⁵ + (3/7)x⁷ + C", "x⁵ + x⁷ + C", "4x³ + 3x⁵ + C", "20x³ + 18x⁵ + C"],
        correct: 0,
        multiple: false
      },
      {
        id: 370,
        chapter: 1,
        title: "Первообразные дробной функции",
        question: "Первообразная для f(x)=(5x²+8x+5)/x:",
        answers: ["(5/2)x² +8x +5ln|x| +C", "5x +8 +5ln|x| +C", "5x² +8x +5/x +C", "2.5x² +8x +5/x +C"],
        correct: 0,
        multiple: false
      },
      {
        id: 371,
        chapter: 1,
        title: "Первообразные функции, содержащей квадратные корни",
        question: "Первообразная для f(x)=4/√x +2/x⁸:",
        answers: ["8√x −2/(7x⁷) +C", "4√x −2/(7x⁷) +C", "8x^(1/2) +2x^(-7) +C", "4x^(−1/2) +2x^(-8) +C"],
        correct: 0,
        multiple: false
      },
      {
        id: 372,
        chapter: 1,
        title: "Первообразные сложной функции",
        question: "Первообразная для f(x)=√(10x+11):",
        answers: ["(1/15)(10x+11)√(10x+11) +C", "(2/3)(10x+11)^(3/2) +C", "10√(10x+11) +C", "5x√(10x+11) +C"],
        correct: 0,
        multiple: false
      },
      {
        id: 373,
        chapter: 1,
        title: "Первообразные сложной тригонометрической функции",
        question: "Первообразная для f(x)=sin(8x+8):",
        answers: ["−1/8 cos(8x+8) +C", "−cos(8x+8) +C", "8cos(8x+8) +C", "1/8 sin(8x+8) +C"],
        correct: 0,
        multiple: false
      },
      {
        id: 374,
        chapter: 1,
        title: "Первообразные тригонометрической функции",
        question: "Первообразная для f(x)=7−7cos9x:",
        answers: ["7x −7/9 sin9x +C", "7x +7/9 sin9x +C", "7x −7sin9x +C", "7 −7/9 sin9x +C"],
        correct: 0,
        multiple: false
      },
      {
        id: 375,
        chapter: 1,
        title: "Разность первообразных",
        question: "Разность F₁−F₂ для f(x)=6x²−4x+5:",
        answers: ["−9", "0", "5", "10"],
        correct: 0,
        multiple: false
      },
      {
        id: 376,
        chapter: 1,
        title: "Закон движения точки",
        question: "x(t) для F(t)=3t−2 с условиями:",
        answers: ["x(t)=0.5t³ −t² −3t +1", "x(t)=0.5t³ −t² +3t +1", "x(t)=t³ −t² −3t +1", "x(t)=0.5t³ −t² −3t +5"],
        correct: 0,
        multiple: false
      },
      {
        id: 377,
        chapter: 1,
        title: "Первообразная функции, содержащей квадратный корень, график проходит через данную точку",
        question: "Первообразная для f(x)=8/√(1−x²) через M(√3/2; 4π/3):",
        answers: ["8arcsinx −4π", "8arcsinx +4π", "4arcsinx −π", "8arcsinx −π"],
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