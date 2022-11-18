import{_ as n,o as a,c as e,e as s}from"./app.3b2d76f3.js";const o={},l=s(`<h1 id="globaleventhandlers-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#globaleventhandlers-\u63A5\u53E3" aria-hidden="true">#</a> GlobalEventHandlers \u63A5\u53E3</h1><p>\u6307\u5B9A\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u63A8\u8350\u4F7F\u7528\u7684\u65B9\u6CD5\u662F\u5143\u7D20\u7684<code>addEventListener</code>\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> clickHandler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9664\u4E86\u4E4B\u5916\uFF0C\u8FD8\u6709\u4E00\u79CD\u65B9\u6CD5\u53EF\u4EE5\u76F4\u63A5\u6307\u5B9A\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>div<span class="token punctuation">.</span>onclick <span class="token operator">=</span> clickHandler<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u63A5\u53E3\u662F\u7531<code>GlobalEventHandlers</code>\u63A5\u53E3\u63D0\u4F9B\u7684\u3002\u5B83\u7684\u4F18\u70B9\u662F\u4F7F\u7528\u6BD4\u8F83\u65B9\u4FBF\uFF0C\u7F3A\u70B9\u662F\u53EA\u80FD\u4E3A\u6BCF\u4E2A\u4E8B\u4EF6\u6307\u5B9A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5E76\u4E14\u65E0\u6CD5\u6307\u5B9A\u4E8B\u4EF6\u89E6\u53D1\u7684\u9636\u6BB5\uFF08\u6355\u83B7\u9636\u6BB5\u8FD8\u662F\u5192\u6CE1\u9636\u6BB5\uFF09\u3002</p><p><code>HTMLElement</code>\u3001<code>Document</code>\u548C<code>Window</code>\u90FD\u7EE7\u627F\u4E86\u8FD9\u4E2A\u63A5\u53E3\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5404\u79CD HTML \u5143\u7D20\u3001<code>document</code>\u5BF9\u8C61\u3001<code>window</code>\u5BF9\u8C61\u4E0A\u9762\u90FD\u53EF\u4EE5\u4F7F\u7528<code>GlobalEventHandlers</code>\u63A5\u53E3\u63D0\u4F9B\u7684\u5C5E\u6027\u3002\u4E0B\u9762\u5C31\u5217\u51FA\u8FD9\u4E2A\u63A5\u53E3\u63D0\u4F9B\u7684\u4E3B\u8981\u7684\u4E8B\u4EF6\u5C5E\u6027\u3002</p><h2 id="globaleventhandlers-onabort" tabindex="-1"><a class="header-anchor" href="#globaleventhandlers-onabort" aria-hidden="true">#</a> GlobalEventHandlers.onabort</h2><p>\u67D0\u4E2A\u5BF9\u8C61\u7684<code>abort</code>\u4E8B\u4EF6\uFF08\u505C\u6B62\u52A0\u8F7D\uFF09\u53D1\u751F\u65F6\uFF0C\u5C31\u4F1A\u8C03\u7528<code>onabort</code>\u5C5E\u6027\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><p>\u5404\u79CD\u5143\u7D20\u7684\u505C\u6B62\u52A0\u8F7D\u4E8B\u4EF6\uFF0C\u5230\u5E95\u5982\u4F55\u89E6\u53D1\uFF0C\u76EE\u524D\u5E76\u6CA1\u6709\u7EDF\u4E00\u7684\u89C4\u5B9A\u3002\u56E0\u6B64\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u73B0\u5728\u4E00\u822C\u53EA\u7528\u5728<code>&lt;img&gt;</code>\u5143\u7D20\u4E0A\u9762\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML \u4EE3\u7801\u5982\u4E0B</span>
<span class="token comment">// &lt;img src=&quot;example.jpg&quot; id=&quot;img&quot;&gt;</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onabort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;image load aborted.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="globaleventhandlers-onerror" tabindex="-1"><a class="header-anchor" href="#globaleventhandlers-onerror" aria-hidden="true">#</a> GlobalEventHandlers.onerror</h2><p><code>error</code>\u4E8B\u4EF6\u53D1\u751F\u65F6\uFF0C\u5C31\u4F1A\u8C03\u7528<code>onerror</code>\u5C5E\u6027\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><p><code>error</code>\u4E8B\u4EF6\u5206\u6210\u4E24\u79CD\u3002</p><p>\u4E00\u79CD\u662F JavaScript \u7684\u8FD0\u884C\u65F6\u9519\u8BEF\uFF0C\u8FD9\u4F1A\u4F20\u5230<code>window</code>\u5BF9\u8C61\uFF0C\u5BFC\u81F4<code>window.onerror()</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> source<span class="token punctuation">,</span> lineno<span class="token punctuation">,</span> colno<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>window.onerror</code>\u7684\u5904\u7406\u51FD\u6570\u5171\u63A5\u53D7\u4E94\u4E2A\u53C2\u6570\uFF0C\u542B\u4E49\u5982\u4E0B\u3002</p><ul><li>message\uFF1A\u9519\u8BEF\u4FE1\u606F\u5B57\u7B26\u4E32</li><li>source\uFF1A\u62A5\u9519\u811A\u672C\u7684 URL</li><li>lineno\uFF1A\u62A5\u9519\u7684\u884C\u53F7\uFF0C\u662F\u4E00\u4E2A\u6574\u6570</li><li>colno\uFF1A\u62A5\u9519\u7684\u5217\u53F7\uFF0C\u662F\u4E00\u4E2A\u6574\u6570</li><li>error\uFF1A \u9519\u8BEF\u5BF9\u8C61</li></ul><p>\u53E6\u4E00\u79CD\u662F\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF\uFF0C\u6BD4\u5982<code>&lt;img&gt;</code>\u6216<code>&lt;script&gt;</code>\u52A0\u8F7D\u7684\u8D44\u6E90\u51FA\u73B0\u52A0\u8F7D\u9519\u8BEF\u3002\u8FD9\u65F6\uFF0CError \u5BF9\u8C61\u4F1A\u4F20\u5230\u5BF9\u5E94\u7684\u5143\u7D20\uFF0C\u5BFC\u81F4\u8BE5\u5143\u7D20\u7684<code>onerror</code>\u5C5E\u6027\u5F00\u59CB\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0C\u8D44\u6E90\u7684\u52A0\u8F7D\u9519\u8BEF\u4E0D\u4F1A\u89E6\u53D1<code>window.onerror</code>\u3002</p><h2 id="globaleventhandlers-onload\u3001globaleventhandlers-onloadstart" tabindex="-1"><a class="header-anchor" href="#globaleventhandlers-onload\u3001globaleventhandlers-onloadstart" aria-hidden="true">#</a> GlobalEventHandlers.onload\u3001GlobalEventHandlers.onloadstart</h2><p>\u5143\u7D20\u5B8C\u6210\u52A0\u8F7D\u65F6\uFF0C\u4F1A\u89E6\u53D1<code>load</code>\u4E8B\u4EF6\uFF0C\u6267\u884C<code>onload()</code>\u3002\u5B83\u7684\u5178\u578B\u4F7F\u7528\u573A\u666F\u662F<code>window</code>\u5BF9\u8C61\u548C<code>&lt;img&gt;</code>\u5143\u7D20\u3002\u5BF9\u4E8E<code>window</code>\u5BF9\u8C61\u6765\u8BF4\uFF0C\u53EA\u6709\u9875\u9762\u7684\u6240\u6709\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6210\uFF08\u5305\u62EC\u56FE\u7247\u3001\u811A\u672C\u3001\u6837\u5F0F\u8868\u3001\u5B57\u4F53\u7B49\u6240\u6709\u5916\u90E8\u8D44\u6E90\uFF09\uFF0C\u624D\u4F1A\u89E6\u53D1<code>load</code>\u4E8B\u4EF6\u3002</p><p>\u5BF9\u4E8E<code>&lt;img&gt;</code>\u548C<code>&lt;video&gt;</code>\u7B49\u5143\u7D20\uFF0C\u52A0\u8F7D\u5F00\u59CB\u65F6\u8FD8\u4F1A\u89E6\u53D1<code>loadstart</code>\u4E8B\u4EF6\uFF0C\u5BFC\u81F4\u6267\u884C<code>onloadstart</code>\u3002</p><h2 id="globaleventhandlers-onfocus-globaleventhandlers-onblur" tabindex="-1"><a class="header-anchor" href="#globaleventhandlers-onfocus-globaleventhandlers-onblur" aria-hidden="true">#</a> GlobalEventHandlers.onfocus\uFF0CGlobalEventHandlers.onblur</h2><p>\u5F53\u524D\u5143\u7D20\u83B7\u5F97\u7126\u70B9\u65F6\uFF0C\u4F1A\u89E6\u53D1<code>element.onfocus</code>\uFF1B\u5931\u53BB\u7126\u70B9\u65F6\uFF0C\u4F1A\u89E6\u53D1<code>element.onblur</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function-variable function">onfocus</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onfocus event detected!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
element<span class="token punctuation">.</span><span class="token function-variable function">onblur</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onblur event detected!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u5982\u679C\u4E0D\u662F\u53EF\u4EE5\u63A5\u53D7\u7528\u6237\u8F93\u5165\u7684\u5143\u7D20\uFF0C\u8981\u89E6\u53D1<code>onfocus</code>\uFF0C\u8BE5\u5143\u7D20\u5FC5\u987B\u6709<code>tabindex</code>\u5C5E\u6027\u3002</p><h2 id="globaleventhandlers-onscroll" tabindex="-1"><a class="header-anchor" href="#globaleventhandlers-onscroll" aria-hidden="true">#</a> GlobalEventHandlers.onscroll</h2><p>\u9875\u9762\u6216\u5143\u7D20\u6EDA\u52A8\u65F6\uFF0C\u4F1A\u89E6\u53D1<code>scroll</code>\u4E8B\u4EF6\uFF0C\u5BFC\u81F4\u6267\u884C<code>onscroll()</code>\u3002</p><h2 id="globaleventhandlers-oncontextmenu-globaleventhandlers-onshow" tabindex="-1"><a class="header-anchor" href="#globaleventhandlers-oncontextmenu-globaleventhandlers-onshow" aria-hidden="true">#</a> GlobalEventHandlers.oncontextmenu\uFF0CGlobalEventHandlers.onshow</h2><p>\u7528\u6237\u5728\u9875\u9762\u4E0A\u6309\u4E0B\u9F20\u6807\u7684\u53F3\u952E\uFF0C\u4F1A\u89E6\u53D1<code>contextmenu</code>\u4E8B\u4EF6\uFF0C\u5BFC\u81F4\u6267\u884C<code>oncontextmenu()</code>\u3002\u5982\u679C\u8BE5\u5C5E\u6027\u6267\u884C\u540E\u8FD4\u56DE<code>false</code>\uFF0C\u5C31\u7B49\u4E8E\u7981\u6B62\u4E86\u53F3\u952E\u83DC\u5355\u3002<code>document.oncontextmenu</code>\u4E0E<code>window.oncontextmenu</code>\u6548\u679C\u4E00\u6837\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function-variable function">oncontextmenu</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>oncontextmenu</code>\u5C5E\u6027\u6267\u884C\u540E\u8FD4\u56DE<code>false</code>\uFF0C\u53F3\u952E\u83DC\u5355\u5C31\u4E0D\u4F1A\u51FA\u73B0\u3002</p><p>\u5143\u7D20\u7684\u53F3\u952E\u83DC\u5355\u663E\u793A\u65F6\uFF0C\u4F1A\u89E6\u53D1\u8BE5\u5143\u7D20\u7684<code>onshow</code>\u76D1\u542C\u51FD\u6570\u3002</p><h2 id="\u5176\u4ED6\u7684\u4E8B\u4EF6\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u7684\u4E8B\u4EF6\u5C5E\u6027" aria-hidden="true">#</a> \u5176\u4ED6\u7684\u4E8B\u4EF6\u5C5E\u6027</h2><p>\u9F20\u6807\u7684\u4E8B\u4EF6\u5C5E\u6027\u3002</p><ul><li>onclick</li><li>ondblclick</li><li>onmousedown</li><li>onmouseenter</li><li>onmouseleave</li><li>onmousemove</li><li>onmouseout</li><li>onmouseover</li><li>onmouseup</li><li>onwheel</li></ul><p>\u952E\u76D8\u7684\u4E8B\u4EF6\u5C5E\u6027\u3002</p><ul><li>onkeydown</li><li>onkeypress</li><li>onkeyup</li></ul><p>\u7126\u70B9\u7684\u4E8B\u4EF6\u5C5E\u6027\u3002</p><ul><li>onblur</li><li>onfocus</li></ul><p>\u8868\u5355\u7684\u4E8B\u4EF6\u5C5E\u6027\u3002</p><ul><li>oninput</li><li>onchange</li><li>onsubmit</li><li>onreset</li><li>oninvalid</li><li>onselect</li></ul><p>\u89E6\u6478\u7684\u4E8B\u4EF6\u5C5E\u6027\u3002</p><ul><li>ontouchcancel</li><li>ontouchend</li><li>ontouchmove</li><li>ontouchstart</li></ul><p>\u62D6\u52A8\u7684\u4E8B\u4EF6\u5C5E\u6027\u5206\u6210\u4E24\u7C7B\uFF1A\u4E00\u7C7B\u4E0E\u88AB\u62D6\u52A8\u5143\u7D20\u76F8\u5173\uFF0C\u53E6\u4E00\u7C7B\u4E0E\u63A5\u6536\u88AB\u62D6\u52A8\u5143\u7D20\u7684\u5BB9\u5668\u5143\u7D20\u76F8\u5173\u3002</p><p>\u88AB\u62D6\u52A8\u5143\u7D20\u7684\u4E8B\u4EF6\u5C5E\u6027\u3002</p><ul><li>ondragstart\uFF1A\u62D6\u52A8\u5F00\u59CB</li><li>ondrag\uFF1A\u62D6\u52A8\u8FC7\u7A0B\u4E2D\uFF0C\u6BCF\u9694\u51E0\u767E\u6BEB\u79D2\u89E6\u53D1\u4E00\u6B21</li><li>ondragend\uFF1A\u62D6\u52A8\u7ED3\u675F</li></ul><p>\u63A5\u6536\u88AB\u62D6\u52A8\u5143\u7D20\u7684\u5BB9\u5668\u5143\u7D20\u7684\u4E8B\u4EF6\u5C5E\u6027\u3002</p><ul><li>ondragenter\uFF1A\u88AB\u62D6\u52A8\u5143\u7D20\u8FDB\u5165\u5BB9\u5668\u5143\u7D20\u3002</li><li>ondragleave\uFF1A\u88AB\u62D6\u52A8\u5143\u7D20\u79BB\u5F00\u5BB9\u5668\u5143\u7D20\u3002</li><li>ondragover\uFF1A\u88AB\u62D6\u52A8\u5143\u7D20\u5728\u5BB9\u5668\u5143\u7D20\u4E0A\u65B9\uFF0C\u6BCF\u9694\u51E0\u767E\u6BEB\u79D2\u89E6\u53D1\u4E00\u6B21\u3002</li><li>ondrop\uFF1A\u677E\u5F00\u9F20\u6807\u540E\uFF0C\u88AB\u62D6\u52A8\u5143\u7D20\u653E\u5165\u5BB9\u5668\u5143\u7D20\u3002</li></ul><p><code>&lt;dialog&gt;</code>\u5BF9\u8BDD\u6846\u5143\u7D20\u7684\u4E8B\u4EF6\u5C5E\u6027\u3002</p><ul><li>oncancel</li><li>onclose</li></ul>`,53),t=[l];function c(i,p){return a(),e("div",null,t)}const r=n(o,[["render",c],["__file","globaleventhandlers.html.vue"]]);export{r as default};
