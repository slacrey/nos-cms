package com.nos.plug.work.manager.impl;

import com.nos.common.hibernate3.Updater;
import com.nos.common.page.Pagination;
import com.nos.plug.work.dao.WmsWorkProgressDao;
import com.nos.plug.work.entity.WmsWorkProgress;
import com.nos.plug.work.manager.WmsWorkProgressMng;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by slacrey on 2015/2/2.
 *
 * @author slacrey
 */
@Service
@Transactional
public class WmsWorkProgressMngImpl implements WmsWorkProgressMng {

    private WmsWorkProgressDao dao;

    @Override
    @Transactional(readOnly = true)
    public Pagination getPage(int pageNo, int pageSize) {
        return this.dao.getPage(pageNo, pageSize);
    }

    @Override
    @Transactional(readOnly = true)
    public List<WmsWorkProgress> getList(int count, boolean cache) {
        return this.dao.getList(count, cache);
    }

    @Override
    public List<WmsWorkProgress> findByWorkId(Long workId) {
        return dao.findByWorkId(workId);
    }

    @Override
    @Transactional(readOnly = true)
    public WmsWorkProgress findById(Long id) {
        return dao.findById(id);
    }

    @Override
    public WmsWorkProgress save(WmsWorkProgress bean) {
        return dao.save(bean);
    }

    @Override
    public WmsWorkProgress update(WmsWorkProgress bean) {
        Updater updater = new Updater(bean);
        bean = this.dao.updateByUpdater(updater);
        return bean;
    }

    @Override
    public WmsWorkProgress deleteById(Long id) {
        return this.dao.deleteById(id);
    }

    @Override
    public WmsWorkProgress[] deleteByIds(Long[] ids) {
        WmsWorkProgress[] beans = new WmsWorkProgress[ids.length];
        int i = 0;
        for (int len = ids.length; i < len; i++) {
            beans[i] = deleteById(ids[i]);
        }
        return beans;
    }

    public void setDao(WmsWorkProgressDao dao) {
        this.dao = dao;
    }
}
