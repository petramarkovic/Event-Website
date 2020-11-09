const performersDiv = document.querySelector('.performers');
const scheduleDiv = document.querySelector('.schedule');
const performersBtn = document.getElementById('performers');
const scheduleBtn = document.getElementById('schedule');


performersBtn.addEventListener('click', loadPerformers);
function loadPerformers(e){
    e.preventDefault();
    performersDiv.style.display = 'block';
    scheduleDiv.style.display = 'none';
    
}

scheduleBtn.addEventListener('click', loadSchedule);
function loadSchedule(e){
    e.preventDefault();
  performersDiv.style.display = 'none';
  scheduleDiv.style.display = 'flex';
};