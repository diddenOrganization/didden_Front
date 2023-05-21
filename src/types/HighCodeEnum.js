export const HighCodeTypeEnum = {
  자연: 'NATURE',
  관광지인문: 'TOURIST_LIBERAL_ARTS',
  문화시설인문: 'CULTURAL_LIBERAL_ARTS',
  행사_인문: 'EVENT_LIBERAL_ARTS',
  추천코스: 'RECOMMENDED_COURSE',
  레포츠: 'LEPORTS',
  숙박: 'ACCOMMODATION',
  쇼핑: 'SHOPPING',
  음식: 'FOOD',
};

export default function HighCodeTypeEnumLabel(code) {
  switch (code) {
    case HighCodeTypeEnum.자연:
      return '자연';
    case HighCodeTypeEnum.관광지인문:
      return '관광지인문';
    case HighCodeTypeEnum.문화시설인문:
      return '문화시설인문';
    case HighCodeTypeEnum.행사_인문:
      return '행사';
    case HighCodeTypeEnum.추천코스:
      return '추천코스';
    case HighCodeTypeEnum.레포츠:
      return '레포츠';
    case HighCodeTypeEnum.숙박:
      return '숙박';
    case HighCodeTypeEnum.쇼핑:
      return '쇼핑';
    case HighCodeTypeEnum.음식:
      return '음식';
    default:
      return '';
  }
}
