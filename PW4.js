class web_calculator {
            // Метод для калькулятора 1
            static calculator1() {
                // Ініціалізація значень
                const kNominalTension = 10;
                const kCurrentDensity = 1.4;
                const kCtVal = 92;
                // Отримання значень від користувача
                const kIkVal = parseFloat(document.getElementById("kIk").value); // Струм КЗ, кА
                const kSmVal = parseFloat(document.getElementById("kSm").value); // Розрахункове навантаження, кВ * A
                const ktPhiVal = parseFloat(document.getElementById("ktPhi").value); // Фіктивний час вимикання струму КЗ, с
                // Перевірка на введення усіх значень
                if (isNaN(kIkVal) || isNaN(kSmVal) || isNaN(ktPhiVal)) {
                    alert("Будь ласка, введіть усі значення.");
                    return;
                }
                // Розрахунок формул
                let kImVal = (kSmVal / 2) / (Math.sqrt(3) * kNominalTension);
                let kImPaVal = 2 * kImVal;
                let kSekVal = kImVal / kCurrentDensity;
                let kS_SMinVal = (kIkVal * 1000 * Math.sqrt(ktPhiVal)) / kCtVal;
                // Вивід результатів
                document.getElementById("result1").innerHTML = "Результат: <br> Розрахунковий струм для нормального режиму, А: " + kImVal.toFixed(2) + "<br> Розрахунковий струм для післяаварійного режиму, А: " + kImPaVal.toFixed(2) + "<br> Економічний переріз, мм^2: " + kSekVal.toFixed(2) + "<br> Кабель: ААБ 10 3×25" + "<br> Термічна стійкість кабелю до дії струмів КЗ, мм^2: " + kS_SMinVal.toFixed(2);
            }

            // Метод для калькулятора 2
            static calculator2() {
                // Ініціалізація значень
                const kUsnVal = 10.5;
                const kUkPercVal = 10.5;
                const kSnomtVal = 6.3;
                // Отримання значень від користувача
                const kKZPower = parseFloat(document.getElementById("kKZPower").value); // Потужність КЗ
                // Перевірка на введення значення
                if (isNaN(kKZPower)) {
                    alert("Будь ласка, введіть значення.");
                    return;
                }
                // Розрахунок формул
                let kSumXVal = (kUsnVal ** 2) / kKZPower + (kUkPercVal / 100) * ((kUsnVal ** 2) / kSnomtVal);
                let kIp0Val = kUsnVal / (Math.sqrt(3) * kSumXVal);
                // Вивід результатів
                document.getElementById("result2").innerHTML = "Результат: <br> Сумарний опір для точки К1, Ом: " + kSumXVal.toFixed(2) + "<br> Початкове діюче значення струму трифазного КЗ, кА: " + kIp0Val.toFixed(2);
            }

            // Метод для калькулятора 3
            static calculator3() {
                // Отримання значень від користувача
                const kUvnVal = parseFloat(document.getElementById("kUvn").value); // Максимальна напруга короткого замикання
                const kUkmaxVal = parseFloat(document.getElementById("kUkmax").value); // Номінальна напруга вольтажу
                const kSnomtVal = parseFloat(document.getElementById("kSnomt").value); // Номінальна потужність трансформатора
                const kRshVal = parseFloat(document.getElementById("kRsh").value); // Активний опір статора
                const kXcnVal = parseFloat(document.getElementById("kXcn").value); // Реактивний опір статора
                const kRshMinVal = parseFloat(document.getElementById("kRshMin").value); // Мінімальний активний опір статора
                const kXcMinVal = parseFloat(document.getElementById("kXcMin").value); // Мінімальний реактивний опір статора
                // Перевірка на введення усіх значень
                if (isNaN(kUvnVal) || isNaN(kUkmaxVal) || isNaN(kSnomtVal) || isNaN(kRshVal) || isNaN(kXcnVal) || isNaN(kRshMinVal) || isNaN(kXcMinVal)) {
                    alert("Будь ласка, введіть усі значення.");
                    return;
                }
                // Розрахунок формул
                let kXtVal = (kUkmaxVal * Math.pow(kUvnVal, 2)) / (100 * kSnomtVal);
                let kXshVal = kXcnVal + kXtVal;
                let kZshVal = Math.sqrt(Math.pow(kRshVal, 2) + Math.pow(kXshVal, 2));
                let kXshMinVal = kXcMinVal + kXtVal;
                let kZshMinVal = Math.sqrt(Math.pow(kRshMinVal, 2) + Math.pow(kXshMinVal, 2));
                let sqrt3 = Math.sqrt(3);
                let kIsh3Val = (kUvnVal * 1000) / (sqrt3 * kZshVal);
                let kIsh2Val = kIsh3Val * (sqrt3 / 2);
                let kIsh3MinVal = (kUvnVal * 1000) / (sqrt3 * kZshMinVal);
                let kIsh2MinVal = kIsh3MinVal * (sqrt3 / 2);
                // Вивід результатів
                let resultHTML = `
                <p>Результат:</p>
                <p>Реактивний опір силового трансформатора, Ом: ${kXtVal.toFixed(2)}</p>
                <p>Опори в нормальному режимі, Ом: Z: ${kZshVal.toFixed(2)} X: ${kXshVal.toFixed(2)}</p>
                <p>Опори в мінімальному режимі, Ом: Z: ${kZshMinVal.toFixed(2)} X: ${kXshMinVal.toFixed(2)}</p>
                <p>Струми в нормальному режимі, А: I(3): ${kIsh3Val.toFixed(2)} I(2): ${kIsh2Val.toFixed(2)}</p>
                <p>Струми в мінімальному режимі, А: I(3): ${kIsh3MinVal.toFixed(2)} I(2): ${kIsh2MinVal.toFixed(2)}</p>`;

                document.getElementById("result3").innerHTML = resultHTML;
            }
І}
