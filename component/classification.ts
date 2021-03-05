export type ClassificationTelegram = {
  Earthquake: 'telegram.earthquake';
  Volcano: 'telegram.volcano';
  Weather: 'telegram.weather';
  Scheduled: 'telegram.scheduled';
};

export type ClassificationTelegramValues = ClassificationTelegram[keyof ClassificationTelegram];

export type ClassificationEEW = {
  Forecast: 'eew.forecast',
  Warning: 'eew.warning'
};

export type ClassificationEEWValues = ClassificationEEW[keyof ClassificationEEW];

export type ClassificationValues = ClassificationTelegramValues | ClassificationEEWValues;
