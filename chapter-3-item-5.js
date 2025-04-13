let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 278,
        chapter: 1,
        title: "Уравнение",
        question: "Решением уравнения sin x = 0 является:",
        answers: ["x = π/2 + 2πk, k ∈ ℤ", "нет решения", "x = -π/2 + 2πk, k ∈ ℤ", "x = πk, k ∈ ℤ"],
        correct: 3,
        multiple: false
      },
      {
        id: 279,
        chapter: 1,
        title: "Уравнение (2)",
        question: "Решением уравнения cos x = 7 является:",
        answers: ["x = 2πk, k ∈ ℤ",  "нет корней", "x = π/2 + πk, k ∈ ℤ",  "x = π + 2πk, k ∈ ℤ"],
        correct: [1, 3],
        multiple: true
      },
      {
        id: 280,
        chapter: 1,
        title: "Нахождение значений обратных функций",
        question: "Вычисли arcctg 3:",
        answers: ["π/6", "π/4", "0.32175", "arctg(1/3)"],
        correct: 2,
        multiple: false
      },
      {
        id: 281,
        chapter: 1,
        title: "Нахождение значений обратных функций (2)",
        question: "Найди значение выражения arcsin(√2/2):",
        answers: ["π/3", "π/4", "π/6", "0"],
        correct: 1,
        multiple: false
      },
      {
        id: 282,
        chapter: 1,
        title: "Нахождение значений обратных функций (3)",
        question: "Вычисли arccos(1/2):",
        answers: ["π/6", "π/3", "π/4", "0"],
        correct: 1,
        multiple: false
      },
      {
        id: 283,
        chapter: 1,
        title: "Тригонометрическое уравнение вида sinx = a",
        question: "Реши уравнение sin x = √3/2 (в градусах):",
        answers: ["-60° + 360°k; 120° + 360°k", "60° + 360°k; 240° + 360°k", "30° + 360°k; 150° + 360°k", "45° + 360°k; 135° + 360°k"],
        correct: 0,
        multiple: false
      },
      {
        id: 284,
        chapter: 1,
        title: "Тригонометрическое уравнение вида cosx = a",
        question: "Реши уравнение cos x = -√3/2:",
        answers: ["±150° + 360°k", "±120° + 360°k", "±60° + 360°k", "±210° + 360°k"],
        correct: 0,
        multiple: false
      },
      {
        id: 285,
        chapter: 1,
        title: "Тригонометрическое уравнение вида tgx = a",
        question: "Реши уравнение tg x = √3/3:",
        answers: ["-150° + 180°k", "30° + 180°k", "-45° + 180°k", "60° + 180°k"],
        correct: 0,
        multiple: false
      },
      {
        id: 286,
        chapter: 1,
        title: "Использование формул",
        question: "Найди arctg(- √3/3):",
        answers: ["π/4", "- π/6", "3π/4", "5π/6"],
        correct: 1,
        multiple: false
      },
      {
        id: 287,
        chapter: 1,
        title: "Решение уравнения sin x = a",
        question: "Вычисли корни уравнения sin x = 0.5:",
        answers: ["(-1)^k·30° + 180°k", "(-1)^k·45° + 180°k", "±60° + 360°k", "90° + 360°k"],
        correct: 0,
        multiple: false
      },
      {
        id: 288,
        chapter: 1,
        title: "Решение уравнения cos x = a",
        question: "Реши уравнение cos x = 0.8:",
        answers: ["±arccos(0.8) + 360°k", "±arccos(-0.8) + 360°k", "arccos(0.8) + 180°k", "arccos(0.8) + 360°k"],
        correct: 0,
        multiple: false
      },
      {
        id: 289,
        chapter: 1,
        title: "Решение уравнения",
        question: "Найди корни уравнения tg x = 7:",
        answers: ["arctg(7) + πk", "arctg(7) + 2πk", "arctg(-7) + πk", "arctg(7) + 90°k"],
        correct: 0,
        multiple: false
      },
      {
        id: 290,
        chapter: 1,
        title: "Решение уравнения (2)",
        question: "Реши уравнение sin 3t = 1:",
        answers: ["π/6 + (2π/3)k", "π/2 + 2πk", "π/3 + πk", "π/4 + πk"],
        correct: 0,
        multiple: false
      },
      {
        id: 291,
        chapter: 1,
        title: "Решение уравнения (3)",
        question: "Реши уравнение cos(u/5) = -1:",
        answers: ["u = 5π + 10πk", "u = π + 2πk", "u = 10π + 5πk", "u = 0 + 5πk"],
        correct: 0,
        multiple: false
      },
      {
        id: 292,
        chapter: 1,
        title: "Нахождение значения выражения с использованием таблицы синусов",
        question: "Найди значение выражения 6·arcsin(-1) + 9·arcsin(1/2):",
        answers: ["-4.7", "0", "3.14", "-9.42"],
        correct:  0,
        multiple: false
      },
      {
        id: 293,
        chapter: 1,
        title: "Нахождение значения выражения с использованием таблицы косинусов",
        question: "Найди значение выражения 11·arccos(√3/2) − 7·arccos(√2/2):",
        answers: ["0.26", "1.57", "3.14", "-0.52"],
        correct:  0,
        multiple: false
      },
      {
        id: 294,
        chapter: 1,
        title: "Сравнение чисел",
        question: "Сравни arctg(√3/3) и -1:",
        answers: ["<", "=", ">", "Не сравнить"],
        correct: 2,
        multiple: false
      },
      {
        id: 295,
        chapter: 1,
        title: "Тригонометрическое уравнение вида sin5x = a",
        question: "Найди корни уравнения sin5x = √3/2 (в градусах):",
        answers: ["12° + 72°k; 60° + 72°k", "30° + 72°k; 90° + 72°k", "24° + 72°k; 48° + 72°k", "45° + 72°k; 135° + 72°k"],
        correct: 0,
        multiple: false
      },
      {
        id: 296,
        chapter: 1,
        title: "Нахождение значения выражения, содержащего арксинус",
        question: "Найди значение выражения arcsin(sin π/4) + arcsin(sin π/3) + 6.75:",
        answers: ["7.9", "8.5", "6.3", "9.1"],
        correct: 0,
        multiple: false
      },
      {
        id: 297,
        chapter: 1,
        title: "Нахождение значения выражения, содержащего арккосинус",
        question: "Найди значение выражения arccos(cos π/4) + arccos(cos π) − 5.8:",
        answers: ["-3.6", "0", "2.5", "-1.2"],
        correct: 0,
        multiple: false
      },
      {
        id: 298,
        chapter: 1,
        title: "Нахождение значения выражения",
        question: "Найди значение выражения tg(arctg(4.2)) + ctg(arctg(-1)) − 6:",
        answers: ["-4.8", "0", "3.2", "4.2"],
        correct: 0,
        multiple: false
      },
      {
        id: 299,
        chapter: 1,
        title: "Уравнение (разложение на множители, sin x, cos x)",
        question: "Реши уравнение x·cosx = -√2/2·sinx:",
        answers: ["x = 45° + 180°k; x = ±135° + 180°k", "x = 90° + 180°k; x = ±60° + 180°k", "x = 30° + 360°k; x = ±90° + 360°k", "x = 0° + 180°k; x = ±45° + 180°k"],
        correct: 0,
        multiple: false
      },
      {
        id: 300,
        chapter: 1,
        title: "Значение выражения",
        question: "Найди значение выражения arctg(ctg π/4) + arctg(tg π/4) + π/2:",
        answers: ["3.1", "1.6", "4.7", "0"],
        correct: 0,
        multiple: false
      },
      {
        id: 301,
        chapter: 1,
        title: "Уравнение (использование формулы двойного угла)",
        question: "Найди корни уравнения 2sinx − cosx + √3sinx = 0:",
        answers: ["x = 15° + 180°n; x = ±75° + 180°n", "x = 30° + 360°n; x = ±60° + 360°n", "x = 45° + 180°n; x = ±135° + 180°n", "x = 0° + 180°n; x = ±90° + 180°n"],
        correct: 0,
        multiple: false
      },
      {
        id: 302,
        chapter: 1,
        title: "Область определения тригонометрических функций (решение уравнения)",
        question: "Найди область определения функции y = cos9x / (2sin²3x − sin3x):",
        answers: ["x ≠ πn/3, n ∈ ℤ; x ≠ (-1)^n·π/18 + πn/3, n ∈ ℤ", "x ≠ 0; x ≠ πn, n ∈ ℤ", "x ∈ ℝ; нет ограничений", "x ≠ π/6 + πn; x ≠ π/4 + πn, n ∈ ℤ"],
        correct: 0,
        multiple: false
      },
      {
        id: 303,
        chapter: 1,
        title: "Уравнение (введение новой переменной, tg x)",
        question: "Реши уравнение 5tg²x + 9tgx = 2:",
        answers: [ "x = arctg(0.2) + πn; x = -arctg(2) + πn", "x = arctg(2) + 2πn; x = -arctg(0.2) + 2πn", "x = π/4 + πn; x = -π/3 + πn", "x = arctg(1) + πn; x = -arctg(3) + πn"],
        correct: 0,
        multiple: false
      },
      {
        id: 304,
        chapter: 1,
        title: "Решение уравнения вида sin t = a, cos t = a",
        question: "Вычисли корни уравнения cos t = √2/2:",
        answers: ["t = -π/4 + 2πk; t = π/4 + 2πk", "t = -π/3 + 2πk; t = π/3 + 2πk", "t = -π/6 + 2πk; t = π/6 + 2πk", "t = -π/2 + 2πk; t = π/2 + 2πk"],
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