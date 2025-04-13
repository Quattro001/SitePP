let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 243,
        chapter: 1,
        title: "Возрастание и убывание функции y = sinx",
        question: "Определите, возрастает или убывает функция y = sin x на отрезке [- 5π/2, - 3π/2].",
        answers: ["убывает", "возрастает", "не монотонна"],
        correct: 0,
        multiple: false
      },
      {
        id: 244,
        chapter: 1,
        title: "Возрастание и убывание функции y = cosx",
        question: "Определите, возрастает или убывает функция y = cosx на отрезке [5π, - 6π].",
        answers: ["убывает", "возрастает", "не монотонна"],
        correct: 0,
        multiple: false
      },
      {
        id: 245,
        chapter: 1,
        title: "Определение значений синусов некоторых углов",
        question: "Найдите значение функции y = f(x), где f(x)= sinx при f(π/2).",
        answers: ["1", "0", "-1", "√2/2"],
        correct: 0,
        multiple: false
      },
      {
        id: 246,
        chapter: 1,
        title: "Сравнение чисел с использованием свойств функции y = cosx",
        question: "Сравните числа: cos(7π/20) и cos(π/7).",
        answers: [">", "<", "="],
        correct: 1,
        multiple: false
      },
      {
        id: 247,
        chapter: 1,
        title: "Определение значения функции y = tgx и y = ctgx",
        question: "Вычислите ctg(2π).",
        answers: ["0", "1", "-1", "не существует"],
        correct: 3,
        multiple: false
      },
      {
        id: 248,
        chapter: 1,
        title: "Преобразование выражения sin t и определение его значения",
        question: "Найдите значение sin 10π.",
        answers: ["0", "1", "-1", "0.5"],
        correct: 0,
        multiple: false
      },
      {
        id: 249,
        chapter: 1,
        title: "Определение значений косинусов некоторых углов",
        question: "Найдите значение функции y = cos x при x = - π/3.",
        answers: ["0.5", "-0.5", "√3/2", "-√3/2"],
        correct: 0,
        multiple: false
      },
      {
        id: 250,
        chapter: 1,
        title: "Определение значения тригонометрической функции",
        question: "Найдите tgx, если tg(5π + x) = - 3/11.",
        answers: ["3/11", "-3/11", "0", "не существует"],
        correct: 1,
        multiple: false
      },
      {
        id: 251,
        chapter: 1,
        title: "Сравнение чисел с использованием свойств функции y = sinx",
        question: "Сравните числа: sin(13π/10) и sin(7π/10).",
        answers: ["<", ">", "="],
        correct: 0,
        multiple: false
      },
      {
        id: 252,
        chapter: 1,
        title: "Преобразование выражения cos t и определение его значения",
        question: "Найдите значение cos 41.5π, чтобы угол находился в промежутке от 0 до 2π",
        answers: ["0", "1", "-1", "√2/2"],
        correct: 0,
        multiple: false
      },
      {
        id: 253,
        chapter: 1,
        title: "Определение знака выражения",
        question: "Определите знак разности tg202° - tg206°.",
        answers: ["< 0", "> 0", "= 0", "не определён"],
        correct: 1,
        multiple: false
      },
      {
        id: 254,
        chapter: 1,
        title: "Принадлежность точек графику",
        question: "Принадлежит ли точка B(2π/3; 5) графику функции y = -4sin(x + π/6) + 3?",
        answers: ["Принадлежит", "Не принадлежит", "Нельзя определить"],
        correct: 1,
        multiple: false
      },
      {
        id: 255,
        chapter: 1,
        title: "Применение формул приведения к сравнению чисел",
        question: "Сравните числа: cos(2π/7) и sin(3π/14).",
        answers: ["<", ">", "=", "не сравнить"],
        correct: 1,
        multiple: false
      },
      {
        id: 256,
        chapter: 1,
        title: "Свойства функции y = tgx",
        question: "Сравните tg(π/4) и tg(-π/4).",
        answers: ["<", ">", "=", "не сравнить"],
        correct: 1,
        multiple: false
      },
      {
        id: 257,
        chapter: 1,
        title: "Построение графика функции y = sin x",
        question: "Какой функции соответствует график C?",
        answers: ["y = sin(x - π/3)", "y = 2sinx", "y = sin(x + π/4)", "y = -sinx + 3"],
        correct:  0,
        multiple: false
      },
      {
        id: 258,
        chapter: 1,
        title: "Построение графика функции y = cosx + b или y = cos(x + а)",
        question: "Какой функции соответствует график H?",
        answers: ["y = cos(x - π/4)", "y = cosx + 2", "y = -cosx + 3", "y = 2cosx"],
        correct:  0,
        multiple: false
      },
      {
        id: 259,
        chapter: 1,
        title: "Область определения и множество значений тригонометрических функций",
        question: "Верно ли, что x ≠ π/4 + 8πn, n ∈ ℤ для y = cos8x?",
        answers: ["Нет", "Да", "Только для n = 0"],
        correct: 0,
        multiple: false
      },
      {
        id: 260,
        chapter: 1,
        title: "Нахождение наибольшего и наименьшего значений функции y = sinx",
        question: "Найдите наибольшее и наименьшее значения y = sin x на [π/4, 2π/3].",
        answers: ["y_наиб = 1; y_наим = √2/2", "y_наиб = √3/2; y_наим = 0.5"],
        correct: 0,
        multiple: false
      },
      {
        id: 261,
        chapter: 1,
        title: "Принадлежность точек графику функции y = k cos(x + a) + b",
        question: "Принадлежит ли точка C(π/3; 1) графику y = -4cos(x + π/6) + 5?",
        answers: ["Принадлежит", "Не принадлежит", "Частично"],
        correct: 1,
        multiple: false
      },
      {
        id: 262,
        chapter: 1,
        title: "Сравнение свойств тригонометрических функций",
        question: "Является ли y = sinx возрастающей на (-2π, - 3π/2)?",
        answers: ["Да", "Нет", "Не монотонна"],
        correct: 1,
        multiple: false
      },
      {
        id: 263,
        chapter: 1,
        title: "Область значений функции y = sinx",
        question: "Найдите область значений y = √(9 - 4sinx).",
        answers: ["[√5; √13]", "[3; √13]", "[0; 3]"],
        correct: 0,
        multiple: false
      },
      {
        id: 264,
        chapter: 1,
        title: "Нахождение наибольшего и наименьшего значений функции y = cosx",
        question: "Найдите наибольшее и наименьшее значения y = cos x на (π/3, π/3).",
        answers: ["y_наиб = 1; y_наим = 0.5", "y_наиб = 0.5; y_наим = -0.5"],
        correct: 1,
        multiple: false
      },
      {
        id: 265,
        chapter: 1,
        title: "Определение чётности функции",
        question: "Исследуйте чётность функции f(x) = x^7·sin(x/8).",
        answers: ["чётная", "нечётная", "ни то, ни другое"],
        correct: 1,
        multiple: false
      },
      {
        id: 266,
        chapter: 1,
        title: "Область значений функции y = cosx",
        question: "Найдите область значений y = 7cosx - 4.",
        answers: ["[-11; 3]", "[-7; 7]", "[3; 7]"],
        correct: 0,
        multiple: false
      },
      {
        id: 267,
        chapter: 1,
        title: "Определение чётности функции",
        question: "Определите чётность функции f(x) = cos6x.",
        answers: ["чётная", "нечётная", "ни то, ни другое"],
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