---
title: Hexo建立新文章後自動執行編輯器
date: 2017-06-21 22:38:57
tags: Hexo
---
每次執行完 $ hexo new後都要去 \source\\_posts裡面找出 .md檔，再用編輯器開啟真的是超麻煩的
這些功夫當然是能省則省

1. 在 <font color="red">Hexo folder</font>內建立新資料夾 scripts
2. 在 scripts資料夾底下新增一個 .js檔案，檔案內容如下

{% codeblock lang:javascript %}
var exec = require('child_process').exec;
hexo.on('new', function(data) {
    exec('start "<font color="red">C:\Users\XXX\AppData\Roaming\Haroo Studio\Haroopad\haroopad.exe</font>" '+ data.path);
});
{% endcodeblock %}
3. 在 Git Bash執行 $ hexo new指令看看

一開始我執行的時候都會跑出這段錯誤：
{% asset_img 'hexo_scripts_error_UnexpectedEndOfInput.png' Error Message %}
最後找出錯誤是因為我在程式碼最後  }); 又隔一行然後放了註解 ...

*Ref:*
* <a href="https://hexo.io/zh-tw/docs/plugins.html">外掛 | Hexo</a>
* <a href="https://thisis577.github.io/2016/08/05/auto-open-editor-and-browser-after-hexo-new-post/">Hexo 建立新文章後自動打開編輯器跟瀏覽器 · A little bird on coding</a>