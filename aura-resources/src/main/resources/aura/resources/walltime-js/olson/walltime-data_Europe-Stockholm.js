(function() {
    window.WallTime || (window.WallTime = {});
    window.WallTime.data = {
        rules: {"EU":[{"name":"EU","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"1:00u","_save":"0","letter":"-"}]},
        zones: {"Europe/Stockholm":[{"name":"Europe/Stockholm","_offset":"1:12:12","_rule":"-","format":"LMT","_until":"1879 Jan 1"},{"name":"Europe/Stockholm","_offset":"1:00:14","_rule":"-","format":"SET","_until":"1900 Jan 1"},{"name":"Europe/Stockholm","_offset":"1:00","_rule":"-","format":"CET","_until":"1916 May 14 23:00"},{"name":"Europe/Stockholm","_offset":"1:00","_rule":"1:00","format":"CEST","_until":"1916 Oct 1 1:00"},{"name":"Europe/Stockholm","_offset":"1:00","_rule":"-","format":"CET","_until":"1980"},{"name":"Europe/Stockholm","_offset":"1:00","_rule":"EU","format":"CE%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);
