let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 378,
        chapter: 1,
        title: "Дополни определение",
        question: "Дополни предложение: Фигуру, ограниченную графиком функции, отрезком [a; b] и прямыми x=a и x=b, называют...",
        answers: ["параллелограммом", "криволинейной трапецией", "прямоугольником", "эллипсом"],
        correct: 1,
        multiple: false
      },
      {
        id: 379,
        chapter: 1,
        title: "Площадь фигуры",
        question: "Площадь между y=x, y=15−x, x=0, x=7:",
        answers: ["49", "56", "24.5", "38.5"],
        correct: 0,
        multiple: false
      },
      {
        id: 380,
        chapter: 1,
        title: "Вычисление площади",
        question: "Площадь под f(x)=x² от 1 до 2:",
        answers: ["7/3", "3", "5/2", "8/3"],
        correct: 0,
        multiple: false
      },
      {
        id: 381,
        chapter: 1,
        title: "Табличные интегралы",
        question: "∫eˣ dx =",
        answers: ["eˣ + C", "-cosx + C", "aˣ/lna + C", "sinx + C"],
        correct: 0,
        multiple: false
      },
      {
        id: 382,
        chapter: 1,
        title: "Определённый интеграл степенной функции",
        question: "∫₋₃² x⁴ dx:",
        answers: ["55", "275/5", "32/5", "-243/5"],
        correct: 0,
        multiple: false
      },
      {
        id: 383,
        chapter: 1,
        title: "Основной интеграл тригонометрической функции",
        question: "∫_{π/2}^{π/2} cosx dx:",
        answers: ["0", "1", "-1", "π"],
        correct: 0,
        multiple: false
      },
      {
        id: 384,
        chapter: 1,
        title: "Площадь фигуры, ограниченной графиками квадратных функций",
        question: "Площадь между y=x²−4x−13 и y=4x+11−x²:",
        answers: ["256/3", "128", "64", "32"],
        correct: 0,
        multiple: false
      },
      {
        id: 385,
        chapter: 1,
        title: "Площадь фигуры, ограниченной графиками квадратной функции и функции квадратного корня",
        question: "Площадь между y=16x² и y=8√x:",
        answers: ["1/3", "2/3", "4/3", "8/3"],
        correct: 0,
        multiple: false
      },
      {
        id: 386,
        chapter: 1,
        title: "Площадь фигуры, ограниченной графиком тригонометрической функции",
        question: "Площадь под y=6+sinx от π до 3π/2:",
        answers: ["3π −1", "6π +1", "3π +1", "6π −1"],
        correct: 0,
        multiple: false
      },
      {
        id: 387,
        chapter: 1,
        title: "Неопределённый интеграл от дробной функции",
        question: "∫(8x⁴+16x²+13)/(1+x²) dx:",
        answers: ["8x³/3 −8x +13arctgx +C", "8x³/3 +8x +13arctgx +C", "8x³/3 +8x −13arctgx +C", "8x³/3 −8x −13arctgx +C"],
        correct: 0,
        multiple: false
      },
      {
        id: 388,
        chapter: 1,
        title: "Площадь фигуры, ограниченной графиками показательной и линейной функций",
        question: "Площадь между y=1/10ˣ, x−2y+2=0, x=3:",
        answers: ["3/ln10 −1/4", "1/ln10 +1/2", "3/ln10 +1/2", "1/ln10 −1/4"],
        correct: 0,
        multiple: false
      },
      {
        id: 389,
        chapter: 1,
        title: "Неопределённый интеграл от дробной тригонометрической функции",
        question: "∫(3 −4/sin²x)dx:",
        answers: ["3x +4ctgx +C", "3x −4ctgx +C", "3x +4tgx +C", "3x −4tgx +C"],
        correct: 1,
        multiple: false
      },
      {
        id: 390,
        chapter: 1,
        title: "Неопределённый интеграл от показательной функции",
        question: "∫8ˣ(2+5·8⁻ˣ)dx:",
        answers: ["2·8ˣ/ln8 +5x +C", "5·8ˣ/ln8 +2x +C", "8ˣ +5x +C", "8ˣ/ln8 +5x +C"],
        correct: 0,
        multiple: false
      },
      {
        id: 391,
        chapter: 1,
        title: "Неопределённый интеграл, метод замены переменной, натуральный логарифм",
        question: "∫ln⁹(6x+30)/(x+5)dx:",
        answers: ["ln¹⁰(6x+30)/10 +C", "ln⁹(6x+30)/9 +C", "ln⁸(6x+30)/8 +C", "ln¹⁰(6x+30)/60 +C"],
        correct: 0,
        multiple: false
      },
      {
        id: 392,
        chapter: 1,
        title: "Неопределённый интеграл, метод замены переменной, тригонометрические функции",
        question: "∫cos(x+7)/(9+sin²(x+7))dx:",
        answers: ["(1/3)arctg(sin(x+7)/3) +C", "arctg(sin(x+7)/3) +C", "(1/3)arctg(sin(x+7)) +C", "3arctg(sin(x+7)/3) +C"],
        correct: 0,
        multiple: false
      },
      {
        id: 393,
        chapter: 1,
        title: "Определённый интеграл, функция, содержащая квадратный корень",
        question: "∫₀¹√(1−30x)dx:",
        answers: ["−61/450", "0", "1/2", "Не существует"],
        correct: 0,
        multiple: false
      },
      {
        id: 394,
        chapter: 1,
        title: "Определённый интеграл, тригонометрическая функция",
        question: "∫_{-33π/8}^{17π/8}cos²(x+6π)dx:",
        answers: ["25π/2", "17π/8", "0", "π/2"],
        correct: 0,
        multiple: false
      },
      {
        id: 395,
        chapter: 1,
        title: "Объём тела",
        question: "Объём вращения y=x²+3 от 0 до 4:",
        answers: ["(1024/5 + 96 + 48)π", "1024π", "256π", "512π"],
        correct: 0,
        multiple: false
      },
      {
        id: 396,
        chapter: 1,
        title: "Площадь фигуры, ограниченной графиком параболы и касательной",
        question: "Площадь между f(x)=3−0.3x², касательной в x=−2 и x=2:",
        answers: ["10.4", "8.2", "12.6", "6.8"],
        correct: 0,
        multiple: false
      },
      {
        id: 397,
        chapter: 1,
        title: "Вычисление объёма тела",
        question: "Объём вращения y=3x² и y=9x:",
        answers: ["(243/5 − 729/7)π", "243π", "729π", "81π"],
        correct: 0,
        multiple: false
      },
      {
        id: 398,
        chapter: 1,
        title: "Определённый интеграл, геометрический смысл",
        question: "∫₋₇³|x+1|dx:",
        answers: ["25", "20", "30", "15"],
        correct: 0,
        multiple: false
      },
      {
        id: 399,
        chapter: 1,
        title: "Вычисление силы сжатия пружины",
        question: "Работа при сжатии пружины на 6 см:",
        answers: ["0.36 Дж", "0.72 Дж", "1.08 Дж", "0.18 Дж"],
        correct: 0,
        multiple: false
      },
      {
        id: 320,
        chapter: 1,
        title: "Физический смысл определённого интеграла",
        question: "Сила давления на треугольную пластинку с основанием 0,05м и высотой 0,5 м, погружена в воду так, что ее вершина лежит на поверхности воды, а основание параллельно ей:",
        answers: ["41 Н", "20 Н", "60 Н", "100 Н"],
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