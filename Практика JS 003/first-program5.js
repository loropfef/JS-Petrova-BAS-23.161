let initialWeight = 60000; // Исходный вес в граммах
let targetWeight = 50000; // Желанный вес в граммах
let currentWeight = initialWeight;
let days = 0;
while (currentWeight > targetWeight) {
    currentWeight *= 0.95; // Теряем 5% веса каждый день
    days++;
}
console.log("Количество дней, необходимых для достижения желаемого веса:", days);
                                   ТЕСТЫ:
          let initialWeight = 70000; // Исходный вес в граммах
          let targetWeight = 50000; // Желанный вес в граммах
          let currentWeight = initialWeight;
          let days = 0;
          while (currentWeight > targetWeight) {
              currentWeight *= 0.95; // Теряем 5% веса каждый день
              days++;
          }
          console.log("Количество дней, необходимых для достижения желаемого веса:", days);
                   ПОЛУЧИТСЯ 7 ДНЕЙ ВСЁ ОСТАЛЬНОЕ РАБОТАЕТ