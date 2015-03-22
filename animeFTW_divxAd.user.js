// ==UserScript==
// @name          Remove animeftw.tv divx notice
// @author        Ethan Chan
// @namespace     AFTW_DivXAway
// @description   Removes the "DivX Web Player got you down?" ad
// @include       *.animeftw.tv/*
// ==/UserScript==

$("div:contains('DivX Web Player got you down?')").closest("td.main-bg").hide()