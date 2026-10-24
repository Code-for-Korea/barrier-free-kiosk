# 모두의 키오스크

어르신과 디지털 환경이 낯선 분들도 편하게 쓸 수 있는 키오스크 화면을 함께 만드는 프로젝트입니다. 경복궁 티켓 발권기와 카페 주문 키오스크를 직접 체험해 볼 수 있는 안내 사이트(대문)와 프로젝트 소개 페이지를 이 저장소에서 관리합니다.

> [Code for Korea](https://codefor.kr) 프로젝트 · [프로젝트 소개글](https://codefor.kr/posts/w9tpz05)

## 체험할 수 있는 키오스크

대문 페이지에서 아래 체험 페이지로 연결합니다. 모두 연습용이며 실제 결제와 발권하지 않습니다.

| 키오스크 | 주소 | 설명 |
|---|---|---|
| 경복궁 티켓 발권기 | <https://cfk-app.vercel.app/kiosk-tour> | 개선 중인 화면 |
| 경복궁 키오스크 재현본 | <https://palace-kiosk.web.app/> | 현장 키오스크를 재현한 개선 전 화면, 설문 포함 |
| 카페 주문 키오스크 | <https://senior-cafe-kiosk-design.vercel.app/> | 큰 글자·고대비를 지원하는 시연본 |

체험하는 페이지 주소를 `site/_data/demos.yml` 에서 관리합니다.

## 이 저장소의 역할

- 이 저장소: 대문·소개 **공개 웹사이트** (Jekyll, GitHub Pages)
- 키오스크 체험 프로젝트 소스코드: 키오스크 유형마다 따로 관리하고 있습니다. 소스코드 통합은 별도 논의합니다.
- 회의록, 작업 메모 등 문서는 코드포코리아 구글드라이브에서 공유합니다. 

## 기술 스택

| 항목 | 도구 |
|---|---|
| Ruby | 3.4.7 |
| 사이트 생성기 | Jekyll 4.4 |
| 스타일/스크립트 | CSS, JavaScript (외부 CDN, 웹폰트 없음) |
| 배포 | GitHub Pages `gh-pages` 브랜치 (로컬 빌드 후 push, GitHub Actions 미사용) |

## 시작하기

사전 준비: [asdf](https://asdf-vm.com/)로 Ruby 3.4.7을 설치합니다 (`.tool-versions` 참고).

```bash
# 로컬 미리보기: http://localhost:4000/ (파일을 고치면 자동으로 다시 빌드)
bin/serve

# 다른 포트로 실행
bin/serve 4010

# site/_site 에 빌드만 하기
bin/build
```

처음 실행하면 `bundle install`이 자동으로 실행됩니다.

## 배포

`bin/deploy`가 사이트를 빌드해 `gh-pages` 브랜치에 올립니다.

```bash
bin/deploy              # 빌드 → gh-pages 커밋 → push
bin/deploy --no-push    # 커밋까지만 하고 push는 직접 확인 후 실행
```

- 저장소에 `origin` remote가 있어야 합니다.
- 저장소 Settings → Pages에서 소스를 `gh-pages` 브랜치(`/ (root)`)로 설정합니다.
- 프로젝트 페이지 주소(`https://<조직>.github.io/<저장소>/`)로 배포할 때는 `site/_config.yml`의 `baseurl`을 `/<저장소>`로 바꿉니다. 커스텀 도메인을 쓰면 `""`로 둡니다.
- 소스 브랜치는 건드리지 않고 임시 worktree에서 작업하므로 작업 중인 파일에 영향이 없습니다.

## 구조

```text
.tool-versions            Ruby 버전 고정
bin/
  serve                   로컬 미리보기 서버
  build                   site/_site 빌드
  deploy                  gh-pages 배포
site/
  _config.yml             사이트 설정 (제목, baseurl 등)
  _data/demos.yml         대문에 표시할 체험 링크 목록
  _layouts/default.html   공통 레이아웃 (본문 바로가기, 랜드마크)
  _includes/              header, footer, card, 화면 설정 초기화
  assets/css/style.css    스타일 (라이트 / 고대비 / 큰 글씨)
  assets/js/a11y.js       큰 글씨·고대비 토글
  index.md                대문 (체험하기)
  about.md                프로젝트 소개
  404.md                  없는 페이지
```

## 웹 접근성

접근성을 위해 배리어프리 사용자를 먼저 생각합니다.

- 본문 대비 7:1 이상, **고대비 화면**과 **큰 글씨** 토글 (설정은 브라우저에 기억, JavaScript가 꺼져도 사이트는 동작)
- 키보드만으로 모든 기능 사용 가능, 본문 바로가기 링크, 뚜렷한 포커스 표시
- 터치 영역 44px 이상, 외부 링크에는 "새 창, 외부 사이트" 안내
- `prefers-reduced-motion`, 반응형(360px), 글자 확대 시에도 내용 손실 없음

자동 검사 예 (사이트를 로컬에서 띄운 뒤):

```bash
npx pa11y@8 --runner axe http://localhost:4000/
```

자동 검사로 잡히지 않는 키보드 이동 순서와 화면낭독기 읽기는 직접 확인합니다.

## 콘텐츠 수정

- 체험 링크 추가·수정: `site/_data/demos.yml`
- 대문 문구: `site/index.md`, 소개 문구: `site/about.md`
- 주의 사항: 개인정보, 비공개 회의 내용, 불명확한 내용을 포함하지 않아야 합니다.

## 함께하기

직접 체험하고 불편 사항과 의견을 저장소 이슈로 남겨 주세요. 함께 이야기하려면 [코드포코리아](https://codefor.kr) 커뮤니티에 참여해 주세요.

## 라이선스

본 프로젝트는 [Code for Korea](https://codefor.kr) 커뮤니티와 함께 합니다. 라이선스는 아직 정해지지 않았습니다. 확정되면 `LICENSE` 파일과 이 항목을 갱신합니다.
