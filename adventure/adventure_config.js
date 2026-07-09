// OHAYO NIHONGO — Diary Adventure 課金設定（Lemon Squeezy）
// ★ストア開設後にこのファイルだけ書き換える（ゲーム本体の再生成は不要）
//   手順書: Vault「Lemon_Squeezyストア開設キット.md」
// ・test_mode: true の間はキー "TEST-OHAYO" で全作解放（公開前検証用）。
//   本番販売を始めるときに false にする。（Stripe/LSの本人確認 in review 完了後）
// ・product_id / checkout_url: Lemon Squeezyの各商品から転記済み（2026-07-09）。
window.OHAYO_ADV_CONFIG = {
  test_mode: true,
  store_id: "",
  products: {
    season1:  { product_id: "1208418", checkout_url: "https://ohayonihongo.lemonsqueezy.com/checkout/buy/a2c9b13a-3e28-4d99-8f8a-5bf526c69b0a", price: "$5.99", label: "Season 1 Pass" },
    specials: { product_id: "1208460", checkout_url: "https://ohayonihongo.lemonsqueezy.com/checkout/buy/2735f1a9-b7ff-414e-bfb7-cff3de32be79", price: "$4.99", label: "Specials Pack" },
    allaccess:{ product_id: "1208474", checkout_url: "https://ohayonihongo.lemonsqueezy.com/checkout/buy/b79f151c-9ed0-492f-b35a-f71ea91e4359", price: "$8.99", label: "All-Access" }
  },
  grace_hours: 72,        // この時間内はオンライン再検証せず即プレイ（裏で検証）
  offline_grace_days: 14  // ネット不通でも遊べる猶予
};
