module.exports = {
    productList: {
        query : 'select t1.*,t2.path,t3.category1, t3.category2, t3.category3 from t_product t1, t_image t2, t_category t3 where t1.id = t2.product_id and t2.type = 2 and t1.category_id = t3.id'
    },
    productList2: {
        query: 'select t3.* , t4.path from (select t1.*,t2.category1, t2.category2. t2.category3 from t_product t1, t_category t2 where t1.category_id = t2.id) t3 left join (select * from t_image where type = 1 ) t4 on t3.id = t4.product_id'
    },
    productDetail: {
        query : 'select t1.*, t2.path, t3.category1, t3.category2, t3.category3 from t_product t1, t_image t2, t_category t3 where ti.id = ? and t1.id = t2.product_id and t2.type = 3 an t1.category_id = t3.id'
    },
    productMain: {
        query: 'select * from t_image where product_id = ? and type = 2'
    },
    productImageInsert:{
        query: 'insert into t_image set ?'
    },
    imageList: {
        query: 'select * from t_image where product_id = ?'
    },
    imageDelete: {
        query : 'delete from t_image where id = ?'
    },
    productDelete: {
        query: 'delete from t_product where id = ?'
    },
    categoryList: {
        query: 'select * from t_category'
    },
    sellerList: {
        query: 'select * from t_seller'
    },
    signUp: {
        query : 'insert into t_user set ? duplicate key update ?'
    },
}