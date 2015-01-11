package com.nos.plug.reserve.manager;

import com.nos.common.page.Pagination;
import com.nos.core.entity.CmsSite;
import com.nos.core.entity.CmsUser;
import com.nos.plug.reserve.entity.CmsReserve;

import java.util.List;

public abstract interface CmsReserveMng {
    public abstract Pagination getPage(int paramInt1, int paramInt2);

    public abstract List<CmsReserve> getList(int paramInt, boolean paramBoolean);

    public abstract CmsReserve findById(Integer paramInteger);

    public abstract CmsReserve save(CmsReserve paramCmsTest);

    public abstract CmsReserve saveFront(CmsSite site, CmsUser user, Integer siteId, String name, String phone, String ip, String description);

    public abstract CmsReserve update(CmsReserve paramCmsTest);

    public abstract CmsReserve deleteById(Integer paramInteger);

    public abstract CmsReserve[] deleteByIds(Integer[] paramArrayOfInteger);
}