let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 347,
        chapter: 1,
        title: "Наибольшее и наименьшее значения функции квадратного корня",
        question: "Найди наибольшее и наименьшее значения y=√(25−x²):",
        answers: ["y_max=5; y_min=0", "y_max=25; y_min=0", "y_max=5; y_min=−5", "y_max=0; y_min=−5"],
        correct: 0,
        multiple: false
      },
      {
        id: 348,
        chapter: 1,
        title: "Наименьшее и наибольшее значения функции на отрезке",
        question: "Найди y_min и y_max для y=x³+3x²−9x−2 на [−8;8]:",
        answers: ["y_min=−8; y_max=8", "y_min=−398; y_max=586", "y_min=0; y_max=100", "y_min=−2; y_max=10"],
        correct: 1,
        multiple: false
      },
      {
        id: 349,
        chapter: 1,
        title: "Hаибольшее и наименьшее значения степенной функции",
        question: "Найди y_max и y_min для y=−5x⁴+10 на [0;4]:",
        answers: ["y_max=10; y_min=−1270", "y_max=0; y_min=−10", "y_max=5; y_min=−5", "y_max=100; y_min=−100"],
        correct: 0,
        multiple: false
      },
      {
        id: 350,
        chapter: 1,
        title: "Вычисление наибольшего значения функции",
        question: "Наибольшее значение y=x/(100+x²):",
        answers: ["1/20", "1/10", "1/40", "0"],
        correct: 0,
        multiple: false
      },
      {
        id: 351,
        chapter: 1,
        title: "Вычисление наибольшего значения числа при произведении",
        question: "Два целых числа с суммой 14:",
        answers: ["7 и 7", "6 и 8", "5 и 9", "0 и 14"],
        correct: 0,
        multiple: false
      },
      {
        id: 352,
        chapter: 1,
        title: "Вычисление наибольшей площади",
        question: "Стороны прямоугольника с периметром 84 см:",
        answers: ["21 см и 21 см", "20 см и 22 см", "15 см и 27 см", "10 см и 32 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 353,
        chapter: 1,
        title: "Треугольник с максимальной площадью",
        question: "Стороны равнобедренного треугольника с периметром 44:",
        answers: ["14.67, 14.67, 14.67", "12, 16, 16", "10, 17, 17", "22, 11, 11"],
        correct: 0,
        multiple: false
      },
      {
        id: 354,
        chapter: 1,
        title: "Уравнение с параметром",
        question: "При каком n сумма квадратов корней наибольшая, при уравнении x²-2nx+22n²+8n=0?",
        answers: ["n=−0.2", "n=0", "n=1", "n=−1"],
        correct: 0,
        multiple: false
      },
      {
        id: 355,
        chapter: 1,
        title: "Ближайшая точка на графике",
        question: "Точка P на y=x² ближайшая к B(1.8, 0.5):",
        answers: ["P(1, 1)", "P(0.9, 0.81)", "P(1.5, 2.25)", "P(2, 4)"],
        correct: 1,
        multiple: false
      },
      {
        id: 356,
        chapter: 1,
        title: "Вычисление наибольшего объёма",
        question: "Сторона вырезанного квадрата (600x800 мм):",
        answers: ["100 мм", "73 мм", "50 мм", "200 мм"],
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