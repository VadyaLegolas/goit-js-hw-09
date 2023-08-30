import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
  clickToClose: true,
});

Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
  clickToClose: true,
});


createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
