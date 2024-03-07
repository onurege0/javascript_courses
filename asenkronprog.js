function asyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random() * 10;
      if (randomNumber < 5) {
        resolve(randomNumber);
      } else {
        reject(new Error("Random number is too high"));
      }
    }, 1000);
  });
}

async function usingAsyncAwait() {
  try {
    const result = await asyncTask();
    console.log("Başarılı:", result);
  } catch (error) {
    console.error("Hata:", error.message);
  }
}

function usingThenCatch() {
  asyncTask()
    .then((result) => {
      console.log("Başarılı:", result);
    })
    .catch((error) => {
      console.error("Hata:", error.message);
    });
}

usingAsyncAwait();

usingThenCatch();
