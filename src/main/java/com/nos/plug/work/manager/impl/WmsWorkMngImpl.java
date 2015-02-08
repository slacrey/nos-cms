package com.nos.plug.work.manager.impl;

import com.nos.common.hibernate3.Updater;
import com.nos.common.page.Pagination;
import com.nos.plug.work.dao.WmsWorkDao;
import com.nos.plug.work.entity.WmsWork;
import com.nos.plug.work.manager.WmsWorkMng;
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
public class WmsWorkMngImpl implements WmsWorkMng {

    private WmsWorkDao dao;

    @Override
    @Transactional(readOnly = true)
    public Pagination getPage(int pageNo, int pageSize) {
        return this.dao.getPage(pageNo, pageSize);
    }

    @Override
    @Transactional(readOnly = true)
    public List<WmsWork> getList(int count, boolean cache) {
        return this.dao.getList(count, cache);
    }

    @Override
    @Transactional(readOnly = true)
    public List<WmsWork> findByPhone(int count, String phone) {
        return this.dao.findByPhone(count, phone);
    }

    @Override
    @Transactional(readOnly = true)
    public WmsWork findById(Long id) {
        return dao.findById(id);
    }

    @Override
    public WmsWork save(WmsWork bean) {
        return dao.save(bean);
    }

    @Override
    public WmsWork update(WmsWork bean) {
        Updater updater = new Updater(bean);
        bean = this.dao.updateByUpdater(updater);
        return bean;
    }

    @Override
    public WmsWork deleteById(Long id) {
        return this.dao.deleteById(id);
    }

    @Override
    public WmsWork[] deleteByIds(Long[] ids) {
        WmsWork[] beans = new WmsWork[ids.length];
        int i = 0;
        for (int len = ids.length; i < len; i++) {
            beans[i] = deleteById(ids[i]);
        }
        return beans;
    }

    public void setDao(WmsWorkDao dao) {
        this.dao = dao;
    }
}
