import{_ as s,o as n,c as a,e}from"./app.3b2d76f3.js";const t={},c=e(`<h1 id="assert-h" tabindex="-1"><a class="header-anchor" href="#assert-h" aria-hidden="true">#</a> assert.h</h1><h2 id="assert" tabindex="-1"><a class="header-anchor" href="#assert" aria-hidden="true">#</a> assert()</h2><p><code>assert.h</code>\u5934\u6587\u4EF6\u5B9A\u4E49\u4E86\u5B8F<code>assert()</code>\uFF0C\u7528\u4E8E\u5728\u8FD0\u884C\u65F6\u786E\u4FDD\u7A0B\u5E8F\u7B26\u5408\u6307\u5B9A\u6761\u4EF6\uFF0C\u5982\u679C\u4E0D\u7B26\u5408\uFF0C\u5C31\u62A5\u9519\u7EC8\u6B62\u8FD0\u884C\u3002\u8FD9\u4E2A\u5B8F\u5E38\u5E38\u88AB\u79F0\u4E3A\u201C\u65AD\u8A00\u201D\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token function">assert</span><span class="token punctuation">(</span>PI <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u5728\u7A0B\u5E8F\u8FD0\u884C\u5230\u8FD9\u4E00\u884C\u8BED\u53E5\u65F6\uFF0C\u9A8C\u8BC1\u53D8\u91CF<code>PI</code>\u662F\u5426\u5927\u4E8E3\u3002\u5982\u679C\u786E\u5B9E\u5927\u4E8E3\uFF0C\u7A0B\u5E8F\u7EE7\u7EED\u8FD0\u884C\uFF0C\u5426\u5219\u5C31\u4F1A\u7EC8\u6B62\u8FD0\u884C\uFF0C\u5E76\u4E14\u7ED9\u51FA\u62A5\u9519\u4FE1\u606F\u63D0\u793A\u3002</p><p><code>assert()</code>\u5B8F\u63A5\u53D7\u4E00\u4E2A\u8868\u8FBE\u5F0F\u4F5C\u4E3A\u53C2\u6570\u3002\u5982\u679C\u8BE5\u8868\u8FBE\u5F0F\u4E3A\u771F\uFF08\u8FD4\u56DE\u503C\u975E\u96F6\uFF09\uFF0C<code>assert()</code>\u4E0D\u4F1A\u4EA7\u751F\u4EFB\u4F55\u4F5C\u7528\uFF0C\u7A0B\u5E8F\u7EE7\u7EED\u8FD0\u884C\u3002\u5982\u679C\u8BE5\u8868\u8FBE\u5F0F\u4E3A\u5047\uFF08\u8FD4\u56DE\u503C\u4E3A\u96F6\uFF09\uFF0C<code>assert()</code>\u5C31\u4F1A\u62A5\u9519\uFF0C\u5728\u6807\u51C6\u9519\u8BEF\u6D41<code>stderr</code>\u4E2D\u5199\u5165\u4E00\u6761\u9519\u8BEF\u4FE1\u606F\uFF0C\u663E\u793A\u6CA1\u6709\u901A\u8FC7\u7684\u8868\u8FBE\u5F0F\uFF0C\u4EE5\u53CA\u5305\u542B\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u7684\u6587\u4EF6\u540D\u548C\u884C\u53F7\u3002\u6700\u540E\uFF0C\u8C03\u7528<code>abort()</code>\u51FD\u6570\u7EC8\u6B62\u7A0B\u5E8F\uFF08<code>abort()</code>\u51FD\u6570\u7684\u539F\u578B\u5728<code>stdlib.h</code>\u5934\u6587\u4EF6\u4E2D\uFF09\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>z <span class="token operator">=</span> x <span class="token operator">*</span> x <span class="token operator">-</span> y <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token function">assert</span><span class="token punctuation">(</span>z <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684<code>assert()</code>\u8BED\u53E5\u7C7B\u4F3C\u4E8E\u4E0B\u9762\u7684\u4EE3\u7801\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>z <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;z less than 0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u65AD\u8A00\u5931\u8D25\uFF0C\u7A0B\u5E8F\u4F1A\u4E2D\u65AD\u6267\u884C\uFF0C\u4F1A\u663E\u793A\u4E0B\u9762\u7684\u63D0\u793A\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Assertion failed<span class="token operator">:</span> <span class="token punctuation">(</span>z <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> function main<span class="token punctuation">,</span> file <span class="token operator">/</span>Users<span class="token operator">/</span>assert<span class="token punctuation">.</span>c<span class="token punctuation">,</span> line <span class="token number">14.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u62A5\u9519\u7684\u683C\u5F0F\u5982\u4E0B\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Assertion failed<span class="token operator">:</span> <span class="token punctuation">[</span>expression<span class="token punctuation">]</span><span class="token punctuation">,</span> function <span class="token punctuation">[</span>abc<span class="token punctuation">]</span><span class="token punctuation">,</span> file <span class="token punctuation">[</span>xyz<span class="token punctuation">]</span><span class="token punctuation">,</span> line <span class="token punctuation">[</span>nnn<span class="token punctuation">]</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u65B9\u62EC\u53F7\u7684\u90E8\u5206\u4F7F\u7528\u5B9E\u9645\u6570\u636E\u66FF\u6362\u6389\u3002</p><p>\u4F7F\u7528<code>assert()</code>\u6709\u51E0\u4E2A\u597D\u5904\uFF1A\u5B83\u4E0D\u4EC5\u80FD\u81EA\u52A8\u6807\u8BC6\u6587\u4EF6\u548C\u51FA\u95EE\u9898\u7684\u884C\u53F7\uFF0C\u8FD8\u6709\u4E00\u79CD\u65E0\u9700\u66F4\u6539\u4EE3\u7801\u5C31\u80FD\u5F00\u542F\u6216\u5173\u95ED<code>assert()</code>\u7684\u673A\u5236\u3002\u5982\u679C\u5DF2\u7ECF\u786E\u8BA4\u7A0B\u5E8F\u6CA1\u6709\u95EE\u9898\uFF0C\u4E0D\u9700\u8981\u518D\u505A\u65AD\u8A00\uFF0C\u5C31\u5728<code>#include &lt;assert.h&gt;</code>\u8BED\u53E5\u7684\u524D\u9762\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u5B8F<code>NDEBUG</code>\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NDEBUG</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;assert.h&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u91CD\u65B0\u7F16\u8BD1\u7A0B\u5E8F\uFF0C\u7F16\u8BD1\u5668\u5C31\u4F1A\u7981\u7528\u6587\u4EF6\u4E2D\u6240\u6709\u7684<code>assert()</code>\u8BED\u53E5\u3002\u5982\u679C\u7A0B\u5E8F\u53C8\u51FA\u73B0\u95EE\u9898\uFF0C\u53EF\u4EE5\u79FB\u9664\u8FD9\u6761<code>#define NDBUG</code>\u6307\u4EE4\uFF08\u6216\u8005\u628A\u5B83\u6CE8\u91CA\u6389\uFF09\uFF0C\u518D\u6B21\u7F16\u8BD1\uFF0C\u8FD9\u6837\u5C31\u91CD\u65B0\u542F\u7528\u4E86<code>assert()</code>\u8BED\u53E5\u3002</p><p><code>assert()</code>\u7684\u7F3A\u70B9\u662F\uFF0C\u56E0\u4E3A\u5F15\u5165\u4E86\u989D\u5916\u7684\u68C0\u67E5\uFF0C\u589E\u52A0\u4E86\u7A0B\u5E8F\u7684\u8FD0\u884C\u65F6\u95F4\u3002</p><h2 id="static-assert" tabindex="-1"><a class="header-anchor" href="#static-assert" aria-hidden="true">#</a> static_assert()</h2><p>C11 \u5F15\u5165\u4E86\u9759\u6001\u65AD\u8A00<code>static_assert()</code>\uFF0C\u7528\u4E8E\u5728\u7F16\u8BD1\u9636\u6BB5\u8FDB\u884C\u65AD\u8A00\u5224\u65AD\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token function">static_assert</span><span class="token punctuation">(</span>constant<span class="token operator">-</span>expression<span class="token punctuation">,</span> string<span class="token operator">-</span>literal<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>static_assert()</code>\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570<code>constant-expression</code>\u662F\u4E00\u4E2A\u5E38\u91CF\u8868\u8FBE\u5F0F\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570<code>string-literal</code>\u662F\u4E00\u4E2A\u63D0\u793A\u5B57\u7B26\u4E32\u3002\u5982\u679C\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u503C\u4E3Afalse\uFF0C\u4F1A\u4EA7\u751F\u4E00\u6761\u7F16\u8BD1\u9519\u8BEF\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5C31\u662F\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token function">static_assert</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;64-bit code generation is not supported.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7684\u610F\u601D\u662F\uFF0C\u5982\u679C\u5F53\u524D\u8BA1\u7B97\u673A\u7684<code>int</code>\u7C7B\u578B\u4E0D\u7B49\u4E8E4\u4E2A\u5B57\u8282\uFF0C\u5C31\u4F1A\u7F16\u8BD1\u62A5\u9519\u3002</p><p>\u6CE8\u610F\uFF0C<code>static_assert()</code>\u53EA\u5728\u7F16\u8BD1\u9636\u6BB5\u8FD0\u884C\uFF0C\u65E0\u6CD5\u83B7\u5F97\u53D8\u91CF\u7684\u503C\u3002\u5982\u679C\u5BF9\u53D8\u91CF\u8FDB\u884C\u9759\u6001\u65AD\u8A00\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u9519\u8BEF\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">positive</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">static_assert</span><span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;value must &gt; 0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u62A5\u9519\uFF0C\u56E0\u4E3A\u7F16\u8BD1\u65F6\u65E0\u6CD5\u77E5\u9053\u53D8\u91CF<code>n</code>\u7684\u503C\u3002</p><p><code>static_assert()</code>\u7684\u597D\u5904\u662F\uFF0C\u5C3D\u91CF\u5728\u7F16\u8BD1\u9636\u6BB5\u53D1\u73B0\u9519\u8BEF\uFF0C\u907F\u514D\u8FD0\u884C\u65F6\u518D\u62A5\u9519\uFF0C\u8282\u7701\u5F00\u53D1\u65F6\u95F4\u3002\u53E6\u5916\uFF0C\u6709\u4E9B<code>assert()</code>\u65AD\u8A00\u4F4D\u4E8E\u51FD\u6570\u4E4B\u4E2D\uFF0C\u5982\u679C\u4E0D\u6267\u884C\u8BE5\u51FD\u6570\uFF0C\u5C31\u4E0D\u4F1A\u62A5\u9519\uFF0C\u800C<code>static_assert()</code>\u4E0D\u7BA1\u51FD\u6570\u662F\u5426\u6267\u884C\uFF0C\u90FD\u4F1A\u8FDB\u884C\u65AD\u8A00\u5224\u65AD\u3002\u6700\u540E\uFF0C<code>static_assert()</code>\u4E0D\u4F1A\u751F\u6210\u53EF\u6267\u884C\u4EE3\u7801\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u9020\u6210\u4EFB\u4F55\u8FD0\u884C\u65F6\u7684\u6027\u80FD\u635F\u5931\u3002</p>`,28),o=[c];function p(i,l){return n(),a("div",null,o)}const r=s(t,[["render",p],["__file","assert.h.html.vue"]]);export{r as default};