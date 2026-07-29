/* OHAYO NIHONGO — shared top-right navigation menu
   Self-contained. Injects a fixed hamburger button + dropdown on every page
   that includes it. No dependencies, safe over any page background. */
(function () {
  if (window.__ohayoMenu) return;
  window.__ohayoMenu = true;

  // 中身はLPのナビ（.nav-links）と同じ6項目に揃える（2026-07-22オーナー確定）。
  // 棚の順番を変えたら LP の .nav-links とこの配列の両方を直すこと。
  // /diary/ アーカイブは動線から隔離済みなので出さない（2026-07-21オーナー確定・再提案禁止）。
  var LINKS = [
    { href: "/#read",   label: "Read",   jp: "よむ" },
    { href: "/news/",   label: "Good Mornings", jp: "きょうの、いいこと。" },
    { href: "/method/",  label: "Method", jp: "メソッド" },  // LPアンカーではなく実ページへ（2026-07-29 オーナー指摘）
    { href: "/#learn",  label: "Learn",  jp: "つづける" },
    { href: "/#try",    label: "Try",    jp: "ためす" },
    // Play項目は2026-07-27統括決裁で削除（ゲームはLPから一旦退避・ナビ露出も消す）。
    // /play/ ハブ自体は温存（sitemap・直リンク・台湾レーン用）。再登板時にここへ復帰。
    { href: "/#shop",   label: "The Shelf", jp: "ほんだな" },
  ];

  var css = ""
    + "#ohMenuBtn{position:fixed;top:14px;right:14px;z-index:99999;width:44px;height:44px;"
    + "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;"
    + "background:rgba(255,255,255,.94);border:1px solid #CFE3EF;border-radius:12px;cursor:pointer;"
    + "box-shadow:0 4px 14px rgba(19,75,112,.18);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);padding:0}"
    + "#ohMenuBtn span{display:block;width:20px;height:2px;border-radius:2px;background:#134B70;transition:.25s}"
    + "#ohMenuBtn.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}"
    + "#ohMenuBtn.open span:nth-child(2){opacity:0}"
    + "#ohMenuBtn.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}"
    + "#ohMenuOv{position:fixed;inset:0;z-index:99998;background:rgba(16,44,72,.28);opacity:0;"
    + "pointer-events:none;transition:opacity .2s}"
    + "#ohMenuOv.open{opacity:1;pointer-events:auto}"
    + "#ohMenuPanel{position:fixed;top:66px;right:14px;z-index:99999;min-width:210px;"
    + "background:#fff;border:1px solid #CFE3EF;border-radius:14px;padding:8px;"
    + "box-shadow:0 12px 34px rgba(19,75,112,.24);transform:translateY(-8px) scale(.98);"
    + "opacity:0;pointer-events:none;transform-origin:top right;transition:transform .18s,opacity .18s}"
    + "#ohMenuPanel.open{transform:translateY(0) scale(1);opacity:1;pointer-events:auto}"
    + "#ohMenuPanel a{display:flex;align-items:baseline;justify-content:space-between;gap:14px;"
    + "text-decoration:none;padding:11px 14px;border-radius:10px;color:#1C1C1C;"
    + "font-family:'DM Sans','Noto Sans JP',sans-serif;font-weight:700;font-size:14px;letter-spacing:.02em}"
    + "#ohMenuPanel a .jp{font-family:'Noto Sans JP',sans-serif;font-weight:400;font-size:11px;color:#5F6E77}"  /* 旧#8AA0B2は白地で2.71:1＝AA未達（2026-07-29実測）。5.9:1へ */
    + "#ohMenuPanel a:hover{background:#F1F7FC}"
    + "#ohMenuPanel a.active{background:#134B70;color:#fff}"
    + "#ohMenuPanel a.active .jp{color:#BFE6F9}"
    + "@media print{#ohMenuBtn,#ohMenuOv,#ohMenuPanel{display:none!important}}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var btn = document.createElement("button");
  btn.id = "ohMenuBtn";
  btn.setAttribute("aria-label", "Menu");
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = "<span></span><span></span><span></span>";

  var overlay = document.createElement("div");
  overlay.id = "ohMenuOv";

  var panel = document.createElement("nav");
  panel.id = "ohMenuPanel";
  panel.setAttribute("aria-label", "Site menu");

  var here = location.pathname.replace(/\/index\.html$/, "/");
  panel.innerHTML = LINKS.map(function (l) {
    var path = l.href.split("#")[0];
    var active = (path !== "/" && here.indexOf(path) === 0) || (path === "/" && here === "/");
    return '<a href="' + l.href + '"' + (active ? ' class="active"' : "") + ">"
      + '<span>' + l.label + '</span><span class="jp">' + l.jp + "</span></a>";
  }).join("");

  function setOpen(open) {
    btn.classList.toggle("open", open);
    overlay.classList.toggle("open", open);
    panel.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  btn.addEventListener("click", function () { setOpen(!panel.classList.contains("open")); });
  overlay.addEventListener("click", function () { setOpen(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });

  document.body.appendChild(overlay);
  document.body.appendChild(panel);
  document.body.appendChild(btn);
})();
