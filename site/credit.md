---
layout: default
title: 만든 사람들
permalink: /credit/
---

# 만든 사람들

{: .lead}
체험 키오스크 세 가지는 코드포코리아 참여자들이 함께 만들었습니다. 키오스크마다 누가 어떤 작업을 맡았는지 소개합니다.

{% for demo in site.data.demos %}
<section aria-labelledby="maker-{{ demo.id }}">
  <h2 id="maker-{{ demo.id }}">{{ demo.title }}</h2>
  <p>{{ demo.badge }} · <a href="{{ demo.url }}" target="_blank" rel="noopener noreferrer">체험하기<span class="sr-only"> ({{ demo.title }}, 새 창, 외부 사이트)</span></a></p>
  {% if demo.makers %}
  <ul>
    {% for maker in demo.makers %}
    <li><strong>{{ maker.role }}:</strong> {{ maker.names }}{% if maker.work %} — {{ maker.work }}{% endif %}</li>
    {% endfor %}
  </ul>
  {% else %}
  <p>만든 사람 소개를 준비하고 있습니다.</p>
  {% endif %}
</section>
{% endfor %}

## 함께한 사람들

<ul>
  <li><strong>개발 참여:</strong> 슬기로운 생활, 달로스 (프론트엔드·백엔드)</li>
  <li><strong>설문 조사와 분석:</strong> 슬기로운 생활, 새롬, 플루잇토</li>
  <li><strong>대문 사이트 운영:</strong> 달로스</li>
</ul>

이 밖에도 체험에 참여해 의견을 들려주신 어르신과 자원봉사자 여러분 덕분에 화면을 고칠 수 있었습니다. 고맙습니다.

<p class="notice">이름과 역할이 사실과 다르거나 빠진 분이 있다면 <a href="https://github.com/Code-for-Korea/barrier-free-kiosk/issues" target="_blank" rel="noopener noreferrer">이슈<span class="sr-only"> (새 창, 외부 사이트)</span></a>로 알려 주세요. 바로 고치겠습니다.</p>

<p><a href="{{ '/contribute/' | relative_url }}">나도 함께하고 싶다면: 참여하기</a></p>
