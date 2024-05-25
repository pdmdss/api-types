export namespace Classification {
  export type Telegram = {
    Earthquake: 'telegram.earthquake';
    Volcano: 'telegram.volcano';
    Weather: 'telegram.weather';
    Scheduled: 'telegram.scheduled';
    Forecast: 'telegram.forecast';
    Observation: 'telegram.observation';
    Lightning: 'telegram.lightning';
  };

  export type TelegramValues = Telegram[keyof Telegram];

  export type EEW = {
    Forecast: 'eew.forecast',
    Warning: 'eew.warning'
  };

  export type EEWValues = EEW[keyof EEW];

  export type Values = TelegramValues | EEWValues;
}
