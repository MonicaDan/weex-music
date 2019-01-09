const modal= weex.requireModule('modal');
export  class CommonUtils{
    /**
     * 检查当前高亮 点击tab后：title下的path或url和当前路径是否相同，相同：返回点击的index值，不同：不高亮
     * @param tabTitles
     * @param path
    */
   static checkRoutePath(tabTitles, path ) {
    let _newTabIndex = 0;
    tabTitles.forEach((item, index) => {
        let url = item.url || item.path;
        if(path===url){
            _newTabIndex=index;
        }
    });
    return _newTabIndex;
}

}