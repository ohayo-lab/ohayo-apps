// OHAYO NIHONGO — Diary Adventure 課金設定（Lemon Squeezy）
// ★ストア開設後にこのファイルだけ書き換える（ゲーム本体の再生成は不要）
//   手順書: Vault「Lemon_Squeezyストア開設キット.md」
// ・test_mode: true の間はキー "TEST-OHAYO" で全作解放（公開前検証用）。
//   本番販売を始めるときに false にする。
// ・product_id / checkout_url: Lemon Squeezyの各商品から転記。
window.OHAYO_ADV_CONFIG = {
  test_mode: true,
  store_id: "",
  products: {
    season1:  { product_id: "", checkout_url: "", price: "$5.99", label: "Season 1 Pass" },
    specials: { product_id: "", checkout_url: "", price: "$4.99", label: "Specials Pack" },
    allaccess:{ product_id: "", checkout_url: "", price: "$8.99", label: "All-Access" }
  },
  grace_hours: 72,        // この時間内はオンライン再検証せず即プレイ（裏で検証）
  offline_grace_days: 14  // ネット不通でも遊べる猶予
};
