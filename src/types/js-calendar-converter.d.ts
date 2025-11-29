declare module 'js-calendar-converter' {
  interface LunarDateResult {
    year: number;
    month: number;
    day: number;
    lYear: number;
    lMonth: number;
    lDay: number;
    isLeap: boolean;
    cYear: number;
    cMonth: number;
    cDay: number;
    gzYear: string;
    gzMonth: string;
    gzDay: string;
    ncWeek: number;
    nWeek: number;
    isTerm: boolean;
    Term: string;
    astro: string;
    Animal: string;
    IDayCn: string;
    IMonthCn: string;
    // yearStr: string; // 在 `js-calendar-converter.cjs` 中未找到 `yearStr`
  }

  interface CalendarConverter {
    solar2lunar: (year: number, month: number, day: number) => LunarDateResult | null;
    // 如果还有其他方法，也在这里声明
  }

  const calendarConverter: CalendarConverter;
  export default calendarConverter;
}
