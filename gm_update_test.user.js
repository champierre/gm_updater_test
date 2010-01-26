// ==UserScript==
// @title          gm_update_test
// @description    gm_update_test
// @namespace      http://blog.champierre.com
// @include        http://www.amazon.*
// @require        http://svn.coderepos.org/share/lang/javascript/userscripts/GM_Libs/noriaki/UpdateChecker/UC-20080823.js  
// @version        1.96
// ==/UserScript==

alert('test');

new UpdateChecker({  
  script_name: 'GM Update Test',
  script_url: 'http://github.com/champierre/gm_updater_test/raw/master/gm_update_test.user.js',
  current_version: '1.96',
  more_info_url: 'http://libron.net'
});