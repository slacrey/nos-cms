package com.nos.plug.reserve.manager.impl;

import java.util.Date;
import java.util.List;

import com.nos.common.hibernate3.Updater;
import com.nos.common.page.Pagination;
import com.nos.core.entity.CmsSite;
import com.nos.core.entity.CmsUser;
import com.nos.plug.reserve.dao.CmsReserveDao;
import com.nos.plug.reserve.entity.CmsReserve;
import com.nos.plug.reserve.manager.CmsReserveMng;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CmsReserveMngImpl implements CmsReserveMng {

    private CmsReserveDao dao;

    @Transactional(readOnly = true)
    public Pagination getPage(int pageNo, int pageSize) {
        Pagination page = this.dao.getPage(pageNo, pageSize);
        return page;
    }

    @Transactional(readOnly = true)
    public List<CmsReserve> getList(int count, boolean cache) {
        return this.dao.getList(count, cache);
    }

    @Transactional(readOnly = true)
    public CmsReserve findById(Integer id) {
        CmsReserve entity = this.dao.findById(id);
        return entity;
    }

    public CmsReserve save(CmsReserve bean) {
        this.dao.save(bean);
        return bean;
    }

    @Override
    public CmsReserve saveFront(CmsSite site, CmsUser user, Integer siteId, String name, String phone, String ip, String description) {
        CmsReserve cmsReserve = new CmsReserve();
        cmsReserve.setName(name);
        cmsReserve.setCreateTime(new Date());
        cmsReserve.setIp(ip);
        cmsReserve.setDescription(description);
        cmsReserve.setPhone(phone);
        cmsReserve.setSite(site);
        cmsReserve.setUser(user);

        return save(cmsReserve);
    }

    public CmsReserve update(CmsReserve bean) {
        Updater updater = new Updater(bean);
        bean = this.dao.updateByUpdater(updater);
        return bean;
    }

    public CmsReserve deleteById(Integer id) {
        CmsReserve bean = this.dao.deleteById(id);
        return bean;
    }

    public CmsReserve[] deleteByIds(Integer[] ids) {
        CmsReserve[] beans = new CmsReserve[ids.length];
        int i = 0;
        for (int len = ids.length; i < len; i++) {
            beans[i] = deleteById(ids[i]);
        }
        return beans;
    }

    @Autowired
    public void setDao(CmsReserveDao dao) {
        this.dao = dao;
    }
}