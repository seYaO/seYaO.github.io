import{_ as t,o as c,c as l,a as n,b as a,d as e,e as i,r as o}from"./app.3b2d76f3.js";const p="/assets/20160713201707723.88c47923.png",r="/assets/bg2015120901.62c94bc4.png",u={},d=i(`<h3 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u521B\u5EFAgit\u914D\u7F6E:  </span>
$ <span class="token function">git</span> init
<span class="token comment"># 2. \u628A\u5F53\u524D\u6240\u6709\u6587\u4EF6\u52A0\u5165\u5230\u672C\u5730git\u5E93:  </span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment"># 3. \u786E\u8BA4\u52A0\u5165\u6587\u4EF6\u5230\u672C\u5730git\u5E93:  </span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;\u5199\u4E00\u4E9B\u6CE8\u91CA&#39;</span>
<span class="token comment"># 4. \u628A\u672C\u5730\u9879\u76EE\u4E0E\u8FDC\u7A0Bgit\u5E93\u5173\u8054:  </span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:seYaO/XXX.git
<span class="token comment"># 5. \u63D0\u4EA4\u672C\u5730\u5E93\u4E2D\u7684\u6587\u4EF6\u5230\u8FDC\u7A0Bgit\u5E93\u4E2D:  </span>
$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6Egit" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Egit" aria-hidden="true">#</a> \u914D\u7F6EGit</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u672C\u5730\u521B\u5EFAssh key</span>
$ ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;email&quot;</span>
<span class="token comment"># \u76EE\u5F55\u4E0B\u751F\u6210.ssh\u6587\u4EF6\u5939\uFF0C\u6253\u5F00id_rsa.pub\uFF0C\u590D\u5236key\uFF0Cgithub\u4E2D\u8BBE\u7F6ESSH Keys</span>
<span class="token comment"># 2. \u9A8C\u8BC1\u662F\u5426\u6210\u529F</span>
$ <span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
<span class="token comment"># 3. \u8BBE\u7F6Eusername \u548C email</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;your name&quot;</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;your email&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u9879\u76EE\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE\u7684\u8FC7\u7A0B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ makdir ~/demo    <span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u9879\u76EEdemo</span>
$ <span class="token builtin class-name">cd</span> ~/demo    <span class="token comment"># \u6253\u5F00\u8FD9\u4E2A\u9879\u76EE</span>
$ <span class="token function">git</span> init    <span class="token comment"># \u521D\u59CB\u5316</span>
$ <span class="token function">touch</span> README
$ <span class="token function">git</span> <span class="token function">add</span> README    <span class="token comment"># \u66F4\u65B0README\u6587\u4EF6 \uFF08\u5206\u4EAB\u6587\u4EF6\u5939\u91CC\u6240\u6709\u4EE3\u7801\uFF0Cadd \u540E\u9762\u52A0 &quot;.&quot;\uFF09</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Test&quot;</span>    <span class="token comment"># \u63D0\u4EA4\u66F4\u65B0\uFF0C\u5E76\u6CE8\u91CA\u4FE1\u606F&quot;Test&quot;</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:xxx/xxx.git    <span class="token comment"># \u8FDE\u63A5\u8FDC\u7A0Bgithub\u9879\u76EE</span>
$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master    <span class="token comment"># \u5C06\u672C\u5730\u9879\u76EE\u66F4\u65B0\u5230github\u9879\u76EE\u4E0A\u53BB</span>
$ <span class="token function">git</span> pull origin master    <span class="token comment"># \u628A\u8FDC\u7A0B\u670D\u52A1\u5668github\u4E0A\u9762\u7684\u6587\u4EF6\u62C9\u4E0B\u6765</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git\u547D\u4EE4" aria-hidden="true">#</a> git\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u514B\u9686</span>
$ <span class="token function">git</span> clone git@github.com:seYaO/XXX.git

<span class="token comment"># \u62C9\u53D6</span>
$ <span class="token function">git</span> pull

<span class="token comment"># \u5408\u5E76</span>
<span class="token function">git</span> merge \u5176\u4ED6\u5206\u652F \uFF08\u5230\u5F53\u524D\u5206\u652F\uFF09

<span class="token comment"># \u514B\u9686\u6307\u5B9A\u5206\u652F</span>
$ <span class="token function">git</span> clone <span class="token parameter variable">-b</span> v2.8.1 git@github.com:seYaO/XXX.git

<span class="token comment"># \u521B\u5EFA\u672C\u5730\u5206\u652F</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branchName<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u672C\u5730\u5206\u652F \uFF08\u9700\u8981\u5207\u6362\u5230\u5176\u4ED6\u5206\u652F\u8FDB\u884C\u64CD\u4F5C\uFF09</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>branchName<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token operator">&lt;</span>branchName<span class="token operator">&gt;</span>

<span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-r</span>

<span class="token comment"># \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u521B\u5EFA\u672C\u5730\u5206\u652F</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> \u672C\u5730\u5206\u652F\u540D origin/\u8FDC\u7A0B\u5206\u652F\u540D
<span class="token comment"># \u6216</span>
$ <span class="token function">git</span> fetch origin \u8FDC\u7A0B\u5206\u652F\u540D:\u672C\u5730\u5206\u652F\u540D

<span class="token comment"># git\u4E2D\u672C\u5730\u4E0E\u8FDC\u7A0B\u5E93\u7684\u5173\u8054\u4E0E\u53D6\u6D88</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:seYaO/XXX.git <span class="token punctuation">(</span>\u5728\u672C\u5730\u76EE\u5F55\u4E0B\u5173\u8054\u8FDC\u7A0Brepository<span class="token punctuation">)</span>
$ <span class="token function">git</span> remote remove origin <span class="token punctuation">(</span>\u53D6\u6D88\u672C\u5730\u76EE\u5F55\u4E0B\u5173\u8054\u7684\u8FDC\u7A0B\u5E93<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u64A4\u9500\u8FDC\u7AEF\u7684commit" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u8FDC\u7AEF\u7684commit" aria-hidden="true">#</a> \u64A4\u9500\u8FDC\u7AEF\u7684commit</h2><p>\u5728\u4F7F\u7528git\u65F6\uFF0Cpush\u5230\u8FDC\u7AEF\u540E\u53D1\u73B0commit\u4E86\u591A\u4F59\u7684\u6587\u4EF6\uFF0C\u6216\u8005\u5E0C\u671B\u80FD\u591F\u56DE\u9000\u5230\u4EE5\u524D\u7684\u7248\u672C\u3002</p><p>\u5148\u5728\u672C\u5730\u56DE\u9000\u5230\u76F8\u5E94\u7684\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>\u7248\u672C\u53F7<span class="token operator">&gt;</span>
<span class="token comment"># // \u6CE8\u610F\u4F7F\u7528 --hard \u53C2\u6570\u4F1A\u629B\u5F03\u5F53\u524D\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539</span>
<span class="token comment"># // \u4F7F\u7528 --soft \u53C2\u6570\u7684\u8BDD\u4F1A\u56DE\u9000\u5230\u4E4B\u524D\u7684\u7248\u672C\uFF0C\u4F46\u662F\u4FDD\u7559\u5F53\u524D\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539\uFF0C\u53EF\u4EE5\u91CD\u65B0\u63D0\u4EA4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6B64\u65F6\u4F7F\u7528\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin <span class="token operator">&lt;</span>\u5206\u652F\u540D<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F1A\u63D0\u793A\u672C\u5730\u7684\u7248\u672C\u843D\u540E\u4E8E\u8FDC\u7AEF\u7684\u7248\u672C\uFF1B <img src="`+p+`" alt="cover"></p><p>\u4E3A\u4E86\u8986\u76D6\u6389\u8FDC\u7AEF\u7684\u7248\u672C\u4FE1\u606F\uFF0C\u4F7F\u8FDC\u7AEF\u7684\u4ED3\u5E93\u4E5F\u56DE\u9000\u5230\u76F8\u5E94\u7684\u7248\u672C\uFF0C\u9700\u8981\u52A0\u4E0A\u53C2\u6570<code>--force</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin <span class="token operator">&lt;</span>\u5206\u652F\u540D<span class="token operator">&gt;</span> <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git-tag\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git-tag\u547D\u4EE4" aria-hidden="true">#</a> git tag\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u7684tag</span>
$ <span class="token function">git</span> tag

<span class="token comment"># \u521B\u5EFA\u5E26\u6CE8\u91CA\u7684\u6807\u7B7E</span>
$ <span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>branchName<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token string">&#39;\u6CE8\u91CA\u5185\u5BB9&#39;</span>

<span class="token comment"># \u4E0A\u4F20tag</span>
$ <span class="token function">git</span> push origin <span class="token operator">&lt;</span>branchName<span class="token operator">&gt;</span>

<span class="token comment"># \u4E0A\u4F20\u6240\u6709tag</span>
$ <span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>

<span class="token comment"># \u5220\u9664\u672C\u5730tag</span>
$ <span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branchName<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0Btag</span>
$ <span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> tag <span class="token operator">&lt;</span>branchName<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528-git-\u547D\u4EE4\u6E05\u5355" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528-git-\u547D\u4EE4\u6E05\u5355" aria-hidden="true">#</a> \u5E38\u7528 Git \u547D\u4EE4\u6E05\u5355</h2><p><img src="`+r+'" alt="cover"></p>',21),m=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"\u63D0\u793A"),n("ul",null,[n("li",null,"Workspace\uFF1A\u5DE5\u4F5C\u533A"),n("li",null,"Index / Stage\uFF1A\u6682\u5B58\u533A"),n("li",null,"Repository\uFF1A\u4ED3\u5E93\u533A\uFF08\u6216\u672C\u5730\u4ED3\u5E93\uFF09"),n("li",null,"Remote\uFF1A\u8FDC\u7A0B\u4ED3\u5E93")])],-1),v=i(`<h3 id="\u4E00\u3001\u65B0\u5EFA\u4EE3\u7801\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u65B0\u5EFA\u4EE3\u7801\u5E93" aria-hidden="true">#</a> \u4E00\u3001\u65B0\u5EFA\u4EE3\u7801\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u5F53\u524D\u76EE\u5F55\u65B0\u5EFA\u4E00\u4E2AGit\u4EE3\u7801\u5E93</span>
$ <span class="token function">git</span> init
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5C06\u5176\u521D\u59CB\u5316\u4E3AGit\u4EE3\u7801\u5E93</span>
$ <span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>
<span class="token comment"># \u4E0B\u8F7D\u4E00\u4E2A\u9879\u76EE\u548C\u5B83\u7684\u6574\u4E2A\u4EE3\u7801\u5386\u53F2</span>
$ <span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8C\u3001\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u914D\u7F6E" aria-hidden="true">#</a> \u4E8C\u3001\u914D\u7F6E</h3><p>Git\u7684\u8BBE\u7F6E\u6587\u4EF6\u4E3A.gitconfig\uFF0C\u5B83\u53EF\u4EE5\u5728\u7528\u6237\u4E3B\u76EE\u5F55\u4E0B\uFF08\u5168\u5C40\u914D\u7F6E\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\uFF08\u9879\u76EE\u914D\u7F6E\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u5F53\u524D\u7684Git\u914D\u7F6E</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--list</span>
<span class="token comment"># \u7F16\u8F91Git\u914D\u7F6E\u6587\u4EF6</span>
$ <span class="token function">git</span> config <span class="token parameter variable">-e</span> <span class="token punctuation">[</span>--global<span class="token punctuation">]</span>
<span class="token comment"># \u8BBE\u7F6E\u63D0\u4EA4\u4EE3\u7801\u65F6\u7684\u7528\u6237\u4FE1\u606F</span>
$ <span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;[name]&quot;</span>
$ <span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;[email address]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E09\u3001\u589E\u52A0-\u5220\u9664\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u589E\u52A0-\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a> \u4E09\u3001\u589E\u52A0/\u5220\u9664\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
<span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u76EE\u5F55\u5230\u6682\u5B58\u533A\uFF0C\u5305\u62EC\u5B50\u76EE\u5F55</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
<span class="token comment"># \u6DFB\u52A0\u5F53\u524D\u76EE\u5F55\u7684\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment"># \u6DFB\u52A0\u6BCF\u4E2A\u53D8\u5316\u524D\uFF0C\u90FD\u4F1A\u8981\u6C42\u786E\u8BA4</span>
<span class="token comment"># \u5BF9\u4E8E\u540C\u4E00\u4E2A\u6587\u4EF6\u7684\u591A\u5904\u53D8\u5316\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5206\u6B21\u63D0\u4EA4</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-p</span>
<span class="token comment"># \u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u6B21\u5220\u9664\u653E\u5165\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
<span class="token comment"># \u505C\u6B62\u8FFD\u8E2A\u6307\u5B9A\u6587\u4EF6\uFF0C\u4F46\u8BE5\u6587\u4EF6\u4F1A\u4FDD\u7559\u5728\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u6539\u540D\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u4E2A\u6539\u540D\u653E\u5165\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>file-original<span class="token punctuation">]</span> <span class="token punctuation">[</span>file-renamed<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u56DB\u3001\u4EE3\u7801\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u4EE3\u7801\u63D0\u4EA4" aria-hidden="true">#</a> \u56DB\u3001\u4EE3\u7801\u63D0\u4EA4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u5230\u4ED3\u5E93\u533A</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>
<span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u4ED3\u5E93\u533A</span>
$ <span class="token function">git</span> commit <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>. <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>
<span class="token comment"># \u63D0\u4EA4\u5DE5\u4F5C\u533A\u81EA\u4E0A\u6B21commit\u4E4B\u540E\u7684\u53D8\u5316\uFF0C\u76F4\u63A5\u5230\u4ED3\u5E93\u533A</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-a</span>
<span class="token comment"># \u63D0\u4EA4\u65F6\u663E\u793A\u6240\u6709diff\u4FE1\u606F</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-v</span>
<span class="token comment"># \u4F7F\u7528\u4E00\u6B21\u65B0\u7684commit\uFF0C\u66FF\u4EE3\u4E0A\u4E00\u6B21\u63D0\u4EA4</span>
<span class="token comment"># \u5982\u679C\u4EE3\u7801\u6CA1\u6709\u4EFB\u4F55\u65B0\u53D8\u5316\uFF0C\u5219\u7528\u6765\u6539\u5199\u4E0A\u4E00\u6B21commit\u7684\u63D0\u4EA4\u4FE1\u606F</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>
<span class="token comment"># \u91CD\u505A\u4E0A\u4E00\u6B21commit\uFF0C\u5E76\u5305\u62EC\u6307\u5B9A\u6587\u4EF6\u7684\u65B0\u53D8\u5316</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E94\u3001\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u5206\u652F" aria-hidden="true">#</a> \u4E94\u3001\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F</span>
$ <span class="token function">git</span> branch
<span class="token comment"># \u5217\u51FA\u6240\u6709\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-r</span>
<span class="token comment"># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-a</span>
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4F46\u4F9D\u7136\u505C\u7559\u5728\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u6307\u5B9Acommit</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">--track</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>
<span class="token comment"># \u5207\u6362\u5230\u6307\u5B9A\u5206\u652F\uFF0C\u5E76\u66F4\u65B0\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
<span class="token comment"># \u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5206\u652F</span>
$ <span class="token function">git</span> checkout -
<span class="token comment"># \u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB\uFF0C\u5728\u73B0\u6709\u5206\u652F\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u4E4B\u95F4</span>
$ <span class="token function">git</span> branch --set-upstream <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>
<span class="token comment"># \u5408\u5E76\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment"># \u9009\u62E9\u4E00\u4E2Acommit\uFF0C\u5408\u5E76\u8FDB\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u5220\u9664\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-dr</span> <span class="token punctuation">[</span>remote/branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u516D\u3001\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u6807\u7B7E" aria-hidden="true">#</a> \u516D\u3001\u6807\u7B7E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6240\u6709tag</span>
$ <span class="token function">git</span> tag
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u5F53\u524Dcommit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u6307\u5B9Acommit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u5220\u9664\u672C\u5730tag</span>
$ <span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
<span class="token comment"># \u5220\u9664\u8FDC\u7A0Btag</span>
$ <span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>
<span class="token comment"># \u67E5\u770Btag\u4FE1\u606F</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
<span class="token comment"># \u63D0\u4EA4\u6307\u5B9Atag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
<span class="token comment"># \u63D0\u4EA4\u6240\u6709tag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--tags</span>
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u67D0\u4E2Atag</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E03\u3001\u67E5\u770B\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001\u67E5\u770B\u4FE1\u606F" aria-hidden="true">#</a> \u4E03\u3001\u67E5\u770B\u4FE1\u606F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u6709\u53D8\u66F4\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> status
<span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u7248\u672C\u5386\u53F2</span>
$ <span class="token function">git</span> log
<span class="token comment"># \u663E\u793Acommit\u5386\u53F2\uFF0C\u4EE5\u53CA\u6BCF\u6B21commit\u53D1\u751F\u53D8\u66F4\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> log <span class="token parameter variable">--stat</span>
<span class="token comment"># \u641C\u7D22\u63D0\u4EA4\u5386\u53F2\uFF0C\u6839\u636E\u5173\u952E\u8BCD</span>
$ <span class="token function">git</span> log <span class="token parameter variable">-S</span> <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u6BCF\u4E2Acommit\u5360\u636E\u4E00\u884C</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:%s
<span class="token comment"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u5176&quot;\u63D0\u4EA4\u8BF4\u660E&quot;\u5FC5\u987B\u7B26\u5408\u641C\u7D22\u6761\u4EF6</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--grep</span> feature
<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u6587\u4EF6\u7684\u7248\u672C\u5386\u53F2\uFF0C\u5305\u62EC\u6587\u4EF6\u6539\u540D</span>
$ <span class="token function">git</span> log <span class="token parameter variable">--follow</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
$ <span class="token function">git</span> whatchanged <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u76F8\u5173\u7684\u6BCF\u4E00\u6B21diff</span>
$ <span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u8FC7\u53BB5\u6B21\u63D0\u4EA4</span>
$ <span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--pretty</span> <span class="token parameter variable">--oneline</span>
<span class="token comment"># \u663E\u793A\u6240\u6709\u63D0\u4EA4\u8FC7\u7684\u7528\u6237\uFF0C\u6309\u63D0\u4EA4\u6B21\u6570\u6392\u5E8F</span>
$ <span class="token function">git</span> shortlog <span class="token parameter variable">-sn</span>
<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u662F\u4EC0\u4E48\u4EBA\u5728\u4EC0\u4E48\u65F6\u95F4\u4FEE\u6539\u8FC7</span>
$ <span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span>
<span class="token comment"># \u663E\u793A\u6682\u5B58\u533A\u548C\u4E0A\u4E00\u4E2Acommit\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u5206\u652F\u6700\u65B0commit\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD
<span class="token comment"># \u663E\u793A\u4E24\u6B21\u63D0\u4EA4\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u4ECA\u5929\u4F60\u5199\u4E86\u591A\u5C11\u884C\u4EE3\u7801</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--shortstat</span> <span class="token string">&quot;@{0 day ago}&quot;</span>
<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u7684\u5143\u6570\u636E\u548C\u5185\u5BB9\u53D8\u5316</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u53D1\u751F\u53D8\u5316\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> show --name-only <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u65F6\uFF0C\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u6700\u8FD1\u51E0\u6B21\u63D0\u4EA4</span>
$ <span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u516B\u3001\u8FDC\u7A0B\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u516B\u3001\u8FDC\u7A0B\u540C\u6B65" aria-hidden="true">#</a> \u516B\u3001\u8FDC\u7A0B\u540C\u6B65</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u53D8\u52A8</span>
$ <span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u4FE1\u606F</span>
$ <span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>
<span class="token comment"># \u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5E76\u547D\u540D</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
<span class="token comment"># \u53D6\u56DE\u8FDC\u7A0B\u4ED3\u5E93\u7684\u53D8\u5316\uFF0C\u5E76\u4E0E\u672C\u5730\u5206\u652F\u5408\u5E76</span>
$ <span class="token function">git</span> pull <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment"># \u4E0A\u4F20\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment"># \u5F3A\u884C\u63A8\u9001\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--force</span>
<span class="token comment"># \u63A8\u9001\u6240\u6709\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E5D\u3001\u64A4\u9500" tabindex="-1"><a class="header-anchor" href="#\u4E5D\u3001\u64A4\u9500" aria-hidden="true">#</a> \u4E5D\u3001\u64A4\u9500</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u6062\u590D\u67D0\u4E2Acommit\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>commit<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6240\u6709\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token builtin class-name">.</span>
<span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span>
<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684\u6307\u9488\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684HEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u6307\u5B9Acommit\u4E00\u81F4</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u91CD\u7F6E\u5F53\u524DHEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u4F46\u4FDD\u6301\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--keep</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Acommit\uFF0C\u7528\u6765\u64A4\u9500\u6307\u5B9Acommit</span>
<span class="token comment"># \u540E\u8005\u7684\u6240\u6709\u53D8\u5316\u90FD\u5C06\u88AB\u524D\u8005\u62B5\u6D88\uFF0C\u5E76\u4E14\u5E94\u7528\u5230\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u6682\u65F6\u5C06\u672A\u63D0\u4EA4\u7684\u53D8\u5316\u79FB\u9664\uFF0C\u7A0D\u540E\u518D\u79FB\u5165</span>
$ <span class="token function">git</span> stash
$ <span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5341\u3001\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5341\u3001\u5176\u4ED6" aria-hidden="true">#</a> \u5341\u3001\u5176\u4ED6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u751F\u6210\u4E00\u4E2A\u53EF\u4F9B\u53D1\u5E03\u7684\u538B\u7F29\u5305</span>
$ <span class="token function">git</span> archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore" aria-hidden="true">#</a> .gitignore</h2><h4 id="\u914D\u7F6E\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8BED\u6CD5" aria-hidden="true">#</a> \u914D\u7F6E\u8BED\u6CD5</h4><ul><li>\u4EE5\u659C\u6760\u201C/\u201D\u5F00\u5934\u8868\u793A\u76EE\u5F55\uFF1B</li><li>\u4EE5\u661F\u53F7\u201C*\u201D\u901A\u914D\u591A\u4E2A\u5B57\u7B26\uFF1B</li><li>\u4EE5\u95EE\u53F7\u201C?\u201D\u901A\u914D\u5355\u4E2A\u5B57\u7B26\uFF1B</li><li>\u4EE5\u65B9\u62EC\u53F7\u201C[]\u201D\u5305\u542B\u5355\u4E2A\u5B57\u7B26\u7684\u5339\u914D\u5217\u8868\uFF1B</li><li>\u4EE5\u53F9\u53F7\u201C!\u201D\u8868\u793A\u4E0D\u5FFD\u7565(\u8DDF\u8E2A)\u5339\u914D\u5230\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B</li></ul><p>\u6B64\u5916\uFF0Cgit \u5BF9\u4E8E .ignore \u914D\u7F6E\u6587\u4EF6\u662F\u6309\u884C\u4ECE\u4E0A\u5230\u4E0B\u8FDB\u884C\u89C4\u5219\u5339\u914D\u7684\uFF0C\u610F\u5473\u7740\u5982\u679C\u524D\u9762\u7684\u89C4\u5219\u5339\u914D\u7684\u8303\u56F4\u66F4\u5927\uFF0C\u5219\u540E\u9762\u7684\u89C4\u5219\u5C06\u4E0D\u4F1A\u751F\u6548\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>fd1/*
<span class="token comment"># \u8BF4\u660E\uFF1A\u5FFD\u7565\u76EE\u5F55 fd1 \u4E0B\u7684\u5168\u90E8\u5185\u5BB9\uFF1B\u6CE8\u610F\uFF0C\u4E0D\u7BA1\u662F\u6839\u76EE\u5F55\u4E0B\u7684 /fd1/ \u76EE\u5F55\uFF0C\u8FD8\u662F\u67D0\u4E2A\u5B50\u76EE\u5F55 /child/fd1/ \u76EE\u5F55\uFF0C\u90FD\u4F1A\u88AB\u5FFD\u7565\uFF1B</span>

/fd1/*
<span class="token comment"># \u8BF4\u660E\uFF1A\u5FFD\u7565\u6839\u76EE\u5F55\u4E0B\u7684 /fd1/ \u76EE\u5F55\u7684\u5168\u90E8\u5185\u5BB9\uFF1B</span>

/*
<span class="token operator">!</span>.gitignore
<span class="token operator">!</span>/fw/bin/
<span class="token operator">!</span>/fw/sf/
<span class="token comment"># \u8BF4\u660E\uFF1A\u5FFD\u7565\u5168\u90E8\u5185\u5BB9\uFF0C\u4F46\u662F\u4E0D\u5FFD\u7565 .gitignore \u6587\u4EF6\u3001\u6839\u76EE\u5F55\u4E0B\u7684 /fw/bin/ \u548C /fw/sf/ \u76EE\u5F55\uFF1B </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u95EE\u9898\u548C\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u548C\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u95EE\u9898\u548C\u89E3\u51B3\u65B9\u6848</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165 $ git remote add origin git@github.com:xxx/xxx.git
\u63D0\u793A fatal: remote origin already exists
// \u89E3\u51B3\u65B9\u6848\uFF1A
\u5148\u8F93\u5165 $ git remote rm origin
\u518D\u8F93\u5165 $ git remote add origin git@github.com:xxx/xxx.git
\u5C31\u4E0D\u62A5\u9519\u4E86
---
\u5982\u679C\u8F93\u5165 $ git remote rm origin \u8FD8\u662F\u62A5\u9519
\u63D0\u793A error: Could not remove config section &#39;remote.origin&#39;
\u6211\u4EEC\u9700\u8981\u4FEE\u6539gitconfig\u6587\u4EF6\u7684\u5185\u5BB9
\u627E\u5230\u4F60\u7684github\u7684\u5B89\u88C5\u8DEF\u5F84\uFF0CC:\\Users\\ASUS\\AppData\\Local\\GitHub\\PortableGit_ca477551eeb4aea0e4ae9fcd3358bd96720bb5c8\\etc
\u627E\u5230\u4F60\u7684github\u7684\u5B89\u88C5\u8DEF\u5F84\uFF0C\u6253\u5F00\u5B83\u628A\u91CC\u9762\u7684[remote &quot;origin&quot;]\u90A3\u4E00\u884C\u5220\u6389\u5C31\u597D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165 $ ssh -T git@github.com
\u63D0\u793A Permission denied (publickey)
\u56E0\u4E3A\u65B0\u751F\u6210\u7684key\u4E0D\u80FD\u52A0\u5165 ssh \u5C31\u4F1A\u5BFC\u81F4\u8FDE\u63A5\u4E0D\u4E0A github
// \u89E3\u51B3\u65B9\u6848
\u5148\u8F93\u5165 $ ssh-agent\uFF0C\u518D\u8F93\u5165 $ ssh-add ~/.ssh/id_key\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4E86
---
\u5982\u679C\u8F93\u5165 ssh-add ~/.ssh/id_key \u8FD8\u662F\u62A5\u9519
\u63D0\u793A error: Could not open a connection to your authentication agent.
// \u89E3\u51B3\u65B9\u6848
key \u7528 Git GUI \u7684 ssh \u5DE5\u5177\u751F\u6210\uFF0C\u8FD9\u6837\u751F\u6210\u7684\u65F6\u5019 key \u5C31\u76F4\u63A5\u4FDD\u5B58\u5728 ssh \u4E2D\u4E86\uFF0C\u4E0D\u9700\u8981\u518D ssh-add \u547D\u4EE4\u52A0\u5165\u4E86\uFF0C\u5176\u5B83\u7684 user\uFF0Ctoken \u7B49\u914D\u7F6E\u90FD\u7528\u547D\u4EE4\u884C\u6765\u505A
---
\u6700\u597D\u68C0\u67E5\u4E00\u4E0B\u5728\u4F60\u590D\u5236 id_rsa.pub \u6587\u4EF6\u7684\u5185\u5BB9\u65F6\u6709\u6CA1\u6709\u4EA7\u751F\u591A\u4F59\u7684\u7A7A\u683C\u6216\u7A7A\u884C\uFF0C\u6709\u4E9B\u7F16\u8F91\u5668\u4F1A\u5E2E\u4F60\u6DFB\u52A0\u8FD9\u4E9B\u7684 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165 $ git push origin master
\u63D0\u793A error: failed to push som refs to ......
// \u89E3\u51B3\u65B9\u6848
\u5148\u8F93\u5165 $ git pull origin master   //\u5148\u628A\u8FDC\u7A0B\u670D\u52A1\u5668github\u4E0A\u9762\u7684\u6587\u4EF6\u62C9\u4E0B\u6765
\u518D\u8F93\u5165 $ git push origin master
\u5982\u679C\u51FA\u73B0\u62A5\u9519 fatal: Couldn&#39;t find remote ref master \u6216\u8005 fatal: &#39;origin&#39; does not appear to be a git repository \u4EE5\u53CA fatal: Could not read from remote repository
\u5219\u9700\u8981\u91CD\u65B0\u8F93\u5165 $ git remote add origin git@github.com:xxx/xxx.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,31),k={href:"http://www.ruanyifeng.com/blog/2015/08/git-use-process.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://www.ruanyifeng.com/blog/2014/06/git_remote.html",target:"_blank",rel:"noopener noreferrer"},g={href:"http://www.ruanyifeng.com/blog/2015/12/git-workflow.html",target:"_blank",rel:"noopener noreferrer"},h={href:"http://blog.csdn.net/henryrao1221/article/details/41554371",target:"_blank",rel:"noopener noreferrer"},f={href:"http://gitbook.liuhui998.com/index.html",target:"_blank",rel:"noopener noreferrer"},$={href:"http://www.jianshu.com/p/fa38ef97431d",target:"_blank",rel:"noopener noreferrer"};function x(_,w){const s=o("ExternalLinkIcon");return c(),l("div",null,[d,m,v,n("ul",null,[n("li",null,[n("a",k,[a("Git \u4F7F\u7528\u89C4\u8303\u6D41\u7A0B"),e(s)])]),n("li",null,[n("a",b,[a("Git\u8FDC\u7A0B\u64CD\u4F5C\u8BE6\u89E3"),e(s)])]),n("li",null,[n("a",g,[a("Git \u5DE5\u4F5C\u6D41\u7A0B"),e(s)])]),n("li",null,[n("a",h,[a("\u672C\u5730\u9879\u76EE\u4E0A\u4F20\u5230github"),e(s)])]),n("li",null,[n("a",f,[a("Git Community Book \u4E2D\u6587\u7248"),e(s)])]),n("li",null,[n("a",$,[a("github \u5BFC\u5165 gitbook"),e(s)])])])])}const q=t(u,[["render",x],["__file","git.html.vue"]]);export{q as default};
