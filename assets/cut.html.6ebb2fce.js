import{_ as n,o as s,c as e,e as a}from"./app.3b2d76f3.js";const c={},i=a(`<h1 id="cut" tabindex="-1"><a class="header-anchor" href="#cut" aria-hidden="true">#</a> cut</h1><p><code>cut</code>\u547D\u4EE4\u7528\u4E8E\u5728\u547D\u4EE4\u884C\u8F93\u51FA\u6587\u672C\u6587\u4EF6\u7684\u6307\u5B9A\u4F4D\u7F6E\u7684\u5185\u5BB9\u3002</p><p>\u5B83\u7684\u4F7F\u7528\u683C\u5F0F\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cut</span> OPTION <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u6587\u4EF6\u540D\uFF0C\u5C06\u8BFB\u53D6\u6807\u51C6\u8F93\u5165\u3002</p><p><code>-b</code>\u53C2\u6570\u7528\u6765\u6307\u5B9A\u8BFB\u53D6\u7684\u5B57\u8282\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8F93\u51FA\u524D\u4E09\u4E2A\u5B57\u8282</span>
$ <span class="token function">cut</span> file1.txt -b1,2,3

<span class="token comment"># \u8F93\u51FA\u524D\u5341\u4E2A\u5B57\u8282</span>
$ <span class="token function">cut</span> file1.txt -b1-10

<span class="token comment"># \u8F93\u51FA\u4ECE\u7B2C5\u4E2A\u5B57\u8282\u5F00\u59CB\u7684\u6240\u6709\u5B57\u8282</span>
$ <span class="token function">cut</span> file1.txt -b5-

<span class="token comment"># \u8F93\u51FA\u524D5\u4E2A\u5B57\u8282</span>
$ <span class="token function">cut</span> file1.txt -b-5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-c</code>\u53C2\u6570\u7528\u6765\u6307\u5B9A\u8BFB\u53D6\u7684\u5B57\u7B26\uFF0C\u7528\u6CD5\u4E0E<code>-b</code>\u4E00\u6837\u3002\u6709\u7684\u5B57\u7B26\u662F\u591A\u5B57\u8282\u5B57\u7B26\uFF0C\u8FD9\u65F6\u5019\u5C31\u5E94\u8BE5\u7528<code>-c</code>\u4EE3\u66FF<code>-b</code>\u3002</p><p><code>-d</code>\u53C2\u6570\u7528\u6765\u6307\u5B9A\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u5206\u9694\u7B26\u4E3A\u5236\u8868\u7B26\u3002</p><p><code>-f</code>\u53C2\u6570\u7528\u6765\u6307\u5B9A\u5B57\u6BB5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6307\u5B9A\u6BCF\u4E00\u884C\u7684\u5206\u9694\u7B26\u4E3A\u9017\u53F7\uFF0C</span>
<span class="token comment"># \u8F93\u51FA\u7B2C\u4E00\u548C\u7B2C\u4E09\u4E2A\u5B57\u6BB5</span>
$ <span class="token function">cut</span> file1.txt -d, -f1,3

<span class="token comment"># \u8F93\u51FA\u7B2C\u4E00\u3001\u7B2C\u4E8C\u3001\u7B2C\u56DB\u548C\u7B2C\u4E94\u4E2A\u5B57\u6BB5</span>
$ <span class="token function">cut</span> <span class="token parameter variable">-f</span> <span class="token number">1</span>-2,4-5 data.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d=[i];function l(t,o){return s(),e("div",null,d)}const p=n(c,[["render",l],["__file","cut.html.vue"]]);export{p as default};
