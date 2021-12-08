const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
const schedules = [
  '<li>흥국생명 3:1 페퍼저축은행</li><li>우리카드 2:3 삼성화재</li>',
  '<li>한국도로공사 3:0 IBK기업은행</li><li> KB손해보험 3:1 OK금융그룹</li>',
  '<li>현대건설 3:1 KGC인삼공사</li><li>현대캐피탈 2:3 한국전력</li>',
  '<li>대한항공 3:0 우리카드</li><li>GS칼텍스 3:0 흥국생명</li>',
  '<li>IBK기업은행 3:0 페퍼저축은행</li><li> OK금융그룹 3:2 삼성화재/li>',
  '<li>프로배구 경기가 없습니다.</li>',
  '<li>한국도로공사 VS 현대건설</li><li>KB손해보험 VS 현대캐피탈</li>',
  '<li>페퍼저축은행 VS GS칼텍스</li><li>삼성화재 VS 대한항공</li>',
  '<li>KGC인삼공사 VS IBK기업은행</li><li> 한국전력 VS OK금융그룹</li>',
  '<li>흥국생명 VS 한국도로공사</li><li>우리카드 VS KB손해보험</li>',
  '<li>현대캐피탈 VS 대한항공</li><li>현대건설 VS GS칼텍스</li>',
  '<li>삼성화재 VS 한국전력</li><li>페퍼저축은행 VS KGC인삼공사</li>',
  '<li>프로배구 경기가 없습니다.</li>',
  '<li>흥국생명 VS 현대건설</li><li>우리카드 VS 현대캐피탈</li>',
  '<li>GS칼텍스 VS IBK기업은행</li><li>대한항공 VS OK금융그룹</li>',
  '<li>	페퍼저축은행 VS 한국도로공사</li><li>삼성화재 VS KB손해보험</li>',
  '<li>KGC인삼공사 VS 현대건설</li><li>한국전력 VS 현대캐피탈</li>',
  '<li>OK금융그룹 VS 우리카드</li><li>IBK기업은행 VS 흥국생명</li>',
  '<li>KB손해보험 VS 대한항공</li><li>한국도로공사 VS GS칼텍스</li>',
  '<li>프로배구 경기가 없습니다.</li>',
  '<li>흥국생명 VS KGC인삼공사</li><li> 우리카드 VS 한국전력</li>',
  '<li>현대건설 VS 페퍼저축은행 </li><li> 현대캐피탈 VS 삼성화재</li>',
  '<li>IBK기업은행 VS 한국도로공사</li><li>KB손해보험 KB손해보험 VS OK금융그룹</li>',
  '<li>KGC인삼공사 VS GS칼텍스</li><li>대한항공 VS 한국전력</li>',
  '<li>삼성화재 VS 우리카드/li><li>	페퍼저축은행 VS 흥국생명</li>',
  '<li>현대캐피탈 VS OK금융그룹</li><li>현대건설 VS IBK기업은행</li>',
  '<li>프로배구 경기가 없습니다.</li>',
  '<li>KGC인삼공사 VS 한국도로공사</li><li>한국전력 VS KB손해보험</li>',
  '<li>흥국생명 VS 페퍼저축은행</li><li>우리카드 VS 삼성화재</li>',
  '<li>현대건설 VS GS칼텍스</li><li>대한항공 VS 현대캐피탈</li>',
  '<li>한국도로공사 VS IBK기업은행</li><li>KB손해보험 VS OK금융그룹</li>',
]

const dayClickClass = document.getElementsByClassName('day-num');
const dateId = document.getElementById('date');
const dayId = document.getElementById('day');
const schedule = document.getElementById('schedule');

const getDays = (id) => {
  var date = id.split('-');
  dateId.innerHTML = date[0];
  dayId.innerHTML = days[date[1]];
  schedule.innerHTML = schedules[date[0]-1]
};

for(var i=0; i<dayClickClass.length; i++) {
  dayClickClass[i].addEventListener('click', event => {
    getDays(event.target.id);
  });
};