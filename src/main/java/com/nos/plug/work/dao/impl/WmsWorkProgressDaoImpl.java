package com.nos.plug.work.dao.impl;

import com.nos.common.hibernate3.Finder;
import com.nos.common.hibernate3.HibernateBaseDao;
import com.nos.common.page.Pagination;
import com.nos.plug.work.dao.WmsWorkProgressDao;
import com.nos.plug.work.entity.WmsWorkProgress;
import org.hibernate.Criteria;

import java.util.List;

/**
 * Created by slacrey on 2015/2/2.
 *
 * @author slacrey
 */
public class WmsWorkProgressDaoImpl extends HibernateBaseDao<WmsWorkProgress, Long> implements WmsWorkProgressDao {
    @Override
    protected Class<WmsWorkProgress> getEntityClass() {
        return WmsWorkProgress.class;
    }

    @Override
    public Pagination getPage(int pageNo, int pageSize) {
        Criteria crit = createCriteria();
        Pagination page = findByCriteria(crit, pageNo, pageSize);
        return page;
    }

    @Override
    public List<WmsWorkProgress> getList(int count, boolean cache) {
        Finder finder = Finder.create("from WmsWorkProgress");
        finder.setCacheable(cache);
        finder.setMaxResults(count);
        return find(finder);
    }

    @Override
    public List<WmsWorkProgress> findByWorkId(Long workId) {
        Finder finder = Finder.create("from WmsWorkProgress p where p.fkWorkId=:fkWorkId order by p.createDate desc ");
        finder.setParam("fkWorkId", workId);
        return find(finder);
    }

    @Override
    public WmsWorkProgress findById(Long id) {
        WmsWorkProgress entity = (WmsWorkProgress) get(id);
        return entity;
    }

    @Override
    public WmsWorkProgress save(WmsWorkProgress bean) {
        getSession().save(bean);
        return bean;
    }

    @Override
    public WmsWorkProgress deleteById(Long id) {
        WmsWorkProgress entity = (WmsWorkProgress) super.get(id);
        if (entity != null) {
            getSession().delete(entity);
        }
        return entity;
    }
}
