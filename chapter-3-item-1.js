let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 189,
        chapter: 1,
        title: "Преобразование градусной меры в радианную",
        question: "Преобразуйте 150° в радианную меру, выраженную через π.",
        answers: ["10/6 π", "6/6 π", "50/6 π", "5/6 π"],
        correct: 3,
        multiple: false
      },
      {
        id: 190,
        chapter: 1,
        title: "Вычисление выражения (основное тождество)",
        question: "Вычислите значение выражения 1/2 cos^2 2t + 1/2 sin^2 2t.",
        answers: ["1/2", "41/2", "1/27", "1/210"],
        correct: 0,
        multiple: false
      },
      {
        id: 191,
        chapter: 1,
        title: "Преобразование радианной меры в градусную",
        question: "Преобразуйте радианную меру 6π/5 в градусы.",
        answers: ["216°", "323°", "101°", "231°"],
        correct: 0,
        multiple: false
      },
      {
        id: 192,
        chapter: 1,
        title: "Синус и косинус",
        question: "2Вычислите sin(-2π) и cos(-2π).",
        answers: ["sin(-2π) = 1; cos(-2π) = 1", "sin(-2π) = 0; cos(-2π) = 1", "sin(-2π) = 0; cos(-2π) = 0"],
        correct: 1,
        multiple: false
      },
      {
        id: 193,
        chapter: 1,
        title: "Числовая окружность",
        question: "Определите, в какой четверти находится точка, соответствующая числу π/4.",
        answers: ["в третьей четверти", "в четвёртой четверти", "во второй четверти", "в первой четверти"],
        correct: 3,
        multiple: false
      },
      {
        id: 194,
        chapter: 1,
        title: "Вычисление тригонометрических функций заданного угла",
        question: "Найдите значение sin315°.",
        answers: ["- √2/3", "- √2/2", "- √5/2", "- √1/2"],
        correct: 1,
        multiple: false
      },
      {
        id: 195,
        chapter: 1,
        title: "Нахождение значения выражения с тангенсом и котангенсом",
        question: "Вычислите: 6ctg π/4 - 3/4 tg^2 (-π/3).",
        answers: ["15/4", "3.75", "15/15", "7.75"],
        correct: 0,
        multiple: false
      },
      {
        id: 196,
        chapter: 1,
        title: "Нахождение значения синуса и косинуса",
        question: "Найдите значение: 7cosπ - sin(- π/2) + sin^2 3π/2.",
        answers: ["-1", "-7", "-5", "-15"],
        correct: 2,
        multiple: false
      },
      {
        id: 197,
        chapter: 1,
        title: " Определение чисел, соответствующих точке",
        question: "Найдите все числа, соответствующие точке M{4π/5).",
        answers: ["5π⁄5 + 6πk, k ∈ ℤ", "4π⁄5 + 2πk, k ∈ ℤ", "4π⁄15 + 12πk, k ∈ ℤ"],
        correct: 1,
        multiple: false
      },
      {
        id: 198,
        chapter: 1,
        title: "Соответствие точек числовой окружности числам",
        question: "Определите все числа, соответствующие точке P.",
        answers: ["1π⁄2 + 2πk, k ∈ ℤ", "3π⁄2 + 2πk, k ∈ ℤ", "3π⁄22 + 2πk, k ∈ ℤ"],
        correct: 1,
        multiple: false
      },
      {
        id: 199,
        chapter: 1,
        title: "Определение координат точек",
        question: "Найдите координаты точки числовой окружности P(45π/4).",
        answers: ["P(√2/2; √2/2)", "P(0; -1)", "P(√3/2; 1/2)", "P(-√2/2; -√2/2)", "P(1/2; -√3/2)", "P(0; 1)", "P(1; 0)", "P(-1; 0)"],
        correct: 0,
        multiple: false
      },
      {
        id: 200,
        chapter: 1,
        title: "Расположение чисел в порядке возрастания",
        question: "Расположите числа в порядке возрастания: sin 41°, sin 82°, sin 120°, sin 163°.",
        answers: ["sin 41°; sin 82°; sin 120°; sin 163°", "sin 82°; sin 41°; sin 163°; sin 120°"],
        correct: 0,
        multiple: false
      },
      {
        id: 201,
        chapter: 1,
        title: "Сравнение чисел",
        question: "Расположите числа в порядке возрастания: cos 40°, cos 83°, cos 123°, cos 163°.",
        answers: ["sin 41°; sin 82°; sin 120°; sin 163°", "sin 40°; sin 83°; sin 123°; sin 163°"],
        correct: 1,
        multiple: false
      },
      {
        id: 202,
        chapter: 1,
        title: "Вычисление тангенса и котангенса некоторых чисел",
        question: "Найдите ctg(−19π/6).",
        answers: ["−√3", "−√5", "−√10", "−√13"],
        correct: 0,
        multiple: false
      },
      {
        id: 203,
        chapter: 1,
        title: "Вычисление элементов прямоугольного треугольника",
        question: "Найдите катеты, площадь и радиус описанной окружности для прямоугольного треугольника с гипотенузой c = 6 и углом α = 45°.",
        answers: ["Катеты: 4√2; 13√2; Площадь: 19; Радиус: 32", "Катеты: 3√2; 3√2; Площадь: 9; Радиус: 3"],
        correct:  1,
        multiple: false
      },
      {
        id: 204,
        chapter: 1,
        title: "Вычисление синуса и косинуса некоторых чисел",
        question: "Найдите cos(−37π/3) и sin(−37π/3).",
        answers: [ "cos(−37π/3) = 2/2; sin(−37π/3) = −√4/2", "cos(−37π/3) = - 1/2; sin(−37π/3) = −√13/2", "cos(−37π/3) = 1/2; sin(−37π/3) = −√3/2"],
        correct: 2,
        multiple: false
      },
      {
        id: 205,
        chapter: 1,
        title: " Длина дуги на числовой окружности, разделённой точками",
        question: "Чему равна длина дуги MC, если вторая четверть разделена пополам точкой M?",
        answers: ["π", "π/2", "π/5", "π/3"],
        correct: 0,
        multiple: false
      },
      {
        id: 206,
        chapter: 1,
        title: "Единичная окружность, квадранты",
        question: "В какой четверти находится угол 332°?",
        answers: ["в четвёртом", "в первом", "в третьем", "во втором"],
        correct: 0,
        multiple: false
      },
      {
        id: 207,
        chapter: 1,
        title: "Определение знака числа",
        question: "Укажите знак числа cos(5π/7).",
        answers: ["плюс", "минус"],
        correct: 1,
        multiple: false
      },
      {
        id: 208,
        chapter: 1,
        title: "Длина дуги на числовой окружности",
        question: "Вычислите градусную меру дуги CM, если третья четверть разделена в отношении 2:3.",
        answers: ["140°", "134°", "154°", "144°"],
        correct: 3,
        multiple: false
      },
      {
        id: 209,
        chapter: 1,
        title: "Симметрия точек на числовой окружности",
        question: "Как расположены точки t и π - t, если 0 < t < π?",
        answers: ["симметричны относительно начала отсчета - точки 0","симметричны относительно оси OY", "симметричны относительно оси OX"],
        correct: 1,
        multiple: false
      },
      {
        id: 210,
        chapter: 1,
        title: "Принадлежность точек числовой окружности",
        question: "Существует ли точка на числовой окружности с ординатой 0.9?",
        answers: ["Нет","Да"],
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