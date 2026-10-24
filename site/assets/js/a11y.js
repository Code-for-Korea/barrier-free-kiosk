/* 큰 글씨 / 고대비 토글. 버튼 이름은 고정하고 aria-pressed로 상태만 알린다. JS가 꺼져 있어도 사이트는 정상 동작한다. */
(function () {
  var root = document.documentElement;
  var settings = [
    { id: "toggle-size", attr: "data-size", on: "large", key: "cfk-size" },
    { id: "toggle-contrast", attr: "data-contrast", on: "high", key: "cfk-contrast" }
  ];

  function store(key, value) {
    try {
      if (value) localStorage.setItem(key, value);
      else localStorage.removeItem(key);
    } catch (e) {}
  }

  settings.forEach(function (s) {
    var btn = document.getElementById(s.id);
    if (!btn) return;
    function render() {
      var active = root.getAttribute(s.attr) === s.on;
      btn.setAttribute("aria-pressed", String(active));
    }
    btn.addEventListener("click", function () {
      var active = root.getAttribute(s.attr) === s.on;
      if (active) root.removeAttribute(s.attr);
      else root.setAttribute(s.attr, s.on);
      store(s.key, active ? null : s.on);
      render();
    });
    render();
  });
})();
