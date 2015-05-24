package com.nos.plug.work.dao;

import com.nos.common.hibernate3.Updater;
import com.nos.common.page.Pagination;
import com.nos.plug.work.entity.WmsWork;

import java.util.List;

public abstract interface WmsWorkDao {
    public abstract Pagination getPage(int pageNo, int pageSize);

    public abstract List<WmsWork> getList(int count, boolean cache);

    public abstract WmsWork findById(Long paramInteger);

    public abstract List<WmsWork> findByPhone(int count, String phone);

    public abstract List<WmsWork> findByPhone(int count, String phone, String idNumber);

    public abstract WmsWork save(WmsWork paramCmsTest);

    public abstract WmsWork updateByUpdater(Updater<WmsWork> paramUpdater);

    public abstract WmsWork deleteById(Long id);
}