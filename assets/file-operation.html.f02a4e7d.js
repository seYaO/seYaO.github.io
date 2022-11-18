import{_ as n,o as e,c as s,e as a}from"./app.3b2d76f3.js";const i={},d=a(`<h1 id="\u6587\u4EF6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u64CD\u4F5C" aria-hidden="true">#</a> \u6587\u4EF6\u64CD\u4F5C</h1><h2 id="cp" tabindex="-1"><a class="header-anchor" href="#cp" aria-hidden="true">#</a> cp</h2><p><code>cp</code>\u547D\u4EE4\u7528\u4E8E\u5C06\u6587\u4EF6\uFF08\u6216\u76EE\u5F55\uFF09\u62F7\u8D1D\u5230\u76EE\u7684\u5730\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u62F7\u8D1D\u5355\u4E2A\u6587\u4EF6</span>
$ <span class="token function">cp</span> <span class="token builtin class-name">source</span> dest

<span class="token comment"># \u62F7\u8D1D\u591A\u4E2A\u6587\u4EF6</span>
$ <span class="token function">cp</span> source1 source2 source3 dest

<span class="token comment"># -i \u76EE\u7684\u5730\u6709\u540C\u540D\u6587\u4EF6\u65F6\u4F1A\u63D0\u793A\u786E\u8BA4</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-i</span> file1 file2

<span class="token comment"># -r \u9012\u5F52\u62F7\u8D1D\uFF0C\u5C06dir1\u62F7\u8D1D\u5230dir2\uFF0C\u5B8C\u6210\u540Edir2\u751F\u6210\u4E00\u4E2A\u5B50\u76EE\u5F55dir1</span>
<span class="token comment"># dir2\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5C06\u88AB\u521B\u5EFA</span>
<span class="token comment"># \u62F7\u8D1D\u76EE\u5F55\u65F6\uFF0C\u8BE5\u53C2\u6570\u662F\u5FC5\u9700\u7684</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-r</span> dir1 dir2

<span class="token comment"># -u --update \u53EA\u62F7\u8D1D\u76EE\u7684\u5730\u6CA1\u6709\u7684\u6587\u4EF6\uFF0C\u6216\u8005\u6BD4\u76EE\u7684\u5730\u540C\u540D\u6587\u4EF6\u66F4\u65B0\u7684\u6587\u4EF6</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-u</span> *.html destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6\u53C2\u6570</p><ul><li><code>-a</code> \u62F7\u8D1D\u65F6\u4FDD\u7559\u6240\u6709\u5C5E\u6027\uFF0C\u5305\u62EC\u6240\u6709\u8005\u4E0E\u6743\u9650</li><li><code>-v</code> \u663E\u793A\u62F7\u8D1D\u7684\u8BE6\u7EC6\u4FE1\u606F</li></ul><h2 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h2><p><code>mkdir</code>\u547D\u4EE4\u7528\u4E8E\u65B0\u5EFA\u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65B0\u5EFA\u591A\u4E2A\u76EE\u5F55</span>
$ <span class="token function">mkdir</span> dir1 dir2 dir3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mv" tabindex="-1"><a class="header-anchor" href="#mv" aria-hidden="true">#</a> mv</h2><p><code>mv</code>\u547D\u4EE4\u7528\u4E8E\u5C06\u6E90\u6587\u4EF6\u79FB\u52A8\u5230\u76EE\u7684\u5730\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u79FB\u52A8\u5355\u4E2A\u6587\u4EF6</span>
$ <span class="token function">mv</span> item1 item2

<span class="token comment"># \u79FB\u52A8\u591A\u4E2A\u6587\u4EF6</span>
$ <span class="token function">mv</span> file1 file2 dir1

<span class="token comment"># \u5C06dir1\u62F7\u8D1D\u8FDB\u5165dir2\uFF0C\u5B8C\u6210\u540Edir2\u5C06\u591A\u51FA\u4E00\u4E2A\u5B50\u76EE\u5F55dir1</span>
<span class="token comment"># \u5982\u679Cdir2\u4E0D\u5B58\u5728\uFF0C\u5C06\u4F1A\u88AB\u521B\u5EFA</span>
$ <span class="token function">mv</span> dir1 dir2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u6570</p><ul><li><code>-i</code> \u8986\u76D6\u5DF2\u7ECF\u5B58\u5728\u7684\u6587\u4EF6\u65F6\uFF0C\u4F1A\u63D0\u793A\u786E\u8BA4</li><li><code>-u</code> \u53EA\u79FB\u52A8\u76EE\u7684\u5730\u4E0D\u5B58\u5728\u7684\u6587\u4EF6\uFF0C\u6216\u6BD4\u76EE\u7684\u5730\u66F4\u65B0\u7684\u6587\u4EF6</li></ul><h2 id="rm" tabindex="-1"><a class="header-anchor" href="#rm" aria-hidden="true">#</a> rm</h2><p><code>rm</code>\u547D\u4EE4\u7528\u4E8E\u5220\u9664\u6587\u4EF6\u3002</p><p>\u53C2\u6570\u3002</p><ul><li><code>-i</code> \u6587\u4EF6\u5B58\u5728\u65F6\uFF0C\u4F1A\u63D0\u793A\u786E\u8BA4\u3002</li><li><code>-r</code> \u9012\u5F52\u5220\u9664\u4E00\u4E2A\u5B50\u76EE\u5F55</li><li><code>-f</code> \u5982\u679C\u5220\u9664\u4E0D\u5B58\u5728\u7684\u6587\u4EF6\uFF0C\u4E0D\u62A5\u9519</li><li><code>-v</code> \u5220\u9664\u65F6\u5C55\u793A\u8BE6\u7EC6\u4FE1\u606F</li></ul><h2 id="ln" tabindex="-1"><a class="header-anchor" href="#ln" aria-hidden="true">#</a> ln</h2><p><code>ln</code>\u547D\u4EE4\u7528\u4E8E\u5EFA\u7ACB\u94FE\u63A5\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65B0\u5EFA\u786C\u94FE\u63A5</span>
$ <span class="token function">ln</span> <span class="token function">file</span> <span class="token function">link</span>

<span class="token comment"># \u65B0\u5EFA\u8F6F\u94FE\u63A5</span>
$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> item <span class="token function">link</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),l=[d];function c(r,o){return e(),s("div",null,l)}const p=n(i,[["render",c],["__file","file-operation.html.vue"]]);export{p as default};
