import{_ as s,o as a,c as n,e}from"./app.3b2d76f3.js";const l={},o=e(`<h1 id="\u5B57\u7B26\u4E32\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u64CD\u4F5C" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u64CD\u4F5C</h1><p>\u672C\u7AE0\u4ECB\u7ECD Bash \u5B57\u7B26\u4E32\u64CD\u4F5C\u7684\u8BED\u6CD5\u3002</p><h2 id="\u5B57\u7B26\u4E32\u7684\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7684\u957F\u5EA6" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u7684\u957F\u5EA6</h2><p>\u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6\u7684\u8BED\u6CD5\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">\${<span class="token operator">#</span>varname}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">myPath</span><span class="token operator">=</span>/home/cam/book/long.file.name
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>myPath}</span>
<span class="token number">29</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5927\u62EC\u53F7<code>{}</code>\u662F\u5FC5\u9700\u7684\uFF0C\u5426\u5219 Bash \u4F1A\u5C06<code>$#</code>\u7406\u89E3\u6210\u811A\u672C\u7684\u53C2\u6570\u4E2A\u6570\uFF0C\u5C06\u53D8\u91CF\u540D\u7406\u89E3\u6210\u6587\u672C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable">$#</span>myvar
0myvar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0CBash \u5C06<code>$#</code>\u548C<code>myvar</code>\u5206\u5F00\u89E3\u91CA\u4E86\u3002</p><h2 id="\u5B50\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B50\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B50\u5B57\u7B26\u4E32</h2><p>\u5B57\u7B26\u4E32\u63D0\u53D6\u5B50\u4E32\u7684\u8BED\u6CD5\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">\${varname<span class="token operator">:</span>offset<span class="token operator">:</span>length}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u8BED\u6CD5\u7684\u542B\u4E49\u662F\u8FD4\u56DE\u53D8\u91CF<code>$varname</code>\u7684\u5B50\u5B57\u7B26\u4E32\uFF0C\u4ECE\u4F4D\u7F6E<code>offset</code>\u5F00\u59CB\uFF08\u4ECE<code>0</code>\u5F00\u59CB\u8BA1\u7B97\uFF09\uFF0C\u957F\u5EA6\u4E3A<code>length</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">count</span><span class="token operator">=</span>frogfootman
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${count<span class="token operator">:</span>4<span class="token operator">:</span>4}</span>
foot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u8FD4\u56DE\u5B57\u7B26\u4E32<code>frogfootman</code>\u4ECE4\u53F7\u4F4D\u7F6E\u5F00\u59CB\u7684\u957F\u5EA6\u4E3A4\u7684\u5B50\u5B57\u7B26\u4E32<code>foot</code>\u3002</p><p>\u8FD9\u79CD\u8BED\u6CD5\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C\u5B57\u7B26\u4E32\uFF0C\u53EA\u80FD\u901A\u8FC7\u53D8\u91CF\u6765\u8BFB\u53D6\u5B57\u7B26\u4E32\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u6539\u53D8\u539F\u59CB\u5B57\u7B26\u4E32\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u62A5\u9519</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${&quot;hello&quot;<span class="token operator">:</span>2<span class="token operator">:</span>3}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>&quot;hello&quot;</code>\u4E0D\u662F\u53D8\u91CF\u540D\uFF0C\u5BFC\u81F4 Bash \u62A5\u9519\u3002</p><p>\u5982\u679C\u7701\u7565<code>length</code>\uFF0C\u5219\u4ECE\u4F4D\u7F6E<code>offset</code>\u5F00\u59CB\uFF0C\u4E00\u76F4\u8FD4\u56DE\u5230\u5B57\u7B26\u4E32\u7684\u7ED3\u5C3E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">count</span><span class="token operator">=</span>frogfootman
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${count<span class="token operator">:</span>4}</span>
footman
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u662F\u8FD4\u56DE\u53D8\u91CF<code>count</code>\u4ECE4\u53F7\u4F4D\u7F6E\u4E00\u76F4\u5230\u7ED3\u5C3E\u7684\u5B50\u5B57\u7B26\u4E32\u3002</p><p>\u5982\u679C<code>offset</code>\u4E3A\u8D1F\u503C\uFF0C\u8868\u793A\u4ECE\u5B57\u7B26\u4E32\u7684\u672B\u5C3E\u5F00\u59CB\u7B97\u8D77\u3002\u6CE8\u610F\uFF0C\u8D1F\u6570\u524D\u9762\u5FC5\u987B\u6709\u4E00\u4E2A\u7A7A\u683C\uFF0C \u4EE5\u9632\u6B62\u4E0E<code>\${variable:-word}</code>\u7684\u53D8\u91CF\u7684\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u8BED\u6CD5\u6DF7\u6DC6\u3002\u8FD9\u65F6\u8FD8\u53EF\u4EE5\u6307\u5B9A<code>length</code>\uFF0C<code>length</code>\u53EF\u4EE5\u662F\u6B63\u503C\uFF0C\u4E5F\u53EF\u4EE5\u662F\u8D1F\u503C\uFF08\u8D1F\u503C\u4E0D\u80FD\u8D85\u8FC7<code>offset</code>\u7684\u957F\u5EA6\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token string">&quot;This string is long.&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">:</span> -5}</span>
long.
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">:</span> -5<span class="token operator">:</span>2}</span>
lo
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">:</span> -5<span class="token operator">:-</span>2}</span>
lon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>offset</code>\u4E3A<code>-5</code>\uFF0C\u8868\u793A\u4ECE\u5012\u6570\u7B2C5\u4E2A\u5B57\u7B26\u5F00\u59CB\u622A\u53D6\uFF0C\u6240\u4EE5\u8FD4\u56DE<code>long.</code>\u3002\u5982\u679C\u6307\u5B9A\u957F\u5EA6<code>length</code>\u4E3A<code>2</code>\uFF0C\u5219\u8FD4\u56DE<code>lo</code>\uFF1B\u5982\u679C<code>length</code>\u4E3A<code>-2</code>\uFF0C\u8868\u793A\u8981\u6392\u9664\u4ECE\u5B57\u7B26\u4E32\u672B\u5C3E\u5F00\u59CB\u76842\u4E2A\u5B57\u7B26\uFF0C\u6240\u4EE5\u8FD4\u56DE<code>lon</code>\u3002</p><h2 id="\u641C\u7D22\u548C\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22\u548C\u66FF\u6362" aria-hidden="true">#</a> \u641C\u7D22\u548C\u66FF\u6362</h2><p>Bash \u63D0\u4F9B\u5B57\u7B26\u4E32\u641C\u7D22\u548C\u66FF\u6362\u7684\u591A\u79CD\u65B9\u6CD5\u3002</p><p><strong>\uFF081\uFF09\u5B57\u7B26\u4E32\u5934\u90E8\u7684\u6A21\u5F0F\u5339\u914D\u3002</strong></p><p>\u4EE5\u4E0B\u4E24\u79CD\u8BED\u6CD5\u53EF\u4EE5\u68C0\u67E5\u5B57\u7B26\u4E32\u5F00\u5934\uFF0C\u662F\u5426\u5339\u914D\u7ED9\u5B9A\u7684\u6A21\u5F0F\u3002\u5982\u679C\u5339\u914D\u6210\u529F\uFF0C\u5C31\u5220\u9664\u5339\u914D\u7684\u90E8\u5206\uFF0C\u8FD4\u56DE\u5269\u4E0B\u7684\u90E8\u5206\u3002\u539F\u59CB\u53D8\u91CF\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C pattern \u5339\u914D\u53D8\u91CF variable \u7684\u5F00\u5934\uFF0C</span>
<span class="token comment"># \u5220\u9664\u6700\u77ED\u5339\u914D\uFF08\u975E\u8D2A\u5A6A\u5339\u914D\uFF09\u7684\u90E8\u5206\uFF0C\u8FD4\u56DE\u5269\u4F59\u90E8\u5206</span>
<span class="token variable">\${variable<span class="token operator">#</span>pattern}</span>

<span class="token comment"># \u5982\u679C pattern \u5339\u914D\u53D8\u91CF variable \u7684\u5F00\u5934\uFF0C</span>
<span class="token comment"># \u5220\u9664\u6700\u957F\u5339\u914D\uFF08\u8D2A\u5A6A\u5339\u914D\uFF09\u7684\u90E8\u5206\uFF0C\u8FD4\u56DE\u5269\u4F59\u90E8\u5206</span>
<span class="token variable">\${variable<span class="token operator">##</span>pattern}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4E24\u79CD\u8BED\u6CD5\u4F1A\u5220\u9664\u53D8\u91CF\u5B57\u7B26\u4E32\u5F00\u5934\u7684\u5339\u914D\u90E8\u5206\uFF08\u5C06\u5176\u66FF\u6362\u4E3A\u7A7A\uFF09\uFF0C\u8FD4\u56DE\u5269\u4E0B\u7684\u90E8\u5206\u3002\u533A\u522B\u662F\u4E00\u4E2A\u662F\u6700\u77ED\u5339\u914D\uFF08\u53C8\u79F0\u975E\u8D2A\u5A6A\u5339\u914D\uFF09\uFF0C\u53E6\u4E00\u4E2A\u662F\u6700\u957F\u5339\u914D\uFF08\u53C8\u79F0\u8D2A\u5A6A\u5339\u914D\uFF09\u3002</p><p>\u5339\u914D\u6A21\u5F0F<code>pattern</code>\u53EF\u4EE5\u4F7F\u7528<code>*</code>\u3001<code>?</code>\u3001<code>[]</code>\u7B49\u901A\u914D\u7B26\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">myPath</span><span class="token operator">=</span>/home/cam/book/long.file.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${myPath<span class="token operator">#</span><span class="token operator">/</span>*<span class="token operator">/</span>}</span>
cam/book/long.file.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${myPath<span class="token operator">##</span><span class="token operator">/</span>*<span class="token operator">/</span>}</span>
long.file.name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u5339\u914D\u7684\u6A21\u5F0F\u662F<code>/*/</code>\uFF0C\u5176\u4E2D<code>*</code>\u53EF\u4EE5\u5339\u914D\u4EFB\u610F\u6570\u91CF\u7684\u5B57\u7B26\uFF0C\u6240\u4EE5\u6700\u77ED\u5339\u914D\u662F<code>/home/</code>\uFF0C\u6700\u957F\u5339\u914D\u662F<code>/home/cam/book/</code>\u3002</p><p>\u4E0B\u9762\u5199\u6CD5\u53EF\u4EE5\u5220\u9664\u6587\u4EF6\u8DEF\u5F84\u7684\u76EE\u5F55\u90E8\u5206\uFF0C\u53EA\u7559\u4E0B\u6587\u4EF6\u540D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/cam/book/long.file.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">##</span>*<span class="token operator">/</span>}</span>
long.file.name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u6A21\u5F0F<code>*/</code>\u5339\u914D\u76EE\u5F55\u90E8\u5206\uFF0C\u6240\u4EE5\u53EA\u8FD4\u56DE\u6587\u4EF6\u540D\u3002</p><p>\u4E0B\u9762\u518D\u770B\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">phone</span><span class="token operator">=</span><span class="token string">&quot;555-456-1414&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">#</span>*-}</span>
<span class="token number">456</span>-1414
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">##</span>*-}</span>
<span class="token number">1414</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5339\u914D\u4E0D\u6210\u529F\uFF0C\u5219\u8FD4\u56DE\u539F\u59CB\u5B57\u7B26\u4E32\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">phone</span><span class="token operator">=</span><span class="token string">&quot;555-456-1414&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">#</span>444}</span>
<span class="token number">555</span>-456-1414
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u539F\u59CB\u5B57\u7B26\u4E32\u91CC\u9762\u65E0\u6CD5\u5339\u914D\u6A21\u5F0F<code>444</code>\uFF0C\u6240\u4EE5\u539F\u6837\u8FD4\u56DE\u3002</p><p>\u5982\u679C\u8981\u5C06\u5934\u90E8\u5339\u914D\u7684\u90E8\u5206\uFF0C\u66FF\u6362\u6210\u5176\u4ED6\u5185\u5BB9\uFF0C\u91C7\u7528\u4E0B\u9762\u7684\u5199\u6CD5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6A21\u5F0F\u5FC5\u987B\u51FA\u73B0\u5728\u5B57\u7B26\u4E32\u7684\u5F00\u5934</span>
<span class="token variable">\${variable<span class="token operator">/</span><span class="token operator">#</span>pattern<span class="token operator">/</span>string}</span>

<span class="token comment"># \u793A\u4F8B</span>
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>JPG.JPG
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">/</span><span class="token operator">#</span>JPG<span class="token operator">/</span>jpg}</span>
jpg.JPG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u88AB\u66FF\u6362\u7684<code>JPG</code>\u5FC5\u987B\u51FA\u73B0\u5728\u5B57\u7B26\u4E32\u5934\u90E8\uFF0C\u6240\u4EE5\u8FD4\u56DE<code>jpg.JPG</code>\u3002</p><p><strong>\uFF082\uFF09\u5B57\u7B26\u4E32\u5C3E\u90E8\u7684\u6A21\u5F0F\u5339\u914D\u3002</strong></p><p>\u4EE5\u4E0B\u4E24\u79CD\u8BED\u6CD5\u53EF\u4EE5\u68C0\u67E5\u5B57\u7B26\u4E32\u7ED3\u5C3E\uFF0C\u662F\u5426\u5339\u914D\u7ED9\u5B9A\u7684\u6A21\u5F0F\u3002\u5982\u679C\u5339\u914D\u6210\u529F\uFF0C\u5C31\u5220\u9664\u5339\u914D\u7684\u90E8\u5206\uFF0C\u8FD4\u56DE\u5269\u4E0B\u7684\u90E8\u5206\u3002\u539F\u59CB\u53D8\u91CF\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C pattern \u5339\u914D\u53D8\u91CF variable \u7684\u7ED3\u5C3E\uFF0C</span>
<span class="token comment"># \u5220\u9664\u6700\u77ED\u5339\u914D\uFF08\u975E\u8D2A\u5A6A\u5339\u914D\uFF09\u7684\u90E8\u5206\uFF0C\u8FD4\u56DE\u5269\u4F59\u90E8\u5206</span>
<span class="token variable">\${variable<span class="token operator">%</span>pattern}</span>

<span class="token comment"># \u5982\u679C pattern \u5339\u914D\u53D8\u91CF variable \u7684\u7ED3\u5C3E\uFF0C</span>
<span class="token comment"># \u5220\u9664\u6700\u957F\u5339\u914D\uFF08\u8D2A\u5A6A\u5339\u914D\uFF09\u7684\u90E8\u5206\uFF0C\u8FD4\u56DE\u5269\u4F59\u90E8\u5206</span>
<span class="token variable">\${variable<span class="token operator">%%</span>pattern}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4E24\u79CD\u8BED\u6CD5\u4F1A\u5220\u9664\u53D8\u91CF\u5B57\u7B26\u4E32\u7ED3\u5C3E\u7684\u5339\u914D\u90E8\u5206\uFF08\u5C06\u5176\u66FF\u6362\u4E3A\u7A7A\uFF09\uFF0C\u8FD4\u56DE\u5269\u4E0B\u7684\u90E8\u5206\u3002\u533A\u522B\u662F\u4E00\u4E2A\u662F\u6700\u77ED\u5339\u914D\uFF08\u53C8\u79F0\u975E\u8D2A\u5A6A\u5339\u914D\uFF09\uFF0C\u53E6\u4E00\u4E2A\u662F\u6700\u957F\u5339\u914D\uFF08\u53C8\u79F0\u8D2A\u5A6A\u5339\u914D\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/cam/book/long.file.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">%</span>.*}</span>
/home/cam/book/long.file

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">%%</span>.*}</span>
/home/cam/book/long
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u5339\u914D\u6A21\u5F0F\u662F<code>.*</code>\uFF0C\u5176\u4E2D<code>*</code>\u53EF\u4EE5\u5339\u914D\u4EFB\u610F\u6570\u91CF\u7684\u5B57\u7B26\uFF0C\u6240\u4EE5\u6700\u77ED\u5339\u914D\u662F<code>.name</code>\uFF0C\u6700\u957F\u5339\u914D\u662F<code>.file.name</code>\u3002</p><p>\u4E0B\u9762\u5199\u6CD5\u53EF\u4EE5\u5220\u9664\u8DEF\u5F84\u7684\u6587\u4EF6\u540D\u90E8\u5206\uFF0C\u53EA\u7559\u4E0B\u76EE\u5F55\u90E8\u5206\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/cam/book/long.file.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">%</span><span class="token operator">/</span>*}</span>
/home/cam/book
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u6A21\u5F0F<code>/*</code>\u5339\u914D\u6587\u4EF6\u540D\u90E8\u5206\uFF0C\u6240\u4EE5\u53EA\u8FD4\u56DE\u76EE\u5F55\u90E8\u5206\u3002</p><p>\u4E0B\u9762\u7684\u5199\u6CD5\u53EF\u4EE5\u66FF\u6362\u6587\u4EF6\u7684\u540E\u7F00\u540D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">file</span><span class="token operator">=</span>foo.png
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${file<span class="token operator">%</span>.png}</span>.jpg
foo.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u5C06\u6587\u4EF6\u7684\u540E\u7F00\u540D\uFF0C\u4ECE<code>.png</code>\u6539\u6210\u4E86<code>.jpg</code>\u3002</p><p>\u4E0B\u9762\u518D\u770B\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">phone</span><span class="token operator">=</span><span class="token string">&quot;555-456-1414&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">%</span>-*}</span>
<span class="token number">555</span>-456
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">%%</span>-*}</span>
<span class="token number">555</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5339\u914D\u4E0D\u6210\u529F\uFF0C\u5219\u8FD4\u56DE\u539F\u59CB\u5B57\u7B26\u4E32\u3002</p><p>\u5982\u679C\u8981\u5C06\u5C3E\u90E8\u5339\u914D\u7684\u90E8\u5206\uFF0C\u66FF\u6362\u6210\u5176\u4ED6\u5185\u5BB9\uFF0C\u91C7\u7528\u4E0B\u9762\u7684\u5199\u6CD5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6A21\u5F0F\u5FC5\u987B\u51FA\u73B0\u5728\u5B57\u7B26\u4E32\u7684\u7ED3\u5C3E</span>
<span class="token variable">\${variable<span class="token operator">/</span><span class="token operator">%</span>pattern<span class="token operator">/</span>string}</span>

<span class="token comment"># \u793A\u4F8B</span>
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>JPG.JPG
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">/</span><span class="token operator">%</span>JPG<span class="token operator">/</span>jpg}</span>
JPG.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u88AB\u66FF\u6362\u7684<code>JPG</code>\u5FC5\u987B\u51FA\u73B0\u5728\u5B57\u7B26\u4E32\u5C3E\u90E8\uFF0C\u6240\u4EE5\u8FD4\u56DE<code>JPG.jpg</code>\u3002</p><p><strong>\uFF083\uFF09\u4EFB\u610F\u4F4D\u7F6E\u7684\u6A21\u5F0F\u5339\u914D\u3002</strong></p><p>\u4EE5\u4E0B\u4E24\u79CD\u8BED\u6CD5\u53EF\u4EE5\u68C0\u67E5\u5B57\u7B26\u4E32\u5185\u90E8\uFF0C\u662F\u5426\u5339\u914D\u7ED9\u5B9A\u7684\u6A21\u5F0F\u3002\u5982\u679C\u5339\u914D\u6210\u529F\uFF0C\u5C31\u5220\u9664\u5339\u914D\u7684\u90E8\u5206\uFF0C\u6362\u6210\u5176\u4ED6\u7684\u5B57\u7B26\u4E32\u8FD4\u56DE\u3002\u539F\u59CB\u53D8\u91CF\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C pattern \u5339\u914D\u53D8\u91CF variable \u7684\u4E00\u90E8\u5206\uFF0C</span>
<span class="token comment"># \u6700\u957F\u5339\u914D\uFF08\u8D2A\u5A6A\u5339\u914D\uFF09\u7684\u90A3\u90E8\u5206\u88AB string \u66FF\u6362\uFF0C\u4F46\u4EC5\u66FF\u6362\u7B2C\u4E00\u4E2A\u5339\u914D</span>
<span class="token variable">\${variable<span class="token operator">/</span>pattern<span class="token operator">/</span>string}</span>

<span class="token comment"># \u5982\u679C pattern \u5339\u914D\u53D8\u91CF variable \u7684\u4E00\u90E8\u5206\uFF0C</span>
<span class="token comment"># \u6700\u957F\u5339\u914D\uFF08\u8D2A\u5A6A\u5339\u914D\uFF09\u7684\u90A3\u90E8\u5206\u88AB string \u66FF\u6362\uFF0C\u6240\u6709\u5339\u914D\u90FD\u66FF\u6362</span>
<span class="token variable">\${variable<span class="token operator">/</span><span class="token operator">/</span>pattern<span class="token operator">/</span>string}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4E24\u79CD\u8BED\u6CD5\u90FD\u662F\u6700\u957F\u5339\u914D\uFF08\u8D2A\u5A6A\u5339\u914D\uFF09\u4E0B\u7684\u66FF\u6362\uFF0C\u533A\u522B\u662F\u524D\u4E00\u4E2A\u8BED\u6CD5\u4EC5\u4EC5\u66FF\u6362\u7B2C\u4E00\u4E2A\u5339\u914D\uFF0C\u540E\u4E00\u4E2A\u8BED\u6CD5\u66FF\u6362\u6240\u6709\u5339\u914D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/cam/foo/foo.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">/</span>foo<span class="token operator">/</span>bar}</span>
/home/cam/bar/foo.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">/</span><span class="token operator">/</span>foo<span class="token operator">/</span>bar}</span>
/home/cam/bar/bar.name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u524D\u4E00\u4E2A\u547D\u4EE4\u53EA\u66FF\u6362\u4E86\u7B2C\u4E00\u4E2A<code>foo</code>\uFF0C\u540E\u4E00\u4E2A\u547D\u4EE4\u5C06\u4E24\u4E2A<code>foo</code>\u90FD\u66FF\u6362\u4E86\u3002</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u5C06\u5206\u9694\u7B26\u4ECE<code>:</code>\u6362\u6210\u6362\u884C\u7B26\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">\${<span class="token environment constant">PATH</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">:</span><span class="token operator">/</span>&#39;\\n&#39;}</span>
/usr/local/bin
/usr/bin
/bin
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>echo</code>\u547D\u4EE4\u7684<code>-e</code>\u53C2\u6570\uFF0C\u8868\u793A\u5C06\u66FF\u6362\u540E\u7684\u5B57\u7B26\u4E32\u7684<code>\\n</code>\u5B57\u7B26\uFF0C\u89E3\u91CA\u4E3A\u6362\u884C\u7B26\u3002</p><p>\u6A21\u5F0F\u90E8\u5206\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">phone</span><span class="token operator">=</span><span class="token string">&quot;555-456-1414&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">/</span>5?4<span class="token operator">/</span>-}</span>
<span class="token number">55</span>-56-1414
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u5C06<code>5-4</code>\u66FF\u6362\u6210<code>-</code>\u3002</p><p>\u5982\u679C\u7701\u7565\u4E86<code>string</code>\u90E8\u5206\uFF0C\u90A3\u4E48\u5C31\u76F8\u5F53\u4E8E\u5339\u914D\u7684\u90E8\u5206\u66FF\u6362\u6210\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5373\u5220\u9664\u5339\u914D\u7684\u90E8\u5206\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/cam/foo/foo.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">/</span>.*<span class="token operator">/</span>}</span>
/home/cam/foo/foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u7B2C\u4E8C\u4E2A\u659C\u6760\u540E\u9762\u7684<code>string</code>\u90E8\u5206\u7701\u7565\u4E86\uFF0C\u6240\u4EE5\u6A21\u5F0F<code>.*</code>\u5339\u914D\u7684\u90E8\u5206<code>.name</code>\u88AB\u5220\u9664\u540E\u8FD4\u56DE\u3002</p><p>\u524D\u9762\u63D0\u5230\u8FC7\uFF0C\u8FD9\u4E2A\u8BED\u6CD5\u8FD8\u6709\u4E24\u79CD\u6269\u5C55\u5F62\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6A21\u5F0F\u5FC5\u987B\u51FA\u73B0\u5728\u5B57\u7B26\u4E32\u7684\u5F00\u5934</span>
<span class="token variable">\${variable<span class="token operator">/</span><span class="token operator">#</span>pattern<span class="token operator">/</span>string}</span>

<span class="token comment"># \u6A21\u5F0F\u5FC5\u987B\u51FA\u73B0\u5728\u5B57\u7B26\u4E32\u7684\u7ED3\u5C3E</span>
<span class="token variable">\${variable<span class="token operator">/</span><span class="token operator">%</span>pattern<span class="token operator">/</span>string}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6539\u53D8\u5927\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#\u6539\u53D8\u5927\u5C0F\u5199" aria-hidden="true">#</a> \u6539\u53D8\u5927\u5C0F\u5199</h2><p>\u4E0B\u9762\u7684\u8BED\u6CD5\u53EF\u4EE5\u6539\u53D8\u53D8\u91CF\u7684\u5927\u5C0F\u5199\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8F6C\u4E3A\u5927\u5199</span>
<span class="token variable">\${varname<span class="token operator">^^</span>}</span>

<span class="token comment"># \u8F6C\u4E3A\u5C0F\u5199</span>
<span class="token variable">\${varname<span class="token operator">,,</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>heLLo
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">^^</span>}</span>
HELLO
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">,,</span>}</span>
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,85),i=[o];function p(c,r){return a(),n("div",null,i)}const t=s(l,[["render",p],["__file","string.html.vue"]]);export{t as default};
