import{_ as e,o as n,c as s,e as i}from"./app.3b2d76f3.js";const a={},d=i(`<h1 id="egrep" tabindex="-1"><a class="header-anchor" href="#egrep" aria-hidden="true">#</a> egrep</h1><p><code>egrep</code>\u547D\u4EE4\u7528\u4E8E\u663E\u793A\u5339\u914D\u6B63\u5219\u6A21\u5F0F\u7684\u884C\uFF0C\u4E0E<code>grep -E</code>\u547D\u4EE4\u7B49\u4EF7\u3002</p><p>\u4E0B\u9762\u662F<code>example.txt</code>\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Lorem ipsum
dolor sit amet, 
consetetur
sadipscing elitr,
sed diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, sed
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>egrep</code>\u547D\u4EE4\u663E\u793A\u5305\u62EC<code>Lorem</code>\u6216<code>dolor</code>\u7684\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">egrep</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
<span class="token comment"># \u6216\u8005</span>
$ <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
Lorem ipsum
dolor sit amet,
et dolore magna
duo dolores et ea
sanctus est Lorem
ipsum dolor sit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[d];function r(c,o){return n(),s("div",null,l)}const m=e(a,[["render",r],["__file","egrep.html.vue"]]);export{m as default};
