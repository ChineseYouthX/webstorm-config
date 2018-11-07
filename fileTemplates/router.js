/**
 * ${des}
 * 作者:yc
 * 日期:${DATE} ${TIME}
 */
import {utils} from "../libs/util";

const ${model} = {
    path: '${model}',
    name: '${model}',
    meta: {
        requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
    },
    // component: resolve => {
    //     require.ensure([], () => {
    //         resolve(require('@/components/common/rightMain'));
    //     }, 'userCenter');
    // },
    redirect: to => {
        return utils.pathPrefix + '/${model}/studentManager'
    },
    children: [
        {
            //模块一
            path: 'studentManager',
            name: 'studentManager',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../components/userManage/studentManage/studentManage_list.vue'));
                }, '${model}');
            }
        }
    ]
}

export default ${model};
