export namespace Classification {
  export type Telegram = {
    Earthquake: 'telegram.earthquake';
    Volcano: 'telegram.volcano';
    Weather: 'telegram.weather';
    Scheduled: 'telegram.scheduled';
  };

  export type TelegramValues = Telegram[keyof Telegram];

  export type EEW = {
    Forecast: 'eew.forecast',
    Warning: 'eew.warning'
  };

  export type EEWValues = EEW[keyof EEW];

  export type Values = TelegramValues | EEWValues;
}
