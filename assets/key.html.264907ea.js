import{_ as e,o as s,c as a,e as n}from"./app.3b2d76f3.js";const d={},i=n(`<h1 id="ssh-\u5BC6\u94A5\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#ssh-\u5BC6\u94A5\u767B\u5F55" aria-hidden="true">#</a> SSH \u5BC6\u94A5\u767B\u5F55</h1><p>SSH \u9ED8\u8BA4\u91C7\u7528\u5BC6\u7801\u767B\u5F55\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u6709\u5F88\u591A\u7F3A\u70B9\uFF0C\u7B80\u5355\u7684\u5BC6\u7801\u4E0D\u5B89\u5168\uFF0C\u590D\u6742\u7684\u5BC6\u7801\u4E0D\u5BB9\u6613\u8BB0\u5FC6\uFF0C\u6BCF\u6B21\u624B\u52A8\u8F93\u5165\u4E5F\u5F88\u9EBB\u70E6\u3002\u5BC6\u94A5\u767B\u5F55\u662F\u6BD4\u5BC6\u7801\u767B\u5F55\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><h2 id="\u5BC6\u94A5\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u5BC6\u94A5\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u5BC6\u94A5\u662F\u4EC0\u4E48</h2><p>\u5BC6\u94A5\uFF08key\uFF09\u662F\u4E00\u4E2A\u975E\u5E38\u5927\u7684\u6570\u5B57\uFF0C\u901A\u8FC7\u52A0\u5BC6\u7B97\u6CD5\u5F97\u5230\u3002\u5BF9\u79F0\u52A0\u5BC6\u53EA\u9700\u8981\u4E00\u4E2A\u5BC6\u94A5\uFF0C\u975E\u5BF9\u79F0\u52A0\u5BC6\u9700\u8981\u4E24\u4E2A\u5BC6\u94A5\u6210\u5BF9\u4F7F\u7528\uFF0C\u5206\u4E3A\u516C\u94A5\uFF08public key\uFF09\u548C\u79C1\u94A5\uFF08private key\uFF09\u3002</p><p>SSH \u5BC6\u94A5\u767B\u5F55\u91C7\u7528\u7684\u662F\u975E\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u6BCF\u4E2A\u7528\u6237\u901A\u8FC7\u81EA\u5DF1\u7684\u5BC6\u94A5\u767B\u5F55\u3002\u5176\u4E2D\uFF0C\u79C1\u94A5\u5FC5\u987B\u79C1\u5BC6\u4FDD\u5B58\uFF0C\u4E0D\u80FD\u6CC4\u6F0F\uFF1B\u516C\u94A5\u5219\u662F\u516C\u5F00\u7684\uFF0C\u53EF\u4EE5\u5BF9\u5916\u53D1\u9001\u3002\u5B83\u4EEC\u7684\u5173\u7CFB\u662F\uFF0C\u516C\u94A5\u548C\u79C1\u94A5\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\uFF0C\u6BCF\u4E00\u4E2A\u79C1\u94A5\u90FD\u6709\u4E14\u4EC5\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684\u516C\u94A5\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002</p><p>\u5982\u679C\u6570\u636E\u4F7F\u7528\u516C\u94A5\u52A0\u5BC6\uFF0C\u90A3\u4E48\u53EA\u6709\u4F7F\u7528\u5BF9\u5E94\u7684\u79C1\u94A5\u624D\u80FD\u89E3\u5BC6\uFF0C\u5176\u4ED6\u5BC6\u94A5\u90FD\u4E0D\u884C\uFF1B\u53CD\u8FC7\u6765\uFF0C\u5982\u679C\u4F7F\u7528\u79C1\u94A5\u52A0\u5BC6\uFF08\u8FD9\u4E2A\u8FC7\u7A0B\u4E00\u822C\u79F0\u4E3A\u201C\u7B7E\u540D\u201D\uFF09\uFF0C\u4E5F\u53EA\u6709\u4F7F\u7528\u5BF9\u5E94\u7684\u516C\u94A5\u89E3\u5BC6\u3002</p><h2 id="\u5BC6\u94A5\u767B\u5F55\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5BC6\u94A5\u767B\u5F55\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> \u5BC6\u94A5\u767B\u5F55\u7684\u8FC7\u7A0B</h2><p>SSH \u5BC6\u94A5\u767B\u5F55\u5206\u4E3A\u4EE5\u4E0B\u7684\u6B65\u9AA4\u3002</p><p>\u9884\u5907\u6B65\u9AA4\uFF0C\u5BA2\u6237\u7AEF\u901A\u8FC7<code>ssh-keygen</code>\u751F\u6210\u81EA\u5DF1\u7684\u516C\u94A5\u548C\u79C1\u94A5\u3002</p><p>\u7B2C\u4E00\u6B65\uFF0C\u624B\u52A8\u5C06\u5BA2\u6237\u7AEF\u7684\u516C\u94A5\u653E\u5165\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u6307\u5B9A\u4F4D\u7F6E\u3002</p><p>\u7B2C\u4E8C\u6B65\uFF0C\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u8D77 SSH \u767B\u5F55\u7684\u8BF7\u6C42\u3002</p><p>\u7B2C\u4E09\u6B65\uFF0C\u670D\u52A1\u5668\u6536\u5230\u7528\u6237 SSH \u767B\u5F55\u7684\u8BF7\u6C42\uFF0C\u53D1\u9001\u4E00\u4E9B\u968F\u673A\u6570\u636E\u7ED9\u7528\u6237\uFF0C\u8981\u6C42\u7528\u6237\u8BC1\u660E\u81EA\u5DF1\u7684\u8EAB\u4EFD\u3002</p><p>\u7B2C\u56DB\u6B65\uFF0C\u5BA2\u6237\u7AEF\u6536\u5230\u670D\u52A1\u5668\u53D1\u6765\u7684\u6570\u636E\uFF0C\u4F7F\u7528\u79C1\u94A5\u5BF9\u6570\u636E\u8FDB\u884C\u7B7E\u540D\uFF0C\u7136\u540E\u518D\u53D1\u8FD8\u7ED9\u670D\u52A1\u5668\u3002</p><p>\u7B2C\u4E94\u6B65\uFF0C\u670D\u52A1\u5668\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u6765\u7684\u52A0\u5BC6\u7B7E\u540D\u540E\uFF0C\u4F7F\u7528\u5BF9\u5E94\u7684\u516C\u94A5\u89E3\u5BC6\uFF0C\u7136\u540E\u8DDF\u539F\u59CB\u6570\u636E\u6BD4\u8F83\u3002\u5982\u679C\u4E00\u81F4\uFF0C\u5C31\u5141\u8BB8\u7528\u6237\u767B\u5F55\u3002</p><h2 id="ssh-keygen\u547D\u4EE4-\u751F\u6210\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#ssh-keygen\u547D\u4EE4-\u751F\u6210\u5BC6\u94A5" aria-hidden="true">#</a> <code>ssh-keygen</code>\u547D\u4EE4\uFF1A\u751F\u6210\u5BC6\u94A5</h2><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h3><p>\u5BC6\u94A5\u767B\u5F55\u65F6\uFF0C\u9996\u5148\u9700\u8981\u751F\u6210\u516C\u94A5\u548C\u79C1\u94A5\u3002OpenSSH \u63D0\u4F9B\u4E86\u4E00\u4E2A\u5DE5\u5177\u7A0B\u5E8F<code>ssh-keygen</code>\u547D\u4EE4\uFF0C\u7528\u6765\u751F\u6210\u5BC6\u94A5\u3002</p><p>\u76F4\u63A5\u8F93\u5165<code>ssh-keygen</code>\uFF0C\u7A0B\u5E8F\u4F1A\u8BE2\u95EE\u4E00\u7CFB\u5217\u95EE\u9898\uFF0C\u7136\u540E\u751F\u6210\u5BC6\u94A5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-keygen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u5E38\u505A\u6CD5\u662F\u4F7F\u7528<code>-t</code>\u53C2\u6570\uFF0C\u6307\u5B9A\u5BC6\u94A5\u7684\u52A0\u5BC6\u7B97\u6CD5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> dsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>-t</code>\u53C2\u6570\u7528\u6765\u6307\u5B9A\u5BC6\u94A5\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u4E00\u822C\u4F1A\u9009\u62E9 DSA \u7B97\u6CD5\u6216 RSA \u7B97\u6CD5\u3002\u5982\u679C\u7701\u7565\u8BE5\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4F7F\u7528 RSA \u7B97\u6CD5\u3002</p><p>\u8F93\u5165\u4E0A\u9762\u7684\u547D\u4EE4\u4EE5\u540E\uFF0C<code>ssh-keygen</code>\u4F1A\u8981\u6C42\u7528\u6237\u56DE\u7B54\u4E00\u4E9B\u95EE\u9898\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> dsa
Generating public/private dsa key pair.
Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/home/username/.ssh/id_dsa<span class="token punctuation">)</span>:  press ENTER
Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>: ********
Enter same passphrase again: ********
Your identification has been saved <span class="token keyword">in</span> /home/username/.ssh/id_dsa.
Your public key has been saved <span class="token keyword">in</span> /home/username/.ssh/id_dsa.pub.
The key fingerprint is:
<span class="token number">14</span>:ba:06:98:a8:98:ad:27:b5:ce:55:85:ec:64:37:19 username@shell.isp.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u6267\u884C<code>ssh-keygen</code>\u547D\u4EE4\u4EE5\u540E\uFF0C\u4F1A\u51FA\u73B0\u7B2C\u4E00\u4E2A\u95EE\u9898\uFF0C\u8BE2\u95EE\u5BC6\u94A5\u4FDD\u5B58\u7684\u6587\u4EF6\u540D\uFF0C\u9ED8\u8BA4\u662F<code>~/.ssh/id_dsa</code>\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u662F\u79C1\u94A5\u7684\u6587\u4EF6\u540D\uFF0C\u5BF9\u5E94\u7684\u516C\u94A5\u6587\u4EF6<code>~/.ssh/id_dsa.pub</code>\u662F\u81EA\u52A8\u751F\u6210\u7684\u3002\u7528\u6237\u7684\u5BC6\u94A5\u4E00\u822C\u90FD\u653E\u5728\u4E3B\u76EE\u5F55\u7684<code>.ssh</code>\u76EE\u5F55\u91CC\u9762\u3002</p><p>\u5982\u679C\u9009\u62E9<code>rsa</code>\u7B97\u6CD5\uFF0C\u751F\u6210\u7684\u5BC6\u94A5\u6587\u4EF6\u9ED8\u8BA4\u5C31\u4F1A\u662F<code>~/.ssh/id_rsa</code>\uFF08\u79C1\u94A5\uFF09\u548C<code>~/.ssh/id_rsa.pub</code>\uFF08\u516C\u94A5\uFF09\u3002</p><p>\u63A5\u7740\uFF0C\u5C31\u4F1A\u662F\u7B2C\u4E8C\u4E2A\u95EE\u9898\uFF0C\u8BE2\u95EE\u662F\u5426\u8981\u4E3A\u79C1\u94A5\u6587\u4EF6\u8BBE\u5B9A\u5BC6\u7801\u4FDD\u62A4\uFF08passphrase\uFF09\u3002\u8FD9\u6837\u7684\u8BDD\uFF0C\u5373\u4F7F\u5165\u4FB5\u8005\u62FF\u5230\u79C1\u94A5\uFF0C\u8FD8\u662F\u9700\u8981\u7834\u89E3\u5BC6\u7801\u3002\u5982\u679C\u4E3A\u4E86\u65B9\u4FBF\uFF0C\u4E0D\u60F3\u8BBE\u5B9A\u5BC6\u7801\u4FDD\u62A4\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6309\u56DE\u8F66\u952E\uFF0C\u5BC6\u7801\u5C31\u4F1A\u4E3A\u7A7A\u3002\u540E\u9762\u8FD8\u4F1A\u8BA9\u4F60\u518D\u8F93\u5165\u4E00\u6B21\u5BC6\u7801\uFF0C\u4E24\u6B21\u8F93\u5165\u5FC5\u987B\u4E00\u81F4\u3002\u6CE8\u610F\uFF0C\u8FD9\u91CC\u201C\u5BC6\u7801\u201D\u7684\u82F1\u6587\u5355\u8BCD\u662F passphrase\uFF0C\u8FD9\u662F\u4E3A\u4E86\u907F\u514D\u4E0E Linux \u8D26\u6237\u7684\u5BC6\u7801\u5355\u8BCD password \u6DF7\u6DC6\uFF0C\u8868\u793A\u8FD9\u4E0D\u662F\u7528\u6237\u7CFB\u7EDF\u8D26\u6237\u7684\u5BC6\u7801\u3002</p><p>\u6700\u540E\uFF0C\u5C31\u4F1A\u751F\u6210\u79C1\u94A5\u548C\u516C\u94A5\uFF0C\u5C4F\u5E55\u4E0A\u8FD8\u4F1A\u7ED9\u51FA\u516C\u94A5\u7684\u6307\u7EB9\uFF0C\u4EE5\u53CA\u5F53\u524D\u7684\u7528\u6237\u540D\u548C\u4E3B\u673A\u540D\u4F5C\u4E3A\u6CE8\u91CA\uFF0C\u7528\u6765\u8BC6\u522B\u5BC6\u94A5\u7684\u6765\u6E90\u3002</p><p>\u516C\u94A5\u6587\u4EF6\u548C\u79C1\u94A5\u6587\u4EF6\u90FD\u662F\u6587\u672C\u6587\u4EF6\uFF0C\u53EF\u4EE5\u7528\u6587\u672C\u7F16\u8F91\u5668\u770B\u4E00\u4E0B\u5B83\u4EEC\u7684\u5185\u5BB9\u3002\u516C\u94A5\u6587\u4EF6\u7684\u5185\u5BB9\u7C7B\u4F3C\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIEAvpB4lUbAaEbh9u6HLig7amsfywD4fqSZq2ikACIUBn3GyRPfeF93l/
weQh702ofXbDydZAKMcDvBJqRhUotQUwqV6HJxqoqPDlPGUUyo8RDIkLUIPRyq
ypZxmK9aCXokFiHoGCXfQ9imUP/w/jfqb9ByDtG97tUJF6nFMP5WzhM<span class="token operator">=</span> username@shell.isp.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u672B\u5C3E\u7684<code>username@shell.isp.com</code>\u662F\u516C\u94A5\u7684\u6CE8\u91CA\uFF0C\u7528\u6765\u8BC6\u522B\u4E0D\u540C\u7684\u516C\u94A5\uFF0C\u8868\u793A\u8FD9\u662F\u54EA\u53F0\u4E3B\u673A\uFF08<code>shell.isp.com</code>\uFF09\u7684\u54EA\u4E2A\u7528\u6237\uFF08<code>username</code>\uFF09\u7684\u516C\u94A5\uFF0C\u4E0D\u662F\u5FC5\u9700\u9879\u3002</p><p>\u6CE8\u610F\uFF0C\u516C\u94A5\u53EA\u6709\u4E00\u884C\u3002\u56E0\u4E3A\u5B83\u592A\u957F\u4E86\uFF0C\u6240\u4EE5\u4E0A\u9762\u5206\u6210\u4E09\u884C\u663E\u793A\u3002</p><p>\u4E0B\u9762\u7684\u547D\u4EE4\u53EF\u4EE5\u5217\u51FA\u7528\u6237\u6240\u6709\u7684\u516C\u94A5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> ~/.ssh/id_*.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u751F\u6210\u5BC6\u94A5\u4EE5\u540E\uFF0C\u5EFA\u8BAE\u4FEE\u6539\u5B83\u4EEC\u7684\u6743\u9650\uFF0C\u9632\u6B62\u5176\u4ED6\u4EBA\u8BFB\u53D6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/id_rsa
$ <span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h3><p><code>ssh-keygen</code>\u7684\u547D\u4EE4\u884C\u914D\u7F6E\u9879\uFF0C\u4E3B\u8981\u6709\u4E0B\u9762\u8FD9\u4E9B\u3002</p><p><strong>\uFF081\uFF09<code>-b</code></strong></p><p><code>-b</code>\u53C2\u6570\u6307\u5B9A\u5BC6\u94A5\u7684\u4E8C\u8FDB\u5236\u4F4D\u6570\u3002\u8FD9\u4E2A\u53C2\u6570\u503C\u8D8A\u5927\uFF0C\u5BC6\u94A5\u5C31\u8D8A\u4E0D\u5BB9\u6613\u7834\u89E3\uFF0C\u4F46\u662F\u52A0\u5BC6\u89E3\u5BC6\u7684\u8BA1\u7B97\u5F00\u9500\u4E5F\u4F1A\u52A0\u5927\u3002</p><p>\u4E00\u822C\u6765\u8BF4\uFF0C<code>-b</code>\u81F3\u5C11\u5E94\u8BE5\u662F<code>1024</code>\uFF0C\u66F4\u5B89\u5168\u4E00\u4E9B\u53EF\u4EE5\u8BBE\u4E3A<code>2048</code>\u6216\u8005\u66F4\u9AD8\u3002</p><p><strong>\uFF082\uFF09<code>-C</code></strong></p><p><code>-C</code>\u53C2\u6570\u53EF\u4EE5\u4E3A\u5BC6\u94A5\u6587\u4EF6\u6307\u5B9A\u65B0\u7684\u6CE8\u91CA\uFF0C\u683C\u5F0F\u4E3A<code>username@host</code>\u3002</p><p>\u4E0B\u9762\u547D\u4EE4\u751F\u6210\u4E00\u4E2A4096\u4F4D RSA \u52A0\u5BC6\u7B97\u6CD5\u7684\u5BC6\u94A5\u5BF9\uFF0C\u5E76\u4E14\u7ED9\u51FA\u4E86\u7528\u6237\u540D\u548C\u4E3B\u673A\u540D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;your_email@domain.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\uFF083\uFF09<code>-f</code></strong></p><p><code>-f</code>\u53C2\u6570\u6307\u5B9A\u751F\u6210\u7684\u79C1\u94A5\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> dsa <span class="token parameter variable">-f</span> mykey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u751F\u6210\u79C1\u94A5\u6587\u4EF6<code>mykey</code>\u548C\u516C\u94A5\u6587\u4EF6<code>mykey.pub</code>\u3002</p><p><strong>\uFF084\uFF09<code>-F</code></strong></p><p><code>-F</code>\u53C2\u6570\u68C0\u67E5\u67D0\u4E2A\u4E3B\u673A\u540D\u662F\u5426\u5728<code>known_hosts</code>\u6587\u4EF6\u91CC\u9762\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-F</span> example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\uFF085\uFF09<code>-N</code></strong></p><p><code>-N</code>\u53C2\u6570\u7528\u4E8E\u6307\u5B9A\u79C1\u94A5\u7684\u5BC6\u7801\uFF08passphrase\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> dsa <span class="token parameter variable">-N</span> secretword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\uFF086\uFF09<code>-p</code></strong></p><p><code>-p</code>\u53C2\u6570\u7528\u4E8E\u91CD\u65B0\u6307\u5B9A\u79C1\u94A5\u7684\u5BC6\u7801\uFF08passphrase\uFF09\u3002\u5B83\u4E0E<code>-N</code>\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF0C\u65B0\u5BC6\u7801\u4E0D\u5728\u547D\u4EE4\u4E2D\u6307\u5B9A\uFF0C\u800C\u662F\u6267\u884C\u540E\u518D\u8F93\u5165\u3002ssh \u5148\u8981\u6C42\u8F93\u5165\u65E7\u5BC6\u7801\uFF0C\u7136\u540E\u8981\u6C42\u8F93\u5165\u4E24\u904D\u65B0\u5BC6\u7801\u3002</p><p><strong>\uFF087\uFF09<code>-R</code></strong></p><p><code>-R</code>\u53C2\u6570\u5C06\u6307\u5B9A\u7684\u4E3B\u673A\u516C\u94A5\u6307\u7EB9\u79FB\u51FA<code>known_hosts</code>\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-R</span> example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\uFF088\uFF09<code>-t</code></strong></p><p><code>-t</code>\u53C2\u6570\u7528\u4E8E\u6307\u5B9A\u751F\u6210\u5BC6\u94A5\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u4E00\u822C\u4E3A<code>dsa</code>\u6216<code>rsa</code></p><h2 id="\u624B\u52A8\u4E0A\u4F20\u516C\u94A5" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u4E0A\u4F20\u516C\u94A5" aria-hidden="true">#</a> \u624B\u52A8\u4E0A\u4F20\u516C\u94A5</h2><p>\u751F\u6210\u5BC6\u94A5\u4EE5\u540E\uFF0C\u516C\u94A5\u5FC5\u987B\u4E0A\u4F20\u5230\u670D\u52A1\u5668\uFF0C\u624D\u80FD\u4F7F\u7528\u516C\u94A5\u767B\u5F55\u3002</p><p>OpenSSH \u89C4\u5B9A\uFF0C\u7528\u6237\u516C\u94A5\u4FDD\u5B58\u5728\u670D\u52A1\u5668\u7684<code>~/.ssh/authorized_keys</code>\u6587\u4EF6\u3002\u4F60\u8981\u4EE5\u54EA\u4E2A\u7528\u6237\u7684\u8EAB\u4EFD\u767B\u5F55\u5230\u670D\u52A1\u5668\uFF0C\u5BC6\u94A5\u5C31\u5FC5\u987B\u4FDD\u5B58\u5728\u8BE5\u7528\u6237\u4E3B\u76EE\u5F55\u7684<code>~/.ssh/authorized_keys</code>\u6587\u4EF6\u3002\u53EA\u8981\u628A\u516C\u94A5\u6DFB\u52A0\u5230\u8FD9\u4E2A\u6587\u4EF6\u4E4B\u4E2D\uFF0C\u5C31\u76F8\u5F53\u4E8E\u516C\u94A5\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u4E86\u3002\u6BCF\u4E2A\u516C\u94A5\u5360\u636E\u4E00\u884C\u3002\u5982\u679C\u8BE5\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u53EF\u4EE5\u624B\u52A8\u521B\u5EFA\u3002</p><p>\u7528\u6237\u53EF\u4EE5\u624B\u52A8\u7F16\u8F91\u8BE5\u6587\u4EF6\uFF0C\u628A\u516C\u94A5\u7C98\u8D34\u8FDB\u53BB\uFF0C\u4E5F\u53EF\u4EE5\u5728\u672C\u673A\u8BA1\u7B97\u673A\u4E0A\uFF0C\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.ssh/id_rsa.pub <span class="token operator">|</span> <span class="token function">ssh</span> user@host <span class="token string">&quot;mkdir -p ~/.ssh &amp;&amp; cat &gt;&gt; ~/.ssh/authorized_keys&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>user@host</code>\u8981\u66FF\u6362\u6210\u4F60\u6240\u8981\u767B\u5F55\u7684\u7528\u6237\u540D\u548C\u4E3B\u673A\u540D\u3002</p><p>\u6CE8\u610F\uFF0C<code>authorized_keys</code>\u6587\u4EF6\u7684\u6743\u9650\u8981\u8BBE\u4E3A<code>644</code>\uFF0C\u5373\u53EA\u6709\u6587\u4EF6\u6240\u6709\u8005\u624D\u80FD\u5199\u3002\u5982\u679C\u6743\u9650\u8BBE\u7F6E\u4E0D\u5BF9\uFF0CSSH \u670D\u52A1\u5668\u53EF\u80FD\u4F1A\u62D2\u7EDD\u8BFB\u53D6\u8BE5\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">chmod</span> <span class="token number">644</span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EA\u8981\u516C\u94A5\u4E0A\u4F20\u5230\u670D\u52A1\u5668\uFF0C\u4E0B\u6B21\u767B\u5F55\u65F6\uFF0COpenSSH \u5C31\u4F1A\u81EA\u52A8\u91C7\u7528\u5BC6\u94A5\u767B\u5F55\uFF0C\u4E0D\u518D\u63D0\u793A\u8F93\u5165\u5BC6\u7801\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-l</span> username shell.isp.com
Enter passphrase <span class="token keyword">for</span> key <span class="token string">&#39;/home/you/.ssh/id_dsa&#39;</span><span class="token builtin class-name">:</span> ************
Last login: Mon Mar <span class="token number">24</span> 02:17:27 <span class="token number">2014</span> from ex.ample.com
shell.isp.com<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0CSSH \u5BA2\u6237\u7AEF\u4F7F\u7528\u79C1\u94A5\u4E4B\u524D\uFF0C\u4F1A\u8981\u6C42\u7528\u6237\u8F93\u5165\u5BC6\u7801\uFF08passphrase\uFF09\uFF0C\u7528\u6765\u89E3\u5F00\u79C1\u94A5\u3002</p><h2 id="ssh-copy-id-\u547D\u4EE4-\u81EA\u52A8\u4E0A\u4F20\u516C\u94A5" tabindex="-1"><a class="header-anchor" href="#ssh-copy-id-\u547D\u4EE4-\u81EA\u52A8\u4E0A\u4F20\u516C\u94A5" aria-hidden="true">#</a> ssh-copy-id \u547D\u4EE4\uFF1A\u81EA\u52A8\u4E0A\u4F20\u516C\u94A5</h2><p>OpenSSH \u81EA\u5E26\u4E00\u4E2A<code>ssh-copy-id</code>\u547D\u4EE4\uFF0C\u53EF\u4EE5\u81EA\u52A8\u5C06\u516C\u94A5\u62F7\u8D1D\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u7684<code>~/.ssh/authorized_keys</code>\u6587\u4EF6\u3002\u5982\u679C<code>~/.ssh/authorized_keys</code>\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C<code>ssh-copy-id</code>\u547D\u4EE4\u4F1A\u81EA\u52A8\u521B\u5EFA\u8BE5\u6587\u4EF6\u3002</p><p>\u7528\u6237\u5728\u672C\u5730\u8BA1\u7B97\u673A\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF0C\u5C31\u53EF\u4EE5\u628A\u672C\u5730\u7684\u516C\u94A5\u62F7\u8D1D\u5230\u670D\u52A1\u5668\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-copy-id <span class="token parameter variable">-i</span> key_file user@host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C<code>-i</code>\u53C2\u6570\u7528\u6765\u6307\u5B9A\u516C\u94A5\u6587\u4EF6\uFF0C<code>user</code>\u662F\u6240\u8981\u767B\u5F55\u7684\u8D26\u6237\u540D\uFF0C<code>host</code>\u662F\u670D\u52A1\u5668\u5730\u5740\u3002\u5982\u679C\u7701\u7565\u7528\u6237\u540D\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u7684\u672C\u673A\u7528\u6237\u540D\u3002\u6267\u884C\u5B8C\u8BE5\u547D\u4EE4\uFF0C\u516C\u94A5\u5C31\u4F1A\u62F7\u8D1D\u5230\u670D\u52A1\u5668\u3002</p><p>\u6CE8\u610F\uFF0C\u516C\u94A5\u6587\u4EF6\u53EF\u4EE5\u4E0D\u6307\u5B9A\u8DEF\u5F84\u548C<code>.pub</code>\u540E\u7F00\u540D\uFF0C<code>ssh-copy-id</code>\u4F1A\u81EA\u52A8\u5728<code>~/.ssh</code>\u76EE\u5F55\u91CC\u9762\u5BFB\u627E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-copy-id <span class="token parameter variable">-i</span> id_rsa user@host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C\u516C\u94A5\u6587\u4EF6\u4F1A\u81EA\u52A8\u5339\u914D\u5230<code>~/.ssh/id_rsa.pub</code>\u3002</p><p><code>ssh-copy-id</code>\u4F1A\u91C7\u7528\u5BC6\u7801\u767B\u5F55\uFF0C\u7CFB\u7EDF\u4F1A\u63D0\u793A\u8F93\u5165\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u5BC6\u7801\u3002</p><p>\u6CE8\u610F\uFF0C<code>ssh-copy-id</code>\u662F\u76F4\u63A5\u5C06\u516C\u94A5\u6DFB\u52A0\u5230<code>authorized_keys</code>\u6587\u4EF6\u7684\u672B\u5C3E\u3002\u5982\u679C<code>authorized_keys</code>\u6587\u4EF6\u7684\u672B\u5C3E\u4E0D\u662F\u4E00\u4E2A\u6362\u884C\u7B26\uFF0C\u4F1A\u5BFC\u81F4\u65B0\u7684\u516C\u94A5\u6DFB\u52A0\u5230\u524D\u4E00\u4E2A\u516C\u94A5\u7684\u672B\u5C3E\uFF0C\u4E24\u4E2A\u516C\u94A5\u8FDE\u5728\u4E00\u8D77\uFF0C\u4F7F\u5F97\u5B83\u4EEC\u90FD\u65E0\u6CD5\u751F\u6548\u3002\u6240\u4EE5\uFF0C\u5982\u679C<code>authorized_keys</code>\u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4F7F\u7528<code>ssh-copy-id</code>\u547D\u4EE4\u4E4B\u524D\uFF0C\u52A1\u5FC5\u4FDD\u8BC1<code>authorized_keys</code>\u6587\u4EF6\u7684\u672B\u5C3E\u662F\u6362\u884C\u7B26\uFF08\u5047\u8BBE\u8BE5\u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728\uFF09\u3002</p><h2 id="ssh-agent-\u547D\u4EE4-ssh-add-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#ssh-agent-\u547D\u4EE4-ssh-add-\u547D\u4EE4" aria-hidden="true">#</a> ssh-agent \u547D\u4EE4\uFF0Cssh-add \u547D\u4EE4</h2><h3 id="\u57FA\u672C\u7528\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5-1" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h3><p>\u79C1\u94A5\u8BBE\u7F6E\u4E86\u5BC6\u7801\u4EE5\u540E\uFF0C\u6BCF\u6B21\u4F7F\u7528\u90FD\u5FC5\u987B\u8F93\u5165\u5BC6\u7801\uFF0C\u6709\u65F6\u8BA9\u4EBA\u611F\u89C9\u975E\u5E38\u9EBB\u70E6\u3002\u6BD4\u5982\uFF0C\u8FDE\u7EED\u4F7F\u7528<code>scp</code>\u547D\u4EE4\u8FDC\u7A0B\u62F7\u8D1D\u6587\u4EF6\u65F6\uFF0C\u6BCF\u6B21\u90FD\u8981\u6C42\u8F93\u5165\u5BC6\u7801\u3002</p><p><code>ssh-agent</code>\u547D\u4EE4\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u800C\u8BBE\u8BA1\u7684\uFF0C\u5B83\u8BA9\u7528\u6237\u5728\u6574\u4E2A Bash \u5BF9\u8BDD\uFF08session\uFF09\u4E4B\u4E2D\uFF0C\u53EA\u5728\u7B2C\u4E00\u6B21\u4F7F\u7528 SSH \u547D\u4EE4\u65F6\u8F93\u5165\u5BC6\u7801\uFF0C\u7136\u540E\u5C06\u79C1\u94A5\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u540E\u9762\u90FD\u4E0D\u9700\u8981\u518D\u8F93\u5165\u79C1\u94A5\u7684\u5BC6\u7801\u4E86\u3002</p><p>\u7B2C\u4E00\u6B65\uFF0C\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u65B0\u5EFA\u4E00\u6B21\u547D\u4EE4\u884C\u5BF9\u8BDD\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-agent <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u7684\u547D\u4EE4\u884C\u73AF\u5883\u4E0D\u662F Bash\uFF0C\u53EF\u4EE5\u7528\u5176\u4ED6\u7684 Shell \u547D\u4EE4\u4EE3\u66FF\u3002\u6BD4\u5982<code>zsh</code>\u548C<code>fish</code>\u3002</p><p>\u5982\u679C\u60F3\u5728\u5F53\u524D\u5BF9\u8BDD\u542F\u7528<code>ssh-agent</code>\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">eval</span> <span class="token variable"><span class="token variable">\`</span>ssh-agent<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C<code>ssh-agent</code>\u4F1A\u5148\u81EA\u52A8\u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u5E76\u5C06\u9700\u8981\u8BBE\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\u8F93\u51FA\u5728\u5C4F\u5E55\u4E0A\uFF0C\u7C7B\u4F3C\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-agent
<span class="token assign-left variable"><span class="token environment constant">SSH_AUTH_SOCK</span></span><span class="token operator">=</span>/tmp/ssh-barrett/ssh-22841-agent<span class="token punctuation">;</span> <span class="token builtin class-name">export</span> <span class="token environment constant">SSH_AUTH_SOCK</span><span class="token punctuation">;</span>
<span class="token assign-left variable">SSH_AGENT_PID</span><span class="token operator">=</span><span class="token number">22842</span><span class="token punctuation">;</span> <span class="token builtin class-name">export</span> SSH_AGENT_PID<span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> Agent pid <span class="token number">22842</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>eval</code>\u547D\u4EE4\u7684\u4F5C\u7528\uFF0C\u5C31\u662F\u8FD0\u884C\u4E0A\u9762\u7684<code>ssh-agent</code>\u547D\u4EE4\u7684\u8F93\u51FA\uFF0C\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u3002</p><p>\u7B2C\u4E8C\u6B65\uFF0C\u5728\u65B0\u5EFA\u7684 Shell \u5BF9\u8BDD\u91CC\u9762\uFF0C\u4F7F\u7528<code>ssh-add</code>\u547D\u4EE4\u6DFB\u52A0\u9ED8\u8BA4\u7684\u79C1\u94A5\uFF08\u6BD4\u5982<code>~/.ssh/id_rsa</code>\uFF0C\u6216<code>~/.ssh/id_dsa</code>\uFF0C\u6216<code>~/.ssh/id_ecdsa</code>\uFF0C\u6216<code>~/.ssh/id_ed25519</code>\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-add
Enter passphrase <span class="token keyword">for</span> /home/you/.ssh/id_dsa: ********
Identity added: /home/you/.ssh/id_dsa <span class="token punctuation">(</span>/home/you/.ssh/id_dsa<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u6DFB\u52A0\u79C1\u94A5\u65F6\uFF0C\u4F1A\u8981\u6C42\u8F93\u5165\u5BC6\u7801\u3002\u4EE5\u540E\uFF0C\u5728\u8FD9\u4E2A\u5BF9\u8BDD\u91CC\u9762\u518D\u4F7F\u7528\u5BC6\u94A5\u65F6\uFF0C\u5C31\u4E0D\u9700\u8981\u8F93\u5165\u79C1\u94A5\u7684\u5BC6\u7801\u4E86\uFF0C\u56E0\u4E3A\u79C1\u94A5\u5DF2\u7ECF\u52A0\u8F7D\u5230\u5185\u5B58\u91CC\u9762\u4E86\u3002</p><p>\u5982\u679C\u6DFB\u52A0\u7684\u4E0D\u662F\u9ED8\u8BA4\u79C1\u94A5\uFF0C<code>ssh-add</code>\u547D\u4EE4\u9700\u8981\u663E\u5F0F\u6307\u5B9A\u79C1\u94A5\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-add my-other-key-file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u547D\u4EE4\u4E2D\uFF0C<code>my-other-key-file</code>\u5C31\u662F\u7528\u6237\u6307\u5B9A\u7684\u79C1\u94A5\u6587\u4EF6\u3002</p><p>\u7B2C\u4E09\u6B65\uFF0C\u4F7F\u7528 ssh \u547D\u4EE4\u6B63\u5E38\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ssh</span> remoteHost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C<code>remoteHost</code>\u662F\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u5730\u5740\uFF0Cssh \u4F7F\u7528\u7684\u662F\u9ED8\u8BA4\u7684\u79C1\u94A5\u3002\u8FD9\u65F6\u5982\u679C\u79C1\u94A5\u8BBE\u6709\u5BC6\u7801\uFF0Cssh \u5C06\u4E0D\u518D\u8BE2\u95EE\u5BC6\u7801\uFF0C\u800C\u662F\u76F4\u63A5\u53D6\u51FA\u5185\u5B58\u91CC\u9762\u7684\u79C1\u94A5\u3002</p><p>\u5982\u679C\u8981\u4F7F\u7528\u5176\u4ED6\u79C1\u94A5\u767B\u5F55\u670D\u52A1\u5668\uFF0C\u9700\u8981\u4F7F\u7528 ssh \u547D\u4EE4\u7684<code>-i</code>\u53C2\u6570\u6307\u5B9A\u79C1\u94A5\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ssh</span> \u2013i OpenSSHPrivateKey remoteHost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u540E\uFF0C\u5982\u679C\u8981\u9000\u51FA<code>ssh-agent</code>\uFF0C\u53EF\u4EE5\u76F4\u63A5\u9000\u51FA\u5B50 Shell\uFF08\u6309\u4E0B Ctrl + d\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-agent <span class="token parameter variable">-k</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ssh-add\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#ssh-add\u547D\u4EE4" aria-hidden="true">#</a> <code>ssh-add</code>\u547D\u4EE4</h3><p><code>ssh-add</code>\u547D\u4EE4\u7528\u6765\u5C06\u79C1\u94A5\u52A0\u5165<code>ssh-agent</code>\uFF0C\u5B83\u6709\u5982\u4E0B\u7684\u53C2\u6570\u3002</p><p><strong>\uFF081\uFF09<code>-d</code></strong></p><p><code>-d</code>\u53C2\u6570\u4ECE\u5185\u5B58\u4E2D\u5220\u9664\u6307\u5B9A\u7684\u79C1\u94A5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-add <span class="token parameter variable">-d</span> name-of-key-file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\uFF082\uFF09<code>-D</code></strong></p><p><code>-D</code>\u53C2\u6570\u4ECE\u5185\u5B58\u4E2D\u5220\u9664\u6240\u6709\u5DF2\u7ECF\u6DFB\u52A0\u7684\u79C1\u94A5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-add <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\uFF083\uFF09<code>-l</code></strong></p><p><code>-l</code>\u53C2\u6570\u5217\u51FA\u6240\u6709\u5DF2\u7ECF\u6DFB\u52A0\u7684\u79C1\u94A5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-add <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5173\u95ED\u5BC6\u7801\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u5BC6\u7801\u767B\u5F55" aria-hidden="true">#</a> \u5173\u95ED\u5BC6\u7801\u767B\u5F55</h2><p>\u4E3A\u4E86\u5B89\u5168\u6027\uFF0C\u542F\u7528\u5BC6\u94A5\u767B\u5F55\u4E4B\u540E\uFF0C\u6700\u597D\u5173\u95ED\u670D\u52A1\u5668\u7684\u5BC6\u7801\u767B\u5F55\u3002</p><p>\u5BF9\u4E8E OpenSSH\uFF0C\u5177\u4F53\u65B9\u6CD5\u5C31\u662F\u6253\u5F00\u670D\u52A1\u5668 sshd \u7684\u914D\u7F6E\u6587\u4EF6<code>/etc/ssh/sshd_config</code>\uFF0C\u5C06<code>PasswordAuthentication</code>\u8FD9\u4E00\u9879\u8BBE\u4E3A<code>no</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PasswordAuthentication no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u4EE5\u540E\uFF0C\u4E0D\u8981\u5FD8\u4E86\u91CD\u65B0\u542F\u52A8 sshd\uFF0C\u5426\u5219\u4E0D\u4F1A\u751F\u6548\u3002</p>`,124),c=[i];function o(p,r){return s(),a("div",null,c)}const t=e(d,[["render",o],["__file","key.html.vue"]]);export{t as default};
