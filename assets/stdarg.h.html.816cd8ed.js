import{_ as n,o as s,c as a,e as t}from"./app.3b2d76f3.js";const e={},p=t(`<h1 id="stdarg-h" tabindex="-1"><a class="header-anchor" href="#stdarg-h" aria-hidden="true">#</a> stdarg.h</h1><p><code>stdarg.h</code>\u5B9A\u4E49\u4E8E\u51FD\u6570\u7684\u53EF\u53D8\u53C2\u6570\u76F8\u5173\u7684\u4E00\u4E9B\u65B9\u6CD5\u3002</p><ul><li>va_list \u7C7B\u578B</li><li>va_start()</li><li>va_arg()\uFF1A\u83B7\u53D6\u5F53\u524D\u53C2\u6570</li><li>va_end()\u3002</li></ul><p>va_copy()\uFF1Ait makes a copy of your va_list variable in the exact same state. va_copy() can be useful if you need to scan ahead through the arguments but need to also remember your current place.</p><p>\u63A5\u53D7\u53EF\u53D8\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u7684\u4E00\u4E9B\u65B9\u6CD5\u3002</p><ul><li>vprintf()</li><li>vfprintf()</li><li>vsprintf()</li><li>vsnprintf()</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdarg.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">my_printf</span><span class="token punctuation">(</span><span class="token keyword">int</span> serial<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>format<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    va_list va<span class="token punctuation">;</span>

    <span class="token comment">// Do my custom work</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;The serial number is: %d\\n&quot;</span><span class="token punctuation">,</span> serial<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Then pass the rest off to vprintf()</span>
    <span class="token function">va_start</span><span class="token punctuation">(</span>va<span class="token punctuation">,</span> format<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> rv <span class="token operator">=</span> <span class="token function">vprintf</span><span class="token punctuation">(</span>format<span class="token punctuation">,</span> va<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">va_end</span><span class="token punctuation">(</span>va<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> rv<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> y <span class="token operator">=</span> <span class="token number">3.2</span><span class="token punctuation">;</span>

    <span class="token function">my_printf</span><span class="token punctuation">(</span><span class="token number">3490</span><span class="token punctuation">,</span> <span class="token string">&quot;x is %d, y is %f\\n&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(e,[["render",c],["__file","stdarg.h.html.vue"]]);export{r as default};
