import{_ as n,o as a,c as s,e}from"./app.3b2d76f3.js";const o={},t=e(`<h1 id="navigator-\u5BF9\u8C61-screen-\u5BF9\u8C61\u3002" tabindex="-1"><a class="header-anchor" href="#navigator-\u5BF9\u8C61-screen-\u5BF9\u8C61\u3002" aria-hidden="true">#</a> Navigator \u5BF9\u8C61\uFF0CScreen \u5BF9\u8C61\u3002</h1><p><code>window.navigator</code>\u5C5E\u6027\u6307\u5411\u4E00\u4E2A\u5305\u542B\u6D4F\u89C8\u5668\u548C\u7CFB\u7EDF\u4FE1\u606F\u7684 Navigator \u5BF9\u8C61\u3002\u811A\u672C\u901A\u8FC7\u8FD9\u4E2A\u5C5E\u6027\u4E86\u89E3\u7528\u6237\u7684\u73AF\u5883\u4FE1\u606F\u3002</p><h2 id="navigator-\u5BF9\u8C61\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#navigator-\u5BF9\u8C61\u7684\u5C5E\u6027" aria-hidden="true">#</a> Navigator \u5BF9\u8C61\u7684\u5C5E\u6027</h2><h3 id="navigator-useragent" tabindex="-1"><a class="header-anchor" href="#navigator-useragent" aria-hidden="true">#</a> Navigator.userAgent</h3><p><code>navigator.userAgent</code>\u5C5E\u6027\u8FD4\u56DE\u6D4F\u89C8\u5668\u7684 User Agent \u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u7528\u6237\u8BBE\u5907\u4FE1\u606F\uFF0C\u5305\u542B\u4E86\u6D4F\u89C8\u5668\u7684\u5382\u5546\u3001\u7248\u672C\u3001\u64CD\u4F5C\u7CFB\u7EDF\u7B49\u4FE1\u606F\u3002</p><p>\u4E0B\u9762\u662F Chrome \u6D4F\u89C8\u5668\u7684<code>userAgent</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>userAgent
<span class="token comment">// &quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7<code>userAgent</code>\u5C5E\u6027\u8BC6\u522B\u6D4F\u89C8\u5668\uFF0C\u4E0D\u662F\u4E00\u4E2A\u597D\u529E\u6CD5\u3002\u56E0\u4E3A\u5FC5\u987B\u8003\u8651\u6240\u6709\u7684\u60C5\u51B5\uFF08\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\uFF0C\u4E0D\u540C\u7684\u7248\u672C\uFF09\uFF0C\u975E\u5E38\u9EBB\u70E6\uFF0C\u800C\u4E14\u7528\u6237\u53EF\u4EE5\u6539\u53D8\u8FD9\u4E2A\u5B57\u7B26\u4E32\u3002\u8FD9\u4E2A\u5B57\u7B26\u4E32\u7684\u683C\u5F0F\u5E76\u65E0\u7EDF\u4E00\u89C4\u5B9A\uFF0C\u4E5F\u65E0\u6CD5\u4FDD\u8BC1\u672A\u6765\u7684\u9002\u7528\u6027\uFF0C\u5404\u79CD\u4E0A\u7F51\u8BBE\u5907\u5C42\u51FA\u4E0D\u7A77\uFF0C\u96BE\u4EE5\u7A77\u5C3D\u3002\u6240\u4EE5\uFF0C\u73B0\u5728\u4E00\u822C\u4E0D\u518D\u901A\u8FC7\u5B83\u8BC6\u522B\u6D4F\u89C8\u5668\u4E86\uFF0C\u800C\u662F\u4F7F\u7528\u201C\u529F\u80FD\u8BC6\u522B\u201D\u65B9\u6CD5\uFF0C\u5373\u9010\u4E00\u6D4B\u8BD5\u5F53\u524D\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301\u8981\u7528\u5230\u7684 JavaScript \u529F\u80FD\u3002</p><p>\u4E0D\u8FC7\uFF0C\u901A\u8FC7<code>userAgent</code>\u53EF\u4EE5\u5927\u81F4\u51C6\u786E\u5730\u8BC6\u522B\u624B\u673A\u6D4F\u89C8\u5668\uFF0C\u65B9\u6CD5\u5C31\u662F\u6D4B\u8BD5\u662F\u5426\u5305\u542B<code>mobi</code>\u5B57\u7B26\u4E32\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> ua <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">mobi</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u624B\u673A\u6D4F\u89C8\u5668</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u975E\u624B\u673A\u6D4F\u89C8\u5668</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u8981\u8BC6\u522B\u6240\u6709\u79FB\u52A8\u8BBE\u5907\u7684\u6D4F\u89C8\u5668\uFF0C\u53EF\u4EE5\u6D4B\u8BD5\u66F4\u591A\u7684\u7279\u5F81\u5B57\u7B26\u4E32\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">mobi|android|touch|mini</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="navigator-plugins" tabindex="-1"><a class="header-anchor" href="#navigator-plugins" aria-hidden="true">#</a> Navigator.plugins</h3><p><code>Navigator.plugins</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\uFF0C\u6210\u5458\u662F Plugin \u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u8868\u793A\u6D4F\u89C8\u5668\u5B89\u88C5\u7684\u63D2\u4EF6\uFF0C\u6BD4\u5982 Flash\u3001ActiveX \u7B49\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> pluginsLength <span class="token operator">=</span> navigator<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pluginsLength<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>plugins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>plugins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>plugins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>plugins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navigator-platform" tabindex="-1"><a class="header-anchor" href="#navigator-platform" aria-hidden="true">#</a> Navigator.platform</h3><p><code>Navigator.platform</code>\u5C5E\u6027\u8FD4\u56DE\u7528\u6237\u7684\u64CD\u4F5C\u7CFB\u7EDF\u4FE1\u606F\uFF0C\u6BD4\u5982<code>MacIntel</code>\u3001<code>Win32</code>\u3001<code>Linux x86_64</code>\u7B49 \u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>platform
<span class="token comment">// &quot;Linux x86_64&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navigator-online" tabindex="-1"><a class="header-anchor" href="#navigator-online" aria-hidden="true">#</a> Navigator.onLine</h3><p><code>navigator.onLine</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u7528\u6237\u5F53\u524D\u5728\u7EBF\u8FD8\u662F\u79BB\u7EBF\uFF08\u6D4F\u89C8\u5668\u65AD\u7EBF\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>onLine <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6709\u65F6\uFF0C\u6D4F\u89C8\u5668\u53EF\u4EE5\u8FDE\u63A5\u5C40\u57DF\u7F51\uFF0C\u4F46\u662F\u5C40\u57DF\u7F51\u4E0D\u80FD\u8FDE\u901A\u5916\u7F51\u3002\u8FD9\u65F6\uFF0C\u6709\u7684\u6D4F\u89C8\u5668\u7684<code>onLine</code>\u5C5E\u6027\u4F1A\u8FD4\u56DE<code>true</code>\uFF0C\u6240\u4EE5\u4E0D\u80FD\u5047\u5B9A\u53EA\u8981\u662F<code>true</code>\uFF0C\u7528\u6237\u5C31\u4E00\u5B9A\u80FD\u8BBF\u95EE\u4E92\u8054\u7F51\u3002\u4E0D\u8FC7\uFF0C\u5982\u679C\u662F<code>false</code>\uFF0C\u53EF\u4EE5\u65AD\u5B9A\u7528\u6237\u4E00\u5B9A\u79BB\u7EBF\u3002</p><p>\u7528\u6237\u53D8\u6210\u5728\u7EBF\u4F1A\u89E6\u53D1<code>online</code>\u4E8B\u4EF6\uFF0C\u53D8\u6210\u79BB\u7EBF\u4F1A\u89E6\u53D1<code>offline</code>\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>window.ononline</code>\u548C<code>window.onoffline</code>\u6307\u5B9A\u8FD9\u4E24\u4E2A\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;offline&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;offline&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;online&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;online&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navigator-language-navigator-languages" tabindex="-1"><a class="header-anchor" href="#navigator-language-navigator-languages" aria-hidden="true">#</a> Navigator.language\uFF0CNavigator.languages</h3><p><code>Navigator.language</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u6D4F\u89C8\u5668\u7684\u9996\u9009\u8BED\u8A00\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>language <span class="token comment">// &quot;en&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Navigator.languages</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8868\u793A\u7528\u6237\u53EF\u4EE5\u63A5\u53D7\u7684\u8BED\u8A00\u3002<code>Navigator.language</code>\u603B\u662F\u8FD9\u4E2A\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u6210\u5458\u3002HTTP \u8BF7\u6C42\u5934\u4FE1\u606F\u7684<code>Accept-Language</code>\u5B57\u6BB5\uFF0C\u5C31\u6765\u81EA\u8FD9\u4E2A\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>languages  <span class="token comment">// [&quot;en-US&quot;, &quot;en&quot;, &quot;zh-CN&quot;, &quot;zh&quot;, &quot;zh-TW&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u8FD9\u4E2A\u5C5E\u6027\u53D1\u751F\u53D8\u5316\uFF0C\u5C31\u4F1A\u5728<code>window</code>\u5BF9\u8C61\u4E0A\u89E6\u53D1<code>languagechange</code>\u4E8B\u4EF6\u3002</p><h3 id="navigator-geolocation" tabindex="-1"><a class="header-anchor" href="#navigator-geolocation" aria-hidden="true">#</a> Navigator.geolocation</h3><p><code>Navigator.geolocation</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A Geolocation \u5BF9\u8C61\uFF0C\u5305\u542B\u7528\u6237\u5730\u7406\u4F4D\u7F6E\u7684\u4FE1\u606F\u3002\u6CE8\u610F\uFF0C\u8BE5 API \u53EA\u6709\u5728 HTTPS \u534F\u8BAE\u4E0B\u53EF\u7528\uFF0C\u5426\u5219\u8C03\u7528\u4E0B\u9762\u65B9\u6CD5\u65F6\u4F1A\u62A5\u9519\u3002</p><p>Geolocation \u5BF9\u8C61\u63D0\u4F9B\u4E0B\u9762\u4E09\u4E2A\u65B9\u6CD5\u3002</p><ul><li>Geolocation.getCurrentPosition()\uFF1A\u5F97\u5230\u7528\u6237\u7684\u5F53\u524D\u4F4D\u7F6E</li><li>Geolocation.watchPosition()\uFF1A\u76D1\u542C\u7528\u6237\u4F4D\u7F6E\u53D8\u5316</li><li>Geolocation.clearWatch()\uFF1A\u53D6\u6D88<code>watchPosition()</code>\u65B9\u6CD5\u6307\u5B9A\u7684\u76D1\u542C\u51FD\u6570</li></ul><p>\u6CE8\u610F\uFF0C\u8C03\u7528\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u8DF3\u51FA\u4E00\u4E2A\u5BF9\u8BDD\u6846\uFF0C\u8981\u6C42\u7528\u6237\u7ED9\u4E88\u6388\u6743\u3002</p><h3 id="navigator-cookieenabled" tabindex="-1"><a class="header-anchor" href="#navigator-cookieenabled" aria-hidden="true">#</a> Navigator.cookieEnabled</h3><p><code>navigator.cookieEnabled</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u6D4F\u89C8\u5668\u7684 Cookie \u529F\u80FD\u662F\u5426\u6253\u5F00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>cookieEnabled <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u53CD\u6620\u7684\u662F\u6D4F\u89C8\u5668\u603B\u7684\u7279\u6027\uFF0C\u4E0E\u662F\u5426\u50A8\u5B58\u67D0\u4E2A\u5177\u4F53\u7684\u7F51\u7AD9\u7684 Cookie \u65E0\u5173\u3002\u7528\u6237\u53EF\u4EE5\u8BBE\u7F6E\u67D0\u4E2A\u7F51\u7AD9\u4E0D\u5F97\u50A8\u5B58 Cookie\uFF0C\u8FD9\u65F6<code>cookieEnabled</code>\u8FD4\u56DE\u7684\u8FD8\u662F<code>true</code>\u3002</p><h2 id="navigator-\u5BF9\u8C61\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#navigator-\u5BF9\u8C61\u7684\u65B9\u6CD5" aria-hidden="true">#</a> Navigator \u5BF9\u8C61\u7684\u65B9\u6CD5</h2><h3 id="navigator-javaenabled" tabindex="-1"><a class="header-anchor" href="#navigator-javaenabled" aria-hidden="true">#</a> Navigator.javaEnabled()</h3><p><code>navigator.javaEnabled()</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u6D4F\u89C8\u5668\u662F\u5426\u80FD\u8FD0\u884C Java Applet \u5C0F\u7A0B\u5E8F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span><span class="token function">javaEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="navigator-sendbeacon" tabindex="-1"><a class="header-anchor" href="#navigator-sendbeacon" aria-hidden="true">#</a> Navigator.sendBeacon()</h3><p><code>Navigator.sendBeacon()</code>\u65B9\u6CD5\u7528\u4E8E\u5411\u670D\u52A1\u5668\u5F02\u6B65\u53D1\u9001\u6570\u636E\uFF0C\u8BE6\u89C1\u300AXMLHttpRequest \u5BF9\u8C61\u300B\u4E00\u7AE0\u3002</p><h2 id="navigator-\u7684\u5B9E\u9A8C\u6027\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#navigator-\u7684\u5B9E\u9A8C\u6027\u5C5E\u6027" aria-hidden="true">#</a> Navigator \u7684\u5B9E\u9A8C\u6027\u5C5E\u6027</h2><p>Navigator \u5BF9\u8C61\u6709\u4E00\u4E9B\u5B9E\u9A8C\u6027\u5C5E\u6027\uFF0C\u5728\u90E8\u5206\u6D4F\u89C8\u5668\u53EF\u7528\u3002</p><h3 id="navigator-devicememory" tabindex="-1"><a class="header-anchor" href="#navigator-devicememory" aria-hidden="true">#</a> Navigator.deviceMemory</h3><p><code>navigator.deviceMemory</code>\u5C5E\u6027\u8FD4\u56DE\u5F53\u524D\u8BA1\u7B97\u673A\u7684\u5185\u5B58\u6570\u91CF\uFF08\u5355\u4F4D\u4E3A GB\uFF09\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\uFF0C\u53EA\u5728 HTTPS \u73AF\u5883\u4E0B\u53EF\u7528\u3002</p><p>\u5B83\u7684\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u8FD1\u4F3C\u503C\uFF0C\u56DB\u820D\u4E94\u5165\u5230\u6700\u63A5\u8FD1\u76842\u7684\u5E42\uFF0C\u901A\u5E38\u662F 0.25\u30010.5\u30011\u30012\u30014\u30018\u3002\u5B9E\u9645\u5185\u5B58\u8D85\u8FC7 8GB\uFF0C\u4E5F\u8FD4\u56DE<code>8</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>deviceMemory <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./costly-module.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u53EA\u6709\u5F53\u524D\u5185\u5B58\u5927\u4E8E 1GB\uFF0C\u624D\u52A0\u8F7D\u5927\u578B\u7684\u811A\u672C\u3002</p><h3 id="navigator-hardwareconcurrency" tabindex="-1"><a class="header-anchor" href="#navigator-hardwareconcurrency" aria-hidden="true">#</a> Navigator.hardwareConcurrency</h3><p><code>navigator.hardwareConcurrency</code>\u5C5E\u6027\u8FD4\u56DE\u7528\u6237\u8BA1\u7B97\u673A\u4E0A\u53EF\u7528\u7684\u903B\u8F91\u5904\u7406\u5668\u7684\u6570\u91CF\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</p><p>\u73B0\u4EE3\u8BA1\u7B97\u673A\u7684 CPU \u6709\u591A\u4E2A\u7269\u7406\u6838\u5FC3\uFF0C\u6BCF\u4E2A\u7269\u7406\u6838\u5FC3\u6709\u65F6\u652F\u6301\u4E00\u6B21\u8FD0\u884C\u591A\u4E2A\u7EBF\u7A0B\u3002\u56E0\u6B64\uFF0C\u56DB\u6838 CPU \u53EF\u4EE5\u63D0\u4F9B\u516B\u4E2A\u903B\u8F91\u5904\u7406\u5668\u6838\u5FC3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>hardwareConcurrency <span class="token operator">&gt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./costly-module.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u53EF\u7528\u7684\u903B\u8F91\u5904\u7406\u5668\u5927\u4E8E4\uFF0C\u624D\u4F1A\u52A0\u8F7D\u5927\u578B\u811A\u672C\u3002</p><p>\u8BE5\u5C5E\u6027\u901A\u8FC7\u7528\u4E8E\u521B\u5EFA Web Worker\uFF0C\u6BCF\u4E2A\u53EF\u7528\u7684\u903B\u8F91\u5904\u7406\u5668\u90FD\u521B\u5EFA\u4E00\u4E2A Worker\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> workerList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>hardwareConcurrency<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newWorker <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">worker</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">&#39;cpuworker.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inUse</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  workerList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newWorker<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u6709\u591A\u5C11\u4E2A\u53EF\u7528\u7684\u903B\u8F91\u5904\u7406\u5668\uFF0C\u5C31\u521B\u5EFA\u591A\u5C11\u4E2A Web Worker\u3002</p><h3 id="navigator-connection" tabindex="-1"><a class="header-anchor" href="#navigator-connection" aria-hidden="true">#</a> Navigator.connection</h3><p><code>navigator.connection</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u5F53\u524D\u7F51\u7EDC\u8FDE\u63A5\u7684\u76F8\u5173\u4FE1\u606F\u3002</p><ul><li>downlink\uFF1A\u6709\u6548\u5E26\u5BBD\u4F30\u8BA1\u503C\uFF08\u5355\u4F4D\uFF1A\u5146\u6BD4\u7279/\u79D2\uFF0CMbps\uFF09\uFF0C\u56DB\u820D\u4E94\u5165\u5230\u6BCF\u79D2 25KB \u7684\u6700\u63A5\u8FD1\u500D\u6570\u3002</li><li>downlinkMax\uFF1A\u5F53\u524D\u8FDE\u63A5\u7684\u6700\u5927\u4E0B\u884C\u94FE\u8DEF\u901F\u5EA6\uFF08\u5355\u4F4D\uFF1A\u5146\u6BD4\u7279\u6BCF\u79D2\uFF0CMbps\uFF09\u3002</li><li>effectiveType\uFF1A\u8FD4\u56DE\u8FDE\u63A5\u7684\u7B49\u6548\u7C7B\u578B\uFF0C\u53EF\u80FD\u7684\u503C\u4E3A<code>slow-2g</code>\u3001<code>2g</code>\u3001<code>3g</code>\u3001<code>4g</code>\u3002</li><li>rtt\uFF1A\u5F53\u524D\u8FDE\u63A5\u7684\u4F30\u8BA1\u6709\u6548\u5F80\u8FD4\u65F6\u95F4\uFF0C\u56DB\u820D\u4E94\u5165\u5230\u6700\u63A5\u8FD1\u768425\u6BEB\u79D2\u7684\u500D\u6570\u3002</li><li>saveData\uFF1A\u7528\u6237\u662F\u5426\u8BBE\u7F6E\u4E86\u6D4F\u89C8\u5668\u7684\u51CF\u5C11\u6570\u636E\u4F7F\u7528\u91CF\u9009\u9879\uFF08\u6BD4\u5982\u4E0D\u52A0\u8F7D\u56FE\u7247\uFF09\uFF0C\u8FD4\u56DE<code>true</code>\u6216\u8005<code>false</code>\u3002</li><li>type\uFF1A\u5F53\u524D\u8FDE\u63A5\u7684\u4ECB\u8D28\u7C7B\u578B\uFF0C\u53EF\u80FD\u7684\u503C\u4E3A<code>bluetooth</code>\u3001<code>cellular</code>\u3001<code>ethernet</code>\u3001<code>none</code>\u3001<code>wifi</code>\u3001<code>wimax</code>\u3001<code>other</code>\u3001<code>unknown</code>\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>effectiveType <span class="token operator">===</span> <span class="token string">&#39;4g&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./costly-module.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u5982\u679C\u7F51\u7EDC\u8FDE\u63A5\u662F 4G\uFF0C\u5219\u52A0\u8F7D\u5927\u578B\u811A\u672C\u3002</p><h2 id="screen-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#screen-\u5BF9\u8C61" aria-hidden="true">#</a> Screen \u5BF9\u8C61</h2><p>Screen \u5BF9\u8C61\u8868\u793A\u5F53\u524D\u7A97\u53E3\u6240\u5728\u7684\u5C4F\u5E55\uFF0C\u63D0\u4F9B\u663E\u793A\u8BBE\u5907\u7684\u4FE1\u606F\u3002<code>window.screen</code>\u5C5E\u6027\u6307\u5411\u8FD9\u4E2A\u5BF9\u8C61\u3002</p><p>\u8BE5\u5BF9\u8C61\u6709\u4E0B\u9762\u7684\u5C5E\u6027\u3002</p><ul><li><code>Screen.height</code>\uFF1A\u6D4F\u89C8\u5668\u7A97\u53E3\u6240\u5728\u7684\u5C4F\u5E55\u7684\u9AD8\u5EA6\uFF08\u5355\u4F4D\u50CF\u7D20\uFF09\u3002\u9664\u975E\u8C03\u6574\u663E\u793A\u5668\u7684\u5206\u8FA8\u7387\uFF0C\u5426\u5219\u8FD9\u4E2A\u503C\u53EF\u4EE5\u770B\u4F5C\u5E38\u91CF\uFF0C\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\u3002\u663E\u793A\u5668\u7684\u5206\u8FA8\u7387\u4E0E\u6D4F\u89C8\u5668\u8BBE\u7F6E\u65E0\u5173\uFF0C\u7F29\u653E\u7F51\u9875\u5E76\u4E0D\u4F1A\u6539\u53D8\u5206\u8FA8\u7387\u3002</li><li><code>Screen.width</code>\uFF1A\u6D4F\u89C8\u5668\u7A97\u53E3\u6240\u5728\u7684\u5C4F\u5E55\u7684\u5BBD\u5EA6\uFF08\u5355\u4F4D\u50CF\u7D20\uFF09\u3002</li><li><code>Screen.availHeight</code>\uFF1A\u6D4F\u89C8\u5668\u7A97\u53E3\u53EF\u7528\u7684\u5C4F\u5E55\u9AD8\u5EA6\uFF08\u5355\u4F4D\u50CF\u7D20\uFF09\u3002\u56E0\u4E3A\u90E8\u5206\u7A7A\u95F4\u53EF\u80FD\u4E0D\u53EF\u7528\uFF0C\u6BD4\u5982\u7CFB\u7EDF\u7684\u4EFB\u52A1\u680F\u6216\u8005 Mac \u7CFB\u7EDF\u5C4F\u5E55\u5E95\u90E8\u7684 Dock \u533A\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u7B49\u4E8E<code>height</code>\u51CF\u53BB\u90A3\u4E9B\u88AB\u7CFB\u7EDF\u7EC4\u4EF6\u7684\u9AD8\u5EA6\u3002</li><li><code>Screen.availWidth</code>\uFF1A\u6D4F\u89C8\u5668\u7A97\u53E3\u53EF\u7528\u7684\u5C4F\u5E55\u5BBD\u5EA6\uFF08\u5355\u4F4D\u50CF\u7D20\uFF09\u3002</li><li><code>Screen.pixelDepth</code>\uFF1A\u6574\u6570\uFF0C\u8868\u793A\u5C4F\u5E55\u7684\u8272\u5F69\u4F4D\u6570\uFF0C\u6BD4\u5982<code>24</code>\u8868\u793A\u5C4F\u5E55\u63D0\u4F9B24\u4F4D\u8272\u5F69\u3002</li><li><code>Screen.colorDepth</code>\uFF1A<code>Screen.pixelDepth</code>\u7684\u522B\u540D\u3002\u4E25\u683C\u5730\u8BF4\uFF0CcolorDepth \u8868\u793A\u5E94\u7528\u7A0B\u5E8F\u7684\u989C\u8272\u6DF1\u5EA6\uFF0CpixelDepth \u8868\u793A\u5C4F\u5E55\u7684\u989C\u8272\u6DF1\u5EA6\uFF0C\u7EDD\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4EEC\u90FD\u662F\u540C\u4E00\u4EF6\u4E8B\u3002</li><li><code>Screen.orientation</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8868\u793A\u5C4F\u5E55\u7684\u65B9\u5411\u3002\u8BE5\u5BF9\u8C61\u7684<code>type</code>\u5C5E\u6027\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u5C4F\u5E55\u7684\u5177\u4F53\u65B9\u5411\uFF0C<code>landscape-primary</code>\u8868\u793A\u6A2A\u653E\uFF0C<code>landscape-secondary</code>\u8868\u793A\u98A0\u5012\u7684\u6A2A\u653E\uFF0C<code>portrait-primary</code>\u8868\u793A\u7AD6\u653E\uFF0C<code>portrait-secondary</code>\u8868\u793A\u98A0\u5012\u7684\u7AD6\u653E\u3002</li></ul><p>\u4E0B\u9762\u662F<code>Screen.orientation</code>\u7684\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>orientation
<span class="token comment">// { angle: 0, type: &quot;landscape-primary&quot;, onchange: null }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u4FDD\u8BC1\u5C4F\u5E55\u5206\u8FA8\u7387\u5927\u4E8E 1024 x 768\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">&gt;=</span> <span class="token number">1024</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">&gt;=</span> <span class="token number">768</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5206\u8FA8\u7387\u4E0D\u4F4E\u4E8E 1024x768</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u6839\u636E\u5C4F\u5E55\u7684\u5BBD\u5EA6\uFF0C\u5C06\u7528\u6237\u5BFC\u5411\u4E0D\u540C\u7F51\u9875\u7684\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span>width <span class="token operator">&lt;=</span> <span class="token number">800</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>screen<span class="token punctuation">.</span>height <span class="token operator">&lt;=</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;small.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;wide.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75),p=[t];function c(i,l){return a(),s("div",null,p)}const u=n(o,[["render",c],["__file","navigator.html.vue"]]);export{u as default};