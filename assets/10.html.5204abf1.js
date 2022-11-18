import{_ as n,o as e,c as s,e as i}from"./app.3b2d76f3.js";const a="/assets/10.ea5c6f3f.png",l={},d=i('<p><img src="'+a+`" alt="\u624B\u5199\u4EE3\u7801\u9762\u8BD5\u9898.png"></p><h2 id="\u4E00\u3001javascript-\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001javascript-\u57FA\u7840" aria-hidden="true">#</a> \u4E00\u3001JavaScript \u57FA\u7840</h2><h3 id="_1-\u624B\u5199-object-create" tabindex="-1"><a class="header-anchor" href="#_1-\u624B\u5199-object-create" aria-hidden="true">#</a> 1. \u624B\u5199 Object.create</h3><p>\u601D\u8DEF\uFF1A\u5C06\u4F20\u5165\u7684\u5BF9\u8C61\u4F5C\u4E3A\u539F\u578B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function create(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u624B\u5199-instanceof-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u624B\u5199-instanceof-\u65B9\u6CD5" aria-hidden="true">#</a> 2. \u624B\u5199 instanceof \u65B9\u6CD5</h3><p>instanceof \u8FD0\u7B97\u7B26\u7528\u4E8E\u5224\u65AD\u6784\u9020\u51FD\u6570\u7684 prototype \u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E2D\u7684\u4EFB\u4F55\u4F4D\u7F6E\u3002</p><p>\u5B9E\u73B0\u6B65\u9AA4\uFF1A</p><ol><li>\u9996\u5148\u83B7\u53D6\u7C7B\u578B\u7684\u539F\u578B</li><li>\u7136\u540E\u83B7\u5F97\u5BF9\u8C61\u7684\u539F\u578B</li><li>\u7136\u540E\u4E00\u76F4\u5FAA\u73AF\u5224\u65AD\u5BF9\u8C61\u7684\u539F\u578B\u662F\u5426\u7B49\u4E8E\u7C7B\u578B\u7684\u539F\u578B\uFF0C\u76F4\u5230\u5BF9\u8C61\u539F\u578B\u4E3A <code>null</code>\uFF0C\u56E0\u4E3A\u539F\u578B\u94FE\u6700\u7EC8\u4E3A <code>null</code></li></ol><p>\u5177\u4F53\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left), // \u83B7\u53D6\u5BF9\u8C61\u7684\u539F\u578B
      prototype = right.prototype; // \u83B7\u53D6\u6784\u9020\u51FD\u6570\u7684 prototype \u5BF9\u8C61

  // \u5224\u65AD\u6784\u9020\u51FD\u6570\u7684 prototype \u5BF9\u8C61\u662F\u5426\u5728\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u624B\u5199-new-\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#_3-\u624B\u5199-new-\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> 3. \u624B\u5199 new \u64CD\u4F5C\u7B26</h3><p>\u5728\u8C03\u7528 <code>new</code> \u7684\u8FC7\u7A0B\u4E2D\u4F1A\u53D1\u751F\u4EE5\u4E0A\u56DB\u4EF6\u4E8B\u60C5\uFF1A</p><p>\uFF081\uFF09\u9996\u5148\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u7684\u7A7A\u5BF9\u8C61</p><p>\uFF082\uFF09\u8BBE\u7F6E\u539F\u578B\uFF0C\u5C06\u5BF9\u8C61\u7684\u539F\u578B\u8BBE\u7F6E\u4E3A\u51FD\u6570\u7684 prototype \u5BF9\u8C61\u3002</p><p>\uFF083\uFF09\u8BA9\u51FD\u6570\u7684 this \u6307\u5411\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u6267\u884C\u6784\u9020\u51FD\u6570\u7684\u4EE3\u7801\uFF08\u4E3A\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\uFF09</p><p>\uFF084\uFF09\u5224\u65AD\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u503C\u7C7B\u578B\uFF0C\u8FD4\u56DE\u521B\u5EFA\u7684\u5BF9\u8C61\u3002\u5982\u679C\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5C31\u8FD4\u56DE\u8FD9\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  // \u5224\u65AD\u53C2\u6570\u662F\u5426\u662F\u4E00\u4E2A\u51FD\u6570
  if (typeof constructor !== &quot;function&quot;) {
    console.error(&quot;type error&quot;);
    return;
  }
  // \u65B0\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684\u539F\u578B\u4E3A\u6784\u9020\u51FD\u6570\u7684 prototype \u5BF9\u8C61
  newObject = Object.create(constructor.prototype);
  // \u5C06 this \u6307\u5411\u65B0\u5EFA\u5BF9\u8C61\uFF0C\u5E76\u6267\u884C\u51FD\u6570
  result = constructor.apply(newObject, arguments);
  // \u5224\u65AD\u8FD4\u56DE\u5BF9\u8C61
  let flag = result &amp;&amp; (typeof result === &quot;object&quot; || typeof result === &quot;function&quot;);
  // \u5224\u65AD\u8FD4\u56DE\u7ED3\u679C
  return flag ? result : newObject;
}
// \u4F7F\u7528\u65B9\u6CD5
objectFactory(\u6784\u9020\u51FD\u6570, \u521D\u59CB\u5316\u53C2\u6570);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u624B\u5199-promise" tabindex="-1"><a class="header-anchor" href="#_4-\u624B\u5199-promise" aria-hidden="true">#</a> 4. \u624B\u5199 Promise</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const PENDING = &quot;pending&quot;;
const RESOLVED = &quot;resolved&quot;;
const REJECTED = &quot;rejected&quot;;

function MyPromise(fn) {
  // \u4FDD\u5B58\u521D\u59CB\u5316\u72B6\u6001
  var self = this;

  // \u521D\u59CB\u5316\u72B6\u6001
  this.state = PENDING;

  // \u7528\u4E8E\u4FDD\u5B58 resolve \u6216\u8005 rejected \u4F20\u5165\u7684\u503C
  this.value = null;

  // \u7528\u4E8E\u4FDD\u5B58 resolve \u7684\u56DE\u8C03\u51FD\u6570
  this.resolvedCallbacks = [];

  // \u7528\u4E8E\u4FDD\u5B58 reject \u7684\u56DE\u8C03\u51FD\u6570
  this.rejectedCallbacks = [];

  // \u72B6\u6001\u8F6C\u53D8\u4E3A resolved \u65B9\u6CD5
  function resolve(value) {
    // \u5224\u65AD\u4F20\u5165\u5143\u7D20\u662F\u5426\u4E3A Promise \u503C\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u72B6\u6001\u6539\u53D8\u5FC5\u987B\u7B49\u5F85\u524D\u4E00\u4E2A\u72B6\u6001\u6539\u53D8\u540E\u518D\u8FDB\u884C\u6539\u53D8
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }

    // \u4FDD\u8BC1\u4EE3\u7801\u7684\u6267\u884C\u987A\u5E8F\u4E3A\u672C\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u7684\u672B\u5C3E
    setTimeout(() =&gt; {
      // \u53EA\u6709\u72B6\u6001\u4E3A pending \u65F6\u624D\u80FD\u8F6C\u53D8\uFF0C
      if (self.state === PENDING) {
        // \u4FEE\u6539\u72B6\u6001
        self.state = RESOLVED;

        // \u8BBE\u7F6E\u4F20\u5165\u7684\u503C
        self.value = value;

        // \u6267\u884C\u56DE\u8C03\u51FD\u6570
        self.resolvedCallbacks.forEach(callback =&gt; {
          callback(value);
        });
      }
    }, 0);
  }

  // \u72B6\u6001\u8F6C\u53D8\u4E3A rejected \u65B9\u6CD5
  function reject(value) {
    // \u4FDD\u8BC1\u4EE3\u7801\u7684\u6267\u884C\u987A\u5E8F\u4E3A\u672C\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u7684\u672B\u5C3E
    setTimeout(() =&gt; {
      // \u53EA\u6709\u72B6\u6001\u4E3A pending \u65F6\u624D\u80FD\u8F6C\u53D8
      if (self.state === PENDING) {
        // \u4FEE\u6539\u72B6\u6001
        self.state = REJECTED;

        // \u8BBE\u7F6E\u4F20\u5165\u7684\u503C
        self.value = value;

        // \u6267\u884C\u56DE\u8C03\u51FD\u6570
        self.rejectedCallbacks.forEach(callback =&gt; {
          callback(value);
        });
      }
    }, 0);
  }

  // \u5C06\u4E24\u4E2A\u65B9\u6CD5\u4F20\u5165\u51FD\u6570\u6267\u884C
  try {
    fn(resolve, reject);
  } catch (e) {
    // \u9047\u5230\u9519\u8BEF\u65F6\uFF0C\u6355\u83B7\u9519\u8BEF\uFF0C\u6267\u884C reject \u51FD\u6570
    reject(e);
  }
}

MyPromise.prototype.then = function(onResolved, onRejected) {
  // \u9996\u5148\u5224\u65AD\u4E24\u4E2A\u53C2\u6570\u662F\u5426\u4E3A\u51FD\u6570\u7C7B\u578B\uFF0C\u56E0\u4E3A\u8FD9\u4E24\u4E2A\u53C2\u6570\u662F\u53EF\u9009\u53C2\u6570
  onResolved =
    typeof onResolved === &quot;function&quot;
      ? onResolved
      : function(value) {
          return value;
        };

  onRejected =
    typeof onRejected === &quot;function&quot;
      ? onRejected
      : function(error) {
          throw error;
        };

  // \u5982\u679C\u662F\u7B49\u5F85\u72B6\u6001\uFF0C\u5219\u5C06\u51FD\u6570\u52A0\u5165\u5BF9\u5E94\u5217\u8868\u4E2D
  if (this.state === PENDING) {
    this.resolvedCallbacks.push(onResolved);
    this.rejectedCallbacks.push(onRejected);
  }

  // \u5982\u679C\u72B6\u6001\u5DF2\u7ECF\u51DD\u56FA\uFF0C\u5219\u76F4\u63A5\u6267\u884C\u5BF9\u5E94\u72B6\u6001\u7684\u51FD\u6570

  if (this.state === RESOLVED) {
    onResolved(this.value);
  }

  if (this.state === REJECTED) {
    onRejected(this.value);
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u624B\u5199-promise-then" tabindex="-1"><a class="header-anchor" href="#_5-\u624B\u5199-promise-then" aria-hidden="true">#</a> 5. \u624B\u5199 Promise.then</h3><p><code>then</code> \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 <code>promise</code> \u5B9E\u4F8B\uFF0C\u4E3A\u4E86\u5728 <code>promise</code> \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF08<code>resolve</code> / <code>reject</code> \u88AB\u8C03\u7528\u65F6\uFF09\u518D\u6267\u884C <code>then</code> \u91CC\u7684\u51FD\u6570\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A <code>callbacks</code> \u6570\u7EC4\u5148\u628A\u4F20\u7ED9then\u7684\u51FD\u6570\u6682\u5B58\u8D77\u6765\uFF0C\u7B49\u72B6\u6001\u6539\u53D8\u65F6\u518D\u8C03\u7528\u3002</p><p><strong>\u90A3\u4E48\uFF0C\u600E\u4E48\u4FDD\u8BC1\u540E\u4E00\u4E2A</strong> <code>**then**</code> <strong>\u91CC\u7684\u65B9\u6CD5\u5728\u524D\u4E00\u4E2A</strong> <code>**then**</code><strong>\uFF08\u53EF\u80FD\u662F\u5F02\u6B65\uFF09\u7ED3\u675F\u4E4B\u540E\u518D\u6267\u884C\u5462\uFF1F</strong></p><p>\u6211\u4EEC\u53EF\u4EE5\u5C06\u4F20\u7ED9 <code>then</code> \u7684\u51FD\u6570\u548C\u65B0 <code>promise</code> \u7684 <code>resolve</code> \u4E00\u8D77 <code>push</code> \u5230\u524D\u4E00\u4E2A <code>promise</code> \u7684 <code>callbacks</code> \u6570\u7EC4\u4E2D\uFF0C\u8FBE\u5230\u627F\u524D\u542F\u540E\u7684\u6548\u679C\uFF1A</p><ul><li>\u627F\u524D\uFF1A\u5F53\u524D\u4E00\u4E2A <code>promise</code> \u5B8C\u6210\u540E\uFF0C\u8C03\u7528\u5176 <code>resolve</code> \u53D8\u66F4\u72B6\u6001\uFF0C\u5728\u8FD9\u4E2A <code>resolve</code> \u91CC\u4F1A\u4F9D\u6B21\u8C03\u7528 <code>callbacks</code> \u91CC\u7684\u56DE\u8C03\uFF0C\u8FD9\u6837\u5C31\u6267\u884C\u4E86 <code>then</code> \u91CC\u7684\u65B9\u6CD5\u4E86</li><li>\u542F\u540E\uFF1A\u4E0A\u4E00\u6B65\u4E2D\uFF0C\u5F53 <code>then</code> \u91CC\u7684\u65B9\u6CD5\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7ED3\u679C\uFF0C\u5982\u679C\u8FD9\u4E2A\u7ED3\u679C\u662F\u4E2A\u7B80\u5355\u7684\u503C\uFF0C\u5C31\u76F4\u63A5\u8C03\u7528\u65B0 <code>promise</code> \u7684 <code>resolve</code>\uFF0C\u8BA9\u5176\u72B6\u6001\u53D8\u66F4\uFF0C\u8FD9\u53C8\u4F1A\u4F9D\u6B21\u8C03\u7528\u65B0 <code>promise</code> \u7684 <code>callbacks</code> \u6570\u7EC4\u91CC\u7684\u65B9\u6CD5\uFF0C\u5FAA\u73AF\u5F80\u590D\u3002\u3002\u5982\u679C\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u4E2A <code>promise</code>\uFF0C\u5219\u9700\u8981\u7B49\u5B83\u5B8C\u6210\u4E4B\u540E\u518D\u89E6\u53D1\u65B0 <code>promise</code> \u7684 <code>resolve</code>\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5728\u5176\u7ED3\u679C\u7684 <code>then</code> \u91CC\u8C03\u7528\u65B0 <code>promise</code> \u7684 <code>resolve</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>then(onFulfilled, onReject){
    // \u4FDD\u5B58\u524D\u4E00\u4E2Apromise\u7684this
    const self = this; 
    return new MyPromise((resolve, reject) =&gt; {
      // \u5C01\u88C5\u524D\u4E00\u4E2Apromise\u6210\u529F\u65F6\u6267\u884C\u7684\u51FD\u6570
      let fulfilled = () =&gt; {
        try{
          const result = onFulfilled(self.value); // \u627F\u524D
          return result instanceof MyPromise? result.then(resolve, reject) : resolve(result); //\u542F\u540E
        }catch(err){
          reject(err)
        }
      }
      // \u5C01\u88C5\u524D\u4E00\u4E2Apromise\u5931\u8D25\u65F6\u6267\u884C\u7684\u51FD\u6570
      let rejected = () =&gt; {
        try{
          const result = onReject(self.reason);
          return result instanceof MyPromise? result.then(resolve, reject) : reject(result);
        }catch(err){
          reject(err)
        }
      }
      switch(self.status){
        case PENDING: 
          self.onFulfilledCallbacks.push(fulfilled);
          self.onRejectedCallbacks.push(rejected);
          break;
        case FULFILLED:
          fulfilled();
          break;
        case REJECT:
          rejected();
          break;
      }
    })
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li>\u8FDE\u7EED\u591A\u4E2A <code>then</code> \u91CC\u7684\u56DE\u8C03\u65B9\u6CD5\u662F\u540C\u6B65\u6CE8\u518C\u7684\uFF0C\u4F46\u6CE8\u518C\u5230\u4E86\u4E0D\u540C\u7684 <code>callbacks</code> \u6570\u7EC4\u4E2D\uFF0C\u56E0\u4E3A\u6BCF\u6B21 <code>then</code> \u90FD\u8FD4\u56DE\u65B0\u7684 <code>promise</code> \u5B9E\u4F8B\uFF08\u53C2\u8003\u4E0A\u9762\u7684\u4F8B\u5B50\u548C\u56FE\uFF09</li><li>\u6CE8\u518C\u5B8C\u6210\u540E\u5F00\u59CB\u6267\u884C\u6784\u9020\u51FD\u6570\u4E2D\u7684\u5F02\u6B65\u4E8B\u4EF6\uFF0C\u5F02\u6B65\u5B8C\u6210\u4E4B\u540E\u4F9D\u6B21\u8C03\u7528 <code>callbacks</code> \u6570\u7EC4\u4E2D\u63D0\u524D\u6CE8\u518C\u7684\u56DE\u8C03</li></ul><h3 id="_6-\u624B\u5199-promise-all" tabindex="-1"><a class="header-anchor" href="#_6-\u624B\u5199-promise-all" aria-hidden="true">#</a> 6. \u624B\u5199 Promise.all</h3><p><strong>1) \u6838\u5FC3\u601D\u8DEF</strong></p><ol><li>\u63A5\u6536\u4E00\u4E2A Promise \u5B9E\u4F8B\u7684\u6570\u7EC4\u6216\u5177\u6709 Iterator \u63A5\u53E3\u7684\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570</li><li>\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 promise \u5BF9\u8C61\uFF0C</li><li>\u904D\u5386\u4F20\u5165\u7684\u53C2\u6570\uFF0C\u7528Promise.resolve()\u5C06\u53C2\u6570&quot;\u5305\u4E00\u5C42&quot;\uFF0C\u4F7F\u5176\u53D8\u6210\u4E00\u4E2Apromise\u5BF9\u8C61</li><li>\u53C2\u6570\u6240\u6709\u56DE\u8C03\u6210\u529F\u624D\u662F\u6210\u529F\uFF0C\u8FD4\u56DE\u503C\u6570\u7EC4\u4E0E\u53C2\u6570\u987A\u5E8F\u4E00\u81F4</li><li>\u53C2\u6570\u6570\u7EC4\u5176\u4E2D\u4E00\u4E2A\u5931\u8D25\uFF0C\u5219\u89E6\u53D1\u5931\u8D25\u72B6\u6001\uFF0C\u7B2C\u4E00\u4E2A\u89E6\u53D1\u5931\u8D25\u7684 Promise \u9519\u8BEF\u4FE1\u606F\u4F5C\u4E3A Promise.all \u7684\u9519\u8BEF\u4FE1\u606F\u3002</li></ol><p><strong>2\uFF09\u5B9E\u73B0\u4EE3\u7801</strong></p><p>\u4E00\u822C\u6765\u8BF4\uFF0CPromise.all \u7528\u6765\u5904\u7406\u591A\u4E2A\u5E76\u53D1\u8BF7\u6C42\uFF0C\u4E5F\u662F\u4E3A\u4E86\u9875\u9762\u6570\u636E\u6784\u9020\u7684\u65B9\u4FBF\uFF0C\u5C06\u4E00\u4E2A\u9875\u9762\u6240\u7528\u5230\u7684\u5728\u4E0D\u540C\u63A5\u53E3\u7684\u6570\u636E\u4E00\u8D77\u8BF7\u6C42\u8FC7\u6765\uFF0C\u4E0D\u8FC7\uFF0C\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u63A5\u53E3\u5931\u8D25\u4E86\uFF0C\u591A\u4E2A\u8BF7\u6C42\u4E5F\u5C31\u5931\u8D25\u4E86\uFF0C\u9875\u9762\u53EF\u80FD\u5565\u4E5F\u51FA\u4E0D\u6765\uFF0C\u8FD9\u5C31\u770B\u5F53\u524D\u9875\u9762\u7684\u8026\u5408\u7A0B\u5EA6\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    if(!Array.isArray(promises)){
        throw new TypeError(\`argument must be a array\`)
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedResult = [];
    for (let i = 0; i &lt; promiseNum; i++) {
      Promise.resolve(promises[i]).then(value=&gt;{
        resolvedCounter++;
        resolvedResult[i] = value;
        if (resolvedCounter == promiseNum) {
            return resolve(resolvedResult)
          }
      },error=&gt;{
        return reject(error)
      })
    }
  })
}
// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([p3, p1, p2]).then(res =&gt; {
    console.log(res) // [3, 1, 2]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u624B\u5199-promise-race" tabindex="-1"><a class="header-anchor" href="#_7-\u624B\u5199-promise-race" aria-hidden="true">#</a> 7. \u624B\u5199 Promise.race</h3><p>\u8BE5\u65B9\u6CD5\u7684\u53C2\u6570\u662F Promise \u5B9E\u4F8B\u6570\u7EC4, \u7136\u540E\u5176 then \u6CE8\u518C\u7684\u56DE\u8C03\u65B9\u6CD5\u662F\u6570\u7EC4\u4E2D\u7684\u67D0\u4E00\u4E2A Promise \u7684\u72B6\u6001\u53D8\u4E3A fulfilled \u7684\u65F6\u5019\u5C31\u6267\u884C. \u56E0\u4E3A Promise \u7684\u72B6\u6001<strong>\u53EA\u80FD\u6539\u53D8\u4E00\u6B21</strong>, \u90A3\u4E48\u6211\u4EEC\u53EA\u9700\u8981\u628A Promise.race \u4E2D\u4EA7\u751F\u7684 Promise \u5BF9\u8C61\u7684 resolve \u65B9\u6CD5, \u6CE8\u5165\u5230\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A Promise \u5B9E\u4F8B\u4E2D\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u5373\u53EF.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Promise.race = function (args) {
  return new Promise((resolve, reject) =&gt; {
    for (let i = 0, len = args.length; i &lt; len; i++) {
      args[i].then(resolve, reject)
    }
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-\u624B\u5199\u9632\u6296\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_8-\u624B\u5199\u9632\u6296\u51FD\u6570" aria-hidden="true">#</a> 8. \u624B\u5199\u9632\u6296\u51FD\u6570</h3><p>\u51FD\u6570\u9632\u6296\u662F\u6307\u5728\u4E8B\u4EF6\u88AB\u89E6\u53D1 n \u79D2\u540E\u518D\u6267\u884C\u56DE\u8C03\uFF0C\u5982\u679C\u5728\u8FD9 n \u79D2\u5185\u4E8B\u4EF6\u53C8\u88AB\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6\u3002\u8FD9\u53EF\u4EE5\u4F7F\u7528\u5728\u4E00\u4E9B\u70B9\u51FB\u8BF7\u6C42\u7684\u4E8B\u4EF6\u4E0A\uFF0C\u907F\u514D\u56E0\u4E3A\u7528\u6237\u7684\u591A\u6B21\u70B9\u51FB\u5411\u540E\u7AEF\u53D1\u9001\u591A\u6B21\u8BF7\u6C42\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u51FD\u6570\u9632\u6296\u7684\u5B9E\u73B0
function debounce(fn, wait) {
  let timer = null;

  return function() {
    let context = this,
        args = arguments;

    // \u5982\u679C\u6B64\u65F6\u5B58\u5728\u5B9A\u65F6\u5668\u7684\u8BDD\uFF0C\u5219\u53D6\u6D88\u4E4B\u524D\u7684\u5B9A\u65F6\u5668\u91CD\u65B0\u8BB0\u65F6
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // \u8BBE\u7F6E\u5B9A\u65F6\u5668\uFF0C\u4F7F\u4E8B\u4EF6\u95F4\u9694\u6307\u5B9A\u4E8B\u4EF6\u540E\u6267\u884C
    timer = setTimeout(() =&gt; {
      fn.apply(context, args);
    }, wait);
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-\u624B\u5199\u8282\u6D41\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_9-\u624B\u5199\u8282\u6D41\u51FD\u6570" aria-hidden="true">#</a> 9. \u624B\u5199\u8282\u6D41\u51FD\u6570</h3><p>\u51FD\u6570\u8282\u6D41\u662F\u6307\u89C4\u5B9A\u4E00\u4E2A\u5355\u4F4D\u65F6\u95F4\uFF0C\u5728\u8FD9\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\uFF0C\u53EA\u80FD\u6709\u4E00\u6B21\u89E6\u53D1\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u6267\u884C\uFF0C\u5982\u679C\u5728\u540C\u4E00\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\u67D0\u4E8B\u4EF6\u88AB\u89E6\u53D1\u591A\u6B21\uFF0C\u53EA\u6709\u4E00\u6B21\u80FD\u751F\u6548\u3002\u8282\u6D41\u53EF\u4EE5\u4F7F\u7528\u5728 scroll \u51FD\u6570\u7684\u4E8B\u4EF6\u76D1\u542C\u4E0A\uFF0C\u901A\u8FC7\u4E8B\u4EF6\u8282\u6D41\u6765\u964D\u4F4E\u4E8B\u4EF6\u8C03\u7528\u7684\u9891\u7387\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u51FD\u6570\u8282\u6D41\u7684\u5B9E\u73B0;
function throttle(fn, delay) {
  let curTime = Date.now();

  return function() {
    let context = this,
        args = arguments,
        nowTime = Date.now();

    // \u5982\u679C\u4E24\u6B21\u65F6\u95F4\u95F4\u9694\u8D85\u8FC7\u4E86\u6307\u5B9A\u65F6\u95F4\uFF0C\u5219\u6267\u884C\u51FD\u6570\u3002
    if (nowTime - curTime &gt;= delay) {
      curTime = Date.now();
      return fn.apply(context, args);
    }
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-\u624B\u5199\u7C7B\u578B\u5224\u65AD\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_10-\u624B\u5199\u7C7B\u578B\u5224\u65AD\u51FD\u6570" aria-hidden="true">#</a> 10. \u624B\u5199\u7C7B\u578B\u5224\u65AD\u51FD\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function getType(value) {
  // \u5224\u65AD\u6570\u636E\u662F null \u7684\u60C5\u51B5
  if (value === null) {
    return value + &quot;&quot;;
  }
  // \u5224\u65AD\u6570\u636E\u662F\u5F15\u7528\u7C7B\u578B\u7684\u60C5\u51B5
  if (typeof value === &quot;object&quot;) {
    let valueClass = Object.prototype.toString.call(value),
      type = valueClass.split(&quot; &quot;)[1].split(&quot;&quot;);
    type.pop();
    return type.join(&quot;&quot;).toLowerCase();
  } else {
    // \u5224\u65AD\u6570\u636E\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u60C5\u51B5\u548C\u51FD\u6570\u7684\u60C5\u51B5
    return typeof value;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-\u624B\u5199-call-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_11-\u624B\u5199-call-\u51FD\u6570" aria-hidden="true">#</a> 11. \u624B\u5199 call \u51FD\u6570</h3><p>call \u51FD\u6570\u7684\u5B9E\u73B0\u6B65\u9AA4\uFF1A</p><ol><li>\u5224\u65AD\u8C03\u7528\u5BF9\u8C61\u662F\u5426\u4E3A\u51FD\u6570\uFF0C\u5373\u4F7F\u6211\u4EEC\u662F\u5B9A\u4E49\u5728\u51FD\u6570\u7684\u539F\u578B\u4E0A\u7684\uFF0C\u4F46\u662F\u53EF\u80FD\u51FA\u73B0\u4F7F\u7528 call \u7B49\u65B9\u5F0F\u8C03\u7528\u7684\u60C5\u51B5\u3002</li><li>\u5224\u65AD\u4F20\u5165\u4E0A\u4E0B\u6587\u5BF9\u8C61\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u8BBE\u7F6E\u4E3A window \u3002</li><li>\u5904\u7406\u4F20\u5165\u7684\u53C2\u6570\uFF0C\u622A\u53D6\u7B2C\u4E00\u4E2A\u53C2\u6570\u540E\u7684\u6240\u6709\u53C2\u6570\u3002</li><li>\u5C06\u51FD\u6570\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u4E00\u4E2A\u5C5E\u6027\u3002</li><li>\u4F7F\u7528\u4E0A\u4E0B\u6587\u5BF9\u8C61\u6765\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u5E76\u4FDD\u5B58\u8FD4\u56DE\u7ED3\u679C\u3002</li><li>\u5220\u9664\u521A\u624D\u65B0\u589E\u7684\u5C5E\u6027\u3002</li><li>\u8FD4\u56DE\u7ED3\u679C\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// call\u51FD\u6570\u5B9E\u73B0
Function.prototype.myCall = function(context) {
  // \u5224\u65AD\u8C03\u7528\u5BF9\u8C61
  if (typeof this !== &quot;function&quot;) {
    console.error(&quot;type error&quot;);
  }
  // \u83B7\u53D6\u53C2\u6570
  let args = [...arguments].slice(1),
      result = null;
  // \u5224\u65AD context \u662F\u5426\u4F20\u5165\uFF0C\u5982\u679C\u672A\u4F20\u5165\u5219\u8BBE\u7F6E\u4E3A window
  context = context || window;
  // \u5C06\u8C03\u7528\u51FD\u6570\u8BBE\u4E3A\u5BF9\u8C61\u7684\u65B9\u6CD5
  context.fn = this;
  // \u8C03\u7528\u51FD\u6570
  result = context.fn(...args);
  // \u5C06\u5C5E\u6027\u5220\u9664
  delete context.fn;
  return result;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-\u624B\u5199-apply-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_12-\u624B\u5199-apply-\u51FD\u6570" aria-hidden="true">#</a> 12. \u624B\u5199 apply \u51FD\u6570</h3><p>apply \u51FD\u6570\u7684\u5B9E\u73B0\u6B65\u9AA4\uFF1A</p><ol><li>\u5224\u65AD\u8C03\u7528\u5BF9\u8C61\u662F\u5426\u4E3A\u51FD\u6570\uFF0C\u5373\u4F7F\u6211\u4EEC\u662F\u5B9A\u4E49\u5728\u51FD\u6570\u7684\u539F\u578B\u4E0A\u7684\uFF0C\u4F46\u662F\u53EF\u80FD\u51FA\u73B0\u4F7F\u7528 call \u7B49\u65B9\u5F0F\u8C03\u7528\u7684\u60C5\u51B5\u3002</li><li>\u5224\u65AD\u4F20\u5165\u4E0A\u4E0B\u6587\u5BF9\u8C61\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u8BBE\u7F6E\u4E3A window \u3002</li><li>\u5C06\u51FD\u6570\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u4E00\u4E2A\u5C5E\u6027\u3002</li><li>\u5224\u65AD\u53C2\u6570\u503C\u662F\u5426\u4F20\u5165</li><li>\u4F7F\u7528\u4E0A\u4E0B\u6587\u5BF9\u8C61\u6765\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u5E76\u4FDD\u5B58\u8FD4\u56DE\u7ED3\u679C\u3002</li><li>\u5220\u9664\u521A\u624D\u65B0\u589E\u7684\u5C5E\u6027</li><li>\u8FD4\u56DE\u7ED3\u679C</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// apply \u51FD\u6570\u5B9E\u73B0
Function.prototype.myApply = function(context) {
  // \u5224\u65AD\u8C03\u7528\u5BF9\u8C61\u662F\u5426\u4E3A\u51FD\u6570
  if (typeof this !== &quot;function&quot;) {
    throw new TypeError(&quot;Error&quot;);
  }
  let result = null;
  // \u5224\u65AD context \u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u672A\u4F20\u5165\u5219\u4E3A window
  context = context || window;
  // \u5C06\u51FD\u6570\u8BBE\u4E3A\u5BF9\u8C61\u7684\u65B9\u6CD5
  context.fn = this;
  // \u8C03\u7528\u65B9\u6CD5
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  // \u5C06\u5C5E\u6027\u5220\u9664
  delete context.fn;
  return result;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-\u624B\u5199-bind-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_13-\u624B\u5199-bind-\u51FD\u6570" aria-hidden="true">#</a> 13. \u624B\u5199 bind \u51FD\u6570</h3><p>bind \u51FD\u6570\u7684\u5B9E\u73B0\u6B65\u9AA4\uFF1A</p><ol><li>\u5224\u65AD\u8C03\u7528\u5BF9\u8C61\u662F\u5426\u4E3A\u51FD\u6570\uFF0C\u5373\u4F7F\u6211\u4EEC\u662F\u5B9A\u4E49\u5728\u51FD\u6570\u7684\u539F\u578B\u4E0A\u7684\uFF0C\u4F46\u662F\u53EF\u80FD\u51FA\u73B0\u4F7F\u7528 call \u7B49\u65B9\u5F0F\u8C03\u7528\u7684\u60C5\u51B5\u3002</li><li>\u4FDD\u5B58\u5F53\u524D\u51FD\u6570\u7684\u5F15\u7528\uFF0C\u83B7\u53D6\u5176\u4F59\u4F20\u5165\u53C2\u6570\u503C\u3002</li><li>\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE</li><li>\u51FD\u6570\u5185\u90E8\u4F7F\u7528 apply \u6765\u7ED1\u5B9A\u51FD\u6570\u8C03\u7528\uFF0C\u9700\u8981\u5224\u65AD\u51FD\u6570\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u7684\u60C5\u51B5\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u4F20\u5165\u5F53\u524D\u51FD\u6570\u7684 this \u7ED9 apply \u8C03\u7528\uFF0C\u5176\u4F59\u60C5\u51B5\u90FD\u4F20\u5165\u6307\u5B9A\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// bind \u51FD\u6570\u5B9E\u73B0
Function.prototype.myBind = function(context) {
  // \u5224\u65AD\u8C03\u7528\u5BF9\u8C61\u662F\u5426\u4E3A\u51FD\u6570
  if (typeof this !== &quot;function&quot;) {
    throw new TypeError(&quot;Error&quot;);
  }
  // \u83B7\u53D6\u53C2\u6570
  var args = [...arguments].slice(1),
      fn = this;
  return function Fn() {
    // \u6839\u636E\u8C03\u7528\u65B9\u5F0F\uFF0C\u4F20\u5165\u4E0D\u540C\u7ED1\u5B9A\u503C
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-\u51FD\u6570\u67EF\u91CC\u5316\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_14-\u51FD\u6570\u67EF\u91CC\u5316\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 14. \u51FD\u6570\u67EF\u91CC\u5316\u7684\u5B9E\u73B0</h3><p>\u51FD\u6570\u67EF\u91CC\u5316\u6307\u7684\u662F\u4E00\u79CD\u5C06\u4F7F\u7528\u591A\u4E2A\u53C2\u6570\u7684\u4E00\u4E2A\u51FD\u6570\u8F6C\u6362\u6210\u4E00\u7CFB\u5217\u4F7F\u7528\u4E00\u4E2A\u53C2\u6570\u7684\u51FD\u6570\u7684\u6280\u672F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function curry(fn, args) {
  // \u83B7\u53D6\u51FD\u6570\u9700\u8981\u7684\u53C2\u6570\u957F\u5EA6
  let length = fn.length;

  args = args || [];

  return function() {
    let subArgs = args.slice(0);

    // \u62FC\u63A5\u5F97\u5230\u73B0\u6709\u7684\u6240\u6709\u53C2\u6570
    for (let i = 0; i &lt; arguments.length; i++) {
      subArgs.push(arguments[i]);
    }

    // \u5224\u65AD\u53C2\u6570\u7684\u957F\u5EA6\u662F\u5426\u5DF2\u7ECF\u6EE1\u8DB3\u51FD\u6570\u6240\u9700\u53C2\u6570\u7684\u957F\u5EA6
    if (subArgs.length &gt;= length) {
      // \u5982\u679C\u6EE1\u8DB3\uFF0C\u6267\u884C\u51FD\u6570
      return fn.apply(this, subArgs);
    } else {
      // \u5982\u679C\u4E0D\u6EE1\u8DB3\uFF0C\u9012\u5F52\u8FD4\u56DE\u79D1\u91CC\u5316\u7684\u51FD\u6570\uFF0C\u7B49\u5F85\u53C2\u6570\u7684\u4F20\u5165
      return curry.call(this, fn, subArgs);
    }
  };
}

// es6 \u5B9E\u73B0
function curry(fn, ...args) {
  return fn.length &lt;= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-\u5B9E\u73B0ajax\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_15-\u5B9E\u73B0ajax\u8BF7\u6C42" aria-hidden="true">#</a> 15. \u5B9E\u73B0AJAX\u8BF7\u6C42</h3><p>AJAX\u662F Asynchronous JavaScript and XML \u7684\u7F29\u5199\uFF0C\u6307\u7684\u662F\u901A\u8FC7 JavaScript \u7684 \u5F02\u6B65\u901A\u4FE1\uFF0C\u4ECE\u670D\u52A1\u5668\u83B7\u53D6 XML \u6587\u6863\u4ECE\u4E2D\u63D0\u53D6\u6570\u636E\uFF0C\u518D\u66F4\u65B0\u5F53\u524D\u7F51\u9875\u7684\u5BF9\u5E94\u90E8\u5206\uFF0C\u800C\u4E0D\u7528\u5237\u65B0\u6574\u4E2A\u7F51\u9875\u3002</p><p>\u521B\u5EFAAJAX\u8BF7\u6C42\u7684\u6B65\u9AA4\uFF1A</p><ul><li><strong>\u521B\u5EFA\u4E00\u4E2A XMLHttpRequest \u5BF9\u8C61\u3002</strong></li><li>\u5728\u8FD9\u4E2A\u5BF9\u8C61\u4E0A<strong>\u4F7F\u7528 open \u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A HTTP \u8BF7\u6C42</strong>\uFF0Copen \u65B9\u6CD5\u6240\u9700\u8981\u7684\u53C2\u6570\u662F\u8BF7\u6C42\u7684\u65B9\u6CD5\u3001\u8BF7\u6C42\u7684\u5730\u5740\u3001\u662F\u5426\u5F02\u6B65\u548C\u7528\u6237\u7684\u8BA4\u8BC1\u4FE1\u606F\u3002</li><li>\u5728\u53D1\u8D77\u8BF7\u6C42\u524D\uFF0C\u53EF\u4EE5\u4E3A\u8FD9\u4E2A\u5BF9\u8C61<strong>\u6DFB\u52A0\u4E00\u4E9B\u4FE1\u606F\u548C\u76D1\u542C\u51FD\u6570</strong>\u3002\u6BD4\u5982\u8BF4\u53EF\u4EE5\u901A\u8FC7 setRequestHeader \u65B9\u6CD5\u6765\u4E3A\u8BF7\u6C42\u6DFB\u52A0\u5934\u4FE1\u606F\u3002\u8FD8\u53EF\u4EE5\u4E3A\u8FD9\u4E2A\u5BF9\u8C61\u6DFB\u52A0\u4E00\u4E2A\u72B6\u6001\u76D1\u542C\u51FD\u6570\u3002\u4E00\u4E2A XMLHttpRequest \u5BF9\u8C61\u4E00\u5171\u6709 5 \u4E2A\u72B6\u6001\uFF0C\u5F53\u5B83\u7684\u72B6\u6001\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1onreadystatechange \u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u76D1\u542C\u51FD\u6570\uFF0C\u6765\u5904\u7406\u8BF7\u6C42\u6210\u529F\u540E\u7684\u7ED3\u679C\u3002\u5F53\u5BF9\u8C61\u7684 readyState \u53D8\u4E3A 4 \u7684\u65F6\u5019\uFF0C\u4EE3\u8868\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u6570\u636E\u63A5\u6536\u5B8C\u6210\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7\u5224\u65AD\u8BF7\u6C42\u7684\u72B6\u6001\uFF0C\u5982\u679C\u72B6\u6001\u662F 2xx \u6216\u8005 304 \u7684\u8BDD\u5219\u4EE3\u8868\u8FD4\u56DE\u6B63\u5E38\u3002\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u901A\u8FC7 response \u4E2D\u7684\u6570\u636E\u6765\u5BF9\u9875\u9762\u8FDB\u884C\u66F4\u65B0\u4E86\u3002</li><li>\u5F53\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u76D1\u542C\u51FD\u6570\u8BBE\u7F6E\u5B8C\u6210\u540E\uFF0C\u6700\u540E\u8C03<strong>\u7528 sent \u65B9\u6CD5\u6765\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42</strong>\uFF0C\u53EF\u4EE5\u4F20\u5165\u53C2\u6570\u4F5C\u4E3A\u53D1\u9001\u7684\u6570\u636E\u4F53\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const SERVER_URL = &quot;/server&quot;;
let xhr = new XMLHttpRequest();
// \u521B\u5EFA Http \u8BF7\u6C42
xhr.open(&quot;GET&quot;, SERVER_URL, true);
// \u8BBE\u7F6E\u72B6\u6001\u76D1\u542C\u51FD\u6570
xhr.onreadystatechange = function() {
  if (this.readyState !== 4) return;
  // \u5F53\u8BF7\u6C42\u6210\u529F\u65F6
  if (this.status === 200) {
    handle(this.response);
  } else {
    console.error(this.statusText);
  }
};
// \u8BBE\u7F6E\u8BF7\u6C42\u5931\u8D25\u65F6\u7684\u76D1\u542C\u51FD\u6570
xhr.onerror = function() {
  console.error(this.statusText);
};
// \u8BBE\u7F6E\u8BF7\u6C42\u5934\u4FE1\u606F
xhr.responseType = &quot;json&quot;;
xhr.setRequestHeader(&quot;Accept&quot;, &quot;application/json&quot;);
// \u53D1\u9001 Http \u8BF7\u6C42
xhr.send(null);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-\u4F7F\u7528promise\u5C01\u88C5ajax\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_16-\u4F7F\u7528promise\u5C01\u88C5ajax\u8BF7\u6C42" aria-hidden="true">#</a> 16. \u4F7F\u7528Promise\u5C01\u88C5AJAX\u8BF7\u6C42</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// promise \u5C01\u88C5\u5B9E\u73B0\uFF1A
function getJSON(url) {
  // \u521B\u5EFA\u4E00\u4E2A promise \u5BF9\u8C61
  let promise = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    // \u65B0\u5EFA\u4E00\u4E2A http \u8BF7\u6C42
    xhr.open(&quot;GET&quot;, url, true);
    // \u8BBE\u7F6E\u72B6\u6001\u7684\u76D1\u542C\u51FD\u6570
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) return;
      // \u5F53\u8BF7\u6C42\u6210\u529F\u6216\u5931\u8D25\u65F6\uFF0C\u6539\u53D8 promise \u7684\u72B6\u6001
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    // \u8BBE\u7F6E\u9519\u8BEF\u76D1\u542C\u51FD\u6570
    xhr.onerror = function() {
      reject(new Error(this.statusText));
    };
    // \u8BBE\u7F6E\u54CD\u5E94\u7684\u6570\u636E\u7C7B\u578B
    xhr.responseType = &quot;json&quot;;
    // \u8BBE\u7F6E\u8BF7\u6C42\u5934\u4FE1\u606F
    xhr.setRequestHeader(&quot;Accept&quot;, &quot;application/json&quot;);
    // \u53D1\u9001 http \u8BF7\u6C42
    xhr.send(null);
  });
  return promise;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-\u5B9E\u73B0\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#_17-\u5B9E\u73B0\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> 17. \u5B9E\u73B0\u6D45\u62F7\u8D1D</h3><p>\u6D45\u62F7\u8D1D\u662F\u6307\uFF0C\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u5BF9\u539F\u59CB\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u8FDB\u884C\u7CBE\u786E\u5730\u62F7\u8D1D\uFF0C\u5982\u679C\u62F7\u8D1D\u7684\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u62F7\u8D1D\u7684\u5C31\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u503C\uFF0C\u5982\u679C\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u62F7\u8D1D\u7684\u5C31\u662F\u5185\u5B58\u5730\u5740\u3002\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\u5185\u5B58\u5730\u5740\u53D1\u751F\u6539\u53D8\uFF0C\u53E6\u4E00\u4E2A\u5BF9\u8C61\u4E5F\u4F1A\u53D1\u751F\u53D8\u5316\u3002</p><h4 id="_1-object-assign" tabindex="-1"><a class="header-anchor" href="#_1-object-assign" aria-hidden="true">#</a> \uFF081\uFF09Object.assign()</h4><p><code>Object.assign()</code>\u662FES6\u4E2D\u5BF9\u8C61\u7684\u62F7\u8D1D\u65B9\u6CD5\uFF0C\u63A5\u53D7\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u76EE\u6807\u5BF9\u8C61\uFF0C\u5176\u4F59\u53C2\u6570\u662F\u6E90\u5BF9\u8C61\uFF0C\u7528\u6CD5\uFF1A<code>Object.assign(target, source_1, \xB7\xB7\xB7)</code>\uFF0C\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u6D45\u62F7\u8D1D\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u4E00\u7EF4\u5BF9\u8C61\u7684\u6DF1\u62F7\u8D1D\u3002</p><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li>\u5982\u679C\u76EE\u6807\u5BF9\u8C61\u548C\u6E90\u5BF9\u8C61\u6709\u540C\u540D\u5C5E\u6027\uFF0C\u6216\u8005\u591A\u4E2A\u6E90\u5BF9\u8C61\u6709\u540C\u540D\u5C5E\u6027\uFF0C\u5219\u540E\u9762\u7684\u5C5E\u6027\u4F1A\u8986\u76D6\u524D\u9762\u7684\u5C5E\u6027\u3002</li><li>\u5982\u679C\u8BE5\u51FD\u6570\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\uFF0C\u5F53\u53C2\u6570\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u76F4\u63A5\u8FD4\u56DE\u8BE5\u5BF9\u8C61\uFF1B\u5F53\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\u65F6\uFF0C\u4F1A\u5148\u5C06\u53C2\u6570\u8F6C\u4E3A\u5BF9\u8C61\u7136\u540E\u8FD4\u56DE\u3002</li><li>\u56E0\u4E3A<code>null</code> \u548C <code>undefined</code> \u4E0D\u80FD\u8F6C\u5316\u4E3A\u5BF9\u8C61\uFF0C\u6240\u4EE5\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E0D\u80FD\u4E3A<code>null</code>\u6216 <code>undefined</code>\uFF0C\u4F1A\u62A5\u9519\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let target = {a: 1};
let object2 = {b: 2};
let object3 = {c: 3};
Object.assign(target,object2,object3);  
console.log(target);  // {a: 1, b: 2, c: 3}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u6269\u5C55\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_2-\u6269\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \uFF082\uFF09\u6269\u5C55\u8FD0\u7B97\u7B26</h4><p>\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u53EF\u4EE5\u5728\u6784\u9020\u5B57\u9762\u91CF\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u8FDB\u884C\u5C5E\u6027\u7684\u62F7\u8D1D\u3002\u8BED\u6CD5\uFF1A<code>let cloneObj = { ...obj };</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let obj1 = {a:1,b:{c:1}}
let obj2 = {...obj1};
obj1.a = 2;
console.log(obj1); //{a:2,b:{c:1}}
console.log(obj2); //{a:1,b:{c:1}}
obj1.b.c = 2;
console.log(obj1); //{a:2,b:{c:2}}
console.log(obj2); //{a:1,b:{c:2}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-\u6570\u7EC4\u65B9\u6CD5\u5B9E\u73B0\u6570\u7EC4\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u7EC4\u65B9\u6CD5\u5B9E\u73B0\u6570\u7EC4\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \uFF083\uFF09\u6570\u7EC4\u65B9\u6CD5\u5B9E\u73B0\u6570\u7EC4\u6D45\u62F7\u8D1D</h4><h6 id="_1-array-prototype-slice" tabindex="-1"><a class="header-anchor" href="#_1-array-prototype-slice" aria-hidden="true">#</a> <strong>1\uFF09Array.prototype.slice</strong></h6><ul><li><code>slice()</code>\u65B9\u6CD5\u662FJavaScript\u6570\u7EC4\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u4ECE\u5DF2\u6709\u6570\u7EC4\u4E2D\u8FD4\u56DE\u9009\u5B9A\u7684\u5143\u7D20\uFF1A\u7528\u6CD5\uFF1A<code>array.slice(start, end)</code>\uFF0C\u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u6539\u53D8\u539F\u59CB\u6570\u7EC4\u3002</li><li>\u8BE5\u65B9\u6CD5\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C\u4E24\u4E2A\u53C2\u6570\u90FD\u53EF\u9009\uFF0C\u5982\u679C\u4E24\u4E2A\u53C2\u6570\u90FD\u4E0D\u5199\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u6570\u7EC4\u7684\u6D45\u62F7\u8D1D\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4];
console.log(arr.slice()); // [1,2,3,4]
console.log(arr.slice() === arr); //false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-array-prototype-concat" tabindex="-1"><a class="header-anchor" href="#_2-array-prototype-concat" aria-hidden="true">#</a> <strong>2\uFF09Array.prototype.concat</strong></h6><ul><li><code>concat()</code> \u65B9\u6CD5\u7528\u4E8E\u5408\u5E76\u4E24\u4E2A\u6216\u591A\u4E2A\u6570\u7EC4\u3002\u6B64\u65B9\u6CD5\u4E0D\u4F1A\u66F4\u6539\u73B0\u6709\u6570\u7EC4\uFF0C\u800C\u662F\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002</li><li>\u8BE5\u65B9\u6CD5\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C\u4E24\u4E2A\u53C2\u6570\u90FD\u53EF\u9009\uFF0C\u5982\u679C\u4E24\u4E2A\u53C2\u6570\u90FD\u4E0D\u5199\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u6570\u7EC4\u7684\u6D45\u62F7\u8D1D\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4];
console.log(arr.concat()); // [1,2,3,4]
console.log(arr.concat() === arr); //false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-\u624B\u5199\u5B9E\u73B0\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#_4-\u624B\u5199\u5B9E\u73B0\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \uFF084\uFF09\u624B\u5199\u5B9E\u73B0\u6D45\u62F7\u8D1D</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6D45\u62F7\u8D1D\u7684\u5B9E\u73B0;

function shallowCopy(object) {
  // \u53EA\u62F7\u8D1D\u5BF9\u8C61
  if (!object || typeof object !== &quot;object&quot;) return;

  // \u6839\u636E object \u7684\u7C7B\u578B\u5224\u65AD\u662F\u65B0\u5EFA\u4E00\u4E2A\u6570\u7EC4\u8FD8\u662F\u5BF9\u8C61
  let newObject = Array.isArray(object) ? [] : {};

  // \u904D\u5386 object\uFF0C\u5E76\u4E14\u5224\u65AD\u662F object \u7684\u5C5E\u6027\u624D\u62F7\u8D1D
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}// \u6D45\u62F7\u8D1D\u7684\u5B9E\u73B0;

function shallowCopy(object) {
  // \u53EA\u62F7\u8D1D\u5BF9\u8C61
  if (!object || typeof object !== &quot;object&quot;) return;

  // \u6839\u636E object \u7684\u7C7B\u578B\u5224\u65AD\u662F\u65B0\u5EFA\u4E00\u4E2A\u6570\u7EC4\u8FD8\u662F\u5BF9\u8C61
  let newObject = Array.isArray(object) ? [] : {};

  // \u904D\u5386 object\uFF0C\u5E76\u4E14\u5224\u65AD\u662F object \u7684\u5C5E\u6027\u624D\u62F7\u8D1D
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}// \u6D45\u62F7\u8D1D\u7684\u5B9E\u73B0;
function shallowCopy(object) {
  // \u53EA\u62F7\u8D1D\u5BF9\u8C61
  if (!object || typeof object !== &quot;object&quot;) return;
  // \u6839\u636E object \u7684\u7C7B\u578B\u5224\u65AD\u662F\u65B0\u5EFA\u4E00\u4E2A\u6570\u7EC4\u8FD8\u662F\u5BF9\u8C61
  let newObject = Array.isArray(object) ? [] : {};
  // \u904D\u5386 object\uFF0C\u5E76\u4E14\u5224\u65AD\u662F object \u7684\u5C5E\u6027\u624D\u62F7\u8D1D
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }
  return newObject;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-\u5B9E\u73B0\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#_18-\u5B9E\u73B0\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> 18. \u5B9E\u73B0\u6DF1\u62F7\u8D1D</h3><ul><li>**\u6D45\u62F7\u8D1D\uFF1A**\u6D45\u62F7\u8D1D\u6307\u7684\u662F\u5C06\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u590D\u5236\u5230\u53E6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5982\u679C\u6709\u7684\u5C5E\u6027\u7684\u503C\u4E3A\u5F15\u7528\u7C7B\u578B\u7684\u8BDD\uFF0C\u90A3\u4E48\u4F1A\u5C06\u8FD9\u4E2A\u5F15\u7528\u7684\u5730\u5740\u590D\u5236\u7ED9\u5BF9\u8C61\uFF0C\u56E0\u6B64\u4E24\u4E2A\u5BF9\u8C61\u4F1A\u6709\u540C\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u5F15\u7528\u3002\u6D45\u62F7\u8D1D\u53EF\u4EE5\u4F7F\u7528 Object.assign \u548C\u5C55\u5F00\u8FD0\u7B97\u7B26\u6765\u5B9E\u73B0\u3002</li><li>**\u6DF1\u62F7\u8D1D\uFF1A**\u6DF1\u62F7\u8D1D\u76F8\u5BF9\u6D45\u62F7\u8D1D\u800C\u8A00\uFF0C\u5982\u679C\u9047\u5230\u5C5E\u6027\u503C\u4E3A\u5F15\u7528\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u5B83\u65B0\u5EFA\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u5E76\u5C06\u5BF9\u5E94\u7684\u503C\u590D\u5236\u7ED9\u5B83\uFF0C\u56E0\u6B64\u5BF9\u8C61\u83B7\u5F97\u7684\u4E00\u4E2A\u65B0\u7684\u5F15\u7528\u7C7B\u578B\u800C\u4E0D\u662F\u4E00\u4E2A\u539F\u6709\u7C7B\u578B\u7684\u5F15\u7528\u3002\u6DF1\u62F7\u8D1D\u5BF9\u4E8E\u4E00\u4E9B\u5BF9\u8C61\u53EF\u4EE5\u4F7F\u7528 JSON \u7684\u4E24\u4E2A\u51FD\u6570\u6765\u5B9E\u73B0\uFF0C\u4F46\u662F\u7531\u4E8E JSON \u7684\u5BF9\u8C61\u683C\u5F0F\u6BD4 js \u7684\u5BF9\u8C61\u683C\u5F0F\u66F4\u52A0\u4E25\u683C\uFF0C\u6240\u4EE5\u5982\u679C\u5C5E\u6027\u503C\u91CC\u8FB9\u51FA\u73B0\u51FD\u6570\u6216\u8005 Symbol \u7C7B\u578B\u7684\u503C\u65F6\uFF0C\u4F1A\u8F6C\u6362\u5931\u8D25</li></ul><h4 id="_1-json-stringify" tabindex="-1"><a class="header-anchor" href="#_1-json-stringify" aria-hidden="true">#</a> \uFF081\uFF09JSON.stringify()</h4><ul><li><code>JSON.parse(JSON.stringify(obj))</code>\u662F\u76EE\u524D\u6BD4\u8F83\u5E38\u7528\u7684\u6DF1\u62F7\u8D1D\u65B9\u6CD5\u4E4B\u4E00\uFF0C\u5B83\u7684\u539F\u7406\u5C31\u662F\u5229\u7528<code>JSON.stringify</code> \u5C06<code>js</code>\u5BF9\u8C61\u5E8F\u5217\u5316\uFF08JSON\u5B57\u7B26\u4E32\uFF09\uFF0C\u518D\u4F7F\u7528<code>JSON.parse</code>\u6765\u53CD\u5E8F\u5217\u5316(\u8FD8\u539F)<code>js</code>\u5BF9\u8C61\u3002</li><li>\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u7B80\u5355\u7C97\u66B4\u7684\u5B9E\u73B0\u6DF1\u62F7\u8D1D\uFF0C\u4F46\u662F\u8FD8\u5B58\u5728\u95EE\u9898\uFF0C\u62F7\u8D1D\u7684\u5BF9\u8C61\u4E2D\u5982\u679C\u6709\u51FD\u6570\uFF0Cundefined\uFF0Csymbol\uFF0C\u5F53\u4F7F\u7528\u8FC7<code>JSON.stringify()</code>\u8FDB\u884C\u5904\u7406\u4E4B\u540E\uFF0C\u90FD\u4F1A\u6D88\u5931\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let obj1 = {  a: 0,
              b: {
                 c: 0
                 }
            };
let obj2 = JSON.parse(JSON.stringify(obj1));
obj1.a = 1;
obj1.b.c = 1;
console.log(obj1); // {a: 1, b: {c: 1}}
console.log(obj2); // {a: 0, b: {c: 0}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u51FD\u6570\u5E93lodash\u7684-clonedeep\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u51FD\u6570\u5E93lodash\u7684-clonedeep\u65B9\u6CD5" aria-hidden="true">#</a> \uFF082\uFF09\u51FD\u6570\u5E93lodash\u7684_.cloneDeep\u65B9\u6CD5</h4><p>\u8BE5\u51FD\u6570\u5E93\u4E5F\u6709\u63D0\u4F9B_.cloneDeep\u7528\u6765\u505A Deep Copy</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var _ = require(&#39;lodash&#39;);
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f);// false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-\u624B\u5199\u5B9E\u73B0\u6DF1\u62F7\u8D1D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_3-\u624B\u5199\u5B9E\u73B0\u6DF1\u62F7\u8D1D\u51FD\u6570" aria-hidden="true">#</a> \uFF083\uFF09\u624B\u5199\u5B9E\u73B0\u6DF1\u62F7\u8D1D\u51FD\u6570</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6DF1\u62F7\u8D1D\u7684\u5B9E\u73B0
function deepCopy(object) {
  if (!object || typeof object !== &quot;object&quot;) return;

  let newObject = Array.isArray(object) ? [] : {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] =
        typeof object[key] === &quot;object&quot; ? deepCopy(object[key]) : object[key];
    }
  }

  return newObject;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19-\u5B9E\u73B0sleep\u51FD\u6570-\u4F7F\u7528promise\u5C01\u88C5settimeout" tabindex="-1"><a class="header-anchor" href="#_19-\u5B9E\u73B0sleep\u51FD\u6570-\u4F7F\u7528promise\u5C01\u88C5settimeout" aria-hidden="true">#</a> 19. \u5B9E\u73B0sleep\u51FD\u6570\uFF08\u4F7F\u7528Promise\u5C01\u88C5setTimeout\uFF09</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token parameter">delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-\u5B9E\u73B0object-assign" tabindex="-1"><a class="header-anchor" href="#_20-\u5B9E\u73B0object-assign" aria-hidden="true">#</a> 20. \u5B9E\u73B0Object.assign</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function-variable function">myAssign</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> <span class="token operator">...</span>source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Cannot convert undefined or null to object&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> 
    source<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ret<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u6570\u636E\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6570\u636E\u5904\u7406" aria-hidden="true">#</a> \u4E8C\u3001\u6570\u636E\u5904\u7406</h2><h3 id="_1-\u5B9E\u73B0\u65E5\u671F\u683C\u5F0F\u5316\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u5B9E\u73B0\u65E5\u671F\u683C\u5F0F\u5316\u51FD\u6570" aria-hidden="true">#</a> 1. \u5B9E\u73B0\u65E5\u671F\u683C\u5F0F\u5316\u51FD\u6570</h3><p>\u8F93\u5165\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">dateFormat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2020-12-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy/MM/dd&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2020/12/01</span>
<span class="token function">dateFormat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2020-04-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy/MM/dd&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2020/04/01</span>
<span class="token function">dateFormat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2020-04-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy\u5E74MM\u6708dd\u65E5&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2020\u5E7404\u670801\u65E5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">dateFormat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dateInput<span class="token punctuation">,</span> format</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> day <span class="token operator">=</span> dateInput<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token keyword">var</span> month <span class="token operator">=</span> dateInput<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>  
    <span class="token keyword">var</span> year <span class="token operator">=</span> dateInput<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   
    format <span class="token operator">=</span> format<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">yyyy</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> year<span class="token punctuation">)</span>
    format <span class="token operator">=</span> format<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">MM</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>month<span class="token punctuation">)</span>
    format <span class="token operator">=</span> format<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">dd</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>day<span class="token punctuation">)</span>
    <span class="token keyword">return</span> format
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u4EA4\u6362a-b\u7684\u503C-\u4E0D\u80FD\u7528\u4E34\u65F6\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-\u4EA4\u6362a-b\u7684\u503C-\u4E0D\u80FD\u7528\u4E34\u65F6\u53D8\u91CF" aria-hidden="true">#</a> 2. \u4EA4\u6362a,b\u7684\u503C\uFF0C\u4E0D\u80FD\u7528\u4E34\u65F6\u53D8\u91CF</h3><p>\u5DE7\u5999\u7684\u5229\u7528\u4E24\u4E2A\u6570\u7684\u548C\u3001\u5DEE\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>a <span class="token operator">=</span> a <span class="token operator">+</span> b
b <span class="token operator">=</span> a <span class="token operator">-</span> b
a <span class="token operator">=</span> a <span class="token operator">-</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5B9E\u73B0\u6570\u7EC4\u7684\u4E71\u5E8F\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#_3-\u5B9E\u73B0\u6570\u7EC4\u7684\u4E71\u5E8F\u8F93\u51FA" aria-hidden="true">#</a> 3. \u5B9E\u73B0\u6570\u7EC4\u7684\u4E71\u5E8F\u8F93\u51FA</h3><p>\u4E3B\u8981\u7684\u5B9E\u73B0\u601D\u8DEF\u5C31\u662F\uFF1A</p><ul><li>\u53D6\u51FA\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u968F\u673A\u4EA7\u751F\u4E00\u4E2A\u7D22\u5F15\u503C\uFF0C\u5C06\u8BE5\u7B2C\u4E00\u4E2A\u5143\u7D20\u548C\u8FD9\u4E2A\u7D22\u5F15\u5BF9\u5E94\u7684\u5143\u7D20\u8FDB\u884C\u4EA4\u6362\u3002</li><li>\u7B2C\u4E8C\u6B21\u53D6\u51FA\u6570\u636E\u6570\u7EC4\u7B2C\u4E8C\u4E2A\u5143\u7D20\uFF0C\u968F\u673A\u4EA7\u751F\u4E00\u4E2A\u9664\u4E86\u7D22\u5F15\u4E3A1\u7684\u4E4B\u5916\u7684\u7D22\u5F15\u503C\uFF0C\u5E76\u5C06\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4E0E\u8BE5\u7D22\u5F15\u503C\u5BF9\u5E94\u7684\u5143\u7D20\u8FDB\u884C\u4EA4\u6362</li><li>\u6309\u7167\u4E0A\u9762\u7684\u89C4\u5F8B\u6267\u884C\uFF0C\u76F4\u5230\u904D\u5386\u5B8C\u6210</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> randomIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u6709\u4E00\u65B9\u6CD5\u5C31\u662F\u5012\u5E8F\u904D\u5386\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [1,2,3,4,5,6,7,8,9,10];
let length = arr.length,
    randomIndex,
    temp;
  while (length) {
    randomIndex = Math.floor(Math.random() * length--);
    temp = arr[length];
    arr[length] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
console.log(arr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u5B9E\u73B0\u6570\u7EC4\u5143\u7D20\u6C42\u548C" tabindex="-1"><a class="header-anchor" href="#_4-\u5B9E\u73B0\u6570\u7EC4\u5143\u7D20\u6C42\u548C" aria-hidden="true">#</a> 4. \u5B9E\u73B0\u6570\u7EC4\u5143\u7D20\u6C42\u548C</h3><ul><li>arr=[1,2,3,4,5,6,7,8,9,10]\uFF0C\u6C42\u548C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr=[1,2,3,4,5,6,7,8,9,10]
let sum = arr.reduce( (total,i) =&gt; total += i,0);
console.log(sum);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>arr=[1,2,3,[[4,5],6],7,8,9]\uFF0C\u6C42\u548C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var = arr=[1,2,3,[[4,5],6],7,8,9]
let arr= arr.toString().split(&#39;,&#39;).reduce( (total,i) =&gt; total += Number(i),0);
console.log(arr);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9012\u5F52\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, 2, 3, 4, 5, 6] 

function add(arr) {
    if (arr.length == 1) return arr[0] 
    return arr[0] + add(arr.slice(1)) 
}
console.log(add(arr)) // 21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u5B9E\u73B0\u6570\u7EC4\u7684\u6241\u5E73\u5316" tabindex="-1"><a class="header-anchor" href="#_5-\u5B9E\u73B0\u6570\u7EC4\u7684\u6241\u5E73\u5316" aria-hidden="true">#</a> 5. \u5B9E\u73B0\u6570\u7EC4\u7684\u6241\u5E73\u5316</h3><p><strong>\uFF081\uFF09\u9012\u5F52\u5B9E\u73B0</strong></p><p>\u666E\u901A\u7684\u9012\u5F52\u601D\u8DEF\u5F88\u5BB9\u6613\u7406\u89E3\uFF0C\u5C31\u662F\u901A\u8FC7\u5FAA\u73AF\u9012\u5F52\u7684\u65B9\u5F0F\uFF0C\u4E00\u9879\u4E00\u9879\u5730\u53BB\u904D\u5386\uFF0C\u5982\u679C\u6BCF\u4E00\u9879\u8FD8\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u90A3\u4E48\u5C31\u7EE7\u7EED\u5F80\u4E0B\u904D\u5386\uFF0C\u5229\u7528\u9012\u5F52\u7A0B\u5E8F\u7684\u65B9\u6CD5\uFF0C\u6765\u5B9E\u73B0\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u7684\u8FDE\u63A5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, [2, [3, 4, 5]]];
function flatten(arr) {
  let result = [];

  for(let i = 0; i &lt; arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
flatten(arr);  //  [1, 2, 3, 4\uFF0C5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\uFF082\uFF09reduce \u51FD\u6570\u8FED\u4EE3</strong></p><p>\u4ECE\u4E0A\u9762\u666E\u901A\u7684\u9012\u5F52\u51FD\u6570\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u5176\u5B9E\u5C31\u662F\u5BF9\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u8FDB\u884C\u5904\u7406\uFF0C\u90A3\u4E48\u5176\u5B9E\u4E5F\u53EF\u4EE5\u7528reduce \u6765\u5B9E\u73B0\u6570\u7EC4\u7684\u62FC\u63A5\uFF0C\u4ECE\u800C\u7B80\u5316\u7B2C\u4E00\u79CD\u65B9\u6CD5\u7684\u4EE3\u7801\uFF0C\u6539\u9020\u540E\u7684\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, [2, [3, 4]]];
function flatten(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}
console.log(flatten(arr));//  [1, 2, 3, 4\uFF0C5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\uFF083\uFF09\u6269\u5C55\u8FD0\u7B97\u7B26\u5B9E\u73B0</strong></p><p>\u8FD9\u4E2A\u65B9\u6CD5\u7684\u5B9E\u73B0\uFF0C\u91C7\u7528\u4E86\u6269\u5C55\u8FD0\u7B97\u7B26\u548C some \u7684\u65B9\u6CD5\uFF0C\u4E24\u8005\u5171\u540C\u4F7F\u7528\uFF0C\u8FBE\u5230\u6570\u7EC4\u6241\u5E73\u5316\u7684\u76EE\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, [2, [3, 4]]];
function flatten(arr) {
    while (arr.some(item =&gt; Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten(arr)); //  [1, 2, 3, 4\uFF0C5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\uFF084\uFF09split \u548C toString</strong></p><p>\u53EF\u4EE5\u901A\u8FC7 split \u548C toString \u4E24\u4E2A\u65B9\u6CD5\u6765\u5171\u540C\u5B9E\u73B0\u6570\u7EC4\u6241\u5E73\u5316\uFF0C\u7531\u4E8E\u6570\u7EC4\u4F1A\u9ED8\u8BA4\u5E26\u4E00\u4E2A toString \u7684\u65B9\u6CD5\uFF0C\u6240\u4EE5\u53EF\u4EE5\u628A\u6570\u7EC4\u76F4\u63A5\u8F6C\u6362\u6210\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u518D\u7528 split \u65B9\u6CD5\u628A\u5B57\u7B26\u4E32\u91CD\u65B0\u8F6C\u6362\u4E3A\u6570\u7EC4\uFF0C\u5982\u4E0B\u9762\u7684\u4EE3\u7801\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, [2, [3, 4]]];
function flatten(arr) {
    return arr.toString().split(&#39;,&#39;);
}
console.log(flatten(arr)); //  [1, 2, 3, 4\uFF0C5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u5C06\u591A\u7EF4\u6570\u7EC4\u76F4\u63A5\u8F6C\u6362\u6210\u9017\u53F7\u8FDE\u63A5\u7684\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u518D\u91CD\u65B0\u5206\u9694\u6210\u6570\u7EC4\u3002</p><p>**\uFF085\uFF09**<strong>ES6 \u4E2D\u7684 flat</strong></p><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528 ES6 \u4E2D\u7684 flat \u65B9\u6CD5\u6765\u5B9E\u73B0\u6570\u7EC4\u6241\u5E73\u5316\u3002flat \u65B9\u6CD5\u7684\u8BED\u6CD5\uFF1A<code>arr.flat([depth])</code></p><p>\u5176\u4E2D depth \u662F flat \u7684\u53C2\u6570\uFF0Cdepth \u662F\u53EF\u4EE5\u4F20\u9012\u6570\u7EC4\u7684\u5C55\u5F00\u6DF1\u5EA6\uFF08\u9ED8\u8BA4\u4E0D\u586B\u3001\u6570\u503C\u662F 1\uFF09\uFF0C\u5373\u5C55\u5F00\u4E00\u5C42\u6570\u7EC4\u3002\u5982\u679C\u5C42\u6570\u4E0D\u786E\u5B9A\uFF0C\u53C2\u6570\u53EF\u4EE5\u4F20\u8FDB Infinity\uFF0C\u4EE3\u8868\u4E0D\u8BBA\u591A\u5C11\u5C42\u90FD\u8981\u5C55\u5F00\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, [2, [3, 4]]];
function flatten(arr) {
  return arr.flat(Infinity);
}
console.log(flatten(arr)); //  [1, 2, 3, 4\uFF0C5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u4E00\u4E2A\u5D4C\u5957\u4E86\u4E24\u5C42\u7684\u6570\u7EC4\uFF0C\u901A\u8FC7\u5C06 flat \u65B9\u6CD5\u7684\u53C2\u6570\u8BBE\u7F6E\u4E3A Infinity\uFF0C\u8FBE\u5230\u4E86\u6211\u4EEC\u9884\u671F\u7684\u6548\u679C\u3002\u5176\u5B9E\u540C\u6837\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u6210 2\uFF0C\u4E5F\u80FD\u5B9E\u73B0\u8FD9\u6837\u7684\u6548\u679C\u3002\u5728\u7F16\u7A0B\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u6570\u7EC4\u7684\u5D4C\u5957\u5C42\u6570\u4E0D\u786E\u5B9A\uFF0C\u6700\u597D\u76F4\u63A5\u4F7F\u7528 Infinity\uFF0C\u53EF\u4EE5\u8FBE\u5230\u6241\u5E73\u5316\u3002</p><p><strong>\uFF086\uFF09\u6B63\u5219\u548C JSON \u65B9\u6CD5</strong></p><p>\u5728\u7B2C4\u79CD\u65B9\u6CD5\u4E2D\u5DF2\u7ECF\u4F7F\u7528 toString \u65B9\u6CD5\uFF0C\u5176\u4E2D\u4ECD\u7136\u91C7\u7528\u4E86\u5C06 JSON.stringify \u7684\u65B9\u6CD5\u5148\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u901A\u8FC7\u6B63\u5219\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u6389\u5B57\u7B26\u4E32\u4E2D\u7684\u6570\u7EC4\u7684\u65B9\u62EC\u53F7\uFF0C\u6700\u540E\u518D\u5229\u7528 JSON.parse \u628A\u5B83\u8F6C\u6362\u6210\u6570\u7EC4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1, [2, [3, [4, 5]]], 6];
function flatten(arr) {
  let str = JSON.stringify(arr);
  str = str.replace(/(\\[|\\])/g, &#39;&#39;);
  str = &#39;[&#39; + str + &#39;]&#39;;
  return JSON.parse(str); 
}
console.log(flatten(arr)); //  [1, 2, 3, 4\uFF0C5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u5B9E\u73B0\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#_6-\u5B9E\u73B0\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> 6. \u5B9E\u73B0\u6570\u7EC4\u53BB\u91CD</h3><p>\u7ED9\u5B9A\u67D0\u65E0\u5E8F\u6570\u7EC4\uFF0C\u8981\u6C42\u53BB\u9664\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u6570\u5B57\u5E76\u4E14\u8FD4\u56DE\u65B0\u7684\u65E0\u91CD\u590D\u6570\u7EC4\u3002</p><p>ES6\u65B9\u6CD5\uFF08\u4F7F\u7528\u6570\u636E\u7ED3\u6784\u96C6\u5408\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES5\u65B9\u6CD5\uFF1A\u4F7F\u7528map\u5B58\u50A8\u4E0D\u91CD\u590D\u7684\u6570\u5B57</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  let map = {};
  let res = [];
  for(var i = 0; i &lt; array.length; i++) {
    if(!map.hasOwnProperty([array[i]])) {
      map[array[i]] = 1;
      res.push(array[i]);
    }
  }
  return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u5B9E\u73B0\u6570\u7EC4\u7684flat\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_7-\u5B9E\u73B0\u6570\u7EC4\u7684flat\u65B9\u6CD5" aria-hidden="true">#</a> 7. \u5B9E\u73B0\u6570\u7EC4\u7684flat\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function _flat(arr, depth) {
  if(!Array.isArray(arr) || depth &lt;= 0) {
    return arr;
  }
  return arr.reduce((prev, cur) =&gt; {
    if (Array.isArray(cur)) {
      return prev.concat(_flat(cur, depth - 1))
    } else {
      return prev.concat(cur);
    }
  }, []);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-\u5B9E\u73B0\u6570\u7EC4\u7684push\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_8-\u5B9E\u73B0\u6570\u7EC4\u7684push\u65B9\u6CD5" aria-hidden="true">#</a> 8. \u5B9E\u73B0\u6570\u7EC4\u7684push\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [];
Array.prototype.push = function() {
    for( let i = 0 ; i &lt; arguments.length ; i++){
        this[this.length] = arguments[i] ;
    }
    return this.length;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-\u5B9E\u73B0\u6570\u7EC4\u7684filter\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_9-\u5B9E\u73B0\u6570\u7EC4\u7684filter\u65B9\u6CD5" aria-hidden="true">#</a> 9. \u5B9E\u73B0\u6570\u7EC4\u7684filter\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype._filter = function(fn) {
    if (typeof fn !== &quot;function&quot;) {
        throw Error(&#39;\u53C2\u6570\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570&#39;);
    }
    const res = [];
    for (let i = 0, len = this.length; i &lt; len; i++) {
        fn(this[i]) &amp;&amp; res.push(this[i]);
    }
    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-\u5B9E\u73B0\u6570\u7EC4\u7684map\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_10-\u5B9E\u73B0\u6570\u7EC4\u7684map\u65B9\u6CD5" aria-hidden="true">#</a> 10. \u5B9E\u73B0\u6570\u7EC4\u7684map\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype._map = function(fn) {
   if (typeof fn !== &quot;function&quot;) {
        throw Error(&#39;\u53C2\u6570\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570&#39;);
    }
    const res = [];
    for (let i = 0, len = this.length; i &lt; len; i++) {
        res.push(fn(this[i]));
    }
    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-\u5B9E\u73B0\u5B57\u7B26\u4E32\u7684repeat\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_11-\u5B9E\u73B0\u5B57\u7B26\u4E32\u7684repeat\u65B9\u6CD5" aria-hidden="true">#</a> 11. \u5B9E\u73B0\u5B57\u7B26\u4E32\u7684repeat\u65B9\u6CD5</h3><p>\u8F93\u5165\u5B57\u7B26\u4E32s\uFF0C\u4EE5\u53CA\u5176\u91CD\u590D\u7684\u6B21\u6570\uFF0C\u8F93\u51FA\u91CD\u590D\u7684\u7ED3\u679C\uFF0C\u4F8B\u5982\u8F93\u5165abc\uFF0C2\uFF0C\u8F93\u51FAabcabc\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function repeat(s, n) {
    return (new Array(n + 1)).join(s);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9012\u5F52\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function repeat(s, n) {
    return (n &gt; 0) ? s.concat(repeat(s, --n)) : &quot;&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-\u5B9E\u73B0\u5B57\u7B26\u4E32\u7FFB\u8F6C" tabindex="-1"><a class="header-anchor" href="#_12-\u5B9E\u73B0\u5B57\u7B26\u4E32\u7FFB\u8F6C" aria-hidden="true">#</a> 12. \u5B9E\u73B0\u5B57\u7B26\u4E32\u7FFB\u8F6C</h3><p>\u5728\u5B57\u7B26\u4E32\u7684\u539F\u578B\u94FE\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u5B57\u7B26\u4E32\u7FFB\u8F6C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>String.prototype._reverse = function(a){
    return a.split(&quot;&quot;).reverse().join(&quot;&quot;);
}
var obj = new String();
var res = obj._reverse (&#39;hello&#39;);
console.log(res);    // olleh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5FC5\u987B\u901A\u8FC7\u5B9E\u4F8B\u5316\u5BF9\u8C61\u4E4B\u540E\u518D\u53BB\u8C03\u7528\u5B9A\u4E49\u7684\u65B9\u6CD5\uFF0C\u4E0D\u7136\u627E\u4E0D\u5230\u8BE5\u65B9\u6CD5\u3002</p><h3 id="_13-\u5C06\u6570\u5B57\u6BCF\u5343\u5206\u4F4D\u7528\u9017\u53F7\u9694\u5F00" tabindex="-1"><a class="header-anchor" href="#_13-\u5C06\u6570\u5B57\u6BCF\u5343\u5206\u4F4D\u7528\u9017\u53F7\u9694\u5F00" aria-hidden="true">#</a> 13. \u5C06\u6570\u5B57\u6BCF\u5343\u5206\u4F4D\u7528\u9017\u53F7\u9694\u5F00</h3><p><strong>\u6570\u5B57\u6709\u5C0F\u6570\u7248\u672C\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let format = n =&gt; {
    let num = n.toString() // \u8F6C\u6210\u5B57\u7B26\u4E32
    let decimals = &#39;&#39;
        // \u5224\u65AD\u662F\u5426\u6709\u5C0F\u6570
    num.indexOf(&#39;.&#39;) &gt; -1 ? decimals = num.split(&#39;.&#39;)[1] : decimals
    let len = num.length
    if (len &lt;= 3) {
        return num
    } else {
        let temp = &#39;&#39;
        let remainder = len % 3
        decimals ? temp = &#39;.&#39; + decimals : temp
        if (remainder &gt; 0) { // \u4E0D\u662F3\u7684\u6574\u6570\u500D
            return num.slice(0, remainder) + &#39;,&#39; + num.slice(remainder, len).match(/\\d{3}/g).join(&#39;,&#39;) + temp
        } else { // \u662F3\u7684\u6574\u6570\u500D
            return num.slice(0, len).match(/\\d{3}/g).join(&#39;,&#39;) + temp 
        }
    }
}
format(12323.33)  // &#39;12,323.33&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6570\u5B57\u65E0\u5C0F\u6570\u7248\u672C\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let format = n =&gt; {
    let num = n.toString() 
    let len = num.length
    if (len &lt;= 3) {
        return num
    } else {
        let remainder = len % 3
        if (remainder &gt; 0) { // \u4E0D\u662F3\u7684\u6574\u6570\u500D
            return num.slice(0, remainder) + &#39;,&#39; + num.slice(remainder, len).match(/\\d{3}/g).join(&#39;,&#39;) 
        } else { // \u662F3\u7684\u6574\u6570\u500D
            return num.slice(0, len).match(/\\d{3}/g).join(&#39;,&#39;) 
        }
    }
}
format(1232323)  // &#39;1,232,323&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-\u5B9E\u73B0\u975E\u8D1F\u5927\u6574\u6570\u76F8\u52A0" tabindex="-1"><a class="header-anchor" href="#_14-\u5B9E\u73B0\u975E\u8D1F\u5927\u6574\u6570\u76F8\u52A0" aria-hidden="true">#</a> 14. \u5B9E\u73B0\u975E\u8D1F\u5927\u6574\u6570\u76F8\u52A0</h3><p>JavaScript\u5BF9\u6570\u503C\u6709\u8303\u56F4\u7684\u9650\u5236\uFF0C\u9650\u5236\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Number.MAX_VALUE // 1.7976931348623157e+308
Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_VALUE // 5e-324
Number.MIN_SAFE_INTEGER // -9007199254740991
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u8981\u5BF9\u4E00\u4E2A\u8D85\u5927\u7684\u6574\u6570(<code>&gt; Number.MAX_SAFE_INTEGER</code>)\u8FDB\u884C\u52A0\u6CD5\u8FD0\u7B97\uFF0C\u4F46\u662F\u53C8\u60F3\u8F93\u51FA\u4E00\u822C\u5F62\u5F0F\uFF0C\u90A3\u4E48\u4F7F\u7528 + \u662F\u65E0\u6CD5\u8FBE\u5230\u7684\uFF0C\u4E00\u65E6\u6570\u5B57\u8D85\u8FC7 <code>Number.MAX_SAFE_INTEGER</code> \u6570\u5B57\u4F1A\u88AB\u7ACB\u5373\u8F6C\u6362\u4E3A\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF0C\u5E76\u4E14\u6570\u5B57\u7CBE\u5EA6\u76F8\u6BD4\u4EE5\u524D\u5C06\u4F1A\u6709\u8BEF\u5DEE\u3002</p><p>\u5B9E\u73B0\u4E00\u4E2A\u7B97\u6CD5\u8FDB\u884C\u5927\u6570\u7684\u76F8\u52A0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function sumBigNumber(a, b) {
  let res = &#39;&#39;;
  let temp = 0;
  
  a = a.split(&#39;&#39;);
  b = b.split(&#39;&#39;);
  
  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp  = temp &gt; 9
  }
  return res.replace(/^0+/, &#39;&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E3B\u8981\u7684\u601D\u8DEF\u5982\u4E0B\uFF1A</p><ul><li>\u9996\u5148\u7528\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u6765\u4FDD\u5B58\u5927\u6570\uFF0C\u8FD9\u6837\u6570\u5B57\u5728\u6570\u5B66\u8868\u793A\u4E0A\u5C31\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316</li><li>\u521D\u59CB\u5316res\uFF0Ctemp\u6765\u4FDD\u5B58\u4E2D\u95F4\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u5E76\u5C06\u4E24\u4E2A\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A\u6570\u7EC4\uFF0C\u4EE5\u4FBF\u8FDB\u884C\u6BCF\u4E00\u4F4D\u7684\u52A0\u6CD5\u8FD0\u7B97</li><li>\u5C06\u4E24\u4E2A\u6570\u7EC4\u7684\u5BF9\u5E94\u7684\u4F4D\u8FDB\u884C\u76F8\u52A0\uFF0C\u4E24\u4E2A\u6570\u76F8\u52A0\u7684\u7ED3\u679C\u53EF\u80FD\u5927\u4E8E10\uFF0C\u6240\u4EE5\u53EF\u80FD\u8981\u4EC5\u4E3A\uFF0C\u5BF910\u8FDB\u884C\u53D6\u4F59\u64CD\u4F5C\uFF0C\u5C06\u7ED3\u679C\u4FDD\u5B58\u5728\u5F53\u524D\u4F4D</li><li>\u5224\u65AD\u5F53\u524D\u4F4D\u662F\u5426\u5927\u4E8E9\uFF0C\u4E5F\u5C31\u662F\u662F\u5426\u4F1A\u8FDB\u4F4D\uFF0C\u82E5\u662F\u5219\u5C06temp\u8D4B\u503C\u4E3Atrue\uFF0C\u56E0\u4E3A\u5728\u52A0\u6CD5\u8FD0\u7B97\u4E2D\uFF0Ctrue\u4F1A\u81EA\u52A8\u9690\u5F0F\u8F6C\u5316\u4E3A1\uFF0C\u4EE5\u4FBF\u4E8E\u4E0B\u4E00\u6B21\u76F8\u52A0</li><li>\u91CD\u590D\u4E0A\u8FF0\u64CD\u4F5C\uFF0C\u76F4\u81F3\u8BA1\u7B97\u7ED3\u675F</li></ul><h3 id="_13-\u5B9E\u73B0-add-1-2-3" tabindex="-1"><a class="header-anchor" href="#_13-\u5B9E\u73B0-add-1-2-3" aria-hidden="true">#</a> 13. \u5B9E\u73B0 add(1)(2)(3)</h3><p>\u51FD\u6570\u67EF\u91CC\u5316\u6982\u5FF5\uFF1A \u67EF\u91CC\u5316\uFF08Currying\uFF09\u662F\u628A\u63A5\u53D7\u591A\u4E2A\u53C2\u6570\u7684\u51FD\u6570\u8F6C\u53D8\u4E3A\u63A5\u53D7\u4E00\u4E2A\u5355\u4E00\u53C2\u6570\u7684\u51FD\u6570\uFF0C\u5E76\u4E14\u8FD4\u56DE\u63A5\u53D7\u4F59\u4E0B\u7684\u53C2\u6570\u4E14\u8FD4\u56DE\u7ED3\u679C\u7684\u65B0\u51FD\u6570\u7684\u6280\u672F\u3002</p><p>1\uFF09\u7C97\u66B4\u7248</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function add (a) {
return function (b) {
    return function (c) {
      return a + b + c;
    }
}
}
console.log(add(1)(2)(3)); // 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\uFF09\u67EF\u91CC\u5316\u89E3\u51B3\u65B9\u6848</p><ul><li>\u53C2\u6570\u957F\u5EA6\u56FA\u5B9A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var add = function (m) {
  var temp = function (n) {
    return add(m + n);
  }
  temp.toString = function () {
    return m;
  }
  return temp;
};
console.log(add(3)(4)(5)); // 12
console.log(add(3)(6)(9)(25)); // 43
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8Eadd(3)(4)(5)\uFF0C\u5176\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ol><li>\u5148\u6267\u884Cadd(3)\uFF0C\u6B64\u65F6m=3\uFF0C\u5E76\u4E14\u8FD4\u56DEtemp\u51FD\u6570\uFF1B</li><li>\u6267\u884Ctemp(4)\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5185\u6267\u884Cadd(m+n)\uFF0Cn\u662F\u6B64\u6B21\u4F20\u8FDB\u6765\u7684\u6570\u503C4\uFF0Cm\u503C\u8FD8\u662F\u4E0A\u4E00\u6B65\u4E2D\u76843\uFF0C\u6240\u4EE5add(m+n)=add(3+4)=add(7)\uFF0C\u6B64\u65F6m=7\uFF0C\u5E76\u4E14\u8FD4\u56DEtemp\u51FD\u6570</li><li>\u6267\u884Ctemp(5)\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5185\u6267\u884Cadd(m+n)\uFF0Cn\u662F\u6B64\u6B21\u4F20\u8FDB\u6765\u7684\u6570\u503C5\uFF0Cm\u503C\u8FD8\u662F\u4E0A\u4E00\u6B65\u4E2D\u76847\uFF0C\u6240\u4EE5add(m+n)=add(7+5)=add(12)\uFF0C\u6B64\u65F6m=12\uFF0C\u5E76\u4E14\u8FD4\u56DEtemp\u51FD\u6570</li><li>\u7531\u4E8E\u540E\u9762\u6CA1\u6709\u4F20\u5165\u53C2\u6570\uFF0C\u7B49\u4E8E\u8FD4\u56DE\u7684temp\u51FD\u6570\u4E0D\u88AB\u6267\u884C\u800C\u662F\u6253\u5370\uFF0C\u4E86\u89E3JS\u7684\u670B\u53CB\u90FD\u77E5\u9053\u5BF9\u8C61\u7684toString\u662F\u4FEE\u6539\u5BF9\u8C61\u8F6C\u6362\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5\uFF0C\u56E0\u6B64\u4EE3\u7801\u4E2Dtemp\u51FD\u6570\u7684toString\u51FD\u6570return m\u503C\uFF0C\u800Cm\u503C\u662F\u6700\u540E\u4E00\u6B65\u6267\u884C\u51FD\u6570\u65F6\u7684\u503Cm=12\uFF0C\u6240\u4EE5\u8FD4\u56DE\u503C\u662F12\u3002</li></ol><ul><li>\u53C2\u6570\u957F\u5EA6\u4E0D\u56FA\u5B9A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function add (...args) {
    //\u6C42\u548C
    return args.reduce((a, b) =&gt; a + b)
}
function currying (fn) {
    let args = []
    return function temp (...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return temp
        } else {
            let val = fn.apply(this, args)
            args = [] //\u4FDD\u8BC1\u518D\u6B21\u8C03\u7528\u65F6\u6E05\u7A7A
            return val
        }
    }
}
let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-\u5B9E\u73B0\u7C7B\u6570\u7EC4\u8F6C\u5316\u4E3A\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_14-\u5B9E\u73B0\u7C7B\u6570\u7EC4\u8F6C\u5316\u4E3A\u6570\u7EC4" aria-hidden="true">#</a> 14. \u5B9E\u73B0\u7C7B\u6570\u7EC4\u8F6C\u5316\u4E3A\u6570\u7EC4</h3><p>\u7C7B\u6570\u7EC4\u8F6C\u6362\u4E3A\u6570\u7EC4\u7684\u65B9\u6CD5\u6709\u8FD9\u6837\u51E0\u79CD\uFF1A</p><ul><li>\u901A\u8FC7 call \u8C03\u7528\u6570\u7EC4\u7684 slice \u65B9\u6CD5\u6765\u5B9E\u73B0\u8F6C\u6362</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.slice.call(arrayLike);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u901A\u8FC7 call \u8C03\u7528\u6570\u7EC4\u7684 splice \u65B9\u6CD5\u6765\u5B9E\u73B0\u8F6C\u6362</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.splice.call(arrayLike, 0);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u901A\u8FC7 apply \u8C03\u7528\u6570\u7EC4\u7684 concat \u65B9\u6CD5\u6765\u5B9E\u73B0\u8F6C\u6362</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.concat.apply([], arrayLike);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u901A\u8FC7 Array.from \u65B9\u6CD5\u6765\u5B9E\u73B0\u8F6C\u6362</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.from(arrayLike);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_15-\u4F7F\u7528-reduce-\u6C42\u548C" tabindex="-1"><a class="header-anchor" href="#_15-\u4F7F\u7528-reduce-\u6C42\u548C" aria-hidden="true">#</a> 15. \u4F7F\u7528 reduce \u6C42\u548C</h3><p>arr = [1,2,3,4,5,6,7,8,9,10]\uFF0C\u6C42\u548C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5,6,7,8,9,10]
arr.reduce((prev, cur) =&gt; { return prev + cur }, 0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>arr = [1,2,3,[[4,5],6],7,8,9]\uFF0C\u6C42\u548C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5,6,7,8,9,10]
arr.flat(Infinity).reduce((prev, cur) =&gt; { return prev + cur }, 0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>arr = [{a:1, b:3}, {a:2, b:3, c:4}, {a:3}]\uFF0C\u6C42\u548C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [{a:9, b:3, c:4}, {a:1, b:3}, {a:3}] 

arr.reduce((prev, cur) =&gt; {
    return prev + cur[&quot;a&quot;];
}, 0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-\u5C06js\u5BF9\u8C61\u8F6C\u5316\u4E3A\u6811\u5F62\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_16-\u5C06js\u5BF9\u8C61\u8F6C\u5316\u4E3A\u6811\u5F62\u7ED3\u6784" aria-hidden="true">#</a> 16. \u5C06js\u5BF9\u8C61\u8F6C\u5316\u4E3A\u6811\u5F62\u7ED3\u6784</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8F6C\u6362\u524D\uFF1A
source = [{
            id: 1,
            pid: 0,
            name: &#39;body&#39;
          }, {
            id: 2,
            pid: 1,
            name: &#39;title&#39;
          }, {
            id: 3,
            pid: 2,
            name: &#39;div&#39;
          }]
// \u8F6C\u6362\u4E3A: 
tree = [{
          id: 1,
          pid: 0,
          name: &#39;body&#39;,
          children: [{
            id: 2,
            pid: 1,
            name: &#39;title&#39;,
            children: [{
              id: 3,
              pid: 1,
              name: &#39;div&#39;
            }]
          }
        }]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function jsonToTree(data) {
  // \u521D\u59CB\u5316\u7ED3\u679C\u6570\u7EC4\uFF0C\u5E76\u5224\u65AD\u8F93\u5165\u6570\u636E\u7684\u683C\u5F0F
  let result = []
  if(!Array.isArray(data)) {
    return result
  }
  // \u4F7F\u7528map\uFF0C\u5C06\u5F53\u524D\u5BF9\u8C61\u7684id\u4E0E\u5F53\u524D\u5BF9\u8C61\u5BF9\u5E94\u5B58\u50A8\u8D77\u6765
  let map = {};
  data.forEach(item =&gt; {
    map[item.id] = item;
  });
  // 
  data.forEach(item =&gt; {
    let parent = map[item.pid];
    if(parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-\u4F7F\u7528es5\u548Ces6\u6C42\u51FD\u6570\u53C2\u6570\u7684\u548C" tabindex="-1"><a class="header-anchor" href="#_17-\u4F7F\u7528es5\u548Ces6\u6C42\u51FD\u6570\u53C2\u6570\u7684\u548C" aria-hidden="true">#</a> 17. \u4F7F\u7528ES5\u548CES6\u6C42\u51FD\u6570\u53C2\u6570\u7684\u548C</h3><p>ES5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function sum() {
    let sum = 0
    Array.prototype.forEach.call(arguments, function(item) {
        sum += item * 1
    })
    return sum
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function sum(...nums) {
    let sum = 0
    nums.forEach(function(item) {
        sum += item * 1
    })
    return sum
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-\u89E3\u6790-url-params-\u4E3A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_18-\u89E3\u6790-url-params-\u4E3A\u5BF9\u8C61" aria-hidden="true">#</a> 18. \u89E3\u6790 URL Params \u4E3A\u5BF9\u8C61</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let url = &#39;http://www.domain.com/?user=anonymous&amp;id=123&amp;id=456&amp;city=%E5%8C%97%E4%BA%AC&amp;enabled&#39;;
parseParam(url)
/* \u7ED3\u679C
{ user: &#39;anonymous&#39;,
  id: [ 123, 456 ], // \u91CD\u590D\u51FA\u73B0\u7684 key \u8981\u7EC4\u88C5\u6210\u6570\u7EC4\uFF0C\u80FD\u88AB\u8F6C\u6210\u6570\u5B57\u7684\u5C31\u8F6C\u6210\u6570\u5B57\u7C7B\u578B
  city: &#39;\u5317\u4EAC&#39;, // \u4E2D\u6587\u9700\u89E3\u7801
  enabled: true, // \u672A\u6307\u5B9A\u503C\u5F97 key \u7EA6\u5B9A\u4E3A true
}
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function parseParam(url) {
  const paramsStr = /.+\\?(.+)$/.exec(url)[1]; // \u5C06 ? \u540E\u9762\u7684\u5B57\u7B26\u4E32\u53D6\u51FA\u6765
  const paramsArr = paramsStr.split(&#39;&amp;&#39;); // \u5C06\u5B57\u7B26\u4E32\u4EE5 &amp; \u5206\u5272\u540E\u5B58\u5230\u6570\u7EC4\u4E2D
  let paramsObj = {};
  // \u5C06 params \u5B58\u5230\u5BF9\u8C61\u4E2D
  paramsArr.forEach(param =&gt; {
    if (/=/.test(param)) { // \u5904\u7406\u6709 value \u7684\u53C2\u6570
      let [key, val] = param.split(&#39;=&#39;); // \u5206\u5272 key \u548C value
      val = decodeURIComponent(val); // \u89E3\u7801
      val = /^\\d+$/.test(val) ? parseFloat(val) : val; // \u5224\u65AD\u662F\u5426\u8F6C\u4E3A\u6570\u5B57
      if (paramsObj.hasOwnProperty(key)) { // \u5982\u679C\u5BF9\u8C61\u6709 key\uFF0C\u5219\u6DFB\u52A0\u4E00\u4E2A\u503C
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else { // \u5982\u679C\u5BF9\u8C61\u6CA1\u6709\u8FD9\u4E2A key\uFF0C\u521B\u5EFA key \u5E76\u8BBE\u7F6E\u503C
        paramsObj[key] = val;
      }
    } else { // \u5904\u7406\u6CA1\u6709 value \u7684\u53C2\u6570
      paramsObj[param] = true;
    }
  })
  return paramsObj;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="19"><li>\u6709\u5E8F\u4E8C\u7EF4\u6570\u7EC4\u67E5\u627E\u76EE\u6807\u503C</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">findNumberIn2DArray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">matrix<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> matrix<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> column <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>row <span class="token operator">&lt;</span> matrix<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> column <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            column<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            row<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="20"><li>\u4E8C\u7EF4\u6570\u7EC4\u659C\u5411\u6253\u5370</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printMatrix</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> m <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">,</span> n <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  
  <span class="token comment">// \u5DE6\u4E0A\u89D2\uFF0C\u4ECE0 \u5230 n - 1 \u5217\u8FDB\u884C\u6253\u5370</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> k<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53F3\u4E0B\u89D2\uFF0C\u4ECE1 \u5230 n - 1 \u884C\u8FDB\u884C\u6253\u5370</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> k<span class="token punctuation">,</span> j <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="21"><li>\u627E\u51FAElement\u5143\u7D20\u7684\u5168\u90E8Input\u5B50\u5143\u7D20</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">findAllInputElement</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">rec</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>nodeName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;INPUT&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> children <span class="token operator">=</span> element<span class="token punctuation">.</span>childNodes
    children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">rec</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> arr
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">rec</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="22"><li>\u5C06\u624B\u673A\u53F7\u4E2D\u95F4\u56DB\u4F4D\u53D8\u6210* \uFF081\uFF09\u5229\u7528\u6570\u7EC4splice\uFF0Csplit\uFF0Cjoin\u65B9\u6CD5</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> tel <span class="token operator">=</span> <span class="token number">18877776666</span><span class="token punctuation">;</span> 
tel <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> tel<span class="token punctuation">;</span> 
<span class="token keyword">var</span> ary <span class="token operator">=</span> tel<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
ary<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&quot;****&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> tel1 <span class="token operator">=</span> ary<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tel1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF082\uFF09\u5229\u7528\u5B57\u7B26\u4E32\u7684substr\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> tel <span class="token operator">=</span> <span class="token number">18877776666</span><span class="token punctuation">;</span> 
tel <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> tel<span class="token punctuation">;</span> 
<span class="token keyword">var</span> tel1 <span class="token operator">=</span> tel<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;****&quot;</span> <span class="token operator">+</span> tel<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tel1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF083\uFF09\u5229\u7528\u5B57\u7B26\u4E32substring\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> tel <span class="token operator">=</span> <span class="token number">18877776666</span><span class="token punctuation">;</span>  
tel <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> tel<span class="token punctuation">;</span> 
<span class="token keyword">var</span> tel1 <span class="token operator">=</span>tel<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>tel<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;****&quot;</span><span class="token punctuation">)</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tel1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF084\uFF09\u5229\u7528\u6B63\u5219</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> tel <span class="token operator">=</span> <span class="token number">18877776666</span><span class="token punctuation">;</span>  
tel <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> tel<span class="token punctuation">;</span> 
<span class="token keyword">var</span> reg<span class="token operator">=</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d{3})\\d{4}(\\d{4})</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> tel1 <span class="token operator">=</span> tel<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;$1****$2&quot;</span><span class="token punctuation">)</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tel1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u573A\u666F\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u573A\u666F\u5E94\u7528" aria-hidden="true">#</a> \u4E09\u3001\u573A\u666F\u5E94\u7528</h2><h3 id="_1-\u5FAA\u73AF\u6253\u5370\u7EA2\u9EC4\u7EFF" tabindex="-1"><a class="header-anchor" href="#_1-\u5FAA\u73AF\u6253\u5370\u7EA2\u9EC4\u7EFF" aria-hidden="true">#</a> 1. \u5FAA\u73AF\u6253\u5370\u7EA2\u9EC4\u7EFF</h3><p>\u4E0B\u9762\u6765\u770B\u4E00\u9053\u6BD4\u8F83\u5178\u578B\u7684\u95EE\u9898\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u95EE\u9898\u6765\u5BF9\u6BD4\u51E0\u79CD\u5F02\u6B65\u7F16\u7A0B\u65B9\u6CD5\uFF1A<strong>\u7EA2\u706F 3s \u4EAE\u4E00\u6B21\uFF0C\u7EFF\u706F 1s \u4EAE\u4E00\u6B21\uFF0C\u9EC4\u706F 2s \u4EAE\u4E00\u6B21\uFF1B\u5982\u4F55\u8BA9\u4E09\u4E2A\u706F\u4E0D\u65AD\u4EA4\u66FF\u91CD\u590D\u4EAE\u706F\uFF1F</strong></p><p>\u4E09\u4E2A\u4EAE\u706F\u51FD\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function red() {
    console.log(&#39;red&#39;);
}
function green() {
    console.log(&#39;green&#39;);
}
function yellow() {
    console.log(&#39;yellow&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u9053\u9898\u590D\u6742\u7684\u5730\u65B9\u5728\u4E8E<strong>\u9700\u8981\u201C\u4EA4\u66FF\u91CD\u590D\u201D\u4EAE\u706F</strong>\uFF0C\u800C\u4E0D\u662F\u201C\u4EAE\u5B8C\u4E00\u6B21\u201D\u5C31\u7ED3\u675F\u4E86\u3002</p><h4 id="_1-\u7528-callback-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1-\u7528-callback-\u5B9E\u73B0" aria-hidden="true">#</a> \uFF081\uFF09\u7528 callback \u5B9E\u73B0</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const task = (timer, light, callback) =&gt; {
    setTimeout(() =&gt; {
        if (light === &#39;red&#39;) {
            red()
        }
        else if (light === &#39;green&#39;) {
            green()
        }
        else if (light === &#39;yellow&#39;) {
            yellow()
        }
        callback()
    }, timer)
}
task(3000, &#39;red&#39;, () =&gt; {
    task(2000, &#39;green&#39;, () =&gt; {
        task(1000, &#39;yellow&#39;, Function.prototype)
    })
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5B58\u5728\u4E00\u4E2A bug\uFF1A\u4EE3\u7801\u53EA\u662F\u5B8C\u6210\u4E86\u4E00\u6B21\u6D41\u7A0B\uFF0C\u6267\u884C\u540E\u7EA2\u9EC4\u7EFF\u706F\u5206\u522B\u53EA\u4EAE\u4E00\u6B21\u3002\u8BE5\u5982\u4F55\u8BA9\u5B83\u4EA4\u66FF\u91CD\u590D\u8FDB\u884C\u5462\uFF1F</p><p>\u4E0A\u9762\u63D0\u5230\u8FC7\u9012\u5F52\uFF0C\u53EF\u4EE5\u9012\u5F52\u4EAE\u706F\u7684\u4E00\u4E2A\u5468\u671F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const step = () =&gt; {
    task(3000, &#39;red&#39;, () =&gt; {
        task(2000, &#39;green&#39;, () =&gt; {
            task(1000, &#39;yellow&#39;, step)
        })
    })
}
step()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\u770B\u9EC4\u706F\u4EAE\u7684\u56DE\u8C03\u91CC\u53C8\u518D\u6B21\u8C03\u7528\u4E86 step \u65B9\u6CD5</strong> \u4EE5\u5B8C\u6210\u5FAA\u73AF\u4EAE\u706F\u3002</p><h4 id="_2-\u7528-promise-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u7528-promise-\u5B9E\u73B0" aria-hidden="true">#</a> \uFF082\uFF09\u7528 promise \u5B9E\u73B0</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const task = (timer, light) =&gt; 
    new Promise((resolve, reject) =&gt; {
        setTimeout(() =&gt; {
            if (light === &#39;red&#39;) {
                red()
            }
            else if (light === &#39;green&#39;) {
                green()
            }
            else if (light === &#39;yellow&#39;) {
                yellow()
            }
            resolve()
        }, timer)
    })
const step = () =&gt; {
    task(3000, &#39;red&#39;)
        .then(() =&gt; task(2000, &#39;green&#39;))
        .then(() =&gt; task(2100, &#39;yellow&#39;))
        .then(step)
}
step()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5C06\u56DE\u8C03\u79FB\u9664\uFF0C\u5728\u4E00\u6B21\u4EAE\u706F\u7ED3\u675F\u540E\uFF0Cresolve \u5F53\u524D promise\uFF0C\u5E76\u4F9D\u7136\u4F7F\u7528\u9012\u5F52\u8FDB\u884C\u3002</p><h4 id="_3-\u7528-async-await-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-\u7528-async-await-\u5B9E\u73B0" aria-hidden="true">#</a> \uFF083\uFF09\u7528 async/await \u5B9E\u73B0</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const taskRunner =  async () =&gt; {
    await task(3000, &#39;red&#39;)
    await task(2000, &#39;green&#39;)
    await task(2100, &#39;yellow&#39;)
    taskRunner()
}
taskRunner()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u5B9E\u73B0\u6BCF\u9694\u4E00\u79D2\u6253\u5370-1-2-3-4" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0\u6BCF\u9694\u4E00\u79D2\u6253\u5370-1-2-3-4" aria-hidden="true">#</a> 2. \u5B9E\u73B0\u6BCF\u9694\u4E00\u79D2\u6253\u5370 1,2,3,4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F7F\u7528\u95ED\u5305\u5B9E\u73B0
for (var i = 0; i &lt; 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}
// \u4F7F\u7528 let \u5757\u7EA7\u4F5C\u7528\u57DF
for (let i = 0; i &lt; 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5C0F\u5B69\u62A5\u6570\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u5C0F\u5B69\u62A5\u6570\u95EE\u9898" aria-hidden="true">#</a> 3. \u5C0F\u5B69\u62A5\u6570\u95EE\u9898</h3><p>\u670930\u4E2A\u5C0F\u5B69\u513F\uFF0C\u7F16\u53F7\u4ECE1-30\uFF0C\u56F4\u6210\u4E00\u5708\u4F9D\u6B64\u62A5\u6570\uFF0C1\u30012\u30013 \u6570\u5230 3 \u7684\u5C0F\u5B69\u513F\u9000\u51FA\u8FD9\u4E2A\u5708\uFF0C \u7136\u540E\u4E0B\u4E00\u4E2A\u5C0F\u5B69 \u91CD\u65B0\u62A5\u6570 1\u30012\u30013\uFF0C\u95EE\u6700\u540E\u5269\u4E0B\u7684\u90A3\u4E2A\u5C0F\u5B69\u513F\u7684\u7F16\u53F7\u662F\u591A\u5C11?</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function childNum(num, count){
    let allplayer = [];    
    for(let i = 0; i &lt; num; i++){
        allplayer[i] = i + 1;
    }
    
    let exitCount = 0;    // \u79BB\u5F00\u4EBA\u6570
    let counter = 0;      // \u8BB0\u5F55\u62A5\u6570
    let curIndex = 0;     // \u5F53\u524D\u4E0B\u6807
    
    while(exitCount &lt; num - 1){
        if(allplayer[curIndex] !== 0) counter++;    
        
        if(counter == count){
            allplayer[curIndex] = 0;                 
            counter = 0;
            exitCount++;  
        }
        curIndex++;
        if(curIndex == num){
            curIndex = 0               
        };           
    }    
    for(i = 0; i &lt; num; i++){
        if(allplayer[i] !== 0){
            return allplayer[i]
        }      
    }
}
childNum(30, 3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u7528promise\u5B9E\u73B0\u56FE\u7247\u7684\u5F02\u6B65\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#_4-\u7528promise\u5B9E\u73B0\u56FE\u7247\u7684\u5F02\u6B65\u52A0\u8F7D" aria-hidden="true">#</a> 4. \u7528Promise\u5B9E\u73B0\u56FE\u7247\u7684\u5F02\u6B65\u52A0\u8F7D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let imageAsync=(url)=&gt;{
            return new Promise((resolve,reject)=&gt;{
                let img = new Image();
                img.src = url;
                img.\u03BFnl\u03BFad=()=&gt;{
                    console.log(\`\u56FE\u7247\u8BF7\u6C42\u6210\u529F\uFF0C\u6B64\u5904\u8FDB\u884C\u901A\u7528\u64CD\u4F5C\`);
                    resolve(image);
                }
                img.\u03BFnerr\u03BFr=(err)=&gt;{
                    console.log(\`\u5931\u8D25\uFF0C\u6B64\u5904\u8FDB\u884C\u5931\u8D25\u7684\u901A\u7528\u64CD\u4F5C\`);
                    reject(err);
                }
            })
        }
        
imageAsync(&quot;url&quot;).then(()=&gt;{
    console.log(&quot;\u52A0\u8F7D\u6210\u529F&quot;);
}).catch((error)=&gt;{
    console.log(&quot;\u52A0\u8F7D\u5931\u8D25&quot;);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u5B9E\u73B0\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-\u5B9E\u73B0\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a> 5. \u5B9E\u73B0\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class EventCenter{
  // 1. \u5B9A\u4E49\u4E8B\u4EF6\u5BB9\u5668\uFF0C\u7528\u6765\u88C5\u4E8B\u4EF6\u6570\u7EC4
    let handlers = {}

  // 2. \u6DFB\u52A0\u4E8B\u4EF6\u65B9\u6CD5\uFF0C\u53C2\u6570\uFF1A\u4E8B\u4EF6\u540D \u4E8B\u4EF6\u65B9\u6CD5
  addEventListener(type, handler) {
    // \u521B\u5EFA\u65B0\u6570\u7EC4\u5BB9\u5668
    if (!this.handlers[type]) {
      this.handlers[type] = []
    }
    // \u5B58\u5165\u4E8B\u4EF6
    this.handlers[type].push(handler)
  }

  // 3. \u89E6\u53D1\u4E8B\u4EF6\uFF0C\u53C2\u6570\uFF1A\u4E8B\u4EF6\u540D \u4E8B\u4EF6\u53C2\u6570
  dispatchEvent(type, params) {
    // \u82E5\u6CA1\u6709\u6CE8\u518C\u8BE5\u4E8B\u4EF6\u5219\u629B\u51FA\u9519\u8BEF
    if (!this.handlers[type]) {
      return new Error(&#39;\u8BE5\u4E8B\u4EF6\u672A\u6CE8\u518C&#39;)
    }
    // \u89E6\u53D1\u4E8B\u4EF6
    this.handlers[type].forEach(handler =&gt; {
      handler(...params)
    })
  }

  // 4. \u4E8B\u4EF6\u79FB\u9664\uFF0C\u53C2\u6570\uFF1A\u4E8B\u4EF6\u540D \u8981\u5220\u9664\u4E8B\u4EF6\uFF0C\u82E5\u65E0\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5219\u5220\u9664\u8BE5\u4E8B\u4EF6\u7684\u8BA2\u9605\u548C\u53D1\u5E03
  removeEventListener(type, handler) {
    if (!this.handlers[type]) {
      return new Error(&#39;\u4E8B\u4EF6\u65E0\u6548&#39;)
    }
    if (!handler) {
      // \u79FB\u9664\u4E8B\u4EF6
      delete this.handlers[type]
    } else {
      const index = this.handlers[type].findIndex(el =&gt; el === handler)
      if (index === -1) {
        return new Error(&#39;\u65E0\u8BE5\u7ED1\u5B9A\u4E8B\u4EF6&#39;)
      }
      // \u79FB\u9664\u4E8B\u4EF6
      this.handlers[type].splice(index, 1)
      if (this.handlers[type].length === 0) {
        delete this.handlers[type]
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u67E5\u627E\u6587\u7AE0\u4E2D\u51FA\u73B0\u9891\u7387\u6700\u9AD8\u7684\u5355\u8BCD" tabindex="-1"><a class="header-anchor" href="#_6-\u67E5\u627E\u6587\u7AE0\u4E2D\u51FA\u73B0\u9891\u7387\u6700\u9AD8\u7684\u5355\u8BCD" aria-hidden="true">#</a> 6. \u67E5\u627E\u6587\u7AE0\u4E2D\u51FA\u73B0\u9891\u7387\u6700\u9AD8\u7684\u5355\u8BCD</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function findMostWord(article) {
  // \u5408\u6CD5\u6027\u5224\u65AD
  if (!article) return;
  // \u53C2\u6570\u5904\u7406
  article = article.trim().toLowerCase();
  let wordList = article.match(/[a-z]+/g),
    visited = [],
    maxNum = 0,
    maxWord = &quot;&quot;;
  article = &quot; &quot; + wordList.join(&quot;  &quot;) + &quot; &quot;;
  // \u904D\u5386\u5224\u65AD\u5355\u8BCD\u51FA\u73B0\u6B21\u6570
  wordList.forEach(function(item) {
    if (visited.indexOf(item) &lt; 0) {
      // \u52A0\u5165 visited 
      visited.push(item);
      let word = new RegExp(&quot; &quot; + item + &quot; &quot;, &quot;g&quot;),
        num = article.match(word).length;
      if (num &gt; maxNum) {
        maxNum = num;
        maxWord = item;
      }
    }
  });
  return maxWord + &quot;  &quot; + maxNum;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u5C01\u88C5\u5F02\u6B65\u7684fetch-\u4F7F\u7528async-await\u65B9\u5F0F\u6765\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_7-\u5C01\u88C5\u5F02\u6B65\u7684fetch-\u4F7F\u7528async-await\u65B9\u5F0F\u6765\u4F7F\u7528" aria-hidden="true">#</a> 7. \u5C01\u88C5\u5F02\u6B65\u7684fetch\uFF0C\u4F7F\u7528async await\u65B9\u5F0F\u6765\u4F7F\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(async () =&gt; {
    class HttpRequestUtil {
        async get(url) {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
        async post(url, data) {
            const res = await fetch(url, {
                method: &#39;POST&#39;,
                headers: {
                    &#39;Content-Type&#39;: &#39;application/json&#39;
                },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            return result;
        }
        async put(url, data) {
            const res = await fetch(url, {
                method: &#39;PUT&#39;,
                headers: {
                    &#39;Content-Type&#39;: &#39;application/json&#39;
                },
                data: JSON.stringify(data)
            });
            const result = await res.json();
            return result;
        }
        async delete(url, data) {
            const res = await fetch(url, {
                method: &#39;DELETE&#39;,
                headers: {
                    &#39;Content-Type&#39;: &#39;application/json&#39;
                },
                data: JSON.stringify(data)
            });
            const result = await res.json();
            return result;
        }
    }
    const httpRequestUtil = new HttpRequestUtil();
    const res = await httpRequestUtil.get(&#39;http://golderbrother.cn/&#39;);
    console.log(res);
})();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-\u5B9E\u73B0prototype\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_8-\u5B9E\u73B0prototype\u7EE7\u627F" aria-hidden="true">#</a> 8. \u5B9E\u73B0prototype\u7EE7\u627F</h3><p>\u6240\u8C13\u7684\u539F\u578B\u94FE\u7EE7\u627F\u5C31\u662F\u8BA9\u65B0\u5B9E\u4F8B\u7684\u539F\u578B\u7B49\u4E8E\u7236\u7C7B\u7684\u5B9E\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7236\u65B9\u6CD5
function SupperFunction(flag1){
    this.flag1 = flag1;
}

//\u5B50\u65B9\u6CD5
function SubFunction(flag2){
    this.flag2 = flag2;
}

//\u7236\u5B9E\u4F8B
var superInstance = new SupperFunction(true);

//\u5B50\u7EE7\u627F\u7236
SubFunction.prototype = superInstance;

//\u5B50\u5B9E\u4F8B
var subInstance = new SubFunction(false);
//\u5B50\u8C03\u7528\u81EA\u5DF1\u548C\u7236\u7684\u5C5E\u6027
subInstance.flag1;   // true
subInstance.flag2;   // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-\u5B9E\u73B0\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#_9-\u5B9E\u73B0\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" aria-hidden="true">#</a> 9. \u5B9E\u73B0\u53CC\u5411\u6570\u636E\u7ED1\u5B9A</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let obj = {}
let input = document.getElementById(&#39;input&#39;)
let span = document.getElementById(&#39;span&#39;)
// \u6570\u636E\u52AB\u6301
Object.defineProperty(obj, &#39;text&#39;, {
  configurable: true,
  enumerable: true,
  get() {
    console.log(&#39;\u83B7\u53D6\u6570\u636E\u4E86&#39;)
  },
  set(newVal) {
    console.log(&#39;\u6570\u636E\u66F4\u65B0\u4E86&#39;)
    input.value = newVal
    span.innerHTML = newVal
  }
})
// \u8F93\u5165\u76D1\u542C
input.addEventListener(&#39;keyup&#39;, function(e) {
  obj.text = e.target.value
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-\u5B9E\u73B0\u7B80\u5355\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#_10-\u5B9E\u73B0\u7B80\u5355\u8DEF\u7531" aria-hidden="true">#</a> 10. \u5B9E\u73B0\u7B80\u5355\u8DEF\u7531</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// hash\u8DEF\u7531
class Route{
  constructor(){
    // \u8DEF\u7531\u5B58\u50A8\u5BF9\u8C61
    this.routes = {}
    // \u5F53\u524Dhash
    this.currentHash = &#39;&#39;
    // \u7ED1\u5B9Athis\uFF0C\u907F\u514D\u76D1\u542C\u65F6this\u6307\u5411\u6539\u53D8
    this.freshRoute = this.freshRoute.bind(this)
    // \u76D1\u542C
    window.addEventListener(&#39;load&#39;, this.freshRoute, false)
    window.addEventListener(&#39;hashchange&#39;, this.freshRoute, false)
  }
  // \u5B58\u50A8
  storeRoute (path, cb) {
    this.routes[path] = cb || function () {}
  }
  // \u66F4\u65B0
  freshRoute () {
    this.currentHash = location.hash.slice(1) || &#39;/&#39;
    this.routes[this.currentHash]()
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-\u5B9E\u73B0\u6590\u6CE2\u90A3\u5951\u6570\u5217" tabindex="-1"><a class="header-anchor" href="#_11-\u5B9E\u73B0\u6590\u6CE2\u90A3\u5951\u6570\u5217" aria-hidden="true">#</a> 11. \u5B9E\u73B0\u6590\u6CE2\u90A3\u5951\u6570\u5217</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9012\u5F52
function fn (n){
    if(n==0) return 0
    if(n==1) return 1
    return fn(n-2)+fn(n-1)
}
// \u4F18\u5316
function fibonacci2(n) {
    const arr = [1, 1, 2];
    const arrLen = arr.length;

    if (n &lt;= arrLen) {
        return arr[n];
    }

    for (let i = arrLen; i &lt; n; i++) {
        arr.push(arr[i - 1] + arr[ i - 2]);
    }

    return arr[arr.length - 1];
}
// \u975E\u9012\u5F52
function fn(n) {
    let pre1 = 1;
    let pre2 = 1;
    let current = 2;

    if (n &lt;= 2) {
        return current;
    }

    for (let i = 2; i &lt; n; i++) {
        pre1 = pre2;
        pre2 = current;
        current = pre1 + pre2;
    }

    return current;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-\u5B57\u7B26\u4E32\u51FA\u73B0\u7684\u4E0D\u91CD\u590D\u6700\u957F\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#_12-\u5B57\u7B26\u4E32\u51FA\u73B0\u7684\u4E0D\u91CD\u590D\u6700\u957F\u957F\u5EA6" aria-hidden="true">#</a> 12. \u5B57\u7B26\u4E32\u51FA\u73B0\u7684\u4E0D\u91CD\u590D\u6700\u957F\u957F\u5EA6</h3><p>\u7528\u4E00\u4E2A\u6ED1\u52A8\u7A97\u53E3\u88C5\u6CA1\u6709\u91CD\u590D\u7684\u5B57\u7B26\uFF0C\u679A\u4E3E\u5B57\u7B26\u8BB0\u5F55\u6700\u5927\u503C\u5373\u53EF\u3002\u7528 map \u7EF4\u62A4\u5B57\u7B26\u7684\u7D22\u5F15\uFF0C\u9047\u5230\u76F8\u540C\u7684\u5B57\u7B26\uFF0C\u628A\u5DE6\u8FB9\u754C\u79FB\u52A8\u8FC7\u53BB\u5373\u53EF\u3002\u632A\u52A8\u7684\u8FC7\u7A0B\u4E2D\u8BB0\u5F55\u6700\u5927\u957F\u5EA6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let i = -1
    let res = 0
    let n = s.length
    for (let j = 0; j &lt; n; j++) {
        if (map.has(s[j])) {
            i = Math.max(i, map.get(s[j]))
        }
        res = Math.max(res, j - i)
        map.set(s[j], j)
    }
    return res
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-\u4F7F\u7528-settimeout-\u5B9E\u73B0-setinterval" tabindex="-1"><a class="header-anchor" href="#_13-\u4F7F\u7528-settimeout-\u5B9E\u73B0-setinterval" aria-hidden="true">#</a> 13. \u4F7F\u7528 setTimeout \u5B9E\u73B0 setInterval</h3><p>setInterval \u7684\u4F5C\u7528\u662F\u6BCF\u9694\u4E00\u6BB5\u6307\u5B9A\u65F6\u95F4\u6267\u884C\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6267\u884C\u4E0D\u662F\u771F\u7684\u5230\u4E86\u65F6\u95F4\u7ACB\u5373\u6267\u884C\uFF0C\u5B83\u771F\u6B63\u7684\u4F5C\u7528\u662F\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u5C06\u4E8B\u4EF6\u52A0\u5165\u4E8B\u4EF6\u961F\u5217\u4E2D\u53BB\uFF0C\u53EA\u6709\u5F53\u5F53\u524D\u7684\u6267\u884C\u6808\u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C\u624D\u80FD\u53BB\u4ECE\u4E8B\u4EF6\u961F\u5217\u4E2D\u53D6\u51FA\u4E8B\u4EF6\u6267\u884C\u3002\u6240\u4EE5\u53EF\u80FD\u4F1A\u51FA\u73B0\u8FD9\u6837\u7684\u60C5\u51B5\uFF0C\u5C31\u662F\u5F53\u524D\u6267\u884C\u6808\u6267\u884C\u7684\u65F6\u95F4\u5F88\u957F\uFF0C\u5BFC\u81F4\u4E8B\u4EF6\u961F\u5217\u91CC\u8FB9\u79EF\u7D2F\u591A\u4E2A\u5B9A\u65F6\u5668\u52A0\u5165\u7684\u4E8B\u4EF6\uFF0C\u5F53\u6267\u884C\u6808\u7ED3\u675F\u7684\u65F6\u5019\uFF0C\u8FD9\u4E9B\u4E8B\u4EF6\u4F1A\u4F9D\u6B21\u6267\u884C\uFF0C\u56E0\u6B64\u5C31\u4E0D\u80FD\u5230\u95F4\u9694\u4E00\u6BB5\u65F6\u95F4\u6267\u884C\u7684\u6548\u679C\u3002</p><p>\u9488\u5BF9 setInterval \u7684\u8FD9\u4E2A\u7F3A\u70B9\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 setTimeout \u9012\u5F52\u8C03\u7528\u6765\u6A21\u62DF setInterval\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u786E\u4FDD\u4E86\u53EA\u6709\u4E00\u4E2A\u4E8B\u4EF6\u7ED3\u675F\u4E86\uFF0C\u6211\u4EEC\u624D\u4F1A\u89E6\u53D1\u4E0B\u4E00\u4E2A\u5B9A\u65F6\u5668\u4E8B\u4EF6\uFF0C\u8FD9\u6837\u89E3\u51B3\u4E86 setInterval \u7684\u95EE\u9898\u3002</p><p>\u5B9E\u73B0\u601D\u8DEF\u662F\u4F7F\u7528\u9012\u5F52\u51FD\u6570\uFF0C\u4E0D\u65AD\u5730\u53BB\u6267\u884C setTimeout \u4ECE\u800C\u8FBE\u5230 setInterval \u7684\u6548\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function mySetInterval(fn, timeout) {
  // \u63A7\u5236\u5668\uFF0C\u63A7\u5236\u5B9A\u65F6\u5668\u662F\u5426\u7EE7\u7EED\u6267\u884C
  var timer = {
    flag: true
  };
  // \u8BBE\u7F6E\u9012\u5F52\u51FD\u6570\uFF0C\u6A21\u62DF\u5B9A\u65F6\u5668\u6267\u884C\u3002
  function interval() {
    if (timer.flag) {
      fn();
      setTimeout(interval, timeout);
    }
  }
  // \u542F\u52A8\u5B9A\u65F6\u5668
  setTimeout(interval, timeout);
  // \u8FD4\u56DE\u63A7\u5236\u5668
  return timer;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-\u5B9E\u73B0-jsonp" tabindex="-1"><a class="header-anchor" href="#_14-\u5B9E\u73B0-jsonp" aria-hidden="true">#</a> 14. \u5B9E\u73B0 jsonp</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u52A8\u6001\u7684\u52A0\u8F7Djs\u6587\u4EF6
function addScript(src) {
  const script = document.createElement(&#39;script&#39;);
  script.src = src;
  script.type = &quot;text/javascript&quot;;
  document.body.appendChild(script);
}
addScript(&quot;http://xxx.xxx.com/xxx.js?callback=handleRes&quot;);
// \u8BBE\u7F6E\u4E00\u4E2A\u5168\u5C40\u7684callback\u51FD\u6570\u6765\u63A5\u6536\u56DE\u8C03\u7ED3\u679C
function handleRes(res) {
  console.log(res);
}
// \u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F
handleRes({a: 1, b: 2});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u5B58\u5728\u5FAA\u73AF\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#_15-\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u5B58\u5728\u5FAA\u73AF\u5F15\u7528" aria-hidden="true">#</a> 15. \u5224\u65AD\u5BF9\u8C61\u662F\u5426\u5B58\u5728\u5FAA\u73AF\u5F15\u7528</h3><p>\u5FAA\u73AF\u5F15\u7528\u5BF9\u8C61\u672C\u6765\u6CA1\u6709\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F46\u662F\u5E8F\u5217\u5316\u7684\u65F6\u5019\u5C31\u4F1A\u53D1\u751F\u95EE\u9898\uFF0C\u6BD4\u5982\u8C03\u7528<code>JSON.stringify()</code>\u5BF9\u8BE5\u7C7B\u5BF9\u8C61\u8FDB\u884C\u5E8F\u5217\u5316\uFF0C\u5C31\u4F1A\u62A5\u9519: <code>Converting circular structure to JSON.</code></p><p>\u4E0B\u9762\u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u662F\u5426\u5DF2\u5B58\u5728\u5FAA\u73AF\u5F15\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const isCycleObject = (obj,parent) =&gt; {
    const parentArr = parent || [obj];
    for(let i in obj) {
        if(typeof obj[i] === &#39;object&#39;) {
            let flag = false;
            parentArr.forEach((pObj) =&gt; {
                if(pObj === obj[i]){
                    flag = true;
                }
            })
            if(flag) return true;
            flag = isCycleObject(obj[i],[...parentArr,obj[i]]);
            if(flag) return true;
        }
    }
    return false;
}


const a = 1;
const b = {a};
const c = {b};
const o = {d:{a:3},c}
o.c.b.aa = a;

console.log(isCycleObject(o)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u627E\u6709\u5E8F\u4E8C\u7EF4\u6570\u7EC4\u7684\u76EE\u6807\u503C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var findNumberIn2DArray = function(matrix, target) {
    if (matrix == null || matrix.length == 0) {
        return false;
    }
    let row = 0;
    let column = matrix[0].length - 1;
    while (row &lt; matrix.length &amp;&amp; column &gt;= 0) {
        if (matrix[row][column] == target) {
            return true;
        } else if (matrix[row][column] &gt; target) {
            column--;
        } else {
            row++;
        }
    }
    return false;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E8C\u7EF4\u6570\u7EC4\u659C\u5411\u6253\u5370\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function printMatrix(arr){
  let m = arr.length, n = arr[0].length
    let res = []
  
  // \u5DE6\u4E0A\u89D2\uFF0C\u4ECE0 \u5230 n - 1 \u5217\u8FDB\u884C\u6253\u5370
  for (let k = 0; k &lt; n; k++) {
    for (let i = 0, j = k; i &lt; m &amp;&amp; j &gt;= 0; i++, j--) {
      res.push(arr[i][j]);
    }
  }

  // \u53F3\u4E0B\u89D2\uFF0C\u4ECE1 \u5230 n - 1 \u884C\u8FDB\u884C\u6253\u5370
  for (let k = 1; k &lt; m; k++) {
    for (let i = k, j = n - 1; i &lt; m &amp;&amp; j &gt;= 0; i++, j--) {
      res.push(arr[i][j]);
    }
  }
  return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,290),r=[d];function t(c,u){return e(),s("div",null,r)}const o=n(l,[["render",t],["__file","10.html.vue"]]);export{o as default};
