export type ClassificationTelegram = {
  Earthquake: 'telegram.earthquake';
  Volcano: 'telegram.volcano';
  Weather: 'telegram.weather';
  Scheduled: 'telegram.scheduled';
};

export type ClassificationTelegramValues = ClassificationTelegram[keyof ClassificationTelegram];
