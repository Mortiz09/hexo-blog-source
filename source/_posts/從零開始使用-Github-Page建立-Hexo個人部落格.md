---
title: 從零開始使用 Github Page建立 Hexo個人部落格
date: 2017-06-21 11:01:41
tags: Hexo
---
**replace <font color="red">red text</font> by yourself**

1. install node.js
2. install git
3. create new folder <font color="red">Hexo folder</font>
4. enter <font color="red">Hexo folder</font>
5. right click and select Git Bash Here
6. enter command line: $ npm install -g hexo-cli
7. enter command line: $ hexo init
8. //enter command line: $ npm install
9. enter command line: $ hexo server
(go to local page: http://localhost:4000/)
10. enter command line: $ hexo generate (generate at folder "public")
11. modify deploy setting at _config.yml
<code>deploy:
    type: git
    repository: git@github.com:<font color="red">Mortiz09</font>/<font color="red">mortiz09</font>.github.io.git
    branch: master</code>
12. enter command line: $ npm install hexo-deployer-git --save
13. enter command line: $ git config --global user.name "<font color="red">mortiz09</font>"
14. enter command line: $ git config --global user.email “<font color="red">xxxxx@hotmail.com</font>"
15. enter command line: $ ssh-keygen -t rsa -C "<font color="red">xxxxx@hotmail.com</font>"
16. open C:\Users\<font color="red">Moz</font>\\.ssh\id_rsa.pub, copy all text
17. go to github, Settings, SSH and GPG keys
18. click "New SSH key", paste to input <key>, click "Add SSH key"
(13-18 ref: http://blog.csdn.net/jingtingfengguo/article/details/51892864)
19. enter command line: $ hexo deploy

Finally!! Go to your page: <font color="red">https://mortiz09.github.io/</font>

*Ref:*
* <a href="http://blog.csdn.net/jingtingfengguo/article/details/51892864">git遇到的问题之“Please make sure you have the correct access rights and the repository exists.” - jingtingfengguo的博客 - 博客频道 - CSDN.NET</a>
* <a href="http://hungjie19.github.io/hexoblog/2015/05/24/hexo-new-%E6%96%87%E7%AB%A0%E5%BE%8C%E5%B9%AB%E4%BD%A0%E9%96%8B%E5%95%9F-MarkDown-%E7%B7%A8%E8%BC%AF%E5%99%A8/">Hexo 新增文章後幫你開啟 markdown 編輯器</a>