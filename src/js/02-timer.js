import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';

const refs = {
  input: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', true);
let intervalId = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  mode: 'single',
  minuteIncrement: 1,
  locale: Ukrainian,
  onOpen() {},
  onChange() {
    clearInterval(intervalId);
    console.log('change', intervalId);
    refs.days.textContent = addLeadingZero(0);
    refs.hours.textContent = addLeadingZero(0);
    refs.minutes.textContent = addLeadingZero(0);
    refs.seconds.textContent = addLeadingZero(0);
  },
  onClose(selectedDates) {
    if (selectedDates[0] - new Date() <= 0) {
      refs.startBtn.setAttribute('disabled', true);
      Notify.failure('Please choose a date in the future', {
        clickToClose: true,
      });
      return;
    }
    const targetTime = selectedDates[0];
    refs.startBtn.removeAttribute('disabled');
    refs.startBtn.addEventListener('click', onStartBtnClick);

    function onStartBtnClick() {
      refs.startBtn.setAttribute('disabled', true);
      refs.startBtn.removeEventListener('click', onStartBtnClick);

      intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeleft = targetTime - currentTime;
        const convertedTime = convertMs(timeleft);
        refs.days.textContent = addLeadingZero(convertedTime.days);
        refs.hours.textContent = addLeadingZero(convertedTime.hours);
        refs.minutes.textContent = addLeadingZero(convertedTime.minutes);
        refs.seconds.textContent = addLeadingZero(convertedTime.seconds);
        if (Object.values(convertedTime).every(element => element === 0)) {
          clearInterval(intervalId);
          refs.startBtn.setAttribute('disabled', true);
        }
      }, 1000);
      console.log('click', intervalId);
    }
    console.log('close', intervalId);
  },
};

flatpickr(refs.input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
