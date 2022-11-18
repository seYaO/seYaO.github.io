import{_ as n,o as s,c as a,e as t}from"./app.3b2d76f3.js";const e={},p=t(`<h1 id="\u5C5E\u6027\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u7684\u64CD\u4F5C" aria-hidden="true">#</a> \u5C5E\u6027\u7684\u64CD\u4F5C</h1><p>HTML \u5143\u7D20\u5305\u62EC\u6807\u7B7E\u540D\u548C\u82E5\u5E72\u4E2A\u952E\u503C\u5BF9\uFF0C\u8FD9\u4E2A\u952E\u503C\u5BF9\u5C31\u79F0\u4E3A\u201C\u5C5E\u6027\u201D\uFF08attribute\uFF09\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.example.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  \u94FE\u63A5
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>a</code>\u5143\u7D20\u5305\u62EC\u4E24\u4E2A\u5C5E\u6027\uFF1A<code>id</code>\u5C5E\u6027\u548C<code>href</code>\u5C5E\u6027\u3002</p><p>\u5C5E\u6027\u672C\u8EAB\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF08<code>Attr</code>\u5BF9\u8C61\uFF09\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u6781\u5C11\u4F7F\u7528\u3002\u4E00\u822C\u90FD\u662F\u901A\u8FC7\u5143\u7D20\u8282\u70B9\u5BF9\u8C61\uFF08<code>HTMlElement</code>\u5BF9\u8C61\uFF09\u6765\u64CD\u4F5C\u5C5E\u6027\u3002\u672C\u7AE0\u4ECB\u7ECD\u5982\u4F55\u64CD\u4F5C\u8FD9\u4E9B\u5C5E\u6027\u3002</p><h2 id="element-attributes-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#element-attributes-\u5C5E\u6027" aria-hidden="true">#</a> Element.attributes \u5C5E\u6027</h2><p>\u5143\u7D20\u5BF9\u8C61\u6709\u4E00\u4E2A<code>attributes</code>\u5C5E\u6027\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u52A8\u6001\u5BF9\u8C61\uFF0C\u6210\u5458\u662F\u8BE5\u5143\u7D20\u6807\u7B7E\u7684\u6240\u6709\u5C5E\u6027\u8282\u70B9\u5BF9\u8C61\uFF0C\u5C5E\u6027\u7684\u5B9E\u65F6\u53D8\u5316\u90FD\u4F1A\u53CD\u6620\u5728\u8FD9\u4E2A\u8282\u70B9\u5BF9\u8C61\u4E0A\u3002\u5176\u4ED6\u7C7B\u578B\u7684\u8282\u70B9\u5BF9\u8C61\uFF0C\u867D\u7136\u4E5F\u6709<code>attributes</code>\u5C5E\u6027\uFF0C\u4F46\u8FD4\u56DE\u7684\u90FD\u662F<code>null</code>\uFF0C\u56E0\u6B64\u53EF\u4EE5\u628A\u8FD9\u4E2A\u5C5E\u6027\u89C6\u4E3A\u5143\u7D20\u5BF9\u8C61\u72EC\u6709\u7684\u3002</p><p>\u5355\u4E2A\u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u5E8F\u53F7\u5F15\u7528\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5C5E\u6027\u540D\u5F15\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u5982\u4E0B</span>
<span class="token comment">// &lt;body bgcolor=&quot;yellow&quot; onload=&quot;&quot;&gt;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>attributes<span class="token punctuation">.</span>bgcolor
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token string">&#39;ONLOAD&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u4E0A\u9762\u4EE3\u7801\u7684\u4E09\u79CD\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u7684\u90FD\u662F\u5C5E\u6027\u8282\u70B9\u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u5C5E\u6027\u503C\u3002</p><p>\u5C5E\u6027\u8282\u70B9\u5BF9\u8C61\u6709<code>name</code>\u548C<code>value</code>\u5C5E\u6027\uFF0C\u5BF9\u5E94\u8BE5\u5C5E\u6027\u7684\u5C5E\u6027\u540D\u548C\u5C5E\u6027\u503C\uFF0C\u7B49\u540C\u4E8E<code>nodeName</code>\u5C5E\u6027\u548C<code>nodeValue</code>\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML\u4EE3\u7801\u4E3A</span>
<span class="token comment">// &lt;div id=&quot;mydiv&quot;&gt;</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;mydiv&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

n<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token comment">// &quot;id&quot;</span>
n<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>nodeName <span class="token comment">// &quot;id&quot;</span>

n<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value <span class="token comment">// &quot;mydiv&quot;</span>
n<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>nodeValue <span class="token comment">// &quot;mydiv&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u4EE3\u7801\u53EF\u4EE5\u904D\u5386\u4E00\u4E2A\u5143\u7D20\u8282\u70B9\u7684\u6240\u6709\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> para <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>para<span class="token punctuation">.</span><span class="token function">hasAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> attrs <span class="token operator">=</span> para<span class="token punctuation">.</span>attributes<span class="token punctuation">;</span>
  <span class="token keyword">var</span> output <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> attrs<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    output <span class="token operator">+=</span> attrs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span> <span class="token operator">+</span> attrs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  result<span class="token punctuation">.</span>textContent <span class="token operator">=</span> output<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  result<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;No attributes to show&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5143\u7D20\u7684\u6807\u51C6\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u7684\u6807\u51C6\u5C5E\u6027" aria-hidden="true">#</a> \u5143\u7D20\u7684\u6807\u51C6\u5C5E\u6027</h2><p>HTML \u5143\u7D20\u7684\u6807\u51C6\u5C5E\u6027\uFF08\u5373\u5728\u6807\u51C6\u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\uFF09\uFF0C\u4F1A\u81EA\u52A8\u6210\u4E3A\u5143\u7D20\u8282\u70B9\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>id <span class="token comment">// &quot;test&quot;</span>
a<span class="token punctuation">.</span>href <span class="token comment">// &quot;http://www.example.com/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>a</code>\u5143\u7D20\u6807\u7B7E\u7684\u5C5E\u6027<code>id</code>\u548C<code>href</code>\uFF0C\u81EA\u52A8\u6210\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><p>\u8FD9\u4E9B\u5C5E\u6027\u90FD\u662F\u53EF\u5199\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myImage&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://www.example.com/image.jpg&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u5199\u6CD5\uFF0C\u4F1A\u7ACB\u523B\u66FF\u6362\u6389<code>img</code>\u5BF9\u8C61\u7684<code>src</code>\u5C5E\u6027\uFF0C\u5373\u4F1A\u663E\u793A\u53E6\u5916\u4E00\u5F20\u56FE\u7247\u3002</p><p>\u8FD9\u79CD\u4FEE\u6539\u5C5E\u6027\u7684\u65B9\u6CD5\uFF0C\u5E38\u5E38\u7528\u4E8E\u6DFB\u52A0\u8868\u5355\u7684\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> f <span class="token operator">=</span> document<span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span>action <span class="token operator">=</span> <span class="token string">&#39;submit.php&#39;</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E3A\u8868\u5355\u6DFB\u52A0\u63D0\u4EA4\u7F51\u5740\u548C\u63D0\u4EA4\u65B9\u6CD5\u3002</p><p>\u6CE8\u610F\uFF0C\u8FD9\u79CD\u7528\u6CD5\u867D\u7136\u53EF\u4EE5\u8BFB\u5199\u5C5E\u6027\uFF0C\u4F46\u662F\u65E0\u6CD5\u5220\u9664\u5C5E\u6027\uFF0C<code>delete</code>\u8FD0\u7B97\u7B26\u5728\u8FD9\u91CC\u4E0D\u4F1A\u751F\u6548\u3002</p><p>HTML \u5143\u7D20\u7684\u5C5E\u6027\u540D\u662F\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u7684\uFF0C\u4F46\u662F JavaScript \u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u662F\u5927\u5C0F\u5199\u654F\u611F\u7684\u3002\u8F6C\u6362\u89C4\u5219\u662F\uFF0C\u8F6C\u4E3A JavaScript \u5C5E\u6027\u540D\u65F6\uFF0C\u4E00\u5F8B\u91C7\u7528\u5C0F\u5199\u3002\u5982\u679C\u5C5E\u6027\u540D\u5305\u62EC\u591A\u4E2A\u5355\u8BCD\uFF0C\u5219\u91C7\u7528\u9A86\u9A7C\u62FC\u5199\u6CD5\uFF0C\u5373\u4ECE\u7B2C\u4E8C\u4E2A\u5355\u8BCD\u5F00\u59CB\uFF0C\u6BCF\u4E2A\u5355\u8BCD\u7684\u9996\u5B57\u6BCD\u91C7\u7528\u5927\u5199\uFF0C\u6BD4\u5982<code>onClick</code>\u3002</p><p>\u6709\u4E9B HTML \u5C5E\u6027\u540D\u662F JavaScript \u7684\u4FDD\u7559\u5B57\uFF0C\u8F6C\u4E3A JavaScript \u5C5E\u6027\u65F6\uFF0C\u5FC5\u987B\u6539\u540D\u3002\u4E3B\u8981\u662F\u4EE5\u4E0B\u4E24\u4E2A\u3002</p><ul><li><code>for</code>\u5C5E\u6027\u6539\u4E3A<code>htmlFor</code></li><li><code>class</code>\u5C5E\u6027\u6539\u4E3A<code>className</code></li></ul><p>\u53E6\u5916\uFF0CHTML \u5C5E\u6027\u503C\u4E00\u822C\u90FD\u662F\u5B57\u7B26\u4E32\uFF0C\u4F46\u662F JavaScript \u5C5E\u6027\u4F1A\u81EA\u52A8\u8F6C\u6362\u7C7B\u578B\u3002\u6BD4\u5982\uFF0C\u5C06\u5B57\u7B26\u4E32<code>true</code>\u8F6C\u4E3A\u5E03\u5C14\u503C\uFF0C\u5C06<code>onClick</code>\u7684\u503C\u8F6C\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C06<code>style</code>\u5C5E\u6027\u7684\u503C\u8F6C\u4E3A\u4E00\u4E2A<code>CSSStyleDeclaration</code>\u5BF9\u8C61\u3002\u56E0\u6B64\uFF0C\u53EF\u4EE5\u5BF9\u8FD9\u4E9B\u5C5E\u6027\u8D4B\u4E88\u5404\u79CD\u7C7B\u578B\u7684\u503C\u3002</p><h2 id="\u5C5E\u6027\u64CD\u4F5C\u7684\u6807\u51C6\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u64CD\u4F5C\u7684\u6807\u51C6\u65B9\u6CD5" aria-hidden="true">#</a> \u5C5E\u6027\u64CD\u4F5C\u7684\u6807\u51C6\u65B9\u6CD5</h2><h3 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h3><p>\u5143\u7D20\u8282\u70B9\u63D0\u4F9B\u516D\u4E2A\u65B9\u6CD5\uFF0C\u7528\u6765\u64CD\u4F5C\u5C5E\u6027\u3002</p><ul><li><code>getAttribute()</code></li><li><code>getAttributeNames()</code></li><li><code>setAttribute()</code></li><li><code>hasAttribute()</code></li><li><code>hasAttributes()</code></li><li><code>removeAttribute()</code></li></ul><p>\u8FD9\u6709\u51E0\u70B9\u6CE8\u610F\u3002</p><p>\uFF081\uFF09\u9002\u7528\u6027</p><p>\u8FD9\u516D\u4E2A\u65B9\u6CD5\u5BF9\u6240\u6709\u5C5E\u6027\uFF08\u5305\u62EC\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\uFF09\u90FD\u9002\u7528\u3002</p><p>\uFF082\uFF09\u8FD4\u56DE\u503C</p><p><code>getAttribute()</code>\u53EA\u8FD4\u56DE\u5B57\u7B26\u4E32\uFF0C\u4E0D\u4F1A\u8FD4\u56DE\u5176\u4ED6\u7C7B\u578B\u7684\u503C\u3002</p><p>\uFF083\uFF09\u5C5E\u6027\u540D</p><p>\u8FD9\u4E9B\u65B9\u6CD5\u53EA\u63A5\u53D7\u5C5E\u6027\u7684\u6807\u51C6\u540D\u79F0\uFF0C\u4E0D\u7528\u6539\u5199\u4FDD\u7559\u5B57\uFF0C\u6BD4\u5982<code>for</code>\u548C<code>class</code>\u90FD\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002\u53E6\u5916\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u5BF9\u4E8E\u5C5E\u6027\u540D\u662F\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> image <span class="token operator">=</span> document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
image<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myImage&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>setAttribute</code>\u65B9\u6CD5\u76F4\u63A5\u4F7F\u7528<code>class</code>\u4F5C\u4E3A\u5C5E\u6027\u540D\uFF0C\u4E0D\u7528\u5199\u6210<code>className</code>\u3002</p><h3 id="element-getattribute" tabindex="-1"><a class="header-anchor" href="#element-getattribute" aria-hidden="true">#</a> Element.getAttribute()</h3><p><code>Element.getAttribute</code>\u65B9\u6CD5\u8FD4\u56DE\u5F53\u524D\u5143\u7D20\u8282\u70B9\u7684\u6307\u5B9A\u5C5E\u6027\u3002\u5982\u679C\u6307\u5B9A\u5C5E\u6027\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE<code>null</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u4E3A</span>
<span class="token comment">// &lt;div id=&quot;div1&quot; align=&quot;left&quot;&gt;</span>
<span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;div1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;align&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;left&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="element-getattributenames" tabindex="-1"><a class="header-anchor" href="#element-getattributenames" aria-hidden="true">#</a> Element.getAttributeNames()</h3><p><code>Element.getAttributeNames()</code>\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6210\u5458\u662F\u5F53\u524D\u5143\u7D20\u7684\u6240\u6709\u5C5E\u6027\u7684\u540D\u5B57\u3002\u5982\u679C\u5F53\u524D\u5143\u7D20\u6CA1\u6709\u4EFB\u4F55\u5C5E\u6027\uFF0C\u5219\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u6570\u7EC4\u3002\u4F7F\u7528<code>Element.attributes</code>\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u62FF\u5230\u540C\u6837\u7684\u7ED3\u679C\uFF0C\u552F\u4E00\u7684\u533A\u522B\u662F\u5B83\u8FD4\u56DE\u7684\u662F\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> mydiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;mydiv&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mydiv<span class="token punctuation">.</span><span class="token function">getAttributeNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> value <span class="token operator">=</span> mydiv<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7528\u4E8E\u904D\u5386\u67D0\u4E2A\u8282\u70B9\u7684\u6240\u6709\u5C5E\u6027\u3002</p><h3 id="element-setattribute" tabindex="-1"><a class="header-anchor" href="#element-setattribute" aria-hidden="true">#</a> Element.setAttribute()</h3><p><code>Element.setAttribute</code>\u65B9\u6CD5\u7528\u4E8E\u4E3A\u5F53\u524D\u5143\u7D20\u8282\u70B9\u65B0\u589E\u5C5E\u6027\u3002\u5982\u679C\u540C\u540D\u5C5E\u6027\u5DF2\u5B58\u5728\uFF0C\u5219\u76F8\u5F53\u4E8E\u7F16\u8F91\u5DF2\u5B58\u5728\u7684\u5C5E\u6027\u3002\u8BE5\u65B9\u6CD5\u6CA1\u6709\u8FD4\u56DE\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u4E3A</span>
<span class="token comment">// &lt;button&gt;Hello World&lt;/button&gt;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myButton&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;disabled&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>button</code>\u5143\u7D20\u7684<code>name</code>\u5C5E\u6027\u88AB\u8BBE\u6210<code>myButton</code>\uFF0C<code>disabled</code>\u5C5E\u6027\u88AB\u8BBE\u6210<code>true</code>\u3002</p><p>\u8FD9\u91CC\u6709\u4E24\u4E2A\u5730\u65B9\u9700\u8981\u6CE8\u610F\uFF0C\u9996\u5148\uFF0C\u5C5E\u6027\u503C\u603B\u662F\u5B57\u7B26\u4E32\uFF0C\u5176\u4ED6\u7C7B\u578B\u7684\u503C\u4F1A\u81EA\u52A8\u8F6C\u6210\u5B57\u7B26\u4E32\uFF0C\u6BD4\u5982\u5E03\u5C14\u503C<code>true</code>\u5C31\u4F1A\u53D8\u6210\u5B57\u7B26\u4E32<code>true</code>\uFF1B\u5176\u6B21\uFF0C\u4E0A\u4F8B\u7684<code>disable</code>\u5C5E\u6027\u662F\u4E00\u4E2A\u5E03\u5C14\u5C5E\u6027\uFF0C\u5BF9\u4E8E<code>&lt;button&gt;</code>\u5143\u7D20\u6765\u8BF4\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u4E0D\u9700\u8981\u5C5E\u6027\u503C\uFF0C\u53EA\u8981\u8BBE\u7F6E\u4E86\u5C31\u603B\u662F\u4F1A\u751F\u6548\uFF0C\u56E0\u6B64<code>setAttribute</code>\u65B9\u6CD5\u91CC\u9762\u53EF\u4EE5\u5C06<code>disabled</code>\u5C5E\u6027\u8BBE\u6210\u4EFB\u610F\u503C\u3002</p><h3 id="element-hasattribute" tabindex="-1"><a class="header-anchor" href="#element-hasattribute" aria-hidden="true">#</a> Element.hasAttribute()</h3><p><code>Element.hasAttribute</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5F53\u524D\u5143\u7D20\u8282\u70B9\u662F\u5426\u5305\u542B\u6307\u5B9A\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;div1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;align&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  d<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;align&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u68C0\u67E5<code>div</code>\u8282\u70B9\u662F\u5426\u542B\u6709<code>align</code>\u5C5E\u6027\u3002\u5982\u679C\u6709\uFF0C\u5219\u8BBE\u7F6E\u4E3A\u5C45\u4E2D\u5BF9\u9F50\u3002</p><h3 id="element-hasattributes" tabindex="-1"><a class="header-anchor" href="#element-hasattributes" aria-hidden="true">#</a> Element.hasAttributes()</h3><p><code>Element.hasAttributes</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5F53\u524D\u5143\u7D20\u662F\u5426\u6709\u5C5E\u6027\uFF0C\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u5C5E\u6027\uFF0C\u5C31\u8FD4\u56DE<code>false</code>\uFF0C\u5426\u5219\u8FD4\u56DE<code>true</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">hasAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="element-removeattribute" tabindex="-1"><a class="header-anchor" href="#element-removeattribute" aria-hidden="true">#</a> Element.removeAttribute()</h3><p><code>Element.removeAttribute</code>\u65B9\u6CD5\u79FB\u9664\u6307\u5B9A\u5C5E\u6027\u3002\u8BE5\u65B9\u6CD5\u6CA1\u6709\u8FD4\u56DE\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u4E3A</span>
<span class="token comment">// &lt;div id=&quot;div1&quot; align=&quot;left&quot; width=&quot;200px&quot;&gt;</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;div1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;align&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u73B0\u5728\u7684HTML\u4EE3\u7801\u4E3A</span>
<span class="token comment">// &lt;div id=&quot;div1&quot; width=&quot;200px&quot;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dataset-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#dataset-\u5C5E\u6027" aria-hidden="true">#</a> dataset \u5C5E\u6027</h2><p>\u6709\u65F6\uFF0C\u9700\u8981\u5728HTML\u5143\u7D20\u4E0A\u9644\u52A0\u6570\u636E\uFF0C\u4F9B JavaScript \u811A\u672C\u4F7F\u7528\u3002\u4E00\u79CD\u89E3\u51B3\u65B9\u6CD5\u662F\u81EA\u5B9A\u4E49\u5C5E\u6027\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mydiv<span class="token punctuation">&quot;</span></span> <span class="token attr-name">foo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E3A<code>div</code>\u5143\u7D20\u81EA\u5B9A\u4E49\u4E86<code>foo</code>\u5C5E\u6027\uFF0C\u7136\u540E\u53EF\u4EE5\u7528<code>getAttribute()</code>\u548C<code>setAttribute()</code>\u8BFB\u5199\u8FD9\u4E2A\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> n <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;mydiv&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
n<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token comment">// bar</span>
n<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u65B9\u6CD5\u867D\u7136\u53EF\u4EE5\u8FBE\u5230\u76EE\u7684\uFF0C\u4F46\u662F\u4F1A\u4F7F\u5F97 HTML \u5143\u7D20\u7684\u5C5E\u6027\u4E0D\u7B26\u5408\u6807\u51C6\uFF0C\u5BFC\u81F4\u7F51\u9875\u4EE3\u7801\u901A\u4E0D\u8FC7\u6821\u9A8C\u3002</p><p>\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\u662F\uFF0C\u4F7F\u7528\u6807\u51C6\u63D0\u4F9B\u7684<code>data-*</code>\u5C5E\u6027\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mydiv<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-foo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u4F7F\u7528\u5143\u7D20\u8282\u70B9\u5BF9\u8C61\u7684<code>dataset</code>\u5C5E\u6027\uFF0C\u5B83\u6307\u5411\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7528\u6765\u64CD\u4F5C HTML \u5143\u7D20\u6807\u7B7E\u7684<code>data-*</code>\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> n <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;mydiv&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
n<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>foo <span class="token comment">// bar</span>
n<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;baz&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u901A\u8FC7<code>dataset.foo</code>\u8BFB\u5199<code>data-foo</code>\u5C5E\u6027\u3002</p><p>\u5220\u9664\u4E00\u4E2A<code>data-*</code>\u5C5E\u6027\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528<code>delete</code>\u547D\u4EE4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">delete</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myDiv&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9664\u4E86<code>dataset</code>\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u7528<code>getAttribute(&#39;data-foo&#39;)</code>\u3001<code>removeAttribute(&#39;data-foo&#39;)</code>\u3001<code>setAttribute(&#39;data-foo&#39;)</code>\u3001<code>hasAttribute(&#39;data-foo&#39;)</code>\u7B49\u65B9\u6CD5\u64CD\u4F5C<code>data-*</code>\u5C5E\u6027\u3002</p><p>\u6CE8\u610F\uFF0C<code>data-</code>\u540E\u9762\u7684\u5C5E\u6027\u540D\u6709\u9650\u5236\uFF0C\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u8FDE\u8BCD\u7EBF\uFF08<code>-</code>\uFF09\u3001\u70B9\uFF08<code>.</code>\uFF09\u3001\u5192\u53F7\uFF08<code>:</code>\uFF09\u548C\u4E0B\u5212\u7EBF\uFF08<code>_</code>)\u3002\u800C\u4E14\uFF0C\u5C5E\u6027\u540D\u4E0D\u5E94\u8BE5\u4F7F\u7528<code>A</code>\u5230<code>Z</code>\u7684\u5927\u5199\u5B57\u6BCD\uFF0C\u6BD4\u5982\u4E0D\u80FD\u6709<code>data-helloWorld</code>\u8FD9\u6837\u7684\u5C5E\u6027\u540D\uFF0C\u800C\u8981\u5199\u6210<code>data-hello-world</code>\u3002</p><p>\u8F6C\u6210<code>dataset</code>\u7684\u952E\u540D\u65F6\uFF0C\u8FDE\u8BCD\u7EBF\u540E\u9762\u5982\u679C\u8DDF\u7740\u4E00\u4E2A\u5C0F\u5199\u5B57\u6BCD\uFF0C\u90A3\u4E48\u8FDE\u8BCD\u7EBF\u4F1A\u88AB\u79FB\u9664\uFF0C\u8BE5\u5C0F\u5199\u5B57\u6BCD\u8F6C\u4E3A\u5927\u5199\u5B57\u6BCD\uFF0C\u5176\u4ED6\u5B57\u7B26\u4E0D\u53D8\u3002\u53CD\u8FC7\u6765\uFF0C<code>dataset</code>\u7684\u952E\u540D\u8F6C\u6210\u5C5E\u6027\u540D\u65F6\uFF0C\u6240\u6709\u5927\u5199\u5B57\u6BCD\u90FD\u4F1A\u88AB\u8F6C\u6210\u8FDE\u8BCD\u7EBF+\u8BE5\u5B57\u6BCD\u7684\u5C0F\u5199\u5F62\u5F0F\uFF0C\u5176\u4ED6\u5B57\u7B26\u4E0D\u53D8\u3002\u6BD4\u5982\uFF0C<code>dataset.helloWorld</code>\u4F1A\u8F6C\u6210<code>data-hello-world</code>\u3002</p>`,80),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","attributes.html.vue"]]);export{d as default};
