package com.nos.plug.work.dao.impl;

import com.nos.common.hibernate3.Finder;
import com.nos.common.hibernate3.HibernateBaseDao;
import com.nos.common.page.Pagination;
import com.nos.plug.work.dao.WmsWorkDao;
import com.nos.plug.work.entity.WmsWork;
import org.hibernate.Criteria;

import java.util.List;

/**
 * Created by slacrey on 2015/2/2.
 *
 * @author slacrey
 */
public class WmsWorkDaoImpl extends HibernateBaseDao<WmsWork, Long> implements WmsWorkDao {
    @Override
    protected Class<WmsWork> getEntityClass() {
        return WmsWork.class;
    }

    @Override
    public Pagination getPage(int pageNo, int pageSize) {
        Criteria crit = createCriteria();
        Pagination page = findByCriteria(crit, pageNo, pageSize);
        return page;
    }

    @Override
    public List<WmsWork> getList(int count, boolean cache) {
        Finder finder = Finder.create("from WmsWork");
        finder.setCacheable(cache);
        finder.setMaxResults(count);
        return find(finder);
    }

    @Override
    public WmsWork findById(Long id) {
        WmsWork entity = (WmsWork) get(id);
        return entity;
    }

    @Override
    public List<WmsWork> findByPhone(int count, String phone) {
        Finder finder = Finder.create("from WmsWork where litigantPhone=:litigantPhone and status!=0 ");
        finder.setParam("litigantPhone", phone);
        finder.setMaxResults(count);
        return find(finder);
    }

    @Override
    public WmsWork save(WmsWork bean) {
        getSession().save(bean);
        return bean;
    }

    @Override
    public WmsWork deleteById(Long id) {
        WmsWork entity = (WmsWork) super.get(id);
        if (entity != null) {
            getSession().delete(entity);
        }
        return entity;
    }
}
