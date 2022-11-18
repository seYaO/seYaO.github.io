import{_ as n,o as s,c as a,e}from"./app.3b2d76f3.js";const i={},t=e(`<h1 id="\u5F02\u6B65\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u4EFB\u52A1" aria-hidden="true">#</a> \u5F02\u6B65\u4EFB\u52A1</h1><p>Bash\u811A\u672C\u6709\u65F6\u5019\u9700\u8981\u540C\u65F6\u6267\u884C\u591A\u4E2A\u4EFB\u52A1\u3002\u901A\u5E38\u8FD9\u6D89\u53CA\u5230\u542F\u52A8\u4E00\u4E2A\u811A\u672C\uFF0C\u4F9D\u6B21\uFF0C\u542F\u52A8\u4E00\u4E2A\u6216\u591A\u4E2A\u5B50\u811A\u672C\u6765\u6267\u884C\u989D\u5916\u7684\u4EFB\u52A1\uFF0C\u800C\u7236\u811A\u672C\u7EE7\u7EED\u8FD0\u884C\u3002\u7136\u800C\uFF0C\u5F53\u4E00\u7CFB\u5217\u811A\u672C \u4EE5\u8FD9\u79CD\u65B9\u5F0F\u8FD0\u884C\u65F6\uFF0C\u8981\u4FDD\u6301\u7236\u5B50\u811A\u672C\u4E4B\u95F4\u534F\u8C03\u5DE5\u4F5C\uFF0C\u4F1A\u6709\u4E00\u4E9B\u95EE\u9898\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u82E5\u7236\u811A\u672C\u6216\u5B50\u811A\u672C\u4F9D\u8D56\u4E8E\u53E6\u4E00\u65B9\uFF0C\u5E76\u4E14 \u4E00\u4E2A\u811A\u672C\u5FC5\u987B\u7B49\u5F85\u53E6\u4E00\u4E2A\u811A\u672C\u7ED3\u675F\u4EFB\u52A1\u4E4B\u540E\uFF0C\u624D\u80FD\u5B8C\u6210\u5B83\u81EA\u5DF1\u7684\u4EFB\u52A1\uFF0C\u8FD9\u5E94\u8BE5\u600E\u4E48\u529E\uFF1F</p><p>bash \u6709\u4E00\u4E2A\u5185\u7F6E\u547D\u4EE4\uFF0C\u80FD\u5E2E\u52A9\u7BA1\u7406\u8BF8\u5982\u6B64\u7C7B\u7684\u5F02\u6B65\u6267\u884C\u7684\u4EFB\u52A1\u3002wait \u547D\u4EE4\u5BFC\u81F4\u4E00\u4E2A\u7236\u811A\u672C\u6682\u505C\u8FD0\u884C\uFF0C\u76F4\u5230\u4E00\u4E2A \u7279\u5B9A\u7684\u8FDB\u7A0B\uFF08\u4F8B\u5982\uFF0C\u5B50\u811A\u672C\uFF09\u8FD0\u884C\u7ED3\u675F\u3002</p><p>\u9996\u5148\u6211\u4EEC\u5C06\u6F14\u793A\u4E00\u4E0B wait \u547D\u4EE4\u7684\u7528\u6CD5\u3002\u4E3A\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u4E24\u4E2A\u811A\u672C\uFF0C\u4E00\u4E2A\u7236\u811A\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># async-parent : Asynchronous execution demo (parent)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: starting...&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: launching child script...&quot;</span>
async-child <span class="token operator">&amp;</span>
<span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable">$!</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: child (PID= <span class="token variable">$pid</span>) launched.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: continuing...&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: pausing to wait for child to finish...&quot;</span>
<span class="token function">wait</span> <span class="token variable">$pid</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: child is finished. Continuing...&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: parent is done. Exiting.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u548C\u4E00\u4E2A\u5B50\u811A\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># async-child : Asynchronous execution demo (child)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Child: child is running...&quot;</span>
<span class="token function">sleep</span> <span class="token number">5</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Child: child is done. Exiting.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u770B\u5230\u8BE5\u5B50\u811A\u672C\u662F\u975E\u5E38\u7B80\u5355\u7684\u3002\u771F\u6B63\u7684\u64CD\u4F5C\u901A\u8FC7\u7236\u811A\u672C\u5B8C\u6210\u3002\u5728\u7236\u811A\u672C\u4E2D\uFF0C\u5B50\u811A\u672C\u88AB\u542F\u52A8\uFF0C \u5E76\u88AB\u653E\u7F6E\u5230\u540E\u53F0\u8FD0\u884C\u3002\u5B50\u811A\u672C\u7684\u8FDB\u7A0B ID \u8BB0\u5F55\u5728 pid \u53D8\u91CF\u4E2D\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u7684\u503C\u662F $! shell \u53C2\u6570\u7684\u503C\uFF0C\u5B83\u603B\u662F \u5305\u542B\u653E\u5230\u540E\u53F0\u6267\u884C\u7684\u6700\u540E\u4E00\u4E2A\u4EFB\u52A1\u7684\u8FDB\u7A0B ID \u53F7\u3002</p><p>\u7236\u811A\u672C\u7EE7\u7EED\uFF0C\u7136\u540E\u6267\u884C\u4E00\u4E2A\u4EE5\u5B50\u8FDB\u7A0B PID \u4E3A\u53C2\u6570\u7684 wait \u547D\u4EE4\u3002\u8FD9\u5C31\u5BFC\u81F4\u7236\u811A\u672C\u6682\u505C\u8FD0\u884C\uFF0C\u76F4\u5230\u5B50\u811A\u672C\u9000\u51FA\uFF0C \u610F\u5473\u7740\u7236\u811A\u672C\u7ED3\u675F\u3002</p><p>\u5F53\u6267\u884C\u540E\uFF0C\u7236\u5B50\u811A\u672C\u4EA7\u751F\u5982\u4E0B\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ async-parent
Parent: starting<span class="token punctuation">..</span>.
Parent: launching child script<span class="token punctuation">..</span>.
Parent: child <span class="token punctuation">(</span>PID<span class="token operator">=</span> <span class="token number">6741</span><span class="token punctuation">)</span> launched.
Parent: continuing<span class="token punctuation">..</span>.
Child: child is running<span class="token punctuation">..</span>.
Parent: pausing to <span class="token function">wait</span> <span class="token keyword">for</span> child to finish<span class="token punctuation">..</span>.
Child: child is done. Exiting.
Parent: child is finished. Continuing<span class="token punctuation">..</span>.
Parent: parent is done. Exiting.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[t];function c(o,p){return s(),a("div",null,l)}const r=n(i,[["render",c],["__file","async.html.vue"]]);export{r as default};
