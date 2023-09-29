window.onload = function () {
  let drawing = document.getElementById("scheme");
  let context = drawing.getContext("2d");

  drawing.width = 1920;
  drawing.height = 1080;
  let massonsText = "Массоны Самсона";

  const names = [
    "Алликсаар",
    "Станислав Клитотехникс",
    "Людмила Водолазская",
    "Ольга Боргдорф",
    "Сергей Брус",
    "Игорь Зверёк",
    "Антон Строй",
    "Ду Хаст Вячеславович",
    "Анастасия Ширинкина",
    "Александр Троян",
    "Дмитрий Возигнуй",
    "Кристина Болтушкина",
    "Максим Висюлькин",
  ];

  context.fillStyle = "#fff";
  context.font = "50px Arial";
  context.fillText(massonsText, 100, 100);

  context.fillRect(100, 200, 250, 50);
  context.fillRect(300, 400, 250, 70);
  context.fillRect(450, 500, 250, 70);
  context.fillRect(450, 590, 250, 50);
  context.fillRect(450, 800, 250, 50);
  context.fillRect(300, 900, 250, 50);
  context.fillRect(300, 970, 250, 50);
  context.fillRect(1350, 200, 250, 70);
  context.fillRect(1350, 300, 250, 50);
  context.fillRect(1350, 400, 250, 50);
  context.fillRect(1350, 590, 250, 50);
  context.fillRect(1350, 660, 250, 50);
  context.fillRect(1350, 730, 250, 50);

  context.fillStyle = "#000";
  context.font = "20px Arial";

  context.fillText(names[0], 170, 230);
  context.fillText(names[1], 310, 440);
  context.fillText(names[2], 470, 540);
  context.fillText(names[3], 500, 620);
  context.fillText(names[4], 520, 830);
  context.fillText(names[5], 360, 930);
  context.fillText(names[6], 360, 1000);

  context.fillText(names[7], 1370, 240);
  context.fillText(names[8], 1370, 330);
  context.fillText(names[9], 1400, 430);
  context.fillText(names[10], 1390, 620);
  context.fillText(names[11], 1370, 690);
  context.fillText(names[12], 1380, 760);

  //Стрелка к Аликсаар от Ду Хаст
  context.beginPath();
  context.strokeStyle = "white";
  context.moveTo(350, 230);
  context.lineTo(1350, 230);
  context.stroke();

  context.beginPath();
  context.moveTo(350, 230);
  context.lineTo(360, 225);
  context.stroke();

  context.beginPath();
  context.moveTo(350, 230);
  context.lineTo(360, 235);
  context.stroke();
  ////////////////////////////

  context.beginPath();
  context.moveTo(1330, 230);
  context.lineTo(1330, 330);
  context.stroke();

  context.beginPath();
  context.moveTo(1330, 330);
  context.lineTo(1350, 330);
  context.stroke();

  // Стрелка к Станиславу от Александра

  context.beginPath();
  context.moveTo(550, 430);
  context.lineTo(1350, 430);
  context.stroke();

  context.beginPath();
  context.moveTo(550, 430);
  context.lineTo(560, 425);
  context.stroke();

  context.beginPath();
  context.moveTo(550, 430);
  context.lineTo(560, 435);
  context.stroke();

  // От Антон Игорь к Алликсаару

  context.beginPath();
  context.moveTo(200, 250);
  context.lineTo(200, 1000);
  context.stroke();

  context.beginPath();
  context.moveTo(300, 920);
  context.lineTo(200, 920);
  context.stroke();

  context.beginPath();
  context.moveTo(300, 1000);
  context.lineTo(200, 1000);
  context.stroke();

  context.beginPath();
  context.moveTo(200, 250);
  context.lineTo(205, 260);
  context.stroke();

  context.beginPath();
  context.moveTo(200, 250);
  context.lineTo(195, 260);
  context.stroke();

  // От Сергея к Станиславу
  context.beginPath();
  context.moveTo(410, 830);
  context.lineTo(410, 470);
  context.stroke();

  context.beginPath();
  context.moveTo(450, 830);
  context.lineTo(410, 830);
  context.stroke();

  context.beginPath();
  context.moveTo(450, 620);
  context.lineTo(410, 620);
  context.stroke();

  context.beginPath();
  context.moveTo(450, 530);
  context.lineTo(410, 530);
  context.stroke();

  context.beginPath();
  context.moveTo(410, 470);
  context.lineTo(415, 480);
  context.stroke();

  context.beginPath();
  context.moveTo(410, 470);
  context.lineTo(405, 480);
  context.stroke();

  // От Максима к Дмитрию
  context.beginPath();
  context.moveTo(1650, 750);
  context.lineTo(1650, 610);
  context.stroke();

  context.beginPath();
  context.moveTo(1650, 750);
  context.lineTo(1600, 750);
  context.stroke();

  context.beginPath();
  context.moveTo(1650, 610);
  context.lineTo(1600, 610);
  context.stroke();

  context.beginPath();
  context.moveTo(1610, 605);
  context.lineTo(1600, 610);
  context.stroke();

  context.beginPath();
  context.moveTo(1610, 615);
  context.lineTo(1600, 610);
  context.stroke();

  // От Дмитрия к Ольге

  context.beginPath();
  context.moveTo(650, 610);
  context.lineTo(1350, 610);
  context.stroke();

  context.beginPath();
  context.moveTo(700, 610);
  context.lineTo(710, 605);
  context.stroke();

  context.beginPath();
  context.moveTo(700, 610);
  context.lineTo(710, 615);
  context.stroke();

  /// Максим Кристина Дмитрий

  context.beginPath();
  context.moveTo(1300, 610);
  context.lineTo(1300, 750);
  context.stroke();

  context.beginPath();
  context.moveTo(1350, 750);
  context.lineTo(1300, 750);
  context.stroke();

  context.beginPath();
  context.moveTo(1350, 690);
  context.lineTo(1300, 690);
  context.stroke();
};
