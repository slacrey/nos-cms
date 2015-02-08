package com.nos.plug.work.dao;

import com.nos.common.hibernate3.Updater;
import com.nos.common.page.Pagination;
import com.nos.plug.work.entity.WmsWorkProgress;

import java.util.List;

public abstract interface WmsWorkProgressDao {

    public abstract Pagination getPage(int pageNo, int pageSize);

    public abstract List<WmsWorkProgress> getList(int count, boolean cache);

    public abstract List<WmsWorkProgress> findByWorkId(Long workId);

    public abstract WmsWorkProgress findById(Long id);

    public abstract WmsWorkProgress save(WmsWorkProgress bean);

    public abstract WmsWorkProgress updateByUpdater(Updater<WmsWorkProgress> paramUpdater);

    public abstract WmsWorkProgress deleteById(Long id);
}