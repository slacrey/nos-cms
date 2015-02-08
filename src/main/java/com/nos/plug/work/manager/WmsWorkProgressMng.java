package com.nos.plug.work.manager;

import com.nos.common.page.Pagination;
import com.nos.plug.work.entity.WmsWorkProgress;

import java.util.List;

public abstract interface WmsWorkProgressMng {
    public abstract Pagination getPage(int pageNo, int pageSize);

    public abstract List<WmsWorkProgress> getList(int count, boolean cache);

    public abstract List<WmsWorkProgress> findByWorkId(Long workId);

    public abstract WmsWorkProgress findById(Long id);

    public abstract WmsWorkProgress save(WmsWorkProgress bean);

    public abstract WmsWorkProgress update(WmsWorkProgress bean);

    public abstract WmsWorkProgress deleteById(Long id);

    public abstract WmsWorkProgress[] deleteByIds(Long[] ids);
}