# 기여 안내

모두의 키오스크 안내 사이트에 기여해 주셔서 고맙습니다. 코드를 쓰지 않아도 의견과 제안으로 참여할 수 있습니다. 사이트에서 보는 안내는 <https://code-for-korea.github.io/barrier-free-kiosk/contribute/> 입니다.

## 이 저장소가 다루는 것

- 이 저장소: 대문·소개 **공개 웹사이트** (Jekyll, GitHub Pages)
- 체험 키오스크 앱(국립 고궁 발권기, 재현본, 카페 주문기)의 소스는 키오스크마다 따로 관리합니다. 앱 화면의 의견은 이슈로 남겨 주시면 담당자에게 전달합니다.

## 의견·제안 (이슈)

1. [이슈 목록](https://github.com/Code-for-Korea/barrier-free-kiosk/issues)에서 같은 내용이 있는지 먼저 찾아봅니다.
2. 제목에 "어느 화면, 무엇이 문제인지"를 한 줄로 씁니다.
3. 본문에 사용 기기, 큰 글씨·고대비 설정 여부, 재현 순서를 적습니다. 스크린샷을 붙이면 좋습니다.
4. 개인정보(이름, 연락처, 얼굴이 나온 사진)는 올리지 않습니다.

## 코드·문서 기여 (PR)

사전 준비: [asdf](https://asdf-vm.com/)로 Ruby 3.4.7을 설치합니다(`.tool-versions`).

```bash
bin/serve    # http://localhost:4000/ 에서 미리보기 (파일을 고치면 자동 재빌드)
bin/build    # site/_site 에 빌드. PR 전에 통과해야 합니다
```

1. 저장소를 포크하거나 복제하고, `main`에서 작업 브랜치를 만듭니다. `main`에 직접 커밋하지 않습니다.
2. 고친 뒤 `bin/build`로 빌드가 통과하는지, 바꾼 화면이 의도대로 나오는지 확인합니다.
3. PR 본문에 바꾼 내용과 이유, 확인한 방법을 적습니다.
4. 리뷰에서 나온 의견을 반영한 뒤 머지됩니다. 배포는 관리자가 따로 합니다(`bin/deploy`).

### 자주 하는 수정

| 하고 싶은 일 | 고칠 곳 |
|---|---|
| 체험 링크 추가·수정, 대문 노출 여부 | `site/_data/demos.yml` (`home: true`만 대문에 나옴) |
| 키오스크 만든 사람 소개 | `site/_data/demos.yml`의 `makers` |
| 소개·참여 안내 문구 | `site/about.md`, `site/team.md`, `site/contribute.md` |
| 스타일, 큰 글씨·고대비 | `site/assets/css/style.css`, `site/assets/js/a11y.js` |

## 지켜 주세요

- **접근성:** 외부 링크에 `target="_blank" rel="noopener noreferrer"`와 `<span class="sr-only"> (새 창, 외부 사이트)</span>`를 붙입니다. 큰 글씨·고대비 화면에서도 확인합니다. 구조는 [AGENTS.md](AGENTS.md)를 참고하세요.
- **쉬운 우리말:** 어려운 용어와 영어를 피합니다.
- **연습용 안내 유지:** 체험 화면은 연습용이며 실제 결제·발권이 없다는 문구를 지우지 않습니다.
- **커밋 메시지:** 한국어로 "~합니다" 문장을 씁니다. 예) `큰 글씨 버튼 문구를 고칩니다`
- **링크:** 내부 링크에는 `relative_url`을 씁니다(`baseurl` 때문에 경로를 직접 쓰면 배포에서 깨집니다).
