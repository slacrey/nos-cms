package com.nos.plug.reserve.dao;

import com.nos.common.hibernate3.Updater;
import com.nos.common.page.Pagination;
import com.nos.plug.reserve.entity.CmsReserve;

import java.util.List;

public abstract interface CmsReserveDao {
    public abstract Pagination getPage(int paramInt1, int paramInt2);

    public abstract List<CmsReserve> getList(int paramInt, boolean paramBoolean);

    public abstract CmsReserve findById(Integer paramInteger);

    public abstract CmsReserve save(CmsReserve paramCmsTest);

    public abstract CmsReserve updateByUpdater(Updater<CmsReserve> paramUpdater);

    public abstract CmsReserve deleteById(Integer paramInteger);
}