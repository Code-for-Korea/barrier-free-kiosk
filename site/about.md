---
layout: default
title: 프로젝트 소개
permalink: /about/
---

# 프로젝트 소개

{: .lead}
모두의 키오스크는 키오스크 앞에서 망설이는 분들이 없도록, 화면을 더 쉽고 이해하기 좋게 고쳐 보는 시민 참여 프로젝트입니다.

## 왜 시작했나요

키오스크는 빠르게 늘고 있지만 모두에게 쉽지는 않습니다. 서울AI재단의 2023년 서울시민 디지털역량 실태조사에서 55세 이상 고령층의 키오스크 이용 경험은 57.1%로 성인 전체(81.7%)보다 낮았고, 이용 경험이 없는 이유로는 "사용 방법을 모르거나 어려워서"(70.6%), "뒷사람 눈치가 보여서"(34.1%)가 많이 꼽혔습니다.

화면 글자와 버튼 크기, 용어, 진행 순서를 바꾸면 덜 어렵게 만들 수 있는 부분이 분명히 있다고 보고, 사용자와 함께 화면을 개선해 나가고 있습니다.

## 무엇을 하나요

<ul>
  <li><strong>함께 투어:</strong> 어르신과 함께 실제 키오스크(경복궁 티켓 발권기, 카페 주문 키오스크)를 써 보며 어려운 지점을 찾는 체험 프로그램입니다. 참여자 설문으로 의견을 모았습니다.</li>
  <li><strong>화면 개선:</strong> 찾아낸 어려움을 바탕으로 큰 글자, 고대비, 음성 안내 등 접근성을 갖춘 화면을 기획·디자인하고 직접 만들어 보고 있습니다.</li>
  <li><strong>사용성 테스트:</strong> 개선 전과 후 화면을 비교 체험하고 설문으로 효과를 확인합니다.</li>
  <li><strong>공개:</strong> 개발한 결과물과 조사 결과를 정리해 공개할 계획입니다.</li>
</ul>

## 지금 만들고 있는 키오스크

<ul>
  {% for demo in site.data.demos %}
  <li><a href="{{ demo.url }}" target="_blank" rel="noopener noreferrer">{{ demo.title }}<span class="sr-only"> (새 창, 외부 사이트)</span></a> — {{ demo.badge }}</li>
  {% endfor %}
</ul>

## 진행 계획

<table>
  <caption>2026년 하반기 진행 계획 (변경될 수 있습니다)</caption>
  <thead><tr><th scope="col">시기</th><th scope="col">내용</th></tr></thead>
  <tbody>
    <tr><th scope="row">10월 말</th><td>경복궁 키오스크 개발, 카페 키오스크 1차 개발</td></tr>
    <tr><th scope="row">11월 초</th><td>경복궁 키오스크 점검(QA), 카페 키오스크 2차 개발</td></tr>
    <tr><th scope="row">11월</th><td>이용 통계(GA4) 연결, 사용성 테스트 재진행</td></tr>
    <tr><th scope="row">12월 무렵</th><td>결과물과 조사 보고서 공개</td></tr>
  </tbody>
</table>

## 함께하기

체험해 보신 뒤 불편했던 점이나 바라는 점을 알려 주세요. 프로젝트 소식과 참여 방법은 [코드포코리아 소개글](https://codefor.kr/posts/w9tpz05){:target="_blank" rel="noopener noreferrer"}<span class="sr-only"> (새 창, 외부 사이트)</span>에서 확인하실 수 있습니다.

<p class="notice">이 프로젝트는 코드포코리아 참여자들이 함께 기획·디자인·개발하고 있으며, 완성본은 전문 기관의 자문을 받아 다듬을 예정입니다.</p>

<p><a href="{{ '/' | relative_url }}">체험하러 가기</a></p>
