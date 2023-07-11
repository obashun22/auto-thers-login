$(() => {
  // 未ログインのページにログインした場合の処理
  if (location.href.match(/https:\/\/tact.ac.thers.ac.jp\/portal/)) {
    if ($("#loginLink1").find("img").length > 0) {
      const href = $("#loginLink1").attr("href");
      location.href = href;
    }
  }
  // 認証ページの場合の処理
  if (
    location.href.match(
      /https:\/\/shib.sys.thers.ac.jp\/idp\/profile\/SAML2\/Redirect\/SSO/
    )
  ) {
    // チェックボックス選択
    $("#_shib_idp_globalConsent").click();
    // 同意押下
    $("input[name=_eventId_proceed]").click();
  }
});
