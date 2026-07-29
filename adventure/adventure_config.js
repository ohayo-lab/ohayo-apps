// OHAYO NIHONGO — Diary Adventure 課金設定（Lemon Squeezy）
// [重要] ストア開設後にこのファイルだけ書き換える（ゲーム本体の再生成は不要）
//   手順書: Vault「Lemon_Squeezyストア開設キット.md」
// ・test_mode: true の間はキー "TEST-OHAYO" で全作解放（公開前検証用）。
//   本番販売を始めるときに false にする。（Stripe/LSの本人確認 in review 完了後）
// ・product_id / checkout_url: Live（本番）URLに差し替え済み（2026-07-29・タイトル照合＋test_mode:false実測済み）。
window.OHAYO_ADV_CONFIG = {
  test_mode: false,  // 2026-07-29 オーナーGOで本番化（LS審査APPROVED済み）。TEST-OHAYOキーは無効になる
  store_id: "",
  products: {
    season1:  { product_id: "1253493", checkout_url: "https://ohayonihongo.lemonsqueezy.com/checkout/buy/a2ec8513-553b-47e9-bbac-a0a48d2b665e", price: "$5.99", label: "Season 1 Pass" },
    specials: { product_id: "1253490", checkout_url: "https://ohayonihongo.lemonsqueezy.com/checkout/buy/ee05f174-fd3f-4251-a4e2-f3029ed0cb48", price: "$4.99", label: "Specials Pack" },
    allaccess:{ product_id: "1253491", checkout_url: "https://ohayonihongo.lemonsqueezy.com/checkout/buy/a4bed904-4ec6-4438-b33d-b653ab8feaf0", price: "$8.99", label: "All-Access" }
  },
  grace_hours: 72,        // この時間内はオンライン再検証せず即プレイ（裏で検証）
  offline_grace_days: 14  // ネット不通でも遊べる猶予
};
