let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 122,
        chapter: 1,
        title: "Предел функции при стремлении х к бесконечности",
        question: "Дано: lim_{x → ∞} f(x) = 10, lim_{x → ∞} g(x) = -4, lim_{x → ∞} h(x) = -6. Вычислите lim_{x → ∞} (2f(x) + 3h(x)) / (g(x) + 17).",
        answers: ["22/1", "20/3", "10/13", "2/13"],
        correct: 3,
        multiple: false
      },
      {
        id: 199,
        chapter: 1,
        title: "Предел дробной функции в данной точке",
        question: "lim(x→2) (x²−4)/(4x+2):",
        answers: ["0/1", "1/2", "-1/3", "2/5"],
        correct: 0,
        multiple: false
      },
      {
        id: 120,
        chapter: 1,
        title: "Предел степенной функции",
        question: "lim(x→∞) (1/x⁶ − 3/x⁴ + 13):",
        answers: ["13", "0", "-5", "1/3"],
        correct: 0,
        multiple: false
      },
      {
        id: 121,
        chapter: 1,
        title: "Приращение тригонометрической функции",
        question: "Δy для y=2sinx·cosx от x₀=0 до x₁=π/4:",
        answers: ["1", "0", "√2", "2"],
        correct: 0,
        multiple: false
      },
      {
        id: 305,
        chapter: 1,
        title: "Предел дробной функции, неопределённость (∞/∞)",
        question: "lim(x→∞) (3x²+8x+6)/(5x²−6x+9):",
        answers: ["3/5", "1", "0", "5/3"],
        correct: 0,
        multiple: false
      },
      {
        id: 306,
        chapter: 1,
        title: "Предел дробной функции, неопределённость (0/0)",
        question: "lim(x→-3) (x²+12x+27)/(x²−9):",
        answers: ["-1/1", "0/1", "3/1", "-3/1"],
        correct: 0,
        multiple: false
      },
      {
        id: 307,
        chapter: 1,
        title: "Предел функции, содержащей квадратные корни, домножение на сопряжённое выражение",
        question: "lim(x→3) (√(x+19)−√(4x+10))/(x−3):",
        answers: ["-3/(2√22)", "1/√2", "0", "5/4"],
        correct: 0,
        multiple: false
      },
      {
        id: 308,
        chapter: 1,
        title: "Предел функции, содержащей квадратные корни",
        question: "lim(x→∞) (5x√x +3x +6)/(7x +4x√x):",
        answers: ["5/4", "1", "0", "∞"],
        correct: 0,
        multiple: false
      },
      {
        id: 309,
        chapter: 1,
        title: "Предел дробной функции, неопределённость (0/0), формула суммы кубов",
        question: "lim(x→-4) (x³+64)/(x²+7x+12):",
        answers: ["-48/1", "0/1", "64/1", "12/1"],
        correct: 0,
        multiple: false
      },
      {
        id: 310,
        chapter: 1,
        title: "Предел тригонометрической функции",
        question: "arccos 1 = ?",
        answers: ["0", "π/2", "π", "1"],
        correct: 0,
        multiple: false
      },
      {
        id: 311,
        chapter: 1,
        title: "Приращение квадратичной функции",
        question: "Δy для y=13x²:",
        answers: ["26xΔx +13(Δx)²", "13xΔx", "26xΔx", "13Δx²"],
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