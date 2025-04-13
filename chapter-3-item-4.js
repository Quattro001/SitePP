let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 268,
        chapter: 1,
        title: "Сравнение значений обратных тригонометрических функций",
        question: "arcsin(1/2) ___ arcsin(2/3); arccos(1/2) ___ arccos(2/3); arctg(-1) ___ arctg(-2).",
        answers: ["<; >; >", ">; <; <", "<; <; >", ">; >; <"],
        correct: 0,
        multiple: false
      },
      {
        id: 269,
        chapter: 1,
        title: "Определение арккосинуса числа",
        question: "Имеет ли смысл выражение arccos(√7 − 1)?",
        answers: ["Да", "Нет", "Зависит от x", "Не определено"],
        correct: 1,
        multiple: false
      },
      {
        id: 270,
        chapter: 1,
        title: "Существование выражения arcsinx",
        question: "Имеет ли смысл выражение arcsin(√7 − 3)?",
        answers: ["Нет", "Да", "Только при x > 0", "Иногда"],
        correct: 1,
        multiple: false
      },
      {
        id: 271,
        chapter: 1,
        title: "Определение арктангенса или арккотангенса числа",
        question: "Запиши, имеет ли смысл выражение arccég 0.",
        answers: ["Да", "Нет", "Только в комплексных числах", "Частично"],
        correct: 0,
        multiple: false
      },
      {
        id: 272,
        chapter: 1,
        title: "Область определения функции y = arcsinx",
        question: "Найди область определения функции y = arcsin((x − 7)/5): x ∈ [... , ...].",
        answers: ["[2, 12]", "[−5, 5]", "[0, 10]", "[−3, 17]"],
        correct: 0,
        multiple: false
      },
      {
        id: 273,
        chapter: 1,
        title: "Область определения функции y = arccosx",
        question: "Найди область определения функции y = arccos((8 −5x)/4) (в десятичных дробях).",
        answers: ["[0.8, 2.4]", "[−1.2, 3.6]", "[1.5, 4.5]", "[−2.0, 5.0]"],
        correct: 0,
        multiple: false
      },
      {
        id: 274,
        chapter: 1,
        title: "Связь между значениями тригонометрических функций и им обратными функциями",
        question: "√2 * cos(arcsin(√2/2) = ___.",
        answers: ["1", "0", "√3", "2"],
        correct: 0,
        multiple: false
      },
      {
        id: 275,
        chapter: 1,
        title: "Вычисление значений обратных тригонометрических функций",
        question: "arcsin(1/2) + arccos(1) − 2*arctg(- √3/3) + arcctg(0) = ___.",
        answers: ["π", "0", "−π", "2π"],
        correct: 0,
        multiple: false
      },
      {
        id: 276,
        chapter: 1,
        title: "Множество значений обратных тригонометрических функций",
        question: "Найди область значений функции y = 3.69 * arctg(x).",
        answers: ["(−5.80, 5.80)", "[0, 3.69π)", "(−∞, ∞)", "[−1.85, 1.85]"],
        correct: 0,
        multiple: false
      },
      {
        id: 277,
        chapter: 1,
        title: "Определение чётности обратных тригонометрических функций",
        question: "Исследуй на чётность: y = 3x³ arccos(x⁶).",
        answers: ["чётная", "нечётная", "ни то, ни другое", "периодическая"],
        correct: 1,
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