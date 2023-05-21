export const MiddleCodeTypeEnum = {
  자연관광지: 'NATURAL_TOURIST',
  관광자원: 'TOURISM_RESOURCES',
  역사관광지: 'HISTORICAL_TOURIST',
  휴양관광지: 'RECREATIONAL_RESORT',
  체험관광지: 'EXPERIENCE_TOURIST',
  산업관광지: 'INDUSTRIAL_TOURIST',
  건축_조형물: 'ARCHITECTURE_SCULPTURES',
  문화시설: 'CULTURAL_FACILITIES',
  축제: 'FESTIVAL',
  공연_행사: 'PERFORMANCE_EVENT',
  가족코스: 'FAMILY_COURSE',
  나홀로코스: 'SOLO_COURSE',
  힐링코스: 'HEALING_COURSE',
  도보코스: 'WALKING_COURSE',
  캠핑코스: 'CAMPING_COURSE',
  맛코스: 'TASTE_COURSE',
  레포츠소개: 'LEPORTS_COLLECTION',
  육상_레포츠: 'ATHLETICS_LEPORTS',
  수상_레포츠: 'WATER_LEPORTS',
  항공_레포츠: 'AIR_SPORTS',
  복합_레포츠: 'COMBINED_LEPORTS',
  숙박시설: 'ACCOMMODATION',
  쇼핑: 'SHOPPING',
  음식점: 'FOOD',
};

export default function MiddleCodeTypeEnumLabel(code) {
  switch (code) {
    case MiddleCodeTypeEnum.자연관광지:
      return '자연관광지';
    case MiddleCodeTypeEnum.관광자원:
      return '관광자원';
    case MiddleCodeTypeEnum.역사관광지:
      return '역사관광지';
    case MiddleCodeTypeEnum.휴양관광지:
      return '휴양관광지';
    case MiddleCodeTypeEnum.체험관광지:
      return '체험관광지';
    case MiddleCodeTypeEnum.산업관광지:
      return '산업관광지';
    case MiddleCodeTypeEnum.건축_조형물:
      return '건축 조형물';
    case MiddleCodeTypeEnum.문회시설:
      return '문화시설';
    case MiddleCodeTypeEnum.축제:
      return '축제';
    case MiddleCodeTypeEnum.공연_행사:
      return '공연행사';
    case MiddleCodeTypeEnum.가족코스:
      return '가족코스';
    case MiddleCodeTypeEnum.나홀로코스:
      return '나홀로코스';
    case MiddleCodeTypeEnum.힐링코스:
      return '힐링코스';
    case MiddleCodeTypeEnum.도보코스:
      return '도보코스';
    case MiddleCodeTypeEnum.캠핑코스:
      return '캠핑코스';
    case MiddleCodeTypeEnum.맛코스:
      return '맛코스';
    case MiddleCodeTypeEnum.레포츠소개:
      return '레포츠 소개';
    case MiddleCodeTypeEnum.육상_레포츠:
      return '육상 레포츠';
    case MiddleCodeTypeEnum.수상_레포츠:
      return '수상 레포츠';
    case MiddleCodeTypeEnum.항공_레포츠:
      return '항공 레포츠';
    case MiddleCodeTypeEnum.복합_레포츠:
      return '복합 레포츠';
    case MiddleCodeTypeEnum.숙박시설:
      return '숙박시설';
    case MiddleCodeTypeEnum.쇼핑:
      return '쇼핑';
    case MiddleCodeTypeEnum.음식점:
      return '음식점';

    default:
      return '';
  }
}
