/**
 * 아래의 함수가 동작하도록 리팩토링 해주세요.
 * - 문자열 배열을 입력하면 2차원 배열로 각 아이템이 p 태그로 묶여서 나옵니다.
 * [
    [
      '<p> 모두 잠드는 밤에 </p>',
      '<p> 혼자 우두커니 앉아 </p>',
      '<p> 다 지나버린 오늘을 </p>',
      '<p> 보내지 못하고서 깨어있어 </p>',
      '<p> 누굴 기다리나 </p>',
      '<p> 아직 할 일이 남아 있었던가 </p>',
      '<p> 그것도 아니면 돌아가고 싶은 </p>',
      '<p> 그리운 자리를 떠올리나 </p>',
      '<p> 무릎을 베고 누우면 나 아주 어릴 적 </p>',
      '<p> 그랬던 것처럼 머리칼을 넘겨줘요 </p>',
      '<p> 그 좋은 손길에 까무룩 잠이 들어도 </p>',
      '<p> 잠시만 그대로 두어요 </p>',
      '<p> 깨우지 말아요 아주 깊은 잠을 잘 거예요 </p>',
      '<p> 조용하던 두 눈을 </p>',
      '<p> 다시 나에게 내리면 </p>',
      '<p> 나 그때처럼 말갛게 </p>',
      '<p> 웃어 보일 수 있을까 </p>',
      '<p> 나 지친 것 같아 </p>',
      '<p> 이 정도면 오래 버틴 것 같아 </p>',
      '<p> 그대 있는 곳에 돌아갈 수 있는 </p>',
      '<p> 지름길이 있다면 좋겠어 </p>',
      '<p> 무릎을 베고 누우면 나 아주 어릴 적 </p>',
      '<p> 그랬던 것처럼 머리칼을 넘겨줘요 </p>',
      '<p> 그 좋은 손길에 까무룩 잠이 들어도 </p>',
      '<p> 잠시만 그대로 두어요 </p>',
      '<p> 깨우지 말아요 아주 깊은 잠을 잘 거예요 </p>',
      '<p> 스르르르륵 스르르 깊은 잠을 잘 거예요 </p>',
      '<p> 스르르르륵 스르르 깊은 잠을 </p>'
    ]
  ]
 * - 함수를 리팩토링해주세요.
 */

// The problem is that we clear array's length which shares reference with paragraphs' elements

function parseTaggedText(lines: string[]): string[][] {
  const paragraphs: string[][] = [];
  const currPara: string[] = [];

  const addParagraph = () => {
    if (currPara.length) {
      paragraphs.push(currPara.slice());
      currPara.length = 0; // Clear the lines
    }
  };

  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      currPara.push(`<p> ${line} </p>`);
    }
  }

  addParagraph();
  return paragraphs;
}

const parameter = [
  '모두 잠드는 밤에',
  '혼자 우두커니 앉아',
  '다 지나버린 오늘을',
  '보내지 못하고서 깨어있어',
  '누굴 기다리나',
  '아직 할 일이 남아 있었던가',
  '그것도 아니면 돌아가고 싶은',
  '그리운 자리를 떠올리나',
  '무릎을 베고 누우면 나 아주 어릴 적',
  '그랬던 것처럼 머리칼을 넘겨줘요',
  '그 좋은 손길에 까무룩 잠이 들어도',
  '잠시만 그대로 두어요',
  '깨우지 말아요 아주 깊은 잠을 잘 거예요',
  '조용하던 두 눈을',
  '다시 나에게 내리면',
  '나 그때처럼 말갛게',
  '웃어 보일 수 있을까',
  '나 지친 것 같아',
  '이 정도면 오래 버틴 것 같아',
  '그대 있는 곳에 돌아갈 수 있는',
  '지름길이 있다면 좋겠어',
  '무릎을 베고 누우면 나 아주 어릴 적',
  '그랬던 것처럼 머리칼을 넘겨줘요',
  '그 좋은 손길에 까무룩 잠이 들어도',
  '잠시만 그대로 두어요',
  '깨우지 말아요 아주 깊은 잠을 잘 거예요',
  '스르르르륵 스르르 깊은 잠을 잘 거예요',
  '스르르르륵 스르르 깊은 잠을',
];

console.log(parseTaggedText(parameter));

const parameter2 = ['steven', '', 'steven2', '', 'steven3'];
console.log(parseTaggedText(parameter2));
