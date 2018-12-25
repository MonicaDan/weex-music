const modal= weex.requireModule('modal');
export  class CommonUtils{
    /**
     * 检查当前高亮
     * @param
     *  
    */
   static checkRoutePath(tabTitles, path ) {
    let _newTabIndex = 0;
    tabTitles.forEach((item, index) => {
        let url = item.url || item.path;
        // if (path.includes(url.split('/')[_index])) {
        //     _newTabIndex = index
        // }
        //如果当前路由地址和item.path一样就改变_newTabIndex的值为index

        if(path===url){
            _newTabIndex=index;
        }
    });
    return _newTabIndex;
}

}