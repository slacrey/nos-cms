package com.nos.plug.reserve.dao.impl;


import java.util.List;

import com.nos.common.hibernate3.Finder;
import com.nos.common.hibernate3.HibernateBaseDao;
import com.nos.common.page.Pagination;
import com.nos.plug.reserve.dao.CmsReserveDao;
import com.nos.plug.reserve.entity.CmsReserve;
import org.hibernate.Criteria;
import org.hibernate.criterion.Criterion;
import org.springframework.stereotype.Repository;

@Repository
public class CmsReserveDaoImpl extends HibernateBaseDao<CmsReserve, Integer> implements CmsReserveDao {

    public Pagination getPage(int pageNo, int pageSize) {
        Criteria crit = createCriteria();
        Pagination page = findByCriteria(crit, pageNo, pageSize);
        return page;
    }

    public List<CmsReserve> getList(int count, boolean cache) {
        Finder finder = Finder.create("from CmsReserve");
        finder.setCacheable(cache);
        finder.setMaxResults(count);
        return find(finder);
    }

    public CmsReserve findById(Integer id) {
        CmsReserve entity = (CmsReserve) get(id);
        return entity;
    }

    public CmsReserve save(CmsReserve bean) {
        getSession().save(bean);
        return bean;
    }

    public CmsReserve deleteById(Integer id) {
        CmsReserve entity = (CmsReserve) super.get(id);
        if (entity != null) {
            getSession().delete(entity);
        }
        return entity;
    }

    protected Class<CmsReserve> getEntityClass() {
        return CmsReserve.class;
    }
}