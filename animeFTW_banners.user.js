// ==UserScript==
// @name          Remove animeftw.tv banners
// @author        Ethan Chan
// @namespace     AFTW_DivXAway
// @description   Removes the "DivX Web Player got you down?" ad
// @include       *.animeftw.tv/*
// ==/UserScript==

$("div:contains('DivX Web Player got you down?')").closest("td.main-bg").closest("table").hide()
$("div:contains('Keep Track of all the Series you watch.')").closest("td.main-bg").closest("table").hide()