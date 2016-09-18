/**
 * Created by chris on 16/9/6.
 */

angular.module('starter.controller', [])
//当点击tab时,对应的controller中的代码才能执行
    .controller('HomepageCtrl', function ($scope) {
        
    })
    .controller('HotsCtrl', function ($scope, HotService, env) {

        $scope.imgurl = env.imgUrl;

        //监听 当请求完成时, 会用boardcast广播, on会收到广播并执行方法
        $scope.$on('hotUpdate', function () {
            var data = HotService.getHotsData();
            $scope.hotDataList = data;
            // console.log(data);
            //结束刷新状态
            $scope.$broadcast('scroll.refreshComplete');
        });

        HotService.getHots(20);
        
        $scope.selectTitle = function (idx, catid) {
            //1. 移动下划线到对应的按钮
            var btns = $('.sub_header_list a');
            //将所有的btn的 selected_button类 去掉
            $.each(btns, function (index, ele) {
                ele.className = 'button button-clear';
            });
            //将当前点击的btn的selected_button类 加上
            btns[idx].className = 'button button-clear selected_button';

            //2. 发起选中页的网络请求
            HotService.getHots(catid);

        }
        
        $scope.onRefresh = function () {

            // var btns = $('.sub_header_list a');
            // var idx = 0;
            // $.each(btns, function (index, ele) {
            //     if (ele.hasClass('selected_button')){
            //         idx = index;
            //         return false;
            //     }
            // });

            HotService.getHots(20);
        }
        
    })
    .controller('HotDetailCtrl', function ($scope, $rootScope, $stateParams, HotDetailService) {

        $scope.showloading = true;
        //进入文章详情时, 将tabs隐藏
        $rootScope.hideTabs = 'tabs-item-hide';

        //当页面返回时, controller会销毁
        $scope.$on('$destroy', function () {
            $rootScope.hideTabs = ''; //显示tabs
        });

        $scope.$on('hotDetailUpdate', function () {
            var data = HotDetailService.getHotDetailData();
            // console.log(data);
            $scope.hotDetailData = data;

            $scope.showloading = false;
        });

        // console.log($stateParams.aid);

        HotDetailService.getHotDetail($stateParams.aid);

    })
    .controller('ArticleCtrl', function ($scope) {

    })
    .controller('MineCtrl', function ($scope, Storage) {
        // 是将数据存储到localstorage, 或者修改以及存储的数据
        // Storage.set('good', 'desktop');

        // 读取数据
        var n = Storage.get('good');
        // alert(n);

        // 删除数据
        Storage.remove('good');

    })