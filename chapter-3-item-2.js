let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 211,
        chapter: 1,
        title: "Возрастание и убывание функции y = sinx",
        question: "Определите, возрастает или убывает функция y = sin x на отрезке [5π/2, -3π/2].",
        answers: ["убывает", "возрастает", "не монотонна"],
        correct: 0,
        multiple: false
      },
      {
        id: 212,
        chapter: 1,
        title: "Определение значений синусов некоторых углов",
        question: "Найдите значение функции y = f(x) где f(x)= sin x, значение: f(π/2).",
        answers: ["0", "1", "-1", "√2/2"],
        correct: 1,
        multiple: false
      },
      {
        id: 213,
        chapter: 1,
        title: "Преобразование выражения sin t и определение его значения",
        question: "Найдите значение sin 10π.",
        answers: ["-1", "1", "0", "0.5"],
        correct: 2,
        multiple: false
      },
      {
        id: 214,
        chapter: 1,
        title: "Возрастание и убывание функции y = cosx",
        question: "Определите, возрастает или убывает функция y = cos x на отрезке [5π, 6π].",
        answers: ["возрастает", "убывает", "не монотонна"],
        correct: 0,
        multiple: false
      },
      {
        id: 215,
        chapter: 1,
        title: "Сравнение чисел с использованием свойств функции y = cosx",
        question: "Сравните числа: cos(7π/20) и cos(π/7).",
        answers: ["<", ">", "="],
        correct: 0,
        multiple: false
      },
      {
        id: 216,
        chapter: 1,
        title: "Определение значений косинусов некоторых углов",
        question: "Найдите значение функции y = f(x), где f(x)= cos x, значение: f(- π/3).",
        answers: ["√3/2", "-0.5", "0.5", "-√3/2"],
        correct: 2,
        multiple: false
      },
      {
        id: 217,
        chapter: 1,
        title: "Преобразование выражения cos t и определение его значения",
        question: "Найдите значение cos 41.5π.",
        answers: ["0", "1", "-1", "√2/2"],
        correct: 0,
        multiple: false
      },
      {
        id: 218,
        chapter: 1,
        title: "Область определения тригонометрических функций",
        question: "Возможно ли, что область определения функции y = sin√5x x ∈ (-∞;+∞)",
        answers: ["Да", "Нет"],
        correct: 1,
        multiple: false
      },
      {
        id: 219,
        chapter: 1,
        title: "Определение значения функции y = tgx и y = ctgx",
        question: "Вычислите y = ctgx при значении аргумента x=2π.",
        answers: ["-1", "0", "1", "не существует"],
        correct: 3,
        multiple: false
      },
      {
        id: 220,
        chapter: 1,
        title: "Определение множества значений тригонометрических функций",
        question: "Вычесли множество значений функции y = 10 - 6cos4x",
        answers: ["[4; 16]", "[0; 10]", "[-6; 6]"],
        correct: 0,
        multiple: false
      },
      {
        id: 221,
        chapter: 1,
        title: "Определение значения тригонометрической функции",
        question: "Найдите tgx, если tg(5π + x) = -3/11.",
        answers: ["-13/11", "-3/11", "-1/11"],
        correct: 1,
        multiple: false
      },
      {
        id: 222,
        chapter: 1,
        title: "Множество значений тригонометрических функций",
        question: "Найдите диапазон значений функции y = 1 + 9sin4x.",
        answers: ["[-2; 0]", "[-18; 1]", "[-8; 10]"],
        correct: 2,
        multiple: false
      },
      {
        id: 223,
        chapter: 1,
        title: "Определение знака выражения",
        question: "Определите знак разности tg202° - tg206°.",
        answers: ["< 0", "> 0", "= 0"],
        correct: 1,
        multiple: false
      },
      {
        id: 224,
        chapter: 1,
        title: "Упрощение выражения",
        question: "Упростите выражение cos²t - 1.",
        answers: ["-sin²t", "0", "tg²t", "cos²t"],
        correct: 0,
        multiple: false
      },
      {
        id: 225,
        chapter: 1,
        title: "Сравнение чисел с использованием свойств функции y = sinx",
        question: "Сравните числа: sin(13π/10) и sin(7π/10).",
        answers: ["<", ">", "="],
        correct:  0,
        multiple: false
      },
      {
        id: 226,
        chapter: 1,
        title: "Принадлежность точек графику",
        question: "Принадлежит ли точка B(2π/3; 5) графику функции y = -4sin(x + π/6) + 3?",
        answers: ["Принадлежит", "Не принадлежит"],
        correct: 0,
        multiple: false
      },
      {
        id: 227,
        chapter: 1,
        title: "Построение графика функции y = sin x",
        question: "Какой функции соответствует график C?",
        answers: ["y = sin(x - π/3)", "y = 2sinx", "y = sin(x + π/4)"],
        correct: 0,
        multiple: false
      },
      {
        id: 228,
        chapter: 1,
        title: "Область определения и множество значений тригонометрических функций",
        question: "Верно ли, что x ≠ π4 + 8πn, n ∈ ℤ для функции y = cos8x?",
        answers: ["Нет", "Да"],
        correct: 0,
        multiple: false
      },
      {
        id: 229,
        chapter: 1,
        title: "Применение формул приведения к сравнению чисел",
        question: "Сравните числа: cos(2π/7) и sin(3π/14).",
        answers: ["<", ">", "="],
        correct: 1,
        multiple: false
      },
      {
        id: 230,
        chapter: 1,
        title: "Построение графика функции y = cosx + b или y = cos(x + а)",
        question: "Какой функции соответствует график H?",
        answers: ["y = cos(x - π/4)", "y = cosx", "y = -cosx + 3"],
        correct: 0,
        multiple: false
      },
      {
        id: 231,
        chapter: 1,
        title: "Принадлежность точек графику функции y = k cos(x + a) + b",
        question: "Принадлежит ли точка C(π/3; 1) графику функции y = -4cos(x + π/6) + 5?",
        answers: ["Не принадлежит", "Принадлежит"],
        correct: 0,
        multiple: false
      },
      {
        id: 232,
        chapter: 1,
        title: "Нахождение наибольшего и наименьшего значений функции y = cosx",
        question: "Найдите наибольшее и наименьшее значения y = cos x на [-π/3, π/3).",
        answers: ["y наиб = 5; y наим = 2.5", "y наиб = 1; y наим = 0.5"],
        correct: 1,
        multiple: false
      },
      {
        id: 233,
        chapter: 1,
        title: "Область значений функции y = cosx",
        question: "Найдите область значений y = 7cosx - 4.",
        answers: ["[-11; 3]", "[-7; 7]", "[3; 7]"],
        correct: 0,
        multiple: false
      },
      {
        id: 234,
        chapter: 1,
        title: "Определение чётности функции",
        question: "Определите чётность или нечетность функции f(x) = x⁰·cos6x.",
        answers: ["чётная", "нечётная", "ни то, ни другое"],
        correct: 0,
        multiple: false
      },
      {
        id: 235,
        chapter: 1,
        title: "Свойства функции y = tgx",
        question: "Сравните tg(π/4) и tg(- π/4).",
        answers: ["=", "<", ">"],
        correct: 2,
        multiple: false
      },
      {
        id: 236,
        chapter: 1,
        title: "Сравнение свойств тригонометрических функций",
        question: "Является ли y = sin x возрастающей на (-2π, - 3π/2)?",
        answers: ["Нет", "Да"],
        correct: 0,
        multiple: false
      },
      {
        id: 237,
        chapter: 1,
        title: "Наибольшее и наименьшее значения выражения",
        question: "Найдите наименьшее и наибольшее значения 23 + 5sinx.",
        answers: ["23; 28", "18; 28", "5; 23"],
        correct: 1,
        multiple: false
      },
      {
        id: 238,
        chapter: 1,
        title: "Нахождение значений тригонометрических функций",
        question: "Найдите sin t, cos t, tg t при ctg t = 16/63, π < t < 3π/2.",
        answers: ["sin t = - 6/6; cos t = - 1/65; tg t = 63/6", "sin t = -63/65; cos t = -16/65; tg t = 63/16"],
        correct: 1,
        multiple: false
      },
      {
        id: 239,
        chapter: 1,
        title: "Определение значений тригонометрических функций",
        question: "Найдите sin t, tg t, ctg t при cos t = 21/29, 0 < t < π/2.",
        answers: ["sin t = 20/30; tg t = 25/21; ctg t = 20/20", "sin t = 20/29; tg t = 20/21; ctg t = 21/20"],
        correct: 1,
        multiple: false
      },
      {
        id: 240,
        chapter: 1,
        title: "Нахождение наибольшего и наименьшего значений функции y = sinx",
        question: "Найдите наибольшее и наименьшее значения y = sin x на [π/4, 2π/3].",
        answers: ["y наиб = 1; y наим = -1", "y наиб = 10; y наим = -1"],
        correct: 0,
        multiple: false
      },
      {
        id: 241,
        chapter: 1,
        title: "Область значений функции y = sinx",
        question: "Найдите область значений y = √(9 - 4sinx).",
        answers: ["[√5; √13]", "[3; √13]", "[0; 3]"],
        correct: 0,
        multiple: false
      },
      {
        id: 242,
        chapter: 1,
        title: "Определение чётности функции",
        question: "Исследуйте чётность функции f(x) = x·sin(x/8).",
        answers: ["ни чётная, ни нечётная", "чётная", "нечётная"],
        correct: 2,
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