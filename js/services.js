/**
 * Created by chris on 16/9/6.
 */

angular.module('starter.services', [])
.factory('HotService', function ($rootScope, $resource, env) {

    var apiurl = env.api;
    var hotData = {};

    var resource = $resource(apiurl, {}, {
        query: {
            method: 'GET',
            timeout: 20000
        }
    })

    return {
        //异步请求
        getHots: function (catid) {
            resource.query({
                a: 'getPortalList',
                catid: catid,
                page: 2
            }, function (r) {
                // console.log(r);
                hotData.data = r.result;
                $rootScope.$broadcast('hotUpdate');
            })
        },
        getHotsData: function () {
            return hotData.data;
        }
    };

})
.factory('HotDetailService', function ($rootScope, $resource, env) {
    var apiurl = env.api;
    var hotDetailData = {};
    var resource = $resource(apiurl, {}, {
        query: {
            method: 'GET',
            timeout: 20000
        }
    });

    return {
        getHotDetail: function (aid) {
            resource.query({
                a: 'getPortalArticle',
                aid: aid
            }, function (r) {
                // console.log(r.result);
                hotDetailData.data = r.result[0].content;
                $rootScope.$broadcast('hotDetailUpdate');
            })
        },
        getHotDetailData: function () {
            return hotDetailData.data;
        }
    }

})
.factory("Storage", function () {
    return {
        //将数据存储到本地
        set: function (key, data) {
            return window.localStorage.setItem(key, window.JSON.stringify(data));
        },
        //从本地存储中获取数据
        get: function (key) {
            return window.JSON.parse(window.localStorage.getItem(key));
        },
        //删除本地存储
        remove: function (key) {
            return window.localStorage.removeItem(key);
        }
    }
})










