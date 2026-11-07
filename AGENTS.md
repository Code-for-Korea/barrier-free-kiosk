# AGENTS.md — 모두의 키오스크 (barrier-free-kiosk)

어르신과 디지털 환경이 낯선 분들도 쓰기 쉬운 키오스크 화면을 함께 만드는 시민 참여 프로젝트(Code for Korea)의 **공개 안내 사이트**(대문 + 프로젝트 소개).
매 세션마다 읽어서 짧게 유지. 여기는 구조, 명령, 관례, 함정만 적고 상세는 `README.md`로 연결한다.

## 구조

| 경로 | 내용 |
|---|---|
| `site/` | Jekyll 4.4 사이트 전체 (Ruby 3.4.7 — `.tool-versions` 고정) |
| `site/index.md` | 대문(첫 화면). 체험 카드 목록 |
| `site/about.md`, `team.md`, `contribute.md` | 프로젝트 소개(`/about/`), 만든 사람들(`/team/`), 참여하기(`/contribute/`). 기여 규칙 원문은 루트 `CONTRIBUTING.md` |
| `site/_data/demos.yml` | 체험 링크 데이터. **체험 페이지 추가·수정은 이 파일만** 고친다. 항목의 `makers`(역할·이름)는 `/team/`에 나온다 |
| `site/_includes/`, `_layouts/` | `card.html`, `header.html`, `footer.html`, `head-init.html`, `default.html` |
| `site/assets/` | `css/style.css`, `js/a11y.js` (외부 CDN·웹폰트 없음) |
| `bin/` | `serve`(로컬 미리보기), `build`, `deploy`(gh-pages 배포) |
| `wip/`, `.omc/` | 작업 메모. `.gitignore` 대상이라 저장소에 올라가지 않는다 |

이 저장소에는 **키오스크 앱 소스가 없다.** 체험 화면은 외부에서 따로 운영한다(국립 고궁 티켓 발권기·재현본, 카페 주문 키오스크). 여기는 그 화면으로 연결하는 사이트만 관리한다. 소스 통합은 별도 논의 중이다.

## 대문 노출 규칙

- `demos.yml`의 `home: true` 항목만 대문 카드로 나온다 (`index.md`가 `where: "home", true`로 거른다). `about.md`의 "지금 만들고 있는 키오스크" 목록에는 **전부** 나온다.
- 현재 대문: 국립 고궁 티켓 발권 키오스크, 국립 미술관 1층 카페 주문 키오스크. 국립 고궁 현재 키오스크 재현본(`gyeongbokgung-original`)은 `home: false`로 두고 소개 페이지에서만 연결한다.
- 새 항목에는 `home`을 꼭 적는다. 빠뜨리면 대문에 나오지 않는다.

## 개발 명령

```bash
bin/serve              # 로컬 미리보기 http://localhost:4000/ (자동 재빌드). 다른 포트: bin/serve 4010
bin/build              # site/_site 에 빌드만
```

- 처음 실행하면 `bundle install`이 자동으로 돈다. 테스트·린트 설정은 없다. **변경 후 `bin/build`가 통과하고 `_site/index.html`, `_site/about/index.html`에 의도한 링크가 있는지 확인**한다.
- `site/_config.yml`의 `baseurl`은 `/barrier-free-kiosk`(GitHub Pages 프로젝트 주소)다. 내부 링크는 항상 `relative_url` 필터를 쓴다. 도메인이 확정되면 `""`로 바꾼다.

## 배포

`bin/deploy`가 로컬에서 빌드해 `gh-pages` 브랜치에 커밋·push 한다(GitHub Actions 미사용). `bin/deploy --no-push`는 커밋까지만 한다. `origin` remote가 필요하고 Pages 소스는 `gh-pages`(/)다. **push·배포는 공개 사이트에 바로 반영되므로 사용자 확인 뒤에 한다.**

## 접근성 관례 (이 프로젝트의 핵심 품질 기준)

- 외부 링크는 `target="_blank" rel="noopener noreferrer"`에 `<span class="sr-only"> (새 창, 외부 사이트)</span>`를 붙인다 (`card.html`, `footer.html` 참고).
- 큰 글씨·고대비 토글은 `a11y.js`가 `<html>`의 `data-size`, `data-contrast`를 바꾸고 `localStorage`(`cfk-size`, `cfk-contrast`)에 저장한다. 버튼 이름은 고정하고 `aria-pressed`로만 상태를 알린다. JS가 꺼져도 사이트는 정상 동작해야 한다.
- 본문 건너뛰기 링크, 시맨틱 제목 순서, `aria-labelledby`, `aria-current="page"`를 유지한다. 색은 `style.css`의 변수를 쓰고 고대비 모드에서도 확인한다.
- 쉬운 우리말로 쓴다. 어려운 용어·영어를 피한다.

## 알려진 함정

1. **체험 화면은 연습용** — 실제 결제·발권이 없다. 이 안내 문구(대문 `notice`, 푸터)를 지우지 않는다.
2. **외부 주소가 바뀌면 링크가 깨진다** — 체험 URL은 `demos.yml`에만 둔다. `README.md` 표와 `about.md`에 같은 주소를 복사해 두지 않는다(`about.md`는 데이터 반복문).
3. **`baseurl` 때문에 로컬과 배포 경로가 다르다** — 하드코딩한 `/about/` 같은 경로는 배포에서 깨진다. `relative_url`을 쓴다.
4. **`site/_site`는 gitignore** — 빌드 결과를 커밋하지 않는다. 배포는 `bin/deploy`가 gh-pages 브랜치로 따로 올린다.
5. **소개 페이지의 일정·통계 문구는 시점이 있다** — 진행 계획 표(2026년 하반기)와 서울AI재단 조사 수치는 출처가 있는 값이므로, 바꿀 때 근거 없이 고치지 않는다.
6. **문서 최신성** — 대문 구성이나 체험 목록이 바뀌면 `demos.yml`, `README.md`의 체험 표, `about.md`, 이 파일을 같이 맞춘다.

## 코딩 관례

- 커밋 메시지: 한국어 설명. 최근 이력은 `README를 추가합니다`, `UX 리서치 레퍼런스 정리 문서를 추가합니다`처럼 "~합니다" 문장이다. 이 스타일을 따른다.
- 사이트 문구·주석은 한국어 기본.
- 브랜치: 기능·문서 작업은 `chore/`, `feat/` 등 작업 브랜치에서 하고 `main`에 직접 커밋하지 않는 것이 기본이다 (사용자가 그때그때 허용하면 예외).
