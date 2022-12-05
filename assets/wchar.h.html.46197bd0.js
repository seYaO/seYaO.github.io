import{_ as n,o as s,c as a,e as t}from"./app.3b2d76f3.js";const c={},i=t(`<h1 id="wchar-h" tabindex="-1"><a class="header-anchor" href="#wchar-h" aria-hidden="true">#</a> wchar.h</h1><p>\u5BBD\u5B57\u7B26\u4F7F\u7528\u4E24\u4E2A\u6216\u56DB\u4E2A\u5B57\u8282\u8868\u793A\u4E00\u4E2A\u5B57\u7B26\uFF0C\u5BFC\u81F4 C \u8BED\u8A00\u5E38\u89C4\u7684\u5B57\u7B26\u5904\u7406\u51FD\u6570\u90FD\u4F1A\u5931\u6548\u3002wchar.h \u5B9A\u4E49\u4E86\u8BB8\u591A\u5BBD\u5B57\u7B26\u4E13\u7528\u7684\u5904\u7406\u51FD\u6570\u3002</p><h2 id="\u7C7B\u578B\u522B\u540D\u548C\u5B8F" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u522B\u540D\u548C\u5B8F" aria-hidden="true">#</a> \u7C7B\u578B\u522B\u540D\u548C\u5B8F</h2><p>wchar.h \u5B9A\u4E49\u4E86\u4E00\u4E2A\u7C7B\u578B\u522B\u540D wint_t\uFF0C\u8868\u793A\u5BBD\u5B57\u7B26\u5BF9\u5E94\u6574\u6570\u503C\u3002</p><p>wchar.h \u8FD8\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5B8F WEOF\uFF0C\u8868\u793A\u6587\u4EF6\u7ED3\u675F\u5B57\u7B26 EOF \u7684\u5BBD\u5B57\u7B26\u7248\u3002</p><h2 id="btowc-wctob" tabindex="-1"><a class="header-anchor" href="#btowc-wctob" aria-hidden="true">#</a> btowc()\uFF0Cwctob()</h2><p><code>btowc()</code>\u5C06\u5355\u5B57\u8282\u5B57\u7B26\u8F6C\u6362\u4E3A\u5BBD\u5B57\u7B26\uFF0C<code>wctob()</code>\u5C06\u5BBD\u5B57\u7B26\u8F6C\u6362\u4E3A\u5355\u5B57\u8282\u5B57\u7B26\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token class-name">wint_t</span> <span class="token function">btowc</span><span class="token punctuation">(</span><span class="token keyword">int</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">wctob</span><span class="token punctuation">(</span><span class="token class-name">wint_t</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>btowc()</code>\u8FD4\u56DE\u4E00\u4E2A\u5BBD\u5B57\u7B26\u3002\u5982\u679C\u53C2\u6570\u662F EOF\uFF0C\u6216\u8F6C\u6362\u5931\u8D25\uFF0C\u5219\u8FD4\u56DE WEOF\u3002</p><p><code>wctob()</code>\u8FD4\u56DE\u4E00\u4E2A\u5355\u5B57\u8282\u5B57\u7B26\u3002\u5982\u679C\u53C2\u6570\u662F WEOF\uFF0C\u6216\u8005\u53C2\u6570\u5BBD\u5B57\u7B26\u65E0\u6CD5\u5BF9\u5E94\u5355\u4E2A\u7684\u5355\u5B57\u8282\u5B57\u7B26\uFF0C\u5219\u8FD4\u56DE EOF\u3002</p><p>\u4E0B\u9762\u662F\u7528\u6CD5\u793A\u4F8B\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token class-name">wint_t</span> wc <span class="token operator">=</span> <span class="token function">btowc</span><span class="token punctuation">(</span><span class="token char">&#39;B&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">// \u8F93\u51FA\u5BBD\u5B57\u7B26 B</span>
<span class="token function">wprintf</span><span class="token punctuation">(</span>L<span class="token string">&quot;Wide character: %lc\\n&quot;</span><span class="token punctuation">,</span> wc<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">unsigned</span> <span class="token keyword">char</span> c <span class="token operator">=</span> <span class="token function">wctob</span><span class="token punctuation">(</span>wc<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8F93\u51FA\u5355\u5B57\u8282\u5B57\u7B26 B</span>
<span class="token function">wprintf</span><span class="token punctuation">(</span>L<span class="token string">&quot;Single-byte character: %c\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fwide" tabindex="-1"><a class="header-anchor" href="#fwide" aria-hidden="true">#</a> fwide()</h2><p><code>fwide()</code>\u7528\u6765\u8BBE\u7F6E\u4E00\u4E2A\u5B57\u8282\u6D41\u662F\u5BBD\u5B57\u7B26\u6D41\uFF0C\u8FD8\u662F\u591A\u5B57\u8282\u5B57\u7B26\u6D41\u3002</p><p>\u5982\u679C\u4F7F\u7528\u5BBD\u5B57\u7B26\u4E13\u7528\u51FD\u6570\u5904\u7406\u5B57\u8282\u6D41\uFF0C\u5C31\u4F1A\u9ED8\u8BA4\u8BBE\u7F6E\u5B57\u8282\u6D41\u4E3A\u5BBD\u5B57\u7B26\u6D41\uFF0C\u5426\u5219\u5C31\u9700\u8981\u4F7F\u7528<code>fwide()</code>\u663E\u5F0F\u8BBE\u7F6E\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">fwide</span><span class="token punctuation">(</span>FILE<span class="token operator">*</span> stream<span class="token punctuation">,</span> <span class="token keyword">int</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B83\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6587\u4EF6\u6307\u9488\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u5B57\u8282\u6D41\u6A21\u5F0F\uFF0C\u6709\u4E09\u79CD\u9009\u62E9\u3002</p><ul><li>0\uFF1A\u5B57\u8282\u6D41\u6A21\u5F0F\u4FDD\u6301\u539F\u6837\u3002</li><li>-1\uFF08\u6216\u5176\u4ED6\u8D1F\u503C\uFF09\uFF1A\u8BBE\u4E3A\u591A\u5B57\u8282\u5B57\u7B26\u6D41\u3002</li><li>1\uFF08\u6216\u5176\u4ED6\u6B63\u503C\uFF09\uFF1A\u8BBE\u4E3A\u5BBD\u5B57\u7B26\u6D41\u3002</li></ul><p><code>fwide()</code>\u7684\u8FD4\u56DE\u503C\u4E5F\u5206\u6210\u4E09\u79CD\u60C5\u51B5\uFF1A\u5982\u679C\u662F\u5BBD\u5B57\u7B26\u6D41\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6B63\u503C\uFF1B\u5982\u679C\u662F\u591A\u5B57\u8282\u5B57\u7B26\u6D41\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u8D1F\u503C\uFF1B\u5982\u679C\u662F\u666E\u901A\u5B57\u7B26\u6D41\uFF0C\u8FD4\u56DE<code>0</code>\u3002</p><p>\u4E00\u65E6\u8BBE\u7F6E\u4E86\u5B57\u8282\u6D41\u6A21\u5F0F\uFF0C\u5C31\u65E0\u6CD5\u518D\u66F4\u6539\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;wchar.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">wprintf</span><span class="token punctuation">(</span>L<span class="token string">&quot;Hello world!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> mode <span class="token operator">=</span> <span class="token function">fwide</span><span class="token punctuation">(</span><span class="token constant">stdout</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">wprintf</span><span class="token punctuation">(</span>L<span class="token string">&quot;Stream is %ls-oriented\\n&quot;</span><span class="token punctuation">,</span> mode <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> L<span class="token string">&quot;byte&quot;</span> <span class="token operator">:</span> L<span class="token string">&quot;wide&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>wprintf()</code>\u5C06\u5B57\u8282\u6D41\u9690\u5F0F\u8BBE\u4E3A\u5BBD\u5B57\u7B26\u6A21\u5F0F\uFF0C\u6240\u4EE5<code>fwide(stdout, 0)</code>\u7684\u8FD4\u56DE\u503C\u5927\u4E8E\u96F6\u3002</p><h2 id="\u5BBD\u5B57\u7B26\u4E13\u7528\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5BBD\u5B57\u7B26\u4E13\u7528\u51FD\u6570" aria-hidden="true">#</a> \u5BBD\u5B57\u7B26\u4E13\u7528\u51FD\u6570</h2><p>\u4E0B\u9762\u8FD9\u4E9B\u51FD\u6570\u57FA\u672C\u90FD\u662F stdio.h \u91CC\u9762\u7684\u5B57\u7B26\u5904\u7406\u51FD\u6570\u7684\u5BBD\u5B57\u7B26\u7248\u672C\uFF0C\u5FC5\u987B\u4F7F\u7528\u8FD9\u4E9B\u51FD\u6570\u6765\u64CD\u4F5C\u5BBD\u5B57\u7B26\u3002</p><ul><li>fgetwc() \u4ECE\u5BBD\u5B57\u7B26\u6D41\u4E2D\u83B7\u53D6\u5BBD\u5B57\u7B26\uFF0C\u5BF9\u5E94 fgetc()\u3002</li><li>fgetws() \u4ECE\u5BBD\u5B57\u7B26\u6D41\u4E2D\u8BFB\u53D6\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 fgets()\u3002</li><li>fputwc() \u5C06\u5BBD\u5B57\u7B26\u5199\u5165\u5BBD\u5B57\u7B26\u6D41\uFF0C\u5BF9\u5E94 fputc()\u3002</li><li>fputws() \u5C06\u5BBD\u5B57\u7B26\u4E32\u5199\u5165\u5BBD\u5B57\u7B26\u6D41\uFF0C\u5BF9\u5E94 fputs()\u3002</li><li>fwprintf() \u683C\u5F0F\u5316\u5BBD\u8F93\u51FA\u5230\u5BBD\u5B57\u7B26\u6D41\uFF0C\u5BF9\u5E94 fprintf()\u3002</li><li>fwscanf() \u6765\u81EA\u5BBD\u5B57\u7B26\u6D41\u7684\u683C\u5F0F\u5316\u5BBD\u5B57\u7B26\u8F93\u5165\uFF0C\u5BF9\u5E94 fscanf()\u3002</li><li>getwchar() \u4ECE stdin \u83B7\u53D6\u4E00\u4E2A\u5BBD\u5B57\u7B26\uFF0C\u5BF9\u5E94 getchar()\u3002</li><li>getwc() \u4ECE stdin \u83B7\u53D6\u4E00\u4E2A\u5BBD\u5B57\u7B26\uFF0C\u5BF9\u5E94 getc()\u3002</li><li>putwchar() \u5199\u4E00\u4E2A\u5BBD\u5B57\u7B26\u5230 stdout\uFF0C\u5BF9\u5E94 putchar()\u3002</li><li>putwc() \u5199\u4E00\u4E2A\u5BBD\u5B57\u7B26\u5230 stdout\uFF0C\u5BF9\u5E94 putc()\u3002</li><li>swprintf() \u683C\u5F0F\u5316\u5BBD\u8F93\u51FA\u5230\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 sprintf()\u3002</li><li>swscanf() \u6765\u81EA\u5BBD\u5B57\u7B26\u4E32\u7684\u683C\u5F0F\u5316\u5BBD\u8F93\u5165\uFF0C\u5BF9\u5E94 sscanf()\u3002</li><li>ungetwc() \u5C06\u5BBD\u5B57\u7B26\u63A8\u56DE\u8F93\u5165\u6D41\uFF0C\u5BF9\u5E94 ungetc()\u3002</li><li>vfwprintf() \u53EF\u53D8\u53C2\u6570\u7684\u683C\u5F0F\u5316\u5BBD\u5B57\u7B26\u8F93\u51FA\u5230\u5BBD\u5B57\u7B26\u6D41\uFF0C\u5BF9\u5E94 vfprintf()\u3002</li><li>vfwscanf() \u6765\u81EA\u5BBD\u5B57\u7B26\u6D41\u7684\u53EF\u53D8\u53C2\u6570\u683C\u5F0F\u5316\u5BBD\u5B57\u7B26\u8F93\u5165\uFF0C\u5BF9\u5E94 vfscanf()\u3002</li><li>vswprintf() \u53EF\u53D8\u53C2\u6570\u7684\u683C\u5F0F\u5316\u5BBD\u5B57\u7B26\u8F93\u51FA\u5230\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 vswprintf()\u3002</li><li>vswscanf() \u6765\u81EA\u5BBD\u5B57\u7B26\u4E32\u7684\u53EF\u53D8\u53C2\u6570\u683C\u5F0F\u5316\u5BBD\u5B57\u7B26\u8F93\u5165\uFF0C\u5BF9\u5E94 vsscanf()\u3002</li><li>vwprintf() \u53EF\u53D8\u53C2\u6570\u683C\u5F0F\u5316\u5BBD\u5B57\u7B26\u8F93\u51FA\uFF0C\u5BF9\u5E94 vprintf()\u3002</li><li>vwscanf() \u53EF\u53D8\u53C2\u6570\u7684\u683C\u5F0F\u5316\u5BBD\u5B57\u7B26\u8F93\u5165\uFF0C\u5BF9\u5E94 vscanf()\u3002</li><li>wcscat() \u5371\u9669\u5730\u8FDE\u63A5\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 strcat()\u3002</li><li>wcschr() \u5728\u5BBD\u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u5BBD\u5B57\u7B26\uFF0C\u5BF9\u5E94 strchr()\u3002</li><li>wcscmp() \u6BD4\u8F83\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 strcmp()\u3002</li><li>wcscoll() \u6BD4\u8F83\u4E24\u4E2A\u8003\u8651\u8BED\u8A00\u73AF\u5883\u7684\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 strcoll()\u3002</li><li>wcscpy() \u5371\u9669\u5730\u590D\u5236\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 strcpy()\u3002</li><li>wcscspn() \u4E0D\u662F\u4ECE\u5BBD\u5B57\u7B26\u4E32\u524D\u9762\u5F00\u59CB\u8BA1\u7B97\u5B57\u7B26\uFF0C\u5BF9\u5E94 strcspn()\u3002</li><li>wcsftime() \u683C\u5F0F\u5316\u7684\u65E5\u671F\u548C\u65F6\u95F4\u8F93\u51FA\uFF0C\u5BF9\u5E94 strftime()\u3002</li><li>wcslen() \u8FD4\u56DE\u5BBD\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5BF9\u5E94 strlen()\u3002</li><li>wcsncat() \u66F4\u5B89\u5168\u5730\u8FDE\u63A5\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 strncat()\u3002</li><li>wcsncmp() \u6BD4\u8F83\u5BBD\u5B57\u7B26\u4E32\uFF0C\u957F\u5EA6\u6709\u9650\uFF0C\u5BF9\u5E94 strncmp()\u3002</li><li>wcsncpy() \u66F4\u5B89\u5168\u5730\u590D\u5236\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 strncpy()\u3002</li><li>wcspbrk() \u5728\u5BBD\u5B57\u7B26\u4E32\u4E2D\u641C\u7D22\u4E00\u7EC4\u5BBD\u5B57\u7B26\u4E2D\u7684\u4E00\u4E2A\uFF0C\u5BF9\u5E94 strpbrk()\u3002</li><li>wcsrchr() \u4ECE\u672B\u5C3E\u5F00\u59CB\u5728\u5BBD\u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u5BBD\u5B57\u7B26\uFF0C\u5BF9\u5E94 strrchr()\u3002</li><li>wcsspn() \u4ECE\u5BBD\u5B57\u7B26\u4E32\u524D\u9762\u7684\u96C6\u5408\u4E2D\u8BA1\u7B97\u5B57\u7B26\uFF0C\u5BF9\u5E94 strspn()\u3002</li><li>wcsstr() \u5728\u53E6\u4E00\u4E2A\u5BBD\u5B57\u7B26\u4E32\u4E2D\u627E\u5230\u4E00\u4E2A\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 strstr()\u3002</li><li>wcstod() \u5C06\u5BBD\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A double\uFF0C\u5BF9\u5E94 strtod()\u3002</li><li>wcstof() \u5C06\u5BBD\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A float\uFF0C\u5BF9\u5E94 strtof()\u3002</li><li>wcstok() \u6807\u8BB0\u4E00\u4E2A\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 strtok()\u3002</li><li>wcstold() \u5C06\u5BBD\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A long double\uFF0C\u5BF9\u5E94 strtold()\u3002</li><li>wcstoll() \u5C06\u5BBD\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A long long\uFF0C\u5BF9\u5E94 strtoll()\u3002</li><li>wcstol() \u5C06\u5BBD\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A long\uFF0C\u5BF9\u5E94 strtol()\u3002</li><li>wcstoull() \u5C06\u5BBD\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A unsigned long long\uFF0C\u5BF9\u5E94 strtoull()\u3002</li><li>wcstoul() \u5C06\u5BBD\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A unsigned long\uFF0C\u5BF9\u5E94 strtoul()\u3002</li><li>wcsxfrm() \u8F6C\u6362\u5BBD\u5B57\u7B26\u4E32\u4EE5\u6839\u636E\u8BED\u8A00\u73AF\u5883\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5BF9\u5E94 strxfrm()\u3002</li><li>wmemcmp() \u6BD4\u8F83\u5185\u5B58\u4E2D\u7684\u5BBD\u5B57\u7B26\uFF0C\u5BF9\u5E94 memcmp()\u3002</li><li>wmemcpy() \u590D\u5236\u5BBD\u5B57\u7B26\u5185\u5B58\uFF0C\u5BF9\u5E94 memcpy()\u3002</li><li>wmemmove() \u590D\u5236\u5BBD\u5B57\u7B26\u5185\u5B58\uFF0C\u53EF\u80FD\u91CD\u53E0\uFF0C\u5BF9\u5E94 memmove()\u3002</li><li>wprintf() \u683C\u5F0F\u5316\u5BBD\u8F93\u51FA\uFF0C\u5BF9\u5E94 printf()\u3002</li><li>wscanf() \u683C\u5F0F\u5316\u5BBD\u8F93\u5165\uFF0C\u5BF9\u5E94 scanf()\u3002</li></ul><h2 id="\u591A\u5B57\u8282\u5B57\u7B26\u4E13\u7528\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u591A\u5B57\u8282\u5B57\u7B26\u4E13\u7528\u51FD\u6570" aria-hidden="true">#</a> \u591A\u5B57\u8282\u5B57\u7B26\u4E13\u7528\u51FD\u6570</h2><p>wchar.h \u4E5F\u5B9A\u4E49\u4E86\u4E00\u4E9B\u591A\u5B57\u8282\u5B57\u7B26\u7684\u4E13\u7528\u51FD\u6570\u3002</p><ul><li>mbsinit() \u5224\u65AD mbstate_t \u662F\u5426\u5904\u4E8E\u521D\u59CB\u8F6C\u6362\u72B6\u6001\u3002</li><li>mbrlen() \u7ED9\u5B9A\u8F6C\u6362\u72B6\u6001\u65F6\uFF0C\u8BA1\u7B97\u591A\u5B57\u8282\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u6570\uFF0C\u5BF9\u5E94 mblen()\u3002</li><li>mbrtowc() \u7ED9\u5B9A\u8F6C\u6362\u72B6\u6001\u65F6\uFF0C\u5C06\u591A\u5B57\u8282\u5B57\u7B26\u8F6C\u6362\u4E3A\u5BBD\u5B57\u7B26\uFF0C\u5BF9\u5E94 mbtowc()\u3002</li><li>wctombr() \u7ED9\u5B9A\u8F6C\u6362\u72B6\u6001\u65F6\uFF0C\u5C06\u5BBD\u5B57\u7B26\u8F6C\u6362\u4E3A\u591A\u5B57\u8282\u5B57\u7B26\uFF0C\u5BF9\u5E94 wctomb()\u3002</li><li>mbsrtowcs() \u7ED9\u5B9A\u8F6C\u6362\u72B6\u6001\u65F6\uFF0C\u5C06\u591A\u5B57\u8282\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5BBD\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 mbstowcs()\u3002</li><li>wcsrtombs() \u7ED9\u5B9A\u8F6C\u6362\u72B6\u6001\u65F6\uFF0C\u5C06\u5BBD\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u591A\u5B57\u8282\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94 wcstombs()\u3002</li></ul>`,28),e=[i];function l(p,o){return s(),a("div",null,e)}const u=n(c,[["render",l],["__file","wchar.h.html.vue"]]);export{u as default};