import{_ as n,o as s,c as a,e}from"./app.3b2d76f3.js";const o={},c=e(`<h1 id="\u547D\u4EE4\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u73AF\u5883" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u73AF\u5883</h1><h2 id="\u547D\u4EE4\u884C\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u53C2\u6570" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u53C2\u6570</h2><p>C \u8BED\u8A00\u7A0B\u5E8F\u53EF\u4EE5\u4ECE\u547D\u4EE4\u884C\u63A5\u6536\u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./foo hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u7A0B\u5E8F<code>foo</code>\u63A5\u6536\u4E86\u4E24\u4E2A\u547D\u4EE4\u884C\u53C2\u6570<code>hello</code>\u548C<code>world</code>\u3002</p><p>\u7A0B\u5E8F\u5185\u90E8\u600E\u4E48\u62FF\u5230\u547D\u4EE4\u884C\u53C2\u6570\u5462\uFF1FC \u8BED\u8A00\u4F1A\u628A\u547D\u4EE4\u884C\u8F93\u5165\u7684\u5185\u5BB9\uFF0C\u653E\u5728\u4E00\u4E2A\u6570\u7EC4\u91CC\u9762\u3002<code>main()</code>\u51FD\u6570\u7684\u53C2\u6570\u53EF\u4EE5\u63A5\u6536\u5230\u8FD9\u4E2A\u6570\u7EC4\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> argc<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;arg %d: %s\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> argv<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>main()</code>\u51FD\u6570\u6709\u4E24\u4E2A\u53C2\u6570<code>argc</code>\uFF08argument count\uFF09\u548C<code>argv</code>\uFF08argument variable\uFF09\u3002\u8FD9\u4E24\u4E2A\u53C2\u6570\u7684\u540D\u5B57\u53EF\u4EE5\u4EFB\u610F\u53D6\uFF0C\u4F46\u662F\u4E00\u822C\u6765\u8BF4\uFF0C\u7EA6\u5B9A\u4FD7\u6210\u5C31\u662F\u4F7F\u7528\u8FD9\u4E24\u4E2A\u8BCD\u3002</p><p>\u7B2C\u4E00\u4E2A\u53C2\u6570<code>argc</code>\u662F\u547D\u4EE4\u884C\u53C2\u6570\u7684\u6570\u91CF\uFF0C\u7531\u4E8E\u7A0B\u5E8F\u540D\u4E5F\u88AB\u8BA1\u7B97\u5728\u5185\uFF0C\u6240\u4EE5\u4E25\u683C\u5730\u8BF4<code>argc</code>\u662F\u53C2\u6570\u6570\u91CF + 1\u3002</p><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570<code>argv</code>\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4FDD\u5B58\u4E86\u6240\u6709\u7684\u547D\u4EE4\u884C\u8F93\u5165\uFF0C\u5B83\u7684\u6BCF\u4E2A\u6210\u5458\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6307\u9488\u3002</p><p>\u4EE5<code>./foo hello world</code>\u4E3A\u4F8B\uFF0C<code>argc</code>\u662F3\uFF0C\u8868\u793A\u547D\u4EE4\u884C\u8F93\u5165\u6709\u4E09\u4E2A\u7EC4\u6210\u90E8\u5206\uFF1A<code>./foo</code>\u3001<code>hello</code>\u3001<code>world</code>\u3002\u6570\u7EC4<code>argv</code>\u7528\u6765\u83B7\u53D6\u8FD9\u4E9B\u8F93\u5165\uFF0C<code>argv[0]</code>\u662F\u7A0B\u5E8F\u540D<code>./foo</code>\uFF0C<code>argv[1]</code>\u662F<code>hello</code>\uFF0C<code>argv[2]</code>\u662F<code>world</code>\u3002\u4E00\u822C\u6765\u8BF4\uFF0C<code>argv[1]</code>\u5230<code>argv[argc - 1]</code>\u4F9D\u6B21\u662F\u547D\u4EE4\u884C\u7684\u6240\u6709\u53C2\u6570\u3002<code>argv[argc]</code>\u5219\u662F\u4E00\u4E2A\u7A7A\u6307\u9488 NULL\u3002</p><p>\u7531\u4E8E\u5B57\u7B26\u4E32\u6307\u9488\u53EF\u4EE5\u770B\u6210\u662F\u5B57\u7B26\u6570\u7EC4\uFF0C\u6240\u4EE5\u4E0B\u9762\u4E09\u79CD\u5199\u6CD5\u662F\u7B49\u4EF7\u7684\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// \u5199\u6CD5\u4E00</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// \u5199\u6CD5\u4E8C</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span>

<span class="token comment">// \u5199\u6CD5\u4E09</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u4E00\u65B9\u9762\uFF0C\u6BCF\u4E2A\u547D\u4EE4\u884C\u53C2\u6570\u65E2\u53EF\u4EE5\u5199\u6210\u6570\u7EC4\u5F62\u5F0F<code>argv[i]</code>\uFF0C\u4E5F\u53EF\u4EE5\u5199\u6210\u6307\u9488\u5F62\u5F0F<code>*(argv + i)</code>\u3002</p><p>\u5229\u7528<code>argc</code>\uFF0C\u53EF\u4EE5\u9650\u5B9A\u51FD\u6570\u53EA\u80FD\u6709\u591A\u5C11\u4E2A\u53C2\u6570\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">!=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;usage: mult x y\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>argc</code>\u4E0D\u7B49\u4E8E<code>3</code>\u5C31\u4F1A\u62A5\u9519\uFF0C\u8FD9\u6837\u5C31\u9650\u5B9A\u4E86\u7A0B\u5E8F\u5FC5\u987B\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C\u624D\u80FD\u8FD0\u884C\u3002</p><p>\u53E6\u5916\uFF0C<code>argv</code>\u6570\u7EC4\u7684\u6700\u540E\u4E00\u4E2A\u6210\u5458\u662F NULL \u6307\u9488\uFF08<code>argv[argc] == NULL</code>\uFF09\u3002\u6240\u4EE5\uFF0C\u53C2\u6570\u7684\u904D\u5386\u4E5F\u53EF\u4EE5\u5199\u6210\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> p <span class="token operator">=</span> argv<span class="token punctuation">;</span> <span class="token operator">*</span>p <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> p<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;arg: %s\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u6307\u9488<code>p</code>\u4F9D\u6B21\u79FB\u52A8\uFF0C\u6307\u5411<code>argv</code>\u7684\u6BCF\u4E2A\u6210\u5458\uFF0C\u4E00\u65E6\u79FB\u5230\u7A7A\u6307\u9488 NULL\uFF0C\u5C31\u8868\u793A\u904D\u5386\u7ED3\u675F\u3002\u7531\u4E8E<code>argv</code>\u7684\u5730\u5740\u662F\u56FA\u5B9A\u7684\uFF0C\u4E0D\u80FD\u6267\u884C\u81EA\u589E\u8FD0\u7B97\uFF08<code>argv++</code>\uFF09\uFF0C\u6240\u4EE5\u5FC5\u987B\u901A\u8FC7\u4E00\u4E2A\u4E2D\u95F4\u53D8\u91CF<code>p</code>\uFF0C\u5B8C\u6210\u904D\u5386\u64CD\u4F5C\u3002</p><h2 id="\u9000\u51FA\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u9000\u51FA\u72B6\u6001" aria-hidden="true">#</a> \u9000\u51FA\u72B6\u6001</h2><p>C \u8BED\u8A00\u89C4\u5B9A\uFF0C\u5982\u679C<code>main()</code>\u51FD\u6570\u6CA1\u6709<code>return</code>\u8BED\u53E5\uFF0C\u90A3\u4E48\u7ED3\u675F\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u4F1A\u6DFB\u52A0\u4E00\u53E5<code>return 0</code>\uFF0C\u5373\u8FD4\u56DE\u6574\u6570<code>0</code>\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48<code>main()</code>\u8BED\u53E5\u901A\u5E38\u7EA6\u5B9A\u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\u503C\uFF0C\u5E76\u4E14\u8FD4\u56DE\u6574\u6570<code>0</code>\u8868\u793A\u7A0B\u5E8F\u8FD0\u884C\u6210\u529F\u3002\u5982\u679C\u8FD4\u56DE\u975E\u96F6\u503C\uFF0C\u5C31\u8868\u793A\u7A0B\u5E8F\u8FD0\u884C\u51FA\u4E86\u95EE\u9898\u3002</p><p>Bash \u7684\u73AF\u5883\u53D8\u91CF<code>$?</code>\u53EF\u4EE5\u7528\u6765\u8BFB\u53D6\u4E0A\u4E00\u4E2A\u547D\u4EE4\u7684\u8FD4\u56DE\u503C\uFF0C\u4ECE\u800C\u77E5\u9053\u662F\u5426\u8FD0\u884C\u6210\u529F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./foo hello world
$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>echo $?</code>\u7528\u6765\u6253\u5370\u73AF\u5883\u53D8\u91CF<code>$?</code>\u7684\u503C\uFF0C\u8BE5\u503C\u4E3A<code>0</code>\uFF0C\u5C31\u8868\u793A\u4E0A\u4E00\u6761\u547D\u4EE4\u8FD0\u884C\u6210\u529F\uFF0C\u5426\u5219\u5C31\u662F\u8FD0\u884C\u5931\u8D25\u3002</p><p>\u6CE8\u610F\uFF0C\u53EA\u6709<code>main()</code>\u4F1A\u9ED8\u8BA4\u6DFB\u52A0<code>return 0</code>\uFF0C\u5176\u4ED6\u51FD\u6570\u90FD\u6CA1\u6709\u8FD9\u4E2A\u673A\u5236\u3002</p><h2 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h2><p>C \u8BED\u8A00\u63D0\u4F9B\u4E86<code>getenv()</code>\u51FD\u6570\uFF08\u539F\u578B\u5728<code>stdlib.h</code>\uFF09\u7528\u6765\u8BFB\u53D6\u547D\u4EE4\u884C\u73AF\u5883\u53D8\u91CF\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">char</span><span class="token operator">*</span> val <span class="token operator">=</span> <span class="token function">getenv</span><span class="token punctuation">(</span><span class="token string">&quot;HOME&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Cannot find the HOME environment variable\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Value: %s\\n&quot;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>getenv(&quot;HOME&quot;)</code>\u7528\u6765\u83B7\u53D6\u547D\u4EE4\u884C\u7684\u73AF\u5883\u53D8\u91CF<code>$HOME</code>\uFF0C\u5982\u679C\u8FD9\u4E2A\u53D8\u91CF\u4E3A\u7A7A\uFF08<code>NULL</code>\uFF09\uFF0C\u5219\u7A0B\u5E8F\u62A5\u9519\u8FD4\u56DE\u3002</p>`,30),p=[c];function t(i,l){return s(),a("div",null,p)}const u=n(o,[["render",t],["__file","cli.html.vue"]]);export{u as default};