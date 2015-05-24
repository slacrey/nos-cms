package com.nos.plug.work.manager;

import com.nos.common.page.Pagination;
import com.nos.plug.work.entity.WmsWork;

import java.util.List;

public abstract interface WmsWorkMng {
    public abstract Pagination getPage(int pageNo, int pageSize);

    public abstract List<WmsWork> getList(int count, boolean cache);

    public abstract List<WmsWork> findByPhone(int count, String phone);

    public abstract List<WmsWork> findByPhone(int count, String phone, String idNumber);

    public abstract WmsWork findById(Long id);

    public abstract WmsWork save(WmsWork bean);

    public abstract WmsWork update(WmsWork bean);

    public abstract WmsWork deleteById(Long id);

    public abstract WmsWork[] deleteByIds(Long[] ids);
}