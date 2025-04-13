let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 317,
        chapter: 1,
        title: "Исследование свойств функции",
        question: "укажи промежутки возрастания f(x):",
        answers: ["(-∞; -4) ∪ (4; 14)", "(-∞; -4) ∪ (14; +∞)", "(-4; 4) ∪ (14; +∞)", "(4; 14) ∪ (14; +∞)"],
        correct: 1,
        multiple: false
      },
      {
        id: 318,
        chapter: 1,
        title: "Определение знака производной",
        question: "Знак φ'(x) в точках b и d:",
        answers: ["b: +; d: -", "b: -; d: +", "b: +; d: +", "b: -; d: -"],
        correct: 0,
        multiple: false
      },
      {
        id: 319,
        chapter: 1,
        title: "Интервалы монотонности дробной функции",
        question: "Интервалы монотонности f(x) = (3 + 11x²)/x:",
        answers: ["Возрастает: (-∞; -√(3/11)) ∪ (√(3/11); ∞); Убывает: (-√(3/11); 0) ∪ (0; √(3/11))", "Возрастает: (-∞; 0) ∪ (0; ∞); Убывает на всей области"],
        correct: 0,
        multiple: false
      },
      {
        id: 320,
        chapter: 1,
        title: "Монотонность функции в зависимости от параметра",
        question: "При каком a функция f(x) = ax⁵ − 2x +7 убывает?",
        answers: ["a ≤ 0", "a ≥ 0", "a = 0", "Нет таких a"],
        correct: 0,
        multiple: false
      },
      {
        id: 321,
        chapter: 1,
        title: "Характер монотонности",
        question: "Докажи монотонность y = 3x⁹ + 2x³ −9:",
        answers: ["y' = 27x⁸ +6x²; функция возрастает", "y' = 9x⁸ +6x²; функция убывает", "y' = 27x⁸; функция постоянна", "y' = 3x⁸ +2x²; функция не монотонна"],
        correct: 0,
        multiple: false
      },
      {
        id: 322,
        chapter: 1,
        title: "Точки экстремума",
        question: "Точки экстремума y =4x −8cosx:",
        answers: ["x=π/6 (минимум)", "x=π/3 (максимум)", "x=0 (минимум)", "x=π/2 (максимум)"],
        correct: 1,
        multiple: false
      },
      {
        id: 323,
        chapter: 1,
        title: "Производная в доказательстве неравенства",
        question: "Производная функции 2x +1/x² > 5:",
        answers: ["2(x³ −1)/x³", "2(x³ +1)/x³", "−3(x³ −1)/x³"],
        correct: 0,
        multiple: false
      },
      {
        id: 324,
        chapter: 1,
        title: "Характер монотонности заданной функции",
        question: "Функция y=5cosx + sin4x − 10x:",
        answers: ["Убывает на всей прямой", "Возрастает на всей прямой", "Имеет экстремумы", "Постоянна"],
        correct: 0,
        multiple: false
      },
      {
        id: 325,
        chapter: 1,
        title: "Нахождение параметра из отрезка убывания функции",
        question: "При каких b функция y=4x³−12x убывает на [b+4; b+6]:",
        answers: ["b ≤ −3", "b ≥ 1", "b = 0", "Нет решений"],
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