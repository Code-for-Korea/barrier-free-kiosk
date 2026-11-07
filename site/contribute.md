---
layout: default
title: 참여하기
permalink: /contribute/
---

# 함께 만들어 가기

{: .lead}
모두의 키오스크는 공개 이후에도 누구나 의견을 내고 고칠 수 있습니다. 코드를 몰라도 참여할 수 있습니다.

## 어떻게 참여하나요

<ul>
  <li><strong>써 보고 의견 남기기:</strong> 체험 키오스크를 써 보며 헷갈렸던 곳, 글자가 작았던 곳을 알려 주세요.</li>
  <li><strong>고칠 점 제안하기:</strong> GitHub <a href="https://github.com/Code-for-Korea/barrier-free-kiosk/issues" target="_blank" rel="noopener noreferrer">이슈<span class="sr-only"> (새 창, 외부 사이트)</span></a>에 어떤 화면에서 무엇이 불편했는지 적어 주세요. 사진을 붙이면 더 좋습니다.</li>
  <li><strong>직접 고치기:</strong> 이 사이트의 문구, 링크, 스타일을 고치는 풀 리퀘스트(PR)를 보내 주세요.</li>
  <li><strong>새 키오스크 체험 더하기:</strong> 다른 장소의 키오스크 개선안을 만들었다면 체험 링크를 사이트에 올릴 수 있습니다.</li>
</ul>

## 이슈 쓰는 방법

- 제목은 "어느 화면, 무엇이 문제인지"를 한 줄로 씁니다. 예) 국립 고궁 발권기 결제 화면의 버튼 글자가 작습니다.
- 본문에 쓰는 기기, 큰 글씨·고대비 설정 여부, 재현 순서를 적습니다.
- 개인정보(이름, 연락처, 얼굴이 나온 사진)는 올리지 않습니다.

## 이 사이트 고치는 방법

이 저장소는 안내 사이트(Jekyll)만 담고 있고, 체험 키오스크 앱 소스는 따로 관리합니다.

1. 저장소를 포크하거나 복제합니다. Ruby 3.4.7이 필요합니다.
2. 작업 브랜치를 만듭니다. 예) `fix/큰글씨-버튼`
3. `bin/serve`로 `http://localhost:4000/`에서 확인하며 고칩니다.
4. `bin/build`가 통과하는지 확인합니다.
5. PR을 올리고 무엇을 왜 바꿨는지, 바꾼 화면을 적습니다.

체험 링크와 만든 사람 정보는 `site/_data/demos.yml`만 고치면 됩니다. 자세한 규칙은 저장소의 [CONTRIBUTING.md](https://github.com/Code-for-Korea/barrier-free-kiosk/blob/main/CONTRIBUTING.md){:target="_blank" rel="noopener noreferrer"}<span class="sr-only"> (새 창, 외부 사이트)</span>를 참고하세요.

## 지켜 주세요

- **접근성을 먼저 생각합니다.** 외부 링크에는 "(새 창, 외부 사이트)" 안내를 붙이고, 큰 글씨·고대비 화면에서도 확인합니다.
- **쉬운 우리말로 씁니다.** 어려운 용어와 영어를 피합니다.
- **연습용이라는 안내를 지우지 않습니다.** 체험 화면은 실제 결제나 발권이 되지 않습니다.

<p><a href="{{ '/credit/' | relative_url }}">만든 사람들 보기</a></p>
