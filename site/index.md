---
layout: default
title: 키오스크 체험하기
---

# 누구나 쉽게 쓰는 키오스크, 직접 체험해 보세요

{: .lead}
모두의 키오스크는 어르신과 디지털 환경이 낯선 분들도 편하게 쓸 수 있는 키오스크 화면을 함께 만드는 프로젝트입니다. 아래에서 개선 중인 화면을 직접 눌러 보시고, 불편한 점을 알려 주세요.

<section aria-labelledby="demos-heading">
  <h2 id="demos-heading">체험할 수 있는 키오스크</h2>
  <div class="cards">
    {% for demo in site.data.demos %}
      {% include card.html demo=demo %}
    {% endfor %}
  </div>
</section>

<p class="notice">체험 화면은 연습용입니다. 실제 결제나 발권은 이루어지지 않으니 안심하고 눌러 보세요.</p>

<p><a href="{{ '/about/' | relative_url }}">이 프로젝트가 궁금하신가요? 프로젝트 소개 보기</a></p>
