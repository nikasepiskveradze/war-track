import moment from 'moment/moment';

export const configs = {
  shortcuts: {
    fromBeginning: {
      text: 'From the beginning',
      period: {
        start: '2022-02-24',
        end: moment().format('YYYY-MM-DD'),
      },
    },
    russiaInvasion: {
      text: 'Russia Invasion',
      period: { start: '2022-02-24', end: '2022-04-01' },
    },
    russiaDonbasOffensive: {
      text: 'Russia Donbass Offensive',
      period: { start: '2022-04-01', end: '2022-09-01' },
    },
    ukraineKharkivAndKhersonOffensives: {
      text: 'Ukraine Kharkiv/Kherson Offensives',
      period: { start: '2022-09-01', end: '2023-01-01' },
    },
    russianWinter2023Offensive: {
      text: 'Russian Winter 2023 Offensive',
      period: { start: '2023-01-01', end: '2023-06-01' },
    },
    ukraineSummer2023Offensive: {
      text: 'Ukraine Summer 2023 Offensive',
      period: { start: '2023-06-01', end: '2023-10-01' },
    },
  },
};
