---
title: 想要留言的功能 Disqus
date: 2017-06-29 00:03:25
tags: Hexo
---
參考：[為 Hexo 博客加入 Disqus 評論 - 簡書](http://www.jianshu.com/p/c4f65ebe23ad)

以下包含套用 Bootstrap Blog主題後，需要修改的說明：
1. 申請 Disqus，取得 shortname
2. 開啟 \_config.yml，自己找個地找個地方加入 disqus_shortname: <font color="red">mortizhexogitpage</font>
3. 開啟 \themes\bootstrap-blog\layout\_partial\footer.ejs，將以下程式碼貼到檔案尾巴
{% codeblock lang:ejs %}
<% if ((page.layout == 'post' || page.layout == 'page') && config.disqus_shortname && page.comments){ %>
    <script type="text/javascript">
    var disqus_shortname = '<%= config.disqus_shortname %>';
    var disqus_config = function () {
        this.page.url = '<%= config.url %>/<%= page.path %>';
        this.page.identifier = '/<%= page.path %>';
        this.page.title = '<%= page.title %>';
    };
    (function(){
      var d = document;
      var dsq = d.createElement('script');
      dsq.type = 'text/javascript';
      dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/<% if (page.comments){ %>embed.js<% } else { %>count.js<% } %>';
      (d.head || d.body).appendChild(dsq);
    })();
    </script>
<% } %>
{% endcodeblock %}
4. 在 \themes\bootstrap-blog\layout\_partial\post，新增一個 comments.ejs 檔案，並貼上以下程式碼
{% codeblock lang:ejs %}
<% if (page.comments){ %>
<section id="comment">
  <% if(config.disqus_shortname) { %>
  <div id="disqus_thread">
    <noscript>Please enable JavaScript to view the <a href="//disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
  </div>
  <% } %>
</section>
<% } %>
{% endcodeblock %}