require.ensure(['./hello.js', './weak.js'], require => {
    /* ... */
});
require.ensure(['./hello.js', './lazy.js'], require => {
    /* ... */
});
import hello from './hello';

import(/* webpackChunkName: 'lazy-name' */ './lazy').then(lazy => {
    console.log(lazy);
});
/*
* import 是动态语法打包 。代码会进行分割；
* */
// webpackInclude ： 如果import的是一个目录，则可以指定需要的引入东西文件特性；例如只加载 /\.json$/
// webpackExclude ：指定要过滤的文件；
// webpackPrefetch：必须加载模块
// webpackPreload：预加载模块
// Tips：prefetch 优先级低于 preload，preload 会并行或者加载完主文件之后立即加载；prefetch 则会在主文件之后、空闲时在加载。prefetch 和 preload 可以用于提前加载图片、样式等资源的功能。
// webpackMode: 可选值lazy【】/lazy-once/eager/weak。
