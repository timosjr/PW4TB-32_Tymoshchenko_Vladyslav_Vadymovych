class WebCalculator {
    static calculate() {
        // Оголошення змінних
        let nominalEfficiency = 0.92;
        let powerFactor = 0.9;
        let loadVoltage = 0.38;
        let numEP1 = 4;
        let numEP2 = 2;
        let numEP3 = 4;
        let numEP4 = 1;
        let numEP5 = 1;
        let numEP6 = 1;
        let numEP7 = 2;
        let numEP8 = 1;
        let powerEP2 = 14;
        let powerEP3 = 42;
        let powerEP4 = 36;
        let powerEP5 = 20;
        let powerEP6 = 40;
        let powerEP7 = 32;
        let powerEP8 = 20;
        let utilizationEP1 = 0.15;
        let utilizationEP2 = 0.12;
        let utilizationEP3 = 0.15;
        let utilizationEP4 = 0.3;
        let utilizationEP5 = 0.5;
        let utilizationEP7 = 0.2;
        let utilizationEP8 = 0.65;
        let reactiveFactorEP1 = 1.33;
        let reactiveFactorEP2 = 1;
        let reactiveFactorEP3 = 1.33;
        let reactiveFactorEP5 = 0.75;
        let reactiveFactorEP6 = 1;
        let reactiveFactorEP7 = 1;
        let reactiveFactorEP8 = 0.75;

        let numShop = 81;
        let powerShop = 2330;
        let powerUtilizationShop = 752;
        let powerReactiveShop = 657;
        let powerTotalShop = 96388;

        // Отримання значень від користувача
        let powerEP1 = parseFloat(document.getElementById("powerEP1").value);
        let utilizationEP6 = parseFloat(document.getElementById("utilizationEP6").value);
        let reactiveFactorEP4 = parseFloat(document.getElementById("reactiveFactorEP4").value);

        // Розрахунки
        let totalPower1 = numEP1 * powerEP1;
        let totalPower2 = numEP2 * powerEP2;
        let totalPower3 = numEP3 * powerEP3;
        let totalPower4 = numEP4 * powerEP4;
        let totalPower5 = numEP5 * powerEP5;
        let totalPower6 = numEP6 * powerEP6;
        let totalPower7 = numEP7 * powerEP7;
        let totalPower8 = numEP8 * powerEP8;
        let sumPower1 = numEP1 * Math.pow(powerEP1, 2);
        let sumPower2 = numEP2 * Math.pow(powerEP2, 2);
        let sumPower3 = numEP3 * Math.pow(powerEP3, 2);
        let sumPower4 = numEP4 * Math.pow(powerEP4, 2);
        let sumPower5 = numEP5 * Math.pow(powerEP5, 2);
        let sumPower6 = numEP6 * Math.pow(powerEP6, 2);
        let sumPower7 = numEP7 * Math.pow(powerEP7, 2);
        let sumPower8 = numEP8 * Math.pow(powerEP8, 2);
        let groupUtilization = ((totalPower1 * utilizationEP1) + (totalPower2 * utilizationEP2) + (totalPower3 * utilizationEP3) + (totalPower4 * utilizationEP4) + (totalPower5 * utilizationEP5) + (totalPower6 * utilizationEP6) + (totalPower7 * utilizationEP7) + (totalPower8 * utilizationEP8)) / (totalPower1 + totalPower2 + totalPower3 + totalPower4 + totalPower5 + totalPower6 + totalPower7 + totalPower8);
        let effectiveNumEP = Math.pow((totalPower1 + totalPower2 + totalPower3 + totalPower4 + totalPower5 + totalPower6 + totalPower7 + totalPower8), 2) / (sumPower1 + sumPower2 + sumPower3 + sumPower4 + sumPower5 + sumPower6 + sumPower7 + sumPower8);
        let powerCoefficient = 1.25;
        let activeLoad = powerCoefficient * ((totalPower1 * utilizationEP1) + (totalPower2 * utilizationEP2) + (totalPower3 * utilizationEP3) + (totalPower4 * utilizationEP4) + (totalPower5 * utilizationEP5) + (totalPower6 * utilizationEP6) + (totalPower7 * utilizationEP7) + (totalPower8 * utilizationEP8));
        let reactiveLoad = ((totalPower1 * utilizationEP1 * reactiveFactorEP1) + (totalPower2 * utilizationEP2 * reactiveFactorEP2) + (totalPower3 * utilizationEP3 * reactiveFactorEP3) + (totalPower4 * utilizationEP4 * reactiveFactorEP4) + (totalPower5 * utilizationEP5 * reactiveFactorEP5) + (totalPower6 * utilizationEP6 * reactiveFactorEP6) + (totalPower7 * utilizationEP7 * reactiveFactorEP7) + (totalPower8 * utilizationEP8 * reactiveFactorEP8));
        let totalPower = Math.sqrt(Math.pow(activeLoad, 2) + Math.pow(reactiveLoad, 2));
        let groupCurrent = activeLoad / loadVoltage;
        let groupUtilizationShop = powerUtilizationShop / powerShop;
        let effectiveNumEPShop = Math.pow(powerShop, 2) / powerTotalShop;
        let powerCoefficientShop = 0.7;
        let activeLoadShop = powerCoefficientShop * powerUtilizationShop;
        let reactiveLoadShop = powerCoefficientShop * powerReactiveShop;
        let totalPowerShop = Math.sqrt(Math.pow(activeLoadShop, 2) + Math.pow(reactiveLoadShop, 2));
        let groupCurrentShop = activeLoadShop / loadVoltage;

        // Виведення результатів
        document.getElementById("result").innerHTML = `
        <strong>Результати:</strong><br><br>
        1. Груповий коефіцієнт використання для ШР1=ШР2=ШР3: ${groupUtilization.toFixed(4)}<br>
        2. Ефективна кількість ЕП для ШР1=ШР2=ШР3: ${effectiveNumEP.toFixed(4)}<br>
        3. Розрахунковий коефіцієнт активної потужності для ШР1=ШР2=ШР3: ${powerCoefficient.toFixed(2)}<br>
        4. Розрахункове активне навантаження для ШР1=ШР2=ШР3: ${activeLoad.toFixed(2)} кВт<br>
        5. Розрахункове реактивне навантаження для ШР1=ШР2=ШР3: ${reactiveLoad.toFixed(2)} кВар<br>
        6. Повна потужність для ШР1=ШР2=ШР3: ${totalPower.toFixed(3)} кВт<br>
        7. Розрахунковий груповий струм для ШР1=ШР2=ШР3: ${groupCurrent.toFixed(2)} А<br>
        8. Коефіцієнти використання цеху в цілому: ${groupUtilizationShop.toFixed(2)}<br>
        9. Ефективна кількість ЕП цеху в цілому: ${effectiveNumEPShop.toFixed(1)}<br>
        10. Розрахунковий коефіцієнт активної потужності цеху в цілому: ${powerCoefficientShop.toFixed(1)}<br>
        11. Розрахункове активне навантаження на шинах 0,38 кВ ТП: ${activeLoadShop.toFixed(1)} кВт<br>
        12. Розрахункове реактивне навантаження на шинах 0,38 кВ ТП: ${reactiveLoadShop.toFixed(1)} кВар<br>
        13. Повна потужність на шинах 0,38 кВ ТП: ${totalPowerShop.toFixed(1)} кВт<br>
        14. Розрахунковий груповий струм на шинах 0,38 кВ ТП: ${groupCurrentShop.toFixed(1)} А<br>`;
    }
}