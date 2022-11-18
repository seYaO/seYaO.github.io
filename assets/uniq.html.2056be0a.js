import{_ as n,o as e,c as s,e as a}from"./app.3b2d76f3.js";const i={},d=a(`<h1 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq" aria-hidden="true">#</a> uniq</h1><p><code>uniq</code>\u7528\u4E8E\u8FC7\u6EE4\u6389\u91CD\u590D\u7684\u884C\uFF0C\u8BE5\u547D\u4EE4\u53EA\u5BF9\u6392\u5E8F\u540E\u7684\u6587\u4EF6\u6709\u6548\u3002</p><p>\u4E0B\u9762\u662F<code>example.txt</code>\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>a
a
b
a
b
c
d
c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8BE5\u6587\u4EF6\u8FDB\u884C\u6392\u5E8F\u540E\uFF0C\u518D\u8FC7\u6EE4\u6389\u91CD\u590D\u7684\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span>
a
b
c
d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p><code>-c</code>\u53C2\u6570\u4F1A\u663E\u793A\u6BCF\u884C\u4E00\u5171\u51FA\u73B0\u4E86\u591A\u5C11\u6B21\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
    <span class="token number">3</span> a
    <span class="token number">2</span> b
    <span class="token number">2</span> c
    <span class="token number">1</span> d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[d];function c(r,t){return e(),s("div",null,l)}const o=n(i,[["render",c],["__file","uniq.html.vue"]]);export{o as default};
